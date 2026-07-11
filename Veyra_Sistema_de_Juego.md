# Veyrá — Sistema de Juego (v1)

## 1. Reglas base

**Maná:** automático. El tope de maná sube +1 cada turno propio, hasta un máximo de **10** (fijado — referencia estándar del género, da margen para una curva completa de costos 1-10 antes de topar). No existen cartas de maná que se jueguen desde la mano — el Cristal de Maná de tu lista original se reconvierte en un efecto puntual ("gana +1 maná este turno") en vez de un recurso permanente, para no duplicar el sistema automático.

**Vida inicial:** 20 puntos por jugador (fijado para poder simular combates; estándar del género).

**Combate:** ataque directo salvo defensor fijo.
- Al declarar ataque, el atacante elige: golpear al jugador rival directamente, o golpear a una criatura rival.
- Si el rival tiene una criatura marcada como **Guardián** (palabra clave), los ataques deben dirigirse primero a los Guardianes — no se puede atacar al jugador ni a otra criatura mientras exista un Guardián en el campo.
- No hay bloqueo libre: el defensor no elige interceptar, solo puede preparar Guardianes de antemano.
- **Resultado del combate contra una criatura:** es mutuo — ambas criaturas se infligen daño simultáneamente según su ATK (salvo Escudo u otro efecto que lo impida). No es una ejecución unidireccional.
- **Persistencia del daño:** el daño a VIDA es acumulativo y persiste entre turnos (modelo Hearthstone) — no se resetea al pasar turno como en Magic. Una criatura muere al llegar a 0; se cura solo por efectos explícitos.
- **Múltiples Guardianes rivales:** el atacante elige libremente a cuál de ellos dirigir el ataque — no hay orden forzado entre Guardianes.
- **Buffs de estadísticas (+X/+Y):** se aplican tanto al máximo como al valor actual — un buff de vida "cura" daño ya sufrido en esa misma proporción.

*(Las últimas cuatro reglas de combate se fijaron a partir del Playtest #1 — sección 18 — para poder resolver una partida real. Son provisionales, ajustables si en mesa se sienten mal.)*

**Mazo:** 40 cartas por mazo. El jugador arma su mazo eligiendo una facción principal (o combinando, a definir). Cada facción juega mecánicamente distinto — esto es el corazón de la construcción de mazos.

**Turno:** robar carta → ganar +1 tope de maná → jugar cartas → declarar ataques → pasar turno.

---

## 2. Tipos de carta (definición final, sin solapamientos)

| Tipo | Qué es | Función |
|---|---|---|
| **Criatura** | Personaje del libro | Ataca, defiende, tiene ATK/VIDA |
| **Hechizo** | Efecto de un solo uso | Se descarta al usarse |
| **Runa** | Identidad de una civilización entera | Cambia reglas, no da stats. Una por facción, extremadamente escasa |
| **Reliquia** | Objeto individual ligado a un personaje/evento | Efecto acotado a una sola capa (combate, exploración o narrativa) |
| **Recuerdo** | Mecanismo de conocimiento, no objeto | Se activa demostrando que el jugador recuerda el lore; potencia o desbloquea otras cartas |
| **Carta de exploración** | Lugar del libro | Se ve una a la vez, decisión izquierda/derecha, sin mapa visible |

*Excepción a "una Runa por facción": Sigrun (Nómadas) rompe voluntariamente esta regla — ver sección 5. Es intencional, no un error de diseño: forma parte de su rareza narrativa (nace de una transformación, no se juega desde la mano).*

---

## 3. Plantilla de carta

```
Nombre:
Facción:
Costo de maná:
Tipo:
[Si Criatura] Ataque / Vida:
Palabras clave:
Texto de efecto:
[Si aplica] Requisito de Recuerdo:
```

**Palabras clave iniciales (inspiradas en Magic, adaptadas y simplificadas):**
- **Guardián** — debe ser atacado antes que cualquier otro objetivo (reemplaza el bloqueo libre)
- **Prisa** — puede atacar el turno en que entra al campo
- **Escudo** — bloquea el próximo daño que recibiría
- **Silencio** — anula las palabras clave y efectos de una criatura
- **Vínculo** — su efecto solo se activa si tenés otra carta específica en juego (para combos de facción)
- **Oculto** — sus estadísticas reales no se revelan hasta que ataca o es atacada (para Eratiel y cartas Nómadas)

---

## 4. Identidad mecánica por facción

| Facción | Estilo de juego |
|---|---|
| **Alderium** | Control y orden — buffs, protección, Guardianes fuertes |
| **Qashir** | Recursos y riesgo — sacrificio, ganancia de maná, agresividad |
| **Brasshaven** | Ingeniería — reanimar, estructuras, Cristales/artefactos |
| **Kóren** | Memoria antigua — Recuerdos baratos y frecuentes, curación |
| **Caelum / Terra Caelum** | Runas "oficiales" — efectos que alteran reglas, buff/debuff de sistema |
| **Nómadas** | Impredecibles — cartas Ocultas, sin patrón fijo, la única facción sin Runa propia... hasta Sigrun |

---

## 5. Cartas de prueba de concepto: Sigrun y Eratiel

**Nota canónica:** la Piedra de Sigrun y Sigrun, Runa de la Victoria son **contenido de la primera expansión, no del set base** (ver sección 5.1). Pertenecen a **Nómadas** — no a Alderium ni a ninguna otra facción; es intencional que sea la única Runa nómada y que rompa la regla de "una Runa por facción" (su gracia narrativa es justamente esa excepción). Eratiel sí es del set base (sección 5.2, héroe #16).

### Piedra de Sigrun
```
Facción: Nómadas
Costo: 2
Tipo: Reliquia
Texto: Al entrar en juego, no tiene efecto.
Requisito de Recuerdo: Si el jugador identifica correctamente
quién es Eratiel o qué representan los Nómadas, la Piedra de
Sigrun se transforma en la carta "Sigrun, Runa de la Victoria".
```

### Sigrun, Runa de la Victoria
```
Facción: Nómadas (única — no fue creada por Terra Caelum)
Costo: — (no se juega desde la mano, nace de la transformación)
Tipo: Runa
Texto: Ignora la restricción de "una Runa por facción". Mientras
Sigrun esté en juego, Eratiel no puede ser Silenciado ni Oculto
deja de aplicarle.
```

### Eratiel, el Guerrero sin Historia
```
Facción: Nómadas
Costo: 3
Tipo: Criatura
Ataque / Vida: 4 / 2 (Oculto — el rival nunca ve estos números
en pantalla; quedan fijados acá para diseño y balance)
Palabras clave: Oculto
Texto: Sus estadísticas reales se revelan solo al atacar, ser
atacado, o cuando Sigrun entra en juego.
```
**Por qué 4/2:** alto riesgo/alto impacto en vez de equilibrado —
para costo 3, pega más fuerte y muere más fácil que el promedio,
reforzando la idea de "guerrero sin historia" impredecible en vez
de un vainilla prolijo. Rompe la curva en ambas direcciones a la
vez, coherente con la identidad Nómada de la sección 4.

---

## 5.1 Estructura oficial del set base (canónico)

Esto fija la forma del pool coleccionable. **No es provisional** — a diferencia de números sueltos de balance (que sí se ajustan en playtest), la estructura de rareza y cantidades es diseño cerrado.

**Pool por facción: 30 cartas** (180 en el set base completo, 6 facciones). Composición exacta, igual en las seis:

| Rareza / tipo | Cantidad | Copias máx. por mazo |
|---|---|---|
| Soldados (criatura común, sin nombre propio) | 12 | 3 |
| Especialistas (criatura poco común, con oficio) | 5 | 2 |
| Héroes (criatura legendaria única, con nombre y lore) | 3 | 1 |
| Hechizos | 5 | 2 |
| Reliquias | 3 | 2 |
| Recuerdos | 1 | 1 |
| Runas | 1 | 1 |
| **Total** | **30** | — |

Los "Soldados" son el equivalente a las cartas "vainilla" ya usadas en el prototipo (ej. "Recluta", "Guerrero") — mismo rol de curva de maná, ahora con nombre de rareza oficial. Los Héroes de las 18 cartas de prueba (sección 17) y los 18 nuevos de la sección 5.2 son la rareza más alta del juego.

**Regla de mazo (ya vigente, sección 6): 40 cartas exactas, mono-facción.** Con un pool de 30 por facción y estos límites de copia, un mazo de 40 nunca puede ser "todo lo mismo" — obliga a variedad natural sin necesitar una regla de mínimos artificial.

**Runa base de los Nómadas (nueva, set base — no confundir con Sigrun, que es de expansión):**
```
Nombre: Senda de los Mil Pasos
Facción: Nómadas | Costo: 4 | Tipo: Runa
Texto: Mientras esté en juego, tus criaturas Nómadas cuestan 1
maná menos el turno en que se juegan (mínimo 1).
```
*A balancear en playtest — mismo espíritu que "Ley de Terra Caelum": una Runa por facción, efecto de sistema, no de stats puntuales.*

---

## 5.2 Los 18 héroes del set base (3 por facción)

Máxima rareza del juego: 1 copia por mazo. Cinco ya existían como cartas de prueba (sección 17) y se **promueven** a héroe sin cambiar su mecánica (excepto Guardiana de las Alturas, que se renombra). Los otros 13 son nuevos — stats y textos sugeridos, a balancear en playtest como el resto del set.

### Alderium
```
1. Rhaen, Escudo del Trono — YA EXISTE (sección 17). Costo 4 | 2/6 | Guardián.
   Tus otros Guardianes ganan +0/+1.
   Nota de canon (Veyra_Lore_Notas.md sección 3): esta carta representa
   la etapa temprana de Rhaen en Alderium — su arco en el libro lo saca
   de la facción. Expansión futura: "Rhaen, Portador de la Hoja Solar".

2. Isolde, Voz del Decreto — NUEVA. Costo 5 | 3/5.
   Cuando una criatura enemiga ataca (a Isolde, a otra criatura o al
   jugador), Isolde le inflige 1 de daño antes de que se resuelva el combate.

3. Tiberon, Portaestandarte del Alba — NUEVA. Costo 4 | 2/4.
   Tus otros Guardianes ganan +1/+1 (en vez del +0/+1 de Rhaen — si
   tenés ambos en juego, un Guardián puede llegar a +1/+2).
```

### Qashir
```
4. Zahira, la Apostadora — YA EXISTE (sección 17, renombrada — ver Veyra_Lore_Notas.md sección 3). Costo 3 | 4/2.
   Al entrar: podés sacrificar otra criatura para ganar +1 maná este turno.

5. Rasim, Príncipe de los Espejismos — NUEVA. Costo 5 | 3/3.
   Al entrar, creá dos Espejismos 1/1 que desaparecen al final de tu
   próximo turno.

6. Nadira, la que Vende el Viento — NUEVA. Costo 4 | 2/3.
   Habilidad activada, una vez por turno: pagá 2 de vida para robar una carta.
```

### Brasshaven
```
7. Lyra Vale, la Inventora — YA EXISTE (sección 17). Costo 4 | 3/3.
   Al entrar: devolvé una criatura de tu cementerio al campo con -1/-1.

8. Magnus Ferro, Capataz de la Franja — NUEVA. Costo 6 | 4/4.
   Al entrar, devolvé al campo al último Autómata aliado destruido.

9. Unidad Prima, el Primer Autómata — NUEVA. Costo 3 | 1/3.
   Gana +1/+1 permanente cada vez que ligás una Reliquia a una
   criatura aliada (incluida ella misma).
```

### Kóren
```
10. Bjorna, Madre de las Piedras — NUEVA. Costo 5 | 2/6.
    Al final de tu turno, curá 2 a tu héroe o a una criatura aliada.

11. Halvar, el que Recuerda — NUEVA. Costo 4 | 3/4.
    Tus cartas de Recuerdo cuestan 0. Mientras Halvar esté en tu mazo,
    podés incluir 1 copia adicional de Recuerdo (2 en total en vez de 1).

12. El Astado del Valle — NUEVA. Costo 7 | 8/8.
    Entra dormido: no puede atacar durante tus dos primeros turnos
    con él en el campo (ni siquiera con Prisa).
    Nota de canon (Veyra_Lore_Notas.md sección 3): candidato a ser el
    único Espíritu que Kóren acepta (pendiente de confirmación del
    autor). Si lo es, la mecánica ya está alineada: entrar dormido es
    esperar como forma de fe.
```
*Nota: ninguna de las 3 cartas de prueba de Kóren (sección 17) era candidata natural a héroe — Anciana del Río Callado queda como Especialista del pool.*

### Caelum / Terra Caelum
```
13. Elyon, Juez del Cielo — PROMUEVE "Guardiana de las Alturas"
    (sección 17), renombrada. Costo 4 | 3/5 | Guardián.
    Cada vez que es atacada como Guardián y sobrevive, gana +1/+1 permanente.

14. Serena, Tejedora de Leyes — NUEVA. Costo 5 | 2/5.
    Mientras esté en el campo, el rival solo puede declarar un ataque por turno.

15. El Custodio del Anillo — NUEVA. Costo 6 | 3/7 | Guardián.
    Gana +0/+2 por cada Runa activa en juego (de cualquiera de los dos jugadores).
```

### Nómadas
```
16. Eratiel, el Guerrero sin Historia — YA EXISTE (sección 5). Costo 3 | 4/2 | Oculto.

17. Vessa, Cartógrafa de Rutas Muertas — NUEVA (renombrada — ver Veyra_Lore_Notas.md sección 3: colisión con Mara, madre de Nael en el libro). Costo 4 | 3/3.
    Al entrar, mirás las 3 cartas superiores del mazo del rival (sin alterarlas).

18. Yesid, el Último Portador — NUEVA. Costo 5 | 3/4 | Oculto.
    Cuando se revela (al atacar o ser atacado), la próxima carta que
    juegues este turno cuesta 0.
```

---

## 6. Construcción de mazos: mono-facción (decidido)

**Un mazo pertenece a una sola facción.** No se mezclan Alderium con Qashir ni ninguna combinación entre las seis.

Por qué:
- Cada facción ya tiene una identidad mecánica propia (control, sacrificio, ingeniería, memoria, reglas, ocultismo). Si se mezclan, esas identidades se diluyen y dos facciones distintas pueden terminar jugándose igual.
- Es más fácil de balancear: cada facción se ajusta como un bloque cerrado, sin tener que revisar miles de combinaciones cruzadas.
- Refuerza la narrativa: jugar Alderium se *siente* distinto a jugar Nómadas, porque en Veyrá también lo son.
- Dentro de una misma facción vas a tener margen de sobra para variar estrategia (agresivo, control, combo) sin necesitar otra facción — igual que en Magic un mazo mono-color bien construido tiene identidad fuerte.

Excepción a futuro (no cerrada todavía): cartas "neutrales" sin facción que cualquier mazo pueda incluir en cantidad limitada, si hace falta variedad. Se evalúa cuando tengamos las primeras 18 cartas jugadas en mesa.

---

## 6.1 Progresión de facciones: Campaña (decidido)

**Modelo Starcraft / Warcraft 3.** El jugador empieza con una sola facción disponible. Al completar su campaña, se desbloquea la siguiente. No se elige mazo libremente desde el inicio.

Cómo encaja con el resto del sistema:
- **No contradice la regla mono-facción (sección 6)** — al contrario, la refuerza: mientras estás en la campaña de Alderium, tu único mazo posible *es* Alderium, así que la identidad de facción se aprende a fondo antes de pasar a la siguiente.
- **Una vez desbloqueada, una facción queda desbloqueada para siempre** — en Duelo (vs IA o PvP) y Zona de Entrenamiento podés usar cualquier facción ya desbloqueada, no solo la "activa" de campaña. La restricción de progresión aplica al modo Historia/Exploración, no a los otros modos de juego.
- **Orden sugerido de campañas** (de más simple/introductoria a más compleja, dejando a Nómadas y Sigrun como cierre narrativo, ya que es la revelación más grande del lore):
  1. Alderium — control y orden, la más "estándar" para aprender las reglas base
  2. Qashir — introduce sacrificio y riesgo
  3. Brasshaven — introduce reanimar/estructuras, algo más táctico
  4. Kóren — introduce Recuerdos con más profundidad
  5. Caelum / Terra Caelum — introduce Runas "oficiales", reglas más complejas
  6. La Franja — zona de transición, prepara el terreno narrativo
  7. Nómadas — campaña final, con Sigrun y Eratiel como clímax

Este orden es una propuesta inicial — se puede reordenar cuando tengamos más definido el ritmo de dificultad de cada facción.

---

## 7. Filosofía de mundo: no cronológico (modelo Warcraft)

**El juego no sigue la línea de tiempo del libro.** El lore es la caja de herramientas (lugares, personajes, facciones, objetos, runas) — la historia que se vive jugando la construye cada jugador, no la novela.

Esto significa, en la práctica:

- **Los personajes del libro son utilizables como piezas, no como guion.** Podés jugar con Rhaen, Zahira o Eratiel en cualquier combinación, en cualquier momento, sin que eso implique "esto pasa antes o después" de algo del libro.
- **Los lugares son mapas, no capítulos.** Cada continente/región (Alderium, Qashir, Brasshaven, Kóren, Caelum, La Franja) es un mapa explorable de forma libre, con sus propias mazmorras y actividades adentro. El jugador elige a dónde ir, no sigue un orden 1-2-3.
- **La novela sigue existiendo en paralelo**, como lore ambiental: se puede contar historia de personajes, del mundo, de eventos — mediante Recuerdos, bibliotecas, diálogos — pero es opcional y nunca condiciona el avance del jugador ni lo obliga a una secuencia.
- **El canon crece sin atarse a la trama.** Justo como pediste antes ("cada capítulo nuevo puede volverse contenido jugable"), pero ahora explícitamente: contenido *nuevo e inventado para el juego* (monstruos, jefes, mazmorras) puede alimentar de vuelta al lore del libro más adelante, no solo al revés.

**Consecuencia para el diseño de mapas:** cada continente necesita su propio conjunto de mazmorras y actividades internas, navegables por cartas de exploración (izquierda/derecha, sin mapa visible dentro de la mazmorra), pero accesible desde un mapa general de continentes que sí es libre.

---

## 8. Bestiario original (fuera del canon, semillas para el lore)

Estos monstruos y jefes no existen todavía en el libro. Los invento como contenido de mazmorra — cada uno pensado para encajar temáticamente con su región, para que si más adelante los querés incorporar a la novela, ya tengan personalidad e identidad de facción.

### Biblioteca (La Franja / Terra Caelum)
**El Custodio de Páginas Muertas** — jefe. Un guardián hecho de libros y polvo que protege conocimiento olvidado. Mecánicamente: castiga al jugador que ataca sin "recordar" primero (encaja perfecto con tu mecánica de Recuerdo).

### Minas de Brasshaven
**Forjanto, el Autómata Olvidado** — jefe. Una máquina de minería abandonada que cobró una suerte de vida propia por error de ingeniería. Encaja con la identidad "ingeniería/reanimar" de Brasshaven.
**Chatarra Viviente** — monstruo común (mob), enjambres pequeños hechos de piezas sueltas; buenos para combates de relleno antes del jefe.

### Ruinas de Kóren
**La Voz sin Rostro** — jefe. Un espíritu antiguo que perdió su identidad; temáticamente ligado a la "memoria antigua" de Kóren — quizás su mecánica sea *robarle* Recuerdos al jugador en vez de dañar directamente.

### Cuevas y Desierto de Qashir
**Zahruk, el Devorador de Arena** — jefe. Una bestia de arena y cristal que habita las cuevas profundas.
**Escorpión de Cristal** — monstruo común del desierto abierto.

### Palacio de Alderium
**El Juez Silente** — jefe. Una armadura imperial vacía que sigue ejecutando "justicia" sin nadie dentro; encaja con el estilo de control/orden de Alderium.

### Taller oculto de Lyra (Brasshaven)
**El Autómata Aprendiz** — mini-jefe. Un invento temprano de Lyra que se activó solo y no sabe distinguir aliados de intrusos.

*Nota: esta lista es un punto de partida. Se puede seguir ampliando por continente a medida que definamos cuántas mazmorras tiene cada uno.*

---

## 9. Modos de juego

- **Historia / Exploración** — el modo principal. Mapa de continentes → mazmorras → cartas de exploración, sin orden cronológico obligatorio (ver sección 7).
- **Duelo vs IA** — enfrentamiento de cartas contra un mazo controlado por la máquina. Sirve tanto para practicar como para desafíos narrativos (ej. enfrentar a un personaje del lore en duelo directo dentro de una mazmorra).
- **Duelo PvP** — jugador contra jugador, mazo contra mazo, con las reglas de combate ya definidas (ataque directo salvo Guardián).
- **Zona de Entrenamiento** — sin consecuencias, sin progreso ni recompensas. Mazos de práctica prearmados por facción, para aprender mecánicas nuevas o probar combinaciones antes de arriesgarlas en Duelo o Historia.

---

## 10. Cuántas mazmorras por continente

Reparto no parejo, según cuánto lore ya existe de cada facción en los documentos que me diste — así ninguna se siente vacía ni sobrecargada, y no forzamos una cantidad pareja artificial:

| Facción / Continente | Mazmorras | Por qué |
|---|---|---|
| Alderium | 5 | Corte imperial, más personajes y lugares nombrados (Coliseo, Palacio) |
| Caelum / Terra Caelum | 4 | Biblioteca, ciudades flotantes — hub narrativo central |
| Qashir | 4 | Cuevas + Desierto ya nombrados, más margen para inventar |
| Brasshaven | 4 | Minas, túneles, taller de Lyra — ya tiene 3 lugares propios |
| Kóren | 4 | Templo, río, ruinas — buena base para memoria/curación |
| La Franja | 3 | Zona de frontera, menos lugares nombrados todavía |
| Nómadas | 2 | Sin ciudades fijas — pocos lugares pero con más peso narrativo (Piedra de Sigrun) |

**Total: 26 mazmorras** para el primer set completo. Ambicioso pero manejable, y deja espacio para crecer después sin sentir que faltó contenido desde el día uno.

---

## 11. Estructura de mazmorra (grafo de nodos)

Cada mazmorra es un grafo de cartas de exploración, y **cada nodo es un lugar con nombre propio**, no una bifurcación abstracta — el jugador ve algo como "El Jardín Oscuro" o "Los Pasos Quebrados", con su descripción corta, antes de elegir izquierda/derecha.

Además, **algunos nodos —no todos— disparan un encuentro** antes de dejar seguir eligiendo camino. Ese encuentro no siempre es el jefe de la mazmorra: es un combate corto contra **enemigos mundanos** (ver más abajo), pensado para dar ritmo y riesgo entre decisiones, sin ser el clímax de la mazmorra.

Ver `Veyra_Grafo_Mazmorra.mermaid` para el esquema visual actualizado. Estructura:

- **Entrada** → dos nodos nombrados iniciales (decisión real desde el inicio).
- Uno de ellos puede tener un **encuentro** (ej. Emboscada de Ladrones) antes de continuar.
- Ambos caminos se reencuentran en un **nodo de cruce** con nombre propio (ej. "El Cruce del Río Seco") — refuerza que ambos caminos importan, sin duplicar contenido infinito.
- Desde el cruce, dos caminos nuevos, uno con otro posible encuentro (ej. Bestias Salvajes).
- **Tres finales distintos:** Final A (jefe de facción, del bestiario original), Final B (tesoro oculto), Final C (recuerdo especial — condicionado a haber resuelto bien un encuentro anterior, no siempre accesible).

No todos los nodos necesitan encuentro — alternar nodos de solo decisión/lore con nodos de desafío es lo que le da ritmo a la mazmorra en vez de sentirse una cadena de combates.

---

## 11.1 Enemigos mundanos (distintos de los jefes de facción)

Estos no son personajes del canon ni jefes únicos de bestiario — son el "relleno" con el que se llenan los encuentros dentro del camino de la mazmorra. Reutilizables entre mazmorras y continentes, sin necesitar arte único por cada aparición.

| Enemigo | Descripción | Dónde aparece |
|---|---|---|
| **Bandido Errante** | Ladrón común, sin lealtad a ninguna facción | Cualquier mazmorra |
| **Mercenario Renegado** | Viste colores de una facción pero no pertenece a su ejército oficial (reskineable por facción cambiando solo el color) | Mazmorras cercanas a ciudades (Alderium, Brasshaven) |
| **Bestia Salvaje** | Animal agresivo genérico, sin trasfondo narrativo | Zonas naturales (Kóren, La Franja) |
| **Carroñero de Ruinas** | Criatura pequeña que habita sitios abandonados | Ruinas, mazmorras antiguas (Kóren, Caelum) |
| **Saqueador de Caravanas** | Grupo armado que ataca viajeros, sin bandera | Qashir (desierto/cuevas) |

Estos van en una carpeta de assets aparte de los jefes de facción — ver actualización de la sección 12.

---

## 12. Pipeline de assets gráficos — qué diseñar y cómo organizarlo

Estructura de carpetas sugerida (todo en PNG con fondo transparente donde aplique; fondos completos en JPG está bien):

```
/assets
  /cards
    /criaturas
      /alderium
      /qashir
      /brasshaven
      /koren
      /caelum
      /nomadas
    /hechizos
      /alderium
      /qashir
      /brasshaven
      /koren
      /caelum
      /nomadas
    /runas
    /reliquias
    /recuerdos
    /exploracion
      /alderium
      /qashir
      /brasshaven
      /koren
      /caelum
      /nomadas
  /bestiario
    /jefes_faccion
      /alderium
      /qashir
      /brasshaven
      /koren
      /caelum
      /nomadas
    /enemigos_mundanos
      (sin subcarpeta por facción — son reutilizables)
  /icons
    /keywords
    /recursos
  /backgrounds
    /mapas
    /mazmorras
    /ui
  /ui
    /frames
    /botones
```

### Convención de nombres

Formato: `faccion_tipo_nombre.png` (todo minúscula, sin espacios ni tildes, separado por guion bajo).

Ejemplos concretos ya con tu lore:
- `alderium_criatura_rhaen.png`
- `nomadas_criatura_eratiel.png`
- `nomadas_runa_sigrun.png`
- `nomadas_reliquia_piedra_de_sigrun.png`
- `brasshaven_criatura_lyra_vale.png`
- `koren_bestiario_la_voz_sin_rostro.png`
- `brasshaven_bestiario_forjanto.png`
- `alderium_exploracion_palacio_imperial.png`
- `mundano_bandido_errante.png` (sin prefijo de facción — reutilizable)
- `mundano_mercenario_renegado_alderium.png` (versión reskineada por facción, si querés diferenciar color)
- `mundano_bestia_salvaje.png`
- `mundano_carronero_ruinas.png`
- `mundano_saqueador_caravanas.png`

### Iconos (carpeta `/icons/keywords`, tamaño sugerido 128×128, fondo transparente)
- `icon_guardian.png`
- `icon_prisa.png`
- `icon_escudo.png`
- `icon_silencio.png`
- `icon_vinculo.png`
- `icon_oculto.png`

### Iconos de recurso (carpeta `/icons/recursos`)
- `icon_mana.png`
- `icon_ataque.png`
- `icon_vida.png`

### Iconos de facción (carpeta `/icons/faccion`, sugerido 128×128, fondo transparente) — hotspot circular del mapa mundial
- `icono_alderium.png`
- `icono_qashir.png`
- `icono_brasshaven.png`
- `icono_koren.png`
- `icono_caelum.png`
- `icono_nomadas.png`

### Botones de Ciudad Central (carpeta `/ui/botones`, sugerido rectangular ~3:1, JPG o PNG) — los 5 marcos de actividad, mismo archivo para las 6 ciudades (el marco ya lleva el acento de color)
- `boton_taberna.jpg`
- `boton_entrenamiento.jpg`
- `boton_duelo.jpg`
- `boton_cartas.jpg`
- `boton_mazmorras.jpg`

### Iconos de mazmorra (carpeta `/icons/mazmorra`, sugerido 128×128, fondo transparente) — hotspot rombo del mapa de mazmorras del continente
- `icono_mazmorra_<id>.png` (ej. `icono_mazmorra_alderium_piloto.png`)

### Icono de campaña (carpeta `/icons/faccion`, sugerido 128×128, fondo transparente) — hotspot circular destacado (dorado) en el mapa de mazmorras, uno por facción con campaña
- `icono_campana_<facción>.png` (ej. `icono_campana_alderium.png`)

### Fondos de mapa (carpeta `/backgrounds/mapas`, sugerido 1920×1080)
- `mapa_alderium.jpg`
- `mapa_qashir.jpg`
- `mapa_brasshaven.jpg`
- `mapa_koren.jpg`
- `mapa_caelum.jpg`
- `mapa_nomadas.jpg`
- `mapa_general_veyra.jpg` (mapa madre con los 6 continentes)

### Fondos de Ciudad Central (carpeta `/backgrounds/mapas`, sugerido 1920×1080 — falta agregar en la estructura de carpetas de más arriba, ya la usa el motor)
Una Ciudad Central por facción (sección 13): mismo layout de botones, distinto fondo.
- `ciudad_alderium.jpg`
- `ciudad_qashir.jpg`
- `ciudad_brasshaven.jpg`
- `ciudad_koren.jpg`
- `ciudad_caelum.jpg`
- `ciudad_nomadas.jpg`

### Fondos de mazmorra (carpeta `/backgrounds/mazmorras`, uno por nodo o uno genérico por mazmorra para empezar)
- `mazmorra_biblioteca.jpg`
- `mazmorra_minas_brasshaven.jpg`
- `mazmorra_ruinas_koren.jpg`
- `mazmorra_cuevas_qashir.jpg`
- `mazmorra_palacio_alderium.jpg`
- `mazmorra_taller_lyra.jpg`
- `mazmorra_alderium_piloto.jpg` — la mazmorra piloto que ya tiene motor jugable en `Veyra.html` (grafo de 8 nodos, jefe "El Juez Silente"); es de prueba, no reemplaza la lista de arriba cuando se diseñen las 5 mazmorras reales de Alderium.

### UI (carpeta `/ui`)
- `frame_criatura.png` (marco base para cartas de criatura, uno por facción si querés diferenciarlos: `frame_criatura_alderium.png`, etc.)
- `frame_hechizo.png`
- `frame_runa.png`
- `frame_reliquia.png`
- `frame_recuerdo.png`
- `boton_atacar.png`
- `boton_pasar_turno.png`

### Especificaciones técnicas sugeridas
- **Arte de carta (ilustración del personaje/objeto):** 750×1050 px, PNG, sin marco (el marco se superpone en el motor).
- **Fondos de mapa/mazmorra:** 1920×1080, JPG.
- **Iconos:** 128×128, PNG con transparencia.
- **Frames/UI:** PNG con transparencia, tamaño acorde al frame que definamos en el motor (te lo confirmo cuando armemos la pantalla de carta en Claude Code).

Con esto ya podés empezar a producir sin esperar el resto del diseño — el bestiario y el elenco de personajes de la sección 8 y del lore son tu lista de "qué ilustrar primero".

---

## 13. Ciudad Central (hub de actividades, una por continente)

Todos los continentes tienen una ciudad central con **la misma estructura funcional**, pero distinta estética — La Franja puede ser la más distinta de todas, como marcaste. Mismos botones, distinto arte de fondo.

Actividades disponibles desde la Ciudad Central:
1. **Entrenamiento** — Zona de Entrenamiento (ya definida en sección 9).
2. **Duelo** — vs IA, vs otro jugador, o vs "la Guía" (un NPC especial que puede funcionar como tutorial o desafío narrativo recurrente).
3. **Administrar cartas** — colección, constructor de mazos, y eventualmente compra/adquisición de cartas.
4. **Tablón de misiones** — estilo cartel de recompensas ("wanted"): muestra qué mazmorras están disponibles en ese continente y qué recompensa dan.
5. **Taberna** — hub social y narrativo (ver sección 14).

---

## 14. La Taberna

Estética tipo Magic/Hearthstone: un fondo fijo, con uno o varios personajes presentes en la escena.

- **NPCs como cartas-retrato:** cada personaje presente se representa como una carta con su imagen. El jugador "habla" con cada uno y recibe **una pieza de información puntual**, no un diálogo largo — coherente con la filosofía de "nunca explicar todo, dejar que el jugador descubra".
- **Mecánica de pergaminos aleatorios:** sobre la mesa hay pergaminos/rollos. El jugador elige uno al azar. La mayoría son simple lore/ambientación; ocasionalmente uno resulta importante (una pista de mazmorra secreta, un Recuerdo raro, un rumor que desbloquea algo). Esto alimenta directamente los objetivos psicológicos de "recompensa intelectual" y "aspiración" que ya tenías definidos en la filosofía original.

---

## 15. Héroes y Runas encontrados en mazmorras (no solo combate)

Las mazmorras no son solo caminos con enemigos:

- **Conversación clave con un héroe:** en ciertos nodos puede haber un personaje con quien hablar en vez de pelear. Si la conversación se resuelve bien (puede requerir un Recuerdo acertado), ese personaje se vuelve **reclutable** — pasa a estar disponible como Criatura en tus mazos futuros.
- **Runas encontradas, no solo obtenidas por otro medio:** dado que las Runas son extremadamente escasas (sección 4), tiene sentido que aparezcan como hallazgo narrativo dentro de una mazmorra específica, ligadas a un nodo especial — no como recompensa genérica de victoria.

---

## 16. Reutilización de mazmorras (para que el mundo se sienta grande sin disparar el costo de arte)

El mismo esqueleto de grafo (sección 11) se puede repetir **2-3 veces dentro de un mismo continente**, cambiando solo el contenido temático: nombres de nodos, texto de ambientación, y qué enemigo mundano aparece — sin necesitar diseñar un grafo nuevo ni arte nuevo cada vez. Esto es clave para la meta de 26 mazmorras: no son 26 diseños desde cero, son ~7-10 "plantillas" repartidas con reskin de texto y, cuando alcance el presupuesto de arte, reskin visual liviano (cambio de paleta, por ejemplo).

---

## 17. Primer set jugable: 18 cartas de prueba

Tres cartas por facción (6 × 3 = 18), pensadas para expresar la identidad mecánica de cada una (sección 4) con números concretos, listas para una partida de mesa en papel. Eratiel (sección 5) cuenta como una de las tres de Nómadas.

### Alderium — control y orden
```
Nombre: Rhaen, Escudo del Trono
Costo: 4 | Tipo: Criatura | ATK/VIDA: 2/6
Palabras clave: Guardián
Texto: Mientras Rhaen esté en juego, tus otros Guardianes ganan +0/+1.
```
```
Nombre: Muralla Viviente
Costo: 3 | Tipo: Criatura | ATK/VIDA: 1/5
Palabras clave: Guardián
Texto: Al entrar en juego, otorgá Escudo a otro Guardián que controlás.
```
```
Nombre: Decreto de Contención
Costo: 2 | Tipo: Hechizo
Texto: Otorgá Escudo a una criatura. Si es un Guardián, otorgá
Escudo a dos criaturas en vez de una.
```

### Qashir — recursos y riesgo
```
Nombre: Zahira, la Apostadora (renombrada desde "Zahra" — ver Veyra_Lore_Notas.md sección 3)
Costo: 3 | Tipo: Criatura | ATK/VIDA: 4/2
Texto: Al entrar en juego, podés sacrificar otra criatura tuya:
si lo hacés, ganás +1 tope de maná este turno.
```
```
Nombre: Chacal de las Dunas
Costo: 2 | Tipo: Criatura | ATK/VIDA: 3/1
Palabras clave: Prisa
Texto: Cuando esta criatura muere, infligí 1 de daño al jugador rival.
```
```
Nombre: Pacto de Sangre
Costo: 1 | Tipo: Hechizo
Texto: Sacrificá una criatura que controlás. Ganás maná igual a
su costo, disponible solo este turno.
```

### Brasshaven — ingeniería
```
Nombre: Lyra Vale, la Inventora
Costo: 4 | Tipo: Criatura | ATK/VIDA: 3/3
Texto: Al entrar en juego, devolvé una criatura tuya del
cementerio al campo con -1/-1.
```
```
Nombre: Autómata de Repuestos
Costo: 3 | Tipo: Criatura | ATK/VIDA: 2/4
Texto: Cuando esta criatura muere, pagá 1 de maná para devolverla
al campo con sus estadísticas actuales (una vez por partida).
```
```
Nombre: Cristal de Sobrecarga
Costo: 2 | Tipo: Reliquia
Texto: Al entrar en juego, se liga a una criatura: esa criatura
gana +2/+0. Cuando esa criatura muere, ganás +1 tope de maná
este turno.
```

### Kóren — memoria antigua
```
Nombre: Anciana del Río Callado
Costo: 3 | Tipo: Criatura | ATK/VIDA: 2/4
Texto: Al entrar en juego, curá 2 de vida al jugador.
Requisito de Recuerdo: si nombrás correctamente un evento del
pasado de Kóren, cura 4 en vez de 2.
```
```
Nombre: Eco del Primer Templo
Costo: 1 | Tipo: Recuerdo
Texto: Descartá esta carta: la próxima criatura que juegues este
turno cuesta 1 maná menos.
Requisito de Recuerdo: el efecto solo se activa si podés nombrar
el templo al que refiere la carta.
```
```
Nombre: Vendaje de Musgo Antiguo
Costo: 1 | Tipo: Hechizo
Texto: Curá 3 de vida a una criatura o al jugador.
```

### Caelum / Terra Caelum — Runas oficiales, reglas de sistema
```
Nombre: Ley de Terra Caelum
Costo: 5 | Tipo: Runa
Texto: Mientras esté en juego, tu tope de maná máximo pasa a 12.
```
```
Nombre: Guardiana de las Alturas
Costo: 4 | Tipo: Criatura | ATK/VIDA: 3/5
Palabras clave: Guardián
Texto: Cada vez que esta criatura es atacada como Guardián y
sobrevive, gana +1/+1 permanente.
```
```
Nombre: Decreto de Equilibrio
Costo: 3 | Tipo: Hechizo
Texto: El maná disponible este turno para vos y tu rival se
iguala al menor de los dos valores.
```

### Nómadas — impredecibles, cartas Ocultas
```
Nombre: Eratiel, el Guerrero sin Historia
(ver sección 5 — Costo 3, ATK/VIDA 4/2, Oculto)
```
```
Nombre: Forastero sin Nombre
Costo: 2 | Tipo: Criatura | ATK/VIDA: ??/?? (Oculto)
Palabras clave: Oculto
Texto: Al entrar en juego, sus estadísticas reales se fijan en
secreto entre 1/1, 3/3 o 5/1. Se revela solo al atacar o ser atacado.
```
```
Nombre: Rumor del Camino
Costo: 1 | Tipo: Hechizo
Texto: Mirá la próxima carta de tu mazo. Podés dejarla arriba o
ponerla en el fondo del mazo.
```

---

## 18. Registro de Playtest #1 (mesa simulada)

Partida simulada Alderium (control) vs Qashir (agro/sacrificio), usando mazos reducidos de 12 cartas (las cartas reales de sección 17 + rellenos genéricos "vainilla" solo para completar la curva de maná — no forman parte del set final). Vida inicial 20 cada uno. Objetivo: probar Guardián, combate cuerpo a cuerpo, Prisa y el combo de sacrificio de Zahra antes de tocar arte o motor.

**Resumen de las primeras 6 rondas:**
- T1-T2: Qashir sale agresivo con Explorador Temerario y Chacal de las Dunas (Prisa) — Alderium baja a 16 de vida sin Guardián todavía en juego.
- T3: Alderium juega Muralla Viviente (Guardián) — a partir de acá Qashir queda obligado a dirigir sus ataques contra los Guardianes, no contra el jugador.
- T4: Alderium suma Rhaen, Escudo del Trono — dos Guardianes en juego a la vez, Qashir tiene que elegir a cuál de los dos golpear.
- T5-T6: los Guardianes de Alderium terminan muriendo en combate (trades sucesivos), pero absorbieron varios turnos de ataques que si no hubieran ido a la cara. Al caer el último Guardián, Qashir vuelve a pegarle directo al jugador.
- **Estado final simulado (ronda 6):** Alderium 13 de vida / 3 criaturas en juego. Qashir 11 de vida / 1 criatura grande en juego (Verdugo de Caravanas, 6/4). Partida pareja, ninguno con ventaja aplastante.

**Hallazgos:**
1. La regla de Guardián funciona como se esperaba: le compra tiempo a Alderium sin necesitar bloqueo libre, tal como buscaba la sección 1.
2. El combo de sacrificio de Zahra (Qashir) **no llegó a activarse** en 6 rondas — nunca hubo, en el momento justo, una criatura barata y prescindible para sacrificar. Puede ser demasiado situacional; revisar si vale la pena relajar la condición (ej. permitir sacrificar cualquier criatura propia, incluida una recién jugada el mismo turno).
3. Ninguna de las 18 cartas usa **Silencio** ni **Vínculo** — quedaron sin probar. Falta al menos un ejemplo de cada una en el próximo lote.
4. La curva se sintió razonable: para el turno 6 ambos lados ya tenían 3-4 cuerpos en juego sin sensación de tablero saturado ni vacío.
5. Al simular turno a turno aparecieron reglas que el documento no cerraba todavía (combate mutuo vs. unidireccional, persistencia del daño, elección de objetivo entre Guardianes múltiples, aplicación de buffs sobre daño existente, vida inicial). Se resolvieron con rulings provisionales, ya incorporados directamente a la sección 1 — quedan marcados ahí como "a validar en mesa real".

---

## 19. Próximos pasos sugeridos

1. ~~Definir números reales de ATK/VIDA para Eratiel~~ — **hecho**: 4/2, alto riesgo/alto impacto (sección 5).
2. ~~Elegir 2-3 personajes más por facción para un primer set jugable~~ — **hecho**: 18 cartas de prueba (sección 17).
3. ~~Probar el combate en una partida de mesa simulada~~ — **hecho**: Playtest #1 (sección 18). Falta repetirlo en mesa física con otra persona para confirmar que las reglas provisionales de combate (sección 1) se sienten bien.
4. Definir el "costo de fallo" en encuentros de mazmorra (ej. la Emboscada de Ladrones del grafo) — por ahora se fijó como propuesta "pierde la carta superior del mazo", a validar junto con el punto 3.
5. Revisar el combo de sacrificio de Zahra (Qashir) a la luz del hallazgo #2 del Playtest #1 — puede necesitar un ajuste de texto.
6. Agregar al menos una carta con Silencio y una con Vínculo al set de prueba, para completar la cobertura de palabras clave antes del segundo playtest.

---

## 20. Principios de arquitectura

**Mazmorras y mapas son datos extensibles.** El motor debe soportar agregar nodos, conexiones y condiciones de desbloqueo (campaña completada, carta poseída, pregunta de Recuerdo acertada) **sin modificar código** — es la forma en que ya está construido `DUNGEONS`/`CAMPAIGNS` en `Veyra.html`: cada mazmorra o campaña es una entrada de datos (nodos, tipo, texto, recompensa, próximo nodo), no una función a medida. Esto es intencional y no debe romperse al agregar contenido: **el lore va a abrir pasadizos nuevos en mazmorras ya jugadas** como estrategia de contenido deliberada (un nodo puede aparecer o desbloquearse más adelante sin tocar el grafo existente).

**Estructura de facciones preparada para una séptima.** `FACTIONS` y el resto del modelo de datos deben poder aceptar una entrada más (Terra Caelum, ver Veyra_Lore_Notas.md sección 1) el día que se diseñe la primera expansión, sin necesitar refactor — simplemente no se expone en la UI (mapa mundial, selector de facción) hasta ese momento.

---

## 21. Filosofía comercial

Cuatro principios fijados, no negociables al momento de diseñar cualquier sistema de progreso, tienda o monetización:

1. **La historia completa es jugable gratis y progresiva.** Ninguna campaña ni capítulo del modo Historia/Exploración se paga.
2. **La tienda es un lugar del mundo** — un puesto, un mercader, una taberna — **nunca** un popup, un banner ni un ícono de venta flotante sobre la UI de juego.
3. **Se monetiza el cariño y la colección, no el progreso.** El que vio el sacrificio de un personaje quiere su carta; no la necesita para avanzar.
4. **El lore se infiltra jugando** — Recuerdos, pasadizos que solo encuentra quien conoce la historia, textos de carta — **nunca se impone.**

Merchandise (prints, camisetas) queda como fase futura, cuando ya exista comunidad — es cosecha, no semilla.
