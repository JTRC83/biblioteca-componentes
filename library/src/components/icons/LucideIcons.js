/**
 * Iconos de Lucide (~355 iconos curados).
 * Cada icono es un componente CSS-only con SVG inline.
 * Los SVGs se renderizan con stroke=currentColor para heredar el color.
 */

const icon_home = {
  id: 'icon-lucide-home',
  name: 'Home',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'home'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  </div>
  <span class="lucide-icon__name">home</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_search = {
  id: 'icon-lucide-search',
  name: 'Search',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'search'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" />
    </svg>
  </div>
  <span class="lucide-icon__name">search</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_settings = {
  id: 'icon-lucide-settings',
  name: 'Settings',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'settings'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
  <circle cx="12" cy="12" r="3" />
    </svg>
  </div>
  <span class="lucide-icon__name">settings</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_filter = {
  id: 'icon-lucide-filter',
  name: 'Filter',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'filter'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
    </svg>
  </div>
  <span class="lucide-icon__name">filter</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_sliders_horizontal = {
  id: 'icon-lucide-sliders-horizontal',
  name: 'Sliders Horizontal',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'sliders-horizontal'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 5H3" />
  <path d="M12 19H3" />
  <path d="M14 3v4" />
  <path d="M16 17v4" />
  <path d="M21 12h-9" />
  <path d="M21 19h-5" />
  <path d="M21 5h-7" />
  <path d="M8 10v4" />
  <path d="M8 12H3" />
    </svg>
  </div>
  <span class="lucide-icon__name">sliders-horizontal</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_menu = {
  id: 'icon-lucide-menu',
  name: 'Menu',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'menu'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 5h16" />
  <path d="M4 12h16" />
  <path d="M4 19h16" />
    </svg>
  </div>
  <span class="lucide-icon__name">menu</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_x = {
  id: 'icon-lucide-x',
  name: 'X',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'x'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>X</title><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">x</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_check = {
  id: 'icon-lucide-check',
  name: 'Check',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'check'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  </div>
  <span class="lucide-icon__name">check</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_chevron_right = {
  id: 'icon-lucide-chevron-right',
  name: 'Chevron Right',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'chevron-right'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  </div>
  <span class="lucide-icon__name">chevron-right</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_chevron_left = {
  id: 'icon-lucide-chevron-left',
  name: 'Chevron Left',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'chevron-left'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  </div>
  <span class="lucide-icon__name">chevron-left</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_chevron_up = {
  id: 'icon-lucide-chevron-up',
  name: 'Chevron Up',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'chevron-up'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m18 15-6-6-6 6" />
    </svg>
  </div>
  <span class="lucide-icon__name">chevron-up</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_chevron_down = {
  id: 'icon-lucide-chevron-down',
  name: 'Chevron Down',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'chevron-down'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  </div>
  <span class="lucide-icon__name">chevron-down</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_arrow_right = {
  id: 'icon-lucide-arrow-right',
  name: 'Arrow Right',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'arrow-right'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14" />
  <path d="m12 5 7 7-7 7" />
    </svg>
  </div>
  <span class="lucide-icon__name">arrow-right</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_arrow_left = {
  id: 'icon-lucide-arrow-left',
  name: 'Arrow Left',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'arrow-left'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m12 19-7-7 7-7" />
  <path d="M19 12H5" />
    </svg>
  </div>
  <span class="lucide-icon__name">arrow-left</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_arrow_up = {
  id: 'icon-lucide-arrow-up',
  name: 'Arrow Up',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'arrow-up'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m5 12 7-7 7 7" />
  <path d="M12 19V5" />
    </svg>
  </div>
  <span class="lucide-icon__name">arrow-up</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_arrow_down = {
  id: 'icon-lucide-arrow-down',
  name: 'Arrow Down',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'arrow-down'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 5v14" />
  <path d="m19 12-7 7-7-7" />
    </svg>
  </div>
  <span class="lucide-icon__name">arrow-down</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_plus = {
  id: 'icon-lucide-plus',
  name: 'Plus',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'plus'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14" />
  <path d="M12 5v14" />
    </svg>
  </div>
  <span class="lucide-icon__name">plus</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_minus = {
  id: 'icon-lucide-minus',
  name: 'Minus',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'minus'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14" />
    </svg>
  </div>
  <span class="lucide-icon__name">minus</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_circle = {
  id: 'icon-lucide-circle',
  name: 'Circle',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'circle'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Circle</title><path d="M20.788 3.832c-.101-.105-.197-.213-.301-.317-.103-.103-.211-.202-.32-.302A11.903 11.903 0 0 0 12 0a11.926 11.926 0 0 0-8.486 3.514C-1.062 8.09-1.16 15.47 3.213 20.168c.099.108.197.214.3.32.104.103.21.2.317.3A11.92 11.92 0 0 0 12 24c3.206 0 6.22-1.247 8.487-3.512 4.576-4.576 4.673-11.956.301-16.656zm-16.655.301A11.057 11.057 0 0 1 12 .874c2.825 0 5.49 1.048 7.55 2.958l-1.001 1.002A9.646 9.646 0 0 0 12 2.292a9.644 9.644 0 0 0-6.865 2.844A9.644 9.644 0 0 0 2.292 12c0 2.448.9 4.753 2.542 6.549L3.831 19.55C-.201 15.191-.101 8.367 4.133 4.133zm13.798 1.318v.002l-1.015 1.014A7.346 7.346 0 0 0 12 4.589 7.357 7.357 0 0 0 6.761 6.76 7.362 7.362 0 0 0 4.589 12a7.34 7.34 0 0 0 1.877 4.913l-1.014 1.016A8.77 8.77 0 0 1 3.167 12a8.77 8.77 0 0 1 2.588-6.245A8.771 8.771 0 0 1 12 3.167c2.213 0 4.301.809 5.931 2.284zM18.537 12c0 1.745-.681 3.387-1.916 4.622S13.746 18.538 12 18.538a6.491 6.491 0 0 1-4.296-1.621l-.001-.004c-.11-.094-.22-.188-.324-.291a6.027 6.027 0 0 1-.293-.326A6.47 6.47 0 0 1 5.466 12c0-1.746.679-3.387 1.914-4.621A6.488 6.488 0 0 1 12 5.465c1.599 0 3.105.576 4.295 1.62.111.096.224.19.326.295.104.104.2.214.295.324A6.482 6.482 0 0 1 18.537 12zM7.084 17.534h.001A7.349 7.349 0 0 0 12 19.413a7.35 7.35 0 0 0 5.239-2.174A7.354 7.354 0 0 0 19.412 12a7.364 7.364 0 0 0-1.876-4.916l1.013-1.012A8.777 8.777 0 0 1 20.834 12a8.765 8.765 0 0 1-2.589 6.246A8.764 8.764 0 0 1 12 20.834a8.782 8.782 0 0 1-5.93-2.285l1.014-1.015zm12.783 2.333A11.046 11.046 0 0 1 12 23.125a11.042 11.042 0 0 1-7.551-2.957l1.004-1.001a9.64 9.64 0 0 0 6.549 2.542 9.639 9.639 0 0 0 6.865-2.846A9.642 9.642 0 0 0 21.71 12a9.64 9.64 0 0 0-2.543-6.548l1.001-1.002c4.031 4.359 3.935 11.182-.301 15.417z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">circle</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_square = {
  id: 'icon-lucide-square',
  name: 'Square',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'square'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Square</title><path d="M4.01 0A4.01 4.01 0 000 4.01v15.98c0 2.21 1.8 4 4.01 4.01h15.98C22.2 24 24 22.2 24 19.99V4A4.01 4.01 0 0019.99 0H4zm1.62 4.36h12.74c.7 0 1.26.57 1.26 1.27v12.74c0 .7-.56 1.27-1.26 1.27H5.63c-.7 0-1.26-.57-1.26-1.27V5.63a1.27 1.27 0 011.26-1.27zm3.83 4.35a.73.73 0 00-.73.73v5.09c0 .4.32.72.72.72h5.1a.73.73 0 00.73-.72V9.44a.73.73 0 00-.73-.73h-5.1Z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">square</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_triangle = {
  id: 'icon-lucide-triangle',
  name: 'Triangle',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'triangle'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    </svg>
  </div>
  <span class="lucide-icon__name">triangle</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_more_horizontal = {
  id: 'icon-lucide-more-horizontal',
  name: 'More Horizontal',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'more-horizontal'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1" />
  <circle cx="19" cy="12" r="1" />
  <circle cx="5" cy="12" r="1" />
    </svg>
  </div>
  <span class="lucide-icon__name">more-horizontal</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_more_vertical = {
  id: 'icon-lucide-more-vertical',
  name: 'More Vertical',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'more-vertical'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="1" />
  <circle cx="12" cy="5" r="1" />
  <circle cx="12" cy="19" r="1" />
    </svg>
  </div>
  <span class="lucide-icon__name">more-vertical</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_grid = {
  id: 'icon-lucide-grid',
  name: 'Grid',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'grid'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M3 9h18" />
  <path d="M3 15h18" />
  <path d="M9 3v18" />
  <path d="M15 3v18" />
    </svg>
  </div>
  <span class="lucide-icon__name">grid</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_list = {
  id: 'icon-lucide-list',
  name: 'List',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'list'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 5h.01" />
  <path d="M3 12h.01" />
  <path d="M3 19h.01" />
  <path d="M8 5h13" />
  <path d="M8 12h13" />
  <path d="M8 19h13" />
    </svg>
  </div>
  <span class="lucide-icon__name">list</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_columns = {
  id: 'icon-lucide-columns',
  name: 'Columns',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'columns'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M12 3v18" />
    </svg>
  </div>
  <span class="lucide-icon__name">columns</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_layout = {
  id: 'icon-lucide-layout',
  name: 'Layout',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'layout'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M3 9h18" />
  <path d="M9 21V9" />
    </svg>
  </div>
  <span class="lucide-icon__name">layout</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_sidebar = {
  id: 'icon-lucide-sidebar',
  name: 'Sidebar',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'sidebar'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M9 3v18" />
    </svg>
  </div>
  <span class="lucide-icon__name">sidebar</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_maximize = {
  id: 'icon-lucide-maximize',
  name: 'Maximize',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'maximize'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
  <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
  <path d="M3 16v3a2 2 0 0 0 2 2h3" />
  <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  </div>
  <span class="lucide-icon__name">maximize</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_minimize = {
  id: 'icon-lucide-minimize',
  name: 'Minimize',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'minimize'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
  <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
  <path d="M3 16h3a2 2 0 0 1 2 2v3" />
  <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </svg>
  </div>
  <span class="lucide-icon__name">minimize</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_expand = {
  id: 'icon-lucide-expand',
  name: 'Expand',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'expand'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m15 15 6 6" />
  <path d="m15 9 6-6" />
  <path d="M21 16v5h-5" />
  <path d="M21 8V3h-5" />
  <path d="M3 16v5h5" />
  <path d="m3 21 6-6" />
  <path d="M3 8V3h5" />
  <path d="M9 9 3 3" />
    </svg>
  </div>
  <span class="lucide-icon__name">expand</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_shrink = {
  id: 'icon-lucide-shrink',
  name: 'Shrink',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'shrink'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" />
  <path d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
  <path d="M15 4.2V9m0 0h4.8M15 9l6-6" />
  <path d="M9 4.2V9m0 0H4.2M9 9 3 3" />
    </svg>
  </div>
  <span class="lucide-icon__name">shrink</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_fullscreen = {
  id: 'icon-lucide-fullscreen',
  name: 'Fullscreen',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'fullscreen'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
  <rect width="10" height="8" x="7" y="8" rx="1" />
    </svg>
  </div>
  <span class="lucide-icon__name">fullscreen</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_rotate_cw = {
  id: 'icon-lucide-rotate-cw',
  name: 'Rotate Cw',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'rotate-cw'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
  <path d="M21 3v5h-5" />
    </svg>
  </div>
  <span class="lucide-icon__name">rotate-cw</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_rotate_ccw = {
  id: 'icon-lucide-rotate-ccw',
  name: 'Rotate Ccw',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'rotate-ccw'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
    </svg>
  </div>
  <span class="lucide-icon__name">rotate-ccw</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_move = {
  id: 'icon-lucide-move',
  name: 'Move',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'move'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v20" />
  <path d="m15 19-3 3-3-3" />
  <path d="m19 9 3 3-3 3" />
  <path d="M2 12h20" />
  <path d="m5 9-3 3 3 3" />
  <path d="m9 5 3-3 3 3" />
    </svg>
  </div>
  <span class="lucide-icon__name">move</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_scale = {
  id: 'icon-lucide-scale',
  name: 'Scale',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'scale'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3v18" />
  <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
  <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
  <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
  <path d="M7 21h10" />
    </svg>
  </div>
  <span class="lucide-icon__name">scale</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_crop = {
  id: 'icon-lucide-crop',
  name: 'Crop',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'crop'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 2v14a2 2 0 0 0 2 2h14" />
  <path d="M18 22V8a2 2 0 0 0-2-2H2" />
    </svg>
  </div>
  <span class="lucide-icon__name">crop</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_scissors = {
  id: 'icon-lucide-scissors',
  name: 'Scissors',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'scissors'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="6" cy="6" r="3" />
  <path d="M8.12 8.12 12 12" />
  <path d="M20 4 8.12 15.88" />
  <circle cx="6" cy="18" r="3" />
  <path d="M14.8 14.8 20 20" />
    </svg>
  </div>
  <span class="lucide-icon__name">scissors</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_corner_up_left = {
  id: 'icon-lucide-corner-up-left',
  name: 'Corner Up Left',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'corner-up-left'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  <path d="M9 14 4 9l5-5" />
    </svg>
  </div>
  <span class="lucide-icon__name">corner-up-left</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_corner_up_right = {
  id: 'icon-lucide-corner-up-right',
  name: 'Corner Up Right',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'corner-up-right'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m15 14 5-5-5-5" />
  <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
    </svg>
  </div>
  <span class="lucide-icon__name">corner-up-right</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_corner_down_left = {
  id: 'icon-lucide-corner-down-left',
  name: 'Corner Down Left',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'corner-down-left'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 4v7a4 4 0 0 1-4 4H4" />
  <path d="m9 10-5 5 5 5" />
    </svg>
  </div>
  <span class="lucide-icon__name">corner-down-left</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_corner_down_right = {
  id: 'icon-lucide-corner-down-right',
  name: 'Corner Down Right',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'corner-down-right'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m15 10 5 5-5 5" />
  <path d="M4 4v7a4 4 0 0 0 4 4h12" />
    </svg>
  </div>
  <span class="lucide-icon__name">corner-down-right</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_arrow_up_right = {
  id: 'icon-lucide-arrow-up-right',
  name: 'Arrow Up Right',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'arrow-up-right'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 7h10v10" />
  <path d="M7 17 17 7" />
    </svg>
  </div>
  <span class="lucide-icon__name">arrow-up-right</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_arrow_up_left = {
  id: 'icon-lucide-arrow-up-left',
  name: 'Arrow Up Left',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'arrow-up-left'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 17V7h10" />
  <path d="M17 17 7 7" />
    </svg>
  </div>
  <span class="lucide-icon__name">arrow-up-left</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_arrow_down_right = {
  id: 'icon-lucide-arrow-down-right',
  name: 'Arrow Down Right',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'arrow-down-right'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m7 7 10 10" />
  <path d="M17 7v10H7" />
    </svg>
  </div>
  <span class="lucide-icon__name">arrow-down-right</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_arrow_down_left = {
  id: 'icon-lucide-arrow-down-left',
  name: 'Arrow Down Left',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'arrow-down-left'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 7 7 17" />
  <path d="M17 17H7V7" />
    </svg>
  </div>
  <span class="lucide-icon__name">arrow-down-left</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_external_link = {
  id: 'icon-lucide-external-link',
  name: 'External Link',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'external-link'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 3h6v6" />
  <path d="M10 14 21 3" />
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  </div>
  <span class="lucide-icon__name">external-link</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_link = {
  id: 'icon-lucide-link',
  name: 'Link',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'link'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  </div>
  <span class="lucide-icon__name">link</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_unlink = {
  id: 'icon-lucide-unlink',
  name: 'Unlink',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'unlink'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
  <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
  <line x1="8" x2="8" y1="2" y2="5" />
  <line x1="2" x2="5" y1="8" y2="8" />
  <line x1="16" x2="16" y1="19" y2="22" />
  <line x1="19" x2="22" y1="16" y2="16" />
    </svg>
  </div>
  <span class="lucide-icon__name">unlink</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_pencil = {
  id: 'icon-lucide-pencil',
  name: 'Pencil',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'pencil'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" />
    </svg>
  </div>
  <span class="lucide-icon__name">pencil</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_pen_tool = {
  id: 'icon-lucide-pen-tool',
  name: 'Pen Tool',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'pen-tool'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
  <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
  <path d="m2.3 2.3 7.286 7.286" />
  <circle cx="11" cy="11" r="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">pen-tool</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_edit = {
  id: 'icon-lucide-edit',
  name: 'Edit',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'edit'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
    </svg>
  </div>
  <span class="lucide-icon__name">edit</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_edit_3 = {
  id: 'icon-lucide-edit-3',
  name: 'Edit 3',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'edit-3'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 21h8" />
  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    </svg>
  </div>
  <span class="lucide-icon__name">edit-3</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_eraser = {
  id: 'icon-lucide-eraser',
  name: 'Eraser',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'eraser'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Eraser</title><path d="M4.186 7.328c-.248 0-.482.168-.608.443l-3.476 7.51c-.283.61.057 1.39.605 1.39h10.682V7.329zm8.425 0-.002 9.344h7.205c.248 0 .482-.168.608-.443l3.476-7.51c.283-.61-.057-1.39-.605-1.39Z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">eraser</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_brush = {
  id: 'icon-lucide-brush',
  name: 'Brush',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'brush'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m11 10 3 3" />
  <path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z" />
  <path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031" />
    </svg>
  </div>
  <span class="lucide-icon__name">brush</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_paintbrush = {
  id: 'icon-lucide-paintbrush',
  name: 'Paintbrush',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'paintbrush'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m14.622 17.897-10.68-2.913" />
  <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" />
  <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" />
    </svg>
  </div>
  <span class="lucide-icon__name">paintbrush</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_paint_bucket = {
  id: 'icon-lucide-paint-bucket',
  name: 'Paint Bucket',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'paint-bucket'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 7 6 2" />
  <path d="M18.992 12H2.041" />
  <path d="M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595" />
  <path d="m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33" />
    </svg>
  </div>
  <span class="lucide-icon__name">paint-bucket</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_palette = {
  id: 'icon-lucide-palette',
  name: 'Palette',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'palette'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  </div>
  <span class="lucide-icon__name">palette</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_pipette = {
  id: 'icon-lucide-pipette',
  name: 'Pipette',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'pipette'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12" />
  <path d="m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" />
  <path d="m2 22 .414-.414" />
    </svg>
  </div>
  <span class="lucide-icon__name">pipette</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_frame = {
  id: 'icon-lucide-frame',
  name: 'Frame',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'frame'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="22" x2="2" y1="6" y2="6" />
  <line x1="22" x2="2" y1="18" y2="18" />
  <line x1="6" x2="6" y1="2" y2="22" />
  <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  </div>
  <span class="lucide-icon__name">frame</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_group = {
  id: 'icon-lucide-group',
  name: 'Group',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'group'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
  <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
  <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
  <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
  <rect width="7" height="5" x="7" y="7" rx="1" />
  <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  </div>
  <span class="lucide-icon__name">group</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_ungroup = {
  id: 'icon-lucide-ungroup',
  name: 'Ungroup',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'ungroup'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="11" y="14" width="10" height="7" rx="2" />
  <rect x="3" y="3" width="10" height="7" rx="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">ungroup</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_layers = {
  id: 'icon-lucide-layers',
  name: 'Layers',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'layers'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
  <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
  <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
    </svg>
  </div>
  <span class="lucide-icon__name">layers</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_wand = {
  id: 'icon-lucide-wand',
  name: 'Wand',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'wand'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 4V2" />
  <path d="M15 16v-2" />
  <path d="M8 9h2" />
  <path d="M20 9h2" />
  <path d="M17.8 11.8 19 13" />
  <path d="M15 9h.01" />
  <path d="M17.8 6.2 19 5" />
  <path d="m3 21 9-9" />
  <path d="M12.2 6.2 11 5" />
    </svg>
  </div>
  <span class="lucide-icon__name">wand</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_wand_2 = {
  id: 'icon-lucide-wand-2',
  name: 'Wand 2',
  category: 'icons',
  iconCategory: 'UI',
  tags: ['lucide', 'icon', 'svg', 'wand-2'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
  <path d="m14 7 3 3" />
  <path d="M5 6v4" />
  <path d="M19 14v4" />
  <path d="M10 2v2" />
  <path d="M7 8H3" />
  <path d="M21 16h-4" />
  <path d="M11 3H9" />
    </svg>
  </div>
  <span class="lucide-icon__name">wand-2</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_user = {
  id: 'icon-lucide-user',
  name: 'User',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'user'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
  <circle cx="12" cy="7" r="4" />
    </svg>
  </div>
  <span class="lucide-icon__name">user</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_users = {
  id: 'icon-lucide-users',
  name: 'Users',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'users'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  <circle cx="9" cy="7" r="4" />
    </svg>
  </div>
  <span class="lucide-icon__name">users</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_user_plus = {
  id: 'icon-lucide-user-plus',
  name: 'User Plus',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'user-plus'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <line x1="19" x2="19" y1="8" y2="14" />
  <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  </div>
  <span class="lucide-icon__name">user-plus</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_user_minus = {
  id: 'icon-lucide-user-minus',
  name: 'User Minus',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'user-minus'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  </div>
  <span class="lucide-icon__name">user-minus</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_user_check = {
  id: 'icon-lucide-user-check',
  name: 'User Check',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'user-check'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m16 11 2 2 4-4" />
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
    </svg>
  </div>
  <span class="lucide-icon__name">user-check</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_user_x = {
  id: 'icon-lucide-user-x',
  name: 'User X',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'user-x'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <line x1="17" x2="22" y1="8" y2="13" />
  <line x1="22" x2="17" y1="8" y2="13" />
    </svg>
  </div>
  <span class="lucide-icon__name">user-x</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_heart = {
  id: 'icon-lucide-heart',
  name: 'Heart',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'heart'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    </svg>
  </div>
  <span class="lucide-icon__name">heart</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_star = {
  id: 'icon-lucide-star',
  name: 'Star',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'star'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  </div>
  <span class="lucide-icon__name">star</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_bookmark = {
  id: 'icon-lucide-bookmark',
  name: 'Bookmark',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'bookmark'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
    </svg>
  </div>
  <span class="lucide-icon__name">bookmark</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_share = {
  id: 'icon-lucide-share',
  name: 'Share',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'share'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v13" />
  <path d="m16 6-4-4-4 4" />
  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    </svg>
  </div>
  <span class="lucide-icon__name">share</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_share_2 = {
  id: 'icon-lucide-share-2',
  name: 'Share 2',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'share-2'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  </div>
  <span class="lucide-icon__name">share-2</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_link_2 = {
  id: 'icon-lucide-link-2',
  name: 'Link 2',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'link-2'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
  <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
  <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  </div>
  <span class="lucide-icon__name">link-2</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_mail = {
  id: 'icon-lucide-mail',
  name: 'Mail',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'mail'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
  <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">mail</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_phone = {
  id: 'icon-lucide-phone',
  name: 'Phone',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'phone'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  </div>
  <span class="lucide-icon__name">phone</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_message_circle = {
  id: 'icon-lucide-message-circle',
  name: 'Message Circle',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'message-circle'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
    </svg>
  </div>
  <span class="lucide-icon__name">message-circle</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_message_square = {
  id: 'icon-lucide-message-square',
  name: 'Message Square',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'message-square'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
    </svg>
  </div>
  <span class="lucide-icon__name">message-square</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_send = {
  id: 'icon-lucide-send',
  name: 'Send',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'send'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
  <path d="m21.854 2.147-10.94 10.939" />
    </svg>
  </div>
  <span class="lucide-icon__name">send</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_bell = {
  id: 'icon-lucide-bell',
  name: 'Bell',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'bell'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
    </svg>
  </div>
  <span class="lucide-icon__name">bell</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_bell_off = {
  id: 'icon-lucide-bell-off',
  name: 'Bell Off',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'bell-off'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
  <path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742" />
  <path d="m2 2 20 20" />
  <path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" />
    </svg>
  </div>
  <span class="lucide-icon__name">bell-off</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_at_sign = {
  id: 'icon-lucide-at-sign',
  name: 'At Sign',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'at-sign'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4" />
  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </svg>
  </div>
  <span class="lucide-icon__name">at-sign</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_hash = {
  id: 'icon-lucide-hash',
  name: 'Hash',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'hash'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="4" x2="20" y1="9" y2="9" />
  <line x1="4" x2="20" y1="15" y2="15" />
  <line x1="10" x2="8" y1="3" y2="21" />
  <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  </div>
  <span class="lucide-icon__name">hash</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_thumbs_up = {
  id: 'icon-lucide-thumbs-up',
  name: 'Thumbs Up',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'thumbs-up'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
  <path d="M7 10v12" />
    </svg>
  </div>
  <span class="lucide-icon__name">thumbs-up</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_thumbs_down = {
  id: 'icon-lucide-thumbs-down',
  name: 'Thumbs Down',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'thumbs-down'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
  <path d="M17 14V2" />
    </svg>
  </div>
  <span class="lucide-icon__name">thumbs-down</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_smile = {
  id: 'icon-lucide-smile',
  name: 'Smile',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'smile'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
  <line x1="9" x2="9.01" y1="9" y2="9" />
  <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  </div>
  <span class="lucide-icon__name">smile</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_frown = {
  id: 'icon-lucide-frown',
  name: 'Frown',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'frown'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
  <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
  <line x1="9" x2="9.01" y1="9" y2="9" />
  <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  </div>
  <span class="lucide-icon__name">frown</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_meh = {
  id: 'icon-lucide-meh',
  name: 'Meh',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'meh'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
  <line x1="8" x2="16" y1="15" y2="15" />
  <line x1="9" x2="9.01" y1="9" y2="9" />
  <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  </div>
  <span class="lucide-icon__name">meh</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_laugh = {
  id: 'icon-lucide-laugh',
  name: 'Laugh',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'laugh'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
  <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" />
  <line x1="9" x2="9.01" y1="9" y2="9" />
  <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  </div>
  <span class="lucide-icon__name">laugh</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_angry = {
  id: 'icon-lucide-angry',
  name: 'Angry',
  category: 'icons',
  iconCategory: 'User & Social',
  tags: ['lucide', 'icon', 'svg', 'angry'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
  <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
  <path d="M7.5 8 10 9" />
  <path d="m14 9 2.5-1" />
  <path d="M9 10h.01" />
  <path d="M15 10h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">angry</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_play = {
  id: 'icon-lucide-play',
  name: 'Play',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'play'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
    </svg>
  </div>
  <span class="lucide-icon__name">play</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_pause = {
  id: 'icon-lucide-pause',
  name: 'Pause',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'pause'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="14" y="3" width="5" height="18" rx="1" />
  <rect x="5" y="3" width="5" height="18" rx="1" />
    </svg>
  </div>
  <span class="lucide-icon__name">pause</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_skip_forward = {
  id: 'icon-lucide-skip-forward',
  name: 'Skip Forward',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'skip-forward'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 4v16" />
  <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
    </svg>
  </div>
  <span class="lucide-icon__name">skip-forward</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_skip_back = {
  id: 'icon-lucide-skip-back',
  name: 'Skip Back',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'skip-back'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" />
  <path d="M3 20V4" />
    </svg>
  </div>
  <span class="lucide-icon__name">skip-back</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_fast_forward = {
  id: 'icon-lucide-fast-forward',
  name: 'Fast Forward',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'fast-forward'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" />
  <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" />
    </svg>
  </div>
  <span class="lucide-icon__name">fast-forward</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_rewind = {
  id: 'icon-lucide-rewind',
  name: 'Rewind',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'rewind'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" />
  <path d="M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" />
    </svg>
  </div>
  <span class="lucide-icon__name">rewind</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_volume_2 = {
  id: 'icon-lucide-volume-2',
  name: 'Volume 2',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'volume-2'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />
  <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
    </svg>
  </div>
  <span class="lucide-icon__name">volume-2</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_volume_1 = {
  id: 'icon-lucide-volume-1',
  name: 'Volume 1',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'volume-1'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />
    </svg>
  </div>
  <span class="lucide-icon__name">volume-1</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_volume_x = {
  id: 'icon-lucide-volume-x',
  name: 'Volume X',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'volume-x'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <line x1="22" x2="16" y1="9" y2="15" />
  <line x1="16" x2="22" y1="9" y2="15" />
    </svg>
  </div>
  <span class="lucide-icon__name">volume-x</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_headphones = {
  id: 'icon-lucide-headphones',
  name: 'Headphones',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'headphones'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  </div>
  <span class="lucide-icon__name">headphones</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_mic = {
  id: 'icon-lucide-mic',
  name: 'Mic',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'mic'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 19v3" />
  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
  <rect x="9" y="2" width="6" height="13" rx="3" />
    </svg>
  </div>
  <span class="lucide-icon__name">mic</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_mic_off = {
  id: 'icon-lucide-mic-off',
  name: 'Mic Off',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'mic-off'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 19v3" />
  <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
  <path d="M16.95 16.95A7 7 0 0 1 5 12v-2" />
  <path d="M18.89 13.23A7 7 0 0 0 19 12v-2" />
  <path d="m2 2 20 20" />
  <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
    </svg>
  </div>
  <span class="lucide-icon__name">mic-off</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_camera = {
  id: 'icon-lucide-camera',
  name: 'Camera',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'camera'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
  <circle cx="12" cy="13" r="3" />
    </svg>
  </div>
  <span class="lucide-icon__name">camera</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_video = {
  id: 'icon-lucide-video',
  name: 'Video',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'video'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
  <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">video</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_film = {
  id: 'icon-lucide-film',
  name: 'Film',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'film'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M7 3v18" />
  <path d="M3 7.5h4" />
  <path d="M3 12h18" />
  <path d="M3 16.5h4" />
  <path d="M17 3v18" />
  <path d="M17 7.5h4" />
  <path d="M17 16.5h4" />
    </svg>
  </div>
  <span class="lucide-icon__name">film</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_image = {
  id: 'icon-lucide-image',
  name: 'Image',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'image'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <circle cx="9" cy="9" r="2" />
  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  </div>
  <span class="lucide-icon__name">image</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_images = {
  id: 'icon-lucide-images',
  name: 'Images',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'images'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" />
  <path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" />
  <circle cx="13" cy="7" r="1" fill="currentColor" />
  <rect x="8" y="2" width="14" height="14" rx="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">images</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_music = {
  id: 'icon-lucide-music',
  name: 'Music',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'music'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18V5l12-2v13" />
  <circle cx="6" cy="18" r="3" />
  <circle cx="18" cy="16" r="3" />
    </svg>
  </div>
  <span class="lucide-icon__name">music</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_music_2 = {
  id: 'icon-lucide-music-2',
  name: 'Music 2',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'music-2'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="8" cy="18" r="4" />
  <path d="M12 18V2l7 4" />
    </svg>
  </div>
  <span class="lucide-icon__name">music-2</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_music_3 = {
  id: 'icon-lucide-music-3',
  name: 'Music 3',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'music-3'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="18" r="4" />
  <path d="M16 18V2" />
    </svg>
  </div>
  <span class="lucide-icon__name">music-3</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_music_4 = {
  id: 'icon-lucide-music-4',
  name: 'Music 4',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'music-4'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18V5l12-2v13" />
  <path d="m9 9 12-2" />
  <circle cx="6" cy="18" r="3" />
  <circle cx="18" cy="16" r="3" />
    </svg>
  </div>
  <span class="lucide-icon__name">music-4</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_podcast = {
  id: 'icon-lucide-podcast',
  name: 'Podcast',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'podcast'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z" fill="currentColor" />
  <path d="M16.85 18.58a9 9 0 1 0-9.7 0" />
  <path d="M8 14a5 5 0 1 1 8 0" />
  <circle cx="12" cy="11" r="1" fill="currentColor" />
    </svg>
  </div>
  <span class="lucide-icon__name">podcast</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_radio = {
  id: 'icon-lucide-radio',
  name: 'Radio',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'radio'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16.247 7.761a6 6 0 0 1 0 8.478" />
  <path d="M19.075 4.933a10 10 0 0 1 0 14.134" />
  <path d="M4.925 19.067a10 10 0 0 1 0-14.134" />
  <path d="M7.753 16.239a6 6 0 0 1 0-8.478" />
  <circle cx="12" cy="12" r="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">radio</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_tv = {
  id: 'icon-lucide-tv',
  name: 'Tv',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'tv'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m17 2-5 5-5-5" />
  <rect width="20" height="15" x="2" y="7" rx="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">tv</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_monitor = {
  id: 'icon-lucide-monitor',
  name: 'Monitor',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'monitor'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="14" x="2" y="3" rx="2" />
  <line x1="8" x2="16" y1="21" y2="21" />
  <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  </div>
  <span class="lucide-icon__name">monitor</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_smartphone = {
  id: 'icon-lucide-smartphone',
  name: 'Smartphone',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'smartphone'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
  <path d="M12 18h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">smartphone</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_tablet = {
  id: 'icon-lucide-tablet',
  name: 'Tablet',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'tablet'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
  <line x1="12" x2="12.01" y1="18" y2="18" />
    </svg>
  </div>
  <span class="lucide-icon__name">tablet</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_laptop = {
  id: 'icon-lucide-laptop',
  name: 'Laptop',
  category: 'icons',
  iconCategory: 'Media',
  tags: ['lucide', 'icon', 'svg', 'laptop'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" />
  <path d="M20.054 15.987H3.946" />
    </svg>
  </div>
  <span class="lucide-icon__name">laptop</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_file = {
  id: 'icon-lucide-file',
  name: 'File',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'file'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
    </svg>
  </div>
  <span class="lucide-icon__name">file</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_file_text = {
  id: 'icon-lucide-file-text',
  name: 'File Text',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'file-text'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" />
    </svg>
  </div>
  <span class="lucide-icon__name">file-text</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_file_plus = {
  id: 'icon-lucide-file-plus',
  name: 'File Plus',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'file-plus'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M9 15h6" />
  <path d="M12 18v-6" />
    </svg>
  </div>
  <span class="lucide-icon__name">file-plus</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_file_minus = {
  id: 'icon-lucide-file-minus',
  name: 'File Minus',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'file-minus'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M9 15h6" />
    </svg>
  </div>
  <span class="lucide-icon__name">file-minus</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_file_check = {
  id: 'icon-lucide-file-check',
  name: 'File Check',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'file-check'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="m9 15 2 2 4-4" />
    </svg>
  </div>
  <span class="lucide-icon__name">file-check</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_file_x = {
  id: 'icon-lucide-file-x',
  name: 'File X',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'file-x'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="m14.5 12.5-5 5" />
  <path d="m9.5 12.5 5 5" />
    </svg>
  </div>
  <span class="lucide-icon__name">file-x</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_folder = {
  id: 'icon-lucide-folder',
  name: 'Folder',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'folder'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  </div>
  <span class="lucide-icon__name">folder</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_folder_plus = {
  id: 'icon-lucide-folder-plus',
  name: 'Folder Plus',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'folder-plus'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 10v6" />
  <path d="M9 13h6" />
  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  </div>
  <span class="lucide-icon__name">folder-plus</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_folder_minus = {
  id: 'icon-lucide-folder-minus',
  name: 'Folder Minus',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'folder-minus'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 13h6" />
  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  </div>
  <span class="lucide-icon__name">folder-minus</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_folder_open = {
  id: 'icon-lucide-folder-open',
  name: 'Folder Open',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'folder-open'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
    </svg>
  </div>
  <span class="lucide-icon__name">folder-open</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_archive = {
  id: 'icon-lucide-archive',
  name: 'Archive',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'archive'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="5" x="2" y="3" rx="1" />
  <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
  <path d="M10 12h4" />
    </svg>
  </div>
  <span class="lucide-icon__name">archive</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_database = {
  id: 'icon-lucide-database',
  name: 'Database',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'database'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
  <path d="M3 5V19A9 3 0 0 0 21 19V5" />
  <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  </div>
  <span class="lucide-icon__name">database</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_server = {
  id: 'icon-lucide-server',
  name: 'Server',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'server'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
  <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
  <line x1="6" x2="6.01" y1="6" y2="6" />
  <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  </div>
  <span class="lucide-icon__name">server</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_hard_drive = {
  id: 'icon-lucide-hard-drive',
  name: 'Hard Drive',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'hard-drive'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 16h.01" />
  <path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  <path d="M21.946 12.013H2.054" />
  <path d="M6 16h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">hard-drive</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_cloud = {
  id: 'icon-lucide-cloud',
  name: 'Cloud',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'cloud'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  </div>
  <span class="lucide-icon__name">cloud</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_cloud_upload = {
  id: 'icon-lucide-cloud-upload',
  name: 'Cloud Upload',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'cloud-upload'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 13v8" />
  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
  <path d="m8 17 4-4 4 4" />
    </svg>
  </div>
  <span class="lucide-icon__name">cloud-upload</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_cloud_download = {
  id: 'icon-lucide-cloud-download',
  name: 'Cloud Download',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'cloud-download'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 13v8l-4-4" />
  <path d="m12 21 4-4" />
  <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" />
    </svg>
  </div>
  <span class="lucide-icon__name">cloud-download</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_download = {
  id: 'icon-lucide-download',
  name: 'Download',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'download'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" />
    </svg>
  </div>
  <span class="lucide-icon__name">download</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_upload = {
  id: 'icon-lucide-upload',
  name: 'Upload',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'upload'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    </svg>
  </div>
  <span class="lucide-icon__name">upload</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_paperclip = {
  id: 'icon-lucide-paperclip',
  name: 'Paperclip',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'paperclip'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" />
    </svg>
  </div>
  <span class="lucide-icon__name">paperclip</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_clipboard = {
  id: 'icon-lucide-clipboard',
  name: 'Clipboard',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'clipboard'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  </div>
  <span class="lucide-icon__name">clipboard</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_clipboard_list = {
  id: 'icon-lucide-clipboard-list',
  name: 'Clipboard List',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'clipboard-list'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  <path d="M12 11h4" />
  <path d="M12 16h4" />
  <path d="M8 11h.01" />
  <path d="M8 16h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">clipboard-list</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_clipboard_check = {
  id: 'icon-lucide-clipboard-check',
  name: 'Clipboard Check',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'clipboard-check'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  <path d="m9 14 2 2 4-4" />
    </svg>
  </div>
  <span class="lucide-icon__name">clipboard-check</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_copy = {
  id: 'icon-lucide-copy',
  name: 'Copy',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'copy'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  </div>
  <span class="lucide-icon__name">copy</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_trash = {
  id: 'icon-lucide-trash',
  name: 'Trash',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'trash'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  </div>
  <span class="lucide-icon__name">trash</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_trash_2 = {
  id: 'icon-lucide-trash-2',
  name: 'Trash 2',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'trash-2'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  </div>
  <span class="lucide-icon__name">trash-2</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_save = {
  id: 'icon-lucide-save',
  name: 'Save',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'save'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
  <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
  <path d="M7 3v4a1 1 0 0 0 1 1h7" />
    </svg>
  </div>
  <span class="lucide-icon__name">save</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_printer = {
  id: 'icon-lucide-printer',
  name: 'Printer',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'printer'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
  <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
  <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  </div>
  <span class="lucide-icon__name">printer</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_scan = {
  id: 'icon-lucide-scan',
  name: 'Scan',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'scan'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Scan</title><path d="M23.363 9.13a5.8 5.8 0 0 1 0 5.285l-3.376 5.948a6.11 6.11 0 0 1-4.603 2.853h-6.76a6.09 6.09 0 0 1-4.605-2.83l-3.384-6.03a5.8 5.8 0 0 1 0-5.276l3.384-5.806A5.73 5.73 0 0 1 8.623.784h6.76a5.74 5.74 0 0 1 4.605 2.49zm-14.47 5.94a2.22 2.22 0 0 0-1.542.73 5.41 5.41 0 0 0 4.43 2.44 4.305 4.305 0 0 0 4.886-3.716c.124-3.02-2.04-3.834-4.264-4.248-1.12-.232-2.207-.382-2.207-1.427 0-.888.946-1.26 1.95-1.26a2.49 2.49 0 0 1 2.132 1.21l2.182-1.46a4.98 4.98 0 0 0-4.314-2.256c-2.298 0-4.513 1.27-4.662 3.683 0 2.821 2.04 3.759 4.048 4.066 1.319.183 2.489.43 2.489 1.535 0 1.302-1.012 1.6-2.15 1.6-1.658 0-1.658-.88-2.92-.88"/>
    </svg>
  </div>
  <span class="lucide-icon__name">scan</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_file_code = {
  id: 'icon-lucide-file-code',
  name: 'File Code',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'file-code'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 12.5 8 15l2 2.5" />
  <path d="m14 12.5 2 2.5-2 2.5" />
    </svg>
  </div>
  <span class="lucide-icon__name">file-code</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_code = {
  id: 'icon-lucide-code',
  name: 'Code',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'code'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m16 18 6-6-6-6" />
  <path d="m8 6-6 6 6 6" />
    </svg>
  </div>
  <span class="lucide-icon__name">code</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_terminal = {
  id: 'icon-lucide-terminal',
  name: 'Terminal',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'terminal'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 19h8" />
  <path d="m4 17 6-6-6-6" />
    </svg>
  </div>
  <span class="lucide-icon__name">terminal</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_git_branch = {
  id: 'icon-lucide-git-branch',
  name: 'Git Branch',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'git-branch'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 6a9 9 0 0 0-9 9V3" />
  <circle cx="18" cy="6" r="3" />
  <circle cx="6" cy="18" r="3" />
    </svg>
  </div>
  <span class="lucide-icon__name">git-branch</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_git_commit = {
  id: 'icon-lucide-git-commit',
  name: 'Git Commit',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'git-commit'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3" />
  <line x1="3" x2="9" y1="12" y2="12" />
  <line x1="15" x2="21" y1="12" y2="12" />
    </svg>
  </div>
  <span class="lucide-icon__name">git-commit</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_git_merge = {
  id: 'icon-lucide-git-merge',
  name: 'Git Merge',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'git-merge'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="18" cy="18" r="3" />
  <circle cx="6" cy="6" r="3" />
  <path d="M6 21V9a9 9 0 0 0 9 9" />
    </svg>
  </div>
  <span class="lucide-icon__name">git-merge</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_git_pull_request = {
  id: 'icon-lucide-git-pull-request',
  name: 'Git Pull Request',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'git-pull-request'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="18" cy="18" r="3" />
  <circle cx="6" cy="6" r="3" />
  <path d="M13 6h3a2 2 0 0 1 2 2v7" />
  <line x1="6" x2="6" y1="9" y2="21" />
    </svg>
  </div>
  <span class="lucide-icon__name">git-pull-request</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_package = {
  id: 'icon-lucide-package',
  name: 'Package',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'package'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
  <path d="M12 22V12" />
  <polyline points="3.29 7 12 12 20.71 7" />
  <path d="m7.5 4.27 9 5.15" />
    </svg>
  </div>
  <span class="lucide-icon__name">package</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_package_2 = {
  id: 'icon-lucide-package-2',
  name: 'Package 2',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'package-2'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3v6" />
  <path d="M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z" />
  <path d="M3.054 9.013h17.893" />
    </svg>
  </div>
  <span class="lucide-icon__name">package-2</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_package_check = {
  id: 'icon-lucide-package-check',
  name: 'Package Check',
  category: 'icons',
  iconCategory: 'Files & Data',
  tags: ['lucide', 'icon', 'svg', 'package-check'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22V12" />
  <path d="m16 17 2 2 4-4" />
  <path d="M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753" />
  <path d="M3.29 7 12 12l8.71-5" />
  <path d="m7.5 4.27 8.997 5.148" />
    </svg>
  </div>
  <span class="lucide-icon__name">package-check</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_shopping_cart = {
  id: 'icon-lucide-shopping-cart',
  name: 'Shopping Cart',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'shopping-cart'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="8" cy="21" r="1" />
  <circle cx="19" cy="21" r="1" />
  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  </div>
  <span class="lucide-icon__name">shopping-cart</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_shopping_bag = {
  id: 'icon-lucide-shopping-bag',
  name: 'Shopping Bag',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'shopping-bag'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 10a4 4 0 0 1-8 0" />
  <path d="M3.103 6.034h17.794" />
  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
    </svg>
  </div>
  <span class="lucide-icon__name">shopping-bag</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_tag = {
  id: 'icon-lucide-tag',
  name: 'Tag',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'tag'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
  <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  </div>
  <span class="lucide-icon__name">tag</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_tags = {
  id: 'icon-lucide-tags',
  name: 'Tags',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'tags'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z" />
  <path d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193" />
  <circle cx="10.5" cy="6.5" r=".5" fill="currentColor" />
    </svg>
  </div>
  <span class="lucide-icon__name">tags</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_barcode = {
  id: 'icon-lucide-barcode',
  name: 'Barcode',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'barcode'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 5v14" />
  <path d="M8 5v14" />
  <path d="M12 5v14" />
  <path d="M17 5v14" />
  <path d="M21 5v14" />
    </svg>
  </div>
  <span class="lucide-icon__name">barcode</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_receipt = {
  id: 'icon-lucide-receipt',
  name: 'Receipt',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'receipt'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 17V7" />
  <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8" />
  <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
    </svg>
  </div>
  <span class="lucide-icon__name">receipt</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_percent = {
  id: 'icon-lucide-percent',
  name: 'Percent',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'percent'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="19" x2="5" y1="5" y2="19" />
  <circle cx="6.5" cy="6.5" r="2.5" />
  <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  </div>
  <span class="lucide-icon__name">percent</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_dollar_sign = {
  id: 'icon-lucide-dollar-sign',
  name: 'Dollar Sign',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'dollar-sign'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" x2="12" y1="2" y2="22" />
  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  </div>
  <span class="lucide-icon__name">dollar-sign</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_euro = {
  id: 'icon-lucide-euro',
  name: 'Euro',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'euro'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 10h12" />
  <path d="M4 14h9" />
  <path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
    </svg>
  </div>
  <span class="lucide-icon__name">euro</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_pound_sterling = {
  id: 'icon-lucide-pound-sterling',
  name: 'Pound Sterling',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'pound-sterling'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 7c0-5.333-8-5.333-8 0" />
  <path d="M10 7v14" />
  <path d="M6 21h12" />
  <path d="M6 13h10" />
    </svg>
  </div>
  <span class="lucide-icon__name">pound-sterling</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_bitcoin = {
  id: 'icon-lucide-bitcoin',
  name: 'Bitcoin',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'bitcoin'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Bitcoin</title><path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">bitcoin</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_ethereum = {
  id: 'icon-lucide-ethereum',
  name: 'Ethereum',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'ethereum'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Ethereum</title><path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">ethereum</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_litecoin = {
  id: 'icon-lucide-litecoin',
  name: 'Litecoin',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'litecoin'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Litecoin</title><path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm-.2617 3.6777h2.584a.3425.3425 0 01.33.4356l-2.0312 6.918 1.9062-.582-.4082 1.3847-1.9238.5605-1.248 4.213h6.6757a.3425.3425 0 01.3282.4374l-.582 2a.4586.4586 0 01-.4395.3301H6.7324l1.7227-5.8223-1.9063.5801.42-1.3613 1.9101-.58 2.4219-8.1798a.4557.4557 0 01.4375-.334Z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">litecoin</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_monero = {
  id: 'icon-lucide-monero',
  name: 'Monero',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'monero'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Monero</title><path d="M12 0C5.365 0 0 5.373 0 12.015c0 1.335.228 2.607.618 3.81h3.577V5.729L12 13.545l7.805-7.815v10.095h3.577c.389-1.203.618-2.475.618-3.81C24 5.375 18.635 0 12 0zm-1.788 15.307l-3.417-3.421v6.351H1.758C3.87 21.689 7.678 24 12 24s8.162-2.311 10.245-5.764h-5.04v-6.351l-3.386 3.421-1.788 1.79-1.814-1.79h-.005z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">monero</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_currency = {
  id: 'icon-lucide-currency',
  name: 'Currency',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'currency'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="8" />
  <line x1="3" x2="6" y1="3" y2="6" />
  <line x1="21" x2="18" y1="3" y2="6" />
  <line x1="3" x2="6" y1="21" y2="18" />
  <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  </div>
  <span class="lucide-icon__name">currency</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_credit_card = {
  id: 'icon-lucide-credit-card',
  name: 'Credit Card',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'credit-card'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2" />
  <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  </div>
  <span class="lucide-icon__name">credit-card</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_wallet = {
  id: 'icon-lucide-wallet',
  name: 'Wallet',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'wallet'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  </div>
  <span class="lucide-icon__name">wallet</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_gift = {
  id: 'icon-lucide-gift',
  name: 'Gift',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'gift'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 7v14" />
  <path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
  <path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" />
  <rect x="3" y="7" width="18" height="4" rx="1" />
    </svg>
  </div>
  <span class="lucide-icon__name">gift</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_shopping_basket = {
  id: 'icon-lucide-shopping-basket',
  name: 'Shopping Basket',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'shopping-basket'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m15 11-1 9" />
  <path d="m19 11-4-7" />
  <path d="M2 11h20" />
  <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
  <path d="M4.5 15.5h15" />
  <path d="m5 11 4-7" />
  <path d="m9 11 1 9" />
    </svg>
  </div>
  <span class="lucide-icon__name">shopping-basket</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_store = {
  id: 'icon-lucide-store',
  name: 'Store',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'store'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" />
  <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" />
  <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
    </svg>
  </div>
  <span class="lucide-icon__name">store</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_truck = {
  id: 'icon-lucide-truck',
  name: 'Truck',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'truck'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
  <path d="M15 18H9" />
  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
  <circle cx="17" cy="18" r="2" />
  <circle cx="7" cy="18" r="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">truck</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_percent_circle = {
  id: 'icon-lucide-percent-circle',
  name: 'Percent Circle',
  category: 'icons',
  iconCategory: 'E-commerce',
  tags: ['lucide', 'icon', 'svg', 'percent-circle'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
  <path d="m15 9-6 6" />
  <path d="M9 9h.01" />
  <path d="M15 15h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">percent-circle</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_bar_chart = {
  id: 'icon-lucide-bar-chart',
  name: 'Bar Chart',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'bar-chart'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 21v-6" />
  <path d="M12 21V9" />
  <path d="M19 21V3" />
    </svg>
  </div>
  <span class="lucide-icon__name">bar-chart</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_bar_chart_2 = {
  id: 'icon-lucide-bar-chart-2',
  name: 'Bar Chart 2',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'bar-chart-2'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 21v-6" />
  <path d="M12 21V3" />
  <path d="M19 21V9" />
    </svg>
  </div>
  <span class="lucide-icon__name">bar-chart-2</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_bar_chart_3 = {
  id: 'icon-lucide-bar-chart-3',
  name: 'Bar Chart 3',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'bar-chart-3'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <path d="M18 17V9" />
  <path d="M13 17V5" />
  <path d="M8 17v-3" />
    </svg>
  </div>
  <span class="lucide-icon__name">bar-chart-3</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_bar_chart_4 = {
  id: 'icon-lucide-bar-chart-4',
  name: 'Bar Chart 4',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'bar-chart-4'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 17V9" />
  <path d="M18 17V5" />
  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <path d="M8 17v-3" />
    </svg>
  </div>
  <span class="lucide-icon__name">bar-chart-4</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_pie_chart = {
  id: 'icon-lucide-pie-chart',
  name: 'Pie Chart',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'pie-chart'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" />
  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    </svg>
  </div>
  <span class="lucide-icon__name">pie-chart</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_trending_up = {
  id: 'icon-lucide-trending-up',
  name: 'Trending Up',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'trending-up'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 7h6v6" />
  <path d="m22 7-8.5 8.5-5-5L2 17" />
    </svg>
  </div>
  <span class="lucide-icon__name">trending-up</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_trending_down = {
  id: 'icon-lucide-trending-down',
  name: 'Trending Down',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'trending-down'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 17h6v-6" />
  <path d="m22 17-8.5-8.5-5 5L2 7" />
    </svg>
  </div>
  <span class="lucide-icon__name">trending-down</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_activity = {
  id: 'icon-lucide-activity',
  name: 'Activity',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'activity'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  </div>
  <span class="lucide-icon__name">activity</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_target = {
  id: 'icon-lucide-target',
  name: 'Target',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'target'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Target</title><path d="M12.0005 0C18.627 0 24 5.373 24 12.0005 24 18.627 18.627 24 11.9995 24 5.373 24 0 18.627 0 11.9995 0 5.373 5.373 0 12.0005 0zm0 19.826a7.8265 7.8265 0 10-.001-15.652C7.7133 4.2246 4.2653 7.7136 4.2653 12c0 4.2864 3.448 7.7754 7.7342 7.826h.001zm0-3.9853a3.8402 3.8402 0 110-7.6803c2.1204.0006 3.839 1.7197 3.839 3.8401s-1.7186 3.8396-3.839 3.8402z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">target</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_crosshair = {
  id: 'icon-lucide-crosshair',
  name: 'Crosshair',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'crosshair'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
  <line x1="22" x2="18" y1="12" y2="12" />
  <line x1="6" x2="2" y1="12" y2="12" />
  <line x1="12" x2="12" y1="6" y2="2" />
  <line x1="12" x2="12" y1="22" y2="18" />
    </svg>
  </div>
  <span class="lucide-icon__name">crosshair</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_gauge = {
  id: 'icon-lucide-gauge',
  name: 'Gauge',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'gauge'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m12 14 4-4" />
  <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  </div>
  <span class="lucide-icon__name">gauge</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_compass = {
  id: 'icon-lucide-compass',
  name: 'Compass',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'compass'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
    </svg>
  </div>
  <span class="lucide-icon__name">compass</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_map_pin = {
  id: 'icon-lucide-map-pin',
  name: 'Map Pin',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'map-pin'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
  <circle cx="12" cy="10" r="3" />
    </svg>
  </div>
  <span class="lucide-icon__name">map-pin</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_map = {
  id: 'icon-lucide-map',
  name: 'Map',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'map'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
  <path d="M15 5.764v15" />
  <path d="M9 3.236v15" />
    </svg>
  </div>
  <span class="lucide-icon__name">map</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_globe = {
  id: 'icon-lucide-globe',
  name: 'Globe',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'globe'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
  <path d="M2 12h20" />
    </svg>
  </div>
  <span class="lucide-icon__name">globe</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_navigation = {
  id: 'icon-lucide-navigation',
  name: 'Navigation',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'navigation'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  </div>
  <span class="lucide-icon__name">navigation</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_flag = {
  id: 'icon-lucide-flag',
  name: 'Flag',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'flag'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
    </svg>
  </div>
  <span class="lucide-icon__name">flag</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_flag_off = {
  id: 'icon-lucide-flag-off',
  name: 'Flag Off',
  category: 'icons',
  iconCategory: 'Charts & Analytics',
  tags: ['lucide', 'icon', 'svg', 'flag-off'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
  <path d="m2 2 20 20" />
  <path d="M4 22V4" />
  <path d="M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347" />
    </svg>
  </div>
  <span class="lucide-icon__name">flag-off</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_calendar = {
  id: 'icon-lucide-calendar',
  name: 'Calendar',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'calendar'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 2v4" />
  <path d="M16 2v4" />
  <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M3 10h18" />
    </svg>
  </div>
  <span class="lucide-icon__name">calendar</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_calendar_check = {
  id: 'icon-lucide-calendar-check',
  name: 'Calendar Check',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'calendar-check'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 2v4" />
  <path d="M16 2v4" />
  <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M3 10h18" />
  <path d="m9 16 2 2 4-4" />
    </svg>
  </div>
  <span class="lucide-icon__name">calendar-check</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_calendar_x = {
  id: 'icon-lucide-calendar-x',
  name: 'Calendar X',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'calendar-x'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 2v4" />
  <path d="M16 2v4" />
  <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M3 10h18" />
  <path d="m14 14-4 4" />
  <path d="m10 14 4 4" />
    </svg>
  </div>
  <span class="lucide-icon__name">calendar-x</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_calendar_plus = {
  id: 'icon-lucide-calendar-plus',
  name: 'Calendar Plus',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'calendar-plus'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 19h6" />
  <path d="M16 2v4" />
  <path d="M19 16v6" />
  <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" />
  <path d="M3 10h18" />
  <path d="M8 2v4" />
    </svg>
  </div>
  <span class="lucide-icon__name">calendar-plus</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_calendar_minus = {
  id: 'icon-lucide-calendar-minus',
  name: 'Calendar Minus',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'calendar-minus'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 19h6" />
  <path d="M16 2v4" />
  <path d="M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" />
  <path d="M3 10h18" />
  <path d="M8 2v4" />
    </svg>
  </div>
  <span class="lucide-icon__name">calendar-minus</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_calendar_days = {
  id: 'icon-lucide-calendar-days',
  name: 'Calendar Days',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'calendar-days'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 2v4" />
  <path d="M16 2v4" />
  <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M3 10h18" />
  <path d="M8 14h.01" />
  <path d="M12 14h.01" />
  <path d="M16 14h.01" />
  <path d="M8 18h.01" />
  <path d="M12 18h.01" />
  <path d="M16 18h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">calendar-days</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_calendar_clock = {
  id: 'icon-lucide-calendar-clock',
  name: 'Calendar Clock',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'calendar-clock'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 14v2.2l1.6 1" />
  <path d="M16 2v4" />
  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
  <path d="M3 10h5" />
  <path d="M8 2v4" />
  <circle cx="16" cy="16" r="6" />
    </svg>
  </div>
  <span class="lucide-icon__name">calendar-clock</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_calendar_range = {
  id: 'icon-lucide-calendar-range',
  name: 'Calendar Range',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'calendar-range'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M16 2v4" />
  <path d="M3 10h18" />
  <path d="M8 2v4" />
  <path d="M17 14h-6" />
  <path d="M13 18H7" />
  <path d="M7 14h.01" />
  <path d="M17 18h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">calendar-range</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_clock = {
  id: 'icon-lucide-clock',
  name: 'Clock',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'clock'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
  <path d="M12 6v6l4 2" />
    </svg>
  </div>
  <span class="lucide-icon__name">clock</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_clock_2 = {
  id: 'icon-lucide-clock-2',
  name: 'Clock 2',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'clock-2'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
  <path d="M12 6v6l4-2" />
    </svg>
  </div>
  <span class="lucide-icon__name">clock-2</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_clock_arrow_up = {
  id: 'icon-lucide-clock-arrow-up',
  name: 'Clock Arrow Up',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'clock-arrow-up'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 6v6l1.56.78" />
  <path d="M13.227 21.925a10 10 0 1 1 8.767-9.588" />
  <path d="m14 18 4-4 4 4" />
  <path d="M18 22v-8" />
    </svg>
  </div>
  <span class="lucide-icon__name">clock-arrow-up</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_clock_arrow_down = {
  id: 'icon-lucide-clock-arrow-down',
  name: 'Clock Arrow Down',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'clock-arrow-down'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 6v6l2 1" />
  <path d="M12.337 21.994a10 10 0 1 1 9.588-8.767" />
  <path d="m14 18 4 4 4-4" />
  <path d="M18 14v8" />
    </svg>
  </div>
  <span class="lucide-icon__name">clock-arrow-down</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_timer = {
  id: 'icon-lucide-timer',
  name: 'Timer',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'timer'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="10" x2="14" y1="2" y2="2" />
  <line x1="12" x2="15" y1="14" y2="11" />
  <circle cx="12" cy="14" r="8" />
    </svg>
  </div>
  <span class="lucide-icon__name">timer</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_hourglass = {
  id: 'icon-lucide-hourglass',
  name: 'Hourglass',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'hourglass'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 22h14" />
  <path d="M5 2h14" />
  <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
  <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
    </svg>
  </div>
  <span class="lucide-icon__name">hourglass</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_alarm_clock = {
  id: 'icon-lucide-alarm-clock',
  name: 'Alarm Clock',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'alarm-clock'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="13" r="8" />
  <path d="M12 9v4l2 2" />
  <path d="M5 3 2 6" />
  <path d="m22 6-3-3" />
  <path d="M6.38 18.7 4 21" />
  <path d="M17.64 18.67 20 21" />
    </svg>
  </div>
  <span class="lucide-icon__name">alarm-clock</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_watch = {
  id: 'icon-lucide-watch',
  name: 'Watch',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'watch'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 10v2.2l1.6 1" />
  <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
  <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
  <circle cx="12" cy="12" r="6" />
    </svg>
  </div>
  <span class="lucide-icon__name">watch</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_history = {
  id: 'icon-lucide-history',
  name: 'History',
  category: 'icons',
  iconCategory: 'Time & Calendar',
  tags: ['lucide', 'icon', 'svg', 'history'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
  <path d="M12 7v5l4 2" />
    </svg>
  </div>
  <span class="lucide-icon__name">history</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_lock = {
  id: 'icon-lucide-lock',
  name: 'Lock',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'lock'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  </div>
  <span class="lucide-icon__name">lock</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_lock_keyhole = {
  id: 'icon-lucide-lock-keyhole',
  name: 'Lock Keyhole',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'lock-keyhole'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="16" r="1" />
  <rect x="3" y="10" width="18" height="12" rx="2" />
  <path d="M7 10V7a5 5 0 0 1 10 0v3" />
    </svg>
  </div>
  <span class="lucide-icon__name">lock-keyhole</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_unlock = {
  id: 'icon-lucide-unlock',
  name: 'Unlock',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'unlock'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
  <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  </div>
  <span class="lucide-icon__name">unlock</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_unlock_keyhole = {
  id: 'icon-lucide-unlock-keyhole',
  name: 'Unlock Keyhole',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'unlock-keyhole'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="16" r="1" />
  <rect width="18" height="12" x="3" y="10" rx="2" />
  <path d="M7 10V7a5 5 0 0 1 9.33-2.5" />
    </svg>
  </div>
  <span class="lucide-icon__name">unlock-keyhole</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_key = {
  id: 'icon-lucide-key',
  name: 'Key',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'key'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
  <path d="m21 2-9.6 9.6" />
  <circle cx="7.5" cy="15.5" r="5.5" />
    </svg>
  </div>
  <span class="lucide-icon__name">key</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_key_round = {
  id: 'icon-lucide-key-round',
  name: 'Key Round',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'key-round'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  </div>
  <span class="lucide-icon__name">key-round</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_key_square = {
  id: 'icon-lucide-key-square',
  name: 'Key Square',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'key-square'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z" />
  <path d="m14 7 3 3" />
  <path d="m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814" />
    </svg>
  </div>
  <span class="lucide-icon__name">key-square</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_shield = {
  id: 'icon-lucide-shield',
  name: 'Shield',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'shield'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  </div>
  <span class="lucide-icon__name">shield</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_shield_check = {
  id: 'icon-lucide-shield-check',
  name: 'Shield Check',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'shield-check'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  <path d="m9 12 2 2 4-4" />
    </svg>
  </div>
  <span class="lucide-icon__name">shield-check</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_shield_alert = {
  id: 'icon-lucide-shield-alert',
  name: 'Shield Alert',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'shield-alert'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  <path d="M12 8v4" />
  <path d="M12 16h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">shield-alert</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_shield_off = {
  id: 'icon-lucide-shield-off',
  name: 'Shield Off',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'shield-off'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m2 2 20 20" />
  <path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71" />
  <path d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264" />
    </svg>
  </div>
  <span class="lucide-icon__name">shield-off</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_shield_question = {
  id: 'icon-lucide-shield-question',
  name: 'Shield Question',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'shield-question'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
  <path d="M12 17h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">shield-question</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_eye = {
  id: 'icon-lucide-eye',
  name: 'Eye',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'eye'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
  <circle cx="12" cy="12" r="3" />
    </svg>
  </div>
  <span class="lucide-icon__name">eye</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_eye_off = {
  id: 'icon-lucide-eye-off',
  name: 'Eye Off',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'eye-off'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
  <path d="m2 2 20 20" />
    </svg>
  </div>
  <span class="lucide-icon__name">eye-off</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_fingerprint = {
  id: 'icon-lucide-fingerprint',
  name: 'Fingerprint',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'fingerprint'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
  <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
  <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
  <path d="M2 12a10 10 0 0 1 18-6" />
  <path d="M2 16h.01" />
  <path d="M21.8 16c.2-2 .131-5.354 0-6" />
  <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
  <path d="M8.65 22c.21-.66.45-1.32.57-2" />
  <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
    </svg>
  </div>
  <span class="lucide-icon__name">fingerprint</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_scan_face = {
  id: 'icon-lucide-scan-face',
  name: 'Scan Face',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'scan-face'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
  <path d="M9 9h.01" />
  <path d="M15 9h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">scan-face</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_scan_line = {
  id: 'icon-lucide-scan-line',
  name: 'Scan Line',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'scan-line'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
  <path d="M7 12h10" />
    </svg>
  </div>
  <span class="lucide-icon__name">scan-line</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_siren = {
  id: 'icon-lucide-siren',
  name: 'Siren',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'siren'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M7 18v-6a5 5 0 1 1 10 0v6" />
  <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
  <path d="M21 12h1" />
  <path d="M18.5 4.5 18 5" />
  <path d="M2 12h1" />
  <path d="M12 2v1" />
  <path d="m4.929 4.929.707.707" />
  <path d="M12 12v6" />
    </svg>
  </div>
  <span class="lucide-icon__name">siren</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_badge = {
  id: 'icon-lucide-badge',
  name: 'Badge',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'badge'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  </div>
  <span class="lucide-icon__name">badge</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_id_card = {
  id: 'icon-lucide-id-card',
  name: 'Id Card',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'id-card'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 10h2" />
  <path d="M16 14h2" />
  <path d="M6.17 15a3 3 0 0 1 5.66 0" />
  <circle cx="9" cy="11" r="2" />
  <rect x="2" y="5" width="20" height="14" rx="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">id-card</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_passport = {
  id: 'icon-lucide-passport',
  name: 'Passport',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'passport'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Passport</title><path d="M11.875 0A9.6 9.6 0 0 0 2.4 9.475h4.8A4.81 4.81 0 0 1 11.875 4.8zm.25 0v4.8A4.81 4.81 0 0 1 16.8 9.475h4.8A9.6 9.6 0 0 0 12.125 0zM2.4 9.725V24H12v-4.8H7.2V9.724zm9.6 9.474a9.599 9.599 0 0 0 9.6-9.474h-4.8A4.807 4.807 0 0 1 12 14.4z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">passport</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_visa = {
  id: 'icon-lucide-visa',
  name: 'Visa',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'visa'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Visa</title><path d="M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 01.894.764l.817 4.338 2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 011.913.336l.34-1.59a5.207 5.207 0 00-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.504-.602.725-1.16.734-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 00-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656l1.02-2.815.588 2.815zm-8.16-4.84l-1.603 7.496H8.34l1.605-7.496z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">visa</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_vault = {
  id: 'icon-lucide-vault',
  name: 'Vault',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'vault'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Vault</title><path d="M0 0l11.955 24L24 0zm13.366 4.827h1.393v1.38h-1.393zm-2.77 5.569H9.22V8.993h1.389zm0-2.087H9.22V6.906h1.389zm0-2.086H9.22V4.819h1.389zm2.087 6.263h-1.377V11.08h1.388zm0-2.09h-1.377V8.993h1.388zm0-2.087h-1.377V6.906h1.388zm0-2.086h-1.377V4.819h1.388zm.683.683h1.393v1.389h-1.393zm0 3.475V8.993h1.389v1.388Z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">vault</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_file_lock = {
  id: 'icon-lucide-file-lock',
  name: 'File Lock',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'file-lock'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M9 17v-2a2 2 0 0 0-4 0v2" />
  <rect width="8" height="5" x="3" y="17" rx="1" />
    </svg>
  </div>
  <span class="lucide-icon__name">file-lock</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_folder_lock = {
  id: 'icon-lucide-folder-lock',
  name: 'Folder Lock',
  category: 'icons',
  iconCategory: 'Security',
  tags: ['lucide', 'icon', 'svg', 'folder-lock'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="8" height="5" x="14" y="17" rx="1" />
  <path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5" />
  <path d="M20 17v-2a2 2 0 1 0-4 0v2" />
    </svg>
  </div>
  <span class="lucide-icon__name">folder-lock</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_phone_call = {
  id: 'icon-lucide-phone-call',
  name: 'Phone Call',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'phone-call'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 2a9 9 0 0 1 9 9" />
  <path d="M13 6a5 5 0 0 1 5 5" />
  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  </div>
  <span class="lucide-icon__name">phone-call</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_phone_forwarded = {
  id: 'icon-lucide-phone-forwarded',
  name: 'Phone Forwarded',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'phone-forwarded'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 6h8" />
  <path d="m18 2 4 4-4 4" />
  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  </div>
  <span class="lucide-icon__name">phone-forwarded</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_phone_off = {
  id: 'icon-lucide-phone-off',
  name: 'Phone Off',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'phone-off'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272" />
  <path d="M22 2 2 22" />
  <path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473" />
    </svg>
  </div>
  <span class="lucide-icon__name">phone-off</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_phone_outgoing = {
  id: 'icon-lucide-phone-outgoing',
  name: 'Phone Outgoing',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'phone-outgoing'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m16 8 6-6" />
  <path d="M22 8V2h-6" />
  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  </div>
  <span class="lucide-icon__name">phone-outgoing</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_phone_incoming = {
  id: 'icon-lucide-phone-incoming',
  name: 'Phone Incoming',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'phone-incoming'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 2v6h6" />
  <path d="m22 2-6 6" />
  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  </div>
  <span class="lucide-icon__name">phone-incoming</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_phone_missed = {
  id: 'icon-lucide-phone-missed',
  name: 'Phone Missed',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'phone-missed'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m16 2 6 6" />
  <path d="m22 2-6 6" />
  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  </div>
  <span class="lucide-icon__name">phone-missed</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_voicemail = {
  id: 'icon-lucide-voicemail',
  name: 'Voicemail',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'voicemail'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="6" cy="12" r="4" />
  <circle cx="18" cy="12" r="4" />
  <line x1="6" x2="18" y1="16" y2="16" />
    </svg>
  </div>
  <span class="lucide-icon__name">voicemail</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_forward = {
  id: 'icon-lucide-forward',
  name: 'Forward',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'forward'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m15 17 5-5-5-5" />
  <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
    </svg>
  </div>
  <span class="lucide-icon__name">forward</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_reply = {
  id: 'icon-lucide-reply',
  name: 'Reply',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'reply'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
  <path d="m9 17-5-5 5-5" />
    </svg>
  </div>
  <span class="lucide-icon__name">reply</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_reply_all = {
  id: 'icon-lucide-reply-all',
  name: 'Reply All',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'reply-all'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m12 17-5-5 5-5" />
  <path d="M22 18v-2a4 4 0 0 0-4-4H7" />
  <path d="m7 17-5-5 5-5" />
    </svg>
  </div>
  <span class="lucide-icon__name">reply-all</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_inbox = {
  id: 'icon-lucide-inbox',
  name: 'Inbox',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'inbox'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  </div>
  <span class="lucide-icon__name">inbox</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_megaphone = {
  id: 'icon-lucide-megaphone',
  name: 'Megaphone',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'megaphone'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
  <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
  <path d="M8 6v8" />
    </svg>
  </div>
  <span class="lucide-icon__name">megaphone</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_contact = {
  id: 'icon-lucide-contact',
  name: 'Contact',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'contact'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 2v2" />
  <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
  <path d="M8 2v2" />
  <circle cx="12" cy="11" r="3" />
  <rect x="3" y="4" width="18" height="18" rx="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">contact</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_rss = {
  id: 'icon-lucide-rss',
  name: 'RSS',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'rss'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>RSS</title><path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">rss</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_message_circle_more = {
  id: 'icon-lucide-message-circle-more',
  name: 'Message Circle More',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'message-circle-more'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
  <path d="M8 12h.01" />
  <path d="M12 12h.01" />
  <path d="M16 12h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">message-circle-more</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_message_circle_warning = {
  id: 'icon-lucide-message-circle-warning',
  name: 'Message Circle Warning',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'message-circle-warning'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
  <path d="M12 8v4" />
  <path d="M12 16h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">message-circle-warning</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_message_square_more = {
  id: 'icon-lucide-message-square-more',
  name: 'Message Square More',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'message-square-more'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
  <path d="M12 11h.01" />
  <path d="M16 11h.01" />
  <path d="M8 11h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">message-square-more</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_messages_square = {
  id: 'icon-lucide-messages-square',
  name: 'Messages Square',
  category: 'icons',
  iconCategory: 'Communication',
  tags: ['lucide', 'icon', 'svg', 'messages-square'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" />
    </svg>
  </div>
  <span class="lucide-icon__name">messages-square</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_check_circle = {
  id: 'icon-lucide-check-circle',
  name: 'Check Circle',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'check-circle'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
  <path d="m9 11 3 3L22 4" />
    </svg>
  </div>
  <span class="lucide-icon__name">check-circle</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_check_circle_2 = {
  id: 'icon-lucide-check-circle-2',
  name: 'Check Circle 2',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'check-circle-2'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
  <path d="m9 12 2 2 4-4" />
    </svg>
  </div>
  <span class="lucide-icon__name">check-circle-2</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_check_square = {
  id: 'icon-lucide-check-square',
  name: 'Check Square',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'check-square'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" />
  <path d="m9 11 3 3L22 4" />
    </svg>
  </div>
  <span class="lucide-icon__name">check-square</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_x_circle = {
  id: 'icon-lucide-x-circle',
  name: 'X Circle',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'x-circle'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
  <path d="m15 9-6 6" />
  <path d="m9 9 6 6" />
    </svg>
  </div>
  <span class="lucide-icon__name">x-circle</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_x_square = {
  id: 'icon-lucide-x-square',
  name: 'X Square',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'x-square'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <path d="m15 9-6 6" />
  <path d="m9 9 6 6" />
    </svg>
  </div>
  <span class="lucide-icon__name">x-square</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_alert_circle = {
  id: 'icon-lucide-alert-circle',
  name: 'Alert Circle',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'alert-circle'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
  <line x1="12" x2="12" y1="8" y2="12" />
  <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  </div>
  <span class="lucide-icon__name">alert-circle</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_alert_triangle = {
  id: 'icon-lucide-alert-triangle',
  name: 'Alert Triangle',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'alert-triangle'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
  <path d="M12 9v4" />
  <path d="M12 17h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">alert-triangle</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_info = {
  id: 'icon-lucide-info',
  name: 'Info',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'info'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
  <path d="M12 16v-4" />
  <path d="M12 8h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">info</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_help_circle = {
  id: 'icon-lucide-help-circle',
  name: 'Help Circle',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'help-circle'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
  <path d="M12 17h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">help-circle</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_lightbulb = {
  id: 'icon-lucide-lightbulb',
  name: 'Lightbulb',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'lightbulb'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
  <path d="M9 18h6" />
  <path d="M10 22h4" />
    </svg>
  </div>
  <span class="lucide-icon__name">lightbulb</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_zap = {
  id: 'icon-lucide-zap',
  name: 'ZAP',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'zap'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>ZAP</title><path d="M15.1449 14.1032a.17.17 0 0 1 .0865-.2689l1.7154-.4203c.1261-.0367.1364-.1735.1236-.2288a.1655.1655 0 0 0-.0216-.0401L13.071 8.1627c-.0727-.102-.0294-.2272.0741-.2658l1.3445-.4327a.1669.1669 0 0 0 .0804-.2565L9.5568.0804a.1545.1545 0 0 0-.1886-.068L.099 4.0304a.17.17 0 0 0-.0309.2905l5.1678 3.6718a.1607.1607 0 0 1 .068.1515c-.0015.063-.0488.1081-.0557.1144l-.0402.0247-1.2146.5316a.17.17 0 0 0-.0897.0958v.0402a.1824.1824 0 0 0 .068.1545c1.7749 1.281 3.5502 2.5614 5.3254 3.8418.109.0844.0741.243-.0402.2937l-1.5793.6181c-.1282.054-.1401.2298-.0217.2998l13.1142 7.5724c.1507.0627.2904-.1097.1978-.2442l-5.823-7.3838zm.1483-7.4024a1.0694 1.0694 0 0 1 .136.9272 1.0447 1.0447 0 0 1-.6676.6615l-.3616.1174 3.3195 4.191a1.0478 1.0478 0 0 1-.5656 1.6722l-.6182.1545 4.4816 5.6778A11.677 11.677 0 0 0 12.3168.6305c-.4142 0-.8221.0217-1.2363.0619zM7.211 14.9284a1.0509 1.0509 0 0 1 .139-1.8822l.3771-.1453L3.4587 9.81a1.0509 1.0509 0 0 1 .1916-1.8112l.0618-.0278-1.6906-1.1868a11.68 11.68 0 0 0 17.098 15.021Z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">zap</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_sparkles = {
  id: 'icon-lucide-sparkles',
  name: 'Sparkles',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'sparkles'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
  <path d="M20 2v4" />
  <path d="M22 4h-4" />
  <circle cx="4" cy="20" r="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">sparkles</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_flame = {
  id: 'icon-lucide-flame',
  name: 'Flame',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'flame'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
    </svg>
  </div>
  <span class="lucide-icon__name">flame</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_wind = {
  id: 'icon-lucide-wind',
  name: 'Wind',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'wind'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
  <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
  <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
    </svg>
  </div>
  <span class="lucide-icon__name">wind</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_cloud_lightning = {
  id: 'icon-lucide-cloud-lightning',
  name: 'Cloud Lightning',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'cloud-lightning'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
  <path d="m13 12-3 5h4l-3 5" />
    </svg>
  </div>
  <span class="lucide-icon__name">cloud-lightning</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_cloud_rain = {
  id: 'icon-lucide-cloud-rain',
  name: 'Cloud Rain',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'cloud-rain'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
  <path d="M16 14v6" />
  <path d="M8 14v6" />
  <path d="M12 16v6" />
    </svg>
  </div>
  <span class="lucide-icon__name">cloud-rain</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_cloud_snow = {
  id: 'icon-lucide-cloud-snow',
  name: 'Cloud Snow',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'cloud-snow'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
  <path d="M8 15h.01" />
  <path d="M8 19h.01" />
  <path d="M12 17h.01" />
  <path d="M12 21h.01" />
  <path d="M16 15h.01" />
  <path d="M16 19h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">cloud-snow</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_sun = {
  id: 'icon-lucide-sun',
  name: 'Sun',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'sun'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4" />
  <path d="M12 2v2" />
  <path d="M12 20v2" />
  <path d="m4.93 4.93 1.41 1.41" />
  <path d="m17.66 17.66 1.41 1.41" />
  <path d="M2 12h2" />
  <path d="M20 12h2" />
  <path d="m6.34 17.66-1.41 1.41" />
  <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  </div>
  <span class="lucide-icon__name">sun</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_sunrise = {
  id: 'icon-lucide-sunrise',
  name: 'Sunrise',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'sunrise'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Sunrise</title><path d="M12.0011 0A12 12 0 1 0 24 11.9989 12.0114 12.0114 0 0 0 12.0012 0m0 2.4639a9.53 9.53 0 0 1 9.5134 8.8891 9.53 9.53 0 0 1-.8622 4.6487H3.349a9.53 9.53 0 0 1 .6162-9.14 9.53 9.53 0 0 1 8.036-4.398"/>
    </svg>
  </div>
  <span class="lucide-icon__name">sunrise</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_sunset = {
  id: 'icon-lucide-sunset',
  name: 'Sunset',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'sunset'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 10V2" />
  <path d="m4.93 10.93 1.41 1.41" />
  <path d="M2 18h2" />
  <path d="M20 18h2" />
  <path d="m19.07 10.93-1.41 1.41" />
  <path d="M22 22H2" />
  <path d="m16 6-4 4-4-4" />
  <path d="M16 18a4 4 0 0 0-8 0" />
    </svg>
  </div>
  <span class="lucide-icon__name">sunset</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_moon = {
  id: 'icon-lucide-moon',
  name: 'Moon',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'moon'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
    </svg>
  </div>
  <span class="lucide-icon__name">moon</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_cloud_sun = {
  id: 'icon-lucide-cloud-sun',
  name: 'Cloud Sun',
  category: 'icons',
  iconCategory: 'Status & Feedback',
  tags: ['lucide', 'icon', 'svg', 'cloud-sun'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v2" />
  <path d="m4.93 4.93 1.41 1.41" />
  <path d="M20 12h2" />
  <path d="m19.07 4.93-1.41 1.41" />
  <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
  <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </svg>
  </div>
  <span class="lucide-icon__name">cloud-sun</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_leaf = {
  id: 'icon-lucide-leaf',
  name: 'Leaf',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'leaf'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  </div>
  <span class="lucide-icon__name">leaf</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_trees = {
  id: 'icon-lucide-trees',
  name: 'Trees',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'trees'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
  <path d="M7 16v6" />
  <path d="M13 19v3" />
  <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </svg>
  </div>
  <span class="lucide-icon__name">trees</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_flower = {
  id: 'icon-lucide-flower',
  name: 'Flower',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'flower'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Flower</title><path d="m18.938 5.31-.647-2.263-1.094-.28-.062-1.11L15.318.514l-1.036.274-.69-.788h-2.175l-.619.788L9.751.372l-1.754.764L7.61 2.22l-1.347.067-1.066 2.325.68 1.125-.63.96.29 2.03 1.251.415.012 1.302 1.937 1.119.908-.284.66.816v4.973H9.24v-.578H7.037v1.162H9.23v.579h1.075v3.517H5.062v1.162H7.42V24h6.929v-1.09h2.262v-1.162h-5.147v-4.626h1.624v-.927h-1.624v-4.097h1.286l.76-.74.84.336 2.098-.76.202-1.238 1.266-.13.83-2.043-.535-1.166Zm-1.453 2.243-.377.928-1.455.15-.237 1.442-1.045.377-1.128-.452-.963.937h-1.42l-.808-1-1.176.367-.921-.532L7.94 8.3l-1.356-.448-.126-.88.792-1.208-.742-1.227.515-1.124 1.42-.071.477-1.34.852-.372 1.403.558.806-1.027h1.082l.818.934 1.244-.329.881.554.077 1.36 1.274.326.31 1.09-.789 1.143zm-1.615 7.476h-2.783v1.163h2.783zM11.04 3.715l-1.036 1.038v1.87l1.049 1.037 2.975-.035 1.02-1.01.046-1.834-1.037-1.066Zm2.86 2.403-.354.349-2.023.024-.36-.356v-.903l.357-.357h2.047l.354.364z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">flower</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_flower_2 = {
  id: 'icon-lucide-flower-2',
  name: 'Flower 2',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'flower-2'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
  <circle cx="12" cy="8" r="2" />
  <path d="M12 10v12" />
  <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
  <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
    </svg>
  </div>
  <span class="lucide-icon__name">flower-2</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_bird = {
  id: 'icon-lucide-bird',
  name: 'Bird',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'bird'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 7h.01" />
  <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
  <path d="m20 7 2 .5-2 .5" />
  <path d="M10 18v3" />
  <path d="M14 17.75V21" />
  <path d="M7 18a6 6 0 0 0 3.84-10.61" />
    </svg>
  </div>
  <span class="lucide-icon__name">bird</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_rabbit = {
  id: 'icon-lucide-rabbit',
  name: 'Rabbit',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'rabbit'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 16a3 3 0 0 1 2.24 5" />
  <path d="M18 12h.01" />
  <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
  <path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
  <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />
    </svg>
  </div>
  <span class="lucide-icon__name">rabbit</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_cat = {
  id: 'icon-lucide-cat',
  name: 'Cat',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'cat'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
  <path d="M8 14v.5" />
  <path d="M16 14v.5" />
  <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </svg>
  </div>
  <span class="lucide-icon__name">cat</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_dog = {
  id: 'icon-lucide-dog',
  name: 'Dog',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'dog'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11.25 16.25h1.5L12 17z" />
  <path d="M16 14v.5" />
  <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" />
  <path d="M8 14v.5" />
  <path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
    </svg>
  </div>
  <span class="lucide-icon__name">dog</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_fish = {
  id: 'icon-lucide-fish',
  name: 'Fish',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'fish'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
  <path d="M18 12v.5" />
  <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
  <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
  <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
  <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>
  </div>
  <span class="lucide-icon__name">fish</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_bug = {
  id: 'icon-lucide-bug',
  name: 'Bug',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'bug'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20v-9" />
  <path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" />
  <path d="M14.12 3.88 16 2" />
  <path d="M21 21a4 4 0 0 0-3.81-4" />
  <path d="M21 5a4 4 0 0 1-3.55 3.97" />
  <path d="M22 13h-4" />
  <path d="M3 21a4 4 0 0 1 3.81-4" />
  <path d="M3 5a4 4 0 0 0 3.55 3.97" />
  <path d="M6 13H2" />
  <path d="m8 2 1.88 1.88" />
  <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
    </svg>
  </div>
  <span class="lucide-icon__name">bug</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_apple = {
  id: 'icon-lucide-apple',
  name: 'Apple',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'apple'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Apple</title><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
    </svg>
  </div>
  <span class="lucide-icon__name">apple</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_cherry = {
  id: 'icon-lucide-cherry',
  name: 'Cherry',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'cherry'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" />
  <path d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" />
  <path d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" />
  <path d="M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" />
    </svg>
  </div>
  <span class="lucide-icon__name">cherry</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_citrus = {
  id: 'icon-lucide-citrus',
  name: 'Citrus',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'citrus'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" />
  <path d="M19.65 15.66A8 8 0 0 1 8.35 4.34" />
  <path d="m14 10-5.5 5.5" />
  <path d="M14 17.85V10H6.15" />
    </svg>
  </div>
  <span class="lucide-icon__name">citrus</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_grape = {
  id: 'icon-lucide-grape',
  name: 'Grape',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'grape'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 5V2l-5.89 5.89" />
  <circle cx="16.6" cy="15.89" r="3" />
  <circle cx="8.11" cy="7.4" r="3" />
  <circle cx="12.35" cy="11.65" r="3" />
  <circle cx="13.91" cy="5.85" r="3" />
  <circle cx="18.15" cy="10.09" r="3" />
  <circle cx="6.56" cy="13.2" r="3" />
  <circle cx="10.8" cy="17.44" r="3" />
  <circle cx="5" cy="19" r="3" />
    </svg>
  </div>
  <span class="lucide-icon__name">grape</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_carrot = {
  id: 'icon-lucide-carrot',
  name: 'Carrot',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'carrot'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 16a1 1 0 0 0-7-7q-4 4-5.987 12.385a.5.5 0 0 0 .602.602Q11 20 15 16l-3-3" />
  <path d="M15 9q4 4 7 0-3-4-7 0 4-4 0-7-4 3 0 7" />
  <path d="m8 15-2.58-2.58" />
    </svg>
  </div>
  <span class="lucide-icon__name">carrot</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_coffee = {
  id: 'icon-lucide-coffee',
  name: 'Coffee',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'coffee'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 2v2" />
  <path d="M14 2v2" />
  <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
  <path d="M6 2v2" />
    </svg>
  </div>
  <span class="lucide-icon__name">coffee</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_wine = {
  id: 'icon-lucide-wine',
  name: 'Wine',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'wine'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Wine</title><path d="M11.045 0C8.839.03 5.68 1.06 4.915 2.34c.848 3.193 2.025 9.576 4.7 12.09.6.565 1.455.785 2.27 1.768l.193.324c.6 1.676 1.371 3.814.246 5.104-1.833.54-3.08 1.253-2.976 1.78.133.676 2.42.792 5.107.26 2.687-.53 4.759-1.508 4.625-2.183-.11-.554-1.672-.73-3.715-.482-1.884-.885-1.955-3.022-2.226-4.674l.025-.4c.116-.556.689-1.793 1.035-2.393 1.605-2.779.003-8.337-1.203-13.066-.37-.338-1.088-.479-1.951-.467zm1.832 3.674c.208-.002.44.052.705.176 2.759 8.733-.429 11.097-1.217 11.816-2.55-.882-4.278-1.862-6.244-9.312 4.972 2.58 4.744-2.659 6.756-2.68z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">wine</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_beer = {
  id: 'icon-lucide-beer',
  name: 'Beer',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'beer'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
  <path d="M9 12v6" />
  <path d="M13 12v6" />
  <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" />
  <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
    </svg>
  </div>
  <span class="lucide-icon__name">beer</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_utensils = {
  id: 'icon-lucide-utensils',
  name: 'Utensils',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'utensils'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
  <path d="M7 2v20" />
  <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  </div>
  <span class="lucide-icon__name">utensils</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_pizza = {
  id: 'icon-lucide-pizza',
  name: 'Pizza',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'pizza'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m12 14-1 1" />
  <path d="m13.75 18.25-1.25 1.42" />
  <path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" />
  <path d="M18.8 9.3a1 1 0 0 0 2.1 7.7" />
  <path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" />
    </svg>
  </div>
  <span class="lucide-icon__name">pizza</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_cake = {
  id: 'icon-lucide-cake',
  name: 'Cake',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'cake'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
  <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
  <path d="M2 21h20" />
  <path d="M7 8v3" />
  <path d="M12 8v3" />
  <path d="M17 8v3" />
  <path d="M7 4h.01" />
  <path d="M12 4h.01" />
  <path d="M17 4h.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">cake</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_ice_cream = {
  id: 'icon-lucide-ice-cream',
  name: 'Ice Cream',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'ice-cream'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
  <path d="M17 7A5 5 0 0 0 7 7" />
  <path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
    </svg>
  </div>
  <span class="lucide-icon__name">ice-cream</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_candy = {
  id: 'icon-lucide-candy',
  name: 'Candy',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'candy'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 7v10.9" />
  <path d="M14 6.1V17" />
  <path d="M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4" />
  <path d="M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07" />
  <path d="M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4" />
    </svg>
  </div>
  <span class="lucide-icon__name">candy</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_cookie = {
  id: 'icon-lucide-cookie',
  name: 'Cookie',
  category: 'icons',
  iconCategory: 'Nature & Food',
  tags: ['lucide', 'icon', 'svg', 'cookie'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
  <path d="M8.5 8.5v.01" />
  <path d="M16 15.5v.01" />
  <path d="M12 12v.01" />
  <path d="M11 17v.01" />
  <path d="M7 14v.01" />
    </svg>
  </div>
  <span class="lucide-icon__name">cookie</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_cpu = {
  id: 'icon-lucide-cpu',
  name: 'Cpu',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'cpu'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20v2" />
  <path d="M12 2v2" />
  <path d="M17 20v2" />
  <path d="M17 2v2" />
  <path d="M2 12h2" />
  <path d="M2 17h2" />
  <path d="M2 7h2" />
  <path d="M20 12h2" />
  <path d="M20 17h2" />
  <path d="M20 7h2" />
  <path d="M7 20v2" />
  <path d="M7 2v2" />
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <rect x="8" y="8" width="8" height="8" rx="1" />
    </svg>
  </div>
  <span class="lucide-icon__name">cpu</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_memory_stick = {
  id: 'icon-lucide-memory-stick',
  name: 'Memory Stick',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'memory-stick'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 12v-2" />
  <path d="M12 18v-2" />
  <path d="M16 12v-2" />
  <path d="M16 18v-2" />
  <path d="M2 11h1.5" />
  <path d="M20 18v-2" />
  <path d="M20.5 11H22" />
  <path d="M4 18v-2" />
  <path d="M8 12v-2" />
  <path d="M8 18v-2" />
  <rect x="2" y="6" width="20" height="10" rx="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">memory-stick</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_wifi = {
  id: 'icon-lucide-wifi',
  name: 'Wifi',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'wifi'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20h.01" />
  <path d="M2 8.82a15 15 0 0 1 20 0" />
  <path d="M5 12.859a10 10 0 0 1 14 0" />
  <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  </div>
  <span class="lucide-icon__name">wifi</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_wifi_off = {
  id: 'icon-lucide-wifi-off',
  name: 'Wifi Off',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'wifi-off'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20h.01" />
  <path d="M8.5 16.429a5 5 0 0 1 7 0" />
  <path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
  <path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
  <path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
  <path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
  <path d="m2 2 20 20" />
    </svg>
  </div>
  <span class="lucide-icon__name">wifi-off</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_bluetooth = {
  id: 'icon-lucide-bluetooth',
  name: 'Bluetooth',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'bluetooth'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Bluetooth</title><path d="M12 0C6.76 0 3.1484 2.4895 3.1484 12S6.76 24 12 24c5.24 0 8.8516-2.4895 8.8516-12S17.24 0 12 0zm-.7773 1.6816l6.2148 6.2149L13.334 12l4.1035 4.1035-6.2148 6.2149V14.125l-3.418 3.42-1.2422-1.2442L10.8515 12l-4.289-4.3008 1.2422-1.2441 3.418 3.4199V1.6816zm1.748 4.2442v3.9687l1.9844-1.9843-1.9844-1.9844zm0 8.1816v3.9668l1.9844-1.9844-1.9844-1.9824Z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">bluetooth</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_usb = {
  id: 'icon-lucide-usb',
  name: 'Usb',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'usb'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="10" cy="7" r="1" />
  <circle cx="4" cy="20" r="1" />
  <path d="M4.7 19.3 19 5" />
  <path d="m21 3-3 1 2 2Z" />
  <path d="M9.26 7.68 5 12l2 5" />
  <path d="m10 14 5 2 3.5-3.5" />
  <path d="m18 12 1-1 1 1-1 1Z" />
    </svg>
  </div>
  <span class="lucide-icon__name">usb</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_plug = {
  id: 'icon-lucide-plug',
  name: 'Plug',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'plug'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22v-5" />
  <path d="M15 8V2" />
  <path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" />
  <path d="M9 8V2" />
    </svg>
  </div>
  <span class="lucide-icon__name">plug</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_battery = {
  id: 'icon-lucide-battery',
  name: 'Battery',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'battery'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 22 14 L 22 10" />
  <rect x="2" y="6" width="16" height="12" rx="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">battery</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_battery_charging = {
  id: 'icon-lucide-battery-charging',
  name: 'Battery Charging',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'battery-charging'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m11 7-3 5h4l-3 5" />
  <path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" />
  <path d="M22 14v-4" />
  <path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" />
    </svg>
  </div>
  <span class="lucide-icon__name">battery-charging</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_battery_low = {
  id: 'icon-lucide-battery-low',
  name: 'Battery Low',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'battery-low'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 14v-4" />
  <path d="M6 14v-4" />
  <rect x="2" y="6" width="16" height="12" rx="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">battery-low</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_battery_full = {
  id: 'icon-lucide-battery-full',
  name: 'Battery Full',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'battery-full'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 10v4" />
  <path d="M14 10v4" />
  <path d="M22 14v-4" />
  <path d="M6 10v4" />
  <rect x="2" y="6" width="16" height="12" rx="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">battery-full</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_battery_medium = {
  id: 'icon-lucide-battery-medium',
  name: 'Battery Medium',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'battery-medium'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 14v-4" />
  <path d="M22 14v-4" />
  <path d="M6 14v-4" />
  <rect x="2" y="6" width="16" height="12" rx="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">battery-medium</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_battery_warning = {
  id: 'icon-lucide-battery-warning',
  name: 'Battery Warning',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'battery-warning'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 17h.01" />
  <path d="M10 7v6" />
  <path d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
  <path d="M22 14v-4" />
  <path d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
    </svg>
  </div>
  <span class="lucide-icon__name">battery-warning</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_power = {
  id: 'icon-lucide-power',
  name: 'Power',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'power'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v10" />
  <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  </div>
  <span class="lucide-icon__name">power</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_switch_camera = {
  id: 'icon-lucide-switch-camera',
  name: 'Switch Camera',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'switch-camera'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
  <path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
  <circle cx="12" cy="12" r="3" />
  <path d="m18 22-3-3 3-3" />
  <path d="m6 2 3 3-3 3" />
    </svg>
  </div>
  <span class="lucide-icon__name">switch-camera</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_rocket = {
  id: 'icon-lucide-rocket',
  name: 'Rocket',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'rocket'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Rocket</title><path d="M23.735.238V.236a.248.248 0 0 0-.2-.188c-.256-.04-6.336-.924-14.17 7.051a28.44 28.44 0 0 0-2.12 2.576l-4.047 1.166a.246.246 0 0 0-.124.08l-2.856 3.5a.248.248 0 0 0 .126.394l3.887 1.096.484-.566c.178-.208.37-.4.574-.58l.54-.472-.38.608a5.556 5.556 0 0 1-.482.66l-.52.606c.008.79.214 1.488.62 2.068L3.68 19.653c-.148.16-.036.272.12.428l1.11 1.086c.153.16.255.258.41.1l1.505-1.534c.34.122 1.162.334 2.4.14l.75-.576c.212-.164.438-.312.672-.442l.644-.36-.514.53c-.187.192-.387.37-.6.534l-.62.476 1.424 3.804a.246.246 0 0 0 .404.09l3.242-3.144a.248.248 0 0 0 .072-.136l.698-4.108c.884-.78 1.78-1.686 2.66-2.694 5.072-5.806 5.798-10.315 5.78-12.487-.008-.702-.094-1.094-.1-1.122h-.002zM16.49 11.165c-1.274 1.296-3.1 1.564-4.082.6-.98-.962-.744-2.794.53-4.09s3.1-1.566 4.08-.602c.982.964.746 2.796-.528 4.092z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">rocket</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_satellite = {
  id: 'icon-lucide-satellite',
  name: 'Satellite',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'satellite'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Satellite</title><path d="M10.413 7.62c.042 0 .063.02.105.02.062 0 .148-.02.21-.061l.736-.415c.21-.124.273-.372.148-.559l-.946-1.635a.374.374 0 0 0-.253-.187c-.105-.02-.23-.02-.315.042l-.735.414c-.211.125-.274.373-.148.56l.946 1.635c.042.082.147.145.252.186zm3.699 4.06-.735.413c-.21.125-.274.374-.148.56l.946 1.635a.373.373 0 0 0 .253.187c.041 0 .062.02.104.02a.409.409 0 0 0 .211-.062l.735-.414c.21-.125.274-.373.148-.56l-.946-1.635a.375.375 0 0 0-.252-.187.558.558 0 0 0-.316.042ZM11.989 0C6.105 0 1.333 4.7 1.333 10.499c0 .953.127 1.884.379 2.795.147.56.735.87 1.282.725.567-.145.882-.725.736-1.263a8.098 8.098 0 0 1-.316-2.237C3.436 5.86 7.28 2.071 11.99 2.071s8.555 3.79 8.555 8.428c0 3.189-1.787 6.067-4.667 7.517a6.35 6.35 0 0 1-.861.372c-.126.041-.252.104-.4.145a1.046 1.046 0 0 0-.735.994c0 .498.084 1.056.274 1.657l-2.46-1.305c-.987-.517-1.955-1.056-2.753-1.822-.904-.87-1.198-1.429-1.282-2.444-.084-.931.147-1.594.904-2.505.4-.497.924-.85 1.344-1.097.4-.25.82-.477 1.262-.685a2.097 2.097 0 0 0 2.27.146 2.053 2.053 0 0 0 .798-2.816c-.567-.995-1.849-1.347-2.858-.788a2.021 2.021 0 0 0-1.051 1.575c-.525.249-1.05.538-1.534.849-.547.331-1.262.828-1.87 1.573-.758.932-1.514 2.133-1.367 3.976.126 1.532.631 2.527 1.892 3.748 1.009.974 2.101 1.595 3.258 2.196l3.95 2.05c.211.103.463.165.694.165.379 0 .736-.145 1.009-.394a1.41 1.41 0 0 0 .315-1.656 7.646 7.646 0 0 1-.588-1.677c.252-.104.505-.229.756-.332 3.595-1.801 5.823-5.384 5.823-9.36C22.645 4.701 17.875 0 11.989 0Z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">satellite</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_radar = {
  id: 'icon-lucide-radar',
  name: 'Radar',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'radar'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Radar</title><path d="M12 0L2.197 23.975 12 19.952 21.803 24z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">radar</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_loader = {
  id: 'icon-lucide-loader',
  name: 'Loader',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'loader'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v4" />
  <path d="m16.2 7.8 2.9-2.9" />
  <path d="M18 12h4" />
  <path d="m16.2 16.2 2.9 2.9" />
  <path d="M12 18v4" />
  <path d="m4.9 19.1 2.9-2.9" />
  <path d="M2 12h4" />
  <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  </div>
  <span class="lucide-icon__name">loader</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_loader_2 = {
  id: 'icon-lucide-loader-2',
  name: 'Loader 2',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'loader-2'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  </div>
  <span class="lucide-icon__name">loader-2</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_refresh_cw = {
  id: 'icon-lucide-refresh-cw',
  name: 'Refresh Cw',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'refresh-cw'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
  <path d="M21 3v5h-5" />
  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
  <path d="M8 16H3v5" />
    </svg>
  </div>
  <span class="lucide-icon__name">refresh-cw</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_refresh_ccw = {
  id: 'icon-lucide-refresh-ccw',
  name: 'Refresh Ccw',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'refresh-ccw'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
  <path d="M16 16h5v5" />
    </svg>
  </div>
  <span class="lucide-icon__name">refresh-ccw</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_repeat = {
  id: 'icon-lucide-repeat',
  name: 'Repeat',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'repeat'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m17 2 4 4-4 4" />
  <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
  <path d="m7 22-4-4 4-4" />
  <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  </div>
  <span class="lucide-icon__name">repeat</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_shuffle = {
  id: 'icon-lucide-shuffle',
  name: 'Shuffle',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'shuffle'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m18 14 4 4-4 4" />
  <path d="m18 2 4 4-4 4" />
  <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" />
  <path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" />
  <path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
    </svg>
  </div>
  <span class="lucide-icon__name">shuffle</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_computer = {
  id: 'icon-lucide-computer',
  name: 'Computer',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'computer'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="14" height="8" x="5" y="2" rx="2" />
  <rect width="20" height="8" x="2" y="14" rx="2" />
  <path d="M6 18h2" />
  <path d="M12 18h6" />
    </svg>
  </div>
  <span class="lucide-icon__name">computer</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_keyboard = {
  id: 'icon-lucide-keyboard',
  name: 'Keyboard',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'keyboard'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 8h.01" />
  <path d="M12 12h.01" />
  <path d="M14 8h.01" />
  <path d="M16 12h.01" />
  <path d="M18 8h.01" />
  <path d="M6 8h.01" />
  <path d="M7 16h10" />
  <path d="M8 12h.01" />
  <rect width="20" height="16" x="2" y="4" rx="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">keyboard</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_mouse = {
  id: 'icon-lucide-mouse',
  name: 'Mouse',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'mouse'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="7" />
  <path d="M12 6v4" />
    </svg>
  </div>
  <span class="lucide-icon__name">mouse</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_circuit_board = {
  id: 'icon-lucide-circuit-board',
  name: 'Circuit Board',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'circuit-board'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M11 9h4a2 2 0 0 0 2-2V3" />
  <circle cx="9" cy="9" r="2" />
  <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
  <circle cx="15" cy="15" r="2" />
    </svg>
  </div>
  <span class="lucide-icon__name">circuit-board</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_router = {
  id: 'icon-lucide-router',
  name: 'Router',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'router'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="8" x="2" y="14" rx="2" />
  <path d="M6.01 18H6" />
  <path d="M10.01 18H10" />
  <path d="M15 10v4" />
  <path d="M17.84 7.17a4 4 0 0 0-5.66 0" />
  <path d="M20.66 4.34a8 8 0 0 0-11.31 0" />
    </svg>
  </div>
  <span class="lucide-icon__name">router</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_antenna = {
  id: 'icon-lucide-antenna',
  name: 'Antenna',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'antenna'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 12 7 2" />
  <path d="m7 12 5-10" />
  <path d="m12 12 5-10" />
  <path d="m17 12 5-10" />
  <path d="M4.5 7h15" />
  <path d="M12 16v6" />
    </svg>
  </div>
  <span class="lucide-icon__name">antenna</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_signal = {
  id: 'icon-lucide-signal',
  name: 'Signal',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'signal'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Signal</title><path d="M12 0q-.934 0-1.83.139l.17 1.111a11 11 0 0 1 3.32 0l.172-1.111A12 12 0 0 0 12 0M9.152.34A12 12 0 0 0 5.77 1.742l.584.961a10.8 10.8 0 0 1 3.066-1.27zm5.696 0-.268 1.094a10.8 10.8 0 0 1 3.066 1.27l.584-.962A12 12 0 0 0 14.848.34M12 2.25a9.75 9.75 0 0 0-8.539 14.459c.074.134.1.292.064.441l-1.013 4.338 4.338-1.013a.62.62 0 0 1 .441.064A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-7.092.068a12 12 0 0 0-2.59 2.59l.909.664a11 11 0 0 1 2.345-2.345zm14.184 0-.664.909a11 11 0 0 1 2.345 2.345l.909-.664a12 12 0 0 0-2.59-2.59M1.742 5.77A12 12 0 0 0 .34 9.152l1.094.268a10.8 10.8 0 0 1 1.269-3.066zm20.516 0-.961.584a10.8 10.8 0 0 1 1.27 3.066l1.093-.268a12 12 0 0 0-1.402-3.383M.138 10.168A12 12 0 0 0 0 12q0 .934.139 1.83l1.111-.17A11 11 0 0 1 1.125 12q0-.848.125-1.66zm23.723.002-1.111.17q.125.812.125 1.66c0 .848-.042 1.12-.125 1.66l1.111.172a12.1 12.1 0 0 0 0-3.662M1.434 14.58l-1.094.268a12 12 0 0 0 .96 2.591l-.265 1.14 1.096.255.36-1.539-.188-.365a10.8 10.8 0 0 1-.87-2.35m21.133 0a10.8 10.8 0 0 1-1.27 3.067l.962.584a12 12 0 0 0 1.402-3.383zm-1.793 3.848a11 11 0 0 1-2.345 2.345l.664.909a12 12 0 0 0 2.59-2.59zm-19.959 1.1L.357 21.48a1.8 1.8 0 0 0 2.162 2.161l1.954-.455-.256-1.095-1.953.455a.675.675 0 0 1-.81-.81l.454-1.954zm16.832 1.769a10.8 10.8 0 0 1-3.066 1.27l.268 1.093a12 12 0 0 0 3.382-1.402zm-10.94.213-1.54.36.256 1.095 1.139-.266c.814.415 1.683.74 2.591.961l.268-1.094a10.8 10.8 0 0 1-2.35-.869zm3.634 1.24-.172 1.111a12.1 12.1 0 0 0 3.662 0l-.17-1.111q-.812.125-1.66.125a11 11 0 0 1-1.66-.125"/>
    </svg>
  </div>
  <span class="lucide-icon__name">signal</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_cable = {
  id: 'icon-lucide-cable',
  name: 'Cable',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'cable'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z" />
  <path d="M17 21v-2" />
  <path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10" />
  <path d="M21 21v-2" />
  <path d="M3 5V3" />
  <path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z" />
  <path d="M7 5V3" />
    </svg>
  </div>
  <span class="lucide-icon__name">cable</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_wire = {
  id: 'icon-lucide-wire',
  name: 'Wire',
  category: 'icons',
  iconCategory: 'Tech',
  tags: ['lucide', 'icon', 'svg', 'wire'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Wire</title><path d="M24 14.475c.009 4.084-3.296 7.401-7.38 7.41h-.016c-1.637-.015-3.222-.58-4.5-1.605-3.269 2.544-7.981 1.957-10.524-1.313-1-1.286-1.555-2.862-1.58-4.492V2.82h1.41v11.655c-.002 3.314 2.683 6.002 5.996 6.004 1.293.001 2.552-.416 3.589-1.189-1.163-1.335-1.806-3.043-1.815-4.814v-9.54c0-1.557 1.263-2.82 2.82-2.82s2.82 1.263 2.82 2.82v9.54c.006 1.766-.623 3.474-1.77 4.814 2.674 1.957 6.429 1.371 8.383-1.304.745-1.019 1.149-2.248 1.157-3.511V2.82H24v11.655zm-10.59-9.54c0-.778-.632-1.41-1.41-1.41-.779 0-1.41.631-1.41 1.41v9.54c.002 1.41.501 2.776 1.41 3.855.908-1.079 1.408-2.445 1.41-3.855v-9.54z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">wire</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_github = {
  id: 'icon-lucide-github',
  name: 'GitHub',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['lucide', 'icon', 'svg', 'github'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  </div>
  <span class="lucide-icon__name">github</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_instagram = {
  id: 'icon-lucide-instagram',
  name: 'Instagram',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['lucide', 'icon', 'svg', 'instagram'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
    </svg>
  </div>
  <span class="lucide-icon__name">instagram</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_youtube = {
  id: 'icon-lucide-youtube',
  name: 'YouTube',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['lucide', 'icon', 'svg', 'youtube'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">youtube</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_facebook = {
  id: 'icon-lucide-facebook',
  name: 'Facebook',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['lucide', 'icon', 'svg', 'facebook'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">facebook</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_dribbble = {
  id: 'icon-lucide-dribbble',
  name: 'Dribbble',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['lucide', 'icon', 'svg', 'dribbble'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Dribbble</title><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">dribbble</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_figma = {
  id: 'icon-lucide-figma',
  name: 'Figma',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['lucide', 'icon', 'svg', 'figma'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Figma</title><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">figma</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_safari = {
  id: 'icon-lucide-safari',
  name: 'Safari',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['lucide', 'icon', 'svg', 'safari'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Safari</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm-.004.953h.006c.063 0 .113.05.113.113v1.842c0 .063-.05.113-.113.113h-.006a.112.112 0 0 1-.113-.113V1.066c0-.063.05-.113.113-.113zm-.941.041c.056.001.104.046.11.104l.077.918a.112.112 0 0 1-.101.12h-.01a.11.11 0 0 1-.12-.1l-.08-.919a.112.112 0 0 1 .102-.12h.01l.012-.003zm1.892 0H12.965a.113.113 0 0 1 .103.121l-.08.92a.111.111 0 0 1-.12.102h-.009a.111.111 0 0 1-.101-.121l.078-.92a.112.112 0 0 1 .111-.102zm-2.838.123a.11.11 0 0 1 .106.092l.32 1.818c.01.06-.03.119-.09.13l-.01.001a.111.111 0 0 1-.128-.09l-.32-1.818a.111.111 0 0 1 .09-.129l.01-.002a.103.103 0 0 1 .022-.002zm3.784.002h.021l.008.002c.061.01.102.07.092.131l-.32 1.814c-.011.062-.07.101-.132.09h-.005a.113.113 0 0 1-.092-.13l.32-1.815a.111.111 0 0 1 .108-.092zm-4.715.203c.048.002.09.035.103.084l.239.893a.112.112 0 0 1-.079.139l-.005.001a.114.114 0 0 1-.14-.08l-.237-.894a.11.11 0 0 1 .078-.137l.006-.002a.123.123 0 0 1 .035-.004zm5.644 0a.11.11 0 0 1 .033.004l.006.002c.06.016.097.079.08.139l-.24.892a.112.112 0 0 1-.137.08l-.005-.002a.114.114 0 0 1-.08-.138l.24-.893a.112.112 0 0 1 .103-.084zm-6.562.285a.11.11 0 0 1 .107.073L9 3.42a.107.107 0 0 1-.064.139l-.012.005a.11.11 0 0 1-.14-.066L8.15 1.76a.11.11 0 0 1 .065-.14l.014-.005a.106.106 0 0 1 .03-.008zm7.469.002c.014 0 .028.001.042.006l.012.006c.057.02.087.082.067.139l-.633 1.738a.11.11 0 0 1-.14.066l-.013-.003A.11.11 0 0 1 15 3.42l.633-1.738a.108.108 0 0 1 .096-.073zm-8.352.366a.112.112 0 0 1 .105.064l.393.838a.112.112 0 0 1-.055.148l-.008.004a.11.11 0 0 1-.146-.054l-.395-.838a.112.112 0 0 1 .055-.149l.008-.004a.11.11 0 0 1 .043-.01zm9.246 0a.11.11 0 0 1 .043.01l.006.003a.11.11 0 0 1 .053.149l-.391.838a.112.112 0 0 1-.148.054l-.006-.002a.112.112 0 0 1-.055-.148l.393-.84a.112.112 0 0 1 .105-.064zm-10.092.44c.04-.002.08.018.102.056l.922 1.597a.113.113 0 0 1-.041.155l-.006.002a.113.113 0 0 1-.154-.041l-.922-1.598a.113.113 0 0 1 .04-.154l.007-.002a.11.11 0 0 1 .052-.016zm10.94.001c.018 0 .035.004.052.014l.004.002a.114.114 0 0 1 .041.156l-.923 1.596a.114.114 0 0 1-.157.04l-.004-.001a.112.112 0 0 1-.04-.155l.925-1.595a.113.113 0 0 1 .102-.057zM5.729 2.93a.11.11 0 0 1 .093.047l.532.753a.114.114 0 0 1-.028.159l-.004.002a.114.114 0 0 1-.158-.028l-.531-.752a.114.114 0 0 1 .027-.158l.006-.002a.113.113 0 0 1 .063-.021zm12.542 0a.11.11 0 0 1 .063.02l.006.003a.112.112 0 0 1 .027.156l-.531.756a.112.112 0 0 1-.156.028l-.006-.004a.112.112 0 0 1-.028-.157l.532-.755a.11.11 0 0 1 .093-.047zm.747.578a.11.11 0 0 1 .08.027l.006.004c.047.04.053.111.013.158L17.932 5.11a.11.11 0 0 1-.157.016l-.005-.006a.11.11 0 0 1-.014-.156l1.185-1.414a.114.114 0 0 1 .077-.041zM4.984 3.51a.11.11 0 0 1 .077.039L6.244 4.96a.112.112 0 0 1-.014.158l-.003.004a.112.112 0 0 1-.159-.014L4.883 3.697a.112.112 0 0 1 .013-.158l.006-.004a.111.111 0 0 1 .082-.025zm-.714.64c.027 0 .055.01.076.032l.658.66a.107.107 0 0 1 0 .152l-.01.01a.107.107 0 0 1-.152 0l-.66-.658a.11.11 0 0 1 0-.155l.01-.01a.111.111 0 0 1 .078-.03zm15.462 0c.028 0 .055.01.077.032l.007.007a.109.109 0 0 1 0 .155l-.658.66a.109.109 0 0 1-.154 0l-.008-.008a.109.109 0 0 1 0-.154l.658-.66a.11.11 0 0 1 .078-.032zm.707.66c.038 0 .071.02.092.075a.112.112 0 0 1-.023.117l-7.606 8.08c-3.084 2.024-6.149 4.04-9.222 6.05-.078.051-.17.082-.211-.028a.112.112 0 0 1 .023-.118l7.594-8.08c3.084-2.023 6.161-4.039 9.234-6.049a.247.247 0 0 1 .12-.046zm-16.824.045a.109.109 0 0 1 .08.026l1.416 1.187a.11.11 0 0 1 .014.157l-.006.005a.11.11 0 0 1-.156.014L3.549 5.057a.109.109 0 0 1-.014-.155l.006-.007a.108.108 0 0 1 .074-.04zm17.336.756c.036 0 .072.017.094.05l.004.003a.114.114 0 0 1-.028.158l-.753.53a.112.112 0 0 1-.157-.028l-.004-.004a.114.114 0 0 1 .028-.158l.754-.53a.113.113 0 0 1 .062-.02zm-17.904.002c.02 0 .042.007.06.02l.76.531c.05.035.06.103.026.152l-.006.01a.109.109 0 0 1-.153.026l-.76-.532a.109.109 0 0 1-.025-.152l.006-.01a.108.108 0 0 1 .092-.045zm-.512.803c.018 0 .036.006.053.016l1.596.923a.111.111 0 0 1 .04.153l-.003.006a.111.111 0 0 1-.153.04L2.473 6.63a.111.111 0 0 1-.041-.152l.004-.006a.11.11 0 0 1 .1-.055zm18.932 0a.11.11 0 0 1 .1.055l.001.004a.113.113 0 0 1-.04.154l-1.596.926a.113.113 0 0 1-.155-.041l-.002-.004a.113.113 0 0 1 .041-.155l1.596-.925a.115.115 0 0 1 .055-.014zm-19.373.846c.014 0 .029.003.043.01l.838.392a.11.11 0 0 1 .052.147l-.004.01a.11.11 0 0 1-.146.052l-.838-.393a.11.11 0 0 1-.053-.146l.004-.01a.109.109 0 0 1 .104-.062zm19.81.002a.11.11 0 0 1 .106.062l.002.008a.11.11 0 0 1-.053.146l-.838.393a.11.11 0 0 1-.146-.053l-.004-.008a.11.11 0 0 1 .052-.146l.838-.393a.11.11 0 0 1 .043-.01zm-20.183.88c.014 0 .028.001.043.006l1.732.631a.112.112 0 0 1 .067.145l-.002.006a.11.11 0 0 1-.143.066l-1.732-.63a.113.113 0 0 1-.069-.145l.002-.004a.115.115 0 0 1 .102-.074zm20.549 0a.113.113 0 0 1 .11.075l.003.004a.115.115 0 0 1-.069.146l-1.732.629a.112.112 0 0 1-.145-.066l-.001-.006a.113.113 0 0 1 .068-.145l1.732-.63a.11.11 0 0 1 .034-.006zm-20.836.909a.11.11 0 0 1 .033.004l.892.24c.06.016.096.077.08.137l-.002.007a.11.11 0 0 1-.136.079l-.895-.239a.113.113 0 0 1-.078-.138l.002-.006a.113.113 0 0 1 .104-.084zm21.13.002a.115.115 0 0 1 .106.084v.004a.112.112 0 0 1-.078.138l-.893.239a.112.112 0 0 1-.138-.079v-.005a.112.112 0 0 1 .078-.14l.892-.237a.11.11 0 0 1 .033-.004zm-21.335.93.023.001 1.814.323c.062.01.101.069.09.13v.006a.111.111 0 0 1-.13.09l-1.815-.322a.113.113 0 0 1-.092-.131l.002-.006a.11.11 0 0 1 .108-.092zm21.519.001h.022c.052.002.1.038.109.092v.006c.01.062-.03.12-.092.13l-1.814.321a.113.113 0 0 1-.131-.092v-.005a.113.113 0 0 1 .092-.131l1.814-.32zm-21.644.944h.011l.922.084a.11.11 0 0 1 .102.119l-.002.01a.11.11 0 0 1-.121.1l-.922-.083a.11.11 0 0 1-.1-.12v-.009a.111.111 0 0 1 .11-.101zm21.779.002h.012c.056 0 .106.043.11.101v.008a.111.111 0 0 1-.1.121l-.923.08a.111.111 0 0 1-.12-.101v-.008a.111.111 0 0 1 .1-.121l.92-.08zm-11.82.73L6.091 16.95c2.02-1.324 4.039-2.646 6.066-3.976l-1.095-1.31zm11.87.219c.063 0 .114.05.114.113v.004c0 .063-.05.113-.113.113l-1.844.004a.113.113 0 0 1-.113-.113v-.004c0-.063.05-.113.113-.113l1.844-.004zm-21.869.002h1.844c.062 0 .112.05.112.111v.008c0 .062-.05.111-.112.111H1.064a.111.111 0 0 1-.11-.111v-.008c0-.061.049-.111.11-.111zm.952.875h.011a.11.11 0 0 1 .11.101v.006a.111.111 0 0 1-.102.121l-.922.08a.11.11 0 0 1-.119-.101l-.002-.006a.111.111 0 0 1 .102-.121l.922-.08zm19.955 0h.011l.922.08a.11.11 0 0 1 .102.119v.008a.112.112 0 0 1-.121.101l-.922-.08a.11.11 0 0 1-.102-.119v-.008a.111.111 0 0 1 .11-.101zm-18.924.705c.053.001.098.04.107.094l.002.004c.011.061-.03.12-.092.13l-1.812.32a.113.113 0 0 1-.13-.091v-.004a.115.115 0 0 1 .09-.133l1.811-.318a.117.117 0 0 1 .024-.002zm17.902 0c.008 0 .016 0 .024.002l1.816.32c.061.011.1.07.09.131v.004a.113.113 0 0 1-.131.092l-1.816-.32a.112.112 0 0 1-.09-.131v-.004a.113.113 0 0 1 .107-.094zM2.332 14.477a.11.11 0 0 1 .104.082l.002.005c.016.06-.02.121-.08.137l-.891.24a.112.112 0 0 1-.137-.08l-.002-.006a.112.112 0 0 1 .08-.136l.89-.239a.112.112 0 0 1 .034-.003zm19.332 0c.011 0 .024 0 .035.003l.893.239c.06.016.096.077.08.136l-.002.006a.111.111 0 0 1-.137.078l-.894-.238a.111.111 0 0 1-.078-.137l.002-.005a.109.109 0 0 1 .101-.082zm-18.213.517a.11.11 0 0 1 .11.074l.002.004a.112.112 0 0 1-.067.145l-1.732.63a.113.113 0 0 1-.145-.068l-.002-.004a.113.113 0 0 1 .069-.144L3.418 15a.11.11 0 0 1 .033-.006zm17.086 0c.015 0 .029 0 .043.006l1.734.63a.111.111 0 0 1 .067.143l-.002.008a.111.111 0 0 1-.143.067l-1.734-.631a.111.111 0 0 1-.066-.143l.002-.008a.111.111 0 0 1 .1-.072zM2.92 16.117a.109.109 0 0 1 .103.063l.004.01a.108.108 0 0 1-.052.144l-.838.393a.11.11 0 0 1-.147-.055l-.004-.008a.11.11 0 0 1 .053-.146l.838-.391a.112.112 0 0 1 .043-.01zm18.158 0a.11.11 0 0 1 .043.01l.838.39c.056.027.08.093.055.149l-.002.004a.112.112 0 0 1-.149.055l-.838-.391a.112.112 0 0 1-.054-.148l.002-.004a.112.112 0 0 1 .105-.065zm-16.957.315c.04-.001.078.02.1.056l.004.004a.11.11 0 0 1-.041.153l-1.596.921a.113.113 0 0 1-.154-.04l-.002-.005a.113.113 0 0 1 .04-.154l1.596-.922a.109.109 0 0 1 .053-.013zm15.756 0c.018 0 .036.004.053.013l1.597.924a.11.11 0 0 1 .041.152l-.002.004a.11.11 0 0 1-.152.041l-1.598-.921a.113.113 0 0 1-.04-.155l.001-.002a.111.111 0 0 1 .1-.056zm.328 1.193a.11.11 0 0 1 .06.021l.758.534c.05.035.061.102.026.152l-.004.008a.111.111 0 0 1-.154.027l-.756-.535a.109.109 0 0 1-.028-.152l.006-.008a.11.11 0 0 1 .092-.047zm-16.412.002c.035 0 .072.016.094.047l.004.008a.109.109 0 0 1-.028.152l-.756.531a.108.108 0 0 1-.152-.025l-.006-.008a.109.109 0 0 1 .028-.152l.755-.534a.107.107 0 0 1 .061-.019zm15.162.102a.112.112 0 0 1 .082.025l1.414 1.187a.11.11 0 0 1 .014.157l-.004.004a.113.113 0 0 1-.158.013L18.89 17.93a.11.11 0 0 1-.014-.157l.004-.005a.108.108 0 0 1 .074-.04zm-12.812 1.12a.11.11 0 0 1 .08.026l.007.008a.11.11 0 0 1 .014.154L5.06 20.451a.11.11 0 0 1-.155.012l-.008-.006a.11.11 0 0 1-.013-.154l1.185-1.414a.11.11 0 0 1 .075-.04zm11.703 0c.032 0 .065.015.088.042l1.181 1.41c.04.048.035.12-.013.16l-.002.002a.114.114 0 0 1-.16-.014l-1.182-1.41a.114.114 0 0 1 .013-.16l.002-.002a.115.115 0 0 1 .073-.027zm-12.928.114c.027 0 .054.01.074.031l.014.012a.107.107 0 0 1 0 .15l-.662.66a.105.105 0 0 1-.149 0l-.011-.011a.105.105 0 0 1 0-.149l.66-.662a.105.105 0 0 1 .074-.031zm14.164 0c.027 0 .053.01.074.031l.66.662a.106.106 0 0 1 0 .15l-.011.012a.106.106 0 0 1-.15-.002l-.66-.66a.106.106 0 0 1 .001-.15l.01-.012a.108.108 0 0 1 .076-.031zm-11.627.797c.018 0 .034.006.05.015l.007.004a.11.11 0 0 1 .04.15l-.921 1.598a.11.11 0 0 1-.15.041l-.008-.004a.111.111 0 0 1-.04-.152l.922-1.596a.113.113 0 0 1 .1-.056zm9.088.002a.11.11 0 0 1 .1.054l.925 1.596a.113.113 0 0 1-.04.154h-.005a.11.11 0 0 1-.152-.039l-.926-1.595a.113.113 0 0 1 .041-.155l.004-.002a.108.108 0 0 1 .053-.013zm-10.285.324c.021 0 .043.008.062.021l.004.002c.051.036.063.106.028.157l-.53.755a.112.112 0 0 1-.156.028l-.004-.002a.112.112 0 0 1-.027-.156l.53-.756a.113.113 0 0 1 .093-.05zm11.484.002c.036 0 .072.015.094.047l.53.756c.035.05.023.12-.028.156l-.004.002a.112.112 0 0 1-.156-.028l-.53-.755a.112.112 0 0 1 .028-.157l.004-.002a.112.112 0 0 1 .062-.02zm-8.863.342a.11.11 0 0 1 .043.006l.012.005c.056.02.084.081.064.137l-.633 1.74a.105.105 0 0 1-.136.063l-.014-.004a.106.106 0 0 1-.065-.137l.633-1.74a.107.107 0 0 1 .096-.07zm6.232 0a.107.107 0 0 1 .106.07l.633 1.738a.107.107 0 0 1-.065.137l-.015.006a.107.107 0 0 1-.137-.065L15 20.578a.107.107 0 0 1 .064-.137l.014-.005a.117.117 0 0 1 .033-.006zm-4.695.41c.008 0 .014 0 .021.002l.006.002c.062.01.101.067.09.129l-.318 1.812a.113.113 0 0 1-.131.092l-.004-.002a.111.111 0 0 1-.092-.129l.32-1.812a.113.113 0 0 1 .108-.094zm3.146.002c.008-.002.015 0 .022 0a.111.111 0 0 1 .107.092l.32 1.812c.012.061-.03.12-.091.131l-.004.002a.113.113 0 0 1-.13-.092l-.321-1.812a.113.113 0 0 1 .092-.131l.005-.002zm-5.79.119a.11.11 0 0 1 .042.01l.004.002a.114.114 0 0 1 .055.15l-.393.834a.112.112 0 0 1-.148.055l-.004-.002a.112.112 0 0 1-.055-.149l.393-.836a.112.112 0 0 1 .105-.064zm8.458 0a.108.108 0 0 1 .104.062l.39.84a.11.11 0 0 1-.052.147l-.008.004a.11.11 0 0 1-.146-.055l-.391-.838a.11.11 0 0 1 .053-.146l.008-.004a.11.11 0 0 1 .042-.01zm-4.236.018H12c.063 0 .115.05.115.113l.002 1.84c0 .063-.05.113-.113.113h-.006a.113.113 0 0 1-.113-.113l-.004-1.838c0-.063.05-.115.113-.115zm-2.592.578c.011 0 .022 0 .034.004l.005.002c.06.016.095.077.079.136l-.24.893a.111.111 0 0 1-.137.078l-.006-.002a.111.111 0 0 1-.078-.137l.24-.89a.113.113 0 0 1 .103-.084zm5.196.002a.11.11 0 0 1 .103.082l.24.89a.11.11 0 0 1-.078.137l-.006.002a.11.11 0 0 1-.136-.078l-.24-.89a.11.11 0 0 1 .078-.138l.005-.002a.112.112 0 0 1 .034-.003zm-3.475.302h.01l.008.002c.061.006.107.06.101.121l-.08.92a.112.112 0 0 1-.121.102h-.008a.11.11 0 0 1-.1-.121l.08-.922a.111.111 0 0 1 .11-.102zm1.736 0h.02a.11.11 0 0 1 .107.102l.08.924a.11.11 0 0 1-.101.119l-.008.002a.11.11 0 0 1-.12-.102l-.08-.924a.112.112 0 0 1 .102-.12z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">safari</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_firefox = {
  id: 'icon-lucide-firefox',
  name: 'Firefox',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['lucide', 'icon', 'svg', 'firefox'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Firefox</title><path d="M20.452 3.445a11.002 11.002 0 00-2.482-1.908C16.944.997 15.098.093 12.477.032c-.734-.017-1.457.03-2.174.144-.72.114-1.398.292-2.118.56-1.017.377-1.996.975-2.574 1.554.583-.349 1.476-.733 2.55-.992a10.083 10.083 0 013.729-.167c2.341.34 4.178 1.381 5.48 2.625a8.066 8.066 0 011.298 1.587c1.468 2.382 1.33 5.376.184 7.142-.85 1.312-2.67 2.544-4.37 2.53-.583-.023-1.438-.152-2.25-.566-2.629-1.343-3.021-4.688-1.118-6.306-.632-.136-1.82.13-2.646 1.363-.742 1.107-.7 2.816-.242 4.028a6.473 6.473 0 01-.59-1.895 7.695 7.695 0 01.416-3.845A8.212 8.212 0 019.45 5.399c.896-1.069 1.908-1.72 2.75-2.005-.54-.471-1.411-.738-2.421-.767C8.31 2.583 6.327 3.061 4.7 4.41a8.148 8.148 0 00-1.976 2.414c-.455.836-.691 1.659-.697 1.678.122-1.445.704-2.994 1.248-4.055-.79.413-1.827 1.668-2.41 3.042C.095 9.37-.2 11.608.14 13.989c.966 5.668 5.9 9.982 11.843 9.982C18.62 23.971 24 18.591 24 11.956a11.93 11.93 0 00-3.548-8.511z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">firefox</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_twitch = {
  id: 'icon-lucide-twitch',
  name: 'Twitch',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['lucide', 'icon', 'svg', 'twitch'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Twitch</title><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">twitch</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_whatsapp = {
  id: 'icon-lucide-whatsapp',
  name: 'WhatsApp',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['lucide', 'icon', 'svg', 'whatsapp'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">whatsapp</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_telegram = {
  id: 'icon-lucide-telegram',
  name: 'Telegram',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['lucide', 'icon', 'svg', 'telegram'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">telegram</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_reddit = {
  id: 'icon-lucide-reddit',
  name: 'Reddit',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['lucide', 'icon', 'svg', 'reddit'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Reddit</title><path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">reddit</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_discord = {
  id: 'icon-lucide-discord',
  name: 'Discord',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['lucide', 'icon', 'svg', 'discord'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">discord</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_medium = {
  id: 'icon-lucide-medium',
  name: 'Medium',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['lucide', 'icon', 'svg', 'medium'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>Medium</title><path d="M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">medium</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const icon_gitlab = {
  id: 'icon-lucide-gitlab',
  name: 'GitLab',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['lucide', 'icon', 'svg', 'gitlab'],
  author: 'lucide',
  html: `<div class="lucide-icon">
  <div class="lucide-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <title>GitLab</title><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/>
    </svg>
  </div>
  <span class="lucide-icon__name">gitlab</span>
</div>`,
  css: `.lucide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.lucide-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.lucide-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.lucide-icon:hover .lucide-icon__svg {
  color: var(--accent, #a78bfa);
}

.lucide-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

export { icon_home, icon_search, icon_settings, icon_filter, icon_sliders_horizontal, icon_menu, icon_x, icon_check, icon_chevron_right, icon_chevron_left, icon_chevron_up, icon_chevron_down, icon_arrow_right, icon_arrow_left, icon_arrow_up, icon_arrow_down, icon_plus, icon_minus, icon_circle, icon_square, icon_triangle, icon_more_horizontal, icon_more_vertical, icon_grid, icon_list, icon_columns, icon_layout, icon_sidebar, icon_maximize, icon_minimize, icon_expand, icon_shrink, icon_fullscreen, icon_rotate_cw, icon_rotate_ccw, icon_move, icon_scale, icon_crop, icon_scissors, icon_corner_up_left, icon_corner_up_right, icon_corner_down_left, icon_corner_down_right, icon_arrow_up_right, icon_arrow_up_left, icon_arrow_down_right, icon_arrow_down_left, icon_external_link, icon_link, icon_unlink, icon_pencil, icon_pen_tool, icon_edit, icon_edit_3, icon_eraser, icon_brush, icon_paintbrush, icon_paint_bucket, icon_palette, icon_pipette, icon_frame, icon_group, icon_ungroup, icon_layers, icon_wand, icon_wand_2, icon_user, icon_users, icon_user_plus, icon_user_minus, icon_user_check, icon_user_x, icon_heart, icon_star, icon_bookmark, icon_share, icon_share_2, icon_link_2, icon_mail, icon_phone, icon_message_circle, icon_message_square, icon_send, icon_bell, icon_bell_off, icon_at_sign, icon_hash, icon_thumbs_up, icon_thumbs_down, icon_smile, icon_frown, icon_meh, icon_laugh, icon_angry, icon_play, icon_pause, icon_skip_forward, icon_skip_back, icon_fast_forward, icon_rewind, icon_volume_2, icon_volume_1, icon_volume_x, icon_headphones, icon_mic, icon_mic_off, icon_camera, icon_video, icon_film, icon_image, icon_images, icon_music, icon_music_2, icon_music_3, icon_music_4, icon_podcast, icon_radio, icon_tv, icon_monitor, icon_smartphone, icon_tablet, icon_laptop, icon_file, icon_file_text, icon_file_plus, icon_file_minus, icon_file_check, icon_file_x, icon_folder, icon_folder_plus, icon_folder_minus, icon_folder_open, icon_archive, icon_database, icon_server, icon_hard_drive, icon_cloud, icon_cloud_upload, icon_cloud_download, icon_download, icon_upload, icon_paperclip, icon_clipboard, icon_clipboard_list, icon_clipboard_check, icon_copy, icon_trash, icon_trash_2, icon_save, icon_printer, icon_scan, icon_file_code, icon_code, icon_terminal, icon_git_branch, icon_git_commit, icon_git_merge, icon_git_pull_request, icon_package, icon_package_2, icon_package_check, icon_shopping_cart, icon_shopping_bag, icon_tag, icon_tags, icon_barcode, icon_receipt, icon_percent, icon_dollar_sign, icon_euro, icon_pound_sterling, icon_bitcoin, icon_ethereum, icon_litecoin, icon_monero, icon_currency, icon_credit_card, icon_wallet, icon_gift, icon_shopping_basket, icon_store, icon_truck, icon_percent_circle, icon_bar_chart, icon_bar_chart_2, icon_bar_chart_3, icon_bar_chart_4, icon_pie_chart, icon_trending_up, icon_trending_down, icon_activity, icon_target, icon_crosshair, icon_gauge, icon_compass, icon_map_pin, icon_map, icon_globe, icon_navigation, icon_flag, icon_flag_off, icon_calendar, icon_calendar_check, icon_calendar_x, icon_calendar_plus, icon_calendar_minus, icon_calendar_days, icon_calendar_clock, icon_calendar_range, icon_clock, icon_clock_2, icon_clock_arrow_up, icon_clock_arrow_down, icon_timer, icon_hourglass, icon_alarm_clock, icon_watch, icon_history, icon_lock, icon_lock_keyhole, icon_unlock, icon_unlock_keyhole, icon_key, icon_key_round, icon_key_square, icon_shield, icon_shield_check, icon_shield_alert, icon_shield_off, icon_shield_question, icon_eye, icon_eye_off, icon_fingerprint, icon_scan_face, icon_scan_line, icon_siren, icon_badge, icon_id_card, icon_passport, icon_visa, icon_vault, icon_file_lock, icon_folder_lock, icon_phone_call, icon_phone_forwarded, icon_phone_off, icon_phone_outgoing, icon_phone_incoming, icon_phone_missed, icon_voicemail, icon_forward, icon_reply, icon_reply_all, icon_inbox, icon_megaphone, icon_contact, icon_rss, icon_message_circle_more, icon_message_circle_warning, icon_message_square_more, icon_messages_square, icon_check_circle, icon_check_circle_2, icon_check_square, icon_x_circle, icon_x_square, icon_alert_circle, icon_alert_triangle, icon_info, icon_help_circle, icon_lightbulb, icon_zap, icon_sparkles, icon_flame, icon_wind, icon_cloud_lightning, icon_cloud_rain, icon_cloud_snow, icon_sun, icon_sunrise, icon_sunset, icon_moon, icon_cloud_sun, icon_leaf, icon_trees, icon_flower, icon_flower_2, icon_bird, icon_rabbit, icon_cat, icon_dog, icon_fish, icon_bug, icon_apple, icon_cherry, icon_citrus, icon_grape, icon_carrot, icon_coffee, icon_wine, icon_beer, icon_utensils, icon_pizza, icon_cake, icon_ice_cream, icon_candy, icon_cookie, icon_cpu, icon_memory_stick, icon_wifi, icon_wifi_off, icon_bluetooth, icon_usb, icon_plug, icon_battery, icon_battery_charging, icon_battery_low, icon_battery_full, icon_battery_medium, icon_battery_warning, icon_power, icon_switch_camera, icon_rocket, icon_satellite, icon_radar, icon_loader, icon_loader_2, icon_refresh_cw, icon_refresh_ccw, icon_repeat, icon_shuffle, icon_computer, icon_keyboard, icon_mouse, icon_circuit_board, icon_router, icon_antenna, icon_signal, icon_cable, icon_wire, icon_github, icon_instagram, icon_youtube, icon_facebook, icon_dribbble, icon_figma, icon_safari, icon_firefox, icon_twitch, icon_whatsapp, icon_telegram, icon_reddit, icon_discord, icon_medium, icon_gitlab }
export default { icon_home, icon_search, icon_settings, icon_filter, icon_sliders_horizontal, icon_menu, icon_x, icon_check, icon_chevron_right, icon_chevron_left, icon_chevron_up, icon_chevron_down, icon_arrow_right, icon_arrow_left, icon_arrow_up, icon_arrow_down, icon_plus, icon_minus, icon_circle, icon_square, icon_triangle, icon_more_horizontal, icon_more_vertical, icon_grid, icon_list, icon_columns, icon_layout, icon_sidebar, icon_maximize, icon_minimize, icon_expand, icon_shrink, icon_fullscreen, icon_rotate_cw, icon_rotate_ccw, icon_move, icon_scale, icon_crop, icon_scissors, icon_corner_up_left, icon_corner_up_right, icon_corner_down_left, icon_corner_down_right, icon_arrow_up_right, icon_arrow_up_left, icon_arrow_down_right, icon_arrow_down_left, icon_external_link, icon_link, icon_unlink, icon_pencil, icon_pen_tool, icon_edit, icon_edit_3, icon_eraser, icon_brush, icon_paintbrush, icon_paint_bucket, icon_palette, icon_pipette, icon_frame, icon_group, icon_ungroup, icon_layers, icon_wand, icon_wand_2, icon_user, icon_users, icon_user_plus, icon_user_minus, icon_user_check, icon_user_x, icon_heart, icon_star, icon_bookmark, icon_share, icon_share_2, icon_link_2, icon_mail, icon_phone, icon_message_circle, icon_message_square, icon_send, icon_bell, icon_bell_off, icon_at_sign, icon_hash, icon_thumbs_up, icon_thumbs_down, icon_smile, icon_frown, icon_meh, icon_laugh, icon_angry, icon_play, icon_pause, icon_skip_forward, icon_skip_back, icon_fast_forward, icon_rewind, icon_volume_2, icon_volume_1, icon_volume_x, icon_headphones, icon_mic, icon_mic_off, icon_camera, icon_video, icon_film, icon_image, icon_images, icon_music, icon_music_2, icon_music_3, icon_music_4, icon_podcast, icon_radio, icon_tv, icon_monitor, icon_smartphone, icon_tablet, icon_laptop, icon_file, icon_file_text, icon_file_plus, icon_file_minus, icon_file_check, icon_file_x, icon_folder, icon_folder_plus, icon_folder_minus, icon_folder_open, icon_archive, icon_database, icon_server, icon_hard_drive, icon_cloud, icon_cloud_upload, icon_cloud_download, icon_download, icon_upload, icon_paperclip, icon_clipboard, icon_clipboard_list, icon_clipboard_check, icon_copy, icon_trash, icon_trash_2, icon_save, icon_printer, icon_scan, icon_file_code, icon_code, icon_terminal, icon_git_branch, icon_git_commit, icon_git_merge, icon_git_pull_request, icon_package, icon_package_2, icon_package_check, icon_shopping_cart, icon_shopping_bag, icon_tag, icon_tags, icon_barcode, icon_receipt, icon_percent, icon_dollar_sign, icon_euro, icon_pound_sterling, icon_bitcoin, icon_ethereum, icon_litecoin, icon_monero, icon_currency, icon_credit_card, icon_wallet, icon_gift, icon_shopping_basket, icon_store, icon_truck, icon_percent_circle, icon_bar_chart, icon_bar_chart_2, icon_bar_chart_3, icon_bar_chart_4, icon_pie_chart, icon_trending_up, icon_trending_down, icon_activity, icon_target, icon_crosshair, icon_gauge, icon_compass, icon_map_pin, icon_map, icon_globe, icon_navigation, icon_flag, icon_flag_off, icon_calendar, icon_calendar_check, icon_calendar_x, icon_calendar_plus, icon_calendar_minus, icon_calendar_days, icon_calendar_clock, icon_calendar_range, icon_clock, icon_clock_2, icon_clock_arrow_up, icon_clock_arrow_down, icon_timer, icon_hourglass, icon_alarm_clock, icon_watch, icon_history, icon_lock, icon_lock_keyhole, icon_unlock, icon_unlock_keyhole, icon_key, icon_key_round, icon_key_square, icon_shield, icon_shield_check, icon_shield_alert, icon_shield_off, icon_shield_question, icon_eye, icon_eye_off, icon_fingerprint, icon_scan_face, icon_scan_line, icon_siren, icon_badge, icon_id_card, icon_passport, icon_visa, icon_vault, icon_file_lock, icon_folder_lock, icon_phone_call, icon_phone_forwarded, icon_phone_off, icon_phone_outgoing, icon_phone_incoming, icon_phone_missed, icon_voicemail, icon_forward, icon_reply, icon_reply_all, icon_inbox, icon_megaphone, icon_contact, icon_rss, icon_message_circle_more, icon_message_circle_warning, icon_message_square_more, icon_messages_square, icon_check_circle, icon_check_circle_2, icon_check_square, icon_x_circle, icon_x_square, icon_alert_circle, icon_alert_triangle, icon_info, icon_help_circle, icon_lightbulb, icon_zap, icon_sparkles, icon_flame, icon_wind, icon_cloud_lightning, icon_cloud_rain, icon_cloud_snow, icon_sun, icon_sunrise, icon_sunset, icon_moon, icon_cloud_sun, icon_leaf, icon_trees, icon_flower, icon_flower_2, icon_bird, icon_rabbit, icon_cat, icon_dog, icon_fish, icon_bug, icon_apple, icon_cherry, icon_citrus, icon_grape, icon_carrot, icon_coffee, icon_wine, icon_beer, icon_utensils, icon_pizza, icon_cake, icon_ice_cream, icon_candy, icon_cookie, icon_cpu, icon_memory_stick, icon_wifi, icon_wifi_off, icon_bluetooth, icon_usb, icon_plug, icon_battery, icon_battery_charging, icon_battery_low, icon_battery_full, icon_battery_medium, icon_battery_warning, icon_power, icon_switch_camera, icon_rocket, icon_satellite, icon_radar, icon_loader, icon_loader_2, icon_refresh_cw, icon_refresh_ccw, icon_repeat, icon_shuffle, icon_computer, icon_keyboard, icon_mouse, icon_circuit_board, icon_router, icon_antenna, icon_signal, icon_cable, icon_wire, icon_github, icon_instagram, icon_youtube, icon_facebook, icon_dribbble, icon_figma, icon_safari, icon_firefox, icon_twitch, icon_whatsapp, icon_telegram, icon_reddit, icon_discord, icon_medium, icon_gitlab }