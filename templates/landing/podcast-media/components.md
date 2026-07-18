# Componentes — Podcast & Media Landing

Mapeo de secciones a componentes de la biblioteca.

---

## Hero Section

**Componentes recomendados:**
- `btn-play-pause` — Play button gigante sobre el cover art del podcast
- `btn-get-started-gradient` — CTA "Subscribe" con gradiente violeta-rosa
- `btn-ask-ai` — Boton "Latest episode" estilo outline/ghost
- `bg-aurora` — Aurora con tonos violeta/rosa para fondo del hero
- `bg-mesh` — Mesh gradient para profundidad del fondo
- `bg-night-sky` — Night sky para ambiente nocturno de estudio
- `pat-dots` — Dot pattern sutil como textura de fondo
- `anim-cassette` — Animacion de cassette para acento audio retro

**Adaptacion:**
- btn-play-pause: gradiente del boton a linear-gradient(135deg, #8b5cf6, #ec4899), glow rgba(139,92,246,0.4)
- btn-get-started-gradient: gradiente violeta-rosa, hover glow violeta
- bg-aurora con tonos violeta/rosa a baja opacidad (20%), animacion lenta
- bg-night-sky con estrellas sutiles detras del cover art
- Cover art del podcast: cuadrado, radius 16px, glow violeta detras
- pat-dots opacidad 5% como textura de fondo
- anim-cassette como decoracion en esquina, opacidad 30%

---

## Episodes Section

**Componentes recomendados:**
- `card-music-player` — Card reproductor para episodio destacado con waveform
- `card-glass` — Glass card para cada episodio en la lista
- `card-glass-shine` — Glass shine card para episodio destacado
- `btn-play-pause` — Play button circular en cada episodio
- `pat-dots` — Dot pattern como separador entre episodios
- `loader-vinyl-record` — Loader vinyl como decoracion de audio

**Adaptacion:**
- card-music-player para episodio destacado arriba: waveform animada, barra de progreso
- card-glass para cada episodio: numero (#047), titulo, descripcion, duracion, fecha
- Hover: card levita + border gradient violeta + glow rgba(139,92,246,0.3)
- btn-play-pause circular pequeno (40px) en cada episodio, gradiente violeta-rosa
- card-glass-shine para episodio mas reciente con shine effect
- pat-dots como separador sutil entre episodios, opacidad 8%
- loader-vinyl-record como decoracion animada en esquina de la seccion

---

## Host Section

**Componentes recomendados:**
- `card-profile` — Card de perfil del host con foto, nombre, bio
- `card-3d` — 3D Hover Card para foto del host con tilt en hover
- `card-glass-shine` — Glass shine card para stats del host
- `btn-social-hover` — Botones de redes sociales del host (Twitter, Instagram, LinkedIn)
- `btn-follow-me` — Boton "Follow" con gradiente violeta-rosa
- `btn-follow-instagram` — Boton seguir en Instagram del host
- `tt-instagram-card` — Tooltip con perfil de Instagram del host

**Adaptacion:**
- card-profile: foto grande del host, nombre en Space Grotesk bold, bio en 2-3 parrafos
- card-3d con foto del host como background, tilt 3D en hover
- Stats del host (episodios, oyentes, rating) en card-glass-shine con shine effect
- btn-social-hover circulares, hover gradient violeta-rosa
- btn-follow-me como CTA principal: "Follow" con gradiente
- btn-follow-instagram para seguir en Instagram especificamente
- tt-instagram-card en hover sobre la foto para ver perfil de Instagram
- Glow violeta constante detras de la foto del host

---

## Subscribe Section

**Componentes recomendados:**
- `btn-get-started-gradient` — CTA principal "Subscribe" con gradiente
- `btn-cool-share` — Botones de plataformas (Apple Podcasts, Spotify, etc)
- `btn-social-hover` — Botones hover para cada plataforma de streaming
- `input-floating` — Input floating para email del newsletter
- `btn-send-message` — Boton "Subscribe" para newsletter
- `card-glass` — Glass card contenedora del bloque newsletter
- `bg-aurora` — Aurora con tonos violeta para glow del bloque

**Adaptacion:**
- Grid de botones de plataformas: Apple Podcasts, Spotify, Google Podcasts, YouTube, Amazon Music, Pocket Casts
- btn-cool-share para cada plataforma: icono + nombre, hover gradient violeta-rosa
- btn-social-hover circulares con icono de plataforma, hover lift + gradient
- Newsletter central: input-floating para email con underline gradient en focus
- btn-send-message "Subscribe" con gradiente violeta-rosa
- card-glass contenedora del newsletter con border gradient + glow
- bg-aurora detras del bloque con tonos violeta/rosa, opacidad 15%
- Glow violeta pulsante en el bloque completo

---

## Platforms Section

**Componentes recomendados:**
- `card-glass` — Glass card para contener logos de plataformas
- `btn-social-hover` — Botones hover para logos (grayscale → color)
- `card-glass-shine` — Glass shine card para plataformas destacadas
- `pat-dots` — Dot pattern como textura de fondo

**Adaptacion:**
- Logos de plataformas en escala de grises por defecto
- Hover: logo a color original + lift sutil + glow violeta
- card-glass contenedora con border sutil
- Categorias: donde escuchar, agregadores, redes
- Grid horizontal, sin bordes — solo hover effect
- pat-dots opacidad 5% como textura de fondo de la seccion
- card-glass-shine para plataformas principales (Spotify, Apple) con shine

---

## Testimonials Section

**Componentes recomendados:**
- `card-glass` — Glass card para cada testimonio de oyente
- `card-glass-shine` — Glass shine card para testimonio destacado
- `card-3d` — 3D Hover Card para testimonio con tilt en hover
- `pat-dots` — Dot pattern como separador entre testimonios
- `bg-mesh` — Mesh gradient sutil para fondo de la seccion

**Adaptacion:**
- Grid de 3 cards glass: quote, nombre, rol, avatar, estrellas de rating
- Hover: shine effect + lift + glow violeta sutil
- card-glass-shine para testimonio destacado con shine constante
- card-3d para testimonio con tilt 3D en hover
- Estrellas de rating en gradiente violeta-rosa
- pat-dots como separador sutil entre testimonios, opacidad 8%
- bg-mesh con tonos violeta/rosa a baja opacidad (10%) como fondo

---

## Footer Section

**Componentes recomendados:**
- `btn-social-hover` — Botones de redes sociales del podcast
- `btn-follow-me` — Boton "Follow" principal del footer
- `btn-follow-instagram` — Boton seguir en Instagram
- `input-floating` — Input floating para newsletter de updates
- `btn-send-message` — Boton "Subscribe" para newsletter
- `pat-dots` — Dot pattern como separador superior
- `bg-night-sky` — Night sky sutil para fondo del footer
- `anim-cassette` — Animacion de cassette como decoracion

**Adaptacion:**
- 4 columnas: Logo + tagline, Links utiles (Episodios, Host, Sponsors, Contact), Plataformas, Redes
- btn-social-hover circulares, hover gradient violeta-rosa
- btn-follow-me como CTA del footer con gradiente
- btn-follow-instagram para seguir en Instagram
- Newsletter con input-floating (underline gradient en focus)
- btn-send-message "Subscribe" con gradiente violeta-rosa
- pat-dots como separador superior, opacidad 5%
- bg-night-sky con estrellas sutiles como fondo del footer
- anim-cassette como decoracion en esquina, opacidad 20%, animacion lenta