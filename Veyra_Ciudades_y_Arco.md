# Veyrá — Ciudades y Arco del Jugador (canon de diseño)

Estado: **aceptado por el autor** (julio 2026). Fuente de verdad para nombres de
lugares urbanos y estructura narrativa del jugador. Cualquier contenido nuevo
(campañas, mazmorras, NPCs, textos de ciudad) debe respetar este documento.

---

## 1. Principio

La **mecánica de los lugares es idéntica en todas las ciudades** (mismos seis
roles funcionales, mismas pantallas, mismo código). Lo que cambia por facción
es **nombre, imagen y voz**. Ninguna ciudad puede sentirse como otra: la
cultura se expresa en cómo llama a sus lugares.

## 2. Los seis roles funcionales

1. **Social** — NPCs retrato-carta, rumores, pergaminos. (La futura "Taberna".)
2. **Práctica** — duelos sin consecuencias ni recompensas.
3. **Duelo** — duelos reales contra la IA.
4. **Cartas** — colección y constructor de mazos.
5. **Mazmorras** — salida al mapa de mazmorras y campaña del continente.
6. **Mercado** — la tienda como lugar del mundo, NUNCA como popup
   (filosofía comercial fundacional del proyecto).

Nota de estado actual: en el código, Práctica y Duelo abren el mismo selector.
Diferenciación pendiente: Práctica no otorga nada; Duelo es la vía con
recompensas cuando ese sistema exista.

## 3. Nombres por facción (canon aceptado)

| Rol | Alderium | Qashir | Brasshaven | Kóren | Caelum | Nómadas |
|---|---|---|---|---|---|---|
| Social | La Taberna del Juramento | La Casa de las Apuestas | La Cantina del Engranaje | El Círculo del Fuego | El Atrio de las Voces | El Fuego Común |
| Práctica | Patio de Armas | La Arena de Polvo | Taller de Pruebas | Claro de Piedra | El Simulacro | El Ruedo |
| Duelo | Sala del Desafío | El Reto del Bazar | Piso de Fundición | Altar del Encuentro | Cámara de Convergencia | Duelo ante la Caravana |
| Cartas | Salón de Estandartes | La Bóveda de Sellos | Registro de Patentes | Cámara de Ecos | Archivo Lumínico | Los Fardos del Andar |
| Mercado | Mercado del Alba | El Gran Bazar | Casa de Cambio | Trueque del Valle | Intercambio Etéreo | Trato entre Fuegos |

## 4. Voz de cada ciudad (guía para textos)

- **Alderium** — solemne, ceremonial, de juramentos. La piedra y el oro pesan.
  Se habla de deber, de guardia, de lo que se protege.
- **Qashir** — todo es trato, apuesta y astucia. Nada se regala; todo se
  negocia. La Casa de las Apuestas es el corazón social (territorio natural
  de Zahira, la Apostadora).
- **Brasshaven** — funcional, orgullosa de su industria. Los lugares suenan a
  taller, registro y fundición. Se mide, se prueba, se patenta.
- **Kóren** — ritual, ancestral, de piedra y fuego compartido. Los lugares son
  círculos y altares, no edificios administrativos.
- **Caelum** — remanente etéreo y contemplativo. Nada de tabernas: atrios,
  archivos de luz, convergencias. Vocabulario elevado, casi litúrgico.
- **Nómadas** — no hay edificios: hay fuegos, ruedos, fardos, tratos. Todo
  nombre remite al andar y al campamento. (Recordar: dejaron de moverse hace
  ~100 años; sus "lugares" conservan nombres de pueblo en marcha.)

Los lugares aún no construidos muestran una línea de ficción propia de la
facción, nunca un "próximamente" genérico.

## 5. Arco del jugador (marco narrativo)

El jugador **no es un personaje del libro**: es un recién llegado sin nombre.
Cada nación lo recibe a su manera, y en cada campaña juega COMO esa facción,
solo con sus cartas (mono-facción).

Curva de toda campaña de facción:

1. **Llegada** — la ciudad lo recibe según su cultura.
2. **Aprendizaje** — tutorial diegético (entrenamiento, primeras cartas).
3. **Juramento o pacto local** — el compromiso que lo integra a la facción
   (en Alderium, literalmente "El Juramento de Alderium", ya construido).
4. **Misión** — el conflicto propio de esa facción (mazmorras, rivales con
   nombre, decisiones).
5. **Algo que no cierra** — un detalle, lugar o frase que queda sin explicar.
6. **Logro final** — cierre satisfactorio de la historia local + la pregunta
   abierta queda sembrada.

### Regla del hilo mayor (OBLIGATORIA)

Las "preguntas abiertas" del punto 5 son las migajas del hilo global, pero ese
hilo **no se nombra jamás en contenido temprano**. Cada campaña se disfruta
completa sin saber que existe algo más. El patrón solo se vuelve visible para
quien jugó varias campañas, y se confirma únicamente en el clímax narrativo
final (Nómadas). Todo el material sensible sigue aislado en
`Veyra_Lore_Notas.md` sección 2 y NO se filtra a campañas, mazmorras, cartas
ni textos de ciudad tempranos.

### Cronología

Las campañas y mazmorras siguen un orden cronológico interno que el jugador
**reconstruye viajando** (lore ambiental en nodos-lugar), nunca mediante
explicaciones directas. Los nodos-lugar y sus loreFacts son el vehículo; las
cartas/nodos de Recuerdo preguntan lejos de donde se aprendió (ver sistema de
quiz por viaje).

## 6. Implicaciones de assets

- Cada ciudad: fondo propio `assets/backgrounds/ciudad_<faccion>.jpg` y sus
  seis botones-imagen `assets/backgrounds/boton_<rol>_<faccion>.jpg`
  (proporciones según plantilla existente).
- Los NPCs del lugar Social entran al registro de retratos
  (`assets/opponents/` o carpeta propia de NPCs, a definir cuando se
  construya la Taberna).
