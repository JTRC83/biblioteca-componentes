# Biblioteca de Componentes

Catálogo visual de componentes UI estilo uiverse + sistema de generación de webs con IA.

## Estructura del monorepo

```
biblioteca-componentes/
├── library/              # Biblioteca visual (Vue 3 + Vite)
│   ├── src/
│   │   ├── components/    # 237+ componentes en 14 categorías
│   │   ├── catalog/        # App showcase (Vue)
│   │   └── ...
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/               # API REST + MCP Server (Next.js)
│   ├── app/api/
│   ├── lib/
│   ├── mcp/
│   └── package.json
├── templates/             # Catálogo de plantillas web
│   ├── landing/
│   ├── hero/
│   ├── design/
│   └── package.json
├── catalog/               # Catálogo indexado (JSON + MD)
│   ├── json/components.json
│   └── md/
├── scripts/               # Scripts de build del catálogo
│   └── build-catalog.mjs
├── pnpm-workspace.yaml
└── package.json           # Root workspace
```

## Quick start

```bash
# Instalar dependencias
pnpm install

# Dev server de la biblioteca
pnpm dev:library    # → http://localhost:5174

# Regenerar catálogo (JSON + MD)
pnpm build:catalog
```

## Roadmap

| PRD | Descripción | Issue |
|-----|-------------|-------|
| PRD-01 | Monorepo + estructura de workspaces | [#1](https://github.com/JTRC83/biblioteca-componentes/issues/1) |
| PRD-02 | Sistema de catalogación de componentes (JSON + MD) | [#2](https://github.com/JTRC83/biblioteca-componentes/issues/2) |
| PRD-03 | Backend Next.js + API REST del catálogo | [#3](https://github.com/JTRC83/biblioteca-componentes/issues/3) |
| PRD-04 | MCP Server para conexión IA | [#4](https://github.com/JTRC83/biblioteca-componentes/issues/4) |
| PRD-05 | Catálogo de plantillas web (design.md + prompts) | [#5](https://github.com/JTRC83/biblioteca-componentes/issues/5) |
| PRD-06 | Integración IA + sistema de generación web | [#6](https://github.com/JTRC83/biblioteca-componentes/issues/6) |

## Cómo añadir un componente nuevo

1. Crear `library/src/components/<categoría>/<Nombre>.js`
2. Registrarlo en `library/src/components/<categoría>/index.js`
3. Ejecutar `pnpm build:catalog` para actualizar el catálogo

## Categorías disponibles

`buttons` · `checkboxes` · `toggles` · `cards` · `loaders` · `inputs` · `radios` · `forms` · `tooltips` · `patterns` · `backgrounds` · `animations` · `analog` · `navbars`