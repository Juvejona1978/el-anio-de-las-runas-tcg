# Veyrá — Lista de Artes: Alderium (lote 1: las 17 cartas existentes)

## Especificación técnica (aplica a TODAS las imágenes de carta)

- **Formato:** JPG, vertical.
- **Generación en ChatGPT:** pedí tamaño **1024×1536** (vertical). La carta usa proporción 5:7 y el CSS recorta automáticamente con `cover`, así que se pierde un poco del borde superior e inferior (~7%). Regla práctica: **nada importante pegado a los bordes**.
- **Zonas seguras de composición** (el HTML monta capas encima del arte):
  - **Franja inferior (último cuarto):** ahí va la banda oscura con el texto de reglas. Que no haya detalle crítico ahí (pies, suelo, sombras están bien).
  - **Esquinas superiores:** coste y sello de facción. Evitá caras o símbolos importantes en las esquinas.
  - **El rostro / foco del personaje:** entre el centro y el tercio superior.
- **Nombre de archivo:** exacto como se indica en cada carta, en `assets/cards/alderium/`. Si el nombre no coincide, la carta no toma el arte.
- **Sin texto, sin marcos, sin números dentro de la imagen.** Solo la ilustración. El marco, el nombre y los stats los pone el juego.

## Bloque de estilo Alderium (pegalo al inicio de CADA prompt)

> Ilustración de fantasía épica para carta de juego, estilo pintura digital detallada, iluminación dramática dorada. Estética del reino de Alderium: mármol blanco, oro solemne, catedrales de piedra fría, estandartes, armaduras ceremoniales con grabados de juramentos. Paleta: dorados cálidos, blancos marfil, azul acero profundo en sombras. Composición vertical, sujeto entre el centro y el tercio superior, sin texto, sin marco, sin bordes decorativos, fondo pintado completo hasta los bordes.

Generá primero 2–3 cartas, compará que el estilo sea consistente, y recién ahí producí el resto en la misma conversación de ChatGPT (mantener la misma conversación ayuda muchísimo a la consistencia).

---

## Héroes (3)

### 1. Rhaen, Escudo del Trono — `rhaen.jpg`
Criatura héroe 2/6, Guardián. "Tus otros Guardianes ganan +0/+1."
> [bloque de estilo] + Un guardián veterano imponente de armadura dorada ceremonial completa, plantado en postura defensiva inamovible frente a un trono de mármol, sosteniendo un escudo torre monumental grabado con un juramento. Expresión serena e inquebrantable. Detrás, filas de guardianes menores en penumbra que parecen erguirse más firmes en su presencia.

### 2. Isolde — `isolde.jpg`
Criatura héroe 3/5. "Cuando una criatura enemiga ataca, Isolde le inflige 1 de daño antes de que se resuelva el combate."
> [bloque de estilo] + Una duelista de reflejos letales en armadura ligera dorada y blanca, capturada en el instante exacto de interceptar un ataque: su espada ya cortó primero, el movimiento enemigo apenas comienza. Sensación de velocidad congelada, destello dorado en el filo. Mirada calculadora, jamás sorprendida.

### 3. Tiberon — `tiberon.jpg`
Criatura héroe 2/4. "Tus otros Guardianes ganan +1/+1."
> [bloque de estilo] + Un comandante portaestandarte de edad madura alzando un estandarte dorado de Alderium contra un cielo de amanecer, arengando. Su presencia irradia autoridad que fortalece a los soldados: guardianes al fondo alzan escudos con renovado vigor. Épico, marcial, esperanzador.

## Especialistas (1)

### 4. Muralla Viviente — `muralla.jpg`
Criatura 1/5, Guardián. "Al entrar: da Escudo a otro Guardián que controlás."
> [bloque de estilo] + Un coloso de piedra y mármol animado por runas doradas de juramento, mitad muralla mitad guardián, extendiendo un brazo enorme para proyectar una barrera de luz dorada sobre un guardián humano más pequeño a su lado. Textura de piedra antigua de catedral, musgo dorado en las grietas.

## Hechizos (1)

### 5. Decreto de Contención — `decreto_cont.jpg`
Hechizo, coste 2. "Da Escudo a una criatura. Si es Guardián, a dos en vez de una."
> [bloque de estilo] + Un pergamino real desplegándose en el aire con sello de cera dorado partido, del que emanan dos cúpulas de luz dorada protectora descendiendo sobre siluetas de guardianes arrodillados. Sin texto legible en el pergamino: solo caligrafía sugerida y ornamentos. Atmósfera ceremonial y solemne.

## Soldados (12) — rutas `sold_alderium_0.jpg` a `sold_alderium_11.jpg`

Para los soldados, mantené personajes anónimos (yelmos, capuchas, rostros parcialmente cubiertos o en sombra): son tropa, no héroes. Mismo bloque de estilo siempre.

### 6. Recluta de Alderium (1 maná, 1/2) — `sold_alderium_0.jpg`
> [bloque de estilo] + Un recluta joven de armadura dorada sencilla y sin adornos, sosteniendo lanza y escudo pequeño con firmeza nerviosa, en el patio de entrenamiento de una catedral fortaleza al amanecer.

### 7. Aprendiz de Alderium (1 maná, 2/1) — `sold_alderium_1.jpg`
> [bloque de estilo] + Un aprendiz delgado de túnica blanca con detalles dorados, practicando estocadas con una espada ceremonial demasiado grande para él, rodeado de manuales de esgrima abiertos sobre bancos de piedra.

### 8. Escudero de Alderium (2 maná, 2/2) — `sold_alderium_2.jpg`
> [bloque de estilo] + Un escudero cargando el escudo torre y el yelmo de su señor por un pasillo de mármol con vitrales dorados, vestimenta funcional blanca y dorada, expresión decidida.

### 9. Cazador de Alderium (2 maná, 1/3) — `sold_alderium_3.jpg`
> [bloque de estilo] + Un arquero con capa blanca y capucha dorada apostado en una almena de piedra clara, arco tensado, vigilando un valle brumoso al alba. Paciente, inmóvil.

### 10. Lancero de Alderium (3 maná, 3/3) — `sold_alderium_4.jpg`
> [bloque de estilo] + Un lancero de infantería en formación, armadura dorada de placas con tabardo blanco, lanza larga en ángulo de avance, otras lanzas idénticas asomando a su lado. Disciplina absoluta.

### 11. Centinela de Alderium (3 maná, 2/4) — `sold_alderium_5.jpg`
> [bloque de estilo] + Un centinela de guardia nocturna ante un portón dorado monumental, sosteniendo un farol de luz cálida, mirada atenta bajo un yelmo con visera alzada. Estrellas frías arriba, luz dorada abajo.

### 12. Veterano de Alderium (4 maná, 4/4) — `sold_alderium_6.jpg`
> [bloque de estilo] + Un soldado veterano de armadura dorada con abolladuras y cicatrices de campañas pasadas, afilando su espada sentado en un banco de piedra, medallas de juramento colgando del cinturón. Cansado pero inquebrantable.

### 13. Guardia de Fila de Alderium (4 maná, 3/5) — `sold_alderium_7.jpg`
> [bloque de estilo] + Un guardia pesado de la primera fila con escudo rectangular enorme que lo cubre del mentón a las botas, hombro con hombro con escudos vecinos formando un muro dorado impenetrable.

### 14. Campeón de Alderium (5 maná, 5/5) — `sold_alderium_8.jpg`
> [bloque de estilo] + Un campeón de torneo con armadura dorada ornamentada de león, alzando una espada bastarda en un coliseo de mármol, pétalos blancos cayendo, multitud difusa al fondo. Glorioso.

### 15. Portador del Estandarte de Alderium (5 maná, 4/6) — `sold_alderium_9.jpg`
> [bloque de estilo] + Un soldado corpulento sosteniendo en alto el estandarte de guerra dorado de Alderium en medio del fragor de una batalla, tela ondeando dramáticamente, luz de amanecer atravesando el humo.

### 16. Coloso de Alderium (6 maná, 6/6) — `sold_alderium_10.jpg`
> [bloque de estilo] + Un guerrero gigantesco de armadura dorada completa de dos metros y medio, maza ceremonial de mármol al hombro, caminando entre soldados normales que le llegan al pecho. Escala imponente.

### 17. Custodio Menor de Alderium (6 maná, 5/7) — `sold_alderium_11.jpg`
> [bloque de estilo] + Un custodio de reliquias con armadura dorada de placas superpuestas como escamas de catedral, guardando una puerta sellada con cadenas doradas, alabarda ornamentada en ambas manos. Solemne, inamovible.

---

## Pendiente (NO generar todavía)

- **13 cartas de Alderium por diseñar** (4 especialistas, 4 hechizos, 3 reliquias, 1 recuerdo, 1 runa): primero se diseñan las mecánicas y nombres, después te doy sus prompts.
- **Fondos** (mapa mundial, ciudad de Alderium, mapa de lugares, interiores): tienen sus propios slots (`assets/backgrounds/...`) y proporciones distintas (horizontal). Lote aparte cuando cerremos los lugares de Alderium.
- **Iconos**: ya son SVG en código, no hay que generar ninguno.

## Checklist al subir

1. Nombre de archivo exacto (minúsculas, sin espacios) en `assets/cards/alderium/`.
2. JPG vertical 1024×1536 (o mayor, misma proporción).
3. Sin texto/marco/números dentro de la imagen.
4. Commit + push → recargar la página y verificar en el constructor de mazos con la carta ampliada.
