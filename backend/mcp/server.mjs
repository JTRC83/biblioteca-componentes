/**
 * MCP Server placeholder — PRD-04
 * Se implementará con @modelcontextprotocol/sdk
 */

export function createMcpServer() {
  return {
    name: 'biblioteca-componentes',
    tools: [
      'search_components',
      'get_component',
      'get_components_by_use_case',
      'get_components_by_style',
      'suggest_components',
      'get_template',
      'list_templates',
      'get_design_system',
      'get_adaptation_guide'
    ]
  }
}