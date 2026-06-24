# Biblioteca de Componentes

Catálogo visual de componentes UI estilo uiverse: **HTML + CSS separados**, listos para copiar y reutilizar en cualquier proyecto.

## Stack

- **Vue 3** + `<script setup>` + JavaScript puro
- **Vite 6** (dev + build)
- **Vue Router 4** (rutas por categoría)
- **Pinia** (estado: tema, favoritos, filtros)
- **Heroicons** (iconos UI)
- Sin TypeScript, sin Tailwind, sin framework extra

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo (http://localhost:5173)
npm run build   # build de producción
npm run preview # previsualizar el build
```

## Estructura

```
src/
├── components/          # Biblioteca de componentes (HTML + CSS)
│   ├── buttons/         # un .js por componente + index.js
│   ├── checkboxes/
│   └── ...
├── catalog/             # App showcase (Vue)
│   ├── views/           # HomeView, AllView, CategoryView, FavoritesView
│   ├── layout/          # AppHeader, AppSidebar, ComponentCard
│   ├── showcase/        # ComponentPreview, ComponentModal, CodeBlock
│   ├── stores/          # theme, favorites, filters, catalog
│   ├── composables/     # useFilteredComponents
│   ├── data/            # categories.js (12 categorías)
│   └── router/          # rutas
├── utils/               # scopeCss (aísla CSS), copy, string
├── App.vue              # shell
├── main.js
└── style.css            # variables CSS del tema
```

## Cómo añadir un componente nuevo

1. **Crear el archivo** en `src/components/<categoría>/<Nombre>.js`:

   ```js
   export default {
     id: 'mi-boton-unico',          // slug único
     name: 'Mi Botón',              // nombre visible
     category: 'buttons',           // debe coincidir con una categoría
     tags: ['glow', 'css-only'],    // opcional, para filtros/búsqueda
     html: `
       <button class="mi-clase">Click me</button>
     `,
     css: `
       .mi-clase {
         padding: 12px 24px;
         background: #7c3aed;
         ...
       }
     `
   }
   ```

2. **Registrarlo** en `src/components/<categoría>/index.js`:

   ```js
   import MiBoton from './MiBoton.js'
   export { MiBoton }
   export default { MiBoton }
   ```

3. **Listo.** Aparece automáticamente en:
   - `/all` (vista global)
   - `/category/buttons` (vista de categoría)
   - La búsqueda y los filtros lo encuentran por nombre o tag
   - Se puede añadir a favoritos

## Categorías disponibles

`buttons` · `checkboxes` · `toggles` · `cards` · `loaders` · `inputs` · `radios` · `forms` · `tooltips` · `patterns` · `backgrounds` · `animations`

Para añadir una categoría nueva:

1. Añadir entrada en `src/catalog/data/categories.js`
2. Crear carpeta `src/components/<nueva-categoria>/`
3. Crear `index.js` (vacío o con los componentes)

## Notas técnicas

- **Aislamiento de CSS**: cada previsualización genera un id único y se re-escriben los selectores para que el CSS no contamine otros componentes.
- **Sin JS en los componentes**: el "interactivity" se logra con trucos CSS (`:checked`, `label + input`, etc.), fiel al modelo uiverse.
- **Persistencia local**: tema y favoritos se guardan en `localStorage`.
- **Copiar al portapapeles**: cada bloque HTML/CSS tiene un botón "Copiar" con feedback visual.
