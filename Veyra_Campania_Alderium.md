# Campaña de Alderium — "El Precio del Alba"
### Documento de diseño maestro · 12 expediciones

**Estado:** propuesta para aprobación. La expedición 1 ya existe en el juego.
**Formato técnico:** cada expedición es un grafo `game-graph-map` (10–16 nodos, máx. 2 salidas
por nodo, swipe estilo Reigns) convertido con `convertGraphMap` y encadenado en
`CAMPAIGN_CHAINS.alderium`.

---

## 1. El arco: un descenso

El jugador es **Darian Voln**. La campaña no cuenta la historia de un villano: cuenta cómo un
soldado leal, con razones justas, termina liderando una invasión. Cada expedición le da al
jugador un motivo real para obedecer — y le muestra, de reojo, el costo. El remate es que el
jefe final de la campaña de Qashir es Darian: quien juegue ambas campañas pelea la misma
batalla desde los dos lados.

**Estructura emocional en tres actos:**

- **Acto I — La lealtad (exp. 1–4):** la vida de la guardia. Alderium se siente justo,
  ordenado, digno de servir. El jugador gana rangos y afecto por la ciudad.
- **Acto II — La grieta (exp. 5–8):** la escasez de plasma es real; el miedo también. Las
  decisiones del trono empiezan a incomodar. El jugador ve las costuras pero tiene razones
  para seguir.
- **Acto III — La marcha (exp. 9–12):** las caravanas de guerra parten hacia el este. Ya no
  hay vuelta atrás. La última batalla se libra en las minas — la misma que el jugador de
  Qashir librará desde el otro bando.

**Reglas de lore sensible (obligatorias):** el dios invisible no se representa jamás. Terra
Caelum, las siete travesías y la runa bajo el trono NO se nombran; solo se permite la
referencia oblicua «lo que Alderium hizo en el norte» (exp. 5), sin explicación. Nadie
en-mundo sabe lo de la runa.

---

## 2. Las 12 expediciones

| # | Expedición | Tema / Beat narrativo | Jefe (nodo final) | Recompensa final | IA |
|---|---|---|---|---|---|
| 1 | **El Juramento** *(existe)* | Tutorial. El Coliseo; el duelo contra Rhaen Iveros. | Rhaen Iveros | Pretoriano del Alba | 1–2 |
| 2 | **La Patrulla de los Distritos** | La ciudad por dentro. Orden, mercado, el incidente de Lior: un niño ladrón que la guardia deja ir. Primer gesto humano de Darian. | **Cassia, Capitana de la Ronda** (duelo de honor) | Isolde (2ª copia) o carta nueva | 2 |
| 3 | **El Templo del Distrito Bajo** | Ruinas anteriores al trono. Símbolos que nadie sabe leer. Atmósfera, no revelación: preguntas sin respuesta que siembran el hilo global. | Guardián ciego del templo (criatura antigua) | Reliquia nueva (Estandarte del Alba) | 2 |
| 4 | **La Ruta de Caravanas** | Escoltar suministros. Asaltantes desesperados, no malvados: roban comida. Primera orden incómoda — «sin prisioneros» — que Darian puede matizar. | Jefa de los asaltantes | Soldado élite nuevo (Primera Línea) | 2–3 |
| 5 | **La Frontera Norte** | Frío. Un fuerte medio abandonado. Veteranos que beben y callan. Aquí y solo aquí: «lo que Alderium hizo en el norte» — una frase, sin contexto, y la orden de no preguntar. | **Veterana renegada del Norte** | Muralla (mejora) o carta nueva defensiva | 3 |
| 6 | **La Escasez** | El plasma se raciona. Disturbios en los distritos bajos; la guardia contiene a su propia gente. La causa de Alderium se vuelve comprensible — y su método, brutal. | Cabecilla de los disturbios — una madre de los distritos bajos (duelo que nadie quiere ganar) | Decreto de Contención (variante) | 3 |
| 7 | **La Diplomacia de Kóren** | Embajada al reino vecino. Protocolo, orgullo y fracaso: Kóren se niega. El jugador ve que la guerra se decide en una sala, no en un campo. | **Serena, Tejedora de Leyes** (duelo ceremonial) | Primera carta de Kóren (coleccionable, inutilizable aún: anticipo) | 3–4 |
| 8 | **Los Arsenales** | Forjas día y noche. Ascenso de Darian a Primera Línea. El Magíster de armas pregunta para qué tanto acero; nadie responde. Última expedición «en casa». | Prueba de rango (duelo vs. **Instructora Pretoriana**) | Ascenso: carta Darian mejora o segunda copia | 4 |
| 9 | **Las Caravanas de Guerra** | La marcha al este comienza. Polvo, kilómetros, deserciones. Darian ejecuta órdenes que ya no defiende en voz alta. (Esto es lo que Qashir detecta: aquí se tocan las dos campañas.) | Desertores emboscando la columna | Tiberon (2ª copia) o soldado élite | 4 |
| 10 | **La Marcha sobre Brasshaven** | Territorio enemigo. Sabotajes, minas de humo, la ciudad a la vista. Enemigos mundanos de Brasshaven (milicias, autómatas menores). | Milicia Técnica atrincherada | Carta Brasshaven coleccionable (botín de guerra) | 4 |
| 11 | **Las Puertas de Brasshaven** | El asalto. La batalla que en la campaña de Qashir se juega como «defensa que fracasa» — acá se gana, y ganar se siente mal. Textos desde el lado del invasor. | Magnus Ferro, Capataz de la Franja | Carta Brasshaven (Magnus coleccionable) | 4–5 |
| 12 | **Las Minas** | Final. La resistencia unida (Qashir + Brasshaven) se repliega a las minas. Darian entra a terminar la guerra. Espejo exacto de la expedición final de Qashir. | **Zahira, la Apostadora** (comandando la resistencia) | Reliquia legendaria de Alderium (nueva: el Filo Áureo de Darian) | 5 |

**Nota al espejo (exp. 11–12):** la campaña de Qashir ya definida recorre estos mismos hechos
desde el otro bando (defensa que fracasa con `loseAdvances`, retirada a las minas, Darian como
jefe final). Los textos deben escribirse en pareja para que los detalles coincidan — mismos
lugares, mismas horas, mismos nombres.

---

## 3. Curva de dificultad y anti-tortuga

- IA nivel 1–2 (exp. 1–4), 3 (5–7), 4 (8–10), 4–5 (11–12).
- Mazos de jefe: desde la exp. 8, los jefes usan mazos de 40 cartas o inmunidad a fatiga
  (pendiente de decisión técnica) para cerrar la estrategia de atrincherarse y ganar por
  fatiga.
- Desde la exp. 8, ganar exige mazo editado: las recompensas previas deben ser
  mecánicamente necesarias, no decorativas.

## 4. Necesidades de cartas (hueco a cubrir)

Alderium tiene hoy ~6 cartas con nombre + soldados genéricos: **no alcanza para alimentar 12
recompensas**. Antes de producir las expediciones 2+ hay que expandir el pool de Alderium
(rumbo a 30), priorizando: 1 reliquia (Estandarte del Alba), 1 soldado élite Primera Línea,
1 carta defensiva nueva, la reliquia legendaria final (Filo Áureo), y variantes/segundas
copias útiles. Diseño de detalle en el prompt de pool correspondiente.

## 5. Plan de producción (tandas)

1. **Tanda A:** pool Alderium ampliado (prompt de cartas, sin motor).
2. **Tanda B:** expediciones 2–3 (grafos + contenido completo) → prueba con playtester.
3. **Tanda C:** expediciones 4–6. **Tanda D:** 7–9. **Tanda E:** 10–12 (escritas en pareja
   con las expediciones finales de Qashir).
4. Ajustes de motor acumulados viajan con la tanda B: barajado de lados en bifurcaciones,
   etiquetas Mazo/Mano, clave real en el autotest del conversor, decisión anti-fatiga de
   jefes.

## 7. Regla 50/50 (canon de diseño, aplica a todo el juego)

Paridad de género en tres niveles, por facción: (a) **personajes con nombre** (héroes,
especialistas, jefes de expedición, protagonistas de campaña — meta global: 3 campañas
protagonizadas por mujeres: Lyra Vale en Brasshaven, Vessa en Nómadas, y una de Kóren/Caelum);
(b) **tropas**: los nombres de soldado se declinan con género real (Arquera de la Muralla /
Lancero) hasta quedar mitad y mitad, sin duplicar cartas en versión él/ella; los colectivos
(Milicia, Primera Línea) son neutros; (c) **rangos**: los títulos se declinan según quien los
porta (Portadora de Filo Común, Instructora Pretoriana) — el rango es el mismo, la persona
cambia. La paridad viaja también al arte. Como la base ya commiteada de Alderium es
mayoritariamente masculina, las cartas nuevas de esta facción serán mayoría femenina hasta
compensar.

## 6. Qué NO hace esta campaña

- No nombra Terra Caelum, la runa del trono, las travesías ni al dios.
- No convierte a Darian en caricatura: cada orden cruel tiene una razón que un soldado real
  aceptaría.
- No usa la palabra «mazmorra» en ningún texto (vocabulario: lugar/lugares, salir al mundo).
- No mezcla facciones en el mazo del jugador: botines de otras facciones son coleccionables
  que esperan su campaña.
