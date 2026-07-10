# MCP Server — Biblioteca de Componentes

El MCP Server permite que una IA (Claude, GPT, etc.) consulte la biblioteca de componentes para generar webs adaptadas al cliente.

## Instalación

```bash
# Desde la raíz del monorepo
cd backend
npm install
```

## Configuración

### opencode

Añade esto a tu `opencode.json`:

```json
{
  "mcp": {
    "biblioteca-componentes": {
      "type": "local",
      "command": ["node", "backend/mcp/server.mjs"],
      "cwd": "."
    }
  }
}
```

### Claude Desktop

Añade esto a tu `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "biblioteca-componentes": {
      "command": "node",
      "args": ["/ruta/absoluta/al/proyecto/biblioteca-componentes/backend/mcp/server.mjs"]
    }
  }
}
```

### Cursor / Windsurf

Añade a `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "biblioteca-componentes": {
      "command": "node",
      "args": ["./backend/mcp/server.mjs"]
    }
  }
}
```

### OpenAI Codex (CLI / Desktop / IDE)

Codex usa `config.toml` para configurar MCP servers. Puedes añadirlo de dos formas:

**Opción A — CLI:**

```bash
codex mcp add biblioteca-componentes -- node /ruta/absoluta/al/proyecto/biblioteca-componentes/backend/mcp/server.mjs
```

**Opción B — Manual (`~/.codex/config.toml`):**

```toml
[mcp_servers.biblioteca-componentes]
command = "node"
args = ["/ruta/absoluta/al/proyecto/biblioteca-componentes/backend/mcp/server.mjs"]
```

También puedes añadirlo a nivel de proyecto creando `.codex/config.toml` en la raíz del proyecto.

Una vez configurado, usa `/mcp` en el TUI de Codex para ver el servidor conectado.

## Herramientas (Tools)

| Tool | Descripción |
|------|-------------|
| `search_components` | Busca componentes por texto y/o filtros (category, tags, useCase, style, complexity) |
| `get_component` | Obtiene el detalle completo de un componente (HTML+CSS+metadatos) |
| `get_components_by_use_case` | Devuelve componentes para un caso de uso específico |
| `get_components_by_style` | Devuelve componentes con un estilo visual específico |
| `suggest_components` | Sugiere componentes a partir de una descripción en lenguaje natural |
| `get_template` | Obtiene una plantilla web completa (PRD-05) |
| `list_templates` | Lista plantillas disponibles (PRD-05) |
| `get_design_system` | Obtiene el design system global (estilos, colores, complejidad) |
| `get_adaptation_guide` | Instrucciones específicas para adaptar un componente |

## Recursos (Resources)

| URI | Descripción |
|------|-------------|
| `catalog://components` | Catálogo completo en markdown |
| `catalog://components/{category}` | Componentes de una categoría |
| `catalog://styles` | Estilos disponibles |
| `catalog://design-system` | Design system global (JSON) |
| `catalog://templates` | Plantillas disponibles (PRD-05) |

## Uso

### Iniciar el MCP Server

```bash
cd backend
npm run mcp
```

### Ejemplos de uso con IA

```
Usuario: "Necesito un botón de call to action para mi landing de SaaS"
IA: → suggest_components("call to action button for SaaS landing")
     → get_component("btn-gradient-cta") para ver el código

Usuario: "Busca todos los componentes con estilo glassmorphism"
IA: → get_components_by_style("glassmorphism")

Usuario: "Dame el design system de la biblioteca"
IA: → get_design_system()
```

## Testing

```bash
# Verificar que el server arranca
cd backend && node mcp/server.mjs
# Debería imprimir: [mcp] Biblioteca de Componentes MCP Server running on stdio
```