#!/usr/bin/env node
/*
 * Genera Veyra_Catalogo_Cartas.md a partir de los datos de cartas del
 * motor (Veyra.html) — misma fuente de verdad, cero duplicación manual.
 * Correr de nuevo cada vez que cambien cartas: `node generate_catalogo.js`
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const html = fs.readFileSync(path.join(ROOT, "Veyra.html"), "utf-8");
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) throw new Error("No se encontró el <script> en Veyra.html");
let code = scriptMatch[1];

// Cortamos el script justo antes de la primera línea que toca el DOM
// (function newPlayer) — todo lo anterior (FACTIONS, LIB, SOLDIER_RANKS,
// soldierPool, poolForFaction, poolEntry, copyLimit) es puro dato/función pura.
const cutMarker = "function newPlayer(";
const cutIdx = code.indexOf(cutMarker);
if (cutIdx === -1) throw new Error("No se encontró el marcador de corte '" + cutMarker + "' — revisar Veyra.html");
code = code.slice(0, cutIdx);
// `const`/`let` de nivel superior no quedan como propiedades del sandbox al correr con vm — los exponemos a mano.
code += "\nthis.FACTIONS=FACTIONS; this.LIB=LIB; this.SOLDIER_RANKS=SOLDIER_RANKS; this.soldierPool=soldierPool; this.poolForFaction=poolForFaction; this.poolEntry=poolEntry; this.copyLimit=copyLimit;\n";

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const { FACTIONS, LIB, soldierPool, copyLimit } = sandbox;
if (!FACTIONS || !LIB || !soldierPool || !copyLimit) throw new Error("Extracción incompleta del motor — revisar cutMarker");

const FACTION_ORDER = ["alderium", "qashir", "brasshaven", "koren", "caelum", "nomadas"];
const TYPE_LABEL = { criatura: "Criatura", hechizo: "Hechizo", runa: "Runa", reliquia: "Reliquia", recuerdo: "Recuerdo" };
const TYPE_FOLDER = { criatura: "criaturas", hechizo: "hechizos", runa: "runas", reliquia: "reliquias", recuerdo: "recuerdos" };
const SUBTYPE = { automata: "Autómata" }; // por clave de LIB

function slug(name) {
  return name
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "") // quita tildes
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}
function imgSlot(fac, key, def) {
  const folder = TYPE_FOLDER[def.type];
  const perFaction = def.type === "criatura" || def.type === "hechizo";
  const dir = perFaction ? `assets/cards/${folder}/${fac}` : `assets/cards/${folder}`;
  return `${dir}/${fac}_${def.type}_${slug(def.name)}.png`;
}
function rarezaLabel(def) {
  if (def.type !== "criatura") return TYPE_LABEL[def.type];
  if (def.rarity === "heroe") return "Héroe (legendaria)";
  if (def.rarity === "especialista") return "Especialista (poco común)";
  return "Soldado (común)";
}

function poolForFactionLocal(fac) {
  const list = [];
  for (const k in LIB) if (LIB[k].fac === fac) list.push({ key: k, def: LIB[k] });
  list.push(...soldierPool(fac));
  return list;
}

let out = [];
out.push("# Veyrá — Catálogo de cartas del set base");
out.push("");
out.push("Generado automáticamente desde `Veyra.html` (misma fuente de verdad que el motor) por `generate_catalogo.js`. **No editar a mano** — correr `node generate_catalogo.js` de nuevo tras cualquier cambio de cartas y commitear el resultado.");
out.push("");
out.push(`Generado: ${new Date().toISOString().slice(0, 10)}`);
out.push("");

for (const fac of FACTION_ORDER) {
  const f = FACTIONS[fac];
  out.push(`## ${f.name}`);
  out.push("");
  const pool = poolForFactionLocal(fac).sort((a, b) => a.def.cost - b.def.cost || a.def.name.localeCompare(b.def.name));
  out.push("| Carta | Tipo | Subtipo | Rareza | Costo | ATK/VIDA | Palabras clave | Copias máx. | Set | Imagen esperada |");
  out.push("|---|---|---|---|---|---|---|---|---|---|");
  const hasHalvar = pool.some(e => e.def.flag === "halvar");
  for (const { key, def } of pool) {
    const subtype = SUBTYPE[key] || "";
    const stats = def.type === "criatura" ? `${def.atk}/${def.vida}` : "—";
    const kw = (def.kw || []).join(", ") || "—";
    const lim = (def.type === "recuerdo" && hasHalvar) ? "1 (2 con Halvar en el mazo)" : copyLimit(key);
    const set = "Base";
    out.push(`| ${def.name} | ${TYPE_LABEL[def.type]} | ${subtype || "—"} | ${rarezaLabel(def)} | ${def.cost} | ${stats} | ${kw} | ${lim} | ${set} | \`${imgSlot(fac, key, def)}\` |`);
  }
  out.push("");
  out.push("**Texto de reglas:**");
  out.push("");
  for (const { def } of pool) {
    if (def.txt) out.push(`- **${def.name}:** ${def.txt}`);
  }
  out.push("");
}

// ---- Contenido de expansión (no implementado en el motor todavía) ----
out.push("---");
out.push("");
out.push("## Contenido de expansión (fuera del set base — no implementado en el motor)");
out.push("");
out.push("Estas cartas están definidas en `Veyra_Sistema_de_Juego.md` (sección 5) y en `Veyra_Lore_Notas.md`, pero **no existen todavía en `Veyra.html`** — quedan documentadas acá para que el catálogo sea la referencia completa.");
out.push("");
out.push("| Carta | Facción | Tipo | Costo | Set | Nota |");
out.push("|---|---|---|---|---|---|");
out.push("| Piedra de Sigrun | Nómadas | Reliquia | 2 | Expansión | Se transforma en \"Sigrun, Runa de la Victoria\" si el jugador identifica correctamente a Eratiel o a los Nómadas (Requisito de Recuerdo). |");
out.push("| Sigrun, Runa de la Victoria | Nómadas | Runa | — (nace de la transformación) | Expansión | Única Runa que rompe la regla de \"una por facción\". Runa viva — ver Veyra_Lore_Notas.md sección 2.5. |");
out.push("");

fs.writeFileSync(path.join(ROOT, "Veyra_Catalogo_Cartas.md"), out.join("\n") + "\n", "utf-8");
console.log("Veyra_Catalogo_Cartas.md generado (" + FACTION_ORDER.reduce((n, fac) => n + poolForFactionLocal(fac).length, 0) + " cartas del set base).");
