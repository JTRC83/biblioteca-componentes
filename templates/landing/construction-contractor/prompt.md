# Prompt — Construction & Contractor Landing

## Estetica general

Diseno robusto e industrial para empresa de construccion o contratista. Colores de seguridad y acero: naranja construccion (#ea580c) como primario que evoca senalizacion y equipos de obra, gris pizarra (#475569) como secundario que evoca acero y estructuras. Tipografia Archivo (bold, industrial, geometrica) para titulos con presencia e Inter para body. Superficies blancas y gris claro con bordes definidos y sombras firmes. La sensacion es solida, profesional, confiable e industrial, como una empresa constructora seria que transmite confianza y experiencia.

## Layout

Grid de 12 columnas con max-width 1200px centrado. Espaciado generoso entre secciones (80px). Hero a pantalla completa con foto de obra/construccion de fondo y overlay de texto. Servicios en grid de 4 columnas. Proyectos en grid de 3 columnas con galeria before/after. Proceso en timeline horizontal de 3 pasos. Equipo en grid de 4 columnas. Presupuesto como form completo centrado. Testimonios en grid de 3 columnas. Footer a ancho completo.

## Paleta de color

- **Fondo principal**: #ffffff (blanco limpio)
- **Superficies**: #f8fafc (gris claro industrial)
- **Primario**: #ea580c (naranja construccion) usado en CTAs, acentos, elementos de seguridad
- **Secundario**: #475569 (gris pizarra/acero) para texto, bordes, elementos estructurales
- **Texto principal**: #1c1917 (stone-900, casi negro)
- **Texto secundario**: #57534e (stone-600, gris piedra)
- **Acentos**: gradientes sutiles de naranja a naranja oscuro en botones y bordes hover

## Tipografia

Archivo para headings (sans-serif bold, industrial, geometrico, con presencia). Inter para body y UI. Display con clamp(2.5rem, 6vw, 5rem). Body 16px, line-height 1.6. Pesos: 800 headings (extra bold para impacto industrial), 400 body, 500 labels. Tracking ligeramente tight en headings. Uppercase en etiquetas y secciones para sensacion industrial.

## Secciones

### Hero
Pantalla completa con foto de obra/construccion de fondo, overlay gradiente oscuro (bottom-up) para legibilidad. Titulo grande Archivo extra bold: "Construimos con confianza" con "confianza" destacado. Subtitulo: breve descripcion de la empresa constructora. Dos CTAs: "Solicitar presupuesto" (primary naranja) y "Ver proyectos" (ghost blanco). Badge con anos de experiencia o numero de proyectos completados. Linea decorativa naranja como acento industrial.

### Services
Titulo "Nuestros servicios". Grid de 4 columnas con iconos: Construccion residencial, Construccion comercial, Renovacion, Infraestructura. Cada servicio con icono (lineal, industrial), titulo bold, descripcion corta. Cards con borde definido, hover lift sutil y borde naranja. Iconos en color naranja #ea580c.

### Projects
Titulo "Proyectos realizados". Galeria en grid de 3 columnas con fotos de proyectos. Cada proyecto con foto, nombre, ubicacion y ano. Filtro por categoria (Residencial, Comercial, Infraestructura). Hover: zoom sutil + overlay con info del proyecto. Galeria before/after opcional con slider. 6-9 proyectos.

### Process
Titulo "Como trabajamos". Timeline horizontal de 3 pasos: Diseno, Construccion, Entrega. Cada paso con numero grande (01, 02, 03), titulo bold, descripcion. Linea conectora naranja entre pasos. Iconos industriales. Sensacion de proceso estructurado y profesional.

### Team
Titulo "Nuestro equipo". Grid de 4 columnas con perfiles: foto, nombre, cargo, especialidad. Cards con borde definido, hover lift sutil. Iconos de contacto (telefono, email) opcionales. Sensacion de equipo profesional y experimentado.

### Quote
Titulo "Solicita tu presupuesto". Form centrado sobre fondo gris claro: nombre, email, telefono, tipo de proyecto (select), descripcion del proyecto (textarea), presupuesto estimado (select). Boton "Enviar solicitud" grande naranja. A un lado, info de contacto (direccion, telefono, email, horarios) y beneficios (presupuesto gratis, respuesta en 24h, garantia de trabajo).

### Testimonials
Grid de 3 columnas de testimonios de clientes: avatar + nombre + empresa/proyecto + valoracion (estrellas naranja) + comentario. "Excelente trabajo, plazo cumplido", "Profesionales de principio a fin", etc. Cards con borde definido y superficie gris claro.

### Footer
4 columnas: Logo + descripcion, Servicios (links), Contacto (direccion, telefono, email, horarios), Redes sociales. Newsletter signup opcional. Copyright. Linea superior naranja como acento industrial.

## Elementos interactivos y animaciones

- Hero: texto aparece con fade-in sutil, foto con ken-burns lento (scale 1.05 a 1.1 en 20s)
- Services: cards hover lift sutil + borde naranja, iconos con animacion sutil
- Projects: hover zoom + overlay slide-up con info del proyecto
- Process: timeline con linea conectora animada al hacer scroll, numeros aparecen con stagger
- Quote: form con validacion visual, inputs con focus state naranja, labels floating
- Botones: hover lift sutil + cambio de tono, shadow naranja en primary
- Testimonios: hover lift sutil en cards

## Responsive

- Desktop (>1024px): grid 4 columnas servicios y equipo, grid 3 columnas proyectos y testimonios, hero a pantalla completa
- Tablet (768-1024px): grid 2 columnas, hero ajustado, timeline horizontal
- Mobile (<768px): todo 1 columna, tipografia reducida, servicios y equipo en lista, proyectos en grid 2, timeline vertical, hero reducido

## Lo que hace distintivo este diseno

La combinacion de tipografia Archivo (bold, industrial, geometrica) con colores de seguridad y acero (naranja construccion + gris pizarra) crea una sensacion de empresa constructora seria y confiable. El naranja #ea580c evoca senalizacion y equipos de obra, transmitiendo seguridad y profesionalidad. El uso de bordes definidos y sombras firmes (en lugar de suaves) refuerza la sensacion de solidez y estructura. Los bordes rectos (radius 4-8px) en lugar de redondeados grandes mantienen el caracter industrial. El uppercase en etiquetas y secciones da presencia y autoridad.