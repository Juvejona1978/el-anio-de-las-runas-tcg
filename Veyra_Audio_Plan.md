# Veyrá — Plan de Audio (lote 1)

## Especificación técnica

- **Formato:** MP3 (Suno ya exporta MP3; los efectos, si vienen en WAV, se suben igual — pesan poco).
- **Rutas exactas** (si el nombre no coincide, el juego queda en silencio en ese slot, sin error):
  - Música: `assets/audio/musica/<nombre>.mp3`
  - Efectos: `assets/audio/sfx/<nombre>.mp3`
- **Música:** pistas de 2–3 minutos; el motor las repite con crossfade, no hace falta que el final empalme con el principio. Evitá finales con gran clímax — mejor que terminen calmadas para que el reinicio no se note.
- **En Suno:** activá siempre **Instrumental**. Los prompts de abajo van en el campo de estilo/descripción.
- **Volumen:** intentá que todas las pistas suenen a volumen parecido entre sí (generá y compará de a pares).

---

## Música (9 pistas, en orden de prioridad)

### 1. Tema del mapa mundial — `tema_mapa_mundial.mp3`
Es "el tema de Veyrá": lo primero que se escucha, la identidad sonora del juego.
> Epic orchestral fantasy main theme, sense of vast ancient world and mystery, warm strings and french horns, distant choir pads, slow noble melody that feels like standing before an unexplored map, moderate tempo, cinematic, instrumental, no percussion climax, gentle ending

### 2. Tema de duelo — `tema_duelo.mp3`
Suena en todas las partidas hasta que existan temas por facción. Tiene que aguantar muchas escuchas: tensión sin agotar.
> Fantasy card battle music, driving but restrained orchestral tension, staccato strings, taiko and frame drums at medium intensity, dark brass accents, strategic and focused mood rather than frantic action, loopable feel, instrumental, ends calm

### 3. Ciudad Central — `tema_ciudad_central.mp3`
> Medieval fantasy town theme, warm and welcoming, lute, harp, wooden flute, soft hand percussion, market square at golden hour, cozy and safe feeling, gentle melody, instrumental, relaxed tempo

### 4. Mazmorra (exploración) — `tema_mazmorra.mp3`
> Dark fantasy dungeon exploration ambience with music, low sustained strings, sparse haunting bells, deep drones, cautious footsteps mood, mysterious and tense but quiet, minimal melody, instrumental, slow

### 5. Victoria (stinger, 10–20 seg) — `stinger_victoria.mp3`
En Suna generá normal y recortá el mejor fragmento inicial, o pedí "short fanfare".
> Short triumphant orchestral victory fanfare, golden brass, rising strings, bright cymbal, 15 seconds, conclusive ending, instrumental

### 6. Derrota (stinger, 10–15 seg) — `stinger_derrota.mp3`
> Short somber orchestral defeat sting, low cello, fading horn, quiet unresolved ending, 12 seconds, melancholic but dignified, instrumental

### 7. Tema de Alderium (ciudad/campaña) — `tema_alderium.mp3`
Primera facción con tema propio, coherente con la estrategia "Alderium perfecta primero".
> Noble sacred fantasy theme, cathedral atmosphere, solemn french horns, church organ pads underneath strings, golden and ceremonial mood, oath-taking gravitas, slow majestic tempo, subtle male choir, instrumental

### 8. Constructor de mazos / colección — `tema_constructor.mp3`
> Calm thoughtful fantasy planning music, soft harp arpeggios, warm strings, quiet contemplative library mood, unobtrusive, instrumental, very gentle

### 9. Taberna (para cuando exista) — `tema_taberna.mp3`
> Lively medieval tavern music, fiddle, bodhran, hand claps, tin whistle, ale and firelight mood, cheerful folk dance, instrumental

---

## Efectos de sonido (16) — qué buscar en Kenney / Pixabay / Freesound

Kenney.nl → packs "RPG Audio", "Casual Sounds" e "Interface Sounds" (CC0, gratis, descarga directa) cubren la mayoría. Lo que falte, buscalo en Pixabay con los términos en inglés de abajo (filtrar CC0 en Freesound).

| Archivo | Momento en el juego | Buscar |
|---|---|---|
| `carta_robar.mp3` | Robar carta | card slide / card deal |
| `carta_jugar.mp3` | Jugar carta en el tablero | card place / card flip thud |
| `ataque_impacto.mp3` | Golpe de combate | sword hit / impact thud |
| `escudo_ganar.mp3` | Una criatura gana Escudo | magic shield / energy shield on |
| `escudo_romper.mp3` | Se rompe un Escudo | glass shatter short / shield break |
| `criatura_morir.mp3` | Muere una criatura | fantasy death whoosh / dissolve |
| `invocar.mp3` | Entra una criatura | magic summon / whoosh appear |
| `heroe_habilidad.mp3` | Se activa mecánica de héroe | magic chime power / spell cast |
| `hechizo.mp3` | Se lanza un hechizo | spell cast whoosh / arcane |
| `oculto_revelar.mp3` | Se revela un Oculto | reveal shimmer / mystery sting |
| `ui_tap.mp3` | Toque de botón/hotspot | ui click soft / menu tap |
| `swipe.mp3` | Deslizar la carta Reigns | card swipe / paper swish |
| `quiz_correcto.mp3` | Respuesta correcta | success chime short |
| `quiz_incorrecto.mp3` | Respuesta incorrecta | error buzz soft / wrong answer |
| `recompensa.mp3` | Carta de recompensa aparece | reward jingle / treasure chime |
| `mazmorra_entrar.mp3` | Entrar a una mazmorra | stone door / dungeon door open |

Consejo: bajá más efectos de los que necesitás y quedate con los que suenen de la misma "familia" (mismo pack de Kenney = coherencia garantizada). Los efectos de UI tienen que ser CORTOS y suaves — se escuchan cientos de veces.

## Checklist al subir

1. Nombres exactos, minúsculas, en `assets/audio/musica/` o `assets/audio/sfx/`.
2. Escuchá cada pista de Suno completa antes de subirla (a veces mete un pasaje raro al minuto 2).
3. Subí primero `tema_mapa_mundial.mp3` + 3 efectos (`carta_jugar`, `ataque_impacto`, `ui_tap`) y probá en el celular antes de producir el resto.
