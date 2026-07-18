/**
 * Logos de marcas de Simple Icons (~290 marcas populares).
 * Cada logo es un componente CSS-only con SVG inline.
 * Los SVGs usan fill="currentColor" para heredar el color.
 */

const brand_github = {
  id: 'brand-github',
  name: 'GitHub',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'github'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  </div>
  <span class="brand-icon__name">github</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_gitlab = {
  id: 'brand-gitlab',
  name: 'GitLab',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'gitlab'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>GitLab</title><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/>
    </svg>
  </div>
  <span class="brand-icon__name">gitlab</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_git = {
  id: 'brand-git',
  name: 'Git',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'git'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Git</title><path d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"/>
    </svg>
  </div>
  <span class="brand-icon__name">git</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_bitbucket = {
  id: 'brand-bitbucket',
  name: 'Bitbucket',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'bitbucket'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Bitbucket</title><path d="M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 00.77-.646l3.27-20.03a.768.768 0 00-.768-.891zM14.52 15.53H9.522L8.17 8.466h7.561z"/>
    </svg>
  </div>
  <span class="brand-icon__name">bitbucket</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_docker = {
  id: 'brand-docker',
  name: 'Docker',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'docker'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Docker</title><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">docker</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_kubernetes = {
  id: 'brand-kubernetes',
  name: 'Kubernetes',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'kubernetes'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Kubernetes</title><path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z"/>
    </svg>
  </div>
  <span class="brand-icon__name">kubernetes</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_google = {
  id: 'brand-google',
  name: 'Google',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'google'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google</title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
    </svg>
  </div>
  <span class="brand-icon__name">google</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_googlecloud = {
  id: 'brand-googlecloud',
  name: 'Google Cloud',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'googlecloud'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google Cloud</title><path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z"/>
    </svg>
  </div>
  <span class="brand-icon__name">googlecloud</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_googlemaps = {
  id: 'brand-googlemaps',
  name: 'Google Maps',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'googlemaps'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google Maps</title><path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"/>
    </svg>
  </div>
  <span class="brand-icon__name">googlemaps</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_googleanalytics = {
  id: 'brand-googleanalytics',
  name: 'Google Analytics',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'googleanalytics'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google Analytics</title><path d="M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z"/>
    </svg>
  </div>
  <span class="brand-icon__name">googleanalytics</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_googleassistant = {
  id: 'brand-googleassistant',
  name: 'Google Assistant',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'googleassistant'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google Assistant</title><path d="M22.365 8.729c.9 0 1.635-.735 1.635-1.635s-.735-1.636-1.635-1.636-1.636.735-1.636 1.636.723 1.635 1.636 1.635m-4.907 5.452a3.27 3.27 0 1 0 0-6.542 3.27 3.27 0 0 0 0 6.542m0 8.722c2.105 0 3.816-1.711 3.816-3.829s-1.711-3.816-3.829-3.816a3.82 3.82 0 0 0-3.816 3.816 3.825 3.825 0 0 0 3.829 3.83M6.542 14.18a6.542 6.542 0 1 0 0-13.084 6.542 6.542 0 1 0 0 13.084"/>
    </svg>
  </div>
  <span class="brand-icon__name">googleassistant</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_googleads = {
  id: 'brand-googleads',
  name: 'Google Ads',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'googleads'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google Ads</title><path d="M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998zm19.4643-6.0004L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644zM7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z"/>
    </svg>
  </div>
  <span class="brand-icon__name">googleads</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_googlescholar = {
  id: 'brand-googlescholar',
  name: 'Google Scholar',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'googlescholar'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google Scholar</title><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
    </svg>
  </div>
  <span class="brand-icon__name">googlescholar</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_googletranslate = {
  id: 'brand-googletranslate',
  name: 'Google Translate',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'googletranslate'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google Translate</title><path d="M22.401 4.818h-9.927L10.927 0H1.599C.72 0 .002.719.002 1.599v16.275c0 .878.72 1.597 1.597 1.597h10L13.072 24H22.4c.878 0 1.597-.707 1.597-1.572V6.39c0-.865-.72-1.572-1.597-1.572zm-15.66 8.68c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 1.012 0 1.86.375 2.512.976l-.99.952a2.194 2.194 0 0 0-1.522-.584c-1.305 0-2.363 1.08-2.363 2.409S5.436 12.16 6.74 12.16c1.507 0 2.13-1.08 2.19-1.808l-2.188-.002V9.066h3.51c.05.23.09.457.09.764 0 2.147-1.434 3.669-3.602 3.669zm16.757 8.93c0 .59-.492 1.072-1.097 1.072h-8.875l3.649-4.03h.005l-.74-2.302.006-.005s.568-.488 1.277-1.24c.712.771 1.63 1.699 2.818 2.805l.771-.772c-1.272-1.154-2.204-2.07-2.89-2.805.919-1.087 1.852-2.455 2.049-3.707h2.034v.002h.002v-.94h-4.532v-1.52h-1.471v1.52H14.3l-1.672-5.21.006.022h9.767c.605 0 1.097.48 1.097 1.072v16.038zm-6.484-7.311c-.536.548-.943.873-.943.873l-.008.004-1.46-4.548h4.764c-.307 1.084-.988 2.108-1.651 2.904-1.176-1.392-1.18-1.844-1.18-1.844h-1.222s.05.678 1.7 2.61z"/>
    </svg>
  </div>
  <span class="brand-icon__name">googletranslate</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_googleearth = {
  id: 'brand-googleearth',
  name: 'Google Earth',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'googleearth'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google Earth</title><path d="M12 0c-1.326 0-2.597.22-3.787.613 4.94-1.243 8.575 1.72 11.096 5.606 1.725 2.695 2.813 2.83 4.207 2.412A11.956 11.956 0 0012 0zM7.658 2.156c-1.644.019-3.295.775-4.931 2.207A11.967 11.967 0 000 12c.184-2.823 2.163-5.128 4.87-5.07 2.104.044 4.648 1.518 7.13 5.289 4.87 7.468 10.917 5.483 11.863 1.51.081-.566.137-1.14.137-1.729 0-.176-.02-.347-.027-.521-1.645 1.725-4.899 2.35-8.264-2.97-2.59-4.363-5.31-6.383-8.05-6.353zM3.33 13.236c-1.675.13-2.657 1.804-2.242 3.756A11.955 11.955 0 0012 24c4.215 0 7.898-2.149 10.037-5.412v-.043c-2.836 3.49-8.946 4.255-13.855-2.182-1.814-2.386-3.544-3.228-4.852-3.127Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">googleearth</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_googlekeep = {
  id: 'brand-googlekeep',
  name: 'Google Keep',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'googlekeep'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google Keep</title><path d="M4.908 0c-.904 0-1.635.733-1.635 1.637v20.726c0 .904.732 1.637 1.635 1.637H19.09c.904 0 1.637-.733 1.637-1.637V6.5h-6.5V0H4.908zm9.819 0v6h6l-6-6zM11.97 8.229c.224 0 .571.031.765.072.2.04.576.185.842.312.828.414 1.467 1.164 1.774 2.088.168.511.188 1.34.05 1.865a3.752 3.752 0 0 1-1.277 1.952l-.25.193h-1.87c-2.134 0-1.931.042-2.478-.494a3.349 3.349 0 0 1-.984-1.844c-.148-.766-.053-1.437.32-2.203.19-.399.303-.556.65-.899.68-.679 1.513-1.037 2.458-1.042zm-1.866 7.863h3.781v1.328h-3.779v-1.328z"/>
    </svg>
  </div>
  <span class="brand-icon__name">googlekeep</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_googlemessages = {
  id: 'brand-googlemessages',
  name: 'Google Messages',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'googlemessages'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google Messages</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zM4.911 7.089h11.456a2.197 2.197 0 0 1 2.165 2.19v5.863a2.213 2.213 0 0 1-2.177 2.178H8.04c-1.174 0-2.04-.99-2.04-2.178v-4.639L4.503 7.905c-.31-.42-.05-.816.408-.816zm3.415 2.19c-.347 0-.68.21-.68.544 0 .334.333.544.68.544h7.905c.346 0 .68-.21.68-.544 0-.334-.334-.545-.68-.545zm0 2.177c-.347 0-.68.21-.68.544 0 .334.333.544.68.544h7.905c.346 0 .68-.21.68-.544 0-.334-.334-.544-.68-.544zm-.013 2.19c-.346 0-.68.21-.68.544 0 .334.334.544.68.544h5.728c.347 0 .68-.21.68-.544 0-.334-.333-.545-.68-.545z"/>
    </svg>
  </div>
  <span class="brand-icon__name">googlemessages</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_apple = {
  id: 'brand-apple',
  name: 'Apple',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'apple'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Apple</title><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
    </svg>
  </div>
  <span class="brand-icon__name">apple</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_applemusic = {
  id: 'brand-applemusic',
  name: 'Apple Music',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'applemusic'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Apple Music</title><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 00.02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 00-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.325.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.442-.088.663-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z"/>
    </svg>
  </div>
  <span class="brand-icon__name">applemusic</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_applepay = {
  id: 'brand-applepay',
  name: 'Apple Pay',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'applepay'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Apple Pay</title><path d="M2.15 4.318a42.16 42.16 0 0 0-.454.003c-.15.005-.303.013-.452.04a1.44 1.44 0 0 0-1.06.772c-.07.138-.114.278-.14.43-.028.148-.037.3-.04.45A10.2 10.2 0 0 0 0 6.222v11.557c0 .07.002.138.003.207.004.15.013.303.04.452.027.15.072.291.142.429a1.436 1.436 0 0 0 .63.63c.138.07.278.115.43.142.148.027.3.036.45.04l.208.003h20.194l.207-.003c.15-.004.303-.013.452-.04.15-.027.291-.071.428-.141a1.432 1.432 0 0 0 .631-.631c.07-.138.115-.278.141-.43.027-.148.036-.3.04-.45.002-.07.003-.138.003-.208l.001-.246V6.221c0-.07-.002-.138-.004-.207a2.995 2.995 0 0 0-.04-.452 1.446 1.446 0 0 0-1.2-1.201 3.022 3.022 0 0 0-.452-.04 10.448 10.448 0 0 0-.453-.003zm0 .512h19.942c.066 0 .131.002.197.003.115.004.25.01.375.032.109.02.2.05.287.094a.927.927 0 0 1 .407.407.997.997 0 0 1 .094.288c.022.123.028.258.031.374.002.065.003.13.003.197v11.552c0 .065 0 .13-.003.196-.003.115-.009.25-.032.375a.927.927 0 0 1-.5.693 1.002 1.002 0 0 1-.286.094 2.598 2.598 0 0 1-.373.032l-.2.003H1.906c-.066 0-.133-.002-.196-.003a2.61 2.61 0 0 1-.375-.032c-.109-.02-.2-.05-.288-.094a.918.918 0 0 1-.406-.407 1.006 1.006 0 0 1-.094-.288 2.531 2.531 0 0 1-.032-.373 9.588 9.588 0 0 1-.002-.197V6.224c0-.065 0-.131.002-.197.004-.114.01-.248.032-.375.02-.108.05-.199.094-.287a.925.925 0 0 1 .407-.406 1.03 1.03 0 0 1 .287-.094c.125-.022.26-.029.375-.032.065-.002.131-.002.196-.003zm4.71 3.7c-.3.016-.668.199-.88.456-.191.22-.36.58-.316.918.338.03.675-.169.888-.418.205-.258.345-.603.308-.955zm2.207.42v5.493h.852v-1.877h1.18c1.078 0 1.835-.739 1.835-1.812 0-1.07-.742-1.805-1.808-1.805zm.852.719h.982c.739 0 1.161.396 1.161 1.089 0 .692-.422 1.092-1.164 1.092h-.979zm-3.154.3c-.45.01-.83.28-1.05.28-.235 0-.593-.264-.981-.257a1.446 1.446 0 0 0-1.23.747c-.527.908-.139 2.255.374 2.995.249.366.549.769.944.754.373-.014.52-.242.973-.242.454 0 .586.242.98.235.41-.007.667-.366.915-.733.286-.417.403-.82.41-.841-.007-.008-.79-.308-.797-1.209-.008-.754.615-1.113.644-1.135-.352-.52-.9-.578-1.09-.593a1.123 1.123 0 0 0-.092-.002zm8.204.397c-.99 0-1.606.533-1.652 1.256h.777c.072-.358.369-.586.845-.586.502 0 .803.266.803.711v.309l-1.097.064c-.951.054-1.488.484-1.488 1.184 0 .72.548 1.207 1.332 1.207.526 0 1.032-.281 1.264-.727h.019v.659h.788v-2.76c0-.803-.62-1.317-1.591-1.317zm1.94.072l1.446 4.009c0 .003-.073.24-.073.247-.125.41-.33.571-.711.571-.069 0-.206 0-.267-.015v.666c.06.011.267.019.335.019.83 0 1.226-.312 1.568-1.283l1.5-4.214h-.868l-1.012 3.259h-.015l-1.013-3.26zm-1.167 2.189v.316c0 .521-.45.917-1.024.917-.442 0-.731-.228-.731-.579 0-.342.278-.56.769-.593z"/>
    </svg>
  </div>
  <span class="brand-icon__name">applepay</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_applepodcasts = {
  id: 'brand-applepodcasts',
  name: 'Apple Podcasts',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'applepodcasts'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Apple Podcasts</title><path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.007 2.864a8.506 8.506 0 01-3.24 5.296c-.608.46-2.096 1.261-2.336 1.261-.088 0-.096-.091-.056-.46.072-.592.144-.715.48-.856.536-.224 1.448-.874 2.008-1.435a7.644 7.644 0 002.008-3.536c.208-.824.184-2.656-.048-3.504-.728-2.696-2.928-4.792-5.624-5.352-.784-.16-2.208-.16-3 0-2.728.56-4.984 2.76-5.672 5.528-.184.752-.184 2.584 0 3.336.456 1.832 1.64 3.512 3.192 4.512.304.2.672.408.824.472.336.144.408.264.472.856.04.36.03.464-.056.464-.056 0-.464-.176-.896-.384l-.04-.03c-2.472-1.216-4.056-3.274-4.632-6.012-.144-.706-.168-2.392-.03-3.04.36-1.74 1.048-3.1 2.192-4.304 1.648-1.737 3.768-2.656 6.128-2.656zm.134 2.81c.409.004.803.04 1.106.106 2.784.62 4.76 3.408 4.376 6.174-.152 1.114-.536 2.03-1.216 2.88-.336.43-1.152 1.15-1.296 1.15-.023 0-.048-.272-.048-.603v-.605l.416-.496c1.568-1.878 1.456-4.502-.256-6.224-.664-.67-1.432-1.064-2.424-1.246-.64-.118-.776-.118-1.448-.008-1.02.167-1.81.562-2.512 1.256-1.72 1.704-1.832 4.342-.264 6.222l.413.496v.608c0 .336-.027.608-.06.608-.03 0-.264-.16-.512-.36l-.034-.011c-.832-.664-1.568-1.842-1.872-2.997-.184-.698-.184-2.024.008-2.72.504-1.878 1.888-3.335 3.808-4.019.41-.145 1.133-.22 1.814-.211zm-.13 2.99c.31 0 .62.06.844.178.488.253.888.745 1.04 1.259.464 1.578-1.208 2.96-2.72 2.254h-.015c-.712-.331-1.096-.956-1.104-1.77 0-.733.408-1.371 1.112-1.745.224-.117.534-.176.844-.176zm-.011 4.728c.988-.004 1.706.349 1.97.97.198.464.124 1.932-.218 4.302-.232 1.656-.36 2.074-.68 2.356-.44.39-1.064.498-1.656.288h-.003c-.716-.257-.87-.605-1.164-2.644-.341-2.37-.416-3.838-.218-4.302.262-.616.974-.966 1.97-.97z"/>
    </svg>
  </div>
  <span class="brand-icon__name">applepodcasts</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_appletv = {
  id: 'brand-appletv',
  name: 'Apple TV',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'appletv'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Apple TV</title><path d="M20.57 17.735h-1.815l-3.34-9.203h1.633l2.02 5.987c.075.231.273.9.586 2.012l.297-.997.33-1.006 2.094-6.004H24zm-5.344-.066a5.76 5.76 0 0 1-1.55.207c-1.23 0-1.84-.693-1.84-2.087V9.646h-1.063V8.532h1.121V7.081l1.476-.602v2.062h1.707v1.113H13.38v5.805c0 .446.074.75.214.932.14.182.396.264.75.264.207 0 .495-.041.883-.115zm-7.29-5.343c.017 1.764 1.55 2.358 1.567 2.366-.017.042-.248.842-.808 1.658-.487.71-.99 1.418-1.79 1.435-.783.016-1.03-.462-1.93-.462-.89 0-1.17.445-1.913.478-.758.025-1.344-.775-1.838-1.484-.998-1.451-1.765-4.098-.734-5.88.51-.89 1.426-1.451 2.416-1.46.75-.016 1.468.512 1.93.512.461 0 1.327-.627 2.234-.536.38.016 1.452.157 2.136 1.154-.058.033-1.278.743-1.27 2.219M6.468 7.988c.404-.495.685-1.18.61-1.864-.585.025-1.294.388-1.723.883-.38.437-.71 1.138-.619 1.806.652.05 1.328-.338 1.732-.825Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">appletv</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_intel = {
  id: 'brand-intel',
  name: 'Intel',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'intel'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Intel</title><path d="M20.42 7.345v9.18h1.651v-9.18zM0 7.475v1.737h1.737V7.474zm9.78.352v6.053c0 .513.044.945.13 1.292.087.34.235.618.44.828.203.21.475.359.803.451.334.093.754.136 1.255.136h.216v-1.533c-.24 0-.445-.012-.593-.037a.672.672 0 0 1-.39-.173.693.693 0 0 1-.173-.377 4.002 4.002 0 0 1-.037-.606v-2.182h1.193v-1.416h-1.193V7.827zm-3.505 2.312c-.396 0-.76.08-1.082.241-.327.161-.6.384-.822.668l-.087.117v-.902H2.658v6.256h1.639v-3.214c.018-.588.16-1.02.433-1.299.29-.297.642-.445 1.044-.445.476 0 .841.149 1.082.433.235.284.359.686.359 1.2v3.324h1.663V12.97c.006-.89-.229-1.595-.686-2.09-.458-.495-1.1-.742-1.917-.742zm10.065.006a3.252 3.252 0 0 0-2.306.946c-.29.29-.525.637-.692 1.033a3.145 3.145 0 0 0-.254 1.273c0 .452.08.878.241 1.274.161.395.39.742.674 1.032.284.29.637.526 1.045.693.408.173.86.26 1.342.26 1.397 0 2.262-.637 2.782-1.23l-1.187-.904c-.248.297-.841.699-1.583.699-.464 0-.847-.105-1.138-.321a1.588 1.588 0 0 1-.593-.872l-.019-.056h4.915v-.587c0-.451-.08-.872-.235-1.267a3.393 3.393 0 0 0-.661-1.033 3.013 3.013 0 0 0-1.02-.692 3.345 3.345 0 0 0-1.311-.248zm-16.297.118v6.256h1.651v-6.256zm16.278 1.286c1.132 0 1.664.797 1.664 1.255l-3.32.006c0-.458.525-1.255 1.656-1.261zm7.073 3.814a.606.606 0 0 0-.606.606.606.606 0 0 0 .606.606.606.606 0 0 0 .606-.606.606.606 0 0 0-.606-.606zm-.008.105a.5.5 0 0 1 .002 0 .5.5 0 0 1 .5.501.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .498-.5zm-.233.155v.699h.13v-.285h.093l.173.285h.136l-.18-.297a.191.191 0 0 0 .118-.056c.03-.03.05-.074.05-.136 0-.068-.02-.117-.063-.154-.037-.038-.105-.056-.185-.056zm.13.099h.154c.019 0 .037.006.056.012a.064.064 0 0 1 .037.031c.013.013.012.031.012.056a.124.124 0 0 1-.012.055.164.164 0 0 1-.037.031c-.019.006-.037.013-.056.013h-.154Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">intel</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_nvidia = {
  id: 'brand-nvidia',
  name: 'NVIDIA',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'nvidia'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>NVIDIA</title><path d="M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z"/>
    </svg>
  </div>
  <span class="brand-icon__name">nvidia</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_amd = {
  id: 'brand-amd',
  name: 'AMD',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'amd'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>AMD</title><path d="M18.324 9.137l1.559 1.56h2.556v2.557L24 14.814V9.137zM2 9.52l-2 4.96h1.309l.37-.982H3.9l.408.982h1.338L3.432 9.52zm4.209 0v4.955h1.238v-3.092l1.338 1.562h.188l1.338-1.556v3.091h1.238V9.52H10.47l-1.592 1.845L7.287 9.52zm6.283 0v4.96h2.057c1.979 0 2.88-1.046 2.88-2.472 0-1.36-.937-2.488-2.747-2.488zm1.237.91h.792c1.17 0 1.63.711 1.63 1.57 0 .728-.372 1.572-1.616 1.572h-.806zm-10.985.273l.791 1.932H2.008zm17.137.307l-1.604 1.603v2.25h2.246l1.604-1.607h-2.246z"/>
    </svg>
  </div>
  <span class="brand-icon__name">amd</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_qualcomm = {
  id: 'brand-qualcomm',
  name: 'Qualcomm',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'qualcomm'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Qualcomm</title><path d="M12 0C6.22933 0 1.5761 4.48645 1.5761 10.47394c0 6.00417 4.65323 10.47394 10.4239 10.47394.98402 0 1.93468-.13343 2.8353-.3836l1.13412 2.9187c.11675.31688.35025.51702.7672.51702h1.80125c.43364 0 .75052-.28353.55038-.83391l-1.46768-3.81932c2.88534-1.81793 4.80333-5.03683 4.80333-8.8895C22.4239 4.48644 17.77067 0 12 0m4.53648 16.5615l-1.31758-3.41904c-.11675-.28353-.35024-.55038-.85059-.55038h-1.71786c-.43363 0-.7672.28353-.56706.83391l1.73454 4.48645c-.56706.1501-1.18416.21682-1.81793.21682-4.2196 0-7.22168-3.31897-7.22168-7.65532C4.77832 6.1376 7.7804 2.81862 12 2.81862s7.22168 3.31898 7.22168 7.65532c0 2.5351-1.01737 4.70327-2.6852 6.08756"/>
    </svg>
  </div>
  <span class="brand-icon__name">qualcomm</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_arm = {
  id: 'brand-arm',
  name: 'Arm',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'arm'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Arm</title><path d="M5.419 8.534h1.614v6.911H5.419v-.72c-.71.822-1.573.933-2.07.933C1.218 15.658 0 13.882 0 11.985c0-2.253 1.542-3.633 3.37-3.633.507 0 1.4.132 2.049.984zm-3.765 3.491c0 1.198.751 2.202 1.918 2.202 1.015 0 1.959-.74 1.959-2.181 0-1.512-.934-2.233-1.959-2.233-1.167-.01-1.918.974-1.918 2.212zm7.297-3.49h1.613v.618a3 3 0 0 1 .67-.578c.314-.183.619-.233.984-.233.396 0 .822.06 1.269.324l-.66 1.462a1.432 1.432 0 0 0-.822-.244c-.345 0-.69.05-1.005.376-.446.477-.446 1.136-.446 1.593v3.582H8.94zm5.56 0h1.614v.639c.538-.66 1.177-.822 1.705-.822.72 0 1.4.345 1.786 1.015.579-.822 1.441-1.015 2.05-1.015.842 0 1.573.396 1.969 1.086.132.233.365.74.365 1.745v4.272h-1.614V11.65c0-.771-.08-1.086-.152-1.228-.101-.264-.345-.609-.923-.609-.396 0-.741.213-.954.508-.284.395-.315.984-.315 1.572v3.562H18.43V11.65c0-.771-.081-1.086-.152-1.228-.102-.264-.345-.609-.924-.609-.396 0-.74.213-.954.508-.284.395-.314.984-.314 1.572v3.562h-1.573z"/>
    </svg>
  </div>
  <span class="brand-icon__name">arm</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_raspberrypi = {
  id: 'brand-raspberrypi',
  name: 'Raspberry Pi',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'raspberrypi'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Raspberry Pi</title><path d="m19.8955 10.8961-.1726-.3028c.0068-2.1746-1.0022-3.061-2.1788-3.7348.356-.0938.7237-.1711.8245-.6182.6118-.1566.7397-.4398.8011-.7398.16-.1066.6955-.4061.6394-.9211.2998-.2069.4669-.4725.3819-.8487.3222-.3515.407-.6419.2702-.9096.3868-.4805.2152-.7295.05-.9817.2897-.5254.0341-1.0887-.7758-.9944-.3221-.4733-1.0244-.3659-1.133-.3637-.1215-.1519-.2819-.2821-.7755-.219-.3197-.2851-.6771-.2364-1.0458-.0964-.4378-.3403-.7275-.0675-1.0584.0356-.53-.1706-.6513.0631-.9117.1583-.5781-.1203-.7538.1416-1.0309.4182l-.3224-.0063c-.8719.5061-1.305 1.5366-1.4585 2.0664-.1536-.5299-.5858-1.5604-1.4575-2.0664l-.3223.0063C9.942.5014 9.7663.2394 9.1883.3597 8.9279.2646 8.807.0309 8.2766.2015c-.2172-.0677-.417-.2084-.6522-.2012l.0004.0002C7.5017.0041 7.369.049 7.2185.166c-.3688-.1401-.7262-.1887-1.0459.0964-.4936-.0631-.654.0671-.7756.219C5.2887.4791 4.5862.3717 4.264.845c-.8096-.0943-1.0655.4691-.7756.9944-.1653.2521-.3366.5013.05.9819-.1367.2677-.0519.5581.2703.9096-.085.3763.0822.6418.3819.8487-.0561.515.4795.8144.6394.9211.0614.3001.1894.5832.8011.7398.1008.4472.4685.5244.8245.6183-1.1766.6737-2.1856 1.56-2.1788 3.7348l-.1724.3028c-1.3491.8082-2.5629 3.4056-.6648 5.5167.124.6609.3319 1.1355.5171 1.6609.2769 2.117 2.0841 3.1082 2.5608 3.2255.6984.524 1.4423 1.0212 2.449 1.3696.949.964 1.977 1.3314 3.0107 1.3308.0152 0 .0306.0002.0457 0 1.0337.0006 2.0618-.3668 3.0107-1.3308 1.0067-.3483 1.7506-.8456 2.4491-1.3696.4766-.1173 2.2838-1.1085 2.5607-3.2255.1851-.5253.3931-1 .517-1.6609 1.8981-2.1113.6843-4.7089-.6649-5.517zm-1.0386-.3715c-.0704.8759-4.6354-3.0504-3.8472-3.1808 2.1391-.3558 3.9191.896 3.8472 3.1808zm-2.0155 4.3649c-1.1481.7409-2.8025.2626-3.6953-1.0681-.8928-1.3306-.6858-3.0101.4623-3.7509 1.1481-.7409 2.8025-.2627 3.6953 1.068.8927 1.3307.6858 3.0101-.4623 3.751zM13.6591 1.3721c.0396.1967.0843.321.1354.3577.2537-.272.4611-.5506.7878-.8123.0011.1537-.0776.3205.1169.4425.1752-.2356.4119-.4459.7263-.6244-.1514.2611-.026.3404.0554.4486.24-.2059.4681-.4144.9109-.5759-.121.1474-.2902.2914-.1108.4607.2473-.1544.496-.3086 1.0833-.4183-.1323.1475-.4059.295-.2401.4426.3104-.1186.6539-.2047 1.034-.2546-.182.1496-.3337.2963-.1846.4122.3323-.1022.7899-.2398 1.2372-.1212l-.2832.2849c-.0314.0382.6623.0297 1.1202.0364-.167.2321-.3375.4562-.437.8548.0454.0459.2723.0204.4862 0-.2194.4618-.6004.5783-.6893.776.134.1015.32.075.5232.006-.158.3254-.4892.5484-.7509.8123.0662.047.1818.075.4555.0425-.2418.257-.5339.492-.8802.7032.0614.0708.2722.0681.4678.0727-.3136.3069-.7173.466-1.0955.6668.1885.1288.3234.0988.4678.097-.2676.2198-.7225.3342-1.1448.4668.0803.1249.1607.1589.3324.194-.447.2473-1.0873.1343-1.2679.2607.0435.1243.1665.2053.3139.2728-.7197.0418-2.6879-.0262-3.0652-1.5156.7367-.8094 2.0813-1.7593 4.394-2.934-1.7994.6022-3.4229 1.405-4.7817 2.5096-1.5978-.7436-.4965-2.6197.283-3.3645zm-1.6126 5.3718c1.1329-.0123 2.5356.8325 2.53 1.6286-.005.7027-.9851 1.2715-2.5213 1.2607-1.5043-.0177-2.5172-.7148-2.5137-1.3957.003-.5603 1.2282-1.5263 2.505-1.4936zm-5.7646-.6006c.1717-.0351.252-.0692.3323-.194-.4223-.1327-.8772-.247-1.1448-.4668.1444.0018.2792.0318.4678-.097-.3783-.2008-.782-.3599-1.0956-.6668.1955-.0048.4064-.002.4677-.0728-.3462-.2113-.6383-.4463-.8801-.7033.2738.0325.3893.0045.4555-.0425-.2617-.264-.593-.487-.7509-.8123.2032.069.3892.0954.5232-.006-.089-.1977-.47-.3142-.6894-.776.214.0204.4409.0459.4863 0-.0994-.3985-.2698-.6226-.4369-.8547.4579-.0067 1.1516.0018 1.1202-.0364l-.2831-.2849c.4472-.1186.9049.019 1.2371.1213.1492-.1159-.0026-.2626-.1847-.4123.3801.05.7236.1361 1.034.2547.1659-.1476-.1076-.2951-.24-.4426.5872.1097.8361.2639 1.0833.4183.1794-.1694.0103-.3133-.1108-.4607.4428.1615.6709.37.911.5759.0814-.1082.2068-.1875.0554-.4486.3143.1785.5511.3888.7263.6244.1945-.122.1159-.2888.1169-.4426.3267.2618.534.5404.7879.8124.0511-.0366.0959-.161.1354-.3577.7794.7448 1.8807 2.6208.2831 3.3646-1.3589-1.1039-2.9817-1.9064-4.78-2.5086 2.3115 1.174 3.6556 2.1239 4.392 2.9328-.3773 1.4895-2.3455 1.5575-3.0651 1.5157.1473-.0676.2703-.1485.3139-.2728-.1806-.1264-.8209-.0134-1.2679-.2607zm2.8175 1.1334c.7881.1304-3.7769 4.0567-3.8472 3.1809-.0719-2.2846 1.7079-3.5367 3.8472-3.1809zm-4.847 8.7567c-1.1094-.8789-1.4668-3.4529.5901-4.6097 1.2394-.3273.4184 5.051-.5901 4.6097zm4.2656 4.5989c-.6257.3719-2.1452.2187-3.2252-1.3095-.7283-1.2823-.6345-2.5872-.123-2.9705.7648-.4589 1.9464.1609 2.8559 1.2003.7923.9405 1.1536 2.5927.4923 3.0797zm-1.2415-5.6086c-1.1481-.7409-1.3551-2.4203-.4623-3.7511.8928-1.3307 2.5472-1.8089 3.6952-1.068 1.1481.7409 1.3551 2.4203.4623 3.7509-.8926 1.3308-2.5471 1.809-3.6952 1.0682zm4.7948 8.2279c-1.3763.0584-2.7258-1.1105-2.7081-1.5157-.0206-.594 1.6758-1.0578 2.782-1.0306 1.1131-.0479 2.6068.3531 2.6097.8851.0184.5166-1.3547 1.6838-2.6836 1.6612zm2.7584-5.8578c.0081 1.3899-1.226 2.5225-2.7562 2.5299-1.5302.0073-2.7773-1.1135-2.7854-2.5033v-.0265c-.008-1.3899 1.2259-2.5226 2.7562-2.5299 1.5302-.0073 2.7773 1.1134 2.7853 2.5033a.7794.7794 0 0 1 .0001.0265zm3.855 2.0029c-1.186 1.6208-2.7916 1.684-3.3896 1.2325-.6255-.5811-.148-2.3854.7094-3.3747v-.0003c.9812-1.0912 2.0302-1.8037 2.7609-1.2469.4919.4828.7805 2.3008-.0807 3.3894zm1.0724-3.4301c-1.0086.4413-1.8298-4.9372-.5901-4.61 2.0568 1.1569 1.6994 3.731.5901 4.61zm-.0256-8.3279h.2985v-.5304h.2986c.1502 0 .2053.0624.2262.2052.0152.1088.0113.2395.0477.3253h.2984c-.0533-.0763-.0515-.2358-.0571-.3213-.0097-.1373-.0513-.2796-.1977-.3176v-.0037c.1502-.061.2149-.1807.2149-.341 0-.2048-.1539-.3738-.3974-.3738h-.732v1.3573zm.2985-1.1255h.3269c.1333 0 .2054.0573.2054.188 0 .1369-.0721.1942-.2054.1942H20.03v-.3822zm-1.0337.4633c0 .7009.5682 1.2694 1.2695 1.2694s1.2695-.5684 1.2695-1.2694c0-.7013-.5683-1.2697-1.2695-1.2697-.7013 0-1.2695.5684-1.2695 1.2697zm2.3275 0c0 .5845-.4737 1.058-1.058 1.058s-1.058-.4735-1.058-1.058c0-.5849.4737-1.058 1.058-1.058s1.058.4731 1.058 1.058z"/>
    </svg>
  </div>
  <span class="brand-icon__name">raspberrypi</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_arduino = {
  id: 'brand-arduino',
  name: 'Arduino',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'arduino'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Arduino</title><path d="M18.087 6.146c-.3 0-.607.017-.907.069-2.532.367-4.23 2.239-5.18 3.674-.95-1.435-2.648-3.307-5.18-3.674a6.49 6.49 0 0 0-.907-.069C2.648 6.146 0 8.77 0 12s2.656 5.854 5.913 5.854c.3 0 .607-.017.916-.069 2.531-.376 4.23-2.247 5.18-3.683.949 1.436 2.647 3.307 5.18 3.683.299.043.607.069.915.069C21.344 17.854 24 15.23 24 12s-2.656-5.854-5.913-5.854zM6.53 15.734a3.837 3.837 0 0 1-.625.043c-2.148 0-3.889-1.7-3.889-3.777 0-2.085 1.749-3.777 3.898-3.777.208 0 .416.017.624.043 2.39.35 3.847 2.768 4.347 3.734-.508.974-1.974 3.384-4.355 3.734zm11.558.043c-.208 0-.416-.017-.624-.043-2.39-.35-3.856-2.768-4.347-3.734.491-.966 1.957-3.384 4.347-3.734.208-.026.416-.043.624-.043 2.149 0 3.89 1.7 3.89 3.777 0 2.085-1.75 3.777-3.89 3.777zm1.65-4.404v1.134h-1.205v1.182h-1.156v-1.182H16.17v-1.134h1.206V10.19h1.156v1.183h1.206zM4.246 12.498H7.82v-1.125H4.245v1.125z"/>
    </svg>
  </div>
  <span class="brand-icon__name">arduino</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_linux = {
  id: 'brand-linux',
  name: 'Linux',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'linux'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Linux</title><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z"/>
    </svg>
  </div>
  <span class="brand-icon__name">linux</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_ubuntu = {
  id: 'brand-ubuntu',
  name: 'Ubuntu',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'ubuntu'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Ubuntu</title><path d="M17.61.455a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zM12.92.8C8.923.777 5.137 2.941 3.148 6.451a4.5 4.5 0 0 1 .26-.007 4.92 4.92 0 0 1 2.585.737A8.316 8.316 0 0 1 12.688 3.6 4.944 4.944 0 0 1 13.723.834 11.008 11.008 0 0 0 12.92.8zm9.226 4.994a4.915 4.915 0 0 1-1.918 2.246 8.36 8.36 0 0 1-.273 8.303 4.89 4.89 0 0 1 1.632 2.54 11.156 11.156 0 0 0 .559-13.089zM3.41 7.932A3.41 3.41 0 0 0 0 11.342a3.41 3.41 0 0 0 3.41 3.409 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41zm2.027 7.866a4.908 4.908 0 0 1-2.915.358 11.1 11.1 0 0 0 7.991 6.698 11.234 11.234 0 0 0 2.422.249 4.879 4.879 0 0 1-.999-2.85 8.484 8.484 0 0 1-.836-.136 8.304 8.304 0 0 1-5.663-4.32zm11.405.928a3.41 3.41 0 0 0-3.41 3.41 3.41 3.41 0 0 0 3.41 3.41 3.41 3.41 0 0 0 3.41-3.41 3.41 3.41 0 0 0-3.41-3.41z"/>
    </svg>
  </div>
  <span class="brand-icon__name">ubuntu</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_debian = {
  id: 'brand-debian',
  name: 'Debian',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'debian'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Debian</title><path d="M13.88 12.685c-.4 0 .08.2.601.28.14-.1.27-.22.39-.33a3.001 3.001 0 01-.99.05m2.14-.53c.23-.33.4-.69.47-1.06-.06.27-.2.5-.33.73-.75.47-.07-.27 0-.56-.8 1.01-.11.6-.14.89m.781-2.05c.05-.721-.14-.501-.2-.221.07.04.13.5.2.22M12.38.31c.2.04.45.07.42.12.23-.05.28-.1-.43-.12m.43.12l-.15.03.14-.01V.43m6.633 9.944c.02.64-.2.95-.38 1.5l-.35.181c-.28.54.03.35-.17.78-.44.39-1.34 1.22-1.62 1.301-.201 0 .14-.25.19-.34-.591.4-.481.6-1.371.85l-.03-.06c-2.221 1.04-5.303-1.02-5.253-3.842-.03.17-.07.13-.12.2a3.551 3.552 0 012.001-3.501 3.361 3.362 0 013.732.48 3.341 3.342 0 00-2.721-1.3c-1.18.01-2.281.76-2.651 1.57-.6.38-.67 1.47-.93 1.661-.361 2.601.66 3.722 2.38 5.042.27.19.08.21.12.35a4.702 4.702 0 01-1.53-1.16c.23.33.47.66.8.91-.55-.18-1.27-1.3-1.48-1.35.93 1.66 3.78 2.921 5.261 2.3a6.203 6.203 0 01-2.33-.28c-.33-.16-.77-.51-.7-.57a5.802 5.803 0 005.902-.84c.44-.35.93-.94 1.07-.95-.2.32.04.16-.12.44.44-.72-.2-.3.46-1.24l.24.33c-.09-.6.74-1.321.66-2.262.19-.3.2.3 0 .97.29-.74.08-.85.15-1.46.08.2.18.42.23.63-.18-.7.2-1.2.28-1.6-.09-.05-.28.3-.32-.53 0-.37.1-.2.14-.28-.08-.05-.26-.32-.38-.861.08-.13.22.33.34.34-.08-.42-.2-.75-.2-1.08-.34-.68-.12.1-.4-.3-.34-1.091.3-.25.34-.74.54.77.84 1.96.981 2.46-.1-.6-.28-1.2-.49-1.76.16.07-.26-1.241.21-.37A7.823 7.824 0 0017.702 1.6c.18.17.42.39.33.42-.75-.45-.62-.48-.73-.67-.61-.25-.65.02-1.06 0C15.082.73 14.862.8 13.8.4l.05.23c-.77-.25-.9.1-1.73 0-.05-.04.27-.14.53-.18-.741.1-.701-.14-1.431.03.17-.13.36-.21.55-.32-.6.04-1.44.35-1.18.07C9.6.68 7.847 1.3 6.867 2.22L6.838 2c-.45.54-1.96 1.611-2.08 2.311l-.131.03c-.23.4-.38.85-.57 1.261-.3.52-.45.2-.4.28-.6 1.22-.9 2.251-1.16 3.102.18.27 0 1.65.07 2.76-.3 5.463 3.84 10.776 8.363 12.006.67.23 1.65.23 2.49.25-.99-.28-1.12-.15-2.08-.49-.7-.32-.85-.7-1.34-1.13l.2.35c-.971-.34-.57-.42-1.361-.67l.21-.27c-.31-.03-.83-.53-.97-.81l-.34.01c-.41-.501-.63-.871-.61-1.161l-.111.2c-.13-.21-1.52-1.901-.8-1.511-.13-.12-.31-.2-.5-.55l.14-.17c-.35-.44-.64-1.02-.62-1.2.2.24.32.3.45.33-.88-2.172-.93-.12-1.601-2.202l.15-.02c-.1-.16-.18-.34-.26-.51l.06-.6c-.63-.74-.18-3.102-.09-4.402.07-.54.53-1.1.88-1.981l-.21-.04c.4-.71 2.341-2.872 3.241-2.761.43-.55-.09 0-.18-.14.96-.991 1.26-.7 1.901-.88.7-.401-.6.16-.27-.151 1.2-.3.85-.7 2.421-.85.16.1-.39.14-.52.26 1-.49 3.151-.37 4.562.27 1.63.77 3.461 3.011 3.531 5.132l.08.02c-.04.85.13 1.821-.17 2.711l.2-.42M9.54 13.236l-.05.28c.26.35.47.73.8 1.01-.24-.47-.42-.66-.75-1.3m.62-.02c-.14-.15-.22-.34-.31-.52.08.32.26.6.43.88l-.12-.36m10.945-2.382l-.07.15c-.1.76-.34 1.511-.69 2.212.4-.73.65-1.541.75-2.362M12.45.12c.27-.1.66-.05.95-.12-.37.03-.74.05-1.1.1l.15.02M3.006 5.142c.07.57-.43.8.11.42.3-.66-.11-.18-.1-.42m-.64 2.661c.12-.39.15-.62.2-.84-.35.44-.17.53-.2.83"/>
    </svg>
  </div>
  <span class="brand-icon__name">debian</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_fedora = {
  id: 'brand-fedora',
  name: 'Fedora',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'fedora'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Fedora</title><path d="M12.001 0C5.376 0 .008 5.369.004 11.992H.002v9.287h.002A2.726 2.726 0 0 0 2.73 24h9.275c6.626-.004 11.993-5.372 11.993-11.997C23.998 5.375 18.628 0 12 0zm2.431 4.94c2.015 0 3.917 1.543 3.917 3.671 0 .197.001.395-.03.619a1.002 1.002 0 0 1-1.137.893 1.002 1.002 0 0 1-.842-1.175 2.61 2.61 0 0 0 .013-.337c0-1.207-.987-1.672-1.92-1.672-.934 0-1.775.784-1.777 1.672.016 1.027 0 2.046 0 3.07l1.732-.012c1.352-.028 1.368 2.009.016 1.998l-1.748.013c-.004.826.006.677.002 1.093 0 0 .015 1.01-.016 1.776-.209 2.25-2.124 4.046-4.424 4.046-2.438 0-4.448-1.993-4.448-4.437.073-2.515 2.078-4.492 4.603-4.469l1.409-.01v1.996l-1.409.013h-.007c-1.388.04-2.577.984-2.6 2.47a2.438 2.438 0 0 0 2.452 2.439c1.356 0 2.441-.987 2.441-2.437l-.001-7.557c0-.14.005-.252.02-.407.23-1.848 1.883-3.256 3.754-3.256z"/>
    </svg>
  </div>
  <span class="brand-icon__name">fedora</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_archlinux = {
  id: 'brand-archlinux',
  name: 'Arch Linux',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'archlinux'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Arch Linux</title><path d="M11.39.605C10.376 3.092 9.764 4.72 8.635 7.132c.693.734 1.543 1.589 2.923 2.554-1.484-.61-2.496-1.224-3.252-1.86C6.86 10.842 4.596 15.138 0 23.395c3.612-2.085 6.412-3.37 9.021-3.862a6.61 6.61 0 01-.171-1.547l.003-.115c.058-2.315 1.261-4.095 2.687-3.973 1.426.12 2.534 2.096 2.478 4.409a6.52 6.52 0 01-.146 1.243c2.58.505 5.352 1.787 8.914 3.844-.702-1.293-1.33-2.459-1.929-3.57-.943-.73-1.926-1.682-3.933-2.713 1.38.359 2.367.772 3.137 1.234-6.09-11.334-6.582-12.84-8.67-17.74zM22.898 21.36v-.623h-.234v-.084h.562v.084h-.234v.623h.331v-.707h.142l.167.5.034.107a2.26 2.26 0 01.038-.114l.17-.493H24v.707h-.091v-.593l-.206.593h-.084l-.205-.602v.602h-.091"/>
    </svg>
  </div>
  <span class="brand-icon__name">archlinux</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_centos = {
  id: 'brand-centos',
  name: 'CentOS',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'centos'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>CentOS</title><path d="M12.076.066L8.883 3.28H3.348v5.434L0 12.01l3.349 3.298v5.39h5.374l3.285 3.236 3.285-3.236h5.43v-5.374L24 12.026l-3.232-3.252V3.321H15.31zm0 .749l2.49 2.506h-1.69v6.441l-.8.805-.81-.815V3.28H9.627zm-8.2 2.991h4.483L6.485 5.692l4.253 4.279v.654H9.94L5.674 6.423l-1.798 1.77zm5.227 0h1.635v5.415l-3.509-3.53zm4.302.043h1.687l1.83 1.842-3.517 3.539zm2.431 0h4.404v4.394l-1.83-1.842-4.241 4.267h-.764v-.69l4.261-4.287zm2.574 3.3l1.83 1.843v1.676h-5.327zm-12.735.013l3.515 3.462H3.876v-1.69zM3.348 9.454v1.697h6.377l.871.858-.782.77H3.35v1.786L.753 12.01zm17.42.068l2.488 2.503-2.533 2.55v-1.796h-6.41l-.75-.754.825-.83h6.38zm-9.502.978l.81.815.186-.188.614-.618v.686h.768l-.825.83.75.754h-.719v.808l-.842-.83-.741.73v-.707h-.7l.781-.77-.188-.186-.682-.672h.788zm-7.39 2.807h5.402l-3.603 3.55-1.798-1.772zm6.154 0h.708v.7l-4.404 4.338 1.852 1.824h-4.31v-4.342l1.798 1.77zm3.348 0h.715l4.317 4.343.186-.187 1.599-1.61v4.316h-4.366l1.853-1.825-.188-.185-4.116-4.054zm1.46 0h5.357v1.798l-1.785 1.796zm-2.83.191l.842.829v6.37h1.691l-2.532 2.495-2.533-2.495h1.79V14.23zm-1.27 1.251v5.42H8.939l-1.852-1.823zm2.64.097l3.552 3.499-1.853 1.825h-1.7z"/>
    </svg>
  </div>
  <span class="brand-icon__name">centos</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_redhat = {
  id: 'brand-redhat',
  name: 'Red Hat',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'redhat'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Red Hat</title><path d="M16.009 13.386c1.577 0 3.86-.326 3.86-2.202a1.765 1.765 0 0 0-.04-.431l-.94-4.08c-.216-.898-.406-1.305-1.982-2.093-1.223-.625-3.888-1.658-4.676-1.658-.733 0-.947.946-1.822.946-.842 0-1.467-.706-2.255-.706-.757 0-1.25.515-1.63 1.576 0 0-1.06 2.99-1.197 3.424a.81.81 0 0 0-.028.245c0 1.162 4.577 4.974 10.71 4.974m4.101-1.435c.218 1.032.218 1.14.218 1.277 0 1.765-1.984 2.745-4.593 2.745-5.895.004-11.06-3.451-11.06-5.734a2.326 2.326 0 0 1 .19-.925C2.746 9.415 0 9.794 0 12.217c0 3.969 9.405 8.861 16.851 8.861 5.71 0 7.149-2.582 7.149-4.62 0-1.605-1.387-3.425-3.887-4.512"/>
    </svg>
  </div>
  <span class="brand-icon__name">redhat</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_linuxmint = {
  id: 'brand-linuxmint',
  name: 'Linux Mint',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'linuxmint'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Linux Mint</title><path d="M5.438 5.906v8.438c0 2.06 1.69 3.75 3.75 3.75h5.625c2.06 0 3.75-1.69 3.75-3.75V9.656a2.827 2.827 0 0 0-2.813-2.812 2.8 2.8 0 0 0-1.875.737A2.8 2.8 0 0 0 12 6.844a2.827 2.827 0 0 0-2.812 2.812v4.688h1.875V9.656c0-.529.408-.937.937-.937s.938.408.938.937v4.688h1.875V9.656c0-.529.408-.937.937-.937s.938.408.938.937v4.688a1.86 1.86 0 0 1-1.875 1.875H9.188a1.86 1.86 0 0 1-1.875-1.875V5.906ZM12 0C5.384 0 0 5.384 0 12s5.384 12 12 12 12-5.384 12-12S18.616 0 12 0m0 1.875A10.11 10.11 0 0 1 22.125 12 10.11 10.11 0 0 1 12 22.125 10.11 10.11 0 0 1 1.875 12 10.11 10.11 0 0 1 12 1.875"/>
    </svg>
  </div>
  <span class="brand-icon__name">linuxmint</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_opensuse = {
  id: 'brand-opensuse',
  name: 'openSUSE',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'opensuse'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>openSUSE</title><path d="M10.724 0a12 12 0 0 0-9.448 4.623c1.464.391 2.5.727 2.81.832.005-.19.037-1.893.037-1.893s.004-.04.025-.06c.026-.026.065-.018.065-.018.385.056 8.602 1.274 12.066 3.292.427.25.638.517.902.786.958.99 2.223 5.108 2.359 5.957.005.033-.036.07-.054.083a5.177 5.177 0 0 1-.313.228c-.82.55-2.708 1.872-5.13 1.656-2.176-.193-5.018-1.44-8.445-3.699.336.79.668 1.58 1 2.371.497.258 5.287 2.7 7.651 2.651 1.904-.04 3.941-.968 4.756-1.458 0 0 .179-.108.257-.048.085.066.061.167.041.27-.05.234-.164.66-.242.863l-.065.165c-.093.25-.183.482-.356.625-.48.436-1.246.784-2.446 1.305-1.855.812-4.865 1.328-7.66 1.31-1.001-.022-1.968-.133-2.817-.232-1.743-.197-3.161-.357-4.026.269A12 12 0 0 0 10.724 24a12 12 0 0 0 12-12 12 12 0 0 0-12-12zM13.4 6.963a3.503 3.503 0 0 0-2.521.942 3.498 3.498 0 0 0-1.114 2.449 3.528 3.528 0 0 0 3.39 3.64 3.48 3.48 0 0 0 2.524-.946 3.504 3.504 0 0 0 1.114-2.446 3.527 3.527 0 0 0-3.393-3.64zm-.03 1.035a2.458 2.458 0 0 1 2.368 2.539 2.43 2.43 0 0 1-.774 1.706 2.456 2.456 0 0 1-1.762.659 2.461 2.461 0 0 1-2.364-2.542c.02-.655.3-1.26.777-1.707a2.419 2.419 0 0 1 1.756-.655zm.402 1.23c-.602 0-1.087.325-1.087.727 0 .4.485.725 1.087.725.6 0 1.088-.326 1.088-.725 0-.402-.487-.726-1.088-.726Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">opensuse</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_gentoo = {
  id: 'brand-gentoo',
  name: 'Gentoo',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'gentoo'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Gentoo</title><path d="M9.94 0a7.31 7.31 0 00-1.26.116c-4.344.795-7.4 4.555-7.661 7.031-.126 1.215.53 2.125.89 2.526.977 1.085 2.924 1.914 4.175 2.601-1.81 1.543-2.64 2.296-3.457 3.154C1.403 16.712.543 18.125.54 19.138c0 .325-.053 1.365.371 2.187.16.309.613 1.338 1.98 2.109.874.494 2.119.675 3.337.501 3.772-.538 8.823-3.737 12.427-6.716 2.297-1.9 3.977-3.739 4.462-4.644.39-.731.434-2.043.207-2.866-.645-2.337-5.887-7.125-10.172-9.051A7.824 7.824 0 009.94 0zm-.008.068a7.4 7.4 0 013.344.755c3.46 1.7 9.308 6.482 9.739 8.886.534 2.972-9.931 11.017-16.297 12.272-2.47.485-4.576.618-5.537-1.99-.832-2.262.783-3.916 3.16-6.09a92.546 92.546 0 012.96-2.576c.065-.069-5.706-2.059-5.89-4.343C1.221 4.634 4.938.3 9.697.076c.08-.004.157-.007.235-.008zm-.112.52a5.647 5.647 0 00-.506.032c-2.337.245-2.785.547-4.903 2.149-.71.537-2.016 1.844-2.35 3.393-.128.59.024 1.1.448 1.458 1.36 1.144 3.639 2.072 5.509 2.97.547.263.185.74-.698 1.505-2.227 1.928-5.24 4.276-5.45 6.066-.099.842.19 1.988 1.213 2.574 1.195.685 3.676.238 5.333-.379 2.422-.902 5.602-2.892 8.127-4.848 2.625-2.034 5.067-4.617 5.188-5.038.148-.517.133-.996-.154-1.546-.448-.862-1.049-1.503-1.694-2.22-1.732-1.825-3.563-3.43-5.754-4.658C12.694 1.242 11.417.564 9.82.588zm1.075 3.623c.546 0 1.176.173 1.853.5 1.688.817 3.422 2.961-.015 4.195-.935.336-3.9-.824-3.81-2.407.09-1.57.854-2.289 1.972-2.288zm.285 1.367c-.317-.002-.575.079-.694.263-.557.861-.303 1.472.212 1.862.192-.457 2.156.043 2.148.472a.32.32 0 00.055-.032c1.704-1.282-.472-2.557-1.72-2.565z"/>
    </svg>
  </div>
  <span class="brand-icon__name">gentoo</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_alpinelinux = {
  id: 'brand-alpinelinux',
  name: 'Alpine Linux',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'alpinelinux'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Alpine Linux</title><path d="M5.998 1.607L0 12l5.998 10.393h12.004L24 12 18.002 1.607H5.998zM9.965 7.12L12.66 9.9l1.598 1.595.002-.002 2.41 2.363c-.2.14-.386.252-.563.344a3.756 3.756 0 01-.496.217 2.702 2.702 0 01-.425.111c-.131.023-.25.034-.358.034-.13 0-.242-.014-.338-.034a1.317 1.317 0 01-.24-.072.95.95 0 01-.2-.113l-1.062-1.092-3.039-3.041-1.1 1.053-3.07 3.072a.974.974 0 01-.2.111 1.274 1.274 0 01-.237.073c-.096.02-.209.033-.338.033-.108 0-.227-.009-.358-.031a2.7 2.7 0 01-.425-.114 3.748 3.748 0 01-.496-.217 5.228 5.228 0 01-.563-.343l6.803-6.727zm4.72.785l4.579 4.598 1.382 1.353a5.24 5.24 0 01-.564.344 3.73 3.73 0 01-.494.217 2.697 2.697 0 01-.426.111c-.13.023-.251.034-.36.034-.129 0-.241-.014-.337-.034a1.285 1.285 0 01-.385-.146c-.033-.02-.05-.036-.053-.04l-1.232-1.218-2.111-2.111-.334.334L12.79 9.8l1.896-1.897zm-5.966 4.12v2.529a2.128 2.128 0 01-.356-.035 2.765 2.765 0 01-.422-.116 3.708 3.708 0 01-.488-.214 5.217 5.217 0 01-.555-.34l1.82-1.825Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">alpinelinux</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_firefox = {
  id: 'brand-firefox',
  name: 'Firefox',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'firefox'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Firefox</title><path d="M20.452 3.445a11.002 11.002 0 00-2.482-1.908C16.944.997 15.098.093 12.477.032c-.734-.017-1.457.03-2.174.144-.72.114-1.398.292-2.118.56-1.017.377-1.996.975-2.574 1.554.583-.349 1.476-.733 2.55-.992a10.083 10.083 0 013.729-.167c2.341.34 4.178 1.381 5.48 2.625a8.066 8.066 0 011.298 1.587c1.468 2.382 1.33 5.376.184 7.142-.85 1.312-2.67 2.544-4.37 2.53-.583-.023-1.438-.152-2.25-.566-2.629-1.343-3.021-4.688-1.118-6.306-.632-.136-1.82.13-2.646 1.363-.742 1.107-.7 2.816-.242 4.028a6.473 6.473 0 01-.59-1.895 7.695 7.695 0 01.416-3.845A8.212 8.212 0 019.45 5.399c.896-1.069 1.908-1.72 2.75-2.005-.54-.471-1.411-.738-2.421-.767C8.31 2.583 6.327 3.061 4.7 4.41a8.148 8.148 0 00-1.976 2.414c-.455.836-.691 1.659-.697 1.678.122-1.445.704-2.994 1.248-4.055-.79.413-1.827 1.668-2.41 3.042C.095 9.37-.2 11.608.14 13.989c.966 5.668 5.9 9.982 11.843 9.982C18.62 23.971 24 18.591 24 11.956a11.93 11.93 0 00-3.548-8.511z"/>
    </svg>
  </div>
  <span class="brand-icon__name">firefox</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_safari = {
  id: 'brand-safari',
  name: 'Safari',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'safari'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Safari</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm-.004.953h.006c.063 0 .113.05.113.113v1.842c0 .063-.05.113-.113.113h-.006a.112.112 0 0 1-.113-.113V1.066c0-.063.05-.113.113-.113zm-.941.041c.056.001.104.046.11.104l.077.918a.112.112 0 0 1-.101.12h-.01a.11.11 0 0 1-.12-.1l-.08-.919a.112.112 0 0 1 .102-.12h.01l.012-.003zm1.892 0H12.965a.113.113 0 0 1 .103.121l-.08.92a.111.111 0 0 1-.12.102h-.009a.111.111 0 0 1-.101-.121l.078-.92a.112.112 0 0 1 .111-.102zm-2.838.123a.11.11 0 0 1 .106.092l.32 1.818c.01.06-.03.119-.09.13l-.01.001a.111.111 0 0 1-.128-.09l-.32-1.818a.111.111 0 0 1 .09-.129l.01-.002a.103.103 0 0 1 .022-.002zm3.784.002h.021l.008.002c.061.01.102.07.092.131l-.32 1.814c-.011.062-.07.101-.132.09h-.005a.113.113 0 0 1-.092-.13l.32-1.815a.111.111 0 0 1 .108-.092zm-4.715.203c.048.002.09.035.103.084l.239.893a.112.112 0 0 1-.079.139l-.005.001a.114.114 0 0 1-.14-.08l-.237-.894a.11.11 0 0 1 .078-.137l.006-.002a.123.123 0 0 1 .035-.004zm5.644 0a.11.11 0 0 1 .033.004l.006.002c.06.016.097.079.08.139l-.24.892a.112.112 0 0 1-.137.08l-.005-.002a.114.114 0 0 1-.08-.138l.24-.893a.112.112 0 0 1 .103-.084zm-6.562.285a.11.11 0 0 1 .107.073L9 3.42a.107.107 0 0 1-.064.139l-.012.005a.11.11 0 0 1-.14-.066L8.15 1.76a.11.11 0 0 1 .065-.14l.014-.005a.106.106 0 0 1 .03-.008zm7.469.002c.014 0 .028.001.042.006l.012.006c.057.02.087.082.067.139l-.633 1.738a.11.11 0 0 1-.14.066l-.013-.003A.11.11 0 0 1 15 3.42l.633-1.738a.108.108 0 0 1 .096-.073zm-8.352.366a.112.112 0 0 1 .105.064l.393.838a.112.112 0 0 1-.055.148l-.008.004a.11.11 0 0 1-.146-.054l-.395-.838a.112.112 0 0 1 .055-.149l.008-.004a.11.11 0 0 1 .043-.01zm9.246 0a.11.11 0 0 1 .043.01l.006.003a.11.11 0 0 1 .053.149l-.391.838a.112.112 0 0 1-.148.054l-.006-.002a.112.112 0 0 1-.055-.148l.393-.84a.112.112 0 0 1 .105-.064zm-10.092.44c.04-.002.08.018.102.056l.922 1.597a.113.113 0 0 1-.041.155l-.006.002a.113.113 0 0 1-.154-.041l-.922-1.598a.113.113 0 0 1 .04-.154l.007-.002a.11.11 0 0 1 .052-.016zm10.94.001c.018 0 .035.004.052.014l.004.002a.114.114 0 0 1 .041.156l-.923 1.596a.114.114 0 0 1-.157.04l-.004-.001a.112.112 0 0 1-.04-.155l.925-1.595a.113.113 0 0 1 .102-.057zM5.729 2.93a.11.11 0 0 1 .093.047l.532.753a.114.114 0 0 1-.028.159l-.004.002a.114.114 0 0 1-.158-.028l-.531-.752a.114.114 0 0 1 .027-.158l.006-.002a.113.113 0 0 1 .063-.021zm12.542 0a.11.11 0 0 1 .063.02l.006.003a.112.112 0 0 1 .027.156l-.531.756a.112.112 0 0 1-.156.028l-.006-.004a.112.112 0 0 1-.028-.157l.532-.755a.11.11 0 0 1 .093-.047zm.747.578a.11.11 0 0 1 .08.027l.006.004c.047.04.053.111.013.158L17.932 5.11a.11.11 0 0 1-.157.016l-.005-.006a.11.11 0 0 1-.014-.156l1.185-1.414a.114.114 0 0 1 .077-.041zM4.984 3.51a.11.11 0 0 1 .077.039L6.244 4.96a.112.112 0 0 1-.014.158l-.003.004a.112.112 0 0 1-.159-.014L4.883 3.697a.112.112 0 0 1 .013-.158l.006-.004a.111.111 0 0 1 .082-.025zm-.714.64c.027 0 .055.01.076.032l.658.66a.107.107 0 0 1 0 .152l-.01.01a.107.107 0 0 1-.152 0l-.66-.658a.11.11 0 0 1 0-.155l.01-.01a.111.111 0 0 1 .078-.03zm15.462 0c.028 0 .055.01.077.032l.007.007a.109.109 0 0 1 0 .155l-.658.66a.109.109 0 0 1-.154 0l-.008-.008a.109.109 0 0 1 0-.154l.658-.66a.11.11 0 0 1 .078-.032zm.707.66c.038 0 .071.02.092.075a.112.112 0 0 1-.023.117l-7.606 8.08c-3.084 2.024-6.149 4.04-9.222 6.05-.078.051-.17.082-.211-.028a.112.112 0 0 1 .023-.118l7.594-8.08c3.084-2.023 6.161-4.039 9.234-6.049a.247.247 0 0 1 .12-.046zm-16.824.045a.109.109 0 0 1 .08.026l1.416 1.187a.11.11 0 0 1 .014.157l-.006.005a.11.11 0 0 1-.156.014L3.549 5.057a.109.109 0 0 1-.014-.155l.006-.007a.108.108 0 0 1 .074-.04zm17.336.756c.036 0 .072.017.094.05l.004.003a.114.114 0 0 1-.028.158l-.753.53a.112.112 0 0 1-.157-.028l-.004-.004a.114.114 0 0 1 .028-.158l.754-.53a.113.113 0 0 1 .062-.02zm-17.904.002c.02 0 .042.007.06.02l.76.531c.05.035.06.103.026.152l-.006.01a.109.109 0 0 1-.153.026l-.76-.532a.109.109 0 0 1-.025-.152l.006-.01a.108.108 0 0 1 .092-.045zm-.512.803c.018 0 .036.006.053.016l1.596.923a.111.111 0 0 1 .04.153l-.003.006a.111.111 0 0 1-.153.04L2.473 6.63a.111.111 0 0 1-.041-.152l.004-.006a.11.11 0 0 1 .1-.055zm18.932 0a.11.11 0 0 1 .1.055l.001.004a.113.113 0 0 1-.04.154l-1.596.926a.113.113 0 0 1-.155-.041l-.002-.004a.113.113 0 0 1 .041-.155l1.596-.925a.115.115 0 0 1 .055-.014zm-19.373.846c.014 0 .029.003.043.01l.838.392a.11.11 0 0 1 .052.147l-.004.01a.11.11 0 0 1-.146.052l-.838-.393a.11.11 0 0 1-.053-.146l.004-.01a.109.109 0 0 1 .104-.062zm19.81.002a.11.11 0 0 1 .106.062l.002.008a.11.11 0 0 1-.053.146l-.838.393a.11.11 0 0 1-.146-.053l-.004-.008a.11.11 0 0 1 .052-.146l.838-.393a.11.11 0 0 1 .043-.01zm-20.183.88c.014 0 .028.001.043.006l1.732.631a.112.112 0 0 1 .067.145l-.002.006a.11.11 0 0 1-.143.066l-1.732-.63a.113.113 0 0 1-.069-.145l.002-.004a.115.115 0 0 1 .102-.074zm20.549 0a.113.113 0 0 1 .11.075l.003.004a.115.115 0 0 1-.069.146l-1.732.629a.112.112 0 0 1-.145-.066l-.001-.006a.113.113 0 0 1 .068-.145l1.732-.63a.11.11 0 0 1 .034-.006zm-20.836.909a.11.11 0 0 1 .033.004l.892.24c.06.016.096.077.08.137l-.002.007a.11.11 0 0 1-.136.079l-.895-.239a.113.113 0 0 1-.078-.138l.002-.006a.113.113 0 0 1 .104-.084zm21.13.002a.115.115 0 0 1 .106.084v.004a.112.112 0 0 1-.078.138l-.893.239a.112.112 0 0 1-.138-.079v-.005a.112.112 0 0 1 .078-.14l.892-.237a.11.11 0 0 1 .033-.004zm-21.335.93.023.001 1.814.323c.062.01.101.069.09.13v.006a.111.111 0 0 1-.13.09l-1.815-.322a.113.113 0 0 1-.092-.131l.002-.006a.11.11 0 0 1 .108-.092zm21.519.001h.022c.052.002.1.038.109.092v.006c.01.062-.03.12-.092.13l-1.814.321a.113.113 0 0 1-.131-.092v-.005a.113.113 0 0 1 .092-.131l1.814-.32zm-21.644.944h.011l.922.084a.11.11 0 0 1 .102.119l-.002.01a.11.11 0 0 1-.121.1l-.922-.083a.11.11 0 0 1-.1-.12v-.009a.111.111 0 0 1 .11-.101zm21.779.002h.012c.056 0 .106.043.11.101v.008a.111.111 0 0 1-.1.121l-.923.08a.111.111 0 0 1-.12-.101v-.008a.111.111 0 0 1 .1-.121l.92-.08zm-11.82.73L6.091 16.95c2.02-1.324 4.039-2.646 6.066-3.976l-1.095-1.31zm11.87.219c.063 0 .114.05.114.113v.004c0 .063-.05.113-.113.113l-1.844.004a.113.113 0 0 1-.113-.113v-.004c0-.063.05-.113.113-.113l1.844-.004zm-21.869.002h1.844c.062 0 .112.05.112.111v.008c0 .062-.05.111-.112.111H1.064a.111.111 0 0 1-.11-.111v-.008c0-.061.049-.111.11-.111zm.952.875h.011a.11.11 0 0 1 .11.101v.006a.111.111 0 0 1-.102.121l-.922.08a.11.11 0 0 1-.119-.101l-.002-.006a.111.111 0 0 1 .102-.121l.922-.08zm19.955 0h.011l.922.08a.11.11 0 0 1 .102.119v.008a.112.112 0 0 1-.121.101l-.922-.08a.11.11 0 0 1-.102-.119v-.008a.111.111 0 0 1 .11-.101zm-18.924.705c.053.001.098.04.107.094l.002.004c.011.061-.03.12-.092.13l-1.812.32a.113.113 0 0 1-.13-.091v-.004a.115.115 0 0 1 .09-.133l1.811-.318a.117.117 0 0 1 .024-.002zm17.902 0c.008 0 .016 0 .024.002l1.816.32c.061.011.1.07.09.131v.004a.113.113 0 0 1-.131.092l-1.816-.32a.112.112 0 0 1-.09-.131v-.004a.113.113 0 0 1 .107-.094zM2.332 14.477a.11.11 0 0 1 .104.082l.002.005c.016.06-.02.121-.08.137l-.891.24a.112.112 0 0 1-.137-.08l-.002-.006a.112.112 0 0 1 .08-.136l.89-.239a.112.112 0 0 1 .034-.003zm19.332 0c.011 0 .024 0 .035.003l.893.239c.06.016.096.077.08.136l-.002.006a.111.111 0 0 1-.137.078l-.894-.238a.111.111 0 0 1-.078-.137l.002-.005a.109.109 0 0 1 .101-.082zm-18.213.517a.11.11 0 0 1 .11.074l.002.004a.112.112 0 0 1-.067.145l-1.732.63a.113.113 0 0 1-.145-.068l-.002-.004a.113.113 0 0 1 .069-.144L3.418 15a.11.11 0 0 1 .033-.006zm17.086 0c.015 0 .029 0 .043.006l1.734.63a.111.111 0 0 1 .067.143l-.002.008a.111.111 0 0 1-.143.067l-1.734-.631a.111.111 0 0 1-.066-.143l.002-.008a.111.111 0 0 1 .1-.072zM2.92 16.117a.109.109 0 0 1 .103.063l.004.01a.108.108 0 0 1-.052.144l-.838.393a.11.11 0 0 1-.147-.055l-.004-.008a.11.11 0 0 1 .053-.146l.838-.391a.112.112 0 0 1 .043-.01zm18.158 0a.11.11 0 0 1 .043.01l.838.39c.056.027.08.093.055.149l-.002.004a.112.112 0 0 1-.149.055l-.838-.391a.112.112 0 0 1-.054-.148l.002-.004a.112.112 0 0 1 .105-.065zm-16.957.315c.04-.001.078.02.1.056l.004.004a.11.11 0 0 1-.041.153l-1.596.921a.113.113 0 0 1-.154-.04l-.002-.005a.113.113 0 0 1 .04-.154l1.596-.922a.109.109 0 0 1 .053-.013zm15.756 0c.018 0 .036.004.053.013l1.597.924a.11.11 0 0 1 .041.152l-.002.004a.11.11 0 0 1-.152.041l-1.598-.921a.113.113 0 0 1-.04-.155l.001-.002a.111.111 0 0 1 .1-.056zm.328 1.193a.11.11 0 0 1 .06.021l.758.534c.05.035.061.102.026.152l-.004.008a.111.111 0 0 1-.154.027l-.756-.535a.109.109 0 0 1-.028-.152l.006-.008a.11.11 0 0 1 .092-.047zm-16.412.002c.035 0 .072.016.094.047l.004.008a.109.109 0 0 1-.028.152l-.756.531a.108.108 0 0 1-.152-.025l-.006-.008a.109.109 0 0 1 .028-.152l.755-.534a.107.107 0 0 1 .061-.019zm15.162.102a.112.112 0 0 1 .082.025l1.414 1.187a.11.11 0 0 1 .014.157l-.004.004a.113.113 0 0 1-.158.013L18.89 17.93a.11.11 0 0 1-.014-.157l.004-.005a.108.108 0 0 1 .074-.04zm-12.812 1.12a.11.11 0 0 1 .08.026l.007.008a.11.11 0 0 1 .014.154L5.06 20.451a.11.11 0 0 1-.155.012l-.008-.006a.11.11 0 0 1-.013-.154l1.185-1.414a.11.11 0 0 1 .075-.04zm11.703 0c.032 0 .065.015.088.042l1.181 1.41c.04.048.035.12-.013.16l-.002.002a.114.114 0 0 1-.16-.014l-1.182-1.41a.114.114 0 0 1 .013-.16l.002-.002a.115.115 0 0 1 .073-.027zm-12.928.114c.027 0 .054.01.074.031l.014.012a.107.107 0 0 1 0 .15l-.662.66a.105.105 0 0 1-.149 0l-.011-.011a.105.105 0 0 1 0-.149l.66-.662a.105.105 0 0 1 .074-.031zm14.164 0c.027 0 .053.01.074.031l.66.662a.106.106 0 0 1 0 .15l-.011.012a.106.106 0 0 1-.15-.002l-.66-.66a.106.106 0 0 1 .001-.15l.01-.012a.108.108 0 0 1 .076-.031zm-11.627.797c.018 0 .034.006.05.015l.007.004a.11.11 0 0 1 .04.15l-.921 1.598a.11.11 0 0 1-.15.041l-.008-.004a.111.111 0 0 1-.04-.152l.922-1.596a.113.113 0 0 1 .1-.056zm9.088.002a.11.11 0 0 1 .1.054l.925 1.596a.113.113 0 0 1-.04.154h-.005a.11.11 0 0 1-.152-.039l-.926-1.595a.113.113 0 0 1 .041-.155l.004-.002a.108.108 0 0 1 .053-.013zm-10.285.324c.021 0 .043.008.062.021l.004.002c.051.036.063.106.028.157l-.53.755a.112.112 0 0 1-.156.028l-.004-.002a.112.112 0 0 1-.027-.156l.53-.756a.113.113 0 0 1 .093-.05zm11.484.002c.036 0 .072.015.094.047l.53.756c.035.05.023.12-.028.156l-.004.002a.112.112 0 0 1-.156-.028l-.53-.755a.112.112 0 0 1 .028-.157l.004-.002a.112.112 0 0 1 .062-.02zm-8.863.342a.11.11 0 0 1 .043.006l.012.005c.056.02.084.081.064.137l-.633 1.74a.105.105 0 0 1-.136.063l-.014-.004a.106.106 0 0 1-.065-.137l.633-1.74a.107.107 0 0 1 .096-.07zm6.232 0a.107.107 0 0 1 .106.07l.633 1.738a.107.107 0 0 1-.065.137l-.015.006a.107.107 0 0 1-.137-.065L15 20.578a.107.107 0 0 1 .064-.137l.014-.005a.117.117 0 0 1 .033-.006zm-4.695.41c.008 0 .014 0 .021.002l.006.002c.062.01.101.067.09.129l-.318 1.812a.113.113 0 0 1-.131.092l-.004-.002a.111.111 0 0 1-.092-.129l.32-1.812a.113.113 0 0 1 .108-.094zm3.146.002c.008-.002.015 0 .022 0a.111.111 0 0 1 .107.092l.32 1.812c.012.061-.03.12-.091.131l-.004.002a.113.113 0 0 1-.13-.092l-.321-1.812a.113.113 0 0 1 .092-.131l.005-.002zm-5.79.119a.11.11 0 0 1 .042.01l.004.002a.114.114 0 0 1 .055.15l-.393.834a.112.112 0 0 1-.148.055l-.004-.002a.112.112 0 0 1-.055-.149l.393-.836a.112.112 0 0 1 .105-.064zm8.458 0a.108.108 0 0 1 .104.062l.39.84a.11.11 0 0 1-.052.147l-.008.004a.11.11 0 0 1-.146-.055l-.391-.838a.11.11 0 0 1 .053-.146l.008-.004a.11.11 0 0 1 .042-.01zm-4.236.018H12c.063 0 .115.05.115.113l.002 1.84c0 .063-.05.113-.113.113h-.006a.113.113 0 0 1-.113-.113l-.004-1.838c0-.063.05-.115.113-.115zm-2.592.578c.011 0 .022 0 .034.004l.005.002c.06.016.095.077.079.136l-.24.893a.111.111 0 0 1-.137.078l-.006-.002a.111.111 0 0 1-.078-.137l.24-.89a.113.113 0 0 1 .103-.084zm5.196.002a.11.11 0 0 1 .103.082l.24.89a.11.11 0 0 1-.078.137l-.006.002a.11.11 0 0 1-.136-.078l-.24-.89a.11.11 0 0 1 .078-.138l.005-.002a.112.112 0 0 1 .034-.003zm-3.475.302h.01l.008.002c.061.006.107.06.101.121l-.08.92a.112.112 0 0 1-.121.102h-.008a.11.11 0 0 1-.1-.121l.08-.922a.111.111 0 0 1 .11-.102zm1.736 0h.02a.11.11 0 0 1 .107.102l.08.924a.11.11 0 0 1-.101.119l-.008.002a.11.11 0 0 1-.12-.102l-.08-.924a.112.112 0 0 1 .102-.12z"/>
    </svg>
  </div>
  <span class="brand-icon__name">safari</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_opera = {
  id: 'brand-opera',
  name: 'Opera',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'opera'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Opera</title><path d="M8.051 5.238c-1.328 1.566-2.186 3.883-2.246 6.48v.564c.061 2.598.918 4.912 2.246 6.479 1.721 2.236 4.279 3.654 7.139 3.654 1.756 0 3.4-.537 4.807-1.471C17.879 22.846 15.074 24 12 24c-.192 0-.383-.004-.57-.014C5.064 23.689 0 18.436 0 12 0 5.371 5.373 0 12 0h.045c3.055.012 5.84 1.166 7.953 3.055-1.408-.93-3.051-1.471-4.81-1.471-2.858 0-5.417 1.42-7.14 3.654h.003zM24 12c0 3.556-1.545 6.748-4.002 8.945-3.078 1.5-5.946.451-6.896-.205 3.023-.664 5.307-4.32 5.307-8.74 0-4.422-2.283-8.075-5.307-8.74.949-.654 3.818-1.703 6.896-.205C22.455 5.25 24 8.445 24 12z"/>
    </svg>
  </div>
  <span class="brand-icon__name">opera</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_brave = {
  id: 'brand-brave',
  name: 'Brave',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'brave'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Brave</title><path d="M15.68 0l2.096 2.38s1.84-.512 2.709.358c.868.87 1.584 1.638 1.584 1.638l-.562 1.381.715 2.047s-2.104 7.98-2.35 8.955c-.486 1.919-.818 2.66-2.198 3.633-1.38.972-3.884 2.66-4.293 2.916-.409.256-.92.692-1.38.692-.46 0-.97-.436-1.38-.692a185.796 185.796 0 01-4.293-2.916c-1.38-.973-1.712-1.714-2.197-3.633-.247-.975-2.351-8.955-2.351-8.955l.715-2.047-.562-1.381s.716-.768 1.585-1.638c.868-.87 2.708-.358 2.708-.358L8.321 0h7.36zm-3.679 14.936c-.14 0-1.038.317-1.758.69-.72.373-1.242.637-1.409.742-.167.104-.065.301.087.409.152.107 2.194 1.69 2.393 1.866.198.175.489.464.687.464.198 0 .49-.29.688-.464.198-.175 2.24-1.759 2.392-1.866.152-.108.254-.305.087-.41-.167-.104-.689-.368-1.41-.741-.72-.373-1.617-.69-1.757-.69zm0-11.278s-.409.001-1.022.206-1.278.46-1.584.46c-.307 0-2.581-.434-2.581-.434S4.119 7.152 4.119 7.849c0 .697.339.881.68 1.243l2.02 2.149c.192.203.59.511.356 1.066-.235.555-.58 1.26-.196 1.977.384.716 1.042 1.194 1.464 1.115.421-.08 1.412-.598 1.776-.834.364-.237 1.518-1.19 1.518-1.554 0-.365-1.193-1.02-1.413-1.168-.22-.15-1.226-.725-1.247-.95-.02-.227-.012-.293.284-.851.297-.559.831-1.304.742-1.8-.089-.495-.95-.753-1.565-.986-.615-.232-1.799-.671-1.947-.74-.148-.068-.11-.133.339-.175.448-.043 1.719-.212 2.292-.052.573.16 1.552.403 1.632.532.079.13.149.134.067.579-.081.445-.5 2.581-.541 2.96-.04.38-.12.63.288.724.409.094 1.097.256 1.333.256s.924-.162 1.333-.256c.408-.093.329-.344.288-.723-.04-.38-.46-2.516-.541-2.961-.082-.445-.012-.45.067-.579.08-.129 1.059-.372 1.632-.532.573-.16 1.845.009 2.292.052.449.042.487.107.339.175-.148.069-1.332.508-1.947.74-.615.233-1.476.49-1.565.986-.09.496.445 1.241.742 1.8.297.558.304.624.284.85-.02.226-1.026.802-1.247.95-.22.15-1.413.804-1.413 1.169 0 .364 1.154 1.317 1.518 1.554.364.236 1.355.755 1.776.834.422.079 1.08-.4 1.464-1.115.384-.716.039-1.422-.195-1.977-.235-.555.163-.863.355-1.066l2.02-2.149c.341-.362.68-.546.68-1.243 0-.697-2.695-3.96-2.695-3.96s-2.274.436-2.58.436c-.307 0-.972-.256-1.585-.461-.613-.205-1.022-.206-1.022-.206z"/>
    </svg>
  </div>
  <span class="brand-icon__name">brave</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_torbrowser = {
  id: 'brand-torbrowser',
  name: 'Tor Browser',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'torbrowser'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Tor Browser</title><path d="M12 21.82v-1.46A8.36 8.36 0 0020.36 12 8.36 8.36 0 0012 3.64V2.18A9.83 9.83 0 0121.82 12 9.83 9.83 0 0112 21.82zm0-5.09A4.74 4.74 0 0016.73 12 4.74 4.74 0 0012 7.27V5.82A6.17 6.17 0 0118.18 12 6.17 6.17 0 0112 18.18zm0-7.27A2.54 2.54 0 0114.55 12 2.54 2.54 0 0112 14.54zM0 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0 12 12 0 000 12z"/>
    </svg>
  </div>
  <span class="brand-icon__name">torbrowser</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_vivaldi = {
  id: 'brand-vivaldi',
  name: 'Vivaldi',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'vivaldi'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Vivaldi</title><path d="M12 0C6.75 0 3.817 0 1.912 1.904.007 3.81 0 6.75 0 12s0 8.175 1.912 10.08C3.825 23.985 6.75 24 12 24c5.25 0 8.183 0 10.088-1.904C23.993 20.19 24 17.25 24 12s0-8.175-1.912-10.08C20.175.015 17.25 0 12 0zm-.168 3a9 9 0 016.49 2.648 9 9 0 010 12.704A9 9 0 1111.832 3zM7.568 7.496a1.433 1.433 0 00-.142.004A1.5 1.5 0 006.21 9.75l1.701 3c.93 1.582 1.839 3.202 2.791 4.822a1.417 1.417 0 001.41.75 1.5 1.5 0 001.223-.81l4.447-7.762A1.56 1.56 0 0018 8.768a1.5 1.5 0 10-2.828.914 2.513 2.513 0 01.256 1.119v.246a2.393 2.393 0 01-2.52 2.13 2.348 2.348 0 01-1.965-1.214c-.307-.51-.6-1.035-.9-1.553-.42-.72-.826-1.41-1.246-2.16a1.433 1.433 0 00-1.229-.754Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">vivaldi</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_duckduckgo = {
  id: 'brand-duckduckgo',
  name: 'DuckDuckGo',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'duckduckgo'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>DuckDuckGo</title><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 .984C18.083.984 23.016 5.916 23.016 12S18.084 23.016 12 23.016.984 18.084.984 12C.984 5.917 5.916.984 12 .984zm0 .938C6.434 1.922 1.922 6.434 1.922 12c0 4.437 2.867 8.205 6.85 9.55-.237-.82-.776-2.753-1.6-6.052-1.184-4.741-2.064-8.606 2.379-9.813.047-.011.064-.064.03-.093-.514-.467-1.382-.548-2.233-.38a.06.06 0 0 1-.07-.058c0-.011 0-.023.011-.035.205-.286.572-.507.822-.64a1.843 1.843 0 0 0-.607-.335c-.059-.022-.059-.12-.006-.144.006-.006.012-.012.024-.012 1.749-.233 3.586.292 4.49 1.448.011.011.023.017.035.023 2.968.635 3.509 4.837 3.328 5.998a9.607 9.607 0 0 0 2.346-.576c.746-.286 1.008-.222 1.101-.053.1.193-.018.513-.28.81-.496.567-1.393 1.01-2.974 1.137-.546.044-1.029.024-1.445.006-.789-.035-1.339-.059-1.633.39-.192.298-.041.998 1.487 1.22 1.09.157 2.078.047 2.798-.034.643-.07 1.073-.118 1.172.069.21.402-.996 1.207-3.066 1.224-.158 0-.315-.006-.467-.011-1.283-.065-2.227-.414-2.816-.735a.094.094 0 0 1-.035-.017c-.105-.059-.31.045-.188.267.07.134.444.478 1.004.776-.058.466.087 1.184.338 2l.088-.016c.041-.009.087-.019.134-.025.507-.082.775.012.926.175.717-.536 1.913-1.294 2.03-1.154.583.694.66 2.332.53 2.99-.004.012-.017.024-.04.035-.274.117-1.783-.296-1.783-.511-.059-1.075-.26-1.173-.493-1.225h-.156c.006.006.012.018.018.03l.052.12c.093.257.24 1.063.13 1.26-.112.199-.835.297-1.284.303-.443.006-.543-.158-.637-.408-.07-.204-.103-.675-.103-.95a.857.857 0 0 1 .012-.216c-.134.058-.333.193-.397.281-.017.262-.017.682.123 1.149.07.221-1.518 1.164-1.74.99-.227-.181-.634-1.952-.459-2.67-.187.017-.338.075-.42.191-.367.508.093 2.933.582 3.248.257.169 1.54-.553 2.176-1.095.105.145.305.158.553.158.326-.012.782-.06 1.103-.158.192.45.423.972.613 1.388 4.47-1.032 7.803-5.037 7.803-9.82 0-5.566-4.512-10.078-10.078-10.078zm1.791 5.646c-.42 0-.678.146-.795.332-.023.047.047.094.094.07.14-.075.357-.161.701-.156.328.006.516.09.67.159l.023.01c.041.017.088-.03.059-.065-.134-.18-.332-.35-.752-.35zm-5.078.198a1.24 1.24 0 0 0-.522.082c-.454.169-.67.526-.67.76 0 .051.112.057.141.011.081-.123.21-.31.617-.478.408-.17.73-.146.951-.094.047.012.083-.041.041-.07a.989.989 0 0 0-.558-.211zm5.434 1.423a.651.651 0 0 0-.655.647.652.652 0 0 0 1.307 0 .646.646 0 0 0-.652-.647zm.283.262h.008a.17.17 0 0 1 .17.17c0 .093-.077.17-.17.17a.17.17 0 0 1-.17-.17c0-.09.072-.165.162-.17zm-5.358.076a.752.752 0 0 0-.758.758c0 .42.338.758.758.758s.758-.337.758-.758a.756.756 0 0 0-.758-.758zm.328.303h.01c.112 0 .2.089.2.2 0 .11-.088.197-.2.197a.195.195 0 0 1-.197-.198c0-.107.082-.194.187-.199z"/>
    </svg>
  </div>
  <span class="brand-icon__name">duckduckgo</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_jetbrains = {
  id: 'brand-jetbrains',
  name: 'JetBrains',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'jetbrains'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>JetBrains</title><path d="M2.345 23.997A2.347 2.347 0 0 1 0 21.652V10.988C0 9.665.535 8.37 1.473 7.433l5.965-5.961A5.01 5.01 0 0 1 10.989 0h10.666A2.347 2.347 0 0 1 24 2.345v10.664a5.056 5.056 0 0 1-1.473 3.554l-5.965 5.965A5.017 5.017 0 0 1 13.007 24v-.003H2.345Zm8.969-6.854H5.486v1.371h5.828v-1.371ZM3.963 6.514h13.523v13.519l4.257-4.257a3.936 3.936 0 0 0 1.146-2.767V2.345c0-.678-.552-1.234-1.234-1.234H10.989a3.897 3.897 0 0 0-2.767 1.145L3.963 6.514Zm-.192.192L2.256 8.22a3.944 3.944 0 0 0-1.145 2.768v10.664c0 .678.552 1.234 1.234 1.234h10.666a3.9 3.9 0 0 0 2.767-1.146l1.512-1.511H3.771V6.706Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">jetbrains</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_intellijidea = {
  id: 'brand-intellijidea',
  name: 'IntelliJ IDEA',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'intellijidea'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>IntelliJ IDEA</title><path d="M0 0v24h24V0zm3.723 3.111h5v1.834h-1.39v6.277h1.39v1.834h-5v-1.834h1.444V4.945H3.723zm11.055 0H17v6.5c0 .612-.055 1.111-.222 1.556-.167.444-.39.777-.723 1.11-.277.279-.666.557-1.11.668a3.933 3.933 0 0 1-1.445.278c-.778 0-1.444-.167-1.944-.445a4.81 4.81 0 0 1-1.279-1.056l1.39-1.555c.277.334.555.555.833.722.277.167.611.278.945.278.389 0 .721-.111 1-.389.221-.278.333-.667.333-1.278zM2.222 19.5h9V21h-9z"/>
    </svg>
  </div>
  <span class="brand-icon__name">intellijidea</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_webstorm = {
  id: 'brand-webstorm',
  name: 'WebStorm',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'webstorm'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>WebStorm</title><path d="M0 0v24h24V0H0zm17.889 2.889c1.444 0 2.667.444 3.667 1.278l-1.111 1.667c-.889-.611-1.722-1-2.556-1s-1.278.389-1.278.889v.056c0 .667.444.889 2.111 1.333 2 .556 3.111 1.278 3.111 3v.056c0 2-1.5 3.111-3.611 3.111-1.5-.056-3-.611-4.167-1.667l1.278-1.556c.889.722 1.833 1.222 2.944 1.222.889 0 1.389-.333 1.389-.944v-.056c0-.556-.333-.833-2-1.278-2-.5-3.222-1.056-3.222-3.056v-.056c0-1.833 1.444-3 3.444-3zm-16.111.222h2.278l1.5 5.778 1.722-5.778h1.667l1.667 5.778 1.5-5.778h2.333l-2.833 9.944H9.723L8.112 7.277l-1.667 5.778H4.612L1.779 3.111zm.5 16.389h9V21h-9v-1.5z"/>
    </svg>
  </div>
  <span class="brand-icon__name">webstorm</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_pycharm = {
  id: 'brand-pycharm',
  name: 'PyCharm',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'pycharm'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>PyCharm</title><path d="M7.833 6.666v-.055c0-1-.667-1.5-1.778-1.5H4.389v3.055h1.723c1.111 0 1.721-.666 1.721-1.5zM0 0v24h24V0H0zm2.223 3.167h4c2.389 0 3.833 1.389 3.833 3.445v.055c0 2.278-1.778 3.5-4.001 3.5H4.389v2.945H2.223V3.167zM11.277 21h-9v-1.5h9V21zm4.779-7.777c-2.944.055-5.111-2.223-5.111-5.057C10.944 5.333 13.056 3 16.111 3c1.889 0 3 .611 3.944 1.556l-1.389 1.61c-.778-.722-1.556-1.111-2.556-1.111-1.658 0-2.873 1.375-2.887 3.084.014 1.709 1.174 3.083 2.887 3.083 1.111 0 1.833-.445 2.61-1.167l1.39 1.389c-.999 1.112-2.166 1.779-4.054 1.779z"/>
    </svg>
  </div>
  <span class="brand-icon__name">pycharm</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_phpstorm = {
  id: 'brand-phpstorm',
  name: 'PhpStorm',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'phpstorm'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>PhpStorm</title><path d="M7.833 6.611v-.055c0-1-.667-1.5-1.778-1.5H4.389v3.056h1.722c1.111-.001 1.722-.668 1.722-1.501zM0 0v24h24V0H0zm2.167 3.111h4.056c2.389 0 3.833 1.389 3.833 3.445v.055c0 2.333-1.778 3.5-4.056 3.5H4.333v3H2.167v-10zM11.278 21h-9v-1.5h9V21zM18.5 10.222c0 2-1.5 3.111-3.667 3.111-1.5-.056-3-.611-4.222-1.667l1.278-1.556c.89.722 1.833 1.222 3 1.222.889 0 1.444-.333 1.444-.944v-.056c0-.555-.333-.833-2-1.277C12.333 8.555 11 8 11 6v-.056c0-1.833 1.444-3 3.5-3 1.444 0 2.723.444 3.723 1.278l-1.167 1.667c-.889-.611-1.777-1-2.611-1-.833 0-1.278.389-1.278.889v.056c0 .667.445.889 2.167 1.333 2 .556 3.167 1.278 3.167 3v.055z"/>
    </svg>
  </div>
  <span class="brand-icon__name">phpstorm</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_rubymine = {
  id: 'brand-rubymine',
  name: 'RubyMine',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'rubymine'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>RubyMine</title><path d="M0 0v24h24V0Zm3.056 3H6.92q.945 0 1.665.347t1.106.977c.262.42.392.902.392 1.46q0 .835-.399 1.478a2.6 2.6 0 0 1-1.125.99 2 2 0 0 1-.297.103q-.066.02-.13.04L10.276 12H8.264l-1.94-3.4H4.811V12H3.056Zm8.51 0h2.444l1.851 5.907.154.773.136-.773L17.937 3h2.482v9h-1.736V5.578l.026-.47L16.613 12H15.34l-2.07-6.846.026.424V12h-1.73ZM4.812 4.459V7.14h1.993q.444-.001.771-.161.335-.167.515-.47c.12-.205.18-.439.18-.713q0-.411-.18-.707a1.17 1.17 0 0 0-.515-.462 1.7 1.7 0 0 0-.77-.168ZM2.996 19.2h9.6V21h-9.6z"/>
    </svg>
  </div>
  <span class="brand-icon__name">rubymine</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_goland = {
  id: 'brand-goland',
  name: 'GoLand',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'goland'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>GoLand</title><path d="M0 0v24h24V0Zm6.764 3a5.448 5.448 0 0 1 3.892 1.356L9.284 6.012A3.652 3.652 0 0 0 6.696 5c-1.6 0-2.844 1.4-2.844 3.08v.028c0 1.812 1.244 3.14 3 3.14a3.468 3.468 0 0 0 2.048-.596V9.228H6.708v-1.88H11v4.296a6.428 6.428 0 0 1-4.228 1.572c-3.076 0-5.196-2.164-5.196-5.092v-.028A5.08 5.08 0 0 1 6.764 3Zm10.432 0c3.052 0 5.244 2.276 5.244 5.088v.028a5.116 5.116 0 0 1-5.272 5.12c-3.056-.02-5.248-2.296-5.248-5.112v-.028A5.116 5.116 0 0 1 17.196 3Zm-.028 2A2.96 2.96 0 0 0 14.2 8.068v.028a3.008 3.008 0 0 0 3 3.112 2.96 2.96 0 0 0 2.964-3.084v-.028A3.004 3.004 0 0 0 17.168 5ZM2.252 19.5h9V21h-9z"/>
    </svg>
  </div>
  <span class="brand-icon__name">goland</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_clion = {
  id: 'brand-clion',
  name: 'CLion',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'clion'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>CLion</title><path d="M0 0v24h24V0H0zm7.041 3a5.049 5.049 0 0 1 .219 0c1.86 0 3 .6 3.9 1.56L9.78 6.18C9 5.46 8.22 5.04 7.26 5.04c-1.68 0-2.88 1.38-2.88 3.12 0 1.68 1.2 3.12 2.88 3.12 1.14 0 1.86-.48 2.64-1.14l1.38 1.38c-1.02 1.08-2.16 1.8-4.08 1.8a5.1 5.1 0 0 1-5.1-5.16A5.049 5.049 0 0 1 7.04 3zm5.738.12H15v8.1h4.32v1.86h-6.54V3.12zM2.28 19.5h9V21h-9v-1.5Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">clion</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_datagrip = {
  id: 'brand-datagrip',
  name: 'DataGrip',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'datagrip'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>DataGrip</title><path d="M0 0v24h24V0Zm17.1797 2.9477a5.452 5.452 0 0 1 3.9047 1.364L19.7078 5.972a3.672 3.672 0 0 0-2.596-1.0086c-1.6 0-2.8555 1.408-2.8555 3.096v.0282c0 1.816 1.2517 3.1523 3.0117 3.1523a3.492 3.492 0 0 0 2.064-.5921V9.2234h-2.2V7.336h4.3157v4.3157a6.436 6.436 0 0 1-4.2438 1.5757c-3.096 0-5.2242-2.1797-5.2242-5.1117v-.0281a5.1 5.1 0 0 1 5.2-5.1398zm-14.7438.1718h3.8758c3.12 0 5.2805 2.1439 5.2805 4.9399v.028c0 2.8-2.1605 4.968-5.2805 4.968H2.436Zm4.075 1.9688a2.852 2.852 0 0 0-.1992.003H4.6203v6h1.6914A2.832 2.832 0 0 0 9.304 8.1235v-.036a2.852 2.852 0 0 0-2.793-2.9991Zm-4.303 14.407h9v1.5h-9z"/>
    </svg>
  </div>
  <span class="brand-icon__name">datagrip</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_rider = {
  id: 'brand-rider',
  name: 'Rider',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'rider'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Rider</title><path d="M0 0v24h24V0zm7.031 3.113A4.063 4.063 0 0 1 9.72 4.14a3.23 3.23 0 0 1 .84 2.28A3.16 3.16 0 0 1 8.4 9.54l2.46 3.6H8.28L6.12 9.9H4.38v3.24H2.16V3.12c1.61-.004 3.281.009 4.871-.007zm5.509.007h3.96c3.18 0 5.34 2.16 5.34 5.04 0 2.82-2.16 5.04-5.34 5.04h-3.96zm4.069 1.976c-.607.01-1.235.004-1.849.004v6.06h1.74a2.882 2.882 0 0 0 3.06-3 2.897 2.897 0 0 0-2.951-3.064zM4.319 5.1v2.88H6.6c1.08 0 1.68-.6 1.68-1.44 0-.96-.66-1.44-1.74-1.44zM2.16 19.5h9V21h-9Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">rider</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_eclipse = {
  id: 'brand-eclipse',
  name: 'Eclipse',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'eclipse'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" />
  <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  </div>
  <span class="brand-icon__name">eclipse</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_sublimetext = {
  id: 'brand-sublimetext',
  name: 'Sublime Text',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'sublimetext'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Sublime Text</title><path d="M20.953.004a.397.397 0 0 0-.18.017L3.225 5.585c-.175.055-.323.214-.402.398a.42.42 0 0 0-.06.22v5.726a.42.42 0 0 0 .06.22c.079.183.227.341.402.397l7.454 2.364-7.454 2.363c-.255.08-.463.374-.463.655v5.688c0 .282.208.444.463.363l17.55-5.565c.237-.075.426-.336.452-.6.003-.022.013-.04.013-.065V12.06c0-.281-.208-.575-.463-.656L13.4 9.065l7.375-2.339c.255-.08.462-.375.462-.656V.384c0-.211-.117-.355-.283-.38z"/>
    </svg>
  </div>
  <span class="brand-icon__name">sublimetext</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_atom = {
  id: 'brand-atom',
  name: 'Atom',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'atom'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="1" />
  <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
  <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
    </svg>
  </div>
  <span class="brand-icon__name">atom</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_xcode = {
  id: 'brand-xcode',
  name: 'Xcode',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'xcode'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Xcode</title><path d="M19.06 5.3327c.4517-.1936.7744-.2581 1.097-.1936.5163.1291.7744.5163.968.7098.1936.3872.9034.7744 1.2261.8389.2581.0645.7098-.6453 1.0325-1.2906.3227-.5808.5163-1.3552.4517-1.5488-.0645-.1936-.968-.5808-1.1616-.5808-.1291 0-.3872.1291-.8389.0645-.4517-.0645-.9034-.5808-1.1616-.968-.4517-.6453-1.097-1.0325-1.6778-1.3552-.6453-.3227-1.3552-.5163-2.065-.6453-1.0325-.2581-2.065-.4517-3.0975-.3227-.5808.0645-1.2906.1291-1.8069.3227-.0645 0-.1936.1936-.0645.1936s.5808.0645.5808.0645-.5807.1292-.5807.2583c0 .1291.0645.1291.1291.1291.0645 0 1.4842-.0645 2.065 0 .6453.1291 1.3552.4517 1.8069 1.2261.7744 1.4197.4517 2.7749.2581 3.2266-.968 2.1295-8.6472 15.2294-9.0344 16.1328-.3873.9034-.5163 1.4842.5807 2.065s1.6778.3227 2.0005-.0645c.3872-.5163 7.0339-17.1654 9.2925-18.2624zm-3.6138 8.7117h1.5488c1.0325 0 1.2261.5163 1.2261.7098.0645.5163-.1936 1.1616-1.2261 1.1616h-.968l.7744 1.2906c.4517.7744.2581 1.1616 0 1.4197-.3872.3872-1.2261.3872-1.6778-.4517l-.9034-1.5488c-.6453 1.4197-1.2906 2.9684-2.065 4.7753h4.0009c1.9359 0 3.5492-1.6133 3.5492-3.5492V6.5588c-.0645-.1291-.1936-.0645-.2581 0-.3872.4517-1.4842 2.0004-4.001 7.4856zm-9.8087 8.0019h-.3227c-2.3231 0-4.1945-1.8714-4.1945-4.1945V7.0105c0-2.3231 1.8714-4.1945 4.1945-4.1945h9.3571c-.1936-.1936-.968-.5163-1.7423-.4517-.3227 0-.968.1291-1.3552-.1291-.3872-.3227-.3227-.5163-.9034-.5163H4.9277c-2.6458 0-4.7753 2.1295-4.7753 4.7753v11.7447c0 2.6458 2.1295 4.7753 4.4527 4.7108.6452 0 .8388-.5162 1.0324-.9034zM20.4152 6.9459v10.9058c0 2.3231-1.8714 4.1945-4.1945 4.1945H11.897s-.3872 1.0325.8389 1.0325h3.8719c2.6458 0 4.7753-2.1295 4.7753-4.7753V8.8173c.0646-.9034-.7098-1.4842-.9679-1.8714zm-18.5851.0646v10.8413c0 1.9359 1.6133 3.5492 3.5492 3.5492h.5808c0-.0645.7744-1.4197 2.4522-4.2591.1936-.3872.4517-.7744.7098-1.2261H4.4114c-.5808 0-.9034-.3872-.968-.7098-.1291-.5163.1936-1.1616.9034-1.1616h2.3877l3.033-5.2916s-.7098-1.2906-.9034-1.6133c-.2582-.4517-.1291-.9034.129-1.1615.3872-.3872 1.0325-.5808 1.6778.4517l.2581.3872.2581-.3872c.5808-.8389.968-.7744 1.2906-.7098.5163.1291.8389.7098.3872 1.6133L8.864 14.0444h1.3552c.4517-.7744.9034-1.5488 1.3552-2.3877-.0645-.3227-.1291-.7098-.0645-1.0325.0645-.5163.3227-.968.6453-1.3552l.3872.6453c1.2261-2.1295 2.1295-3.9364 2.3877-4.6463.1291-.3872.3227-1.1616.1291-1.8069H5.3794c-2.0005.0001-3.5493 1.6134-3.5493 3.5494zM4.605 17.7872c0-.0645.7744-1.4197.7744-1.4197 1.2261-.3227 1.8069.4517 1.8714.5163 0 0-.8389 1.4842-1.097 1.7423s-.5808.3227-.9034.2581c-.5164-.129-.839-.6453-.6454-1.097z"/>
    </svg>
  </div>
  <span class="brand-icon__name">xcode</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_neovim = {
  id: 'brand-neovim',
  name: 'Neovim',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'neovim'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Neovim</title><path d="M2.214 4.954v13.615L7.655 24V10.314L3.312 3.845 2.214 4.954zm4.999 17.98l-4.557-4.548V5.136l.59-.596 3.967 5.908v12.485zm14.573-4.457l-.862.937-4.24-6.376V0l5.068 5.092.034 13.385zM7.431.001l12.998 19.835-3.637 3.637L3.787 3.683 7.43 0z"/>
    </svg>
  </div>
  <span class="brand-icon__name">neovim</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_vim = {
  id: 'brand-vim',
  name: 'Vim',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'vim'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Vim</title><path d="M24 11.986h-.027l-4.318-4.318 4.303-4.414V1.461l-.649-.648h-8.198l-.66.605v1.045L12.015.027V0L12 .014 11.986 0v.027l-1.29 1.291-.538-.539H2.035l-.638.692v1.885l.616.616h.72v5.31L.027 11.987H0L.014 12 0 12.014h.027l2.706 2.706v6.467l.907.523h2.322l1.857-1.904 4.166 4.166V24l.015-.014.014.014v-.028l2.51-2.509h.485c.111 0 .211-.07.25-.179l.146-.426c.028-.084.012-.172-.037-.239l1.462-1.462-.612 1.962c-.043.141.036.289.177.332.025.008.052.012.078.012h1.824c.106-.001.201-.064.243-.163l.165-.394c.025-.065.024-.138-.004-.203-.027-.065-.08-.116-.146-.142-.029-.012-.062-.019-.097-.02h-.075l.84-2.644h1.232l-1.016 3.221c-.043.141.036.289.176.332.025.008.052.012.079.012h2.002c.11 0 .207-.066.248-.17l.164-.428c.051-.138-.021-.29-.158-.341-.029-.011-.06-.017-.091-.017h-.145l1.131-3.673c.027-.082.012-.173-.039-.24l-.375-.504-.003-.005c-.051-.064-.127-.102-.209-.102h-1.436c-.071 0-.141.03-.19.081l-.4.439h-.624l-.042-.046 4.445-4.445H24L23.986 12l.014-.014zM9.838 21.139l1.579-4.509h-.501l.297-.304h1.659l-1.563 4.555h.623l-.079.258H9.838zm3.695-7.516l.15.151-.269.922-.225.226h-.969l-.181-.181.311-.871.288-.247h.895zM5.59 20.829H3.877l-.262-.15V3.091H2.379l-.1-.1V1.815l.143-.154h7.371l.213.214v1.108l-.142.173H8.785v8.688l8.807-8.688h-2.086l-.175-.188V1.805l.121-.111h7.49l.132.133v1.07L12.979 13.25h-.373c-.015-.001-.028 0-.042.001l-.02.003c-.045.01-.086.03-.119.06l-.343.295-.004.003c-.033.031-.059.069-.073.111l-.296.83-6.119 6.276zm14.768-3.952l.474-.519h1.334l.309.415-1.265 4.107h.493l-.08.209H19.84l1.124-3.564h-2.015l-1.077 3.391h.424l-.073.174h-1.605l1.107-3.548h-2.096l-1.062 3.339h.436l-.072.209H13.27l1.514-4.46H14.198l.091-.271h1.65l.519.537h.906l.491-.554h1.061l.489.535h.953z"/>
    </svg>
  </div>
  <span class="brand-icon__name">vim</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_python = {
  id: 'brand-python',
  name: 'Python',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'python'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Python</title><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
    </svg>
  </div>
  <span class="brand-icon__name">python</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_javascript = {
  id: 'brand-javascript',
  name: 'JavaScript',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'javascript'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
    </svg>
  </div>
  <span class="brand-icon__name">javascript</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_typescript = {
  id: 'brand-typescript',
  name: 'TypeScript',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'typescript'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>TypeScript</title><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
    </svg>
  </div>
  <span class="brand-icon__name">typescript</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_deno = {
  id: 'brand-deno',
  name: 'Deno',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'deno'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Deno</title><path d="M1.105 18.02A11.9 11.9 0 0 1 0 12.985q0-.698.078-1.376a12 12 0 0 1 .231-1.34A12 12 0 0 1 4.025 4.02a12 12 0 0 1 5.46-2.771 12 12 0 0 1 3.428-.23c1.452.112 2.825.477 4.077 1.05a12 12 0 0 1 2.78 1.774 12.02 12.02 0 0 1 4.053 7.078A12 12 0 0 1 24 12.985q0 .454-.036.914a12 12 0 0 1-.728 3.305 12 12 0 0 1-2.38 3.875c-1.33 1.357-3.02 1.962-4.43 1.936a4.4 4.4 0 0 1-2.724-1.024c-.99-.853-1.391-1.83-1.53-2.919a5 5 0 0 1 .128-1.518c.105-.38.37-1.116.76-1.437-.455-.197-1.04-.624-1.226-.829-.045-.05-.04-.13 0-.183a.155.155 0 0 1 .177-.053c.392.134.869.267 1.372.35.66.111 1.484.25 2.317.292 2.03.1 4.153-.813 4.812-2.627s.403-3.609-1.96-4.685-3.454-2.356-5.363-3.128c-1.247-.505-2.636-.205-4.06.582-3.838 2.121-7.277 8.822-5.69 15.032a.191.191 0 0 1-.315.19 12 12 0 0 1-1.25-1.634 12 12 0 0 1-.769-1.404M11.57 6.087c.649-.051 1.214.501 1.31 1.236.13.979-.228 1.99-1.41 2.013-1.01.02-1.315-.997-1.248-1.614.066-.616.574-1.575 1.35-1.635"/>
    </svg>
  </div>
  <span class="brand-icon__name">deno</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_bun = {
  id: 'brand-bun',
  name: 'Bun',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'bun'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Bun</title><path d="M12 22.596c6.628 0 12-4.338 12-9.688 0-3.318-2.057-6.248-5.219-7.986-1.286-.715-2.297-1.357-3.139-1.89C14.058 2.025 13.08 1.404 12 1.404c-1.097 0-2.334.785-3.966 1.821a49.92 49.92 0 0 1-2.816 1.697C2.057 6.66 0 9.59 0 12.908c0 5.35 5.372 9.687 12 9.687v.001ZM10.599 4.715c.334-.759.503-1.58.498-2.409 0-.145.202-.187.23-.029.658 2.783-.902 4.162-2.057 4.624-.124.048-.199-.121-.103-.209a5.763 5.763 0 0 0 1.432-1.977Zm2.058-.102a5.82 5.82 0 0 0-.782-2.306v-.016c-.069-.123.086-.263.185-.172 1.962 2.111 1.307 4.067.556 5.051-.082.103-.23-.003-.189-.126a5.85 5.85 0 0 0 .23-2.431Zm1.776-.561a5.727 5.727 0 0 0-1.612-1.806v-.014c-.112-.085-.024-.274.114-.218 2.595 1.087 2.774 3.18 2.459 4.407a.116.116 0 0 1-.049.071.11.11 0 0 1-.153-.026.122.122 0 0 1-.022-.083 5.891 5.891 0 0 0-.737-2.331Zm-5.087.561c-.617.546-1.282.76-2.063 1-.117 0-.195-.078-.156-.181 1.752-.909 2.376-1.649 2.999-2.778 0 0 .155-.118.188.085 0 .304-.349 1.329-.968 1.874Zm4.945 11.237a2.957 2.957 0 0 1-.937 1.553c-.346.346-.8.565-1.286.62a2.178 2.178 0 0 1-1.327-.62 2.955 2.955 0 0 1-.925-1.553.244.244 0 0 1 .064-.198.234.234 0 0 1 .193-.069h3.965a.226.226 0 0 1 .19.07c.05.053.073.125.063.197Zm-5.458-2.176a1.862 1.862 0 0 1-2.384-.245 1.98 1.98 0 0 1-.233-2.447c.207-.319.503-.566.848-.713a1.84 1.84 0 0 1 1.092-.11c.366.075.703.261.967.531a1.98 1.98 0 0 1 .408 2.114 1.931 1.931 0 0 1-.698.869v.001Zm8.495.005a1.86 1.86 0 0 1-2.381-.253 1.964 1.964 0 0 1-.547-1.366c0-.384.11-.76.32-1.079.207-.319.503-.567.849-.713a1.844 1.844 0 0 1 1.093-.108c.367.076.704.262.968.534a1.98 1.98 0 0 1 .4 2.117 1.932 1.932 0 0 1-.702.868Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">bun</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_go = {
  id: 'brand-go',
  name: 'Go',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'go'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Go</title><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"/>
    </svg>
  </div>
  <span class="brand-icon__name">go</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_rust = {
  id: 'brand-rust',
  name: 'Rust',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'rust'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Rust</title><path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z"/>
    </svg>
  </div>
  <span class="brand-icon__name">rust</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_ruby = {
  id: 'brand-ruby',
  name: 'Ruby',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'ruby'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Ruby</title><path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z"/>
    </svg>
  </div>
  <span class="brand-icon__name">ruby</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_php = {
  id: 'brand-php',
  name: 'PHP',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'php'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>PHP</title><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"/>
    </svg>
  </div>
  <span class="brand-icon__name">php</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_kotlin = {
  id: 'brand-kotlin',
  name: 'Kotlin',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'kotlin'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Kotlin</title><path d="M24 24H0V0h24L12 12Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">kotlin</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_swift = {
  id: 'brand-swift',
  name: 'Swift',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'swift'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Swift</title><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z"/>
    </svg>
  </div>
  <span class="brand-icon__name">swift</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_scala = {
  id: 'brand-scala',
  name: 'Scala',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'scala'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Scala</title><path d="M4.589 24c4.537 0 13.81-1.516 14.821-3v-5.729c-.957 1.408-10.284 2.912-14.821 2.912V24zM4.589 16.365c4.537 0 13.81-1.516 14.821-3V7.636c-.957 1.408-10.284 2.912-14.821 2.912v5.817zM4.589 8.729c4.537 0 13.81-1.516 14.821-3V0C18.453 1.408 9.126 2.912 4.589 2.912v5.817z"/>
    </svg>
  </div>
  <span class="brand-icon__name">scala</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_elixir = {
  id: 'brand-elixir',
  name: 'Elixir',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'elixir'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Elixir</title><path d="M19.793 16.575c0 3.752-2.927 7.426-7.743 7.426-5.249 0-7.843-3.71-7.843-8.29 0-5.21 3.892-12.952 8-15.647a.397.397 0 0 1 .61.371 9.716 9.716 0 0 0 1.694 6.518c.522.795 1.092 1.478 1.763 2.352.94 1.227 1.637 1.906 2.644 3.842l.015.028a7.107 7.107 0 0 1 .86 3.4z"/>
    </svg>
  </div>
  <span class="brand-icon__name">elixir</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_erlang = {
  id: 'brand-erlang',
  name: 'Erlang',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'erlang'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Erlang</title><path d="M8.859 7.889c.154-1.863 1.623-3.115 3.344-3.119 1.734.004 2.986 1.256 3.029 3.119zm12.11 11.707c.802-.86 1.52-1.872 2.172-3.03l-3.616-1.807c-1.27 2.064-3.127 3.965-5.694 3.977-3.738-.012-5.206-3.208-5.198-7.322h13.966c.019-.464.019-.68 0-.904.091-2.447-.558-4.504-1.737-6.106l-.007.005H24v15.186h-3.039zm-17.206-.001C1.901 17.62.811 14.894.813 11.64c-.002-2.877.902-5.35 2.456-7.232H0v15.187h3.761Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">erlang</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_haskell = {
  id: 'brand-haskell',
  name: 'Haskell',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'haskell'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Haskell</title><path d="M0 3.535L5.647 12 0 20.465h4.235L9.883 12 4.235 3.535zm5.647 0L11.294 12l-5.647 8.465h4.235l3.53-5.29 3.53 5.29h4.234L9.883 3.535zm8.941 4.938l1.883 2.822H24V8.473zm2.824 4.232l1.882 2.822H24v-2.822z"/>
    </svg>
  </div>
  <span class="brand-icon__name">haskell</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_clojure = {
  id: 'brand-clojure',
  name: 'Clojure',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'clojure'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Clojure</title><path d="M11.503 12.216c-.119.259-.251.549-.387.858-.482 1.092-1.016 2.42-1.21 3.271a4.91 4.91 0 0 0-.112 1.096c0 .164.009.337.022.514.682.25 1.417.388 2.186.39a6.39 6.39 0 0 0 2.001-.326 3.808 3.808 0 0 1-.418-.441c-.854-1.089-1.329-2.682-2.082-5.362M8.355 6.813A6.347 6.347 0 0 0 5.657 12a6.347 6.347 0 0 0 2.625 5.134c.39-1.622 1.366-3.107 2.83-6.084-.087-.239-.186-.5-.297-.775-.406-1.018-.991-2.198-1.513-2.733a4.272 4.272 0 0 0-.947-.729M17.527 19.277c-.84-.105-1.533-.232-2.141-.446A7.625 7.625 0 0 1 4.376 12a7.6 7.6 0 0 1 2.6-5.73 5.582 5.582 0 0 0-1.324-.162c-2.236.02-4.597 1.258-5.58 4.602-.092.486-.07.854-.07 1.29 0 6.627 5.373 12 12 12 4.059 0 7.643-2.017 9.815-5.101-1.174.293-2.305.433-3.271.436-.362 0-.702-.02-1.019-.058M15.273 16.952c.074.036.242.097.475.163a6.354 6.354 0 0 0 2.6-5.115h-.002a6.354 6.354 0 0 0-6.345-6.345 6.338 6.338 0 0 0-1.992.324c1.289 1.468 1.908 3.566 2.507 5.862l.001.003c.001.002.192.637.518 1.48.326.842.789 1.885 1.293 2.645.332.51.697.876.945.983M12.001 0a11.98 11.98 0 0 0-9.752 5.013c1.134-.71 2.291-.967 3.301-.957 1.394.004 2.491.436 3.017.732.127.073.248.152.366.233A7.625 7.625 0 0 1 19.625 12a7.605 7.605 0 0 1-2.268 5.425c.344.038.709.063 1.084.061 1.328 0 2.766-.293 3.842-1.198.703-.592 1.291-1.458 1.617-2.757.065-.502.1-1.012.1-1.531 0-6.627-5.371-12-11.999-12"/>
    </svg>
  </div>
  <span class="brand-icon__name">clojure</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_perl = {
  id: 'brand-perl',
  name: 'Perl',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'perl'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Perl</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0m.157 1.103a10.91 10.91 0 0 1 9.214 5.404c-1.962.152-3.156 1.698-5.132 3.553-2.81 2.637-4.562.582-5.288-.898-.447-1.004-.847-2.117-1.544-2.769A.4.4 0 0 1 9.3 6.02l.08-.37a.083.083 0 0 0-.074-.1c-.33-.022-.601.093-.84.368a2.5 2.5 0 0 0-.375-.064c-.863-.093-1.036.345-1.873.345H5.81c-.758 0-1.391.361-1.7.892-.248.424-.257.884.15.93-.126.445.292.62 1.224.192 0 0 .733.421 1.749.421.549 0 .712.087.914.967.486 2.138 2.404 5.655 6.282 5.655l.118.166c.659.934.86 2.113.48 3.184-.307.867-.697 1.531-.697 1.531q.01.178.01.349c0 .81-.175 1.553-.387 2.23a10.91 10.91 0 0 1-11.989-6.342A10.91 10.91 0 0 1 7.608 2.01a10.9 10.9 0 0 1 4.55-.907M7.524 6.47c.288 0 .575.231.477.272a.4.4 0 0 1-.1.02.38.38 0 0 1-.375.327.384.384 0 0 1-.378-.326.4.4 0 0 1-.101-.02c-.098-.042.19-.273.477-.273m10.193 10.49q.05 0 .101.007.326.054.694.096.135.01.269.026a13.4 13.4 0 0 0 2.846-.007 10.9 10.9 0 0 1-2.007 2.705c-.11-.23-.547-1.19-.573-2.196q-.156-.01-.313-.026-.13-.014-.256-.022a18 18 0 0 1-.735-.102h-.003c-.032 0-.06.01-.074.035l-.003.012q-.081.265-.182.544c.428 1.084.652 2.078.652 2.078.14.22.258.432.363.64a11 11 0 0 1-2.168 1.264 11 11 0 0 1-1.205.426 13.3 13.3 0 0 1 1.055-2.531s.678-1.445 1.027-2.564v-.004a.55.55 0 0 1 .512-.38"/>
    </svg>
  </div>
  <span class="brand-icon__name">perl</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_lua = {
  id: 'brand-lua',
  name: 'Lua',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'lua'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Lua</title><path d="M.38 10.377l-.272-.037c-.048.344-.082.695-.101 1.041l.275.016c.018-.34.051-.682.098-1.02zM4.136 3.289l-.184-.205c-.258.232-.509.48-.746.734l.202.188c.231-.248.476-.49.728-.717zM5.769 2.059l-.146-.235c-.296.186-.586.385-.863.594l.166.219c.27-.203.554-.399.843-.578zM1.824 18.369c.185.297.384.586.593.863l.22-.164c-.205-.271-.399-.555-.58-.844l-.233.145zM1.127 16.402l-.255.104c.129.318.274.635.431.943l.005.01.245-.125-.005-.01c-.153-.301-.295-.611-.421-.922zM.298 9.309l.269.063c.076-.332.168-.664.272-.986l-.261-.087c-.108.332-.202.672-.28 1.01zM.274 12.42l-.275.01c.012.348.04.699.083 1.043l.273-.033c-.042-.336-.069-.68-.081-1.02zM.256 14.506c.073.34.162.682.264 1.014l.263-.08c-.1-.326-.187-.658-.258-.99l-.269.056zM11.573.275L11.563 0c-.348.012-.699.039-1.044.082l.034.273c.338-.041.68-.068 1.02-.08zM23.221 8.566c.1.326.186.66.256.992l.27-.059c-.072-.34-.16-.682-.262-1.014l-.264.081zM17.621 1.389c-.309-.164-.627-.314-.947-.449l-.107.252c.314.133.625.281.926.439l.128-.242zM15.693.572c-.332-.105-.67-.199-1.01-.277l-.063.268c.332.076.664.168.988.273l.085-.264zM6.674 1.545c.298-.15.606-.291.916-.418L7.486.873c-.317.127-.632.272-.937.428l-.015.008.125.244.015-.008zM23.727 11.588l.275-.01a11.797 11.797 0 0 0-.082-1.045l-.273.033c.041.338.068.682.08 1.022zM13.654.105c-.346-.047-.696-.08-1.043-.098l-.014.273c.339.018.683.051 1.019.098l.038-.273zM9.544.527l-.058-.27c-.34.072-.681.16-1.014.264l.081.262c.325-.099.659-.185.991-.256zM1.921 5.469l.231.15c.185-.285.384-.566.592-.834l-.217-.17c-.213.276-.417.563-.606.854zM.943 7.318l.253.107c.132-.313.28-.625.439-.924l-.243-.128c-.163.307-.314.625-.449.945zM18.223 21.943l.145.234c.295-.186.586-.385.863-.594l-.164-.219c-.272.204-.557.4-.844.579zM21.248 19.219l.217.17c.215-.273.418-.561.607-.854l-.23-.148c-.186.285-.385.564-.594.832zM19.855 20.715l.184.203c.258-.23.51-.479.746-.732l-.201-.188c-.23.248-.477.488-.729.717zM22.359 17.504l.244.129c.162-.307.314-.625.449-.945l-.254-.107a11.27 11.27 0 0 1-.439.923zM23.617 13.629l.273.039c.049-.346.082-.695.102-1.043l-.275-.014c-.018.338-.051.682-.1 1.018zM23.156 15.621l.264.086c.107-.332.201-.67.279-1.01l-.268-.063c-.077.333-.169.665-.275.987zM22.453 6.672c.154.303.297.617.424.932l.256-.104c-.131-.322-.277-.643-.436-.953l-.244.125zM8.296 23.418c.331.107.67.201 1.009.279l.062-.268c-.331-.076-.663-.168-.986-.273l-.085.262zM10.335 23.889c.345.049.696.082 1.043.102l.014-.275c-.339-.018-.682-.051-1.019-.098l-.038.271zM17.326 22.449c-.303.154-.613.297-.926.424l.104.256c.318-.131.639-.275.947-.434l.004-.002-.123-.246-.006.002zM4.613 21.467c.274.213.562.418.854.605l.149-.23c-.285-.184-.565-.385-.833-.592l-.17.217zM12.417 23.725l.009.275c.348-.014.699-.041 1.045-.084l-.035-.271c-.336.041-.68.068-1.019.08zM6.37 22.604c.307.162.625.314.946.449l.107-.254c-.313-.133-.624-.279-.924-.439l-.129.244zM3.083 20.041c.233.258.48.51.734.746l.188-.201c-.249-.23-.49-.477-.717-.729l-.205.184zM14.445 23.475l.059.27c.34-.074.68-.162 1.014-.266l-.082-.262c-.325.099-.659.185-.991.258zM21.18.129A2.689 2.689 0 1 0 21.18 5.507 2.689 2.689 0 1 0 21.18.129zM15.324 15.447c0 .471.314.66.852.66.67 0 1.297-.396 1.297-1.016v-.645c-.23.107-.379.141-1.107.24-.735.109-1.042.306-1.042.761zM12 2.818c-5.07 0-9.18 4.109-9.18 9.18 0 5.068 4.11 9.18 9.18 9.18 5.07 0 9.18-4.111 9.18-9.18 0-5.07-4.11-9.18-9.18-9.18zm-2.487 13.77H5.771v-6.023h.769v5.346h2.974v.677zm4.13 0h-.619v-.67c-.405.57-.811.793-1.446.793-.843 0-1.38-.463-1.38-1.182v-3.271h.686v3c0 .52.347.85.893.85.719 0 1.181-.578 1.181-1.461v-2.389h.686v4.33zm-.53-8.393c0-1.484 1.205-2.689 2.689-2.689s2.688 1.205 2.688 2.689-1.203 2.688-2.688 2.688-2.689-1.203-2.689-2.688zm5.567 7.856v.52c-.223.059-.33.074-.471.074-.34 0-.637-.238-.711-.57-.381.406-.918.637-1.471.637-.877 0-1.422-.463-1.422-1.248 0-.527.256-.916.76-1.123.266-.107.414-.141 1.389-.264.545-.066.719-.191.719-.48v-.182c0-.412-.348-.645-.967-.645-.645 0-.957.24-1.016.77h-.693c.041-1 .686-1.404 1.734-1.404 1.066 0 1.627.412 1.627 1.182v2.412c0 .215.133.338.373.338.041-.002.074-.002.149-.017z"/>
    </svg>
  </div>
  <span class="brand-icon__name">lua</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_r = {
  id: 'brand-r',
  name: 'R',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'r'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>R</title><path d="M12 2.746c-6.627 0-12 3.599-12 8.037 0 3.897 4.144 7.144 9.64 7.88V16.26c-2.924-.915-4.925-2.755-4.925-4.877 0-3.035 4.084-5.494 9.12-5.494 5.038 0 8.757 1.683 8.757 5.494 0 1.976-.999 3.379-2.662 4.272.09.066.174.128.258.216.169.149.25.363.372.544 2.128-1.45 3.44-3.437 3.44-5.631 0-4.44-5.373-8.038-12-8.038zm-2.111 4.99v13.516l4.093-.002-.002-5.291h1.1c.225 0 .321.066.549.25.272.22.715.982.715.982l2.164 4.063 4.627-.002-2.864-4.826s-.086-.193-.265-.383a2.22 2.22 0 00-.582-.416c-.422-.214-1.149-.434-1.149-.434s3.578-.264 3.578-3.826c0-3.562-3.744-3.63-3.744-3.63zm4.127 2.93l2.478.002s1.149-.062 1.149 1.127c0 1.165-1.149 1.17-1.149 1.17h-2.478zm1.754 6.119c-.494.049-1.012.079-1.54.088v1.807a16.622 16.622 0 002.37-.473l-.471-.891s-.108-.183-.248-.394c-.039-.054-.08-.098-.111-.137z"/>
    </svg>
  </div>
  <span class="brand-icon__name">r</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_julia = {
  id: 'brand-julia',
  name: 'Julia',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'julia'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Julia</title><path d="M11.138 17.569a5.569 5.569 0 1 1-11.138 0 5.569 5.569 0 1 1 11.138 0zm6.431-11.138a5.569 5.569 0 1 1-11.138 0 5.569 5.569 0 1 1 11.138 0zM24 17.569a5.569 5.569 0 1 1-11.138 0 5.569 5.569 0 1 1 11.138 0z"/>
    </svg>
  </div>
  <span class="brand-icon__name">julia</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_dart = {
  id: 'brand-dart',
  name: 'Dart',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'dart'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Dart</title><path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z"/>
    </svg>
  </div>
  <span class="brand-icon__name">dart</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_crystal = {
  id: 'brand-crystal',
  name: 'Crystal',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'crystal'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Crystal</title><path d="M23.964 15.266l-8.687 8.669c-.034.035-.086.052-.121.035L3.29 20.79c-.052-.017-.087-.052-.087-.086L.007 8.856c-.018-.053 0-.087.035-.122L8.728.065c.035-.035.087-.052.121-.035l11.866 3.18c.052.017.087.052.087.086l3.18 11.848c.034.053.016.087-.018.122zm-11.64-9.433L.667 8.943c-.017 0-.035.034-.017.052l8.53 8.512c.017.017.052.017.052-.017l3.127-11.64c.017 0-.018-.035-.035-.017Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">crystal</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_zig = {
  id: 'brand-zig',
  name: 'Zig',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'zig'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Zig</title><path d="m23.53 1.02-7.686 3.45h-7.06l-2.98 3.452h7.173L.47 22.98l7.681-3.607h7.065v-.002l2.978-3.45-7.148-.001 12.482-14.9zM0 4.47v14.901h1.883l2.98-3.45H3.451v-8h.942l2.824-3.45H0zm22.117 0-2.98 3.608h1.412v7.844h-.942l-2.98 3.45H24V4.47h-1.883z"/>
    </svg>
  </div>
  <span class="brand-icon__name">zig</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_nim = {
  id: 'brand-nim',
  name: 'Nim',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'nim'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Nim</title><path d="M12.095 3.2s-.92.778-1.857 1.55c-.964-.032-2.856.199-3.88.598C5.412 4.708 4.582 4 4.582 4s-.709 1.305-1.154 2.07c-.662.377-1.325.8-1.917 1.36C.824 7.14.026 6.782 0 6.77c.911 1.967 1.524 3.936 3.19 5.12 2.654-4.483 14.983-4.07 17.691-.025 1.75-.977 2.43-3.078 3.119-5.018-.075.026-1.012.362-1.619.61-.363-.423-1.217-1.072-1.702-1.385a96.008 96.008 0 00-1.131-2.122s-.794.632-1.715 1.322c-1.243-.246-2.747-.544-4.012-.47A52.988 52.988 0 0112.095 3.2zM.942 10.95l2.189 5.67c3.801 5.367 13.508 5.74 17.74.105 1.001-2.415 2.352-5.808 2.352-5.808-1.086 1.72-2.852 2.909-3.94 3.549-.774.453-2.558.727-2.558.727l-4.684-2.597-4.71 2.545s-1.761-.303-2.558-.701c-1.608-.92-2.69-2.004-3.83-3.49z"/>
    </svg>
  </div>
  <span class="brand-icon__name">nim</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_ocaml = {
  id: 'brand-ocaml',
  name: 'OCaml',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'ocaml'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>OCaml</title><path d="M12.178 21.637c-.085-.17-.187-.524-.255-.676-.067-.135-.27-.506-.37-.625-.22-.253-.27-.27-.338-.608-.12-.574-.405-1.588-.76-2.296-.187-.372-.49-.677-.761-.947-.236-.236-.777-.624-.878-.607-.895.169-1.166 1.046-1.587 1.739-.237.388-.473.71-.66 1.115-.167.371-.151.793-.439 1.115a2.952 2.952 0 00-.624 1.097c-.034.084-.101.929-.186 1.131l1.318-.084c1.233.085.877.557 2.787.456l3.022-.1a5.376 5.376 0 00-.27-.71zM20.96 1.539H3.023A3.02 3.02 0 000 4.56v6.587c.44-.152 1.047-1.08 1.25-1.3.337-.389.405-.895.574-1.2.389-.709.456-1.215 1.334-1.215.406 0 .575.1.845.473.186.253.523.743.675 1.064.186.371.474.86.609.962.1.068.185.136.27.17.135.05.253-.051.354-.12.118-.1.17-.286.287-.556.17-.39.339-.827.44-.997.169-.27.236-.608.422-.76.27-.236.641-.253.743-.27.557-.118.81.27 1.08.507.186.168.423.49.609.91.135.339.304.661.388.846.068.185.237.49.338.86.101.322.337.575.44.744 0 0 .152.406 1.03.778a7.505 7.505 0 00.81.286c.39.135.76.12 1.233.068.338 0 .524-.49.676-.878.084-.237.185-.895.236-1.081.05-.185-.085-.32.034-.49.135-.186.22-.203.287-.439.17-.523 1.114-.54 1.655-.54.456 0 .389.44 1.149.287.439-.085.86.05 1.318.185.388.102.76.22.98.473.134.17.489.997.134 1.031.033.033.067.118.118.151-.085.322-.422.085-.625.051-.253-.05-.44 0-.693.118-.439.187-1.063.17-1.452.49-.32.271-.32.861-.473 1.2 0 0-.422 1.063-1.317 1.722-.237.17-.692.574-1.672.726-.44.068-.86.068-1.318.05-.22-.016-.438-.016-.658-.016-.136 0-.575-.017-.558.034l-.05.119a.6.6 0 00.033.169c.017.1.017.185.034.27 0 .185-.017.388 0 .574.017.388.17.743.186 1.148.017.44.236.913.456 1.267.085.135.203.152.254.32.067.186 0 .406.033.609.118.794.355 1.638.71 2.364v.017c.439-.067.895-.236 1.47-.32 1.063-.153 2.532-.085 3.478-.17 2.399-.22 3.7.98 5.844.49V4.562a3.045 3.045 0 00-3.04-3.023zm-8.951 14.187c0-.034 0-.034 0 0zm-6.47 2.769c.17-.372.271-.778.406-1.15.135-.354.337-.86.693-1.046-.05-.05-.744-.068-.929-.085a7.406 7.406 0 01-.608-.084 22.976 22.976 0 01-1.15-.236c-.22-.051-.979-.322-1.13-.39-.39-.168-.642-.658-.93-.607-.185.034-.37.101-.49.287-.1.152-.134.423-.202.608-.084.203-.22.405-.32.608-.238.354-.626.676-.795 1.03-.033.085-.05.169-.084.254v4.07c.202.034.405.068.624.135 1.69.456 2.095.49 3.75.304l.152-.017c.118-.27.22-1.165.304-1.435.067-.22.153-.39.187-.591.033-.203 0-.406-.017-.59-.034-.491.354-.661.54-1.065z"/>
    </svg>
  </div>
  <span class="brand-icon__name">ocaml</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_fsharp = {
  id: 'brand-fsharp',
  name: 'F#',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'fsharp'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>F#</title><path d="M0 12 11.39.61v5.695L5.695 12l5.695 5.695v5.695L0 12zm7.322 0 4.068-4.068v8.136L7.322 12zM24 12 12.203.61v5.695L17.898 12l-5.695 5.695v5.695L24 12z"/>
    </svg>
  </div>
  <span class="brand-icon__name">fsharp</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_c = {
  id: 'brand-c',
  name: 'C',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'c'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>C</title><path d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z"/>
    </svg>
  </div>
  <span class="brand-icon__name">c</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_fortran = {
  id: 'brand-fortran',
  name: 'Fortran',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'fortran'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Fortran</title><path d="M19.536 0H4.464A4.463 4.463 0 0 0 0 4.464v15.073A4.463 4.463 0 0 0 4.464 24h15.073A4.463 4.463 0 0 0 24 19.536V4.464A4.463 4.463 0 0 0 19.536 0zm1.193 6.493v3.871l-.922-.005c-.507-.003-.981-.021-1.052-.041-.128-.036-.131-.05-.192-.839-.079-1.013-.143-1.462-.306-2.136-.352-1.457-1.096-2.25-2.309-2.463-.509-.089-2.731-.176-4.558-.177L10.13 4.7v5.82l.662-.033c.757-.038 1.353-.129 1.64-.252.306-.131.629-.462.781-.799.158-.352.262-.815.345-1.542.033-.286.07-.572.083-.636.024-.116.028-.117 1.036-.117h1.012v9.3h-2.062l-.035-.536c-.063-.971-.252-1.891-.479-2.331-.311-.601-.922-.871-2.151-.95a11.422 11.422 0 0 1-.666-.059l-.172-.027.02 2.926c.021 3.086.03 3.206.265 3.465.241.266.381.284 2.827.368.05.002.065.246.065 1.041v1.039H3.271v-1.039c0-.954.007-1.039.091-1.041.05-.001.543-.023 1.097-.049.891-.042 1.033-.061 1.244-.167a.712.712 0 0 0 .345-.328c.106-.206.107-.254.107-6.78 0-6.133-.006-6.584-.09-6.737a.938.938 0 0 0-.553-.436c-.104-.032-.65-.07-1.215-.086l-1.026-.027V2.622h17.458v3.871z"/>
    </svg>
  </div>
  <span class="brand-icon__name">fortran</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_assemblyscript = {
  id: 'brand-assemblyscript',
  name: 'AssemblyScript',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'assemblyscript'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>AssemblyScript</title><path d="M0 0v24h24V0h-9.225c0 1.406-1.04 2.813-2.756 2.813A2.766 2.766 0 019.234 0zm18.204 10.947c.707 0 1.314.137 1.82.412.517.264.96.717 1.33 1.361l-1.726 1.108c-.19-.338-.395-.58-.617-.728a1.422 1.422 0 00-.807-.222c-.327 0-.586.09-.776.27a.896.896 0 00-.285.68c0 .337.106.596.317.775.222.17.57.36 1.045.57l.554.238c.474.2.891.411 1.25.633.37.21.675.453.918.728.253.264.443.57.57.918.137.337.206.738.206 1.203a3 3 0 01-.285 1.33c-.18.38-.433.701-.76.965a3.419 3.419 0 01-1.171.601c-.443.127-.929.19-1.456.19a5.31 5.31 0 01-1.41-.174 4.624 4.624 0 01-1.139-.475 3.922 3.922 0 01-.886-.712 4.48 4.48 0 01-.602-.902L16.1 18.67c.242.39.527.712.855.966.337.253.78.38 1.33.38.463 0 .827-.1 1.091-.301.275-.211.412-.475.412-.792 0-.38-.143-.664-.428-.854-.285-.19-.68-.396-1.187-.618l-.554-.237a8.12 8.12 0 01-1.092-.554 3.64 3.64 0 01-.839-.696 2.887 2.887 0 01-.538-.903 3.375 3.375 0 01-.19-1.187c0-.411.074-.796.222-1.155a2.91 2.91 0 01.649-.934c.285-.264.628-.47 1.029-.617.4-.148.849-.222 1.345-.222zm-8.796.032h.19l4.922 10.858h-2.327l-.506-1.219H7.318l-.506 1.219H4.675zm.063 3.988a22.21 22.21 0 01-.206.697l-.205.649a6.979 6.979 0 01-.222.585l-.776 1.868h2.834l-.776-1.868a15.492 15.492 0 01-.237-.633 23.741 23.741 0 01-.412-1.298z"/>
    </svg>
  </div>
  <span class="brand-icon__name">assemblyscript</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_react = {
  id: 'brand-react',
  name: 'React',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'react'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
    </svg>
  </div>
  <span class="brand-icon__name">react</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_vuedotjs = {
  id: 'brand-vuedotjs',
  name: 'Vue.js',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'vuedotjs'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Vue.js</title><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">vuedotjs</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_angular = {
  id: 'brand-angular',
  name: 'Angular',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'angular'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Angular</title><path d="M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">angular</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_svelte = {
  id: 'brand-svelte',
  name: 'Svelte',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'svelte'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Svelte</title><path d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">svelte</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_nextdotjs = {
  id: 'brand-nextdotjs',
  name: 'Next.js',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'nextdotjs'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Next.js</title><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">nextdotjs</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_astro = {
  id: 'brand-astro',
  name: 'Astro',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'astro'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Astro</title><path d="M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944.856 1.026 2.043 1.352 3.272 1.535 1.897.283 3.76.177 5.522-.678.202-.098.388-.229.608-.36.166.473.209.95.151 1.437-.14 1.185-.738 2.1-1.688 2.794-.38.277-.782.525-1.175.787-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188 3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958-.106-.769-.472-1.113-1.161-1.133-.707-.02-1.267.411-1.415 1.09-.012.053-.028.104-.045.165h.002zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727l-5.516 14.99z"/>
    </svg>
  </div>
  <span class="brand-icon__name">astro</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_remix = {
  id: 'brand-remix',
  name: 'Remix',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'remix'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Remix</title><path d="M21.511 18.508c.216 2.773.216 4.073.216 5.492H15.31c0-.309.006-.592.011-.878.018-.892.036-1.821-.109-3.698-.19-2.747-1.374-3.358-3.55-3.358H1.574v-5h10.396c2.748 0 4.122-.835 4.122-3.049 0-1.946-1.374-3.125-4.122-3.125H1.573V0h11.541c6.221 0 9.313 2.938 9.313 7.632 0 3.511-2.176 5.8-5.114 6.182 2.48.497 3.93 1.909 4.198 4.694ZM1.573 24v-3.727h6.784c1.133 0 1.379.84 1.379 1.342V24Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">remix</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_preact = {
  id: 'brand-preact',
  name: 'Preact',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'preact'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Preact</title><path d="M 12,10.406 A 1.594,1.594 0 0 0 10.406,12 1.594,1.594 0 0 0 12,13.594 1.594,1.594 0 0 0 13.594,12 1.594,1.594 0 0 0 12,10.406 Z m 5.499,-4.33 a 2.998,2.998 0 0 1 0.643,0.054 1.668,1.668 0 0 1 0.48,0.172 1.085,1.085 0 0 1 0.29,0.235 1.032,1.032 0 0 1 0.185,0.315 1.454,1.454 0 0 1 0.084,0.452 c 0.007,0.195 -0.015,0.398 -0.058,0.603 -0.054,0.261 -0.14,0.521 -0.244,0.778 -0.137,0.334 -0.304,0.66 -0.49,0.978 -0.245,0.417 -0.52,0.818 -0.817,1.207 -0.145,0.191 -0.3,0.376 -0.455,0.561 -0.22,-0.238 -0.443,-0.472 -0.673,-0.7 a 23.61,23.61 0 0 0 -2.05,-1.797 l -0.23,0.296 0.23,-0.296 -0.018,-0.014 -0.461,0.592 0.018,0.014 a 22.864,22.864 0 0 1 1.984,1.74 c 0.241,0.237 0.475,0.48 0.703,0.73 -0.099,0.108 -0.194,0.22 -0.296,0.326 -0.099,0.104 -0.2,0.207 -0.301,0.308 l 0.53,0.53 c 0.106,-0.105 0.21,-0.212 0.313,-0.32 0.085,-0.088 0.164,-0.182 0.248,-0.272 0.065,0.078 0.135,0.152 0.198,0.231 a 13.317,13.317 0 0 1 0.909,1.262 c 0.211,0.336 0.404,0.681 0.564,1.036 a 5.23,5.23 0 0 1 0.293,0.806 3.019,3.019 0 0 1 0.102,0.637 c 0.008,0.178 -0.007,0.351 -0.05,0.508 -0.034,0.123 -0.087,0.239 -0.157,0.338 h -10e-4 c -0.068,0.098 -0.157,0.186 -0.26,0.256 -0.121,0.083 -0.264,0.146 -0.418,0.191 -0.188,0.054 -0.39,0.081 -0.6,0.09 -0.266,0.01 -0.538,-0.01 -0.814,-0.05 -0.357,-0.051 -0.713,-0.134 -1.067,-0.238 -0.464,-0.137 -0.92,-0.307 -1.369,-0.5 h -0.001 c -0.584,-0.253 -1.153,-0.543 -1.71,-0.86 L 12.708,16.26 c 0.578,-0.377 1.144,-0.77 1.686,-1.194 l -0.21,-0.27 0.211,0.27 0.018,-0.015 -0.463,-0.59 -0.017,0.014 c -0.695,0.542 -1.418,1.047 -2.168,1.505 A 18.53,18.53 0 0 1 9.938,16.963 C 9.465,17.182 8.984,17.378 8.494,17.539 A 8.68,8.68 0 0 1 7.352,17.835 C 7.066,17.887 6.781,17.921 6.499,17.925 6.277,17.928 6.061,17.912 5.856,17.87 5.681,17.834 5.518,17.778 5.376,17.698 5.265,17.635 5.166,17.556 5.086,17.464 5.007,17.373 4.944,17.265 4.901,17.149 4.85,17.012 4.823,16.857 4.817,16.696 a 2.54,2.54 0 0 1 0.058,-0.603 c 0.055,-0.261 0.14,-0.52 0.245,-0.777 a 7.704,7.704 0 0 1 0.49,-0.978 12.09,12.09 0 0 1 1.271,-1.767 c 0.232,0.251 0.469,0.497 0.712,0.737 a 23.645,23.645 0 0 0 2.02,1.765 l 0.461,-0.591 A 22.9,22.9 0 0 1 8.119,12.773 C 7.865,12.523 7.618,12.267 7.378,12.004 7.477,11.896 7.573,11.785 7.673,11.679 7.776,11.572 7.879,11.466 7.983,11.362 l -0.53,-0.53 C 7.345,10.94 7.238,11.05 7.132,11.16 7.047,11.249 6.967,11.343 6.884,11.433 6.829,11.367 6.77,11.305 6.715,11.238 6.386,10.832 6.077,10.411 5.799,9.975 5.585,9.637 5.391,9.292 5.228,8.935 5.102,8.66 4.995,8.38 4.92,8.097 4.863,7.882 4.826,7.669 4.818,7.46 A 1.67,1.67 0 0 1 4.868,6.953 C 4.902,6.829 4.955,6.714 5.025,6.614 H 5.026 C 5.094,6.516 5.184,6.428 5.286,6.358 A 1.446,1.446 0 0 1 5.705,6.168 C 5.892,6.113 6.094,6.086 6.304,6.078 a 4.545,4.545 0 0 1 0.814,0.048 7.708,7.708 0 0 1 1.067,0.24 12.092,12.092 0 0 1 1.369,0.5 17.248,17.248 0 0 1 1.736,0.874 24.003,24.003 0 0 0 -1.694,1.202 l 0.462,0.59 c 0.683,-0.534 1.393,-1.031 2.13,-1.484 0.594,-0.363 1.203,-0.697 1.83,-0.99 0.474,-0.222 0.956,-0.42 1.448,-0.583 A 8.816,8.816 0 0 1 16.612,6.172 C 16.91,6.116 17.207,6.08 17.499,6.076 Z m -0.01,-0.75 -0.001,0 C 17.142,5.331 16.804,5.373 16.474,5.434 A 9.546,9.546 0 0 0 15.229,5.763 14.202,14.202 0 0 0 13.7,6.379 C 13.117,6.651 12.554,6.961 12.004,7.289 11.883,7.216 11.761,7.144 11.637,7.074 11.06,6.745 10.466,6.442 9.852,6.177 9.38,5.974 8.897,5.792 8.397,5.646 8.017,5.534 7.625,5.442 7.225,5.384 6.916,5.34 6.599,5.316 6.275,5.329 6.021,5.339 5.759,5.372 5.499,5.446 5.281,5.51 5.063,5.602 4.863,5.74 A 1.774,1.774 0 0 0 4.146,6.754 C 4.078,7.001 4.059,7.251 4.069,7.491 a 3.728,3.728 0 0 0 0.127,0.798 6.016,6.016 0 0 0 0.351,0.959 9.548,9.548 0 0 0 0.62,1.128 14.203,14.203 0 0 0 0.967,1.335 c 0.08,0.098 0.166,0.19 0.248,0.286 C 6.193,12.219 6.007,12.443 5.83,12.676 5.519,13.084 5.226,13.51 4.963,13.958 A 8.44,8.44 0 0 0 4.425,15.033 5.28,5.28 0 0 0 4.142,15.941 C 4.089,16.19 4.059,16.453 4.069,16.723 a 2.182,2.182 0 0 0 0.13,0.688 v 10e-4 a 1.775,1.775 0 0 0 0.81,0.94 2.403,2.403 0 0 0 0.697,0.253 3.699,3.699 0 0 0 0.805,0.07 5.97,5.97 0 0 0 0.977,-0.102 l 10e-4,-0.001 a 9.412,9.412 0 0 0 1.24,-0.32 c 0.523,-0.173 1.031,-0.38 1.526,-0.61 0.599,-0.278 1.178,-0.593 1.742,-0.93 0.121,0.072 0.243,0.144 0.366,0.214 a 17.99,17.99 0 0 0 1.785,0.898 12.832,12.832 0 0 0 1.455,0.53 c 0.38,0.112 0.772,0.204 1.172,0.262 a 5.284,5.284 0 0 0 0.95,0.056 c 0.254,-0.01 0.516,-0.044 0.776,-0.118 0.218,-0.063 0.436,-0.156 0.636,-0.294 a 1.775,1.775 0 0 0 0.717,-1.014 c 0.068,-0.248 0.087,-0.497 0.077,-0.736 -0.011,-0.277 -0.06,-0.544 -0.127,-0.799 -0.085,-0.322 -0.202,-0.629 -0.335,-0.923 -0.178,-0.393 -0.387,-0.767 -0.612,-1.127 -0.294,-0.466 -0.618,-0.908 -0.959,-1.333 -0.09,-0.111 -0.188,-0.216 -0.28,-0.324 0.189,-0.222 0.374,-0.447 0.552,-0.679 0.311,-0.409 0.604,-0.835 0.867,-1.283 A 8.441,8.441 0 0 0 19.575,8.967 5.277,5.277 0 0 0 19.858,8.06 C 19.911,7.81 19.941,7.547 19.931,7.277 19.924,7.051 19.886,6.817 19.801,6.589 V 6.588 a 1.775,1.775 0 0 0 -0.81,-0.94 C 18.767,5.522 18.529,5.444 18.294,5.396 A 3.7,3.7 0 0 0 17.489,5.326 Z M 12,0 22.392,6 V 18 L 12,24 1.607,18 V 6 Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">preact</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_emberdotjs = {
  id: 'brand-emberdotjs',
  name: 'Ember.js',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'emberdotjs'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Ember.js</title><path d="M0 0v24h24V0H0zm12.29 4.38c1.66-.03 2.83.42 3.84 1.85 2.25 5.58-6 8.4-6 8.4s-.23 1.48 2.02 1.42c2.78 0 5.7-2.15 6.81-3.06a.66.66 0 01.9.05l.84.87a.66.66 0 01.01.9c-.72.8-2.42 2.46-4.97 3.53 0 0-4.26 1.97-7.13.1a4.95 4.95 0 01-2.38-3.83s-2.08-.11-3.42-.63c-1.33-.52.01-2.1.01-2.1s.42-.65 1.2 0 2.24.36 2.24.36c.13-1.03.35-2.38.98-3.81 1.34-3 3.38-4.01 5.05-4.05zm.33 2.8c-1.1.07-2.8 1.78-2.88 4.93 0 0 .75.23 2.41-.91 1.67-1.14 2-2.97 1.11-3.81a.82.82 0 00-.64-.21Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">emberdotjs</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_backbonedotjs = {
  id: 'brand-backbonedotjs',
  name: 'Backbone.js',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'backbonedotjs'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Backbone.js</title><path d="M2.34 0v10.45l3.2-1.83V5.27l2.93 1.67 3.01-1.72L2.34 0zm19.31 0L12.5 5.22l3.02 1.73 2.94-1.68v3.35l3.2 1.83V0h-.01zm-9.9 5.64-9.4 5.38V24l9.4-5.36v-3.76l-6.21 3.56v-5.5l6.21-3.54V5.64zm.5 0V9.4l6.22 3.54v5.5l-6.22-3.56v3.76L21.66 24V11.02l-9.41-5.38zM7.7 12.3l-1.65.94v1.86l2.17 1.24 3.28-1.87-3.8-2.17zm8.61 0-3.8 2.16 3.28 1.88 2.17-1.24v-1.86l-1.65-.94z"/>
    </svg>
  </div>
  <span class="brand-icon__name">backbonedotjs</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_gatsby = {
  id: 'brand-gatsby',
  name: 'Gatsby',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'gatsby'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Gatsby</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 2.571c3.171 0 5.915 1.543 7.629 3.858l-1.286 1.115C16.886 5.572 14.571 4.286 12 4.286c-3.343 0-6.171 2.143-7.286 5.143l9.857 9.857c2.486-.857 4.373-3 4.973-5.572h-4.115V12h6c0 4.457-3.172 8.228-7.372 9.17L2.83 9.944C3.772 5.743 7.543 2.57 12 2.57zm-9.429 9.6l9.344 9.258c-2.4-.086-4.801-.943-6.601-2.743-1.8-1.8-2.743-4.201-2.743-6.515z"/>
    </svg>
  </div>
  <span class="brand-icon__name">gatsby</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_gridsome = {
  id: 'brand-gridsome',
  name: 'Gridsome',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'gridsome'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Gridsome</title><path d="M12.026.017l-.108.001C4.905.135-.102 5.975.002 11.956.025 19.286 6.02 24.13 12.083 23.98c7.208-.2 12.323-6.461 11.892-12.05a2.197 2.197 0 0 0-2.192-2.001h-3.15a2.155 2.155 0 0 0-2.161 2.147c0 1.187.967 2.148 2.16 2.148h.788c-.87 2.791-3.62 5.455-7.44 5.56-3.803.095-7.61-2.904-7.768-7.569a2.173 2.173 0 0 0 0-.159c-.148-3.72 2.895-7.637 7.88-7.845a2.096 2.096 0 0 0 2.003-2.183 2.095 2.095 0 0 0-2.07-2.011zm-.018 9.911a2.15 2.15 0 0 0-2.146 2.151 2.15 2.15 0 0 0 2.146 2.152 2.15 2.15 0 0 0 2.147-2.152 2.15 2.15 0 0 0-2.147-2.15Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">gridsome</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_eleventy = {
  id: 'brand-eleventy',
  name: 'Eleventy',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'eleventy'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Eleventy</title><path d="M3.398 12V0h17.204v24H3.398zm13.17 6.07a1.07 1.07 0 00.373-.107c.432-.213.68-.672.877-1.626.076-.372 1.195-6.168 1.209-6.263.026-.186-.008-.382-.084-.476a.325.325 0 00-.087-.064l-.06-.031h-.291c-.253 0-.298 0-.348.02-.113.039-.207.156-.255.316-.011.038-.168.881-.348 1.873l-.328 1.802-.046-.21c-.56-2.547-.764-3.452-.794-3.532a.383.383 0 00-.103-.16c-.105-.107-.117-.11-.567-.11-.411 0-.422 0-.5.074-.086.079-.122.216-.111.42.006.115.045.27.688 2.784.663 2.587.751 2.943.787 3.177.046.3-.05.713-.208.893-.032.037-.037.039-.084.032-.028 0-.12-.027-.204-.051-.268-.078-.362-.072-.462.028-.096.096-.137.248-.138.51 0 .256.028.34.159.473.131.133.324.208.595.23.164.012.22.012.33-.001zm-1.896-1.712a.31.31 0 00.16-.192c.02-.058.022-.098.022-.356 0-.255-.003-.299-.021-.354-.04-.121-.136-.196-.278-.217-.041-.01-.2-.01-.355-.01-.365-.001-.378-.01-.446-.184-.068-.18-.096-.326-.113-.602a85.799 85.799 0 01-.012-1.94v-1.765h.35c.454 0 .507-.01.602-.113a.465.465 0 00.102-.24 3.273 3.273 0 000-.534c-.026-.16-.099-.271-.211-.322-.057-.025-.065-.026-.45-.03h-.392l-.003-1.22c-.003-1.09-.005-1.227-.021-1.278a.378.378 0 00-.201-.247c-.052-.024-.072-.025-.32-.029-.27 0-.356 0-.429.038-.087.042-.148.133-.185.278-.014.054-.032.346-.076 1.262l-.06 1.194s-.08 0-.18.01c-.206.01-.263.022-.327.086-.092.092-.12.19-.127.455-.01.334.02.487.115.588.075.081.134.1.345.106l.173.01v1.785c0 1.7.006 2.019.034 2.274.041.37.13.709.241.928.194.38.544.617.988.668h1.005l.07-.04zm-7.447 0c.098-.053.16-.154.2-.332.016-.077.018-.401.018-4.518 0-4.184-.001-4.44-.02-4.51-.05-.194-.19-.29-.378-.26-.035.01-.344.084-.686.175-.343.09-.684.18-.758.198-.17.043-.214.062-.281.126-.105.098-.122.185-.122.606 0 .416.016.5.12.604.094.095.189.1.456.03.103-.026.193-.048.2-.048.01 0 .014.784.017 3.763.003 3.436.005 3.77.021 3.84.048.202.113.296.236.34.034.013.133.016.487.014.435 0 .445 0 .49-.027zm3.203 0c.092-.046.152-.135.197-.29l.024-.084.003-4.435c.002-3.194 0-4.456-.01-4.509-.033-.2-.145-.308-.322-.308-.066 0-.198.03-.857.204-.56.147-.799.214-.849.239a.34.34 0 00-.17.184c-.024.06-.024.071-.024.479 0 .415 0 .417.026.483a.362.362 0 00.083.12c.1.1.172.105.456.034a5.46 5.46 0 01.208-.05c.008 0 .012 1.202.014 3.791l.003 3.79.026.086a.48.48 0 00.135.23c.078.062.085.063.57.06.414 0 .447 0 .487-.024z"/>
    </svg>
  </div>
  <span class="brand-icon__name">eleventy</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_tailwindcss = {
  id: 'brand-tailwindcss',
  name: 'Tailwind CSS',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'tailwindcss'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
    </svg>
  </div>
  <span class="brand-icon__name">tailwindcss</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_bootstrap = {
  id: 'brand-bootstrap',
  name: 'Bootstrap',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'bootstrap'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Bootstrap</title><path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"/>
    </svg>
  </div>
  <span class="brand-icon__name">bootstrap</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_sass = {
  id: 'brand-sass',
  name: 'Sass',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'sass'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Sass</title><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"/>
    </svg>
  </div>
  <span class="brand-icon__name">sass</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_vite = {
  id: 'brand-vite',
  name: 'Vite',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'vite'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Vite</title><path d="M13.056 23.238a.57.57 0 0 1-1.02-.355v-5.202c0-.63-.512-1.143-1.144-1.143H5.148a.57.57 0 0 1-.464-.903l3.777-5.29c.54-.753 0-1.804-.93-1.804H.57a.574.574 0 0 1-.543-.746.6.6 0 0 1 .08-.157L5.008.78a.57.57 0 0 1 .467-.24h14.589a.57.57 0 0 1 .466.903l-3.778 5.29c-.54.755 0 1.806.93 1.806h5.745c.238 0 .424.138.513.322a.56.56 0 0 1-.063.603z"/>
    </svg>
  </div>
  <span class="brand-icon__name">vite</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_webpack = {
  id: 'brand-webpack',
  name: 'Webpack',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'webpack'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Webpack</title><path d="M22.1987 18.498l-9.7699 5.5022v-4.2855l6.0872-3.3338 3.6826 2.117zm.6683-.6026V6.3884l-3.5752 2.0544v7.396zm-21.0657.6026l9.7699 5.5022v-4.2855L5.484 16.3809l-3.6826 2.117zm-.6683-.6026V6.3884l3.5751 2.0544v7.396zm.4183-12.2515l10.0199-5.644v4.1434L5.152 7.6586l-.0489.028zm20.8975 0l-10.02-5.644v4.1434l6.4192 3.5154.0489.028 3.5518-2.0427zm-10.8775 13.096l-6.0056-3.2873V8.9384l6.0054 3.4525v6.349zm.8575 0l6.0053-3.2873V8.9384l-6.0053 3.4525zM5.9724 8.1845l6.0287-3.3015L18.03 8.1845l-6.0288 3.4665z"/>
    </svg>
  </div>
  <span class="brand-icon__name">webpack</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_esbuild = {
  id: 'brand-esbuild',
  name: 'esbuild',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'esbuild'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>esbuild</title><path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM6.718 5.282L13.436 12l-6.718 6.718-2.036-2.036L9.364 12 4.682 7.318zm7.2 0L20.636 12l-6.718 6.718-2.036-2.036L16.564 12l-4.682-4.682z"/>
    </svg>
  </div>
  <span class="brand-icon__name">esbuild</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_swc = {
  id: 'brand-swc',
  name: 'SWC',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'swc'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>SWC</title><path d="M7.063 7.797a.99.99 0 0 0-.7 1.69l3.987 3.986a.42.42 0 0 1 .093.48.42.42 0 0 1-.408.272.44.44 0 0 1-.312-.13L4.135 8.509a2.405 2.405 0 0 0-1.711-.71c-.507 0-.99.152-1.395.436a2.443 2.443 0 0 0-.994 2.403c.084.487.32.934.678 1.293L2.25 13.47c.183.183.14.379.098.48a.422.422 0 0 1-.409.274h-.695a.987.987 0 1 0 0 1.976h.705c.507 0 .987-.149 1.393-.433a2.449 2.449 0 0 0 .994-2.405 2.403 2.403 0 0 0-.678-1.293l-1.54-1.54a.42.42 0 0 1-.096-.483.42.42 0 0 1 .408-.272c.116 0 .226.045.31.13l5.588 5.587a2.405 2.405 0 0 0 1.711.71 2.379 2.379 0 0 0 1.996-1.048l.342.34a2.404 2.404 0 0 0 1.71.711h.05a2.41 2.41 0 0 0 1.392-.435c.374-.265.664-.631.842-1.059.176-.43.232-.896.152-1.346a2.403 2.403 0 0 0-.677-1.293l-1.541-1.539a.42.42 0 0 1-.096-.482.422.422 0 0 1 .408-.274h1.053a2.402 2.402 0 0 0-.008.862c.084.487.32.934.678 1.293l3.562 3.562a2.406 2.406 0 0 0 1.711.711c1.316 0 2.39-1.07 2.387-2.389a.99.99 0 1 0-1.979 0 .409.409 0 0 1-.408.409.436.436 0 0 1-.31-.13l-3.563-3.562a.422.422 0 0 1-.097-.482.422.422 0 0 1 .408-.274h.593a.987.987 0 1 0 0-1.976h-4.027c-.507 0-.989.15-1.394.435a2.443 2.443 0 0 0-.994 2.403c.084.487.319.934.677 1.293l1.537 1.54a.42.42 0 0 1 .096.483.417.417 0 0 1-.406.271h-.05a.436.436 0 0 1-.311-.128l-2.022-2.02-.004-.006-3.984-3.982a.991.991 0 0 0-.7-.291zm-4.64.867c.416 0 .806.16 1.1.455l5.59 5.588c.247.247.575.383.924.383a1.29 1.29 0 0 0 1.209-.807c.205-.497.1-1.04-.281-1.422L6.976 8.875a.12.12 0 0 1 0-.174c.05-.05.127-.05.176 0l6.006 6.006c.247.247.575.383.924.383h.05a1.29 1.29 0 0 0 1.21-.807 1.288 1.288 0 0 0-.285-1.424l-1.541-1.54a1.53 1.53 0 0 1-.336-1.694 1.533 1.533 0 0 1 1.437-.959h4.027c.07 0 .124.054.124.123 0 .07-.054.123-.124.123h-.593a1.29 1.29 0 0 0-1.21.807 1.288 1.288 0 0 0 .286 1.424l3.562 3.564c.248.247.576.383.924.383.702 0 1.274-.571 1.274-1.273 0-.07.055-.124.125-.124.069 0 .123.054.123.124a1.52 1.52 0 0 1-1.522 1.519c-.415 0-.805-.16-1.1-.455l-3.562-3.563a1.53 1.53 0 0 1-.336-1.693 1.56 1.56 0 0 1 .586-.713h-2.584a1.29 1.29 0 0 0-1.209.807 1.284 1.284 0 0 0 .283 1.424l1.541 1.54a1.53 1.53 0 0 1 .336 1.694 1.53 1.53 0 0 1-1.435.959h-.051c-.415 0-.805-.16-1.1-.455l-1.422-1.42c.065.3.034.614-.09.916a1.53 1.53 0 0 1-1.435.959c-.415 0-.807-.16-1.102-.455L3.346 9.293a1.297 1.297 0 0 0-.924-.383 1.29 1.29 0 0 0-1.21.807 1.288 1.288 0 0 0 .284 1.424l1.54 1.54a1.53 1.53 0 0 1 .337 1.694 1.53 1.53 0 0 1-1.436.959h-.693c-.07 0-.123-.054-.123-.123s.054-.123.123-.123h.695a1.29 1.29 0 0 0 1.21-.807 1.284 1.284 0 0 0-.286-1.423l-1.539-1.541a1.53 1.53 0 0 1-.336-1.692c.245-.593.793-.96 1.436-.96z"/>
    </svg>
  </div>
  <span class="brand-icon__name">swc</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_gulp = {
  id: 'brand-gulp',
  name: 'gulp',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'gulp'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>gulp</title><path d="M5.936 4.694c-.336 0-.675.078-1.013.222-.34.145-.676.346-1.007.605a7.133 7.133 0 00-.97.917c-.313.354-.61.745-.887 1.164-.276.42-.533.867-.78 1.32h-.001v.001c-.239.473-.448.96-.63 1.455-.18.496-.324.993-.438 1.497-.11.5-.178.987-.2 1.465a.515.515 0 00-.01.091v.095c0 .261.038.53.075.776v.002l.001.002c.068.262.175.504.31.717a1.7 1.7 0 00.537.518c.217.138.474.207.776.207.263 0 .536-.06.817-.185.279-.125.557-.288.834-.479.268-.192.536-.412.794-.66.207-.192.396-.392.583-.59l-.196.608c-.085.293-.18.576-.257.853-.085.274-.152.52-.209.738-.057.216-.096.362-.096.456v.215c0 .241.025.411.104.518a.398.398 0 00.333.152.435.435 0 00.265-.095c.081-.06.15-.137.219-.224v-.002l.002-.001c.057-.087.115-.18.164-.278.05-.101.078-.19.107-.269v-.001l.067-.24.143-.495.19-.662c.076-.247.142-.495.227-.747l.225-.75c.072-.244.14-.465.203-.661.063-.2.116-.362.16-.493.02-.065.04-.116.054-.154l.014-.032.04.018.018-.048c.076-.218.151-.427.227-.626.076-.2.152-.4.21-.597a3.762 3.762 0 00.22-1.29.637.637 0 00-.05-.255.44.44 0 00-.124-.18.499.499 0 00-.174-.1.622.622 0 00-.19-.03.655.655 0 00-.378.127c-.129.086-.225.229-.297.422v.001l-.55 1.764a3.91 3.91 0 01-.317.513v.001a9.407 9.407 0 01-1.71 1.832c-.207.17-.404.301-.6.404a1.063 1.063 0 01-.5.146.48.48 0 01-.312-.103.637.637 0 01-.204-.275 1.582 1.582 0 01-.102-.387 3.182 3.182 0 01-.028-.422c0-.413.066-.874.198-1.394.132-.52.312-1.04.539-1.579.227-.54.492-1.06.786-1.571.293-.511.605-.965.926-1.362.32-.396.64-.706.97-.95.327-.244.62-.362.902-.362a.88.88 0 01.497.145c.152.098.29.263.42.496v-.001c.134.259.269.46.385.606.12.15.259.227.408.227a.51.51 0 00.416-.208c.115-.138.17-.327.17-.556 0-.096-.01-.2-.03-.307a.87.87 0 00-.14-.334c-.314-.47-.651-.807-1.01-1.024H7.06a2.216 2.216 0 00-1.125-.317zm10.961.855a.802.802 0 00-.41.12h-.001l-.001.001a.85.85 0 00-.318.43l-1.889 4.758-.417 1.045c-.153.38-.295.76-.447 1.148a4.792 4.792 0 00-.176.551 4.995 4.995 0 01-.257.215c-.207.16-.403.281-.589.365h-.002c-.184.093-.339.129-.463.129-.082 0-.137-.02-.172-.053-.035-.033-.056-.084-.056-.166 0-.185.028-.39.084-.615.057-.22.132-.451.217-.683a8.73 8.73 0 01.274-.69l.276-.644c.086-.2.153-.382.21-.534a1.15 1.15 0 00.089-.377.71.71 0 00-.143-.437.474.474 0 00-.39-.19.466.466 0 00-.378.179 1.514 1.514 0 00-.254.42 3.917 3.917 0 00-.201.537c-.056.19-.131.368-.207.535-.113.25-.246.524-.416.826a6.64 6.64 0 01-.565.849c-.207.26-.432.479-.675.654-.24.175-.495.257-.75.257-.083 0-.138-.03-.167-.088a.472.472 0 01-.052-.225c.01-.204.046-.419.112-.643.066-.222.141-.443.226-.66.085-.21.18-.424.283-.625.105-.201.2-.391.294-.56v-.001l.248-.47c.068-.136.107-.243.135-.33l.001-.002v-.001c.01-.04.021-.09.021-.145a.419.419 0 00-.054-.214v-.001l-.001-.001a.526.526 0 00-.335-.238.65.65 0 00-.588.103c-.132.091-.231.232-.319.426a23.085 23.085 0 00-.79 1.817c-.19.505-.323.914-.418 1.229a4.666 4.666 0 00-.163.7v.001l-.02.231v.002c0 .214.029.4.09.55v.002c.068.147.148.266.249.357a.893.893 0 00.36.191c.132.04.27.059.41.059.311 0 .598-.058.861-.155s.501-.232.714-.396c.21-.163.4-.346.563-.548.12-.14.21-.285.3-.427-.04.22-.078.437-.078.614 0 .33.063.57.202.717a.695.695 0 00.523.214c.208 0 .439-.057.694-.17.253-.113.51-.262.77-.446.065-.045.127-.093.19-.141l.005.036a1 1 0 00.15.35h.001l.001.002c.08.099.17.18.291.24.123.062.273.091.45.091.253 0 .516-.059.787-.175h.002c.268-.125.537-.279.805-.48.268-.201.545-.44.812-.697l.01-.009c-.046.106-.09.212-.138.319-.219.484-.442.972-.674 1.471-.233.5-.466.994-.684 1.488l-.001.003-.001.002a3.93 3.93 0 01-.104.278c-.036.092-.085.188-.115.298v.001c-.037.1-.075.198-.095.306-.03.11-.04.217-.04.315 0 .208.059.367.172.447a.67.67 0 00.398.115c.122 0 .234-.03.335-.08v-.001h.001a.95.95 0 00.263-.22c.076-.09.14-.192.198-.308.059-.117.107-.242.154-.365l.002-.004v-.004c.008-.037.037-.121.084-.244l.162-.436.19-.512.199-.522.17-.435c.048-.124.077-.21.095-.255v-.001c.019-.038.048-.095.085-.189l.133-.313.161-.37.172-.38.142-.342.103-.226.001-.001c.085-.17.188-.358.302-.566v-.001c.123-.207.255-.405.396-.612v-.001c.152-.2.302-.397.463-.585.161-.187.33-.347.5-.498.173-.14.346-.262.521-.345a1.14 1.14 0 01.499-.128c.086 0 .143.018.178.039a.135.135 0 01.042.103c0 .08-.043.207-.144.353v.001c-.104.16-.226.33-.377.519-.162.19-.323.389-.503.597-.18.21-.352.419-.514.628a6.18 6.18 0 00-.412.603v.001a1.518 1.518 0 00-.205.53v.007a.193.193 0 01-.004.022c-.003.01-.006.014-.006.035v.057c0 .257.092.465.274.606.183.152.441.22.76.22.349 0 .67-.068.97-.204.298-.134.605-.316.92-.556h.001c.315-.236.64-.517.991-.843.341-.325.739-.685 1.184-1.08a.847.847 0 00.262-.352c.059-.138.089-.275.089-.41a.635.635 0 00-.082-.324.278.278 0 00-.248-.148.369.369 0 00-.164.043c-.053.026-.109.06-.17.101-.104.033.017.063.03.108-.538.481-1.004.887-1.373 1.206-.38.332-.699.588-.946.788a5.893 5.893 0 01-.574.41c-.132.079-.233.117-.289.117-.078 0-.132-.02-.156-.043a.142.142 0 01-.043-.108c0-.007.01-.036.035-.075.026-.04.065-.091.117-.152l.398-.465c.162-.181.324-.381.504-.6.18-.22.35-.447.502-.682.16-.23.285-.467.39-.7.101-.233.156-.455.156-.666a.837.837 0 00-.106-.426.92.92 0 00-.277-.3c-.11-.08-.238-.14-.375-.181h-.001a1.557 1.557 0 00-1.043.073 3.064 3.064 0 00-.598.332 5.677 5.677 0 00-.565.45 9.89 9.89 0 00-.38.378l.036-.176c.015-.073.025-.141.034-.207v-.001c.01-.068.013-.116.013-.149a.529.529 0 00-.126-.373v-.001h-.002c-.087-.09-.222-.129-.4-.129-.122 0-.24.07-.34.19a2.18 2.18 0 00-.263.418 4.225 4.225 0 00-.202.48l-.133.378v.001c-.046.159-.097.321-.15.485-.014.004-.027.008-.041.014a.33.33 0 00-.136.089l.003-.003c-.118.114-.251.247-.399.389-.147.142-.303.284-.464.426-.162.133-.326.275-.49.407-.162.13-.32.245-.471.345-.15.101-.29.18-.419.241a.776.776 0 01-.309.088c-.06 0-.085-.014-.1-.042h-.001a.311.311 0 01-.032-.155c0-.113.02-.243.064-.39.042-.146.086-.274.13-.385l.028-.03.374-.952c.142-.365.294-.746.465-1.152l.513-1.254c.17-.427.342-.84.503-1.234l.475-1.102c.142-.336.266-.619.37-.848l-.001.002c.059-.117.097-.227.135-.32v-.002a.934.934 0 00.055-.297c0-.196-.061-.35-.18-.443a.6.6 0 00-.384-.133Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">gulp</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_babel = {
  id: 'brand-babel',
  name: 'Babel',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'babel'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Babel</title><path d="M15.76 0c-1.603.147-3.719.713-6.317 1.719a22.366 22.366 0 01-2.44 1.539l.01.158c.064 0 .136-.043.24-.096.106-.01.169.032.169.137l.168-.094.084-.011.01.074c.01.073-.566.523-1.707 1.33l.093.146-.084.012-.177-.064c0 .052-.073.085-.24.095l.01.084.189.21a.673.673 0 01-.252-.053c-.367.031-.734.303-1.09.806l.094.147c.314-.283.492-.43.544-.43l.022.23c-.052 0-.136.042-.24.094l.199.295A5.86 5.86 0 016.29 5.291c.23.063.346.125.346.209l.168-.01c1.225-.911 2.44-1.562 3.644-1.97l.012.158c-.22.335-.377.501-.461.511.01.116.052.21.115.305.021.21-.524 1.583-1.635 4.139-2.535 5.93-4.651 10.307-6.359 13.156 0 .052.041.136.094.23.419-.104.691-.197.806-.302l.096-.012.01.158.158-.011.166-.094c0 .052.063.073.168.062l.012.159c.01.157-.075.397-.274.722-.178.2-.355.607-.554 1.225l.01.074.158-.01c.68-.764 1.204-1.52 1.56-2.254 2.001-.586 3.52-1.162 4.578-1.728 1.058-.094 1.876-.365 2.42-.826l-.011-.084-.399.115-.094.01-.01-.084c.776-.116 1.32-.293 1.614-.524 1.519-1.173 2.66-2 3.435-2.492 2.4-1.76 3.531-3.457 3.395-5.07-.01-.168-.545-.828-1.582-1.98-.021-.22.345-.535 1.078-.954l2.086-1.834c.46-.597.744-1.56.838-2.89l-.031-.315c-.084-.932-.756-1.687-2.034-2.264C19.06.303 17.708.031 15.76 0zm2.525 1.037c1.55.063 2.347.335 2.389.817l-.063.158-2.326-.975zm-1.482 1.317c1.063-.016 1.617.267 1.672.863l.156-.012-.031-.398.168-.01c.408.22.627.492.648.816.021.22-.094.494-.355.819-.105.01-.168-.064-.178-.221l-.168.012-.041.47c-.702 1.048-1.205 1.582-1.52 1.614-.283.387-.462.587-.535.597-.22.262-.816.712-1.8 1.34-.325.032-1.531.493-3.616 1.404a.595.595 0 00-.334-.052l-.012-.147c-.02-.304.107-.681.41-1.142.158-.86.335-1.352.534-1.467l1.738-3.906c-.02-.241.347-.43 1.111-.555l.252-.022.02.221a50.387 50.387 0 011.394-.2c.173-.014.335-.022.487-.024zm3.619.39h.027c.139.012.288.263.446.744l.01.147c-.085.01-.24-.242-.471-.744l-.012-.147zm-9.836 2.483h.072l.022.23c-.074.01-.177.116-.303.336l-.012-.156c.147-.178.22-.316.22-.41zM5.6 5.354l.01.072c-.053 0-.136.043-.24.095l-.085.01-.01-.146.325-.031zM9.885 6.86l.031.315-.084.01-.031-.313.084-.012zm-.2.567c-.02.262-.084.397-.22.408l-.084.01c.094-.178.147-.303.137-.397l.168-.021zm-.345.816l.01.074-.147.25-.158.012-.01-.074c.157-.01.231-.093.22-.25l.085-.012zm-.358.735l-.04.386-.085.01-.03-.387.155-.01zm8.497.28l.345.212c.01.104-.042.167-.146.177-.147-.094-.262-.136-.346-.136l-.021-.23.168-.022zm-6.653.891l.012.147-.326.033-.01-.148.324-.032zm5.363.545c.23.105.347.21.358.293l.01.075c-.22.02-.42-.095-.608-.346l.24-.022zm2.6.252c.178.074.261.148.272.221l.052.617c-.073.168-.146.252-.23.252l-.094-1.09zm-4.195.065c.84-.014 1.482.184 1.922.605l.03.315c-.376 1.09-.795 1.719-1.245 1.918l-2.096 1.666c-1.56 1.026-2.4 1.538-2.525 1.548-2.483 1.373-4.032 2.075-4.63 2.127l-.095.01c.084-.293 1.185-2.555 3.322-6.808.943-.084 2.43-.525 4.452-1.32l.492-.042c.128-.01.253-.017.373-.02zm-3.055.49l.01.074-.334.031-.012-.074.336-.031zm-5.226 5.07c-.105.535-.221.808-.336.819l-.01-.075c-.021-.272.094-.513.346-.744zm7.101.336l.01.147c.01.063-.23.261-.701.607-1.394.681-2.21 1.152-2.452 1.393-1.508.523-2.252.849-2.242.974-1.34.535-2.22.923-2.638 1.164-.095.01-.241-.031-.43-.115-.021-.272.093-.494.365-.672.23-.02.463.011.672.106.251-.126.68-.274 1.299-.42l-.012-.156-.492.04c.063-.083.535-.303 1.436-.67l.251-.02.01.073c-.419.032-.66.167-.713.387.01.094.064.147.168.137.304-.21.461-.324.461-.356.608-.115 2.274-.995 5.008-2.619zm-7.584.723l.01.072c.01.105-.042.17-.147.18l-.01-.074c-.01-.095.042-.157.147-.178zm3.77.937c.089-.002.139.049.148.131-.199.021-.566.178-1.121.492l-.084.01-.01-.156a1.586 1.586 0 001.026-.47c.014-.003.028-.006.04-.007zm-3.664 1.243l.01.082c-.064 0-.138.043-.243.095l-.156.01c-.01-.073.032-.136.137-.168l.252-.02zm-1.918.953l.177.072c-.063.471-.198.713-.44.734a1.076 1.076 0 00-.513-.105l-.021-.23c-.01-.095.043-.147.158-.178.105-.01.167.061.178.218.282-.345.44-.511.46-.511Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">babel</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_postcss = {
  id: 'brand-postcss',
  name: 'PostCSS',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'postcss'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>PostCSS</title><path d="M11.627.008q-.352.014-.706.065c-.226.024-.453.064-.672.097-.267.033-.534.05-.801.081-.252.033-.51.082-.762.123-.09.016-.178.048-.268.064-.194.04-.396.057-.59.122A16 16 0 0 0 6.79.917c-.316.13-.624.268-.923.43-.308.17-.6.373-.892.568q-.415.277-.82.592c-.257.203-.501.43-.736.657-.13.13-.235.284-.356.43-.203.236-.405.462-.6.706-.16.203-.308.414-.462.625-.275.373-.51.77-.728 1.168-.09.162-.17.325-.25.487-.123.243-.252.478-.366.73-.08.17-.146.357-.194.544a67 67 0 0 0-.332 1.2c-.098.358-.122.73-.13 1.096-.008.324.024.64.057.965.008.082-.04.18.056.244-.032.09-.008.138.04.154-.056.09.025.146-.007.227-.008.017.025.05.04.073 0 .025-.008.057 0 .08.01.074.04.147.04.229 0 .056.05.12.066.178.008.024 0 .065-.017.08-.048.058-.04.106.033.139.04.105.024.154.016.203.016.073-.008.097 0 .114.065.13.09.275.097.42 0 .034.016.066.033.107.008 0 0 .154 0 .154.04-.024.073-.032.113-.05q.036.16.081.294c.04.065.041.097.025.105.032.145.048.283.105.42 0-.153-.016-.307-.04-.453.113.04.21.08.275.08.008-.023.016-.055.025-.072-.049-.048-.09-.12-.138-.17.016.065 0 .09 0 .114a1 1 0 0 0-.114-.05c.033-.04.065-.08.114-.13 0-.072-.04-.137-.154-.13.05-.015.097-.04.154-.055.09-.048-.008-.138-.008-.25.008-.14-.073-.277-.097-.423-.04-.227-.033-.568-.057-.795-.049-.04-.09.065-.097.073q.04.293.064.584c-.048-.162-.08-.34-.12-.536-.01.057-.017.08-.017.114-.04.04-.008.09.016.146-.056-.025-.12-.016-.12-.016v.227c-.082-.08-.106-.146-.147-.203-.016-.065-.025-.13-.04-.194.015-.04 0-.065 0-.09l-.025-.195a1 1 0 0 0-.008-.13c.065.009.106.016.146.016-.08-.104-.025-.17.008-.234.016-.033.073-.04.09-.074.064-.12.17-.218.17-.373 0-.073.025-.154.032-.227q.027-.207.04-.414c.017-.178 0-.357.041-.527.065-.283.146-.568.235-.852.065-.203.138-.397.22-.6.12-.317.234-.633.388-.933.22-.438.47-.86.713-1.29.154-.268.316-.52.487-.78.16-.25.323-.51.51-.746.26-.332.543-.64.86-.917.323-.292.63-.592.98-.86a10 10 0 0 1 1.44-.925c.414-.219.843-.39 1.273-.552.275-.105.575-.154.859-.243.324-.106.648-.154.988-.162.219-.008.43-.033.648-.057a16 16 0 0 0 .6-.057.4.4 0 0 0-.04.065c-.09.13-.187.26-.276.39-.073.105-.154.218-.227.324-.13.17-.268.34-.39.52-.185.267-.356.543-.55.81-.194.26-.405.504-.608.755-.267.35-.518.706-.785 1.055-.244.332-.502.65-.737.982-.21.292-.398.6-.6.9-.3.446-.6.884-.9 1.33a84 84 0 0 1-.712 1.015c-.016.024-.04.032-.065.048-.064.105-.064.162-.09.21a4 4 0 0 1-.202.358c-.04.065-.097.122-.146.187-.008-.098.13-.147.065-.27-.04.067-.08.123-.12.188l-.1.194c.033.024.088.04.035.088-.005-.02-.032-.032-.053-.048a5 5 0 0 0-.194.293c.05.04.073.024.105-.033.03-.06.072-.104.11-.154l-.042.074a.3.3 0 0 0 .09-.08c0 .088-.05.16-.09.233-.033.065-.114.114-.17.163.008.008.065.032.073.04.073-.024.097-.064.106-.04.024-.033.048-.057.056-.08a.3.3 0 0 1 .162-.18q.046-.026.08-.064c.244-.252.495-.496.714-.764.34-.413.648-.843.973-1.265.137-.178.3-.357.445-.527.024.186.008.365 0 .535-.025.3-.04.6-.065.908-.008.122 0 .244-.008.366 0 .032-.025.056-.025.09 0 .08.025.17.025.25-.025.3-.057.592-.082.893-.008.064.024.13.04.186-.04.438.05.9-.024 1.364.057-.09.073-.147.073-.203.008-.05 0-.097 0-.154v-.08c.008-.147.04-.3.024-.448a1.5 1.5 0 0 1 .016-.47c.017-.065-.007-.146.033-.227v.12c-.008.463.01.926-.056 1.388-.008.04.024.114-.065.106-.073.146.016.252-.065.333-.016.016.016.09.024.138-.032.097-.032.097.016.105.008.18.025.34.033.51.13-.307.064-.624.122-.941.008.13.016.26.008.398 0 .21-.01.414-.017.625q-.002.06-.016.122c-.024.113-.032.227-.072.332-.033.08-.016.203-.016.3v.31c.032.137-.01.21.016.29-.025.083-.033.107-.025.13l.025.123c.162-.016.09.106.153.17-.048.065-.032.09-.032.122 0 .073-.008.138-.016.21 0 .188-.008.374-.008.553 0 .025.008.048.008.073l-.008.227c.016.024 0 .05-.025.073-.008 0-.032-1.03-.032-1.03h-.12c-.017.486.023.924-.066 1.38-.097.007-.13.023-.235.023q-.378-.002-.754.008c-.3 0-.59.008-.89.008-.147 0-.3.017-.446.017-.195 0-.397-.025-.59-.025-.3 0-.593.024-.893.032-.22.008-.437.008-.656.017-.146.008-.292.015-.438.032-.064.008-.12.032-.202.056-.025 0-.08-.008-.13 0-.08.017-.153.065-.235.082-.122.024-.154.056-.138.178v.08c-.008.017.178-.024.178-.024-.016 0-.024.05-.049.09.065-.025.106-.04.147-.057.121.057.226.025.323.05.316.08.64.113.964.145.21.016.414.025.624.032.3.017.6.033.9.033.25 0 .493-.025.744-.025.348 0 .697.016 1.045.025.073 0 .154-.008.235-.008h.592c.527-.016 1.053-.025 1.58-.04.3-.01.608-.025.907-.033l.924-.025c.357-.008.713-.008 1.062-.015.267 0 .526-.01.794-.017.3-.008.607-.032.907-.048.162-.008.324-.025.486-.04.195-.017.398-.04.592-.05.29-.016.59-.024.883-.04.365-.024.73-.057 1.102-.065.34-.016.689-.008 1.03-.016.3-.008.599-.025.907-.033l.51-.025s.34-.008.51-.024c.293-.016.584-.05.876-.057.186-.008.372 0 .559-.008.3-.008.606-.024.906-.024.113 0 .235.016.38.024-.064.057-.105.09-.153.13.032.008.064.025.097.04a.22.22 0 0 1-.13.04c-.016.042-.032.058-.048.139h.145c-.056 0-.105.073-.16.122-.066-.017-.123 0-.156.09.057.03.05.056.04.09-.096.03-.17.063-.128.169q-.05.022-.114.056c-.04.065-.113.08-.097.17.032.008.064.025.09.033-.042.016-.082.04-.123.056-.145.09-.08.13-.048.17q-.037.027-.073.04c.016.074.04.09.048.09l-.085.069.01-.027h-.032q0 .022.005.04l-.02.016c-.024.072-.056.104-.09.153-.03.048-.046.114-.087.162-.17.187-.292.406-.51.552-.081.057-.154.13-.227.203-.146.138-.276.292-.43.422a9 9 0 0 1-.631.478c-.267.187-.534.374-.802.552-.146.097-.308.17-.462.26s-.3.17-.454.26c-.097.064-.186.153-.291.202-.268.114-.551.211-.827.317-.268.114-.462.21-.664.284a5 5 0 0 1-.575.153c-.065.017-.138 0-.211.01-.138.024-.276.057-.414.073-.356.048-.713.08-1.07.13-.21.024-.413.064-.623.09-.146.007-.3-.009-.446-.009-.105 0-.218.025-.324.01-.17-.026-.34-.066-.51-.098-.04-.008-.097-.025-.13-.008-.064.032-.122-.016-.187 0-.04.008-.08-.025-.12-.025-.033-.008-.074.01-.115 0-.09-.024-.17-.056-.268-.048-.096.008-.194-.04-.298-.065l-.43-.097a.7.7 0 0 1-.162-.073c-.21 0-.348-.008-.478-.057-.113-.04-.22-.097-.34-.08-.032.007-.057-.009-.09-.009-.024-.033-.048-.098-.072-.098-.162.008-.26-.13-.397-.17-.073-.024-.13-.105-.202-.13-.18-.073-.324-.227-.527-.25-.064-.01-.13-.042-.202-.066.024.032.04.057.064.08-.235-.113-.453-.242-.672-.364-.032-.008-.056-.04-.08-.057l-.22-.147c-.12.024-.17-.025-.203-.04-.218-.154-.47-.252-.68-.421-.09-.074-.194-.122-.26-.212a1.3 1.3 0 0 0-.404-.316c-.122-.064-.235-.138-.348-.21-.057-.041-.114-.09-.114-.18 0-.056-.024-.113-.097-.08-.032-.05-.065-.106-.105-.122-.097-.04-.162-.114-.235-.18-.073-.064-.13-.153-.22-.185-.161-.065-.26-.203-.355-.316-.228-.268-.43-.56-.64-.844-.017-.024-.05-.04-.074-.065.033.09.073.162.114.243a.5.5 0 0 1-.186-.146c-.008.008.558.942.558.942.05.073.09.146.138.219a.25.25 0 0 1-.243-.13c-.073-.13-.154-.21-.316-.194a1.4 1.4 0 0 1-.04-.18.6.6 0 0 1-.114-.008c.114.179.21.333.316.51l-.08-.047c.145.154.25.349.436.446.04.187.25.276.3.454l-.114-.024c-.065-.081-.138-.162-.21-.251a.4.4 0 0 0 .072.145c.098.122.187.244.3.35.04.04.098.057.098.13.064.032.09.04.113.04.017.049-.008.122.09.106.064.12.128.12.218.08.105.105.162.114.235.05 0 .04.008.08.008.113.032-.017.025-.04.025-.081.04.033.064.049.08.065.08.114.154.219.268.307.154.13.29.268.437.39.283.235.6.43.916.608.39.22.762.455 1.16.665a6.2 6.2 0 0 0 1.513.545c.195.04.38.08.576.13.17.048.34.121.51.161.26.057.527.106.786.154l.179.025c.072.016.16-.016.177.008.04.065.073.032.122.024.057-.016.12-.016.186-.016.227.008.445.056.672.04.05 0 .122-.04.163.04.073-.032.113-.032.146-.04.008.073 0 .073-.016.08-.017.01-.04.017-.073.04.292.058.567.066.81 0a2.7 2.7 0 0 0 1.135-.136c.032.04.056.097.105.016.016-.025.056-.033.089-.04.073-.017.162-.05.227-.026.073.025.097-.04.154-.04.097 0 .186-.008.276-.024.048-.008.097-.033.153-.05a.4.4 0 0 0-.178-.04 7 7 0 0 1 .276-.13c-.017.025-.033.057-.065.057h.113c-.025 0-.057.073-.097.122.29-.073.558-.138.818-.204-.09-.17.097-.113.162-.21a3 3 0 0 1-.243.064c.275-.137.559-.26.834-.38-.04.048-.09.073-.162.114.049.008.08.008.106.015.129.04.097-.08.137-.154.154 0 .219-.024.292-.05q.12-.033.243-.08c.13-.056.25-.13.38-.194.025-.01.065 0 .098 0 .09-.057.12-.106.145-.098.114.017.194-.024.227-.13l.023-.015c.033.07.098.08.203.007q-.1-.002-.187-.016-.008.002-.011.006.06-.047.11-.08c.178-.096.347-.193.526-.29.065 0 .097 0 .113-.008a4 4 0 0 0 .3-.163c-.024-.008-.08-.04-.08-.04a1 1 0 0 0 .154-.04c.193-.23.46-.383.664-.56.089-.008.089-.032.089-.048.032-.041.064-.09.105-.122.177-.163.371-.3.533-.47q.354-.355.673-.732c.194-.227.39-.454.55-.705.228-.35.422-.706.625-1.072.146-.26.275-.52.422-.778.015-.025.048-.057.072-.057.22-.025.438-.04.65-.065.047-.008.104-.04.152-.065-.024-.04-.04-.09-.064-.13-.033-.05-.08-.09-.114-.138-.032-.04-.056-.09-.08-.138-.025-.04-.05-.072-.074-.114a3 3 0 0 1-.138-.275c-.008-.024-.025-.065-.016-.09.146-.315.202-.656.34-.972.138-.325.18-.69.243-1.04.057-.331.09-.664.13-.997.024-.235.057-.462.064-.697.05-.373.033-.723.025-1.072-.008-.308-.025-.624-.04-.933-.017-.317-.025-.633-.058-.95-.056-.43-.113-.868-.21-1.29a7 7 0 0 0-.316-1.014c-.154-.39-.308-.787-.503-1.16-.316-.6-.73-1.136-1.11-1.696-.252-.357-.576-.65-.82-1.014-.135-.21-.34-.39-.541-.55a14 14 0 0 0-1.004-.723 10 10 0 0 0-.794-.504c-.22-.122-.454-.22-.68-.325-.26-.12-.511-.268-.803-.324-.073-.016-.138-.04-.21-.065-.187-.065-.365-.138-.552-.195-.283-.089-.56-.194-.85-.267a8 8 0 0 0-.87-.163c-.323-.047-.655-.064-.98-.096a8 8 0 0 0-.623-.056c-.307-.018-.623-.018-.93-.025-.154-.008-.316-.024-.47-.016Zm.694.94q.156.027.3.041l.389.025c.292.023.583.04.875.08.243.033.486.081.737.122a10.4 10.4 0 0 1 1.572.405c.3.098.59.228.884.35.656.267 1.28.592 1.895.932.194.106.308.276.454.43.21.22.42.438.624.665.234.268.453.544.68.82.201.243.412.486.615.73.065.073.114.163.17.244.13.194.275.38.39.592.08.154.13.333.185.503.08.252.162.495.243.746.056.187.104.382.145.576.033.13.025.268.065.397.05.17 0 .358.05.528.007.017.015.04.023.057.033.032.057.065.008.114-.008.008-.008.04 0 .064.017-.016.025-.032.04-.057 0 .017.01.025.01.033 0 .032-.01.065 0 .097 0 .016.015.04.023.057.016-.017.032-.025.064-.05.073.276.082.552.082.836 0 .268.048.536-.065.795.024-.09-.033-.17-.008-.252l.003.002c-.008 0-.056-.05-.064-.057-.01.025 0 .05-.017.08-.008-.023-.064-.014-.064-.04-.01.115.048.228.04.34.024-.014.12-.023.146-.047a.1.1 0 0 0 .032.016c-.162.122-.12.244-.048.382.016.032.064.097.016.162-.016.016.008.065.016.106h.024v.015l-.073.025c-.016-.025-.113-.073-.113-.114v.414c.08.025.08.138.113.195a.2.2 0 0 0 .033-.064l.008.008q-.01.072-.032.146c-.016.072-.033.137-.04.21 0 .008.015.025.015.033-.09.203-.04.43-.072.64-.025.154 0 .317-.017.48a4 4 0 0 1-.08.42c-.009.025-.026.033-.066.05a.7.7 0 0 0-.008-.252c-.008 0-.114-.057-.122-.057 0 .114.065.268.09.398-.025-.008-.122-.065-.13-.065-.017.097-.017.227-.025.332-.008.082-.08.154-.09.244 0 .05.058.08.05.162h.064c0-.162.074-.308.074-.478h.023c.01.016.033.032.025.04-.016.09-.05.187-.04.276 0 .05.04.097.024.154a1 1 0 0 0-.033.17c-.008-.04-.016-.056-.016-.08l-.09-.008c-.007.05.058.097.05.138-.01.008-.017.008-.033.016l-.267-.39a82 82 0 0 1-.632-.932 2 2 0 0 1-.147-.244q-.372-.645-.833-1.24c-.235-.3-.422-.626-.64-.94-.203-.302-.405-.594-.608-.895-.073-.097-.162-.186-.227-.292-.21-.332-.397-.673-.607-1.006-.178-.276-.372-.544-.56-.81q-.097-.137-.194-.286a.1.1 0 0 1-.016-.055 12 12 0 0 1-.04-.528c0-.162.016-.324.016-.495V6.96c0-.04.008-.073.008-.113.008-.008.016-.025.024-.033-.235 0-.478-.01-.713 0-.154.008-.235-.057-.34-.17-.308-.35-.535-.747-.802-1.12a50 50 0 0 0-.77-1.055c-.211-.284-.422-.56-.632-.844-.236-.324-.462-.65-.705-.973q-.44-.585-.892-1.168c-.138-.179-.292-.35-.446-.536m-.752.426q.026.005.05.038c.218.276.437.56.655.835.163.204.325.398.48.61.185.26.364.52.55.778q.316.448.624.908c.308.455.6.91.907 1.363.227.333.454.658.672.99h-.413c-.38-.008-.77-.04-1.15-.024-.52.025-1.046.08-1.564.122a23 23 0 0 1-1.976.064c-.236 0-.47.033-.705.05-.284.016-.56.032-.843.04-.333.016-.656.024-.99.033-.185.008-.38 0-.582 0V7.18c.26-.357.527-.714.786-1.08.08-.105.145-.22.226-.324.025-.033.058-.05.098-.082l-.008-.015c.032-.04.064-.074.08-.106.042-.065.066-.138.099-.21a.1.1 0 0 1 .032-.033c.114.057.114-.064.154-.105a6 6 0 0 0 .21-.252c.05-.064.098-.12.139-.194.007-.025-.017-.065-.025-.098H9.05c.024-.016.049-.04.073-.056.008 0 .008 0 .016-.008a5 5 0 0 1 .146-.21c.097-.13.202-.26.315-.374q-.024.062-.048.113c.008 0 .008.008.016.008.097-.13.203-.252.3-.382q-.012-.014-.025-.016c-.04.04-.072.082-.113.122q-.012-.014-.025-.016c.082-.106.163-.21.243-.333.017.025.033.057.065.122.033-.08.065-.138.09-.195-.025.025-.057.05-.081.074l-.025-.025.146-.218c.154-.22.308-.447.462-.666.057-.08.13-.146.178-.227.154-.308.398-.552.584-.836.04-.056.097-.105.145-.154q.03-.035.056-.03zm-2.285 3.16c-.048.033-.09.057-.137.09-.01.008-.017.008-.01.008.01.04.01.073.017.13.057-.082.097-.147.146-.21zm6.838 3.342c.073 0 .113.025.154.09q.108.182.227.365c.008.016.024.04.024.064 0 .18 0 .365.008.544.008.187.025.365.032.552 0 .186-.016.38-.008.576.009.276.016.56.016.843h.002v.074c-.008 0-.016.008-.032.008-.033-.114-.065-.236-.106-.35a2.7 2.7 0 0 0-.316-.68c-.163-.228-.308-.463-.47-.698-.04-.057-.098-.106-.146-.154-.17-.187-.34-.382-.56-.52a6.6 6.6 0 0 0-1.012-.52 2 2 0 0 1-.284-.145h.194L15.23 7.9c.3-.008.59-.008.89-.024m-6.083.212q.088-.003.178.008c-.13.065-.26.13-.373.21-.146.098-.283.228-.43.334a2.4 2.4 0 0 0-.396.373c-.154.186-.324.348-.487.527-.113.13-.243.252-.34.39-.137.178-.26.372-.39.575.042-.77.09-1.533.058-2.312.382-.016.746-.04 1.12-.056.29-.017.59-.025.88-.04q.09-.008.18-.01zm2.033.415c.242.008.485.008.728.024.105.008.203.032.3.064.12.04.25.098.365.154q.204.11.397.244c.235.154.453.324.688.462.227.138.405.325.55.536.18.25.382.48.463.787l.12.535c.026.098.083.195.058.308-.04.203-.073.415-.105.617a1 1 0 0 0-.024.244c.015.252-.082.47-.18.698-.031.073-.08.146-.12.227a.2.2 0 0 0 .064.033l.073-.146c.009 0 .009 0 .016.008-.04.113-.072.235-.113.35-.097.25-.194.51-.316.753-.065.138-.178.25-.26.382-.08.113-.145.235-.226.34-.073.09-.145.18-.243.244a6 6 0 0 1-.68.454c-.146.09-.316.138-.478.178h.002c-.26.064-.527.138-.794.17-.227.033-.462.025-.697.025a8 8 0 0 1-.625-.025c-.235-.024-.47-.05-.696-.154-.195-.09-.398-.17-.591-.268-.196-.097-.39-.21-.536-.39-.105-.13-.251-.234-.38-.348a.38.38 0 0 0 .17.235c-.041.05-.098.025-.18-.106-.023.017-.047.025-.064.033.025-.057.049-.114.073-.162-.032-.065-.073-.138-.105-.204a7 7 0 0 1-.187-.324c-.016-.024-.016-.048-.032-.073a2 2 0 0 1-.114-.146c-.064-.097-.12-.202-.202-.3 0 .025.008.05.008.082-.008 0-.016.008-.016.008l-.17-.414c-.008 0-.008 0-.016.008l.145.535c-.008 0-.016.01-.024.01-.024-.034-.048-.066-.065-.106-.016-.066-.065-.066-.105-.04-.025.015-.041.072-.033.096q.088.207.187.414a1 1 0 0 0 .057.138c.008.016.032.032.032.056.033.065.057.13.098.187.073.097.154.195.227.292.072.097.137.203.2.3.009.016.034.016.04.025.043.12.18.21.277.162.025.186.227.25.308.43a4 4 0 0 1-.235-.106c-.008.008-.008.016-.016.032.097.05.195.098.283.154.082.05.163.098.236.155.097.09.21.138.348.17a.1.1 0 0 0-.016-.033c.227.106.462.22.64.308-.843.017-1.742.033-2.674.05 0-.155-.008-.3-.008-.455 0-.065.016-.122.008-.187-.025-.372-.025-.746-.073-1.11a8 8 0 0 1-.04-1.162c.007-.21-.01-.43-.017-.64 0-.284 0-.56.009-.844 0-.04.016-.073.032-.114h.025c.008.017 0 .04.015.05.025.024.066.064.082.056.048-.033.12-.065.138-.114a.8.8 0 0 0 .056-.3c0-.073.033-.12.065-.17.016-.025.025-.05.04-.08-.031-.025-.064-.042-.104-.074.032-.09.024-.195.146-.243.016-.008.016-.05.024-.073.008-.066.015-.14.024-.204.016.025.025.033.04.05q.015-.026.017-.026c0-.032-.008-.097 0-.097.097-.016.057-.122.105-.17.008-.01-.008-.033-.008-.05 0-.015 0-.04.008-.04.113-.024.097-.146.17-.203.024-.016.032-.04.065-.08.064.112-.05.17-.057.25.137-.08.178-.275.097-.332a.5.5 0 0 0 .089-.09c.09-.097.186-.186.267-.283.057-.073.09-.162.146-.235.033-.04.098-.073.146-.098.146-.08.284-.17.373-.307q.026-.025.064-.05c.025-.015.074-.015.082-.04.008-.016-.016-.057-.033-.08.032-.017.065-.05.13-.082-.025.05-.032.08-.05.114l.04.04c.074-.057.188-.12.26-.17 0-.008-.04-.04-.04-.04-.05.024-.121.065-.194.097.015-.024.015-.04.025-.05.113-.072.226-.144.348-.202.283-.13.567-.26.85-.38.049-.025.114-.01.17-.01.025 0 .04 0 .065-.006.13-.04.26-.082.39-.114a.7.7 0 0 1 .178-.024m-.316.12-.234.106c0 .008-.041.073-.033.073.04-.008.13-.073.178-.08.024 0 .057.007.082.015 0-.032 0-.065.007-.114m5.858 1.38c.08.107.17.204.227.309.187.34.43.634.656.942.195.268.373.56.552.835.218.333.429.665.648.998.162.252.332.503.502.747q.233.326.477.64c.137.187.283.374.42.56q.244.344.487.674c.08.113.17.227.26.34.05.065.121.114.17.154a.1.1 0 0 1-.032-.008q.034.05.056.073c.09.05.098.098.05.17v-.001c-.008.016-.025.033-.033.05-.008-.017-.008-.042-.016-.075-.05.13-.154.066-.227.066-.437.008-.883.008-1.32.008-.421 0-.85 0-1.271.008-.138 0-.284.032-.422.04a37 37 0 0 1-.997.033c-.024 0-.048-.04-.09-.073l-.048.073c-.008-.016-.024-.032-.04-.056l-.025.064h-.024c-.016-.113-.048-.22-.048-.332 0-.244.024-.487.032-.73.008-.114 0-.22 0-.325l.09.065a1 1 0 0 1 .048-.08s-.016-.008-.033-.025c.016-.008.033-.025.033-.033.008-.024.024-.05.024-.065 0-.057-.016-.105-.024-.153q.012.002.024-.008l.048.243h.025c-.032-.056.073-.106-.016-.17-.008-.008.008-.057.008-.082-.025-.048-.04-.097-.065-.162.008-.008.033-.016.057-.024q-.046-.026-.081-.04c.08-.073.08-.114.008-.195.016-.008.032-.008.032-.015 0-.074 0-.147-.016-.22-.016-.081.025-.178-.097-.227a.2.2 0 0 0 .032.065s-.024.008-.048.024c-.105-.097-.04-.228-.065-.373a1 1 0 0 1 .138.05c-.017-.058-.057-.123-.081-.196h-.033v-.536c0 .008.056.008.09.017 0-.008.007-.016.007-.025l-.09-.105.017-.016c-.065-.08-.032-.194-.032-.22v-.567c.08.082-.04.187.08.235v-.08h-.008c-.008-.122-.008-.244-.016-.366h-.016c-.008.017-.008.025-.016.04h-.016zm-13.65.665c-.098.113-.187.227-.276.34.015.008.04.065.055.082.09-.122.21-.276.3-.39-.008-.008-.072-.024-.08-.032m-.543.398c-.05.072-.17.202-.22.275.009.008.098-.032.106-.023.05-.073.098-.155.146-.228q-.022-.013-.032-.024m.17.12c-.05.034-.097.075-.146.107.016.016.016.025.016.04-.064-.007-.09.026-.12.114-.01.025-.05.033-.09.065-.01.016-.017.057-.033.097l.008.008a.1.1 0 0 1-.04.025c-.05.048-.106.09-.154.138q-.014.036-.016.073c.056-.057.153-.162.226-.227l.01.008c.03-.05.056-.098.09-.146.006.008.006.016.014.024-.024.065-.048.138-.073.203-.017.008-.04.024-.04.016-.033.025-.058.057-.09.08l-.146.098c-.08.073-.162.138-.25.21-.058.09-.114.17-.18.277.098-.025.122.016.114.097.113.016.122-.073.154-.138.008-.016.016-.05.032-.057.073-.065.154-.12.235-.186.017-.016.017-.05.017-.073 0-.008-.04-.008-.066-.017.073-.08.18-.218.25-.307.042-.025.083-.058.083-.082-.007-.075.032-.104.082-.13-.037.175-.144.325-.252.356.033.016.065.033.09.025s.04-.05.056-.074l.22-.316.072-.122-.032-.033c-.033.058-.065.107-.098.164l-.027-.014.002-.002c-.032-.025-.04-.05-.04-.057a.3.3 0 0 1 .04-.074c.017 0 .04-.008.04-.008.034-.056.034-.097.066-.146-.008-.008-.016-.008-.025-.016zm14.059.999h-.002v.006zm-.002.006a.2.2 0 0 0-.007.067q-.002-.034.007-.067m-.007.147v.008c.008.008.009.008.016 0-.008 0-.008 0-.016-.007zm0 .016c-.024.008-.05.008-.081.017.04.015.079.023.08.04zm0 .056v.002zm-1.192 1.422c-.016.925.09 1.833.21 2.75l-2.786.097a3.3 3.3 0 0 0 .94-.624 1 1 0 0 1 .13-.114c.34-.21.59-.503.818-.828.259-.373.429-.795.64-1.192a1 1 0 0 1 .048-.09m1.134.073.033.08c.04-.007.057-.007.073-.015q-.002-.012.008-.024c-.024-.01-.057-.024-.114-.04zm.024.074-.007.006c.008 0 .016.01.016.01l-.008-.01zM1.07 14.01a.2.2 0 0 0-.073.033c.032.08.073.17.105.252a.2.2 0 0 1 .065-.033c-.033-.08-.065-.17-.097-.252m-.228.333c-.024.04-.048.08-.04.113 0 .024.04.05.065.073 0-.008.008-.016.016-.023-.016-.057-.024-.106-.04-.163m21.657.008c0 .016.008.04 0 .057zm-21.235.18a.3.3 0 0 0-.073.03c.065.139.13.285.194.423.01 0 .073-.032.073-.032-.065-.14-.105-.293-.194-.422m-.162.324c0 .032-.04.024-.04.057-.049 0-.09-.008-.13-.008-.008.008.024.056.033.065h.17c0-.04-.008-.073-.008-.114zm7.453.316q.133.205.276.398l-.008.008c-.017-.008-.041-.017-.057-.033l-.194-.292a.1.1 0 0 1-.017-.08m9.043.438c-.008.097-.016.17-.016.243 0 .016.016.048.024.048.016.01.049-.008.065-.015a.06.06 0 0 0 .016-.032c-.024-.017-.048-.025-.073-.042.154-.08 0-.12-.016-.202m-14.114 4.59c.088.099.177.196.266.302-.048-.025-.105-.04-.13-.073-.056-.065-.104-.138-.16-.203zm.34.286c.024.04.04.089.064.138-.113-.008-.17-.057-.137-.122.024-.008.05-.008.073-.016m15.434 1.241c-.065.015-.114.024-.154.04-.016.033-.033.057-.05.09q.013.001.026.015c.049-.05.105-.09.178-.145m-.414.226c-.09.057-.186.113-.276.17.008.008.008.017.017.025a.8.8 0 0 0 .292-.146c-.008-.017-.025-.034-.033-.05m-3.97 1.542c-.371.106-.493.122-.534.065.187-.025.357-.04.535-.065m-.551.073c.008.016.008.032.016.048-.05 0-.081.017-.122.025-.113.024-.235.04-.348.057-.04.008-.09.05-.105-.025-.017.008-.033.008-.05.017.04.12.139.024.22.072-.18.025-.348.04-.52.065v-.016c.05-.008.107-.016.155-.025v-.024a2 2 0 0 0-.243-.016c-.024 0-.056.033-.08.04a.4.4 0 0 1-.106.017c-.138.008-.275.008-.405.016-.008 0-.025-.008-.033-.008v-.025c.543-.072 1.078-.145 1.62-.218zm-1.694.21v.024a4 4 0 0 1-.453.05v-.025z"/>
    </svg>
  </div>
  <span class="brand-icon__name">postcss</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_less = {
  id: 'brand-less',
  name: 'Less',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'less'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Less</title><path d="M3.598 7.15a7.961 7.961 0 0 0-1.054.068c-.281.041-.52.124-.717.249a1.19 1.19 0 0 0-.45.497c-.098.208-.14.47-.14.802V10.3c0 .428-.084.732-.253.884-.169.166-.492.25-.984.25v1.16c.478 0 .815.083.984.249.169.166.253.47.253.912v1.548c0 .594.183 1.009.548 1.23.38.207.984.318 1.813.318v-1.078c-.393 0-.646-.07-.773-.194-.126-.124-.183-.373-.183-.746v-1.465c0-.373-.098-.663-.28-.87-.184-.208-.479-.374-.886-.484.393-.125.688-.29.871-.512.183-.22.281-.511.281-.87V9.167c0-.36.057-.608.183-.733.122-.12.412-.195.787-.2v4.547c0 .416.03.764.09 1.044.059.28.164.52.314.724.15.203.356.35.616.443.26.093.589.14.984.14.098 0 .205-.007.32-.02a5.336 5.336 0 0 0 .65-.107l-.036-.98c-.27.038-.492.057-.667.057-.353 0-.59-.092-.713-.276-.122-.183-.183-.534-.183-1.051V7.149H3.598zm16.818-.001v1.092c.393 0 .647.069.773.193.127.125.183.373.183.733v1.465c0 .359.098.65.28.87.184.222.479.387.872.512-.407.11-.702.276-.885.483-.183.208-.281.498-.281.871v1.465c0 .373-.057.622-.183.746-.126.125-.38.194-.773.194v1.078c.83 0 1.434-.11 1.813-.318.365-.221.548-.636.548-1.23v-1.548c0-.442.085-.746.253-.912.169-.166.506-.249.984-.249v-1.16c-.492 0-.815-.084-.984-.25-.168-.151-.253-.456-.253-.884V8.766c0-.332-.042-.594-.14-.801a1.19 1.19 0 0 0-.45-.498 1.828 1.828 0 0 0-.717-.249 7.252 7.252 0 0 0-1.04-.069zm-6.479 1.975c-.675 0-1.209.14-1.588.421-.38.281-.576.689-.576 1.209 0 .422.112.773.351 1.026s.618.478 1.152.688c.043.015.14.057.296.113.45.183.758.31.913.436a.592.592 0 0 1 .239.478c0 .224-.084.393-.253.506-.169.112-.408.168-.717.168-.295 0-.632-.056-.984-.155a3.901 3.901 0 0 1-.885-.337l-.14 1.04c.505.296 1.18.436 2.037.436.717 0 1.265-.155 1.659-.464.393-.309.59-.759.59-1.335 0-.436-.126-.787-.38-1.054-.252-.267-.632-.492-1.166-.689-.382-.15-.84-.277-1.209-.506a.465.465 0 0 1-.224-.421c0-.183.084-.324.239-.422.154-.098.365-.14.646-.14.506 0 1.026.126 1.574.379l.365-.956c-.562-.28-1.208-.421-1.939-.421zm4.512 0c-.675 0-1.21.14-1.589.421-.38.281-.576.689-.576 1.209 0 .422.112.773.351 1.026.24.253.619.478 1.153.688.042.015.14.057.295.113.45.183.759.31.914.436a.592.592 0 0 1 .238.478c0 .224-.084.393-.253.506-.168.112-.407.168-.716.168a3.72 3.72 0 0 1-.984-.155 3.904 3.904 0 0 1-.886-.337l-.14 1.04c.506.296 1.18.436 2.038.436.702 0 1.265-.155 1.686-.464.394-.309.59-.759.59-1.335 0-.436-.126-.787-.379-1.054s-.632-.492-1.166-.689c-.392-.153-.842-.277-1.209-.506a.465.465 0 0 1-.225-.421c0-.183.085-.324.24-.422.154-.098.364-.14.646-.14.506 0 1.026.126 1.574.379l.337-.956c-.562-.28-1.209-.421-1.94-.421zm-9.46.014c-.842 0-1.503.267-1.995.815-.492.548-.73 1.279-.73 2.192 0 .956.252 1.687.772 2.22.52.535 1.237.802 2.165.802.8 0 1.49-.183 2.08-.52l-.197-.984a3.66 3.66 0 0 1-1.813.492c-.492 0-.886-.155-1.167-.45-.28-.295-.435-.716-.45-1.25h3.852v-.591c0-.829-.225-1.49-.661-1.982-.45-.491-1.054-.744-1.855-.744zm-.013.983c.38 0 .674.127.885.38.211.253.323.618.323 1.082H7.67c.042-.492.182-.857.407-1.096.253-.239.548-.366.9-.366Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">less</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_stylus = {
  id: 'brand-stylus',
  name: 'Stylus',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'stylus'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Stylus</title><path d="M13.671 8.861c-.445-.354-1.697.239-2.05 1.118-.446 1.116-1.105 2.746-1.752 3.46-.683.75-.751.17-.683-.262.158-1.02 1.153-3.381 1.696-4.047-.202-.3-1.52-.256-2.435 1.166-.342.536-1.122 2.325-1.99 3.734-.19.305-.427.092-.243-.621.207-.825.818-3.089 1.604-4.871 2.064-.409 4.254-.696 5.933-.702.226-.06.377-.263 0-.275-1.447-.049-3.62.122-5.652.38.391-.782.812-1.404 1.239-1.667-.464-.293-1.404-.177-1.94.617a10.547 10.547 0 00-.702 1.244c-1.49.232-2.765.494-3.412.739-.671.256-.598 1.068-.19.915.85-.317 1.996-.647 3.272-.94-.812 1.831-1.447 3.992-1.599 4.87-.379 2.137.946 2.124 1.593 1.282.702-.922 2.166-4.163 2.392-4.504.067-.116.16-.055.11.048-1.635 3.265-1.496 4.529-.17 4.248.597-.128 1.629-1.153 1.897-1.684.055-.128.171-.116.146-.061-1.037 2.692-2.355 4.87-3.24 5.554-.805.616-1.404-.72 1.446-2.637.422-.286.226-.677-.25-.543-1.47.232-5.681 1.568-7.53 2.85-.142.098-.27.177-.264.379.006.116.208.073.306.012 2.393-1.435 4.351-1.995 6.597-2.466.03.013.067.019.097.007.104-.025.098.03.031.073a3.99 3.99 0 01-.342.177c-1.513.591-2.429 1.897-2.105 2.563.275.574 1.758.366 2.46-.012 1.72-.934 2.971-2.765 3.826-5.292.745-2.24 1.685-4.778 1.904-4.852zM3.7 16.094c.623-.745.696-1.514.214-2.942-.305-.903-.812-1.599-.44-2.16.397-.598 1.24-.019.538.78l.14.098c.842.098 1.257-1.056.628-1.386-1.66-.866-3.113.8-2.472 2.729.275.817.66 1.684.348 2.374-.268.592-.787.94-1.135.952-.726.037-.244-1.63.592-2.045.073-.036.177-.085.08-.207-1.032-.116-1.636.36-1.984 1.025-1.013 1.934 1.922 2.649 3.49.782zm19.974-2.064c-2.8-.366-8.842.122-11.509.831-.794.207-.574.628-.171.549.006 0 .177-.043.183-.043 2.191-.427 7.507-.8 10.607-.207.372.067 1.49-1.05.89-1.13zm-9.22-.329c.78-.39 1.94-2.808 2.702-4.131.055-.098.153-.02.098.048-1.928 3.32-1.11 3.705-.348 3.656 1.02-.061 1.96-1.526 2.167-1.856.086-.128.135-.024.086.068-.05.152-.226.421-.391.787-.232.519.012.72.214.812.317.153 1.183.055 1.317-.476-.865-.018 1.209-4.108 1.423-4.358-.58-.336-1.477.031-1.886.836-.872 1.727-1.605 3.119-2.063 3.143-.89.049 1.026-3.85 1.337-3.973-.19-.275-1.404-.159-2.082.89-.244.38-1.732 3.016-2.099 3.45-.647.769-.696.11-.513-.66.061-.262.165-.598.3-.97.427-.964.885-1.27 1.166-1.581 1.885-2.093 2.966-3.79 2.538-4.455-.378-.592-1.642-.33-2.453.89-1.496 2.241-2.874 5.31-3.051 6.715-.171 1.403.847 1.506 1.537 1.165zm7.372-3.296c.238.586.598 1.166.384 1.679-.177.439-.41.623-.665.665-.36.06-.263-1.068.354-1.404.055-.03.134-.177.06-.262-.78-.043-1.22.33-1.458.824-.69 1.447 1.563 1.842 2.667.42.44-.567.458-1.128.036-2.147-.267-.647-.676-1.13-.42-1.557.275-.45.933-.061.44.544l.11.06c.64.037.902-.817.414-1.03-1.287-.55-2.49.835-1.922 2.208zm-6.579-.811c.067-.153.11-.195.226-.452.67-1.477 1.514-3.033 2.093-3.759.36-.379.866.134-.049 1.538a14.165 14.165 0 01-1.812 2.264v.006c-.171.189-.324.348-.391.44-.049.06-.104.049-.067-.037z"/>
    </svg>
  </div>
  <span class="brand-icon__name">stylus</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_express = {
  id: 'brand-express',
  name: 'Express',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'express'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Express</title><path d="M12.262 16.666h1.146l6.975-9.325H19.22zm9.778 1.441v.004l-4.334-5.706-.557.74 4.873 6.682H.945V4.173h9.505l5.026 6.7.574-.772-4.374-5.928h.003l-.719-.945H0v17.544h24zM10.917 8.705a3.8 3.8 0 0 0-1.292-1.183q-.796-.45-1.916-.45c-.746 0-1.37.14-1.906.424a3.76 3.76 0 0 0-1.31 1.12 4.9 4.9 0 0 0-.75 1.581 7.17 7.17 0 0 0 0 3.696c.148.567.402 1.101.75 1.573a3.5 3.5 0 0 0 1.31 1.066q.803.39 1.906.389 1.77 0 2.739-.868.966-.867 1.328-2.457h-1.139q-.271 1.084-.977 1.734-.704.651-1.952.65-.812 0-1.392-.342a3.1 3.1 0 0 1-.957-.869 3.5 3.5 0 0 1-.551-1.182 5 5 0 0 1-.17-1.133 9 9 0 0 0-.015-.286 4.5 4.5 0 0 1 .015-.829c.047-.418.147-.83.296-1.223A3.7 3.7 0 0 1 5.54 9.05a2.9 2.9 0 0 1 .922-.742q.541-.28 1.246-.28c.47 0 .869.093 1.23.28q.541.281.922.742.379.461.587 1.057t.225 1.246H5.625l.004.957h6.182a7.3 7.3 0 0 0-.18-1.924 4.9 4.9 0 0 0-.715-1.68z"/>
    </svg>
  </div>
  <span class="brand-icon__name">express</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_fastify = {
  id: 'brand-fastify',
  name: 'Fastify',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'fastify'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Fastify</title><path d="M23.245 6.49L24 4.533l-.031-.121-7.473 1.967c.797-1.153.523-2.078.523-2.078s-2.387 1.524-4.193 1.485c-1.804-.04-2.387-.52-5.155.362-2.768.882-3.551 3.59-4.351 4.173-.804.583-3.32 2.477-3.32 2.477l.006.034 2.27-.724s-.622.585-1.945 2.37l-.062-.057.002.011s1.064 1.626 2.107 1.324a2.14 2.14 0 0 0 .353-.147c.419.234.967.463 1.572.525 0 0-.41-.475-.752-1.017l.238-.154.865.318-.096-.812c.003-.003.006-.003.008-.006l.849.311-.105-.738a5.65 5.65 0 0 1 .322-.158l.885-3.345 3.662-2.497-.291.733c-.741 1.826-2.135 2.256-2.135 2.256l-.582.22c-.433.512-.614.637-.764 2.353.348-.088.682-.107.984-.028 1.564.421 2.107 2.307 1.685 2.827-.104.13-.356.354-.673.617H7.77l-.008.514-.065.051h-.645l-.009.504-.17.127c-.607.011-1.373-.518-1.373-.518 0 .481.401 1.225.401 1.225l.07-.034-.061.045s1.625 1.083 2.646.681c.91-.356 3.263-2.213 5.296-3.093l6.15-1.62.811-2.1-4.688 1.235v-1.889l5.5-1.448.811-2.1-6.31 1.662V8.367zm-11.163 4l1.459-.384.02.074-.455 1.179-1.513.398zm.503 2.526l-1.512.398.489-1.266 1.459-.385.02.074zm1.971-.424l-1.513.398.49-1.266 1.459-.385.02.073Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">fastify</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_nestjs = {
  id: 'brand-nestjs',
  name: 'NestJS',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'nestjs'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>NestJS</title><path d="M14.131.047c-.173 0-.334.037-.483.087.316.21.49.49.576.806.007.043.019.074.025.117a.681.681 0 0 1 .013.112c.024.545-.143.614-.26.936-.18.415-.13.861.086 1.22a.74.74 0 0 0 .074.137c-.235-1.568 1.073-1.803 1.314-2.293.019-.428-.334-.713-.613-.911a1.37 1.37 0 0 0-.732-.21zM16.102.4c-.024.143-.006.106-.012.18-.006.05-.006.112-.012.161-.013.05-.025.1-.044.149-.012.05-.03.1-.05.149l-.067.142c-.02.025-.031.05-.05.075l-.037.055a2.152 2.152 0 0 1-.093.124c-.037.038-.068.081-.112.112v.006c-.037.031-.074.068-.118.1-.13.099-.278.173-.415.266-.043.03-.087.056-.124.093a.906.906 0 0 0-.118.099c-.043.037-.074.074-.111.118-.031.037-.068.08-.093.124a1.582 1.582 0 0 0-.087.13c-.025.05-.043.093-.068.142-.019.05-.037.093-.05.143a2.007 2.007 0 0 0-.043.155c-.006.025-.006.056-.012.08-.007.025-.007.05-.013.075 0 .05-.006.105-.006.155 0 .037 0 .074.006.111 0 .05.006.1.019.155.006.05.018.1.03.15.02.049.032.098.05.148.013.03.031.062.044.087l-1.426-.552c-.241-.068-.477-.13-.719-.186l-.39-.093c-.372-.074-.75-.13-1.128-.167-.013 0-.019-.006-.031-.006A11.082 11.082 0 0 0 8.9 2.855c-.378.025-.756.074-1.134.136a12.45 12.45 0 0 0-.837.174l-.279.074c-.092.037-.18.08-.266.118l-.205.093c-.012.006-.024.006-.03.012-.063.031-.118.056-.174.087a2.738 2.738 0 0 0-.236.118c-.043.018-.086.043-.124.062a.559.559 0 0 1-.055.03c-.056.032-.112.063-.162.094a1.56 1.56 0 0 0-.148.093c-.044.03-.087.055-.124.086-.006.007-.013.007-.019.013-.037.025-.08.056-.118.087l-.012.012-.093.074c-.012.007-.025.019-.037.025-.031.025-.062.056-.093.08-.006.013-.019.02-.025.025-.037.038-.074.069-.111.106-.007 0-.007.006-.013.012a1.742 1.742 0 0 0-.111.106c-.007.006-.007.012-.013.012a1.454 1.454 0 0 0-.093.1c-.012.012-.03.024-.043.036a1.374 1.374 0 0 1-.106.112c-.006.012-.018.019-.024.03-.05.05-.093.1-.143.15l-.018.018c-.1.106-.205.211-.317.304-.111.1-.229.192-.347.273a3.777 3.777 0 0 1-.762.421c-.13.056-.267.106-.403.149-.26.056-.527.161-.756.18-.05 0-.105.012-.155.018l-.155.037-.149.056c-.05.019-.099.044-.148.068-.044.031-.093.056-.137.087a1.011 1.011 0 0 0-.124.106c-.043.03-.087.074-.124.111-.037.043-.074.08-.105.124-.031.05-.068.093-.093.143a1.092 1.092 0 0 0-.087.142c-.025.056-.05.106-.068.161-.019.05-.037.106-.056.161-.012.05-.025.1-.03.15 0 .005-.007.012-.007.018-.012.056-.012.13-.019.167C.006 7.95 0 7.986 0 8.03a.657.657 0 0 0 .074.31v.006c.019.037.044.075.069.112.024.037.05.074.08.111.031.031.068.069.106.1a.906.906 0 0 0 .117.099c.149.13.186.173.378.272.031.019.062.031.1.05.006 0 .012.006.018.006 0 .013 0 .019.006.031a1.272 1.272 0 0 0 .08.298c.02.037.032.074.05.111.007.013.013.025.02.031.024.05.049.093.073.137l.093.13c.031.037.069.08.106.118.037.037.074.068.118.105 0 0 .006.006.012.006.037.031.074.062.112.087a.986.986 0 0 0 .136.08c.043.025.093.05.142.069a.73.73 0 0 0 .124.043c.007.006.013.006.025.012.025.007.056.013.08.019-.018.335-.024.65.026.762.055.124.328-.254.6-.688-.036.428-.061.93 0 1.079.069.155.44-.329.763-.862 4.395-1.016 8.405 2.02 8.826 6.31-.08-.67-.905-1.041-1.283-.948-.186.458-.502 1.047-1.01 1.413.043-.41.025-.83-.062-1.24a4.009 4.009 0 0 1-.769 1.562c-.588.043-1.177-.242-1.487-.67-.025-.018-.031-.055-.05-.08-.018-.043-.037-.087-.05-.13a.515.515 0 0 1-.037-.13c-.006-.044-.006-.087-.006-.137v-.093a.992.992 0 0 1 .031-.13c.013-.043.025-.086.044-.13.024-.043.043-.087.074-.13.105-.298.105-.54-.087-.682a.706.706 0 0 0-.118-.062c-.024-.006-.055-.018-.08-.025l-.05-.018a.847.847 0 0 0-.13-.031.472.472 0 0 0-.13-.019 1.01 1.01 0 0 0-.136-.012c-.031 0-.062.006-.093.006a.484.484 0 0 0-.137.019c-.043.006-.086.012-.13.024a1.068 1.068 0 0 0-.13.044c-.043.018-.08.037-.124.056-.037.018-.074.043-.118.062-1.444.942-.582 3.148.403 3.787-.372.068-.75.148-.855.229l-.013.012c.267.161.546.298.837.416.397.13.818.247 1.004.297v.006a5.996 5.996 0 0 0 1.562.112c2.746-.192 4.996-2.281 5.405-5.033l.037.161c.019.112.043.23.056.347v.006c.012.056.018.112.025.162v.024c.006.056.012.112.012.162.006.068.012.136.012.204v.1c0 .03.007.067.007.098 0 .038-.007.075-.007.112v.087c0 .043-.006.08-.006.124 0 .025 0 .05-.006.08 0 .044-.006.087-.006.137-.006.018-.006.037-.006.055l-.02.143c0 .019 0 .037-.005.056-.007.062-.019.118-.025.18v.012l-.037.174v.018l-.037.167c0 .007-.007.02-.007.025a1.663 1.663 0 0 1-.043.168v.018c-.019.062-.037.118-.05.174-.006.006-.006.012-.006.012l-.056.186c-.024.062-.043.118-.068.18-.025.062-.043.124-.068.18-.025.062-.05.117-.074.18h-.007c-.024.055-.05.117-.08.173a.302.302 0 0 1-.019.043c-.006.006-.006.013-.012.019a5.867 5.867 0 0 1-1.742 2.082c-.05.031-.099.069-.149.106-.012.012-.03.018-.043.03a2.603 2.603 0 0 1-.136.094l.018.037h.007l.26-.037h.006c.161-.025.322-.056.483-.087.044-.006.093-.019.137-.031l.087-.019c.043-.006.086-.018.13-.024.037-.013.074-.02.111-.031.62-.15 1.221-.354 1.798-.595a9.926 9.926 0 0 1-3.85 3.142c.714-.05 1.426-.167 2.114-.366a9.903 9.903 0 0 0 5.857-4.68 9.893 9.893 0 0 1-1.667 3.986 9.758 9.758 0 0 0 1.655-1.376 9.824 9.824 0 0 0 2.61-5.268c.21.98.272 1.99.18 2.987 4.474-6.241.371-12.712-1.346-14.416-.006-.013-.012-.019-.012-.031-.006.006-.006.006-.006.012 0-.006 0-.006-.007-.012 0 .074-.006.148-.012.223a8.34 8.34 0 0 1-.062.415c-.03.136-.068.273-.105.41-.044.13-.093.266-.15.396a5.322 5.322 0 0 1-.185.378 4.735 4.735 0 0 1-.477.688c-.093.111-.192.21-.292.31a3.994 3.994 0 0 1-.18.155l-.142.124a3.459 3.459 0 0 1-.347.241 4.295 4.295 0 0 1-.366.211c-.13.062-.26.118-.39.174a4.364 4.364 0 0 1-.818.223c-.143.025-.285.037-.422.05a4.914 4.914 0 0 1-.297.012 4.66 4.66 0 0 1-.422-.025 3.137 3.137 0 0 1-.421-.062 3.136 3.136 0 0 1-.415-.105h-.007c.137-.013.273-.025.41-.05a4.493 4.493 0 0 0 .818-.223c.136-.05.266-.112.39-.174.13-.062.248-.13.372-.204.118-.08.235-.161.347-.248.112-.087.217-.18.316-.279.105-.093.198-.198.291-.304.093-.111.18-.223.26-.334.013-.019.026-.044.038-.062.062-.1.124-.199.18-.298a4.272 4.272 0 0 0 .334-.775c.044-.13.075-.266.106-.403.025-.142.05-.278.062-.415.012-.142.025-.285.025-.421 0-.1-.007-.199-.013-.298a6.726 6.726 0 0 0-.05-.415 4.493 4.493 0 0 0-.092-.415c-.044-.13-.087-.267-.137-.397-.05-.13-.111-.26-.173-.384-.069-.124-.137-.248-.211-.366a6.843 6.843 0 0 0-.248-.34c-.093-.106-.186-.212-.285-.317a3.878 3.878 0 0 0-.161-.155c-.28-.217-.57-.421-.862-.607a1.154 1.154 0 0 0-.124-.062 2.415 2.415 0 0 0-.589-.26Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">nestjs</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_fastapi = {
  id: 'brand-fastapi',
  name: 'FastAPI',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'fastapi'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>FastAPI</title><path d="M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896"/>
    </svg>
  </div>
  <span class="brand-icon__name">fastapi</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_django = {
  id: 'brand-django',
  name: 'Django',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'django'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Django</title><path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"/>
    </svg>
  </div>
  <span class="brand-icon__name">django</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_flask = {
  id: 'brand-flask',
  name: 'Flask',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'flask'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Flask</title><path d="M10.773 2.878c-.013 1.434.322 4.624.445 5.734l-8.558 3.83c-.56-.959-.98-2.304-1.237-3.38l-.06.027c-.205.09-.406.053-.494-.088l-.011-.018-.82-1.506c-.058-.105-.05-.252.024-.392a.78.78 0 0 1 .358-.331l9.824-4.207c.146-.064.299-.063.4.004.106.062.127.128.13.327Zm.68 7c.523 1.97.675 2.412.832 2.818l-7.263 3.7a19.35 19.35 0 0 1-1.81-2.83l8.24-3.689Zm12.432 8.786h.003c.283.402-.047.657-.153.698l-.947.37c.037.125.035.319-.217.414l-.736.287c-.229.09-.398-.059-.42-.2l-.025-.125c-4.427 1.784-7.94 1.685-10.696.647-1.981-.745-3.576-1.983-4.846-3.379l6.948-3.54c.721 1.431 1.586 2.454 2.509 3.178 2.086 1.638 4.415 1.712 5.793 1.563l-.047-.233c-.015-.077.007-.135.086-.165l.734-.288a.302.302 0 0 1 .342.086l.748-.288a.306.306 0 0 1 .341.086l.583.89Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">flask</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_laravel = {
  id: 'brand-laravel',
  name: 'Laravel',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'laravel'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Laravel</title><path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"/>
    </svg>
  </div>
  <span class="brand-icon__name">laravel</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_spring = {
  id: 'brand-spring',
  name: 'Spring',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'spring'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Spring</title><path d="M21.8537 1.4158a10.4504 10.4504 0 0 1-1.284 2.2471A11.9666 11.9666 0 1 0 3.8518 20.7757l.4445.3951a11.9543 11.9543 0 0 0 19.6316-8.2971c.3457-3.0126-.568-6.8649-2.0743-11.458zM5.5805 20.8745a1.0174 1.0174 0 1 1-.1482-1.4323 1.0396 1.0396 0 0 1 .1482 1.4323zm16.1991-3.5806c-2.9385 3.9263-9.2601 2.5928-13.2852 2.7904 0 0-.7161.0494-1.4323.1481 0 0 .2717-.1234.6174-.2469 2.8398-.9877 4.1732-1.1853 5.9018-2.0743 3.2349-1.6545 6.4698-5.2844 7.1118-9.0379-1.2347 3.6053-4.9881 6.7167-8.3959 7.9761-2.3459.8643-6.5685 1.7039-6.5685 1.7039l-.1729-.0988c-2.8645-1.4076-2.9632-7.6304 2.2718-9.6306 2.2966-.889 4.4696-.395 6.9637-.9877 2.6422-.6174 5.7043-2.5929 6.939-5.1857 1.3828 4.1732 3.062 10.643.0493 14.6434z"/>
    </svg>
  </div>
  <span class="brand-icon__name">spring</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_quarkus = {
  id: 'brand-quarkus',
  name: 'Quarkus',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'quarkus'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Quarkus</title><path d="M3.981 0A3.993 3.993 0 0 0 0 3.981V20.02A3.993 3.993 0 0 0 3.981 24h10.983L12 16.8l-2.15 4.546H3.98c-.72 0-1.327-.608-1.327-1.327V3.98c0-.72.608-1.327 1.327-1.327h16.04c.72 0 1.327.608 1.327 1.327v16.04c0 .72-.608 1.327-1.327 1.327h-3.48L17.63 24h2.388A3.993 3.993 0 0 0 24 20.019V3.98A3.993 3.993 0 0 0 20.019 0zm4.324 4.217v3.858l3.341-1.93zm7.39 0l-3.341 1.929 3.34 1.929zM12 6.35L8.305 8.483 12 10.617l3.695-2.134zM8.104 8.832v4.266l3.695 2.133v-4.266zm7.792 0L12.2 10.965v4.266l3.695-2.133zm-8.146.204l-3.34 1.93 3.34 1.928zm8.5 0v3.858l3.34-1.929zm-8.146 4.47v3.859l3.341-1.93zm7.792 0l-3.341 1.93 3.34 1.929z"/>
    </svg>
  </div>
  <span class="brand-icon__name">quarkus</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_gin = {
  id: 'brand-gin',
  name: 'Gin',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'gin'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Gin</title><path d="M11.836 23.977c-2.0587-.1046-3.3698-.3594-4.468-.8684-.131-.0606-.1153-.0272-.278-.596-.2755-.9627-.5534-2.128-.7848-3.29-.135-.678-.1535-.7614-.4716-2.1176-.5104-2.1762-.6402-2.831-.804-4.0557-.1064-.7962.1223-1.3156.2754-.6255.6026 2.7148 1.124 4.6969 1.6753 6.3684.1901.5764.1752.5525.3347.537.1095-.0105.1097-.0096.0278.1811-.1118.2604-.0573.3991.2913.7409.2612.256.2638.2712.0407.2387-.174-.0254-.1655-.0434-.1023.2138.0295.1199.0809.3448.1141.4997.2644 1.2314.6094 1.8336 1.1121 1.941 1.4684.3139 3.6012.4502 5.4794.3503 2.1817-.116 2.7037-.1989 3.3812-.5368.4582-.2286.8528-.6569.611-.6632-.1781-.0047-.1948-.0464-.0437-.109.329-.1365.468-.2818.4411-.4612-.008-.0535.0021-.1094.0422-.2318.1232-.3762.1439-.6822.1123-1.664-.0146-.4543-.0136-.487.021-.6574.0912-.449.132-.7886.199-1.6564.0474-.6126.0627-.766.1118-1.1186.0491-.3532.0648-.5537.0929-1.1868.0549-1.2385.116-1.7317.2287-1.8443.1884-.1885.1874-.289-.006-.5633-.2205-.3129-.2198-.4765.003-.711.1085-.1142.1132-.242.0391-1.0652-.019-.2114-.0394-.5284-.0452-.7045-.0073-.217-.0169-.3202-.0297-.3202-.041 0-.306.2264-.8894.76-.6635.6068-.8368.75-1.2089.9984-.7674.5123-1.5042.7633-2.7787.9462-1.2864.1847-2.8008.1411-3.7922-.1092-.6681-.1686-1.055-.3507-1.8085-.8512-.7058-.4688-.6674-1.2277.079-1.5624.3362-.1507.076-.3149-.5986-.3778-.5074-.0474-.2495-.1461.3996-.153.7887-.0083 1.349-.2884 2.0736-1.0363.3034-.3131.374-.3746.7782-.677.6428-.4808.8696-.6895.972-.8947.0776-.155.0733-.3082-.0094-.3397-.0271-.0103-.0404-.029-.0404-.0566 0-.0517.1571-.0442-2.5615-.122-2.8682-.0822-5.0395-.2118-6.1476-.367-.2164-.0304-.1133.1615.1509.2806.0836.0377.0914.0714.0198.0852-.1952.0377-.1844.01-.1284.3283.2173 1.235.5548 1.5418 1.2152 1.1047.1309-.0866.1765-.1027.4961-.1753.7-.1589 1.4556-.2464 2.5838-.2993 1.1633-.0545 1.2892-.0588 1.3032-.0448.0305.0304-.5599.1101-1.5935.215-1.07.1086-1.4287.1577-1.926.2638-.1342.0286-.2802.0521-.3245.0522-.2895.0008-.7114.2931-.8644.5988-.1926.3851-.0152.6153.5107.6627.1761.0159.6063.0923.6826.1213.0658.025.0525.0663-.0337.1044-.0932.0413-.093.039-.0085.0922.1688.1066.0969.0998-.37-.0351-.7785-.225-.9368-.2379-.723-.0588.1015.085.0972.1096-.0132.076-.1712-.0519-.1676-.0865-.0636.6052.1332.8858.031.8419-.1545-.0665-.2554-1.25-.6686-2.3144-.484-1.2466.04.2318.0853.4146.2197.888.1811.638.2872 1.2493.2237 1.2885-.0297.0184-.1904-.4844-.3028-.947-.124-.5102-.1767-.8005-.4328-2.3821-.1298-.802-.2425-1.3464-.378-1.8265-.0773-.2736-.0497-.403.128-.6008.3644-.4052 1.2746-.6528 1.2746-.3466 0 .147-.187.2458-.6436.3402-.5204.1076-.5632.1751-.2897.4578.2486.2569 1.8142.4808 3.7254.5327.3663.01.9119.0259 1.2124.0354 2.1339.0674 4.3877.0663 4.5184-.0022.015-.0079.0837-.105.1527-.2158.2825-.454.552-.795.9445-1.1954.2782-.2838.2865-.2942.2417-.3055-.132-.033-.1427-.5621-.0127-.6282.2383-.121.3542-.2918.7283-1.0725.198-.4133.3093-.5955.4777-.7825.1457-.1618.2569-.385.421-.8452.1614-.4524.2639-.6635.3799-.7823.223-.2285.2324-.103.0363.4903-.162.49-.7111 1.686-1.1268 2.4542-.355.656-.307.8451.1881.7427.0883-.0182.1706-.024.2462-.017.1306.0119.2723-.0174.6213-.1284.2892-.092.3264-.0769.201.0818-.0891.1128-.0887.1142.053.1799.1405.065.1301.0783-.0611.0783-.265 0-.4498.1059-.4766.2732-.0118.074-.0118.074-.1226-.0473-.3058-.335-.6452-.2808-.851.136-.072.1458-.1856.2528-.2684.2528-.0513 0-.0393-.0339.082-.232.293-.4784.2985-.5618.028-.4245-.308.1563-.7837.8261-.803 1.1308-.017.2655.2956.4083.5327.2434.9017-.627 1.348-.8748.9794-.5438-.0765.0687-.159.148-.1832.1762-.1744.2028-.3106.2933-.5656.3757-.8493.2745-.8493.6558 0 .6355.2265-.0055.4225-.0022.4774.0079.412.0756 2.2334-.2378 3.1616-.544.5878-.1938.6844-.4293.3229-.7867-.4647-.4592-.959-.3684-.6466.1189.1936.302-.3882.6232-1.3705.7565-.4425.06-.6113.0898-.7738.1363-.1108.0318-.4379.0719-.704.0863-.3523.019-.4642-.0274-.1925-.08.4158-.0804.5822-.105 1.0783-.1598 1.3303-.1468 1.7592-.3548 1.7627-.8548.0019-.2777-.2227-.3198-.8506-.1598-.201.0513-.2093.0324-.0248-.0564.2821-.1358.2599-.2519-.0717-.374-.1107-.0408-.1107-.0408.0516-.0538.7422-.0595 1.1048-.3546.7593-.6182-.0677-.0516-.0657-.0685.01-.0837.029-.0058.086-.0344.1266-.0635.1634-.1174.2997.246.1556.4144-.198.2313-.0359.5312.357.6602.403.1323.5887-.0506.4222-.4158-.03-.0657-.089-.2578-.131-.4269-.2398-.9631-.7595-2.0407-.9843-2.0407-.0216 0-.036-.0196-.0475-.064-.2147-.8343-.2878-.9893-.5348-1.1333-.4195-.2445-.551-.6687-.1636-.5275.8873.3236 1.8223 1.4494 2.5325 3.0495.5654 1.274.6932 3.168.3239 4.8039-.203.8994-.363 2.6656-.5462 6.0301-.0749 1.3745-.1492 2.3884-.2385 3.2532-.0223.216-.0453.4696-.051.5635-.0438.708-.2035 2.0275-.3607 2.98-.033.1995-.0473.3696-.0585.6915-.0422 1.2204-.4315 1.8227-1.2581 1.9468a2.7189 2.7189 0 0 0-.325.075c-1.0801.3317-2.166.471-4.3425.557-.728.0288-.7087.0288-1.3064-.0016zm.2615-.2356c.0474-.0474-.2411-.0896-.8847-.1297-.1644-.0102-.3527-.026-.4184-.0352-.4177-.058-1.1698-.1029-1.1698-.0699 0 .1276 2.3564.3514 2.473.2348zm-4.0952-.8634c0-.0406-.3364-1.3698-.4044-1.5977-.1252-.42-.3766-1.0159-.4231-1.003-.0697.0192.0988.9043.2754 1.447.1744.5358.5521 1.3252.5521 1.1537zm-.5246-.1305c.0433-.2745-.0418-.6732-.3351-1.5704-.176-.5382-.2341-.7414-.276-.9641-.0441-.2356-.0402-.2248-.0799-.2188-.1655.0246-.151.285.054.9752.1484.4996.1654.5673.1879.7506.064.5203.4057 1.3021.449 1.0275zm-.7904-3.2816c-.0001-.3436-.0485-.6234-.2044-1.1826-.1744-.6253-.2435-.896-.2825-1.1058-.0745-.4017-.2292-.621-.1807-.2564.026.1948.215 1.1792.2665 1.3878.0233.094.0618.3268.0857.5174.0662.5282.1018.6734.197.8049.0977.1347.1185.1055.1184-.1653zm5.7823-8.2201c.047-.0521.0384-.1659-.0348-.4592-.1-.3999-.0996-.5862.0013-.7401.1707-.2607-.8164-.3768-1.398-.1645-.53.1934-.648.5174-.3192.877.1613.1766-.0747.272-.2973.1203-.3041-.2074-.2766-.8612.0363-.8612.0362 0 .106-.073.106-.111 0-.0561-.0674-.1035-.211-.148-.1984-.0617-.1974-.0741.0085-.108.4832-.0793.939-.4219 1.6589-1.2467.935-1.0714 1.3075-1.3927.8116-.7002-.2504.3497-.4599.592-.8783 1.016-.7501.7603-.8434.9222-.5313.9222.472 0 .6826-.1937 1.1142-1.0246.4076-.7848.6084-.9866.8963-.901.1217.0362.121.0386-.2186.8754-.314.7736-.2997.986.0543.8106.1767-.0875.17-.0762.2403-.4093.173-.8206.5299-1.9468.617-1.9468.1153 0 .0463.5054-.1424 1.0417-.2842.8081-.298 1.0686-.0684 1.2959.2501.2476.5305.202.7474-.1216.0793-.1184.1145-.1023.1763.0809.046.1363.0536.1408.244.1434.2617.0037.6195-.091.6392-.169.0064-.0254.0206-.0402.035-.0364.1408.0369.1388-.1065-.0025-.1673-.0918-.0395-.0998-.0645-.032-.0992.1499-.0764.3061.038.3061.2243 0 .0784.0186.0885.205.11 1.2175.1412 1.9496-.176 2.364-1.024.0706-.1445.205-.4086.299-.587.3348-.6367.4726-1.1026.4121-1.3938-.0352-.1699-.0169-.164-.3792-.12-1.8582.2256-3.5292.3794-4.933.454-.2677.0141-.5553.0298-.639.0348-.1525.009-.1525.009-.4526.3035-.4846.4754-.9042.8606-1.7005 1.5606-.2254.1982-.4329.3853-.461.4158-.0804.0868-.3442.2954-.7344.5806-.815.5957-1.2381 1.0543-1.0973 1.189.1613.1545 1.371.3751 2.378.4339.1692.0099.4035.029.521.0426.3097.036.319.0367.4797.0397.1296.0024.1506-.0015.1793-.0333zm4.9335-2.6883c-.6352-.103-1.2474-.4616-1.8828-1.103-.419-.4228-.3704-.4557.2256-.1524.4367.2222.5944.2777.7778.2734.0704-.0017.1626-.0037.2049-.0045.1903-.0038.9252.4017.8551.4718-.024.024-.159-.0192-.4196-.1342-.8347-.3685-1.3685-.3711-.8026-.0041.5953.3862 1.2494.571 1.64.4632.146-.0402.186-.0393.1923.0044.0242.1694-.3493.257-.7907.1854zm-3.5168 2.6903c.0746-.0187.3623-.0728.6394-.1204 1.31-.2247 1.6092-.3389 2.4225-.9243.552-.3972.6191-.7887.1254-.731-.5517.0644-.6125.1133-.7745.6229-.1885.5932-.272.665-.7748.6656-.5271.0006-.7398-.181-.889-.7596-.0528-.2045-.067-.2222-.2166-.2715-.5559-.1833-.8321.1858-.8322 1.112 0 .1586-.0097.1672-.1927.1722-.2981.0081-.3303-.091-.1542-.4747.2334-.509.2423-.6089.0614-.6855-.392-.1659-.7831.2546-.7091.7622.0663.4551.3933.6953.8023.5892.116-.0301.116-.0301.2182.0226.123.0634.1069.0622.274.0203zm1.822-.7768c.2327-.0208.3877-.1848.3877-.4102 0-.3258-.2825-.4682-.6292-.317-.1015.0442-.1223.0476-.2064.034-.3571-.0575-.5023.2388-.2548.52.1594.1812.2799.2108.7026.1732zm-3.2106-.9502c.373-.1904.8327-1.1638.6843-1.4494-.0437-.0844-.0598-.0769-.158.0736-.048.0734-.1677.2402-.266.3708-.458.6076-.5777.8672-.4559.989.0617.0617.0998.0648.1956.016zM10.302 21.2613c-.1018-.013-.4553-.0772-.7855-.1426-.6434-.1273-.9326-.1714-1.1234-.1714-.1763 0-.2162-.0341-.1669-.1425.0536-.1175.2172-.105.7572.0579.3561.1074.6022.167.7437.1803.061.0057.1494.021.1964.0338.1346.037 1.2056.1779 1.3516.1779.0044 0 .0033.0077-.0025.017-.0158.0257-.751.0177-.9706-.0104zm1.7587-.7484c-.2231-.1093-.2921-.2537-.3514-.7354-.0621-.5045-.1591-.66-.4529-.7263a4.0909 4.0909 0 0 1-.1152-.0274c-.0404-.011-.0716-.173-.0565-.2939.034-.2724.2048-.4916.7172-.9203.1127-.0943.2348-.2026.2713-.2405.3605-.3747 1.5306.1053 1.9894.816.3258.5047.322.6185-.028.8492-.4315.2844-.4933.3657-.4846.6372.003.0892.0065.2044.008.2561.0095.3235-.1771.4074-.6452.29-.3964-.0994-.5232-.0838-.6829.0842-.0597.0628-.0632.063-.1692.0111zm1.1381-.2254c.31-.1586.3749-.5512.1474-.892-.244-.3652-.5598-.2393-.5485.2187.0139.5637.1544.7995.4011.6733zm-.8657-.0823c.245-.1105.326-.537.1665-.8751-.1556-.3297-.4463-.1355-.5016.335a3.7214 3.7214 0 0 1-.033.2215c-.0671.345.062.4567.3681.3186zm-.5397-1.1367c.2714-.1816.542-.19 1.3747-.043.4775.0845.8627.0285.8621-.1253-.0023-.5725-.3483-.7422-1.2293-.603-.5545.0876-.7589.0879-1.0083.0016-.2747-.095-.6015.1652-.5532.4404.045.2565.3721.451.554.3293zm-2.0236-.8882c-1.242-.2611-2.0297-1.7477-1.3788-2.6022.1995-.2618.2624-.1704.1232.1789-.5807 1.4577 1.2303 2.8224 2.6353 1.9858 1.027-.6115 1.0144-2.1067-.0221-2.619a3.1056 3.1056 0 0 1-.1964-.1114c-.4015-.247-.8534-.2309-1.7165.0612-.504.1705-.4886.1706-.3296-.0011.6047-.6532 1.8983-.6335 2.6865.041 1.4324 1.2255.1142 3.4695-1.8016 3.0668zm5.0377-.1125c-1.9591-.3-2.6203-2.1867-1.1535-3.2915 1.3107-.9873 3.3222-.0095 3.2577 1.5836-.0398.9811-1.1207 1.8585-2.1042 1.708zm.4013-.3203c1.5031-.02 2.0059-1.9306.735-2.7936-.7982-.5421-2.0927-.295-2.5552.4876-.542.9171.0474 2.1467 1.1115 2.3185.0282.0045.1473.0043.2647-.0006.1174-.005.3172-.0103.444-.012zm-1.504-.8356c-.4402-.1245-.5095-.6544-.1381-1.0566.3355-.3633.817-.2062 1.0182.3322.0892.2387.058.2748-.2225.2581-.1793-.0106-.2639.0025-.2635.041 0 .0067.0603.0566.134.1109.2197.162.2247.2153.0267.2836-.144.0497-.4316.0657-.5548.0308zm-4.6535.1072c-.4663-.0444-.6306-.2972-.4418-.6793.224-.453.732-.5855 1.0146-.2645.4276.4858.1102 1.0088-.5728.9438zM5.2609 4.894c-.0061-.01.0088-.0465.0331-.0811.0243-.0347.0641-.0913.0885-.1258.0243-.0345.0483-.0939.0534-.132.0058-.043.0197-.0722.037-.0775.0706-.0214.6893-.1486.9498-.1953.6694-.12.851-.132 2.3652-.156 2.81-.0445 3.8851-.08 4.9246-.1626.3576-.0284.3387-.0321.4233.0843.1331.1833.0163.311-.3377.3693-.4252.0699-2.1378.0258-2.5939-.0668-.4837-.0983-.636-.0931-.7755.0264-.0812.0694-.0633.0696-.2775-.0018-.27-.09-.507-.1186-.8766-.106-.3002.0103-.417.0236-1.1357.129-.1925.0283-.4615.0599-.5976.0701-.4723.0356-1.013.1356-1.7562.325-.4978.1267-.507.1285-.5242.1008Zm11.997-1.2081c0-.0854.1102-.209.595-.6678.2691-.2547.4638-.4815.4638-.5401 0-.0556.0477-.0598.0665-.006.1044.2996-.1068.597-.6983.9833a31.133 31.133 0 0 0-.3207.2115c-.0847.0578-.1062.0617-.1062.019z"/>
    </svg>
  </div>
  <span class="brand-icon__name">gin</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_prisma = {
  id: 'brand-prisma',
  name: 'Prisma',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'prisma'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Prisma</title><path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z"/>
    </svg>
  </div>
  <span class="brand-icon__name">prisma</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_typeorm = {
  id: 'brand-typeorm',
  name: 'TypeORM',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'typeorm'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>TypeORM</title><path d="M22.593 6.863c0 .9-.008 1.742.004 2.583.006.355.07.708.21 1.038.133.306.35.544.652.692.153.075.314.131.47.204a.134.13 0 0 1 .066.099q.008.58 0 1.16c0 .039-.052.097-.093.11a1.818 1.82 0 0 0-1.178 1.22c-.125.387-.137.785-.137 1.187q.002 2.24-.006 4.48c0 .466-.07.926-.225 1.363-.087.241-.226.463-.347.69-.016.031-.05.052-.08.073-.185.137-.365.287-.56.407-.169.103-.354.177-.535.255-.114.048-.236.082-.352.121q-.025.01-.05.014c-.23.028-.46.062-.689.083q-.418.033-.834.052c-.061.003-.123-.02-.183-.026-.104-.01-.13-.07-.128-.168a31.962 32 0 0 0 0-1.017c0-.104.027-.15.139-.141.117.007.24.012.354-.004q.332-.047.655-.125a2.996 3 0 0 0 .44-.153.94.94 0 0 0 .456-.409c.125-.208.185-.437.236-.676.057-.263.036-.52.04-.78.007-1.485 0-2.97.008-4.456q.003-.47.078-.935a2.148 2.15 0 0 1 1.09-1.585l.25-.143c.061-.037.054-.107-.016-.144a2.797 2.8 0 0 1-.815-.646 2.097 2.1 0 0 1-.39-.711c-.18-.551-.205-1.12-.202-1.694.002-1.446-.01-2.892 0-4.337a2.996 3 0 0 0-.072-.666c-.08-.37-.24-.712-.59-.909a2.298 2.3 0 0 0-.467-.177 2.996 3 0 0 0-.503-.11 3.995 4 0 0 0-.54-.025c-.113.001-.153-.03-.15-.147.006-.364.003-.728.001-1.092 0-.089.03-.122.117-.119.196.005.39-.007.584.004.272.016.545.035.815.073a3.096 3.1 0 0 1 1.598.714c.252.215.408.479.534.772.15.346.226.71.275 1.082.13.99.03 1.986.072 2.918ZM1.421 6.715c0-.581-.006-1.163.002-1.745.006-.382.009-.77.049-1.149.027-.263.11-.52.18-.778a1.798 1.8 0 0 1 .366-.723 2.466 2.4 0 0 1 .508-.449c.194-.127.416-.208.629-.305.17-.076.348-.108.53-.141A8.29 8.3 0 0 1 5.258 1.3c.09 0 .122.027.12.117q-.004.558 0 1.118c0 .091-.028.126-.123.122a1.598 1.6 0 0 0-.321.003 7.99 8 0 0 0-.704.127c-.15.035-.291.094-.434.148a.94.94 0 0 0-.46.406c-.123.208-.183.44-.238.68-.067.3.008.588.002.882-.02 1.329-.006 2.658-.01 3.99a9.988 10 0 0 1-.051 1.098c-.08.724-.385 1.328-1.024 1.727q-.173.103-.345.209c-.023.014-.051.049-.047.068a.14.14 0 0 0 .058.084 2.897 2.9 0 0 1 .843.678c.19.23.311.494.4.78.15.496.159 1.006.164 1.516.008 1.298.002 2.597.003 3.896 0 .144.015.288.013.431 0 .072-.025.143-.027.215q-.004.126.005.253c.003.052.02.104.029.156.043.301.137.583.336.817.131.153.303.252.494.321.201.072.41.1.616.149.246.058.485.044.73.054.065.003.09.03.09.093 0 .392.002.784-.005 1.176 0 .029-.053.081-.082.081-.252.005-.503.01-.754-.002a4.994 5 0 0 1-.678-.069c-.234-.044-.46-.122-.69-.186a2.148 2.15 0 0 1-.955-.572 1.898 1.9 0 0 1-.376-.54 4.195 4.2 0 0 1-.292-.87 4.994 5 0 0 1-.103-.964c-.015-1.423-.013-2.846-.023-4.268-.002-.322-.004-.645-.039-.964-.04-.36-.12-.712-.342-1.013a1.498 1.5 0 0 0-.624-.487c-.11-.048-.226-.083-.334-.137-.037-.02-.077-.075-.077-.115q-.006-.56-.003-1.118c0-.1.088-.118.155-.141.372-.13.676-.348.891-.684a2.048 2.05 0 0 0 .344-1.087c.022-.92.03-1.841.044-2.76h-.016Zm6.035.98v-3.11c0-.295.175-.472.472-.472h5.152c.296 0 .473.177.473.472v6.2c0 .32-.17.49-.488.49-1.708 0-3.412-.002-5.12.004-.287 0-.494-.197-.49-.493.006-1.03.002-2.06.002-3.091m.245.002v3.091c0 .208.035.242.24.242h5.119c.214 0 .246-.03.246-.244V4.603c0-.213-.033-.245-.244-.245H7.945c-.21 0-.242.033-.242.247zm-.245 8.39v-3.1c0-.298.173-.474.471-.474h5.152c.3 0 .473.177.473.48v6.184q0 .499-.496.499h-5.11c-.32 0-.488-.17-.488-.489zm.245.006v3.109c0 .189.039.228.227.228h5.142c.202 0 .236-.035.236-.239v-6.197c0-.197-.038-.234-.233-.234H7.941c-.205 0-.24.035-.24.243zm8.741-4.058q-.002 2.09.002 4.184c0 .11-.03.143-.14.142a96.883 97 0 0 0-1.752 0c-.104 0-.12-.04-.12-.13 0-.093.03-.12.12-.12.5.004 1 0 1.499.004.108 0 .148-.031.148-.145q-.003-3.934 0-7.868c0-.112-.036-.147-.147-.146-.5.005-.999 0-1.498.004-.1 0-.123-.034-.123-.128 0-.09.024-.122.119-.121q.888.005 1.776 0c.096 0 .117.033.117.122q-.002 2.101 0 4.202m-5.9-6.336q-1.024 0-2.047-.002c-.04 0-.109-.01-.113-.028-.012-.061-.004-.127 0-.191 0-.01.031-.02.052-.023q.04-.004.082-.002h4.046c.133 0 .194.088.137.208-.01.024-.066.036-.1.036q-.846.002-1.691.001zm.273 1.413c-.585 0-1.17-.004-1.758.003-.13 0-.118-.068-.123-.153-.007-.102.055-.097.123-.097h3.526c.068 0 .13-.004.123.097-.005.086.006.154-.123.153-.59-.008-1.178-.003-1.766-.003Zm.005 1.307c.59 0 1.178.002 1.767-.002.103 0 .118.041.12.13 0 .093-.03.12-.12.12a737.113 738 0 0 0-3.536 0c-.092 0-.121-.029-.12-.121 0-.09.02-.13.121-.13q.886.005 1.768.003m-.009 1.797c-.585 0-1.173-.002-1.759.002-.093 0-.12-.03-.12-.122 0-.093.023-.128.123-.126q1.764.006 3.528 0c.098 0 .123.03.123.125.002.1-.03.124-.127.123q-.884-.003-1.768-.002M8.564 8.664H8.53c-.16 0-.202-.034-.147-.187.045-.129.185-.035.28-.055.027-.004.087.033.092.06.03.172.017.181-.19.181Zm.003-1.799h.034c.166 0 .206.031.148.19-.047.13-.187.034-.284.052-.023.006-.08-.038-.084-.064-.024-.177-.02-.177.185-.177Zm.002 3.351h-.051q-.206.001-.138-.2c.006-.02.038-.04.06-.042.06-.006.118-.002.176-.002.133 0 .19.086.135.208-.006.018-.041.03-.066.034-.038.006-.078.002-.117.002Zm1.973 3.638q1.025.001 2.047-.002c.092 0 .12.027.12.12 0 .09-.017.13-.119.128a878.942 880 0 0 0-4.093 0c-.096 0-.126-.027-.126-.124s.03-.125.125-.125q1.025.004 2.046.003m.272 1.658c-.585 0-1.171-.004-1.758.003-.134 0-.113-.076-.119-.156-.007-.097.051-.094.12-.094h3.533c.075 0 .126.005.12.103-.007.081.006.15-.12.148-.592-.006-1.184-.002-1.776-.002Zm0 1.551q-.88-.002-1.758.002c-.1 0-.12-.037-.121-.129 0-.091.029-.12.12-.12q1.768.004 3.535 0c.09 0 .121.027.12.12 0 .089-.016.13-.12.128q-.887-.004-1.775-.002Zm.009 1.309q.883.002 1.767-.002c.096 0 .12.033.12.122-.002.086-.015.127-.116.126a742.107 743 0 0 0-3.545 0c-.092 0-.116-.033-.113-.118.001-.08.005-.131.11-.13q.889.004 1.778.002m-2.257-3.108h.025c.177 0 .2.013.157.185-.033.13-.161.042-.246.06-.043.008-.117.033-.127-.06-.02-.179-.016-.184.192-.184Zm-.003 1.554h.046c.14 0 .19.07.141.204-.006.019-.039.036-.062.038-.062.005-.124-.003-.187.003-.1.012-.132-.026-.133-.13-.003-.187.133-.087.195-.115m.002 1.798h-.051c-.135 0-.184-.067-.136-.202.006-.018.038-.038.062-.04.054-.006.11-.002.165-.002.145 0 .192.062.146.2-.006.02-.038.038-.06.042-.042.005-.085.001-.125.001Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">typeorm</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_sequelize = {
  id: 'brand-sequelize',
  name: 'Sequelize',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'sequelize'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Sequelize</title><path d="M12.0264 0 1.5947 5.9922v12.0156L12.0264 24l10.3789-5.9922V5.9922L12.0264 0zm-.0274 3.4844 7.4297 4.2266v8.5781l-7.4297 4.2266-7.3476-4.1817-.0801-8.623 7.4277-4.2266zm.0489.5898c-.9765.5627-1.9519 1.1274-2.9277 1.6914v.2539l2.6074 1.5234v.4824c.1355-.0781.2616-.1511.4023-.2324l.2559.1504v-.3359c.8844-.5068 1.8073-1.0412 2.5684-1.4805.0035-.1232.0027-.2534.0039-.373-.9703-.5596-1.9403-1.1197-2.9102-1.6797zM8.335 6.1387c-.9705.553-1.9312 1.1228-2.8926 1.6914v3.4023c.965.5553 1.9287 1.1127 2.8926 1.6699l.4023-.2324v-2.916c.8561-.4945 1.7522-1.0126 2.4902-1.4395v-.4843L8.335 6.1387zm7.4433.0879-2.8926 1.6699v.3379l2.6367 1.541v3.0664c.0854.0494.1705.0991.2559.1484l2.8926-1.6699V7.918l-2.8926-1.6914zm-3.6484 2.1445c-.9636.5584-1.9281 1.1151-2.8926 1.6719v3.4238c.965.5553 1.9287 1.1127 2.8926 1.6699l2.8926-1.6719v-3.4023l-2.8926-1.6914zm-6.1973 3.7227c-.1627.0962-.3275.1889-.4902.2852v3.4023c.9643.5571 1.9284 1.1145 2.8926 1.6719l.4023-.2324v-2.918c.1625-.0939.3086-.1787.4727-.2734-.1629-.0945-.3047-.1763-.4727-.2734v-.508l-.4023.2325c-.8251-.4771-1.6902-.976-2.4024-1.3867zm12.2481.0859-2.4023 1.3887c-.088-.0509-.1672-.0972-.2559-.1484v.334l-.4922.2852.4922.2871v3.0664c.0854.0494.1705.0991.2559.1484l2.8926-1.6719v-3.4023l-.4903-.2872zm-8.4688 2.1387c-.1581.0913-.3165.1821-.4746.2734v3.4238c.9637.5575 1.9282 1.1136 2.8926 1.6699l2.8926-1.6699v-3.4023l-.4902-.2871-2.4023 1.3887c-.8307-.4804-1.7013-.9829-2.4181-1.3965z"/>
    </svg>
  </div>
  <span class="brand-icon__name">sequelize</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_mongoose = {
  id: 'brand-mongoose',
  name: 'Mongoose',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'mongoose'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Mongoose</title><path d="M14.014 7.37a9.162 9.162 0 0 0-.808.025c-.218.017-.434.072-.65.11.229.118.456.213.68.315.225.103.436.232.629.387-.253-.097-.499-.208-.752-.298a8.046 8.046 0 0 0-1.624-.421c-.273-.037-.546-.073-.819.005-.276.078-.354.18-.38.458-.04.46.098.887.281 1.298a4.432 4.432 0 0 0 1.185 1.573c.391.335.825.598 1.305.787.136.053.274.103.411.155l-.009.032c-.263-.072-.532-.126-.787-.22a4.14 4.14 0 0 1-1.222-.73 4.16 4.16 0 0 1-1.007-1.22 3.43 3.43 0 0 1-.43-1.609l-.012.005C4.891 7.488.402 11.595.035 11.94l-.034.014c-.002.005 0 .01.003.016L0 11.974l.005-.002c.004.008.01.016.013.024.087-.019.173-.042.26-.054l.069-.01c.324-.115.655-.205.997-.253.484-.069.985-.159 1.48-.156.468.002.943.074 1.402.153.129.022.255.052.38.087.335.075.65.21.933.391l.06.03c.403.19.758.47 1.038.811.052.057.141.116.187.178.096.114.142.236.303.363v-1.737h2.01l.939 1.733.942-1.733h2.07v3.357l.343-.226s.375-1 2.116-1.14l1.996-.064c-.308-.637-.307-.637-.159-.83.147-.19 1.28-.314 1.48-.433l2.912-.588c.007-.022.015.012.03.007.072-.022.147-.037.25-.061l.66-.16c.042-.025.093-.034.14-.05.308-.107.577-.245.726-.573.145-.319.339-.616.41-.967.022-.111.003-.208-.078-.288-.097-.096-.222-.138-.35-.171-.421-.173-.84-.35-1.264-.513-.261-.101-.529-.185-.795-.27a30.574 30.574 0 0 0-.794-.243c-.244-.072-.49-.138-.736-.205-.24-.066-.48-.133-.72-.192-.282-.07-.565-.13-.847-.195-.215-.05-.428-.102-.644-.146-.234-.047-.47-.089-.706-.13-.302-.053-.602-.112-.905-.153-.366-.05-.734-.082-1.101-.125-.345-.04-.691-.065-1.038-.07zm-3.303.767a.154.154 0 0 1 .056.007c.42.13.83.277 1.216.491.365.203.695.45.979.756.012.013.02.028.036.05l-.645-.293-.021.026.37.551-.022.022a1.986 1.986 0 0 0-.665-.322l-.02.02.633.74-.416-.136-.017.02c.163.27.376.505.58.775-.354-.2-.665-.42-.956-.669a4.488 4.488 0 0 1-1.01-1.185c-.107-.19-.201-.385-.222-.606a.468.468 0 0 1 .011-.15.123.123 0 0 1 .113-.097zm5.424.668c.154.002.311-.006.464.015.278.037.555.092.832.14.158.027.317.052.474.086.297.064.594.133.89.2.196.046.392.092.587.14l-.329.161c-.365.027-.731.055-1.097.057a3.268 3.268 0 0 1-.675-.074c-.28-.058-.514-.196-.652-.466-.02-.04-.09-.063-.14-.078-.18-.054-.362-.1-.544-.168.063-.005.126-.014.19-.013zm3.223 2.635.005.02c-.08.022-.16.042-.239.067-.455.14-.916.266-1.363.428-.28.101-.544.25-.81.388-.233.119-.315.322-.287.575.019.162.04.324.055.488a1.786 1.786 0 0 1-.288-.701c-.035-.169.058-.273.18-.365.238-.178.496-.318.777-.41.35-.117.702-.233 1.059-.325.251-.065.513-.09.77-.133.048-.008.094-.021.141-.032zM9.141 13.955v2.676h1.869l.064-.066v-2.61l-.97 1.495z"/>
    </svg>
  </div>
  <span class="brand-icon__name">mongoose</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_drizzle = {
  id: 'brand-drizzle',
  name: 'Drizzle',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'drizzle'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Drizzle</title><path d="M5.353 11.823a1.036 1.036 0 0 0-.395-1.422 1.063 1.063 0 0 0-1.437.399L.138 16.702a1.035 1.035 0 0 0 .395 1.422 1.063 1.063 0 0 0 1.437-.398l3.383-5.903Zm11.216 0a1.036 1.036 0 0 0-.394-1.422 1.064 1.064 0 0 0-1.438.399l-3.382 5.902a1.036 1.036 0 0 0 .394 1.422c.506.283 1.15.104 1.438-.398l3.382-5.903Zm7.293-4.525a1.036 1.036 0 0 0-.395-1.422 1.062 1.062 0 0 0-1.437.399l-3.383 5.902a1.036 1.036 0 0 0 .395 1.422 1.063 1.063 0 0 0 1.437-.399l3.383-5.902Zm-11.219 0a1.035 1.035 0 0 0-.394-1.422 1.064 1.064 0 0 0-1.438.398l-3.382 5.903a1.036 1.036 0 0 0 .394 1.422c.506.282 1.15.104 1.438-.399l3.382-5.902Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">drizzle</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_postgresql = {
  id: 'brand-postgresql',
  name: 'PostgreSQL',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'postgresql'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>PostgreSQL</title><path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"/>
    </svg>
  </div>
  <span class="brand-icon__name">postgresql</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_mysql = {
  id: 'brand-mysql',
  name: 'MySQL',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'mysql'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>MySQL</title><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"/>
    </svg>
  </div>
  <span class="brand-icon__name">mysql</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_mongodb = {
  id: 'brand-mongodb',
  name: 'MongoDB',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'mongodb'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>MongoDB</title><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
    </svg>
  </div>
  <span class="brand-icon__name">mongodb</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_redis = {
  id: 'brand-redis',
  name: 'Redis',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'redis'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Redis</title><path d="M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z"/>
    </svg>
  </div>
  <span class="brand-icon__name">redis</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_sqlite = {
  id: 'brand-sqlite',
  name: 'SQLite',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'sqlite'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>SQLite</title><path d="M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521m-18.573.543A1.842 1.842 0 0 0 1.27 2.9v16.608a1.84 1.84 0 0 0 1.835 1.834h9.418a22.953 22.953 0 0 1-.052-2.707c-.006-.062-.011-.141-.016-.2a27.01 27.01 0 0 0-.473-2.378c-.121-.47-.275-.898-.369-1.057-.116-.197-.098-.31-.097-.432 0-.12.015-.245.037-.386a9.98 9.98 0 0 1 .234-1.045l.217-.028c-.017-.035-.014-.065-.031-.097l-.041-.381a32.8 32.8 0 0 1 .382-1.194l.2-.019c-.008-.016-.01-.038-.018-.053l-.043-.316c.63-3.28 2.587-7.443 4.8-9.791.066-.069.133-.128.198-.194Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">sqlite</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_supabase = {
  id: 'brand-supabase',
  name: 'Supabase',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'supabase'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Supabase</title><path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"/>
    </svg>
  </div>
  <span class="brand-icon__name">supabase</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_firebase = {
  id: 'brand-firebase',
  name: 'Firebase',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'firebase'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Firebase</title><path d="M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z"/>
    </svg>
  </div>
  <span class="brand-icon__name">firebase</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_mariadb = {
  id: 'brand-mariadb',
  name: 'MariaDB',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'mariadb'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>MariaDB</title><path d="M23.157 4.412c-.676.284-.79.31-1.673.372-.65.045-.757.057-1.212.209-.75.246-1.395.75-2.02 1.59-.296.398-1.249 1.913-1.249 1.988 0 .057-.65.998-.915 1.32-.574.713-1.08 1.079-2.14 1.59-.77.36-1.224.524-4.102 1.477-1.073.353-2.133.738-2.367.864-.852.449-1.515 1.036-2.203 1.938-1.003 1.32-.972 1.313-3.042.947a12.264 12.264 0 00-.675-.063c-.644-.05-1.023.044-1.332.334L0 17.193l.177.088c.094.05.353.234.561.398.215.17.461.347.55.391.088.044.17.088.183.101.012.013-.089.17-.228.353-.435.581-.593.871-.574 1.048.019.164.032.17.43.17.517-.006.826-.056 1.261-.208.65-.233 2.058-.94 2.784-1.4.776-.5 1.717-.998 1.956-1.042.082-.02.354-.07.594-.114.58-.107 1.464-.095 2.587.05.108.013.373.045.6.064.227.025.43.057.454.076.026.012.474.037.998.056.934.026 1.104.007 1.3-.189.126-.133.385-.631.498-.985.209-.643.417-.921.366-.492-.113.966-.322 1.692-.713 2.411-.259.499-.663 1.092-.934 1.395-.322.347-.315.36.088.315.619-.063 1.471-.397 2.096-.82.827-.562 1.647-1.691 2.19-3.03.107-.27.22-.22.183.083-.013.094-.038.315-.057.498l-.031.328.353-.202c.833-.48 1.414-1.262 2.127-2.884.227-.518.877-2.922 1.073-3.976a9.64 9.64 0 01.271-1.042c.127-.429.196-.555.48-.858.183-.19.625-.555.978-.808.72-.505.953-.75 1.187-1.205.208-.417.284-1.13.132-1.357-.132-.202-.284-.196-.763.006Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">mariadb</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_influxdb = {
  id: 'brand-influxdb',
  name: 'InfluxDB',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'influxdb'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>InfluxDB</title><path d="M23.778 14.482l-2.287-9.959c-.13-.545-.624-1.09-1.169-1.248L9.87.051C9.74 0 9.584 0 9.426 0c-.443 0-.909.18-1.222.443L.716 7.412C.3 7.776.092 8.504.222 9.024l2.445 10.662c.13.545.624 1.092 1.169 1.248l9.775 3.015c.13.051.285.051.443.051.443 0 .91-.18 1.223-.443l8.007-7.435c.418-.39.624-1.092.494-1.64zM10.962 2.417l7.175 2.21c.285.08.285.21 0 .286l-3.77.858c-.285.08-.674-.05-.883-.26l-2.626-2.834c-.235-.232-.184-.336.104-.26zm4.47 12.872c.079.286-.105.444-.39.365l-7.748-2.392c-.285-.079-.338-.313-.13-.52l5.93-5.514c.209-.209.443-.13.52.156zM2.667 8.267l6.293-5.85c.21-.209.545-.18.754.025L12.86 5.85c.209.21.18.545-.026.754l-6.293 5.85c-.21.21-.545.181-.754-.025L2.64 9.024a.536.536 0 01.026-.757zm1.536 9.284L2.54 10.244c-.08-.285.05-.34.234-.13L5.4 12.949c.209.209.285.624.209.909L4.462 17.55c-.079.285-.208.285-.26 0zm9.202 4.264l-8.217-2.522a.547.547 0 01-.364-.675l1.378-4.421a.547.547 0 01.675-.365l8.216 2.522c.285.079.443.39.364.675L14.08 21.45a.553.553 0 01-.674.365zm7.279-5.98L15.2 20.93c-.209.209-.31.13-.234-.155l1.144-3.694c.079-.285.39-.573.674-.624l3.77-.858c.288-.076.339.054.13.234zm.598-1.09l-4.523 1.039a.534.534 0 01-.65-.39l-1.922-8.372a.534.534 0 01.39-.65L19.1 5.335a.534.534 0 01.649.39l1.923 8.371c.079.31-.102.596-.39.65Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">influxdb</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_neo4j = {
  id: 'brand-neo4j',
  name: 'Neo4j',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'neo4j'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Neo4j</title><path d="M9.629 13.227c-.593 0-1.139.2-1.58.533l-2.892-1.976a2.61 2.61 0 0 0 .101-.711 2.633 2.633 0 0 0-2.629-2.629A2.632 2.632 0 0 0 0 11.073a2.632 2.632 0 0 0 2.629 2.629c.593 0 1.139-.2 1.579-.533L7.1 15.145c-.063.226-.1.465-.1.711 0 .247.037.484.1.711l-2.892 1.976a2.608 2.608 0 0 0-1.579-.533A2.632 2.632 0 0 0 0 20.639a2.632 2.632 0 0 0 2.629 2.629 2.632 2.632 0 0 0 2.629-2.629c0-.247-.037-.485-.101-.711l2.892-1.976c.441.333.987.533 1.58.533a2.633 2.633 0 0 0 2.629-2.629c0-1.45-1.18-2.629-2.629-2.629ZM16.112.732c-4.72 0-7.888 2.748-7.888 8.082v3.802a3.525 3.525 0 0 1 3.071.008v-3.81c0-3.459 1.907-5.237 4.817-5.237s4.817 1.778 4.817 5.237v8.309H24V8.814C24 3.448 20.832.732 16.112.732Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">neo4j</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_elasticsearch = {
  id: 'brand-elasticsearch',
  name: 'Elasticsearch',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'elasticsearch'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Elasticsearch</title><path d="M13.394 0C8.683 0 4.609 2.716 2.644 6.667h15.641a4.77 4.77 0 0 0 3.073-1.11c.446-.375.864-.785 1.247-1.243l.001-.002A11.974 11.974 0 0 0 13.394 0zM1.804 8.889a12.009 12.009 0 0 0 0 6.222h14.7a3.111 3.111 0 1 0 0-6.222zm.84 8.444C4.61 21.283 8.684 24 13.395 24c3.701 0 7.011-1.677 9.212-4.312l-.001-.002a9.958 9.958 0 0 0-1.247-1.243 4.77 4.77 0 0 0-3.073-1.11z"/>
    </svg>
  </div>
  <span class="brand-icon__name">elasticsearch</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_cockroachlabs = {
  id: 'brand-cockroachlabs',
  name: 'Cockroach Labs',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'cockroachlabs'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Cockroach Labs</title><path d="M17.645 16.155a13.013 13.013 0 0 0-4.479-13.287 11.617 11.617 0 0 1 5.815-1.546c.774 0 1.545.075 2.304.226l.32-1.282A13.092 13.092 0 0 0 18.98 0 12.93 12.93 0 0 0 12 2.03 12.933 12.933 0 0 0 5.021 0C4.139 0 3.26.089 2.396.266l.319 1.282a11.83 11.83 0 0 1 2.306-.226 11.64 11.64 0 0 1 5.817 1.544 13.01 13.01 0 0 0 .792 20.877l.375.257.373-.257c2.624-1.801 4.5-4.5 5.27-7.588zm-6.305 5.7A11.687 11.687 0 0 1 7.825 9.519a13.08 13.08 0 0 0 2.457 2.977 3.202 3.202 0 0 1 1.058 2.383zm.661-9.657a11.717 11.717 0 0 1-2.343-2.315 3.23 3.23 0 0 1 0-3.912 11.67 11.67 0 0 1 2.347-2.333c.9.671 1.697 1.468 2.37 2.366a3.197 3.197 0 0 1 0 3.832 11.816 11.816 0 0 1-2.374 2.362zm.659 9.657v-6.976a3.202 3.202 0 0 1 1.06-2.383 13.026 13.026 0 0 0 2.455-2.977 11.694 11.694 0 0 1-3.515 12.336Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">cockroachlabs</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_hasura = {
  id: 'brand-hasura',
  name: 'Hasura',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'hasura'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Hasura</title><path d="M23.558 8.172c.707-2.152.282-6.447-1.09-8.032a.419.419 0 0 0-.664.051l-1.69 2.59a1.322 1.322 0 0 1-1.737.276C16.544 1.885 14.354 1.204 12 1.204s-4.544.68-6.378 1.853a1.326 1.326 0 0 1-1.736-.276L2.196.191A.42.42 0 0 0 1.532.14C.16 1.728-.265 6.023.442 8.172c.236.716.3 1.472.16 2.207-.137.73-.276 1.61-.276 2.223C.326 18.898 5.553 24 11.997 24c6.447 0 11.671-5.105 11.671-11.398 0-.613-.138-1.494-.276-2.223a4.468 4.468 0 0 1 .166-2.207zm-11.56 13.284c-4.984 0-9.036-3.96-9.036-8.827 0-.16.005-.316.014-.473.18-3.316 2.243-6.15 5.16-7.5 1.17-.546 2.481-.848 3.864-.848s2.69.302 3.864.85c2.917 1.351 4.98 4.187 5.16 7.501.008.157.014.316.014.473-.003 4.864-4.057 8.824-9.04 8.824zm3.915-5.43-2.31-3.91-1.98-3.26a.26.26 0 0 0-.223-.125H9.508a.26.26 0 0 0-.227.13.246.246 0 0 0 .003.254l1.895 3.109-2.542 3.787a.25.25 0 0 0-.011.259.26.26 0 0 0 .23.132h1.905a.259.259 0 0 0 .218-.116l1.375-2.096 1.233 2.088a.263.263 0 0 0 .224.127h1.878c.094 0 .18-.049.224-.127a.241.241 0 0 0 0-.251z"/>
    </svg>
  </div>
  <span class="brand-icon__name">hasura</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_appwrite = {
  id: 'brand-appwrite',
  name: 'Appwrite',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'appwrite'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Appwrite</title><path d="M24 17.291v5.29H10.557A10.58 10.58 0 0 1 0 12.715v-1.43c.048-.735.174-1.463.374-2.171C1.63 4.673 5.713 1.419 10.557 1.419c4.844 0 8.927 3.254 10.183 7.695h-5.749a5.283 5.283 0 0 0-4.434-2.404 5.282 5.282 0 0 0-4.434 2.404A5.23 5.23 0 0 0 5.267 12a5.27 5.27 0 0 0 1.66 3.848 5.27 5.27 0 0 0 3.63 1.443H24Zm0-6.734v5.291h-9.813A5.276 5.276 0 0 0 15.848 12c0-.5-.07-.984-.199-1.443H24Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">appwrite</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_vercel = {
  id: 'brand-vercel',
  name: 'Vercel',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'vercel'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Vercel</title><path d="m12 1.608 12 20.784H0Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">vercel</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_netlify = {
  id: 'brand-netlify',
  name: 'Netlify',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'netlify'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Netlify</title><path d="M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2L5.13 6.31Zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14Zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14ZM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65l-.14-.13Zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65l-.14-.14Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">netlify</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_cloudflare = {
  id: 'brand-cloudflare',
  name: 'Cloudflare',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'cloudflare'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Cloudflare</title><path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727"/>
    </svg>
  </div>
  <span class="brand-icon__name">cloudflare</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_digitalocean = {
  id: 'brand-digitalocean',
  name: 'DigitalOcean',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'digitalocean'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>DigitalOcean</title><path d="M12.04 0C5.408-.02.005 5.37.005 11.992h4.638c0-4.923 4.882-8.731 10.064-6.855a6.95 6.95 0 014.147 4.148c1.889 5.177-1.924 10.055-6.84 10.064v-4.61H7.391v4.623h4.61V24c7.86 0 13.967-7.588 11.397-15.83-1.115-3.59-3.985-6.446-7.575-7.575A12.8 12.8 0 0012.039 0zM7.39 19.362H3.828v3.564H7.39zm-3.563 0v-2.978H.85v2.978z"/>
    </svg>
  </div>
  <span class="brand-icon__name">digitalocean</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_render = {
  id: 'brand-render',
  name: 'Render',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'render'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Render</title><path d="M18.263.007c-3.121-.147-5.744 2.109-6.192 5.082-.018.138-.045.272-.067.405-.696 3.703-3.936 6.507-7.827 6.507-1.388 0-2.691-.356-3.825-.979a.2024.2024 0 0 0-.302.178V24H12v-8.999c0-1.656 1.338-3 2.987-3h2.988c3.382 0 6.103-2.817 5.97-6.244-.12-3.084-2.61-5.603-5.682-5.75"/>
    </svg>
  </div>
  <span class="brand-icon__name">render</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_flydotio = {
  id: 'brand-flydotio',
  name: 'Fly.io',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'flydotio'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Fly.io</title><path d="M11.987 0c-2.45-.01-5.002.925-6.541 2.897-1.17 1.502-1.664 3.474-1.49 5.356.29 2.112 1.476 3.96 2.676 5.672a41.5 41.5 0 0 0 4.216 4.831c-1.063.832-1.943 2.286-1.357 3.644.821 2.32 4.665 2.05 5.122-.372.39-1.288-.694-2.533-1.428-3.309 2.388-2.431 4.706-5.036 6.17-8.145.595-1.32.902-2.802.614-4.24-.28-2.341-1.823-4.473-3.967-5.46C14.76.266 13.364.016 11.987 0m-.236 1.577v15.534C9.881 13.483 7.724 9.266 8.73 5.069c.35-1.539 1.253-3.309 3.02-3.492m1.996.04c1.534.357 3.031 1.096 3.906 2.48 1.3 1.93 1.318 4.55.1 6.521-1.268 2.395-3.06 4.463-4.916 6.415 1.472-2.974 3.074-6.106 3.182-9.5-.043-2.08-.438-4.612-2.272-5.916M11.97 20.103c.848.342 1.597 1.983.153 2.173-.664.15-1.367-.599-.995-1.222.213-.355.488-.73.842-.95"/>
    </svg>
  </div>
  <span class="brand-icon__name">flydotio</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_railway = {
  id: 'brand-railway',
  name: 'Railway',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'railway'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Railway</title><path d="M.113 10.27A13.026 13.026 0 000 11.48h18.23c-.064-.125-.15-.237-.235-.347-3.117-4.027-4.793-3.677-7.19-3.78-.8-.034-1.34-.048-4.524-.048-1.704 0-3.555.005-5.358.01-.234.63-.459 1.24-.567 1.737h9.342v1.216H.113v.002zm18.26 2.426H.009c.02.326.05.645.094.961h16.955c.754 0 1.179-.429 1.315-.96zm-17.318 4.28s2.81 6.902 10.93 7.024c4.855 0 9.027-2.883 10.92-7.024H1.056zM11.988 0C7.5 0 3.593 2.466 1.531 6.108l4.75-.005v-.002c3.71 0 3.849.016 4.573.047l.448.016c1.563.052 3.485.22 4.996 1.364.82.621 2.007 1.99 2.712 2.965.654.902.842 1.94.396 2.934-.408.914-1.289 1.458-2.353 1.458H.391s.099.42.249.886h22.748A12.026 12.026 0 0024 12.005C24 5.377 18.621 0 11.988 0z"/>
    </svg>
  </div>
  <span class="brand-icon__name">railway</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_fastly = {
  id: 'brand-fastly',
  name: 'Fastly',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'fastly'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Fastly</title><path d="M13.919 3.036V1.3h.632V0H9.377v1.3h.631v1.749a10.572 10.572 0 00-8.575 10.384C1.433 19.275 6.17 24 12 24c5.842 0 10.567-4.737 10.567-10.567 0-5.186-3.729-9.486-8.648-10.397zm-1.628 15.826v-.607h-.619v.607c-2.757-.158-4.955-2.38-5.101-5.137h.607v-.62h-.607a5.436 5.436 0 015.101-5.089v.607h.62v-.607a5.435 5.435 0 015.137 5.114h-.607v.619h.607a5.444 5.444 0 01-5.138 5.113zm2.26-7.712l-.39-.389-1.979 1.725a.912.912 0 00-.316-.06c-.534 0-.971.448-.971.995 0 .547.437.996.971.996.535 0 .972-.45.972-.996a.839.839 0 00-.049-.304Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">fastly</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_akamai = {
  id: 'brand-akamai',
  name: 'Akamai',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'akamai'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Akamai</title><path d="M13.0548 0C6.384 0 .961 5.3802.961 12.0078.961 18.6354 6.3698 24 13.0548 24c.6168 0 .6454-.3572.0859-.5293-4.9349-1.5063-8.5352-6.069-8.5352-11.4629 0-5.4656 3.6725-10.0706 8.6934-11.5195C13.8153.3448 13.6716 0 13.0548 0Zm2.3242 1.8223c-5.2648 0-9.5254 4.2606-9.5254 9.5254 0 1.2193.2285 2.3818.6445 3.4433.1722.459.4454.4584.4024.0137-.0287-.3156-.0567-.6447-.0567-.9746 0-5.2648 4.2606-9.5254 9.5254-9.5254 4.9779 0 6.4698 2.2235 6.6563 2.08.2008-.1577-1.808-4.5624-7.6465-4.5624zm.4687 4.0703c-1.8622.0592-3.651.7168-5.1035 1.8554-.2582.2009-.1567.3284.1445.1993 2.4675-1.076 5.5812-1.1046 8.6368-.043 2.0514.7173 3.2413 1.7364 3.3418 1.6934.1578-.0718-1.1915-2.2226-3.6446-3.1407-1.1135-.4196-2.2576-.6-3.375-.5644z"/>
    </svg>
  </div>
  <span class="brand-icon__name">akamai</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_vultr = {
  id: 'brand-vultr',
  name: 'Vultr',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'vultr'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Vultr</title><path d="M8.36 2.172A1.194 1.194 0 007.348 1.6H1.2A1.2 1.2 0 000 2.8a1.211 1.211 0 00.182.64l11.6 18.4a1.206 1.206 0 002.035 0l3.075-4.874a1.229 1.229 0 00.182-.64 1.211 1.211 0 00-.182-.642zm10.349 8.68a1.206 1.206 0 002.035 0L21.8 9.178l2.017-3.2a1.211 1.211 0 00.183-.64 1.229 1.229 0 00-.183-.64l-1.6-2.526a1.206 1.206 0 00-1.016-.571h-6.148a1.2 1.2 0 00-1.201 1.2 1.143 1.143 0 00.188.64z"/>
    </svg>
  </div>
  <span class="brand-icon__name">vultr</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_hetzner = {
  id: 'brand-hetzner',
  name: 'Hetzner',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'hetzner'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Hetzner</title><path d="M0 0v24h24V0H0zm4.602 4.025h2.244c.509 0 .716.215.716.717v5.64h8.883v-5.64c0-.509.215-.717.717-.717h2.229c.5 0 .71.23.724.717v14.516c0 .509-.215.717-.717.717h-2.23c-.51 0-.717-.215-.717-.717v-5.735H7.562v5.735c0 .516-.215.717-.716.717H4.602c-.51 0-.717-.208-.717-.717V4.742c0-.509.207-.717.717-.717z"/>
    </svg>
  </div>
  <span class="brand-icon__name">hetzner</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_scaleway = {
  id: 'brand-scaleway',
  name: 'Scaleway',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'scaleway'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Scaleway</title><path d="M16.605 11.11v5.72a1.77 1.77 0 01-1.54 1.69h-4a1.43 1.43 0 01-1.31-1.22 1.09 1.09 0 010-.18 1.37 1.37 0 011.37-1.36h1.74a1 1 0 001-1v-3.62a1.4 1.4 0 011.18-1.39h.17a1.37 1.37 0 011.39 1.36zm-6.46 1.74V9.26a1 1 0 011-1h1.85a1.37 1.37 0 001.37-1.37 1 1 0 000-.17 1.45 1.45 0 00-1.41-1.2h-3.96a1.81 1.81 0 00-1.58 1.66v5.7a1.37 1.37 0 001.37 1.37h.21a1.4 1.4 0 001.15-1.4zm12-4.29V20a4.53 4.53 0 01-4.15 4h-7.58a8.57 8.57 0 01-8.56-8.57V4.54A4.54 4.54 0 016.395 0h7.18a8.56 8.56 0 018.56 8.56zm-2.74 0a5.83 5.83 0 00-5.82-5.82h-7.19a1.79 1.79 0 00-1.8 1.8v10.89a5.83 5.83 0 005.82 5.8h7.44a1.79 1.79 0 001.54-1.48z"/>
    </svg>
  </div>
  <span class="brand-icon__name">scaleway</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_ovh = {
  id: 'brand-ovh',
  name: 'OVH',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'ovh'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>OVH</title><path d="M19.881 10.095l2.563-4.45C23.434 7.389 24 9.404 24 11.555c0 2.88-1.017 5.523-2.71 7.594h-6.62l2.04-3.541h-2.696l3.176-5.513h2.691zm-2.32-5.243L9.333 19.14l.003.009H2.709C1.014 17.077 0 14.435 0 11.555c0-2.152.57-4.17 1.561-5.918L5.855 13.1 10.6 4.852h6.961z"/>
    </svg>
  </div>
  <span class="brand-icon__name">ovh</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_namecheap = {
  id: 'brand-namecheap',
  name: 'Namecheap',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'namecheap'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Namecheap</title><path d="M17.295 17.484c.227.403.57.728.985.931-.309.15-.647.229-.99.232h-3.068a2.26 2.26 0 0 1-1.957-1.143L6.705 6.511a2.27 2.27 0 0 0-.974-.922c.309-.153.652-.233.997-.232h3.05c.81.003 1.558.438 1.959 1.143l5.558 10.984zm-9.329-7.392L6.269 6.755c-.209-.392-.582-.657-.984-.829-.204.165-.391.35-.522.581-.184.349-4.391 8.648-4.569 8.987a2.245 2.245 0 0 0 4.016 1.999l3.756-7.401zm15.846-1.593a2.245 2.245 0 0 0-1.162-2.955v-.001a2.243 2.243 0 0 0-.892-.187l-.003-.011c-.816 0-1.569.443-1.965 1.157l-3.749 7.414 1.689 3.323c.213.399.59.664.998.839.252-.2.473-.444.605-.742l4.479-8.837z"/>
    </svg>
  </div>
  <span class="brand-icon__name">namecheap</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_godaddy = {
  id: 'brand-godaddy',
  name: 'GoDaddy',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'godaddy'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>GoDaddy</title><path d="M20.702 2.29c-2.494-1.554-5.778-1.187-8.706.654C9.076 1.104 5.79.736 3.3 2.29c-3.941 2.463-4.42 8.806-1.07 14.167 2.47 3.954 6.333 6.269 9.77 6.226 3.439.043 7.301-2.273 9.771-6.226 3.347-5.361 2.872-11.704-1.069-14.167zM4.042 15.328a12.838 12.838 0 01-1.546-3.541 10.12 10.12 0 01-.336-3.338c.15-1.98.956-3.524 2.27-4.345 1.315-.822 3.052-.87 4.903-.137.281.113.556.24.825.382A15.11 15.11 0 007.5 7.54c-2.035 3.255-2.655 6.878-1.945 9.765a13.247 13.247 0 01-1.514-1.98zm17.465-3.541a12.866 12.866 0 01-1.547 3.54 13.25 13.25 0 01-1.513 1.984c.635-2.589.203-5.76-1.353-8.734a.39.39 0 00-.563-.153l-4.852 3.032a.397.397 0 00-.126.546l.712 1.139a.395.395 0 00.547.126l3.145-1.965c.101.306.203.606.28.916.296 1.086.41 2.214.335 3.337-.15 1.982-.956 3.525-2.27 4.347a4.437 4.437 0 01-2.25.65h-.101a4.432 4.432 0 01-2.25-.65c-1.314-.822-2.121-2.365-2.27-4.347-.074-1.123.039-2.251.335-3.337a13.212 13.212 0 014.05-6.482 10.148 10.148 0 012.849-1.765c1.845-.733 3.586-.685 4.9.137 1.316.822 2.122 2.365 2.271 4.345a10.146 10.146 0 01-.33 3.334z"/>
    </svg>
  </div>
  <span class="brand-icon__name">godaddy</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_stripe = {
  id: 'brand-stripe',
  name: 'Stripe',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'stripe'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Stripe</title><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/>
    </svg>
  </div>
  <span class="brand-icon__name">stripe</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_paypal = {
  id: 'brand-paypal',
  name: 'PayPal',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'paypal'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>PayPal</title><path d="M15.607 4.653H8.941L6.645 19.251H1.82L4.862 0h7.995c3.754 0 6.375 2.294 6.473 5.513-.648-.478-2.105-.86-3.722-.86m6.57 5.546c0 3.41-3.01 6.853-6.958 6.853h-2.493L11.595 24H6.74l1.845-11.538h3.592c4.208 0 7.346-3.634 7.153-6.949a5.24 5.24 0 0 1 2.848 4.686M9.653 5.546h6.408c.907 0 1.942.222 2.363.541-.195 2.741-2.655 5.483-6.441 5.483H8.714Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">paypal</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_visa = {
  id: 'brand-visa',
  name: 'Visa',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'visa'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Visa</title><path d="M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 01.894.764l.817 4.338 2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 011.913.336l.34-1.59a5.207 5.207 0 00-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.504-.602.725-1.16.734-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 00-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656l1.02-2.815.588 2.815zm-8.16-4.84l-1.603 7.496H8.34l1.605-7.496z"/>
    </svg>
  </div>
  <span class="brand-icon__name">visa</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_mastercard = {
  id: 'brand-mastercard',
  name: 'MasterCard',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'mastercard'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>MasterCard</title><path d="M11.343 18.031c.058.049.12.098.181.146-1.177.783-2.59 1.238-4.107 1.238C3.32 19.416 0 16.096 0 12c0-4.095 3.32-7.416 7.416-7.416 1.518 0 2.931.456 4.105 1.238-.06.051-.12.098-.165.15C9.6 7.489 8.595 9.688 8.595 12c0 2.311 1.001 4.51 2.748 6.031zm5.241-13.447c-1.52 0-2.931.456-4.105 1.238.06.051.12.098.165.15C14.4 7.489 15.405 9.688 15.405 12c0 2.31-1.001 4.507-2.748 6.031-.058.049-.12.098-.181.146 1.177.783 2.588 1.238 4.107 1.238C20.68 19.416 24 16.096 24 12c0-4.094-3.32-7.416-7.416-7.416zM12 6.174c-.096.075-.189.15-.28.231C10.156 7.764 9.169 9.765 9.169 12c0 2.236.987 4.236 2.551 5.595.09.08.185.158.28.232.096-.074.189-.152.28-.232 1.563-1.359 2.551-3.359 2.551-5.595 0-2.235-.987-4.236-2.551-5.595-.09-.08-.184-.156-.28-.231z"/>
    </svg>
  </div>
  <span class="brand-icon__name">mastercard</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_americanexpress = {
  id: 'brand-americanexpress',
  name: 'American Express',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'americanexpress'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>American Express</title><path d="M16.015 14.378c0-.32-.135-.496-.344-.622-.21-.12-.464-.135-.81-.135h-1.543v2.82h.675v-1.027h.72c.24 0 .39.024.478.125.12.13.104.38.104.55v.35h.66v-.555c-.002-.25-.017-.376-.108-.516-.06-.08-.18-.18-.33-.234l.02-.008c.18-.072.48-.297.48-.747zm-.87.407l-.028-.002c-.09.053-.195.058-.33.058h-.81v-.63h.824c.12 0 .24 0 .33.05.098.048.156.147.15.255 0 .12-.045.215-.134.27zM20.297 15.837H19v.6h1.304c.676 0 1.05-.278 1.05-.884 0-.28-.066-.448-.187-.582-.153-.133-.392-.193-.73-.207l-.376-.015c-.104 0-.18 0-.255-.03-.09-.03-.15-.105-.15-.21 0-.09.017-.166.09-.21.083-.046.177-.066.272-.06h1.23v-.602h-1.35c-.704 0-.958.437-.958.84 0 .9.776.855 1.407.87.104 0 .18.015.225.06.046.03.082.106.082.18 0 .077-.035.15-.08.18-.06.053-.15.07-.277.07zM0 0v10.096L.81 8.22h1.75l.225.464V8.22h2.043l.45 1.02.437-1.013h6.502c.295 0 .56.057.756.236v-.23h1.787v.23c.307-.17.686-.23 1.12-.23h2.606l.24.466v-.466h1.918l.254.465v-.466h1.858v3.948H20.87l-.36-.6v.585h-2.353l-.256-.63h-.583l-.27.614h-1.213c-.48 0-.84-.104-1.08-.24v.24h-2.89v-.884c0-.12-.03-.12-.105-.135h-.105v1.036H6.067v-.48l-.21.48H4.69l-.202-.48v.465H2.235l-.256-.624H1.4l-.256.624H0V24h23.786v-7.108c-.27.135-.613.18-.973.18H21.09v-.255c-.21.165-.57.255-.914.255H14.71v-.9c0-.12-.018-.12-.12-.12h-.075v1.022h-1.8v-1.066c-.298.136-.643.15-.928.136h-.214v.915h-2.18l-.54-.617-.57.6H4.742v-3.93h3.61l.518.602.554-.6h2.412c.28 0 .74.03.942.225v-.24h2.177c.202 0 .644.045.903.225v-.24h3.265v.24c.163-.164.508-.24.803-.24h1.89v.24c.194-.15.464-.24.84-.24h1.176V0H0zM21.156 14.955c.004.005.006.012.01.016.01.01.024.01.032.02l-.042-.035zM23.828 13.082h.065v.555h-.065zM23.865 15.03v-.005c-.03-.025-.046-.048-.075-.07-.15-.153-.39-.215-.764-.225l-.36-.012c-.12 0-.194-.007-.27-.03-.09-.03-.15-.105-.15-.21 0-.09.03-.16.09-.204.076-.045.15-.05.27-.05h1.223v-.588h-1.283c-.69 0-.96.437-.96.84 0 .9.78.855 1.41.87.104 0 .18.015.224.06.046.03.076.106.076.18 0 .07-.034.138-.09.18-.045.056-.136.07-.27.07h-1.288v.605h1.287c.42 0 .734-.118.9-.36h.03c.09-.134.135-.3.135-.523 0-.24-.045-.39-.135-.526zM18.597 14.208v-.583h-2.235V16.458h2.235v-.585h-1.57v-.57h1.533v-.584h-1.532v-.51M13.51 8.787h.685V11.6h-.684zM13.126 9.543l-.007.006c0-.314-.13-.5-.34-.624-.217-.125-.47-.135-.81-.135H10.43v2.82h.674v-1.034h.72c.24 0 .39.03.487.12.122.136.107.378.107.548v.354h.677v-.553c0-.25-.016-.375-.11-.516-.09-.107-.202-.19-.33-.237.172-.07.472-.3.472-.75zm-.855.396h-.015c-.09.054-.195.056-.33.056H11.1v-.623h.825c.12 0 .24.004.33.05.09.04.15.128.15.25s-.047.22-.134.266zM15.92 9.373h.632v-.6h-.644c-.464 0-.804.105-1.02.33-.286.3-.362.69-.362 1.11 0 .512.123.833.36 1.074.232.238.645.31.97.31h.78l.255-.627h1.39l.262.627h1.36v-2.11l1.272 2.11h.95l.002.002V8.786h-.684v1.963l-1.18-1.96h-1.02V11.4L18.11 8.744h-1.004l-.943 2.22h-.3c-.177 0-.362-.03-.468-.134-.125-.15-.186-.36-.186-.662 0-.285.08-.51.194-.63.133-.135.272-.165.516-.165zm1.668-.108l.464 1.118v.002h-.93l.466-1.12zM2.38 10.97l.254.628H4V9.393l.972 2.205h.584l.973-2.202.015 2.202h.69v-2.81H6.118l-.807 1.904-.876-1.905H3.343v2.663L2.205 8.787h-.997L.01 11.597h.72l.26-.626h1.39zm-.688-1.705l.46 1.118-.003.002h-.915l.457-1.12zM11.856 13.62H9.714l-.85.923-.825-.922H5.346v2.82H8l.855-.932.824.93h1.302v-.94h.838c.6 0 1.17-.164 1.17-.945l-.006-.003c0-.78-.598-.93-1.128-.93zM7.67 15.853l-.014-.002H6.02v-.557h1.47v-.574H6.02v-.51H7.7l.733.82-.764.824zm2.642.33l-1.03-1.147 1.03-1.108v2.253zm1.553-1.258h-.885v-.717h.885c.24 0 .42.098.42.344 0 .243-.15.372-.42.372zM9.967 9.373v-.586H7.73V11.6h2.237v-.58H8.4v-.564h1.527V9.88H8.4v-.507"/>
    </svg>
  </div>
  <span class="brand-icon__name">americanexpress</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_wise = {
  id: 'brand-wise',
  name: 'Wise',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'wise'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Wise</title><path d="M6.488 7.469 0 15.05h11.585l1.301-3.576H7.922l3.033-3.507.01-.092L8.993 4.48h8.873l-6.878 18.925h4.706L24 .595H2.543l3.945 6.874Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">wise</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_coinbase = {
  id: 'brand-coinbase',
  name: 'Coinbase',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'coinbase'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Coinbase</title><path d="M4.844 11.053c-.872 0-1.553.662-1.553 1.548s.664 1.542 1.553 1.542c.889 0 1.564-.667 1.564-1.547 0-.875-.664-1.543-1.564-1.543zm.006 2.452c-.497 0-.86-.386-.86-.904 0-.523.357-.909.854-.909.502 0 .866.392.866.91 0 .517-.364.903-.86.903zm1.749-1.778h.433v2.36h.693V11.11H6.599zm-5.052-.035c.364 0 .653.224.762.558h.734c-.133-.713-.722-1.197-1.49-1.197-.872 0-1.553.662-1.553 1.548 0 .887.664 1.543 1.553 1.543.75 0 1.351-.484 1.484-1.203h-.728a.78.78 0 01-.756.564c-.502 0-.855-.386-.855-.904 0-.523.347-.909.85-.909zm18.215.622l-.508-.075c-.242-.035-.415-.115-.415-.305 0-.207.225-.31.53-.31.336 0 .55.143.595.379h.67c-.075-.599-.537-.95-1.247-.95-.733 0-1.218.375-1.218.904 0 .506.317.8.958.892l.508.075c.249.034.387.132.387.316 0 .236-.242.334-.577.334-.41 0-.641-.167-.676-.42h-.681c.064.581.52.99 1.35.99.757 0 1.26-.346 1.26-.938 0-.53-.364-.806-.936-.892zM7.378 9.885a.429.429 0 00-.444.437c0 .254.19.438.444.438a.429.429 0 00.445-.438.429.429 0 00-.445-.437zm10.167 2.245c0-.645-.392-1.076-1.224-1.076-.785 0-1.224.397-1.31 1.007h.687c.035-.236.22-.432.612-.432.352 0 .525.155.525.345 0 .248-.317.311-.71.351-.531.058-1.19.242-1.19.933 0 .535.4.88 1.034.88.497 0 .809-.207.965-.535.023.293.242.483.548.483h.404v-.616h-.34v-1.34zm-.68.748c0 .397-.347.69-.769.69-.26 0-.48-.11-.48-.34 0-.293.353-.373.676-.408.312-.028.485-.097.572-.23zm-3.679-1.825c-.386 0-.71.162-.94.432V9.856h-.693v4.23h.68v-.391c.232.282.56.449.953.449.832 0 1.461-.656 1.461-1.543 0-.886-.64-1.548-1.46-1.548zm-.103 2.452c-.497 0-.86-.386-.86-.904 0-.517.369-.909.865-.909.503 0 .855.386.855.91 0 .517-.364.903-.86.903zm-3.187-2.452c-.45 0-.745.184-.919.443v-.385H8.29v2.975h.693v-1.617c0-.455.289-.777.716-.777.398 0 .647.282.647.69v1.704h.692v-1.755c0-.748-.386-1.278-1.142-1.278zM24 12.503c0-.851-.624-1.45-1.46-1.45-.89 0-1.542.668-1.542 1.548 0 .927.698 1.543 1.553 1.543.722 0 1.287-.426 1.432-1.03h-.722c-.104.264-.358.414-.699.414-.445 0-.78-.276-.854-.76H24v-.264zm-2.252-.23c.11-.414.422-.615.78-.615.392 0 .693.224.762.615Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">coinbase</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_binance = {
  id: 'brand-binance',
  name: 'Binance',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'binance'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Binance</title><path d="M16.624 13.9202l2.7175 2.7154-7.353 7.353-7.353-7.352 2.7175-2.7164 4.6355 4.6595 4.6356-4.6595zm4.6366-4.6366L24 12l-2.7154 2.7164L18.5682 12l2.6924-2.7164zm-9.272.001l2.7163 2.6914-2.7164 2.7174v-.001L9.2721 12l2.7164-2.7154zm-9.2722-.001L5.4088 12l-2.6914 2.6924L0 12l2.7164-2.7164zM11.9885.0115l7.353 7.329-2.7174 2.7154-4.6356-4.6356-4.6355 4.6595-2.7174-2.7154 7.353-7.353z"/>
    </svg>
  </div>
  <span class="brand-icon__name">binance</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_revolut = {
  id: 'brand-revolut',
  name: 'Revolut',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'revolut'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Revolut</title><path d="M20.9133 6.9566C20.9133 3.1208 17.7898 0 13.9503 0H2.424v3.8605h10.9782c1.7376 0 3.177 1.3651 3.2087 3.043.016.84-.2994 1.633-.8878 2.2324-.5886.5998-1.375.9303-2.2144.9303H9.2322a.2756.2756 0 0 0-.2755.2752v3.431c0 .0585.018.1142.052.1612L16.2646 24h5.3114l-7.2727-10.094c3.6625-.1838 6.61-3.2612 6.61-6.9494zM6.8943 5.9229H2.424V24h4.4704z"/>
    </svg>
  </div>
  <span class="brand-icon__name">revolut</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_mercadopago = {
  id: 'brand-mercadopago',
  name: 'Mercado Pago',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'mercadopago'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Mercado Pago</title><path d="M11.115 16.479a.93.927 0 0 1-.939-.886c-.002-.042-.006-.155-.103-.155-.04 0-.074.023-.113.059-.112.103-.254.206-.46.206a.816.814 0 0 1-.305-.066c-.535-.214-.542-.578-.521-.725.006-.038.007-.08-.02-.11l-.032-.03h-.034c-.027 0-.055.012-.093.039a.788.786 0 0 1-.454.16.7.699 0 0 1-.253-.05c-.708-.27-.65-.928-.617-1.126.005-.041-.005-.072-.03-.092l-.05-.04-.047.043a.728.726 0 0 1-.505.203.73.728 0 0 1-.732-.725c0-.4.328-.722.732-.722.364 0 .675.27.721.63l.026.195.11-.165c.01-.018.307-.46.852-.46.102 0 .21.016.316.05.434.13.508.52.519.68.008.094.075.1.09.1.037 0 .064-.024.083-.045a.746.744 0 0 1 .54-.225c.128 0 .263.03.402.09.69.293.379 1.158.374 1.167-.058.144-.061.207-.005.244l.027.013h.02c.03 0 .07-.014.134-.035.093-.032.235-.08.367-.08a.944.942 0 0 1 .94.93.936.934 0 0 1-.94.928zm7.302-4.171c-1.138-.98-3.768-3.24-4.481-3.77-.406-.302-.685-.462-.928-.533a1.559 1.554 0 0 0-.456-.07c-.182 0-.376.032-.58.095-.46.145-.918.505-1.362.854l-.023.018c-.414.324-.84.66-1.164.73a1.986 1.98 0 0 1-.43.049c-.362 0-.687-.104-.81-.258-.02-.025-.007-.066.04-.125l.008-.008 1-1.067c.783-.774 1.525-1.506 3.23-1.545h.085c1.062 0 2.12.469 2.24.524a7.03 7.03 0 0 0 3.056.724c1.076 0 2.188-.263 3.354-.795a9.135 9.11 0 0 0-.405-.317c-1.025.44-2.003.66-2.946.66-.962 0-1.925-.229-2.858-.68-.05-.022-1.22-.567-2.44-.57-.032 0-.065 0-.096.002-1.434.033-2.24.536-2.782.976-.528.013-.982.138-1.388.25-.361.1-.673.186-.979.185-.125 0-.35-.01-.37-.012-.35-.01-2.115-.437-3.518-.962-.143.1-.28.203-.415.31 1.466.593 3.25 1.053 3.812 1.089.157.01.323.027.491.027.372 0 .744-.103 1.104-.203.213-.059.446-.123.692-.17l-.196.194-1.017 1.087c-.08.08-.254.294-.14.557a.705.703 0 0 0 .268.292c.243.162.677.27 1.08.271.152 0 .297-.015.43-.044.427-.095.874-.448 1.349-.82.377-.296.913-.672 1.323-.782a1.494 1.49 0 0 1 .37-.05.611.61 0 0 1 .095.005c.27.034.533.125 1.003.472.835.62 4.531 3.815 4.566 3.846.002.002.238.203.22.537-.007.186-.11.352-.294.466a.902.9 0 0 1-.484.15.804.802 0 0 1-.428-.124c-.014-.01-1.28-1.157-1.746-1.543-.074-.06-.146-.115-.22-.115a.122.122 0 0 0-.096.045c-.073.09.01.212.105.294l1.48 1.47c.002 0 .184.17.204.395.012.244-.106.447-.35.606a.957.955 0 0 1-.526.171.766.764 0 0 1-.42-.127l-.214-.206a21.035 20.978 0 0 0-1.08-1.009c-.072-.058-.148-.112-.221-.112a.127.127 0 0 0-.094.038c-.033.037-.056.103.028.212a.698.696 0 0 0 .075.083l1.078 1.198c.01.01.222.26.024.511l-.038.048a1.18 1.178 0 0 1-.1.096c-.184.15-.43.164-.527.164a.8.798 0 0 1-.147-.012c-.106-.018-.178-.048-.212-.089l-.013-.013c-.06-.06-.602-.609-1.054-.98-.059-.05-.133-.11-.21-.11a.128.128 0 0 0-.096.042c-.09.096.044.24.1.293l.92 1.003a.204.204 0 0 1-.033.062c-.033.044-.144.155-.479.196a.91.907 0 0 1-.122.007c-.345 0-.712-.164-.902-.264a1.343 1.34 0 0 0 .13-.576 1.368 1.365 0 0 0-1.42-1.357c.024-.342-.025-.99-.697-1.274a1.455 1.452 0 0 0-.575-.125c-.146 0-.287.025-.42.075a1.153 1.15 0 0 0-.671-.564 1.52 1.515 0 0 0-.494-.085c-.28 0-.537.08-.767.242a1.168 1.165 0 0 0-.903-.43 1.173 1.17 0 0 0-.82.335c-.287-.217-1.425-.93-4.467-1.613a17.39 17.344 0 0 1-.692-.189 4.822 4.82 0 0 0-.077.494l.67.157c3.108.682 4.136 1.391 4.309 1.525a1.145 1.142 0 0 0-.09.442 1.16 1.158 0 0 0 1.378 1.132c.096.467.406.821.879 1.003a1.165 1.162 0 0 0 .415.08c.09 0 .179-.012.266-.034.086.22.282.493.722.668a1.233 1.23 0 0 0 .457.094c.122 0 .241-.022.355-.063a1.373 1.37 0 0 0 1.269.841c.37.002.726-.147.985-.41.221.121.688.341 1.163.341.06 0 .118-.002.175-.01.47-.059.689-.24.789-.382a.571.57 0 0 0 .048-.078c.11.032.234.058.373.058.255 0 .501-.086.75-.265.244-.174.418-.424.444-.637v-.01c.083.017.167.026.251.026.265 0 .527-.082.773-.242.48-.31.562-.715.554-.98a1.28 1.279 0 0 0 .978-.194 1.04 1.04 0 0 0 .502-.808 1.088 1.085 0 0 0-.16-.653c.804-.342 2.636-1.003 4.795-1.483a4.734 4.721 0 0 0-.067-.492 27.742 27.667 0 0 0-5.049 1.62zm5.123-.763c0 4.027-5.166 7.293-11.537 7.293-6.372 0-11.538-3.266-11.538-7.293 0-4.028 5.165-7.293 11.539-7.293 6.371 0 11.537 3.265 11.537 7.293zm.46.004c0-4.272-5.374-7.755-12-7.755S.002 7.277.002 11.55L0 12.004c0 4.533 4.695 8.203 11.999 8.203 7.347 0 12-3.67 12-8.204z"/>
    </svg>
  </div>
  <span class="brand-icon__name">mercadopago</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_square = {
  id: 'brand-square',
  name: 'Square',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'square'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Square</title><path d="M4.01 0A4.01 4.01 0 000 4.01v15.98c0 2.21 1.8 4 4.01 4.01h15.98C22.2 24 24 22.2 24 19.99V4A4.01 4.01 0 0019.99 0H4zm1.62 4.36h12.74c.7 0 1.26.57 1.26 1.27v12.74c0 .7-.56 1.27-1.26 1.27H5.63c-.7 0-1.26-.57-1.26-1.27V5.63a1.27 1.27 0 011.26-1.27zm3.83 4.35a.73.73 0 00-.73.73v5.09c0 .4.32.72.72.72h5.1a.73.73 0 00.73-.72V9.44a.73.73 0 00-.73-.73h-5.1Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">square</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_adyen = {
  id: 'brand-adyen',
  name: 'Adyen',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'adyen'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Adyen</title><path d="M11.64703 9.88245v2.93377c0 .13405.10867.24271.24272.24271h.46316V9.88245h1.76474v5.1503c0 .46916-.38033.8495-.8495.8495H9.94303v-1.23507h2.40991v-.52942h-1.62108c-.46917 0-.8495-.38033-.8495-.8495V9.88245h1.76467Zm-8.26124.00001c.46917 0 .8495.38034.8495.8495v3.3858H.8495c-.46916 0-.8495-.38033-.8495-.8495v-.94805c0-.46917.38034-.8495.8495-.8495h.91521v1.3455c0 .13406.10867.24272.24272.24272h.46316V11.184c0-.13405-.10867-.24271-.24272-.24271l-2.16719-.00002V9.88246Zm5.79068-1.76471v6.00001H5.79068c-.46917 0-.8495-.38033-.8495-.8495v-2.53631c0-.46917.38033-.8495.8495-.8495h.91515v2.93377c0 .13405.10867.24271.24272.24271h.46316l.00005-4.94118h1.76471Zm9.03286 1.76471a.8495.8495 0 0 1 .8495.8495v.94805c0 .46917-.38033.8495-.8495.8495h-.9152v-1.3455c0-.13404-.10868-.2427-.24272-.2427h-.46317v1.8749c0 .13406.10867.24272.24272.24272h2.16719v1.05883h-3.32511c-.46917 0-.8495-.38033-.8495-.8495v-3.3858Zm4.94117 0c.46916 0 .8495.38034.8495.8495v3.3858h-1.7647V11.184c-.0004-.13388-.10884-.24232-.24272-.24272h-.46316v3.1765H19.7647V9.88245Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">adyen</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_razorpay = {
  id: 'brand-razorpay',
  name: 'Razorpay',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'razorpay'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Razorpay</title><path d="M22.436 0l-11.91 7.773-1.174 4.276 6.625-4.297L11.65 24h4.391l6.395-24zM14.26 10.098L3.389 17.166 1.564 24h9.008l3.688-13.902Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">razorpay</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_x = {
  id: 'brand-x',
  name: 'X',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'x'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>X</title><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/>
    </svg>
  </div>
  <span class="brand-icon__name">x</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_instagram = {
  id: 'brand-instagram',
  name: 'Instagram',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'instagram'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
    </svg>
  </div>
  <span class="brand-icon__name">instagram</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_facebook = {
  id: 'brand-facebook',
  name: 'Facebook',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'facebook'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">facebook</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_youtube = {
  id: 'brand-youtube',
  name: 'YouTube',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'youtube'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  </div>
  <span class="brand-icon__name">youtube</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_tiktok = {
  id: 'brand-tiktok',
  name: 'TikTok',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'tiktok'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  </div>
  <span class="brand-icon__name">tiktok</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_twitch = {
  id: 'brand-twitch',
  name: 'Twitch',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'twitch'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Twitch</title><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">twitch</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_discord = {
  id: 'brand-discord',
  name: 'Discord',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'discord'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">discord</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_whatsapp = {
  id: 'brand-whatsapp',
  name: 'WhatsApp',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'whatsapp'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">whatsapp</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_telegram = {
  id: 'brand-telegram',
  name: 'Telegram',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'telegram'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  </div>
  <span class="brand-icon__name">telegram</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_reddit = {
  id: 'brand-reddit',
  name: 'Reddit',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'reddit'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Reddit</title><path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">reddit</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_medium = {
  id: 'brand-medium',
  name: 'Medium',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'medium'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Medium</title><path d="M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z"/>
    </svg>
  </div>
  <span class="brand-icon__name">medium</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_substack = {
  id: 'brand-substack',
  name: 'Substack',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'substack'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Substack</title><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
    </svg>
  </div>
  <span class="brand-icon__name">substack</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_notion = {
  id: 'brand-notion',
  name: 'Notion',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'notion'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Notion</title><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
    </svg>
  </div>
  <span class="brand-icon__name">notion</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_pinterest = {
  id: 'brand-pinterest',
  name: 'Pinterest',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'pinterest'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Pinterest</title><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
    </svg>
  </div>
  <span class="brand-icon__name">pinterest</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_tumblr = {
  id: 'brand-tumblr',
  name: 'Tumblr',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'tumblr'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Tumblr</title><path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z"/>
    </svg>
  </div>
  <span class="brand-icon__name">tumblr</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_flickr = {
  id: 'brand-flickr',
  name: 'Flickr',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'flickr'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Flickr</title><path d="M5.334 6.666C2.3884 6.666 0 9.055 0 12c0 2.9456 2.3884 5.334 5.334 5.334 2.9456 0 5.332-2.3884 5.332-5.334 0-2.945-2.3864-5.334-5.332-5.334zm13.332 0c-2.9456 0-5.332 2.389-5.332 5.334 0 2.9456 2.3864 5.334 5.332 5.334C21.6116 17.334 24 14.9456 24 12c0-2.945-2.3884-5.334-5.334-5.334Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">flickr</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_vimeo = {
  id: 'brand-vimeo',
  name: 'Vimeo',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'vimeo'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Vimeo</title><path d="M23.9765 6.4168c-.105 2.338-1.739 5.5429-4.894 9.6088-3.2679 4.247-6.0258 6.3699-8.2898 6.3699-1.409 0-2.578-1.294-3.553-3.881l-1.9179-7.1138c-.719-2.584-1.488-3.878-2.312-3.878-.179 0-.806.378-1.8809 1.132l-1.129-1.457a315.06 315.06 0 003.501-3.1279c1.579-1.368 2.765-2.085 3.5539-2.159 1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.5069.5389 2.45 1.1309 3.674 1.7759 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.8679 3.434-5.7568 6.7619-5.6368 2.4729.06 3.6279 1.664 3.4929 4.7969z"/>
    </svg>
  </div>
  <span class="brand-icon__name">vimeo</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_snapchat = {
  id: 'brand-snapchat',
  name: 'Snapchat',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'snapchat'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Snapchat</title><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/>
    </svg>
  </div>
  <span class="brand-icon__name">snapchat</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_signal = {
  id: 'brand-signal',
  name: 'Signal',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'signal'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Signal</title><path d="M12 0q-.934 0-1.83.139l.17 1.111a11 11 0 0 1 3.32 0l.172-1.111A12 12 0 0 0 12 0M9.152.34A12 12 0 0 0 5.77 1.742l.584.961a10.8 10.8 0 0 1 3.066-1.27zm5.696 0-.268 1.094a10.8 10.8 0 0 1 3.066 1.27l.584-.962A12 12 0 0 0 14.848.34M12 2.25a9.75 9.75 0 0 0-8.539 14.459c.074.134.1.292.064.441l-1.013 4.338 4.338-1.013a.62.62 0 0 1 .441.064A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-7.092.068a12 12 0 0 0-2.59 2.59l.909.664a11 11 0 0 1 2.345-2.345zm14.184 0-.664.909a11 11 0 0 1 2.345 2.345l.909-.664a12 12 0 0 0-2.59-2.59M1.742 5.77A12 12 0 0 0 .34 9.152l1.094.268a10.8 10.8 0 0 1 1.269-3.066zm20.516 0-.961.584a10.8 10.8 0 0 1 1.27 3.066l1.093-.268a12 12 0 0 0-1.402-3.383M.138 10.168A12 12 0 0 0 0 12q0 .934.139 1.83l1.111-.17A11 11 0 0 1 1.125 12q0-.848.125-1.66zm23.723.002-1.111.17q.125.812.125 1.66c0 .848-.042 1.12-.125 1.66l1.111.172a12.1 12.1 0 0 0 0-3.662M1.434 14.58l-1.094.268a12 12 0 0 0 .96 2.591l-.265 1.14 1.096.255.36-1.539-.188-.365a10.8 10.8 0 0 1-.87-2.35m21.133 0a10.8 10.8 0 0 1-1.27 3.067l.962.584a12 12 0 0 0 1.402-3.383zm-1.793 3.848a11 11 0 0 1-2.345 2.345l.664.909a12 12 0 0 0 2.59-2.59zm-19.959 1.1L.357 21.48a1.8 1.8 0 0 0 2.162 2.161l1.954-.455-.256-1.095-1.953.455a.675.675 0 0 1-.81-.81l.454-1.954zm16.832 1.769a10.8 10.8 0 0 1-3.066 1.27l.268 1.093a12 12 0 0 0 3.382-1.402zm-10.94.213-1.54.36.256 1.095 1.139-.266c.814.415 1.683.74 2.591.961l.268-1.094a10.8 10.8 0 0 1-2.35-.869zm3.634 1.24-.172 1.111a12.1 12.1 0 0 0 3.662 0l-.17-1.111q-.812.125-1.66.125a11 11 0 0 1-1.66-.125"/>
    </svg>
  </div>
  <span class="brand-icon__name">signal</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_mastodon = {
  id: 'brand-mastodon',
  name: 'Mastodon',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'mastodon'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/>
    </svg>
  </div>
  <span class="brand-icon__name">mastodon</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_bluesky = {
  id: 'brand-bluesky',
  name: 'Bluesky',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'bluesky'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Bluesky</title><path d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026"/>
    </svg>
  </div>
  <span class="brand-icon__name">bluesky</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_threads = {
  id: 'brand-threads',
  name: 'Threads',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'threads'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Threads</title><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/>
    </svg>
  </div>
  <span class="brand-icon__name">threads</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_figma = {
  id: 'brand-figma',
  name: 'Figma',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'figma'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Figma</title><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
    </svg>
  </div>
  <span class="brand-icon__name">figma</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_framer = {
  id: 'brand-framer',
  name: 'Framer',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'framer'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Framer</title><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
    </svg>
  </div>
  <span class="brand-icon__name">framer</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_behance = {
  id: 'brand-behance',
  name: 'Behance',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'behance'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Behance</title><path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">behance</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_dribbble = {
  id: 'brand-dribbble',
  name: 'Dribbble',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'dribbble'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Dribbble</title><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
    </svg>
  </div>
  <span class="brand-icon__name">dribbble</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_sketch = {
  id: 'brand-sketch',
  name: 'Sketch',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'sketch'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Sketch</title><path d="M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">sketch</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_blender = {
  id: 'brand-blender',
  name: 'Blender',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'blender'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Blender</title><path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626"/>
    </svg>
  </div>
  <span class="brand-icon__name">blender</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_cinema4d = {
  id: 'brand-cinema4d',
  name: 'Cinema 4D',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'cinema4d'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Cinema 4D</title><path d="M12.052 0C5.394-.007-.003 5.412 0 11.976.003 18.654 5.475 23.981 11.978 24c6.535.02 12.057-5.306 12.022-11.998-.009-1.665-.53-5.371-1.84-5.276-1.98.145-2.159 4.12-2.377 5.407-.417 2.46-1.346 5.08-2.953 6.99-1.88 2.359-4.697 3.634-7.662 3.158-3.55-.564-5.893-3.278-6.68-5.201-.753-1.723-1.035-4.162-.07-6.324 1.16-2.766 3.734-4.632 6.28-5.584 2.006-.827 4.103-1.151 5.357-1.375 2.516-.5 2.855-1.463 2.814-2.149-.015-.252-.256-.724-.785-.943C15.03.269 13.268.001 12.052 0zm5.098 1.342c.139.398.088.85-.148 1.256-.325.56-.972 1.05-1.897 1.29-1.636.428-2.976.554-4.34.96-1.312.39-3.397 1.018-5.316 2.552-.268.842-.341 1.892-.369 2.662.15 5.014 4.557 8.884 9.17 8.682.853-.037 1.921-.261 2.912-.68a13.56 13.56 0 0 0 1.387-2.683l.002-.002v-.002c.424-1.03.606-1.836.8-2.793.32-1.565.202-2.88 1.012-4.758.251-.582.71-1.113 1.258-1.346.25-.105.522-.133.79-.072-.89-2.471-3.115-4.326-5.26-5.066z"/>
    </svg>
  </div>
  <span class="brand-icon__name">cinema4d</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_spotify = {
  id: 'brand-spotify',
  name: 'Spotify',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'spotify'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Spotify</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  </div>
  <span class="brand-icon__name">spotify</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_soundcloud = {
  id: 'brand-soundcloud',
  name: 'SoundCloud',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'soundcloud'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>SoundCloud</title><path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">soundcloud</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_netflix = {
  id: 'brand-netflix',
  name: 'Netflix',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'netflix'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Netflix</title><path d="m5.398 0 8.348 23.602c2.346.059 4.856.398 4.856.398L10.113 0H5.398zm8.489 0v9.172l4.715 13.33V0h-4.715zM5.398 1.5V24c1.873-.225 2.81-.312 4.715-.398V14.83L5.398 1.5z"/>
    </svg>
  </div>
  <span class="brand-icon__name">netflix</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_hbomax = {
  id: 'brand-hbomax',
  name: 'HBO Max',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'hbomax'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>HBO Max</title><path d="M3.784 8.716c-.655 0-1.32.29-2.173.946v-.78H0v6.236h1.715V11.24c.749-.592 1.091-.78 1.372-.78.333 0 .551.209.551.729v3.928h1.715V11.23c.748-.582 1.081-.769 1.372-.769.333 0 .55.208.55.728v3.928H8.99v-4.53c0-1.403-.8-1.871-1.57-1.871-.654 0-1.32.27-2.192.936-.28-.697-.894-.936-1.444-.936zm8.689 0c-1.705 0-3.118 1.466-3.118 3.284 0 1.82 1.413 3.285 3.118 3.285.842 0 1.57-.312 2.131-.988v.82h1.632V8.883h-1.632v.822c-.561-.676-1.29-.988-2.131-.988zm4.064.166c.707 1.102 1.507 2.09 2.443 3.077a26.593 26.593 0 0 0-2.443 3.16h2.069a13.603 13.603 0 0 1 1.673-2.183 14.067 14.067 0 0 1 1.632 2.182H24a25.142 25.142 0 0 0-2.432-3.16A23.918 23.918 0 0 0 24 8.883h-2.047a14.65 14.65 0 0 1-1.674 2.11 13.357 13.357 0 0 1-1.674-2.11zm-3.804 1.279c1.018 0 1.84.82 1.84 1.84a1.837 1.837 0 0 1-1.84 1.839c-1.019 0-1.84-.82-1.84-1.84 0-1.018.821-1.84 1.84-1.84zm0 .415c-.78 0-1.414.633-1.414 1.423s.634 1.424 1.413 1.424c.78 0 1.414-.634 1.414-1.424s-.634-1.424-1.414-1.424z"/>
    </svg>
  </div>
  <span class="brand-icon__name">hbomax</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_crunchyroll = {
  id: 'brand-crunchyroll',
  name: 'Crunchyroll',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'crunchyroll'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Crunchyroll</title><path d="M2.909 13.436C2.914 7.61 7.642 2.893 13.468 2.898c5.576.005 10.137 4.339 10.51 9.819q.021-.351.022-.706C24.007 5.385 18.64.006 12.012 0S.007 5.36 0 11.988 5.36 23.994 11.988 24q.412 0 .815-.027c-5.526-.338-9.9-4.928-9.894-10.538Zm16.284.155a4.1 4.1 0 0 1-4.095-4.103 4.1 4.1 0 0 1 2.712-3.855 8.95 8.95 0 0 0-4.187-1.037 9.007 9.007 0 1 0 8.997 9.016q-.001-.847-.15-1.651a4.1 4.1 0 0 1-3.278 1.63Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">crunchyroll</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_tidal = {
  id: 'brand-tidal',
  name: 'TIDAL',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'tidal'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>TIDAL</title><path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996 4.004 12l4.004-4.004L12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004L12.012 12l4.004-4.004-4.004-4.004zM16.042 7.996l3.979-3.979L24 7.996l-3.979 3.979z"/>
    </svg>
  </div>
  <span class="brand-icon__name">tidal</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_deezer = {
  id: 'brand-deezer',
  name: 'Deezer',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'deezer'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Deezer</title><path d="M.693 10.024c.381 0 .693-1.256.693-2.807 0-1.55-.312-2.807-.693-2.807C.312 4.41 0 5.666 0 7.217s.312 2.808.693 2.808ZM21.038 1.56c-.364 0-.684.805-.91 2.096C19.765 1.446 19.184 0 18.526 0c-.78 0-1.464 2.036-1.784 5-.312-2.158-.788-3.536-1.325-3.536-.745 0-1.386 2.704-1.62 6.472-.442-1.932-1.083-3.145-1.793-3.145s-1.35 1.213-1.793 3.145c-.242-3.76-.874-6.463-1.628-6.463-.537 0-1.013 1.378-1.325 3.535C6.938 2.036 6.262 0 5.474 0c-.658 0-1.247 1.447-1.602 3.665-.217-1.291-.546-2.105-.91-2.105-.675 0-1.221 2.807-1.221 6.272 0 3.466.546 6.273 1.221 6.273.277 0 .537-.476.736-1.273.32 2.928.996 4.938 1.776 4.938.606 0 1.143-1.204 1.507-3.11.251 3.622.875 6.195 1.602 6.195.46 0 .875-1.023 1.187-2.677C10.142 21.6 11 24 12.004 24c1.005 0 1.863-2.4 2.235-5.822.312 1.654.727 2.677 1.186 2.677.728 0 1.352-2.573 1.603-6.195.364 1.906.9 3.11 1.507 3.11.78 0 1.455-2.01 1.775-4.938.208.797.46 1.273.737 1.273.675 0 1.22-2.807 1.22-6.273-.008-3.457-.553-6.272-1.23-6.272ZM23.307 10.024c.381 0 .693-1.256.693-2.807 0-1.55-.312-2.807-.693-2.807-.381 0-.693 1.256-.693 2.807s.312 2.808.693 2.808Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">deezer</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_pandora = {
  id: 'brand-pandora',
  name: 'Pandora',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'pandora'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Pandora</title><path d="M1.882 0v24H8.32a1.085 1.085 0 001.085-1.085v-4.61h1.612c7.88 0 11.103-4.442 11.103-9.636C22.119 2.257 17.247 0 12.662 0H1.882Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">pandora</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_shazam = {
  id: 'brand-shazam',
  name: 'Shazam',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'shazam'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Shazam</title><path d="M12 0C5.373 0-.001 5.371-.001 12c0 6.625 5.374 12 12.001 12s12-5.375 12-12c0-6.629-5.373-12-12-12M9.872 16.736c-1.287 0-2.573-.426-3.561-1.281-1.214-1.049-1.934-2.479-2.029-4.024-.09-1.499.42-2.944 1.436-4.067C6.86 6.101 8.907 4.139 8.993 4.055c.555-.532 1.435-.511 1.966.045.53.557.512 1.439-.044 1.971-.021.02-2.061 1.976-3.137 3.164-.508.564-.764 1.283-.719 2.027.049.789.428 1.529 1.07 2.086.844.73 2.51.891 3.553-.043.619-.559 1.372-1.377 1.38-1.386.52-.567 1.4-.603 1.965-.081.565.52.603 1.402.083 1.969-.035.035-.852.924-1.572 1.572-1.005.902-2.336 1.357-3.666 1.357m8.41-.099c-1.143 1.262-3.189 3.225-3.276 3.309-.27.256-.615.385-.96.385-.368 0-.732-.145-1.006-.43-.531-.559-.512-1.439.044-1.971.021-.02 2.063-1.977 3.137-3.166.508-.563.764-1.283.719-2.027-.048-.789-.428-1.529-1.07-2.084-.844-.73-2.51-.893-3.552.044-.621.556-1.373 1.376-1.38 1.384-.521.566-1.399.604-1.966.084-.564-.521-.604-1.404-.082-1.971.034-.037.85-.926 1.571-1.573 1.979-1.778 5.221-1.813 7.227-.077 1.214 1.051 1.935 2.48 2.028 4.025.092 1.497-.419 2.945-1.434 4.068"/>
    </svg>
  </div>
  <span class="brand-icon__name">shazam</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_letterboxd = {
  id: 'brand-letterboxd',
  name: 'Letterboxd',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'letterboxd'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Letterboxd</title><path d="M8.224 14.352a4.447 4.447 0 0 1-3.775 2.092C1.992 16.444 0 14.454 0 12s1.992-4.444 4.45-4.444c1.592 0 2.988.836 3.774 2.092-.427.682-.673 1.488-.673 2.352s.246 1.67.673 2.352zM15.101 12c0-.864.247-1.67.674-2.352-.786-1.256-2.183-2.092-3.775-2.092s-2.989.836-3.775 2.092c.427.682.674 1.488.674 2.352s-.247 1.67-.674 2.352c.786 1.256 2.183 2.092 3.775 2.092s2.989-.836 3.775-2.092A4.42 4.42 0 0 1 15.1 12zm4.45-4.444a4.447 4.447 0 0 0-3.775 2.092c.427.682.673 1.488.673 2.352s-.246 1.67-.673 2.352a4.447 4.447 0 0 0 3.775 2.092C22.008 16.444 24 14.454 24 12s-1.992-4.444-4.45-4.444z"/>
    </svg>
  </div>
  <span class="brand-icon__name">letterboxd</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_imdb = {
  id: 'brand-imdb',
  name: 'IMDb',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'imdb'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>IMDb</title><path d="M22.3781 0H1.6218C.7411.0583.0587.7437.0018 1.5953l-.001 20.783c.0585.8761.7125 1.543 1.5559 1.6191A.337.337 0 0 0 1.6016 24h20.7971a.4579.4579 0 0 0 .0437-.002c.8727-.0768 1.5568-.8271 1.5568-1.7085V1.7098c0-.8914-.696-1.6416-1.584-1.7078A.3294.3294 0 0 0 22.3781 0zm0 .496a1.2144 1.2144 0 0 1 1.1252 1.2139v20.5797c0 .6377-.4875 1.1602-1.1045 1.2145H1.6016c-.5967-.0543-1.0645-.5297-1.1053-1.1258V1.6284C.5371 1.0185 1.0184.5364 1.6217.496h20.7564zM4.7954 8.2603v7.3636H2.8899V8.2603h1.9055zm6.5367 0v7.3636H9.6707v-4.9704l-.6711 4.9704H7.813l-.6986-4.8618-.0066 4.8618h-1.668V8.2603h2.468c.0748.4476.1492.9694.2307 1.5734l.2712 1.8713.4407-3.4447h2.4817zm2.9772 1.3289c.0742.0404.122.108.1417.2034.0279.0953.0345.3118.0345.6442v2.8548c0 .4881-.0345.7867-.0955.8954-.0609.1152-.2304.1695-.5018.1695V9.5211c.204 0 .3457.0205.4211.0681zm-.0211 6.0347c.4543 0 .8006-.0265 1.0245-.0742.2304-.0477.4204-.1357.5694-.2648.1556-.1218.2642-.298.3251-.5219.0611-.2238.1021-.6648.1021-1.3224v-2.5832c0-.6986-.0271-1.1668-.0742-1.4039-.041-.237-.1431-.4543-.3126-.6437-.1695-.1973-.4198-.3324-.7456-.421-.3191-.0808-.8542-.1285-1.7694-.1285h-1.4244v7.3636h2.3051zm5.14-1.7827c0 .3523-.0199.5762-.0544.6708-.033.0947-.1894.1424-.3046.1424-.1086 0-.19-.0477-.2238-.1351-.041-.0887-.0609-.2986-.0609-.6238v-1.9469c0-.3324.0199-.5423.0543-.6237.0338-.0808.1086-.122.2171-.122.1153 0 .2709.0412.3114.1425.041.0947.0609.2986.0609.6032v1.8926zm-2.4747-5.5809v7.3636h1.7157l.1152-.4675c.1556.1894.3251.3324.5152.4271.1828.0881.4608.1357.678.1357.3047 0 .5629-.0748.7802-.237.2165-.1562.3589-.3462.4198-.5628.0543-.2173.0887-.543.0887-.9841v-2.0675c0-.4409-.0139-.7324-.0344-.8681-.0199-.1357-.0742-.2781-.1695-.4204-.1021-.1425-.2437-.251-.4272-.3325-.1834-.0742-.3999-.1152-.6576-.1152-.2172 0-.4952.0477-.6846.1285-.1835.0887-.353.2238-.5086.4007V8.2603h-1.8309z"/>
    </svg>
  </div>
  <span class="brand-icon__name">imdb</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_wordpress = {
  id: 'brand-wordpress',
  name: 'WordPress',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'wordpress'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>WordPress</title><path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/>
    </svg>
  </div>
  <span class="brand-icon__name">wordpress</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_ghost = {
  id: 'brand-ghost',
  name: 'Ghost',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'ghost'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Ghost</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.256 2.313c2.47.005 5.116 2.008 5.898 2.962l.244.3c1.64 1.994 3.569 4.34 3.569 6.966 0 3.719-2.98 5.808-6.158 7.508-1.433.766-2.98 1.508-4.748 1.508-4.543 0-8.366-3.569-8.366-8.112 0-.706.17-1.425.342-2.15.122-.515.244-1.033.307-1.549.548-4.539 2.967-6.795 8.422-7.408a4.29 4.29 0 01.49-.026Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">ghost</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_webflow = {
  id: 'brand-webflow',
  name: 'Webflow',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'webflow'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Webflow</title><path d="m24 4.515-7.658 14.97H9.149l3.205-6.204h-.144C9.566 16.713 5.621 18.973 0 19.485v-6.118s3.596-.213 5.71-2.435H0V4.515h6.417v5.278l.144-.001 2.622-5.277h4.854v5.244h.144l2.72-5.244H24Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">webflow</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_squarespace = {
  id: 'brand-squarespace',
  name: 'Squarespace',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'squarespace'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Squarespace</title><path d="M22.655 8.719c-1.802-1.801-4.726-1.801-6.564 0l-7.351 7.35c-.45.45-.45 1.2 0 1.65.45.449 1.2.449 1.65 0l7.351-7.351c.899-.899 2.362-.899 3.264 0 .9.9.9 2.364 0 3.264l-7.239 7.239c.9.899 2.362.899 3.263 0l5.589-5.589c1.836-1.838 1.836-4.763.037-6.563zm-2.475 2.437c-.451-.45-1.201-.45-1.65 0l-7.354 7.389c-.9.899-2.361.899-3.262 0-.45-.45-1.2-.45-1.65 0s-.45 1.2 0 1.649c1.801 1.801 4.726 1.801 6.564 0l7.351-7.35c.449-.487.449-1.239.001-1.688zm-2.439-7.35c-1.801-1.801-4.726-1.801-6.564 0l-7.351 7.351c-.45.449-.45 1.199 0 1.649s1.2.45 1.65 0l7.395-7.351c.9-.899 2.371-.899 3.27 0 .451.45 1.201.45 1.65 0 .421-.487.421-1.199-.029-1.649h-.021zm-2.475 2.437c-.45-.45-1.2-.45-1.65 0l-7.351 7.389c-.899.9-2.363.9-3.265 0-.9-.899-.9-2.363 0-3.264l7.239-7.239c-.9-.9-2.362-.9-3.263 0L1.35 8.719c-1.8 1.8-1.8 4.725 0 6.563 1.801 1.801 4.725 1.801 6.564 0l7.35-7.351c.451-.488.451-1.238 0-1.688h.002z"/>
    </svg>
  </div>
  <span class="brand-icon__name">squarespace</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_wix = {
  id: 'brand-wix',
  name: 'Wix',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'wix'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Wix</title><path d="m0 7.354 2.113 9.292h.801a1.54 1.54 0 0 0 1.506-1.218l1.351-6.34a.171.171 0 0 1 .167-.137c.08 0 .15.058.167.137l1.352 6.34a1.54 1.54 0 0 0 1.506 1.218h.805l2.113-9.292h-.565c-.62 0-1.159.43-1.296 1.035l-1.26 5.545-1.106-5.176a1.76 1.76 0 0 0-2.19-1.324c-.639.176-1.113.716-1.251 1.365l-1.094 5.127-1.26-5.537A1.33 1.33 0 0 0 .563 7.354H0zm13.992 0a.951.951 0 0 0-.951.95v8.342h.635a.952.952 0 0 0 .951-.95V7.353h-.635zm1.778 0 3.158 4.66-3.14 4.632h1.325c.368 0 .712-.181.918-.486l1.756-2.59a.12.12 0 0 1 .197 0l1.754 2.59c.206.305.55.486.918.486h1.326l-3.14-4.632L24 7.354h-1.326c-.368 0-.712.181-.918.486l-1.772 2.617a.12.12 0 0 1-.197 0L18.014 7.84a1.108 1.108 0 0 0-.918-.486H15.77z"/>
    </svg>
  </div>
  <span class="brand-icon__name">wix</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_shopify = {
  id: 'brand-shopify',
  name: 'Shopify',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'shopify'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Shopify</title><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"/>
    </svg>
  </div>
  <span class="brand-icon__name">shopify</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_woocommerce = {
  id: 'brand-woocommerce',
  name: 'WooCommerce',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'woocommerce'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>WooCommerce</title><path d="M.754 9.58a.754.754 0 00-.754.758v2.525c0 .42.339.758.758.758h3.135l1.431.799-.326-.799h2.373a.757.757 0 00.758-.758v-2.525a.757.757 0 00-.758-.758H.754zm2.709.445h.03c.065.001.124.023.179.067a.26.26 0 01.103.19.29.29 0 01-.033.16c-.13.239-.236.64-.322 1.199-.083.541-.114.965-.094 1.267a.392.392 0 01-.039.219.213.213 0 01-.176.12c-.086.006-.177-.034-.263-.124-.31-.316-.555-.788-.735-1.416-.216.425-.375.744-.478.957-.196.376-.363.568-.502.578-.09.007-.166-.069-.233-.228-.17-.436-.352-1.277-.548-2.524a.297.297 0 01.054-.222c.047-.064.116-.095.21-.102.169-.013.265.065.288.238.103.695.217 1.284.336 1.766l.727-1.387c.066-.126.15-.192.25-.199.146-.01.237.083.273.28.083.441.188.817.315 1.136.086-.844.233-1.453.44-1.828a.255.255 0 01.218-.147zm1.293.36c.056 0 .116.006.18.02.232.05.411.177.53.386.107.18.161.395.161.654 0 .343-.087.654-.26.94-.2.332-.459.5-.781.5a.88.88 0 01-.18-.022.763.763 0 01-.531-.384 1.287 1.287 0 01-.158-.659c0-.342.085-.655.258-.937.202-.333.462-.498.78-.498zm2.084 0c.056 0 .116.006.18.02.236.05.411.177.53.386.107.18.16.395.16.654 0 .343-.086.654-.259.94-.2.332-.459.5-.781.5a.88.88 0 01-.18-.022.763.763 0 01-.531-.384 1.287 1.287 0 01-.16-.659c0-.342.087-.655.26-.937.202-.333.462-.498.78-.498zm4.437.047c-.305 0-.546.102-.718.304-.173.203-.256.49-.256.856 0 .395.086.697.256.906.17.21.418.316.744.316.315 0 .559-.107.728-.316.17-.21.256-.504.256-.883s-.087-.673-.26-.879c-.176-.202-.424-.304-.75-.304zm-1.466.002a1.13 1.13 0 00-.84.326c-.223.22-.332.499-.332.838 0 .362.108.658.328.88.22.223.505.336.861.336.103 0 .22-.016.346-.052v-.54c-.117.034-.216.051-.303.051a.545.545 0 01-.422-.177c-.106-.12-.16-.278-.16-.48 0-.19.053-.348.156-.468a.498.498 0 01.397-.181c.103 0 .212.015.332.049v-.537a1.394 1.394 0 00-.363-.045zm12.414 0a1.135 1.135 0 00-.84.326c-.223.22-.332.499-.332.838 0 .362.108.658.328.88.22.223.506.336.861.336.103 0 .22-.016.346-.052v-.54c-.116.034-.216.051-.303.051a.545.545 0 01-.422-.177c-.106-.12-.16-.278-.16-.48 0-.19.053-.348.156-.468a.498.498 0 01.397-.181c.103 0 .212.015.332.049v-.537a1.394 1.394 0 00-.363-.045zm-9.598.06l-.29 2.264h.579l.156-1.559.395 1.559h.412l.379-1.555.164 1.555h.603l-.304-2.264h-.791l-.12.508c-.03.13-.06.264-.087.4l-.067.352a29.97 29.97 0 00-.258-1.26h-.771zm2.768 0l-.29 2.264h.579l.156-1.559.396 1.559h.412l.375-1.555.165 1.555h.603l-.305-2.264h-.789l-.119.508c-.03.13-.06.264-.086.4l-.066.352c-.063-.352-.15-.771-.26-1.26h-.771zm3.988 0v2.264h.611v-1.031h.012l.494 1.03h.645l-.489-1.019a.61.61 0 00.37-.552.598.598 0 00-.25-.506c-.167-.123-.394-.186-.68-.186h-.713zm3.377 0v2.264H24v-.483h-.63v-.414h.54v-.468h-.54v-.416h.626v-.483H22.76zm-4.793.004v2.264h1.24v-.483h-.627v-.416h.541v-.468h-.54v-.415h.622v-.482h-1.236zm2.025.432c.146.003.25.025.313.072.063.046.091.12.091.227 0 .156-.135.236-.404.24v-.54zm-15.22.011c-.104 0-.205.069-.301.211a1.078 1.078 0 00-.2.639c0 .096.02.2.06.303.049.13.117.198.196.215.083.016.173-.02.27-.106.123-.11.205-.273.252-.492.016-.077.023-.16.023-.246 0-.097-.02-.2-.06-.303-.05-.13-.116-.198-.196-.215a.246.246 0 00-.045-.006zm2.083 0c-.103 0-.204.069-.3.211a1.078 1.078 0 00-.2.639c0 .096.02.2.06.303.049.13.117.198.196.215.083.016.173-.02.27-.106.123-.11.205-.273.252-.492.013-.077.023-.16.023-.246 0-.097-.02-.2-.06-.303-.05-.13-.116-.198-.196-.215a.246.246 0 00-.045-.006zm4.428.006c.233 0 .354.218.354.66-.004.273-.038.46-.098.553a.293.293 0 01-.262.139.266.266 0 01-.242-.139c-.056-.093-.084-.28-.084-.562 0-.436.11-.65.332-.65Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">woocommerce</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_contentful = {
  id: 'brand-contentful',
  name: 'Contentful',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'contentful'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Contentful</title><path d="M21.875 16.361c-.043-.048-1.067-1.18-2.365-1.19-.68 0-1.288.283-1.815.858-.773.842-2.35 1.85-4.25 1.921-1.598.059-3.085-.548-4.423-1.805-1.644-1.544-2.155-4.016-1.302-6.297.834-2.23 2.752-3.616 5.131-3.707l.044-.004c.024-.003 2.302-.258 4.325 1.548.17.185 1.154 1.197 2.475 1.228.823.018 1.586-.336 2.27-1.055.602-.632.87-1.342.797-2.112-.154-1.61-1.806-2.876-2.03-3.04-.212-.184-1.878-1.578-4.476-2.294-2.52-.695-6.42-.853-10.685 2.349a7.31 7.31 0 0 0-.557.49c-.28.208-.523.462-.716.753a12.469 12.469 0 0 0-3.064 8.677c.207 6.283 5.265 9.293 5.646 9.51.262.17 2.906 1.81 6.495 1.809 2.106 0 4.538-.565 7.005-2.322.248-.138 1.714-1.012 2.103-2.52.23-.894.042-1.815-.562-2.737l-.046-.06zm-16.932 1.97c0-1.09.887-1.977 1.977-1.977s1.977.886 1.977 1.977c0 1.09-.887 1.977-1.977 1.977s-1.977-.887-1.977-1.977zm.139-13.657c.236-.275.451-.498.628-.67a1.965 1.965 0 0 1 1.088-.329c1.09 0 1.977.887 1.977 1.977S7.888 7.63 6.798 7.63s-1.977-.887-1.977-1.977c0-.356.096-.69.261-.978zM13.249.999c3.954 0 6.657 2.336 6.826 2.486l.043.034c.42.3 1.532 1.301 1.63 2.324.044.469-.126.898-.52 1.313-.477.5-.983.752-1.504.738-.964-.019-1.743-.887-1.76-.905l-.042-.044c-2.292-2.063-4.83-1.855-5.13-1.822a6.82 6.82 0 0 0-3.012.818 3 3 0 0 0-2.34-3.214C9.543 1.45 11.516.999 13.248.999zM3.884 6.34a3 3 0 0 0 2.914 2.31c.122 0 .24-.01.358-.024a7.336 7.336 0 0 0-.39.866c-.75 2.003-.59 4.14.359 5.854-.068-.005-.136-.01-.205-.01a2.999 2.999 0 0 0-2.967 2.6 10.075 10.075 0 0 1-1.7-5.288 11.43 11.43 0 0 1 1.63-6.309zM21.497 18.9c-.3 1.174-1.615 1.89-1.627 1.896l-.058.036c-6.287 4.499-12.137.667-12.382.502l-.036-.022a2.848 2.848 0 0 1-.034-.02 2.998 2.998 0 0 0 2.543-3.228c1.124.64 2.336.951 3.58.906 2.214-.083 4.057-1.264 4.962-2.25.327-.356.67-.53 1.048-.53h.005c.762.004 1.46.688 1.593.826.421.658.558 1.291.406 1.884z"/>
    </svg>
  </div>
  <span class="brand-icon__name">contentful</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_strapi = {
  id: 'brand-strapi',
  name: 'Strapi',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'strapi'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Strapi</title><path d="M8.32 0c-3.922 0-5.882 0-7.1 1.219C0 2.438 0 4.399 0 8.32v7.36c0 3.922 0 5.882 1.219 7.101C2.438 24 4.399 24 8.32 24h7.36c3.922 0 5.882 0 7.101-1.219C24 21.562 24 19.601 24 15.68V8.32c0-3.922 0-5.882-1.219-7.101C21.562 0 19.601 0 15.68 0H8.32zm.41 7.28h7.83a.16.16 0 0 1 .16.16v7.83h-3.87v-3.71a.41.41 0 0 0-.313-.398l-.086-.012h-3.72V7.28zm-.5.25v3.87H4.553a.08.08 0 0 1-.057-.136L8.23 7.529zm.25 4.12h3.87v3.87H8.64a.16.16 0 0 1-.16-.16v-3.71zm4.12 4.12h3.87l-3.734 3.734a.08.08 0 0 1-.136-.057V15.77z"/>
    </svg>
  </div>
  <span class="brand-icon__name">strapi</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_sanity = {
  id: 'brand-sanity',
  name: 'Sanity',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'sanity'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Sanity</title><path d="m23.327 15.205-.893-1.555-4.321 2.632 4.799-6.11.726-.426-.179-.27.33-.421-1.515-1.261-.693.883-13.992 8.186 5.173-6.221 9.636-5.282-.915-1.769-5.248 2.876 2.584-3.106-1.481-1.305-5.816 6.994-5.777 3.168 4.423-5.847 2.771-1.442-.88-1.789-8.075 4.203L6.186 4.43 4.648 3.198 0 9.349l.072.058.868 1.768 5.153-2.683-4.696 6.207.77.617.458.885 5.425-2.974-5.974 7.185 1.481 1.304.297-.358 14.411-8.459-4.785 6.094.078.065-.007.005.992 1.726 6.364-3.877-2.451 3.954 1.642 1.077L24 15.648z"/>
    </svg>
  </div>
  <span class="brand-icon__name">sanity</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_storyblok = {
  id: 'brand-storyblok',
  name: 'Storyblok',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'storyblok'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Storyblok</title><path d="M13.953 11.462H9.088v2.34h4.748c.281 0 .538-.118.749-.305.187-.187.304-.468.304-.819a1.404 1.404 0 0 0-.257-.842c-.188-.234-.398-.374-.679-.374zm.164-2.83c.21-.14.304-.445.304-.843 0-.35-.094-.608-.257-.771a.935.935 0 0 0-.608-.234H9.088v2.105h4.374c.234 0 .468-.117.655-.257zM21.251 0H2.89c-.585 0-1.053.468-1.053 1.03v18.385c0 .562.468.912 1.03.912H5.58V24l3.368-3.65h12.304c.562 0 .913-.35.913-.935V1.053c0-.562-.351-1.03-.936-1.03zm-3.087 14.9a2.827 2.827 0 0 1-1.006 1.03c-.445.28-.936.538-1.497.655-.562.14-1.17.257-1.801.257H5.579v-13.1h9.403c.468 0 .866.094 1.24.305.351.187.679.444.936.748.524.64.806 1.443.795 2.27 0 .608-.164 1.192-.468 1.754a2.924 2.924 0 0 1-1.403 1.263c.748.21 1.333.585 1.778 1.123.42.561.631 1.286.631 2.199 0 .584-.117 1.076-.35 1.497z"/>
    </svg>
  </div>
  <span class="brand-icon__name">storyblok</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_payloadcms = {
  id: 'brand-payloadcms',
  name: 'Payload CMS',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'payloadcms'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Payload CMS</title><path d="M11.068 0 22.08 6.625v12.573L13.787 24V11.427L2.769 4.808 11.068 0ZM1.92 18.302l8.31-4.812v9.812l-8.31-5Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">payloadcms</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_statamic = {
  id: 'brand-statamic',
  name: 'Statamic',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'statamic'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Statamic</title><path d="M19.78 21.639c1.754 0 2.398-.756 2.398-2.607v-3.62c0-1.722.837-2.704 1.641-3.17.242-.145.242-.483 0-.644-.836-.531-1.64-1.642-1.64-3.122v-3.54c0-1.996-.548-2.575-2.302-2.575H4.123c-1.754 0-2.301.58-2.301 2.575v3.556c0 1.48-.805 2.59-1.641 3.122a.377.377 0 0 0 0 .643c.804.451 1.64 1.433 1.64 3.17v3.605c0 1.85.645 2.607 2.399 2.607zm-7.82-3.299c-1.883 0-3.25-.563-4.522-1.673a.891.891 0 0 1-.29-.676.83.83 0 0 1 .193-.563l.403-.515c.193-.242.402-.354.643-.354.274 0 .531.112.805.29a5.331 5.331 0 0 0 2.993.884c.885 0 1.593-.37 1.593-1.126 0-1.963-6.533-.885-6.533-5.294 0-2.366 1.93-3.685 4.441-3.685 1.77 0 3.074.515 4.04 1.126.24.161.402.483.402.805 0 .193-.049.37-.161.53l-.29.435c-.21.29-.45.435-.756.435-.21 0-.435-.08-.676-.193a5.07 5.07 0 0 0-2.398-.564c-.95 0-1.513.515-1.513 1.046 0 2.012 6.534.918 6.534 5.198 0 2.414-1.947 3.894-4.908 3.894z"/>
    </svg>
  </div>
  <span class="brand-icon__name">statamic</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_joomla = {
  id: 'brand-joomla',
  name: 'Joomla',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'joomla'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Joomla</title><path d="M16.719 14.759L14.22 17.26l-2.37 2.37-.462.466c-1.368 1.365-3.297 1.83-5.047 1.397-.327 1.424-1.604 2.49-3.13 2.49C1.438 23.983 0 22.547 0 20.772c0-1.518 1.055-2.789 2.469-3.123-.446-1.76.016-3.705 1.396-5.08l.179-.18 2.37 2.37-.184.181c-.769.779-.769 2.024 0 2.789.771.78 2.022.78 2.787 0l.465-.465 2.367-2.371 2.502-2.506 2.368 2.372zm.924 6.652c-1.822.563-3.885.12-5.328-1.318l-.18-.185 2.365-2.369.18.184c.771.768 2.018.768 2.787 0 .765-.765.769-2.01-.004-2.781l-.466-.465-2.365-2.37-2.502-2.503 2.37-2.369 2.499 2.505 2.367 2.37.464.464c1.365 1.36 1.846 3.278 1.411 5.021 1.56.224 2.759 1.56 2.759 3.18 0 1.784-1.439 3.21-3.209 3.21-1.545 0-2.851-1.096-3.135-2.565l-.013-.009zM6.975 9.461l2.508-2.505 2.37-2.369.462-.461C13.74 2.7 15.772 2.251 17.58 2.79c.212-1.561 1.555-2.775 3.179-2.775 1.772 0 3.211 1.437 3.211 3.209 0 1.631-1.216 2.978-2.79 3.186.519 1.799.068 3.816-1.35 5.234l-.182.184-2.369-2.369.184-.184c.769-.77.769-2.016 0-2.783-.766-.766-2.011-.768-2.781.003l-.462.461-2.37 2.369-2.505 2.502-2.37-2.366zm-2.653 2.647l-.461-.462C2.43 10.215 1.986 8.17 2.529 6.358 1.1 6.029.03 4.754.03 3.224.03 1.454 1.47.015 3.24.015c1.596 0 2.92 1.166 3.17 2.691 1.73-.405 3.626.065 4.979 1.415l.184.185-2.37 2.37-.183-.181c-.77-.765-2.016-.765-2.785 0-.771.781-.77 2.025-.005 2.79l.465.466 2.37 2.369 2.505 2.505-2.367 2.37-2.51-2.505-2.371-2.37v-.012z"/>
    </svg>
  </div>
  <span class="brand-icon__name">joomla</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_huggingface = {
  id: 'brand-huggingface',
  name: 'Hugging Face',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'huggingface'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Hugging Face</title><path d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624"/>
    </svg>
  </div>
  <span class="brand-icon__name">huggingface</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_anthropic = {
  id: 'brand-anthropic',
  name: 'Anthropic',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'anthropic'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Anthropic</title><path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">anthropic</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_ollama = {
  id: 'brand-ollama',
  name: 'Ollama',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'ollama'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Ollama</title><path d="M16.361 10.26a.894.894 0 0 0-.558.47l-.072.148.001.207c0 .193.004.217.059.353.076.193.152.312.291.448.24.238.51.3.872.205a.86.86 0 0 0 .517-.436.752.752 0 0 0 .08-.498c-.064-.453-.33-.782-.724-.897a1.06 1.06 0 0 0-.466 0zm-9.203.005c-.305.096-.533.32-.65.639a1.187 1.187 0 0 0-.06.52c.057.309.31.59.598.667.362.095.632.033.872-.205.14-.136.215-.255.291-.448.055-.136.059-.16.059-.353l.001-.207-.072-.148a.894.894 0 0 0-.565-.472 1.02 1.02 0 0 0-.474.007Zm4.184 2c-.131.071-.223.25-.195.383.031.143.157.288.353.407.105.063.112.072.117.136.004.038-.01.146-.029.243-.02.094-.036.194-.036.222.002.074.07.195.143.253.064.052.076.054.255.059.164.005.198.001.264-.03.169-.082.212-.234.15-.525-.052-.243-.042-.28.087-.355.137-.08.281-.219.324-.314a.365.365 0 0 0-.175-.48.394.394 0 0 0-.181-.033c-.126 0-.207.03-.355.124l-.085.053-.053-.032c-.219-.13-.259-.145-.391-.143a.396.396 0 0 0-.193.032zm.39-2.195c-.373.036-.475.05-.654.086-.291.06-.68.195-.951.328-.94.46-1.589 1.226-1.787 2.114-.04.176-.045.234-.045.53 0 .294.005.357.043.524.264 1.16 1.332 2.017 2.714 2.173.3.033 1.596.033 1.896 0 1.11-.125 2.064-.727 2.493-1.571.114-.226.169-.372.22-.602.039-.167.044-.23.044-.523 0-.297-.005-.355-.045-.531-.288-1.29-1.539-2.304-3.072-2.497a6.873 6.873 0 0 0-.855-.031zm.645.937a3.283 3.283 0 0 1 1.44.514c.223.148.537.458.671.662.166.251.26.508.303.82.02.143.01.251-.043.482-.08.345-.332.705-.672.957a3.115 3.115 0 0 1-.689.348c-.382.122-.632.144-1.525.138-.582-.006-.686-.01-.853-.042-.57-.107-1.022-.334-1.35-.68-.264-.28-.385-.535-.45-.946-.03-.192.025-.509.137-.776.136-.326.488-.73.836-.963.403-.269.934-.46 1.422-.512.187-.02.586-.02.773-.002zm-5.503-11a1.653 1.653 0 0 0-.683.298C5.617.74 5.173 1.666 4.985 2.819c-.07.436-.119 1.04-.119 1.503 0 .544.064 1.24.155 1.721.02.107.031.202.023.208a8.12 8.12 0 0 1-.187.152 5.324 5.324 0 0 0-.949 1.02 5.49 5.49 0 0 0-.94 2.339 6.625 6.625 0 0 0-.023 1.357c.091.78.325 1.438.727 2.04l.13.195-.037.064c-.269.452-.498 1.105-.605 1.732-.084.496-.095.629-.095 1.294 0 .67.009.803.088 1.266.095.555.288 1.143.503 1.534.071.128.243.393.264.407.007.003-.014.067-.046.141a7.405 7.405 0 0 0-.548 1.873c-.062.417-.071.552-.071.991 0 .56.031.832.148 1.279L3.42 24h1.478l-.05-.091c-.297-.552-.325-1.575-.068-2.597.117-.472.25-.819.498-1.296l.148-.29v-.177c0-.165-.003-.184-.057-.293a.915.915 0 0 0-.194-.25 1.74 1.74 0 0 1-.385-.543c-.424-.92-.506-2.286-.208-3.451.124-.486.329-.918.544-1.154a.787.787 0 0 0 .223-.531c0-.195-.07-.355-.224-.522a3.136 3.136 0 0 1-.817-1.729c-.14-.96.114-2.005.69-2.834.563-.814 1.353-1.336 2.237-1.475.199-.033.57-.028.776.01.226.04.367.028.512-.041.179-.085.268-.19.374-.431.093-.215.165-.333.36-.576.234-.29.46-.489.822-.729.413-.27.884-.467 1.352-.561.17-.035.25-.04.569-.04.319 0 .398.005.569.04a4.07 4.07 0 0 1 1.914.997c.117.109.398.457.488.602.034.057.095.177.132.267.105.241.195.346.374.43.14.068.286.082.503.045.343-.058.607-.053.943.016 1.144.23 2.14 1.173 2.581 2.437.385 1.108.276 2.267-.296 3.153-.097.15-.193.27-.333.419-.301.322-.301.722-.001 1.053.493.539.801 1.866.708 3.036-.062.772-.26 1.463-.533 1.854a2.096 2.096 0 0 1-.224.258.916.916 0 0 0-.194.25c-.054.109-.057.128-.057.293v.178l.148.29c.248.476.38.823.498 1.295.253 1.008.231 2.01-.059 2.581a.845.845 0 0 0-.044.098c0 .006.329.009.732.009h.73l.02-.074.036-.134c.019-.076.057-.3.088-.516.029-.217.029-1.016 0-1.258-.11-.875-.295-1.57-.597-2.226-.032-.074-.053-.138-.046-.141.008-.005.057-.074.108-.152.376-.569.607-1.284.724-2.228.031-.26.031-1.378 0-1.628-.083-.645-.182-1.082-.348-1.525a6.083 6.083 0 0 0-.329-.7l-.038-.064.131-.194c.402-.604.636-1.262.727-2.04a6.625 6.625 0 0 0-.024-1.358 5.512 5.512 0 0 0-.939-2.339 5.325 5.325 0 0 0-.95-1.02 8.097 8.097 0 0 1-.186-.152.692.692 0 0 1 .023-.208c.208-1.087.201-2.443-.017-3.503-.19-.924-.535-1.658-.98-2.082-.354-.338-.716-.482-1.15-.455-.996.059-1.8 1.205-2.116 3.01a6.805 6.805 0 0 0-.097.726c0 .036-.007.066-.015.066a.96.96 0 0 1-.149-.078A4.857 4.857 0 0 0 12 3.03c-.832 0-1.687.243-2.456.698a.958.958 0 0 1-.148.078c-.008 0-.015-.03-.015-.066a6.71 6.71 0 0 0-.097-.725C8.997 1.392 8.337.319 7.46.048a2.096 2.096 0 0 0-.585-.041Zm.293 1.402c.248.197.523.759.682 1.388.03.113.06.244.069.292.007.047.026.152.041.233.067.365.098.76.102 1.24l.002.475-.12.175-.118.178h-.278c-.324 0-.646.041-.954.124l-.238.06c-.033.007-.038-.003-.057-.144a8.438 8.438 0 0 1 .016-2.323c.124-.788.413-1.501.696-1.711.067-.05.079-.049.157.013zm9.825-.012c.17.126.358.46.498.888.28.854.36 2.028.212 3.145-.019.14-.024.151-.057.144l-.238-.06a3.693 3.693 0 0 0-.954-.124h-.278l-.119-.178-.119-.175.002-.474c.004-.669.066-1.19.214-1.772.157-.623.434-1.185.68-1.382.078-.062.09-.063.159-.012z"/>
    </svg>
  </div>
  <span class="brand-icon__name">ollama</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_replicate = {
  id: 'brand-replicate',
  name: 'Replicate',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'replicate'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Replicate</title><path d="M24 10.262v2.712h-9.518V24h-3.034V10.262zm0-5.131v2.717H8.755V24H5.722V5.131zM24 0v2.717H3.034V24H0V0z"/>
    </svg>
  </div>
  <span class="brand-icon__name">replicate</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_langchain = {
  id: 'brand-langchain',
  name: 'LangChain',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'langchain'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>LangChain</title><path d="M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z"/>
    </svg>
  </div>
  <span class="brand-icon__name">langchain</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_perplexity = {
  id: 'brand-perplexity',
  name: 'Perplexity',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'perplexity'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Perplexity</title><path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z"/>
    </svg>
  </div>
  <span class="brand-icon__name">perplexity</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_airbnb = {
  id: 'brand-airbnb',
  name: 'Airbnb',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'airbnb'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Airbnb</title><path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z"/>
    </svg>
  </div>
  <span class="brand-icon__name">airbnb</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_uber = {
  id: 'brand-uber',
  name: 'Uber',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'uber'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Uber</title><path d="M0 7.97v4.958c0 1.867 1.302 3.101 3 3.101.826 0 1.562-.316 2.094-.87v.736H6.27V7.97H5.082v4.888c0 1.257-.85 2.106-1.947 2.106-1.11 0-1.946-.827-1.946-2.106V7.971H0zm7.44 0v7.925h1.13v-.725c.521.532 1.257.86 2.06.86a3.006 3.006 0 0 0 3.034-3.01 3.01 3.01 0 0 0-3.033-3.024 2.86 2.86 0 0 0-2.049.861V7.971H7.439zm9.869 2.038c-1.687 0-2.965 1.37-2.965 3 0 1.72 1.334 3.01 3.066 3.01 1.053 0 1.913-.463 2.49-1.233l-.826-.611c-.43.577-.996.847-1.664.847-.973 0-1.753-.7-1.912-1.64h4.697v-.373c0-1.72-1.222-3-2.886-3zm6.295.068c-.634 0-1.098.294-1.381.758v-.713h-1.131v5.774h1.142V12.61c0-.894.544-1.47 1.291-1.47H24v-1.065h-.396zm-6.319.928c.85 0 1.564.588 1.756 1.47H15.52c.203-.882.916-1.47 1.765-1.47zm-6.732.012c1.086 0 1.98.883 1.98 2.004a1.993 1.993 0 0 1-1.98 2.001A1.989 1.989 0 0 1 8.56 13.02a1.99 1.99 0 0 1 1.992-2.004z"/>
    </svg>
  </div>
  <span class="brand-icon__name">uber</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_lyft = {
  id: 'brand-lyft',
  name: 'Lyft',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'lyft'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Lyft</title><path d="M4.38 15.883c.036.042.125.135.125.135s-.094.059-.152.086a3.046 3.046 0 0 1-1.28.286C1.593 16.39 0 15.29 0 12.878v-8.78h3.512v9.365c0 .95.306 1.781.867 2.42zM24 11.122V7.61h-1.253c-.524-2.76-3.425-4.574-6.341-3.484-1.624.607-2.943 2.548-2.943 4.282v7.979a1608.8 1608.8 0 0 0 .153 0 3.495 3.495 0 0 0 2.38-1.077c.632-.658.98-1.522.98-2.432h1.463V9.366h-1.463V8.4c0-.375.198-.726.526-.909.9-.5 1.815.143 1.815.996v3.22c0 1.273.48 2.456 1.354 3.329a4.666 4.666 0 0 0 3.178 1.351H24v-3.51a1.17 1.17 0 0 1-1.17-1.17v-.586H24zm-14.927 1.17a.585.585 0 0 1-1.17 0V7.61H4.39v5.853a2.928 2.928 0 0 0 4.83 2.224c-.055.433-.294.792-.69 1.04-.373.234-.857.357-1.402.357a3.83 3.83 0 0 1-1.65-.382s-.093-.044-.21-.11v3.119a6.65 6.65 0 0 0 2.468.484c1.312 0 2.51-.41 3.371-1.155.967-.836 1.478-2.056 1.478-3.528V7.61H9.073v4.683z"/>
    </svg>
  </div>
  <span class="brand-icon__name">lyft</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_tripadvisor = {
  id: 'brand-tripadvisor',
  name: 'Tripadvisor',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'tripadvisor'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Tripadvisor</title><path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z"/>
    </svg>
  </div>
  <span class="brand-icon__name">tripadvisor</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_expedia = {
  id: 'brand-expedia',
  name: 'Expedia',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'expedia'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Expedia</title><path d="M19.067 0H4.933A4.94 4.94 0 0 0 0 4.933v14.134A4.932 4.932 0 0 0 4.933 24h14.134A4.932 4.932 0 0 0 24 19.067V4.933C24.01 2.213 21.797 0 19.067 0ZM7.336 19.341c0 .19-.148.337-.337.337h-2.33a.333.333 0 0 1-.337-.337v-2.33c0-.189.148-.336.337-.336H7c.19 0 .337.147.337.337zm12.121-1.486-2.308 2.298c-.169.168-.422.053-.422-.2V9.57l-6.44 6.44a.533.533 0 0 1-.421.17H8.169a.32.32 0 0 1-.338-.338v-1.697c0-.2.053-.316.169-.422l6.44-6.44H4.058c-.253 0-.369-.253-.2-.421l2.297-2.309c.137-.137.285-.232.517-.232H18.15c.854 0 1.539.686 1.539 1.54v11.478c-.01.231-.095.368-.232.516z"/>
    </svg>
  </div>
  <span class="brand-icon__name">expedia</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_kayak = {
  id: 'brand-kayak',
  name: 'Kayak',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'kayak'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z" />
  <path d="M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61" />
  <path d="m6.707 6.707 10.586 10.586" />
  <path d="M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z" />
    </svg>
  </div>
  <span class="brand-icon__name">kayak</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_gmail = {
  id: 'brand-gmail',
  name: 'Gmail',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'gmail'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
    </svg>
  </div>
  <span class="brand-icon__name">gmail</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_googlecalendar = {
  id: 'brand-googlecalendar',
  name: 'Google Calendar',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'googlecalendar'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google Calendar</title><path d="M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632zm-7.207 6.25v-.065c.272-.144.5-.349.687-.617s.279-.595.279-.982c0-.379-.099-.72-.3-1.025a2.05 2.05 0 0 0-.832-.714 2.703 2.703 0 0 0-1.197-.257c-.6 0-1.094.156-1.481.467-.386.311-.65.671-.793 1.078l1.085.452c.086-.249.224-.461.413-.633.189-.172.445-.257.767-.257.33 0 .602.088.816.264a.86.86 0 0 1 .322.703c0 .33-.12.589-.36.778-.24.19-.535.284-.886.284h-.567v1.085h.633c.407 0 .748.109 1.02.327.272.218.407.499.407.843 0 .336-.129.614-.387.832s-.565.327-.924.327c-.351 0-.651-.103-.897-.311-.248-.208-.422-.502-.521-.881l-1.096.452c.178.616.505 1.082.977 1.401.472.319.984.478 1.538.477a2.84 2.84 0 0 0 1.293-.291c.382-.193.684-.458.902-.794.218-.336.327-.72.327-1.149 0-.429-.115-.797-.344-1.105a2.067 2.067 0 0 0-.881-.689zm2.093-1.931l.602.913L15 10.045v5.744h1.187V8.446h-.827l-2.158 1.557zM22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0 0 22.105 0zm-3.289 23.5l4.684-4.684h-4.684V23.5zM0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0v3.289z"/>
    </svg>
  </div>
  <span class="brand-icon__name">googlecalendar</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_googledrive = {
  id: 'brand-googledrive',
  name: 'Google Drive',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'googledrive'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google Drive</title><path d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z"/>
    </svg>
  </div>
  <span class="brand-icon__name">googledrive</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_googledocs = {
  id: 'brand-googledocs',
  name: 'Google Docs',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'googledocs'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google Docs</title><path d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6zm-.545 10.455H7.09v-1.364h7.09v1.364zm2.727-3.273H7.091v-1.364h9.818v1.364zm0-3.273H7.091V9.273h9.818v1.363zM14.727 6h6l-6-6v6z"/>
    </svg>
  </div>
  <span class="brand-icon__name">googledocs</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_googlesheets = {
  id: 'brand-googlesheets',
  name: 'Google Sheets',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'googlesheets'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google Sheets</title><path d="M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z"/>
    </svg>
  </div>
  <span class="brand-icon__name">googlesheets</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_googleslides = {
  id: 'brand-googleslides',
  name: 'Google Slides',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'googleslides'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google Slides</title><path d="M16.09 15.273H7.91v-4.637h8.18v4.637zm1.728-8.523h2.91v15.614c0 .904-.733 1.636-1.637 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.068v6.75h3.841zm-.363 2.523H6.545v7.363h10.91V9.273zm-2.728-5.979V6h6.001l-6-6v3.294z"/>
    </svg>
  </div>
  <span class="brand-icon__name">googleslides</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_trello = {
  id: 'brand-trello',
  name: 'Trello',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'trello'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Trello</title><path d="M21.147 0H2.853A2.86 2.86 0 000 2.853v18.294A2.86 2.86 0 002.853 24h18.294A2.86 2.86 0 0024 21.147V2.853A2.86 2.86 0 0021.147 0zM10.34 17.287a.953.953 0 01-.953.953h-4a.954.954 0 01-.954-.953V5.38a.953.953 0 01.954-.953h4a.954.954 0 01.953.953zm9.233-5.467a.944.944 0 01-.953.947h-4a.947.947 0 01-.953-.947V5.38a.953.953 0 01.953-.953h4a.954.954 0 01.953.953z"/>
    </svg>
  </div>
  <span class="brand-icon__name">trello</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_asana = {
  id: 'brand-asana',
  name: 'Asana',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'asana'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Asana</title><path d="M18.78 12.653c-2.882 0-5.22 2.336-5.22 5.22s2.338 5.22 5.22 5.22 5.22-2.34 5.22-5.22-2.336-5.22-5.22-5.22zm-13.56 0c-2.88 0-5.22 2.337-5.22 5.22s2.338 5.22 5.22 5.22 5.22-2.338 5.22-5.22-2.336-5.22-5.22-5.22zm12-6.525c0 2.883-2.337 5.22-5.22 5.22-2.882 0-5.22-2.337-5.22-5.22 0-2.88 2.338-5.22 5.22-5.22 2.883 0 5.22 2.34 5.22 5.22z"/>
    </svg>
  </div>
  <span class="brand-icon__name">asana</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_clickup = {
  id: 'brand-clickup',
  name: 'ClickUp',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'clickup'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>ClickUp</title><path d="M2 18.439l3.69-2.828c1.961 2.56 4.044 3.739 6.363 3.739 2.307 0 4.33-1.166 6.203-3.704L22 18.405C19.298 22.065 15.941 24 12.053 24 8.178 24 4.788 22.078 2 18.439zM12.04 6.15l-6.568 5.66-3.036-3.52L12.055 0l9.543 8.296-3.05 3.509z"/>
    </svg>
  </div>
  <span class="brand-icon__name">clickup</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_jira = {
  id: 'brand-jira',
  name: 'Jira',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'jira'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Jira</title><path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">jira</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_confluence = {
  id: 'brand-confluence',
  name: 'Confluence',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'confluence'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Confluence</title><path d="M.87 18.257c-.248.382-.53.875-.763 1.245a.764.764 0 0 0 .255 1.04l4.965 3.054a.764.764 0 0 0 1.058-.26c.199-.332.454-.763.733-1.221 1.967-3.247 3.945-2.853 7.508-1.146l4.957 2.337a.764.764 0 0 0 1.028-.382l2.364-5.346a.764.764 0 0 0-.382-1 599.851 599.851 0 0 1-4.965-2.361C10.911 10.97 5.224 11.185.87 18.257zM23.131 5.743c.249-.405.531-.875.764-1.25a.764.764 0 0 0-.256-1.034L18.675.404a.764.764 0 0 0-1.058.26c-.195.335-.451.763-.734 1.225-1.966 3.246-3.945 2.85-7.508 1.146L4.437.694a.764.764 0 0 0-1.027.382L1.046 6.422a.764.764 0 0 0 .382 1c1.039.49 3.105 1.467 4.965 2.361 6.698 3.246 12.392 3.029 16.738-4.04z"/>
    </svg>
  </div>
  <span class="brand-icon__name">confluence</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_todoist = {
  id: 'brand-todoist',
  name: 'Todoist',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'todoist'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Todoist</title><path d="M21 0H3C1.35 0 0 1.35 0 3v3.858s3.854 2.24 4.098 2.38c.31.18.694.177 1.004 0 .26-.147 8.02-4.608 8.136-4.675.279-.161.58-.107.748-.01.164.097.606.348.84.48.232.134.221.502.013.622l-9.712 5.59c-.346.2-.69.204-1.048.002C3.478 10.907.998 9.463 0 8.882v2.02l4.098 2.38c.31.18.694.177 1.004 0 .26-.147 8.02-4.609 8.136-4.676.279-.16.58-.106.748-.008.164.096.606.347.84.48.232.133.221.5.013.62-.208.121-9.288 5.346-9.712 5.59-.346.2-.69.205-1.048.002C3.478 14.951.998 13.506 0 12.926v2.02l4.098 2.38c.31.18.694.177 1.004 0 .26-.147 8.02-4.609 8.136-4.676.279-.16.58-.106.748-.009.164.097.606.348.84.48.232.133.221.502.013.622l-9.712 5.59c-.346.199-.69.204-1.048.001C3.478 18.994.998 17.55 0 16.97V21c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3z"/>
    </svg>
  </div>
  <span class="brand-icon__name">todoist</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_obsidian = {
  id: 'brand-obsidian',
  name: 'Obsidian',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'obsidian'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Obsidian</title><path d="M19.355 18.538a68.967 68.959 0 0 0 1.858-2.954.81.81 0 0 0-.062-.9c-.516-.685-1.504-2.075-2.042-3.362-.553-1.321-.636-3.375-.64-4.377a1.707 1.707 0 0 0-.358-1.05l-3.198-4.064a3.744 3.744 0 0 1-.076.543c-.106.503-.307 1.004-.536 1.5-.134.29-.29.6-.446.914l-.31.626c-.516 1.068-.997 2.227-1.132 3.59-.124 1.26.046 2.73.815 4.481.128.011.257.025.386.044a6.363 6.363 0 0 1 3.326 1.505c.916.79 1.744 1.922 2.415 3.5zM8.199 22.569c.073.012.146.02.22.02.78.024 2.095.092 3.16.29.87.16 2.593.64 4.01 1.055 1.083.316 2.198-.548 2.355-1.664.114-.814.33-1.735.725-2.58l-.01.005c-.67-1.87-1.522-3.078-2.416-3.849a5.295 5.295 0 0 0-2.778-1.257c-1.54-.216-2.952.19-3.84.45.532 2.218.368 4.829-1.425 7.531zM5.533 9.938c-.023.1-.056.197-.098.29L2.82 16.059a1.602 1.602 0 0 0 .313 1.772l4.116 4.24c2.103-3.101 1.796-6.02.836-8.3-.728-1.73-1.832-3.081-2.55-3.831zM9.32 14.01c.615-.183 1.606-.465 2.745-.534-.683-1.725-.848-3.233-.716-4.577.154-1.552.7-2.847 1.235-3.95.113-.235.223-.454.328-.664.149-.297.288-.577.419-.86.217-.47.379-.885.46-1.27.08-.38.08-.72-.014-1.043-.095-.325-.297-.675-.68-1.06a1.6 1.6 0 0 0-1.475.36l-4.95 4.452a1.602 1.602 0 0 0-.513.952l-.427 2.83c.672.59 2.328 2.316 3.335 4.711.09.21.175.43.253.653z"/>
    </svg>
  </div>
  <span class="brand-icon__name">obsidian</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_logseq = {
  id: 'brand-logseq',
  name: 'Logseq',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'logseq'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Logseq</title><path d="M19.3 9.838c-2.677-1.366-5.467-1.56-8.316-.607-1.738.58-3.197 1.58-4.267 3.088-1.031 1.452-1.45 3.071-1.184 4.837.268 1.781 1.164 3.228 2.505 4.4C9.96 23.231 12.24 23.942 15.092 24c.41-.053 1.157-.103 1.883-.255 2.004-.418 3.754-1.325 5.08-2.915 1.621-1.942 2.108-4.148 1.272-6.562-.704-2.034-2.138-3.467-4.027-4.43ZM7.515 6.295c.507-2.162-.88-4.664-2.988-5.37-1.106-.37-2.156-.267-3.075.492C.61 2.114.294 3.064.271 4.146c.009.135.016.285.029.435.01.102.021.205.042.305.351 1.703 1.262 2.98 2.9 3.636 1.912.766 3.808-.244 4.273-2.227Zm4.064-1.146c1.075.377 2.152.31 3.22-.033.94-.3 1.755-.793 2.341-1.609.803-1.117.5-2.387-.717-3.027-.6-.317-1.246-.438-1.927-.48-.47.076-.95.117-1.41.234-1.068.27-2.002.781-2.653 1.7-.495.697-.64 1.45-.174 2.227.303.504.779.799 1.32.988Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">logseq</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_roamresearch = {
  id: 'brand-roamresearch',
  name: 'Roam Research',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'roamresearch'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Roam Research</title><path d="M11.14.028C7.315.36 4.072 2.263 1.98 5.411.487 7.646-.232 10.589.067 13.211c.32 2.772 1.4 5.124 3.242 7.049 4.643 4.852 12.252 5.001 17.038.343 1.085-1.057 1.738-1.959 2.407-3.303a11.943 11.943 0 0 0-2.429-13.925C18.372 1.495 16.015.388 13.27.078c-.68-.083-1.56-.1-2.13-.05zm4.814 2.567c1.112.437 2.086 1.068 3.032 1.986.62.598 1.323 1.46 1.3 1.599-.016.072-1.626.725-1.792.725-.056 0-.078-.072-.078-.25 0-.138-.011-.248-.028-.248-.01 0-.758.459-1.654 1.023-.897.565-1.666 1.024-1.71 1.024-.05 0-.133-.061-.194-.139-.127-.16-.216-.171-.354-.044-.066.056-.1.166-.1.316v.226l-.824.46c-.46.249-.89.453-.968.453h-.144V8.161c0-.863.016-2.025.038-2.573.034-.99.04-1.007.155-1.007.117 0 .128-.028.155-.514.067-1.107.25-1.284 1.362-1.323l.514-.016.16-.233c.156-.226.167-.226.366-.171.116.028.46.15.764.271zm-7.05.011l.122.183.641-.006c.604 0 .659.011.902.15.355.21.482.497.526 1.145l.033.498.172.016.171.017.017 2.716.011 2.722-.232.138a3.024 3.024 0 0 0-.936.875l-.177.27h-5.24v-.325l-.592-.017-.598-.017-.398-.586c-.332-.493-.454-.626-.758-.825-.415-.265-.404-.193-.139-1.023.659-2.025 2.203-3.945 4.1-5.107.67-.409 1.932-.995 2.159-1.001.055-.005.155.078.216.177zm12.163 4.902c.354.686.725 1.588.725 1.765 0 .071-.1.149-.327.26-.326.154-.393.237-.393.503 0 .155-.166.36-.564.692l-.327.27h-.99v.333h-2.767v-.886l-.332-.42c-.183-.227-.332-.432-.332-.454 0-.022 1.073-.68 2.39-1.46 2.17-1.29 2.402-1.417 2.485-1.34.05.045.244.377.432.737zm-5.556 3.087c.243.354.454.664.46.686.01.027-.394.05-.892.05h-.918l-.2-.332c-.11-.183-.193-.36-.182-.388.028-.083 1.167-.708 1.234-.68.033.011.254.31.498.664zm-7.282 2.567c.254.398.442.741.415.769-.111.1-5.163 3.32-5.213 3.32-.155 0-.813-1.317-1.024-2.048-.249-.863-.265-.769.188-1.045.178-.111.371-.321.637-.703l.387-.548.603-.027.609-.028.017-.21.016-.205H7.77l.459.725zm1.815-.476c.066.122.127.249.127.288 0 .077-.996.686-1.057.647-.05-.028-.714-1.1-.714-1.15 0-.023.343-.028.758-.023l.758.017.128.221zm9.158-.044l.016.21.554.028c.597.027.525 0 1.184.481.011.006.06.194.11.41.095.425.128.459.493.547.288.072.293.133.072.78-.57 1.682-1.787 3.425-3.287 4.686-.642.542-.603.542-.559-.055.045-.614-.027-.935-.254-1.162-.26-.255-.526-.221-1.3.177-.51.26-.698.332-.897.332-.327 0-.631-.094-.825-.255l-.16-.127.393-.36c.42-.381.62-.73.525-.907-.16-.298-.453-.37-1.045-.26-.498.1-.864.105-1.013.028-.188-.105-.288-.376-.26-.741.028-.332.022-.343-.216-.62l-.238-.282v-1.765l.393-.271c.216-.144.559-.448.758-.675l.37-.404h5.17l.017.205zm-7.814 2.157v.758l-.276.282-.277.283.083.238c.1.282.105.52.022.674-.1.194-.293.222-.896.133a8.212 8.212 0 0 0-.764-.083c-.68 0-.703.482-.06 1.256.31.37.31.365-.084.564-.553.277-.902.25-1.389-.116-.41-.304-.647-.393-.968-.36-.21.017-.31.061-.443.2l-.177.177.006.686c0 .382-.011.691-.023.691-.06 0-1.023-.846-1.45-1.272-.442-.448-.995-1.123-.995-1.217 0-.044 1.516-.72 1.615-.72.034 0 .045.084.034.194-.011.105-.006.194.01.194.017 0 1.362-.747 2.989-1.66a204.276 204.276 0 0 1 3.005-1.66c.022 0 .038.343.038.758z"/>
    </svg>
  </div>
  <span class="brand-icon__name">roamresearch</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_zoom = {
  id: 'brand-zoom',
  name: 'Zoom',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'zoom'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Zoom</title><path d="M5.033 14.649H.743a.74.74 0 0 1-.686-.458.74.74 0 0 1 .16-.808L3.19 10.41H1.06A1.06 1.06 0 0 1 0 9.35h3.957c.301 0 .57.18.686.458a.74.74 0 0 1-.161.808L1.51 13.59h2.464c.585 0 1.06.475 1.06 1.06zM24 11.338c0-1.14-.927-2.066-2.066-2.066-.61 0-1.158.265-1.537.686a2.061 2.061 0 0 0-1.536-.686c-1.14 0-2.066.926-2.066 2.066v3.311a1.06 1.06 0 0 0 1.06-1.06v-2.251a1.004 1.004 0 0 1 2.013 0v2.251c0 .586.474 1.06 1.06 1.06v-3.311a1.004 1.004 0 0 1 2.012 0v2.251c0 .586.475 1.06 1.06 1.06zM16.265 12a2.728 2.728 0 1 1-5.457 0 2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0 1.669 1.669 0 0 0 3.338 0zm-4.82 0a2.728 2.728 0 1 1-5.458 0 2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0 1.669 1.669 0 0 0 3.338 0z"/>
    </svg>
  </div>
  <span class="brand-icon__name">zoom</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_googlemeet = {
  id: 'brand-googlemeet',
  name: 'Google Meet',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'googlemeet'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Google Meet</title><path d="M5.53 2.13 0 7.75h5.53zm.398 0v5.62h7.608v3.65l5.47-4.45c-.014-1.22.031-2.25-.025-3.46-.148-1.09-1.287-1.47-2.236-1.36zM23.1 4.32c-.802.295-1.358.995-2.047 1.49-2.506 2.05-4.982 4.12-7.468 6.19 3.025 2.59 6.04 5.18 9.065 7.76 1.218.671 1.428-.814 1.328-1.64v-13a.828.828 0 0 0-.877-.825zM.038 8.15v7.7h5.53v-7.7zm13.577 8.1H6.008v5.62c3.864-.006 7.737.011 11.58-.009 1.02-.07 1.618-1.12 1.468-2.07v-2.51l-5.47-4.68v3.65zm-13.577 0c.02 1.44-.041 2.88.033 4.31.162.948 1.158 1.43 2.047 1.31h3.464v-5.62z"/>
    </svg>
  </div>
  <span class="brand-icon__name">googlemeet</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_webex = {
  id: 'brand-webex',
  name: 'Webex',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'webex'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Webex</title><path d="M21.78 7.376c.512 1.181.032 2.644-1.11 3.106-2.157.888-3-1.295-3-1.295-.236-.55-.727-1.496-1.335-1.496-.204 0-.503 0-.94.844-.229.443-.434 1.185-.616 1.84l-.09.32c-.373-1.587-.821-3.454-1.536-4.816-.195-.38-.42-.74-.673-1.08a5.135 5.135 0 0 1 1.743-1.337 4.891 4.891 0 0 1 2.112-.463c1.045 0 2.765.338 4.227 2.227.167.206.317.424.448.654.278.441.52.904.726 1.383l.043.113zM.02 8.4C-.15 7.105.8 5.845 1.953 5.755c1.794-.157 2.36 1.385 2.455 1.89l.022.137c.07.44.29 1.838.48 2.744.078.4.244 1.013.353 1.416l.006.022.026.092c.11.4.232.799.362 1.193.185.548.399 1.085.641 1.61.47.955.93 1.45 1.367 1.45.203 0 .512 0 .96-.878.283-.59.512-1.208.684-1.845.373 1.598.811 3.128 1.495 4.456.205.406.444.794.715 1.16a5.124 5.124 0 0 1-1.742 1.338 4.88 4.88 0 0 1-2.112.461c-1.548 0-3.727-.698-5.339-4.005a22.407 22.407 0 0 1-1.078-2.824 26.848 26.848 0 0 1-.693-2.656 48.56 48.56 0 0 1-.215-1.114C.191 9.603.074 8.872.02 8.4zm22.047-2.645-.202-.022h-.052c.222.392.421.797.597 1.215l.053.113c.322.76.346 1.614.068 2.391a3.079 3.079 0 0 1-1.552 1.749 2.93 2.93 0 0 1-1.228.28 3.115 3.115 0 0 1-.854-.135c-.299 1.182-.768 2.634-1.195 3.511-.427.877-.93 1.451-1.378 1.451-.192 0-.501 0-.95-.877a10.746 10.746 0 0 1-.683-1.845 38.722 38.722 0 0 1-.396-1.575 12.67 12.67 0 0 1-.136-.598l-.002-.01c-.406-1.778-.865-3.645-1.655-5.142A8.263 8.263 0 0 0 11.52 4.8a5.136 5.136 0 0 0-1.748-1.34A4.892 4.892 0 0 0 7.654 3c-1.036 0-2.754.338-4.217 2.228.466.223.867.562 1.164.984.305.433.499.933.565 1.458.076.563.256 1.654.47 2.688l.001.007c.021.11.042.221.073.342.126-.34.25-.642.38-.955l.112-.271.128-.293c.235-.55.726-1.496 1.324-1.496.213 0 .513 0 .95.844.296.606.532 1.239.706 1.89.138.507.276 1.047.394 1.587.04.148.07.296.101.444l.006.028c.427 1.879.875 3.69 1.644 5.187.159.317.34.622.545.911.15.215.31.422.48.62 1.27 1.45 2.733 1.8 3.843 1.8 1.548 0 3.738-.698 5.35-4.006.822-1.7 1.515-4.208 1.772-5.48.256-1.27.449-2.419.534-3.115.04-.307.023-.618-.051-.918-.075-.299-.205-.579-.382-.825a2.247 2.247 0 0 0-.653-.607 2.143 2.143 0 0 0-.826-.296z"/>
    </svg>
  </div>
  <span class="brand-icon__name">webex</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_steam = {
  id: 'brand-steam',
  name: 'Steam',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'steam'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Steam</title><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
    </svg>
  </div>
  <span class="brand-icon__name">steam</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_epicgames = {
  id: 'brand-epicgames',
  name: 'Epic Games',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'epicgames'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Epic Games</title><path d="M3.537 0C2.165 0 1.66.506 1.66 1.879V18.44a4.262 4.262 0 00.02.433c.031.3.037.59.316.92.027.033.311.245.311.245.153.075.258.13.43.2l8.335 3.491c.433.199.614.276.928.27h.002c.314.006.495-.071.928-.27l8.335-3.492c.172-.07.277-.124.43-.2 0 0 .284-.211.311-.243.28-.33.285-.621.316-.92a4.261 4.261 0 00.02-.434V1.879c0-1.373-.506-1.88-1.878-1.88zm13.366 3.11h.68c1.138 0 1.688.553 1.688 1.696v1.88h-1.374v-1.8c0-.369-.17-.54-.523-.54h-.235c-.367 0-.537.17-.537.539v5.81c0 .369.17.54.537.54h.262c.353 0 .523-.171.523-.54V8.619h1.373v2.143c0 1.144-.562 1.71-1.7 1.71h-.694c-1.138 0-1.7-.566-1.7-1.71V4.82c0-1.144.562-1.709 1.7-1.709zm-12.186.08h3.114v1.274H6.117v2.603h1.648v1.275H6.117v2.774h1.74v1.275h-3.14zm3.816 0h2.198c1.138 0 1.7.564 1.7 1.708v2.445c0 1.144-.562 1.71-1.7 1.71h-.799v3.338h-1.4zm4.53 0h1.4v9.201h-1.4zm-3.13 1.235v3.392h.575c.354 0 .523-.171.523-.54V4.965c0-.368-.17-.54-.523-.54zm-3.74 10.147a1.708 1.708 0 01.591.108 1.745 1.745 0 01.49.299l-.452.546a1.247 1.247 0 00-.308-.195.91.91 0 00-.363-.068.658.658 0 00-.28.06.703.703 0 00-.224.163.783.783 0 00-.151.243.799.799 0 00-.056.299v.008a.852.852 0 00.056.31.7.7 0 00.157.245.736.736 0 00.238.16.774.774 0 00.303.058.79.79 0 00.445-.116v-.339h-.548v-.565H7.37v1.255a2.019 2.019 0 01-.524.307 1.789 1.789 0 01-.683.123 1.642 1.642 0 01-.602-.107 1.46 1.46 0 01-.478-.3 1.371 1.371 0 01-.318-.455 1.438 1.438 0 01-.115-.58v-.008a1.426 1.426 0 01.113-.57 1.449 1.449 0 01.312-.46 1.418 1.418 0 01.474-.309 1.58 1.58 0 01.598-.111 1.708 1.708 0 01.045 0zm11.963.008a2.006 2.006 0 01.612.094 1.61 1.61 0 01.507.277l-.386.546a1.562 1.562 0 00-.39-.205 1.178 1.178 0 00-.388-.07.347.347 0 00-.208.052.154.154 0 00-.07.127v.008a.158.158 0 00.022.084.198.198 0 00.076.066.831.831 0 00.147.06c.062.02.14.04.236.061a3.389 3.389 0 01.43.122 1.292 1.292 0 01.328.17.678.678 0 01.207.24.739.739 0 01.071.337v.008a.865.865 0 01-.081.382.82.82 0 01-.229.285 1.032 1.032 0 01-.353.18 1.606 1.606 0 01-.46.061 2.16 2.16 0 01-.71-.116 1.718 1.718 0 01-.593-.346l.43-.514c.277.223.578.335.9.335a.457.457 0 00.236-.05.157.157 0 00.082-.142v-.008a.15.15 0 00-.02-.077.204.204 0 00-.073-.066.753.753 0 00-.143-.062 2.45 2.45 0 00-.233-.062 5.036 5.036 0 01-.413-.113 1.26 1.26 0 01-.331-.16.72.72 0 01-.222-.243.73.73 0 01-.082-.36v-.008a.863.863 0 01.074-.359.794.794 0 01.214-.283 1.007 1.007 0 01.34-.185 1.423 1.423 0 01.448-.066 2.006 2.006 0 01.025 0zm-9.358.025h.742l1.183 2.81h-.825l-.203-.499H8.623l-.198.498h-.81zm2.197.02h.814l.663 1.08.663-1.08h.814v2.79h-.766v-1.602l-.711 1.091h-.016l-.707-1.083v1.593h-.754zm3.469 0h2.235v.658h-1.473v.422h1.334v.61h-1.334v.442h1.493v.658h-2.255zm-5.3.897l-.315.793h.624zm-1.145 5.19h8.014l-4.09 1.348z"/>
    </svg>
  </div>
  <span class="brand-icon__name">epicgames</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_riotgames = {
  id: 'brand-riotgames',
  name: 'Riot Games',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'riotgames'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Riot Games</title><path d="M13.458.86 0 7.093l3.353 12.761 2.552-.313-.701-8.024.838-.373 1.447 8.202 4.361-.535-.775-8.857.83-.37 1.591 9.025 4.412-.542-.849-9.708.84-.374 1.74 9.87L24 17.318V3.5Zm.316 19.356.222 1.256L24 23.14v-4.18l-10.22 1.256Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">riotgames</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_valve = {
  id: 'brand-valve',
  name: 'Valve',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'valve'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Valve</title><path d="M0 8.579v6.842h24V8.58zm1.8 1.415h.793l.776 3.044.76-3.044h.836l-1.227 4.029H3zm5.488 0h1.084l1.145 4.034h-.814l-.27-1.007H7.228s-.21.81-.254.99c-.242.017-.83 0-.83 0zm4.184 0h.792v3.352h1.69v.677h-2.482zm3.45 0h.816l.776 3.005.754-3.005h.815l-1.222 4.034h-.716zm4.828 0h1.69v.522h-1.084v.584h.99v.523h-.99v.6h1.084v.523h-1.69zm-11.902.68l-.426 1.702h.89z"/>
    </svg>
  </div>
  <span class="brand-icon__name">valve</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_playstation = {
  id: 'brand-playstation',
  name: 'PlayStation',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'playstation'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>PlayStation</title><path d="M8.984 2.596v17.547l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.18.76.814.76 1.505v5.875c2.441 1.193 4.362-.002 4.362-3.152 0-3.237-1.126-4.675-4.438-5.827-1.307-.448-3.728-1.186-5.39-1.502zm4.656 16.241l6.296-2.275c.715-.258.826-.625.246-.818-.586-.192-1.637-.139-2.357.123l-4.205 1.5V14.98l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.03 5.437.661 1.848.601 2.04 1.472 1.576 2.072-.465.6-1.622 1.036-1.622 1.036l-8.544 3.107V18.86zM1.807 18.6c-1.9-.545-2.214-1.668-1.352-2.32.801-.586 2.16-1.052 2.16-1.052l5.615-2.013v2.313L4.205 17c-.705.271-.825.632-.239.826.586.195 1.637.15 2.343-.12L8.247 17v2.074c-.12.03-.256.044-.39.073-1.939.331-3.996.196-6.038-.479z"/>
    </svg>
  </div>
  <span class="brand-icon__name">playstation</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_gamejolt = {
  id: 'brand-gamejolt',
  name: 'Game Jolt',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'gamejolt'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Game Jolt</title><path d="M6.353 0v2.824H4.94v2.823H3.53v2.824H2.118v2.823H.706v2.824h8.47v2.823H7.765v2.824H6.353v2.823h1.412v-1.412h1.411v-1.411h1.412v-1.412H12V16.94h1.412v-1.41h1.412v-1.411h1.411v-1.412h1.412v-1.412h1.412V9.882h1.412V8.471h1.411V7.059h-4.235V5.647h1.412V4.235h1.412V2.824h1.411V1.412h1.412V0zm0 22.588H4.94V24h1.412zM7.765 2.824h9.882v1.411h-1.412v1.412h-1.411V7.06h-1.412v1.41H12v1.411h1.412v1.412H12V9.882h-1.412v1.412H9.176V9.882H7.765v1.412H6.353V9.882H4.94V8.471h1.412V5.647h1.412zM6.353 8.47v1.411h1.412v-1.41zm2.823 1.411h1.412v-1.41H9.176zm5.648 0h1.411v1.412h-1.411Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">gamejolt</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_itchdotio = {
  id: 'brand-itchdotio',
  name: 'Itch.io',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'itchdotio'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Itch.io</title><path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477a2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.947.795a2.786 2.786 0 0 1-1.95-.795c-.182-.178-.32-.37-.446-.59-.127.222-.303.412-.486.59a2.788 2.788 0 0 1-1.95.795c-.092 0-.187-.025-.264-.052-.107 1.113-.152 2.176-.168 2.95v.005l-.006 1.167c.02 2.334-.23 7.564 1.03 8.85 1.952.454 5.545.662 9.15.663 3.605 0 7.198-.21 9.15-.664 1.26-1.284 1.01-6.514 1.03-8.848l-.006-1.167v-.004c-.016-.775-.06-1.838-.168-2.95-.077.026-.172.052-.263.052a2.788 2.788 0 0 1-1.95-.795c-.184-.178-.36-.368-.486-.59-.127.22-.265.412-.447.59a2.786 2.786 0 0 1-1.95.794c-.76 0-1.446-.303-1.948-.793a2.74 2.74 0 0 1-.468-.602 2.738 2.738 0 0 1-.463.602 2.787 2.787 0 0 1-1.95.794h-.16a2.787 2.787 0 0 1-1.95-.793 2.738 2.738 0 0 1-.464-.602zm-2.004 2.59v.002c.795.002 1.5 0 2.373.953.687-.072 1.406-.108 2.125-.107.72 0 1.438.035 2.125.107.873-.953 1.578-.95 2.372-.953.376 0 1.876 0 2.92 2.934l1.123 4.028c.832 2.995-.266 3.068-1.636 3.07-2.03-.075-3.156-1.55-3.156-3.025-1.124.184-2.436.276-3.748.277-1.312 0-2.624-.093-3.748-.277 0 1.475-1.125 2.95-3.156 3.026-1.37-.004-2.468-.077-1.636-3.072l1.122-4.027c1.045-2.934 2.545-2.934 2.92-2.934zM12 12.714c-.002.002-2.14 1.964-2.523 2.662l1.4-.056v1.22c0 .056.56.033 1.123.007.562.026 1.124.05 1.124-.008v-1.22l1.4.055C14.138 14.677 12 12.713 12 12.713z"/>
    </svg>
  </div>
  <span class="brand-icon__name">itchdotio</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_roblox = {
  id: 'brand-roblox',
  name: 'Roblox',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'roblox'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Roblox</title><path d="M18.926 23.998 0 18.892 5.075.002 24 5.108ZM15.348 10.09l-5.282-1.453-1.414 5.273 5.282 1.453z"/>
    </svg>
  </div>
  <span class="brand-icon__name">roblox</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_unity = {
  id: 'brand-unity',
  name: 'Unity',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'unity'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Unity</title><path d="m12.9288 4.2939 3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">unity</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_unrealengine = {
  id: 'brand-unrealengine',
  name: 'Unreal Engine',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'unrealengine'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Unreal Engine</title><path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm0 23.52A11.52 11.52 0 1123.52 12 11.52 11.52 0 0112 23.52zm7.13-9.791c-.206.997-1.126 3.557-4.06 4.942l-1.179-1.325-1.988 2a7.338 7.338 0 01-5.804-2.978 2.859 2.859 0 00.65.123c.326.006.678-.114.678-.66v-5.394a.89.89 0 00-1.116-.89c-.92.212-1.656 2.509-1.656 2.509a7.304 7.304 0 012.528-5.597 7.408 7.408 0 013.73-1.721c-1.006.573-1.57 1.507-1.57 2.29 0 1.262.76 1.109.984.923v7.28a1.157 1.157 0 00.148.256 1.075 1.075 0 00.88.445c.76 0 1.747-.868 1.747-.868V9.172c0-.6-.452-1.324-.905-1.572 0 0 .838-.149 1.484.346a5.537 5.537 0 01.387-.425c1.508-1.48 2.929-1.902 4.112-2.112 0 0-2.151 1.69-2.151 3.96 0 1.687.043 5.801.043 5.801.799.771 1.986-.342 3.059-1.441Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">unrealengine</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_godotengine = {
  id: 'brand-godotengine',
  name: 'Godot Engine',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'godotengine'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Godot Engine</title><path d="M9.5598.683c-1.096.244-2.1812.5831-3.1983 1.0951.023.8981.081 1.7582.199 2.6323-.395.253-.81.47-1.178.766-.375.288-.7581.564-1.0971.9011-.6781-.448-1.3962-.869-2.1352-1.2411C1.3532 5.6934.608 6.6186 0 7.6546c.458.7411.936 1.4352 1.4521 2.0942h.014v6.3565c.012 0 .023 0 .035.003l3.8963.376c.204.02.364.184.378.3891l.12 1.7201 3.3994.242.234-1.587c.03-.206.207-.358.415-.358h4.1114c.208 0 .385.152.415.358l.234 1.587 3.3993-.242.12-1.72a.4196.4196 0 01.378-.3891l3.8954-.376c.012 0 .023-.003.035-.003v-.5071h.002V9.7498h.014c.516-.659.994-1.3531 1.4521-2.0942-.608-1.036-1.3541-1.9611-2.1512-2.8192-.739.372-1.4571.793-2.1352 1.2411-.339-.337-.721-.613-1.096-.901-.369-.296-.7841-.5131-1.1781-.7661.117-.8741.175-1.7342.199-2.6323-1.0171-.512-2.1012-.851-3.1983-1.095-.438.736-.838 1.533-1.1871 2.3121-.414-.069-.829-.094-1.2461-.099h-.016c-.417.005-.832.03-1.2461.099-.349-.779-.749-1.576-1.1881-2.3121l.001-.001zM6.4765 9.9889c1.2971 0 2.3492 1.0511 2.3492 2.3482s-1.052 2.3482-2.3492 2.3482c-1.296 0-2.3482-1.051-2.3482-2.3482 0-1.297 1.0511-2.3482 2.3482-2.3482zm11.049 0c1.296 0 2.3482 1.0511 2.3482 2.3482s-1.0511 2.3482-2.3482 2.3482-2.3492-1.051-2.3492-2.3482c0-1.297 1.051-2.3482 2.3492-2.3482zm-10.824.9301c-.861 0-1.559.698-1.559 1.5591s.698 1.5582 1.559 1.5582c.8611 0 1.5592-.698 1.5592-1.5582 0-.86-.697-1.559-1.5591-1.559zm10.598 0c-.8611 0-1.5582.698-1.5582 1.5591s.697 1.5582 1.5581 1.5582c.8611 0 1.5592-.698 1.5592-1.5582 0-.86-.697-1.559-1.5592-1.559zm-5.2985.453c.417 0 .757.308.757.6871v2.1622c0 .379-.339.687-.757.687s-.756-.308-.756-.687V12.059c0-.379.339-.687.756-.687zM1.4601 16.9464c.002.377.006.789.006.871 0 3.7014 4.6944 5.4795 10.5269 5.5005h.014c5.8325-.02 10.5259-1.7991 10.5259-5.5004 0-.084.005-.495.007-.871l-3.5023.338-.121 1.729a.421.421 0 01-.389.3901l-4.1814.296a.4203.4203 0 01-.415-.358l-.238-1.6141h-3.3863l-.238 1.6141a.4192.4192 0 01-.4451.357l-4.1513-.296c-.208-.015-.375-.181-.389-.389l-.12-1.7292-3.5044-.337z"/>
    </svg>
  </div>
  <span class="brand-icon__name">godotengine</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_gamemaker = {
  id: 'brand-gamemaker',
  name: 'Gamemaker',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'gamemaker'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Gamemaker</title><path d="M.012 11.994 12.006 0l11.982 12.006h-6.831l-5.163-5.151-5.151 5.151 5.163 5.151v-5.151h5.151v6.903L12.006 24z"/>
    </svg>
  </div>
  <span class="brand-icon__name">gamemaker</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_samsung = {
  id: 'brand-samsung',
  name: 'Samsung',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'samsung'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Samsung</title><path d="M19.8166 10.2808l.0459 2.6934h-.023l-.7793-2.6934h-1.2837v3.3925h.8481l-.0458-2.785h.023l.8366 2.785h1.2264v-3.3925zm-16.149 0l-.6418 3.427h.9284l.4699-3.1175h.0229l.4585 3.1174h.9169l-.6304-3.4269zm5.1805 0l-.424 2.6132h-.023l-.424-2.6132H6.5788l-.0688 3.427h.8596l.023-3.0832h.0114l.573 3.0831h.8711l.5731-3.083h.023l.0228 3.083h.8596l-.0802-3.4269zm-7.2664 2.4527c.0343.0802.0229.1949.0114.2522-.0229.1146-.1031.2292-.3324.2292-.2177 0-.3438-.126-.3438-.3095v-.3323H0v.2636c0 .7679.6074.9971 1.2493.9971.6189 0 1.1346-.2178 1.2149-.7794.0458-.298.0114-.4928 0-.5616-.1605-.722-1.467-.9283-1.5588-1.3295-.0114-.0688-.0114-.1375 0-.1834.023-.1146.1032-.2292.3095-.2292.2063 0 .321.126.321.3095v.2063h.8595v-.2407c0-.745-.6762-.8596-1.1576-.8596-.6074 0-1.1117.2063-1.2034.7564-.023.149-.0344.2866.0114.4585.1376.7106 1.364.9169 1.5358 1.3524m11.152 0c.0343.0803.0228.1834.0114.2522-.023.1146-.1032.2292-.3324.2292-.2178 0-.3438-.126-.3438-.3095v-.3323h-.917v.2636c0 .7564.596.9857 1.2379.9857.6189 0 1.1232-.2063 1.2034-.7794.0459-.298.0115-.4814 0-.5616-.1375-.7106-1.4327-.9284-1.5243-1.318-.0115-.0688-.0115-.1376 0-.1835.0229-.1146.1031-.2292.3094-.2292.1948 0 .321.126.321.3095v.2063h.848v-.2407c0-.745-.6647-.8596-1.146-.8596-.6075 0-1.1004.1948-1.192.7564-.023.149-.023.2866.0114.4585.1376.7106 1.341.9054 1.513 1.3524m2.8882.4585c.2407 0 .3094-.1605.3323-.2522.0115-.0343.0115-.0917.0115-.126v-2.533h.871v2.4642c0 .0688 0 .1948-.0114.2292-.0573.6419-.5616.8482-1.192.8482-.6303 0-1.1346-.2063-1.192-.8482 0-.0344-.0114-.1604-.0114-.2292v-2.4642h.871v2.533c0 .0458 0 .0916.0115.126 0 .0917.0688.2522.3095.2522m7.1518-.0344c.2522 0 .3324-.1605.3553-.2522.0115-.0343.0115-.0917.0115-.126v-.4929h-.3553v-.5043H24v.917c0 .0687 0 .1145-.0115.2292-.0573.6303-.596.8481-1.2034.8481-.6075 0-1.1461-.2178-1.2034-.8481-.0115-.1147-.0115-.1605-.0115-.2293v-1.444c0-.0574.0115-.172.0115-.2293.0802-.6419.596-.8482 1.2034-.8482s1.1347.2063 1.2034.8482c.0115.1031.0115.2292.0115.2292v.1146h-.8596v-.1948s0-.0803-.0115-.1261c-.0114-.0802-.0802-.2521-.3438-.2521-.2521 0-.321.1604-.3438.2521-.0115.0458-.0115.1032-.0115.1605v1.5702c0 .0458 0 .0916.0115.126 0 .0917.0917.2522.3323.2522"/>
    </svg>
  </div>
  <span class="brand-icon__name">samsung</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_razer = {
  id: 'brand-razer',
  name: 'Razer',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'razer'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Razer</title><path d="M23.4 0a.385.385 0 00-.278.125L22.91.35l-.401.182a.711.711 0 00-.417 0 .305.305 0 01-.171 0 1.005 1.005 0 00-.567 0A.936.936 0 0021 .596a.877.877 0 00-.412.337l-.037.048a1.246 1.246 0 00-.898.684 1.07 1.07 0 00-.07.225 1.935 1.935 0 00-.337-.193 2.026 2.026 0 00-2.063.305 2.08 2.08 0 00-.69 2.139c.086.376.23.737.428 1.069.496.776 1.079 1.494 1.737 2.138.526.512.996 1.078 1.401 1.69l.053.096c.396.754.321 1.31-.219 1.647a1.358 1.358 0 01-.572.198 2.491 2.491 0 00-.144-2.07 2.342 2.342 0 00-.3-.406c-.79-.866-1.63-.674-1.962-.449a.385.385 0 00-.15.455l.027.058a.385.385 0 00.38.188 1.07 1.07 0 01.962.582c.23.384.23.862 0 1.246a4.812 4.812 0 01-.534-.535l-.07-.07-.037-.042a3.368 3.368 0 00-1.92-1.208 3.09 3.09 0 00-.406-1.455 4.368 4.368 0 00-1.358-1.48 2.673 2.673 0 00-.267-.16 3.085 3.085 0 00-2.251-2.717 2.7 2.7 0 00-2.968 1.139c-.053.086-.112.171-.165.267a12.26 12.26 0 00-1.038 2.78 11.64 11.64 0 01-.775 2.187l-.059.107c-.213.374-.406.583-.609.647a.406.406 0 01-.374-.064c-.203-.14-.155-.423 0-.973a3.33 3.33 0 00.128-.45c.07-.33-.005-.673-.203-.946a1.07 1.07 0 00-.786-.411c-.49-.018-.94.27-1.128.722l-.08.15a.968.968 0 00-.316-.46.936.936 0 00-.294-.129 1.016 1.016 0 00-.535-.198.342.342 0 01-.17-.053.711.711 0 00-.434-.097l-.326-.256-.144-.278c-.18-.35-.707-.238-.727.155a.385.385 0 00.032.727l.305.075.342.267c.026.14.093.268.192.37.043.04.072.092.086.149.058.184.167.347.315.47a.877.877 0 00.727.465h.06c.262.313.662.477 1.068.439a1.07 1.07 0 00.23-.054 1.935 1.935 0 000 .38 2.026 2.026 0 001.3 1.636 2.08 2.08 0 002.208-.481c.276-.26.51-.562.695-.893.422-.817.75-1.68.978-2.572.179-.711.433-1.401.76-2.058l.058-.096c.454-.722.973-.936 1.535-.637.18.096.338.231.46.396-.714.12-1.34.543-1.717 1.16-.084.146-.152.3-.203.46-.353 1.117.23 1.748.593 1.925.16.077.353.035.466-.102l.037-.053a.385.385 0 000-.423 1.07 1.07 0 010-1.128c.218-.384.627-.62 1.07-.615-.04.245-.1.486-.177.722l-.034.093a3.533 3.533 0 00-.084 2.324 3.09 3.09 0 00-1.07 1.07 4.368 4.368 0 00-.603 1.913 2.674 2.674 0 000 .31 3.085 3.085 0 00-1.23 3.31 2.7 2.7 0 002.47 2h.31a12.26 12.26 0 002.925-.493 11.64 11.64 0 012.283-.422h.117c.304-.037.61.035.866.203.102.09.152.224.134.358 0 .246-.289.348-.855.466a3.33 3.33 0 00-.45.117 1.192 1.192 0 00-.721.647 1.07 1.07 0 00.037.888c.229.435.704.683 1.193.62h.165a.968.968 0 00-.235.502.936.936 0 000 .364c-.019.183.013.368.091.535.03.054.045.115.043.176-.002.151.045.3.133.422l-.058.412-.166.262a.385.385 0 00.497.535c.287.265.74-.016.63-.39l-.085-.3.064-.433a.711.711 0 00.22-.353.305.305 0 01.085-.15c.131-.141.218-.318.252-.508a.936.936 0 00.122-.336.877.877 0 00-.085-.535v-.053c.134-.376.08-.794-.144-1.123a1.07 1.07 0 00-.16-.171c.115-.05.226-.11.33-.182a2.026 2.026 0 00.77-1.94 2.08 2.08 0 00-1.518-1.674 3.71 3.71 0 00-1.123-.155c-.919.043-1.83.19-2.716.438-.697.198-1.414.322-2.138.369h-.112c-.85-.032-1.294-.374-1.316-1.01-.007-.204.031-.407.113-.594.459.559 1.138.89 1.86.909.17 0 .338-.018.503-.054 1.144-.25 1.4-1.069 1.374-1.475a.385.385 0 00-.321-.353h-.064a.385.385 0 00-.353.235 1.07 1.07 0 01-.984.535 1.214 1.214 0 01-1.069-.631c.233-.088.473-.158.716-.209h.155a3.368 3.368 0 002.01-1.069c.449.243.95.372 1.46.374.679.01 1.35-.138 1.962-.433.094-.044.185-.094.273-.15a3.085 3.085 0 003.48-.587 2.7 2.7 0 00.498-3.139 6.884 6.884 0 00-.15-.273 12.259 12.259 0 00-1.887-2.288 11.64 11.64 0 01-1.508-1.764l-.064-.102a1.294 1.294 0 01-.257-.85.406.406 0 01.16-.267c.225-.107.444.08.83.508.1.118.21.228.326.331.25.225.584.334.92.3a1.07 1.07 0 00.748-.476c.263-.416.24-.951-.06-1.342l-.085-.145c.18.035.365.019.535-.048a.936.936 0 00.32-.197c.178-.076.33-.2.44-.359a.342.342 0 01.133-.123.711.711 0 00.3-.326l.384-.155h.31a.385.385 0 00.353-.577l-.005.01a.385.385 0 00-.118-.128A.385.385 0 0023.4 0zm.006.398l-.187.315.347.086-.395.005-.658.262a.262.262 0 01-.171.262c-.316.182-.198.321-.583.487-.08.032-.107.101-.256.176-.15.075-.407-.027-.535 0a.32.32 0 00-.203.535c.085.144.486.679.192 1.112a.711.711 0 01-1.107.102c-.368-.305-.866-1.214-1.577-.877-.71.336-.502 1.128-.085 1.796.882 1.39 2.705 2.673 3.523 4.277 1 2-1.107 4.336-3.673 3.117a2.326 2.326 0 01-.396.24c-1.069.535-2.512.578-3.395-.117-.395.941-1.79 1.182-2.031 1.24-.423.08-.832.22-1.214.418.487 1.614 2.47 1.454 2.908.427 0 0 .054.824-1.069 1.07a2.139 2.139 0 01-2.288-1.16c-.33.346-.507.81-.492 1.288.027.69.46 1.337 1.69 1.385 1.662.064 4.25-1.203 6.014-.669 1.344.335 1.723 2.065.642 2.93a2.732 2.732 0 01-1.23.385c-.182.01-.198.091-.181.145.016.053.117.053.278.053.582-.053 1.208.283.93 1.166-.043.123.155.352.117.534-.053.262-.112.203-.112.289-.07.412-.235.326-.337.679a.257.257 0 01-.203.208l-.101.706.112.38-.182-.321-.251.257.214-.332.101-.7a.262.262 0 01-.16-.267c0-.364-.182-.332-.128-.75.037-.085 0-.042 0-.31.016-.186.23-.341.272-.48.043-.14.054-.45-.369-.45-.198.006-.85.075-1.069-.39a.711.711 0 01.465-1.01c.45-.16 1.497-.123 1.556-.91.059-.785-.727-.999-1.513-.972-1.657.059-3.663 1.01-5.48.903-2.23-.128-3.198-3.133-.861-4.737a2.326 2.326 0 010-.465c.09-1.219.77-2.47 1.812-2.85-.593-.818-.128-2.149-.058-2.384.135-.4.213-.818.23-1.24-1.642-.37-2.497 1.411-1.824 2.304 0 0-.743-.369-.395-1.465a2.139 2.139 0 012.138-1.4 1.786 1.786 0 00-.871-1.07c-.61-.3-1.385-.267-2.043.77-.887 1.411-1.063 4.293-2.427 5.544-.961 1-2.652.463-2.86-.909a2.732 2.732 0 01.278-1.256c.08-.166.032-.214-.038-.23-.07-.016-.123.07-.187.214a.823.823 0 01-1.475.224c-.097-.107-.342.006-.535-.17-.192-.177-.128-.188-.192-.241-.321-.273-.16-.375-.418-.636a.257.257 0 01-.08-.284L.796 7.2.41 7.102h.38l-.102-.347.182.353.534.438a.262.262 0 01.31 0c.321.182.38.01.717.262.07.054.133.027.283.134.15.107.187.374.278.476a.32.32 0 00.572-.096c.086-.193.332-.77.866-.728.457.027.77.47.642.91-.091.47-.652 1.357 0 1.801.652.444 1.235-.134 1.604-.829.775-1.46.957-3.678 1.957-5.202 1.23-1.887 4.309-1.224 4.533 1.604.145.06.283.136.412.225 1.032.69 1.759 1.924 1.567 2.994 1.02-.129 1.919.957 2.09 1.138.28.328.606.612.968.845 1.165-1.23.037-2.865-1.07-2.732 0 0 .69-.46 1.466.39.61.728.666 1.772.139 2.561.465.113.956.034 1.363-.219.583-.353.925-1.07.353-2.138-.776-1.476-3.187-3.075-3.588-4.876-.384-1.333.928-2.528 2.219-2.021.38.21.705.51.946.871.102.155.166.134.214.086.048-.048-.005-.14-.096-.268a.823.823 0 01.534-1.39c.145-.027.161-.289.418-.374.256-.086.23-.016.31-.048.395-.15.406.043.759-.048.1-.038.212-.01.283.07l.68-.263zm-10.297 6.26c-.065.53-.348 1.647-.187 2.332.155.871.823.823 1.069.395.163-.332.2-.711.107-1.069a3.106 3.106 0 00-.984-1.636zm.256.872c.17.262.293.551.364.856a1.3 1.3 0 010 .759c-.086.187-.332.187-.423-.23-.04-.462-.02-.928.06-1.385zm1.727 2.661c-.517.012-.67.472-.47.82.207.31.521.534.882.63a3.106 3.106 0 001.908-.037c-.422-.32-1.25-1.123-1.903-1.342a1.255 1.255 0 00-.417-.07zm.088.401a.807.807 0 01.201.04c.429.197.83.45 1.192.753a2.82 2.82 0 01-.962-.107 1.3 1.3 0 01-.642-.396c-.095-.134-.036-.3.21-.29zm-2.285.183a1.54 1.54 0 00-.984.45 3.106 3.106 0 00-.936 1.673c.535-.203 1.604-.519 2.139-.973.663-.588.251-1.166-.22-1.15zm-.025.341c.188.008.276.217-.04.488a5.39 5.39 0 01-1.234.631c.134-.277.315-.528.534-.743a1.3 1.3 0 01.7-.374.284.284 0 01.04-.002z"/>
    </svg>
  </div>
  <span class="brand-icon__name">razer</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_corsair = {
  id: 'brand-corsair',
  name: 'Corsair',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'corsair'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Corsair</title><path d="M13.073.411s1.912 3.883 1.56 5.5c0 0 4.988 1.615 5.543 4.275 0 0 2.731-3.595-7.103-9.775m-1.922 5.825c.487 1.021.707 2.118.994 3.264L9.301 8.42c.264-1.726-1.416-4.354-1.416-4.354zM6.107 8.91c.314.83.672 1.87.862 2.768l-2.564-.638c.263-1.726-1.362-3.813-1.362-3.813zm5.585-4.15s11.436 8.031 12.19 11.147c.568 2.344-1.085 4.51-1.085 4.51s-.881-6.12-22.796 3.172c2.218-2.475 3.426-5.635 3.107-9.045a11.5 11.5 0 0 0-1.076-3.93l5.136 2.722.02.244c.195 2.085.043 4.112-.428 5.99a14.1 14.1 0 0 0 1.306-7.348A14.1 14.1 0 0 0 6.907 7.76l5.49 3.657c.023.182.035.366.052.55.216 2.307.001 4.545-.592 6.587 1.291-2.393 1.925-5.155 1.655-8.04a14.1 14.1 0 0 0-1.82-5.753"/>
    </svg>
  </div>
  <span class="brand-icon__name">corsair</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_asus = {
  id: 'brand-asus',
  name: 'ASUS',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'asus'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>ASUS</title><path d="M23.904 10.788V9.522h-4.656c-.972 0-1.41.6-1.482 1.182v.018-1.2h-1.368v1.266h1.362zm-6.144.456l-1.368-.078v1.458c0 .456-.228.594-1.02.594H14.28c-.654 0-.93-.186-.93-.594v-1.596l-1.386-.102v1.812h-.03c-.078-.528-.276-1.14-1.596-1.23L6 11.22c0 .666.474 1.062 1.218 1.14l3.024.306c.24.018.414.09.414.288 0 .216-.18.24-.456.24H5.946V11.22l-1.386-.09v3.348h5.646c1.26 0 1.662-.654 1.722-1.2h.03c.156.864.912 1.2 2.19 1.2h1.41c1.494 0 2.202-.456 2.202-1.524zm4.398.258l-4.338-.258c0 .666.438 1.11 1.182 1.17l3.09.24c.24.018.384.078.384.276 0 .186-.168.258-.516.258h-4.212v1.29h4.302c1.356 0 1.95-.474 1.95-1.554 0-.972-.534-1.338-1.842-1.422zm-10.194-1.98h1.386v1.266h-1.386zM3.798 11.07l-1.506-.15L0 14.478h1.686zm7.914-1.548h-4.23c-.984 0-1.416.612-1.518 1.2v-1.2H3.618c-.33 0-.486.102-.642.33l-.648.936h9.384Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">asus</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_msi = {
  id: 'brand-msi',
  name: 'MSI',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'msi'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>MSI</title><path d="M16.362 10.042c-1.044.56-2.193 1.05-3.7 1.142a4.26 4.26 0 0 1-2.321-.556c-.155-.09-.51-.26-.503-.457.011-.242.582-.303.816-.306 5.262-.178 6.29-2.472 6.286-2.563 0-.083-.09.011-.09.011-1.38 1.777-4.937 1.973-4.937 1.973-.877.121-1.761-.08-2.215-.529a.794.794 0 0 1-.215-.39c-.102.122-.17.25-.291.379-.114.128-.458.499-.484.06-.019-.325.076-.393.2-.586a5.178 5.178 0 0 1 .193-.276c.374-.49.684-.997 1.123-1.402.037-.038.11-.075.09-.11a6.221 6.221 0 0 0-3.624 4.166 6.508 6.508 0 0 0-.23 1.72c0 .62.082 1.209.21 1.75.258 1.073.56 1.817 1.033 2.66.155-.211.219-.491.306-.752.098-.276.166-.642.302-.87.321-.528 2.079-.396 1.599-.763a3.613 3.613 0 0 1-.397-.359 7.083 7.083 0 0 1-.673-.831c-.412-.582-.756-1.285-.79-2.2.469 1.21 1.18 2.222 2.313 2.774.378.182.813.378 1.323.367-1.341-.253-2.162-1.285-2.717-2.374-.087-.17-.208-.332-.25-.476a.4.4 0 0 1-.011-.189c.076-.336.484-.17.726-.083a8.489 8.489 0 0 0 3.602.438 6.678 6.678 0 0 0 1.874-.476c.545-.227 1.04-.518 1.452-.896m-2.34 2.657a8.001 8.001 0 0 1-2.4-.189 3.969 3.969 0 0 1-1.754-.865c-.181-.166-.295-.469-.597-.397-.026.22.151.378.272.514a3.507 3.507 0 0 0 1.573.896c.835.257 2.003.283 2.906.038M11.35 10.22c-.178 0-.771-.098-.786.098-.012.121.245.212.381.25.53.136 1.255.086 1.784.037a8.515 8.515 0 0 0 2.098-.465c.99-.362 1.795-.88 2.457-1.55.181-.18.162-.234-.034-.067a6.365 6.365 0 0 1-1.769 1.032c-1.172.472-2.517.665-4.131.665m6.576-6.717c.136.034.299.027.37.068.133.08.133.273.224.431-.54.091-.718-.302-.972-.585.091.007.227.052.378.086M7.325 16.57c-.393-.613-2.39-3.19-.832-6.989 2.128-5.178 7.88-3.772 8.421-3.557.064-.434.257-.884.764-.994a1.712 1.712 0 0 1 .612 0c-.522.193-1.077.427-1.05.976.022.49.52.835.936.91 0 0 .33.072.567-.075a.019.019 0 0 0 .016-.012c.064-.037.12-.075.204-.105a.979.979 0 0 1 .529-.023c.049.011.143.09.227.087.052 0 .136-.076.211-.087.2-.038.397.072.582.147.125.053.465.099.488.273.011.12-.178.264-.28.34a1.765 1.765 0 0 1-.423.23c.56-.045 1.682-.48 1.512.246-.015.076-.057.14-.042.178.578-.197.76-.685.673-1.372-.076.022-.14.17-.2.215v-.004c0-.196.01-.491-.125-.612.068.359-.121.53-.382.654a6.176 6.176 0 0 0-.695-.975c-.027.113-.012.26-.046.37a.518.518 0 0 0-.438-.351c-.129-.02-.272.022-.427 0-.2-.034-.431-.174-.446-.325-.027-.25.423-.367.65-.428.049.163.117.295.17.45a1.693 1.693 0 0 1 .964-.43c.102 0 .329.037.363.113.079.162-.129.355-.19.427-.037.038-.098.08-.079.102.39-.102.567-.355.84-.544.143.189.196.59.173.858.31-.303.318-.824.291-1.376a1.761 1.761 0 0 1 .749.597 1.943 1.943 0 0 0-.68-.756c-.1-.064-.228-.094-.303-.166-.068-.068-.151-.303-.242-.322-.113-.022-.265.11-.397.118-.238.019-.367-.144-.416-.378-.578.158-.8-.197-.937-.632-.023-.075-.023-.18-.06-.264-.042-.106-.273-.212-.394-.257a1.092 1.092 0 0 0-.548-.068c-.17.026-.294.113-.491.12-.476.027-.971-.18-1.357-.37A8.289 8.289 0 0 1 12.896.113c-.03-.038-.053-.094-.11-.113.125.385.348.707.556 1.005.639.915 1.47 1.58 2.283 2.215a1.308 1.308 0 0 1-.805-.208 4.165 4.165 0 0 1-.65-.416c-.85.726-2.548.81-3.916 1.134.567-.019 1.417.163 1.916.246h-.015c-2.389.094-4.449.794-5.877 2.147.37-.136.706-.306 1.118-.405-.59.537-1.171 1.096-1.644 1.75-.468.647-.967 1.33-.986 2.404.287-.28.578-.642.979-.847a13.108 13.108 0 0 0-.85 2.268c-.197.718-.492 1.913-.02 2.582.03-.238.03-.51.19-.624.28.661.76 1.996 2.26 3.319m5.68-14.095c.114.102.333.273.465.265.208 0 .314-.189.458-.272-.719-.321-1.388-.786-2.034-1.168.098.151.227.28.355.435.239.272.477.506.756.74m-8.05 5.16c.075.155 0 .366.011.517.234-.635.688-1.134 1.119-1.572.023-.026.087-.08.049-.072-.227.11-.355.314-.665.34-.174-.196-.174-.793.06-.922.288.087.477-.162.446-.427-.056-.423-.578-.707-.816-.877.125.159.367.303.423.537.02.083.015.242-.075.268-.133.038-.208-.11-.34-.09-.114.018-.167.219-.19.359a2.76 2.76 0 0 0-.03.529c0 .087.034.219-.03.283-.08-.038-.098-.136-.132-.215-.125-.276-.34-.647-.254-1.013.057-.023.163.007.2-.03.02-.227-.143-.443-.29-.586a.983.983 0 0 0-.926-.227c.211.038.68.068.684.302 0 .087-.102.212-.129.28-.166.408.023.93.22 1.194.113.152.28.295.181.575-.128-.008-.246-.09-.363-.155-.166-.095-.34-.185-.423-.329-.083-.162-.09-.325-.204-.446-.284-.321-.896-.544-1.342-.272.378-.011.73.011.877.26a1.119 1.119 0 0 1 .12.454c.008.068-.01.16.023.208.057.098.235.083.34.144.14.08.227.298.382.435a1.02 1.02 0 0 0 .133.102c.242.143.816.196.937.446m3.046 10.057c-.578.306-.914.907-.986 1.67.113-.302.43-.46.767-.615.216-.099.601-.197.662-.397.053-.155.037-.405-.038-.507-.083-.113-.227-.147-.405-.15m1.406 2.683a1.708 1.708 0 0 0-.907 1.38c.117-.28.424-.398.734-.53.189-.076.517-.162.578-.317.045-.125.045-.326-.023-.416-.064-.095-.283-.167-.382-.121m1.701 1.625c-.321.287-.506.88-.476 1.444.08-.321.325-.446.605-.631.162-.102.491-.261.552-.42a.469.469 0 0 0-.118-.461c-.181-.151-.453-.026-.567.072m2.627.567c-.313.276-.415.831-.34 1.432.076-.302.238-.45.454-.635.128-.113.332-.264.374-.42.068-.256-.208-.51-.491-.377m.544-6.085c.174.022.34.113.476.158.011-.049-.05-.071-.08-.098-.385-.329-1.277-.196-1.473.208.034.072.155.076.173.162.016.091-.117.223-.185.295-.177.193-.344.303-.544.439-.098.068-.185.181-.302.17.06-.238.189-.333.29-.537.076-.136.25-.499.152-.646-.057-.095-.355-.046-.4-.151-.039-.087.03-.197.079-.25.14-.151.43-.234.687-.287-.393 0-1.103.132-1.27.457-.113.22-.015.53.231.556.095.306-.151.684-.333.824a.344.344 0 0 1-.15.083c-.303.038-.22-.31-.296-.53-.026-.075-.075-.139-.12-.2-.084.783.086 1.554.264 2.17-.019-.215.015-.43.151-.495.31-.151.726.075 1.089.098.378.019.597-.212.858-.22.136 0 .234.092.359.061.087-.022.159-.181.234-.28a1.017 1.017 0 0 1 .265-.256c.359-.208.73.075.967.208-.211-.39-.914-.688-1.451-.428-.113.053-.204.193-.336.265-.205.121-.48.087-.745.076-.09-.008-.189.019-.26-.042.067-.34.392-.351.634-.499.348-.208.68-.525.718-1.02 0-.068-.026-.163.027-.227.049-.068.174-.076.29-.06m3.138 5.204c-.136-.17-.446-.125-.488.087-.038.215.151.438.284.574a1.126 1.126 0 0 0 .514.36c.011 0 .019.018.022 0a1.01 1.01 0 0 1-.215-.477c-.038-.211-.026-.43-.12-.548m.585-9.343c.359.026.847.14.979.348-.087-.284-.631-1.867-3.156-1.758.503.151 1.077.321 1.512.597.132.08.325.204.302.405-.026.223-.446.434-.748.457-.325.023-.575-.128-.764-.227.321.409.847.715 1.591.635-.018-.094-.143-.204-.09-.347.038-.099.2-.125.374-.114m2.086 6.04c-.098.023-.219.163-.208.302.02.19.254.28.465.265a1.175 1.175 0 0 0 .718-.291c-.396.102-.672-.34-.975-.276m.34-.922c.235-.34.31-.896.393-1.414.042-.276.08-.529.16-.733.09-.22.241-.393.294-.616.05-.216-.038-.37-.113-.548-.174-.4-.348-.798-.673-1.002-.386-.245-.987-.177-1.535-.132a18.282 18.282 0 0 0-.767.076 5.216 5.216 0 0 1-.794.064c-1.096-.02-1.727-.548-1.848-1.542 0 0 0-.012-.011-.008-.151.99.408 1.576 1.21 1.75.064.136.21.257.162.446-.053.227-.424.234-.684.2a1.425 1.425 0 0 1-.658-.28 3.383 3.383 0 0 1-.854-1 2.699 2.699 0 0 0 2.721 1.836c.48-.034.919-.14 1.3-.287-.555 0-1.292.019-1.451-.367a.503.503 0 0 1 .06-.438c.47.056.889-.046 1.282-.068a2.744 2.744 0 0 1 .96.117 1.22 1.22 0 0 1 .642.438c.272.4.303.987.204 1.561a7.181 7.181 0 0 1-.453 1.41c-.37.922-1.111 2.317-1.697 2.835-.703.593-1.584.937-2.608 1.202a6.66 6.66 0 0 1-1.323.208c-1.054.045-1.901-.102-2.46-.598a2.445 2.445 0 0 1-.605-.914 6.474 6.474 0 0 1-.363-3.04c-.038-.007-.064.035-.083.046-.03.03-.057.065-.09.091-.371.333-1.146.813-1.834.488a.635.635 0 0 1-.314-.288c-.189-.363.095-.676.314-.846.162-.125.382-.284.654-.216.162.038.416.246.416.416 0 .098-.223.28-.394.28-.177 0-.29-.144-.377-.227-.016-.027-.046-.087-.087-.06-.19.83.986.8 1.39.404.348-.34.48-1.062.163-1.52-.189-.264-.54-.366-.93-.31-.347.053-.812.152-1.028.314-.302.235-.34.726-.46 1.111a3.651 3.651 0 0 1-.454.972c-.027.038-.072.064-.065.11.465.03.862.15 1.002.487a.907.907 0 0 1 .038.465c-.065.302-.238.555-.102.915.226.597 1.092.71 1.36 1.254.114.223.091.537.235.756.177.269.597.238.986.303.22.045.439.09.605.192.321.19.332.632.718.768.23.075.43-.038.624-.091.15-.042.31-.064.453-.09.337-.054.582.026.9.12a1.406 1.406 0 0 0 .895 0c.257-.098.443-.276.643-.438.408-.325.809-.631 1.353-.805.552-.174 1.21-.261 1.512-.643a2.124 2.124 0 0 0 .302-.839c.14-.631.344-1.202.639-1.652.151-.226.37-.4.525-.623m1.24-4.12c-.087.117-.28.132-.408.212-.027.46.476-.02.408-.216m.19 2.192c-.186.121-.553-.064-.711.095-.084.605.653.159.729-.068 0-.015 0-.03-.023-.027"/>
    </svg>
  </div>
  <span class="brand-icon__name">msi</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_lenovo = {
  id: 'brand-lenovo',
  name: 'Lenovo',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'lenovo'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Lenovo</title><path d="M21.044 12.288c0 .5-.343.867-.815.867-.464 0-.827-.38-.827-.867 0-.51.343-.868.815-.868.464 0 .827.381.827.868zm-14.305-.92a.787.787 0 0 0-.651.307.991.991 0 0 0-.172.738l1.479-.614a.708.708 0 0 0-.656-.43zm6.963.052c-.472 0-.816.358-.816.868 0 .486.364.867.828.867.472 0 .815-.368.815-.867 0-.487-.363-.868-.827-.868zM24 7.997v8.006H0V7.997h24zM5.01 13.05H3.088V9.825H2.23v4.003h2.78v-.777zm1.137-.094l2.163-.897a1.667 1.667 0 0 0-.37-.86c-.284-.33-.704-.505-1.216-.505-.931 0-1.633.686-1.633 1.593 0 .93.704 1.593 1.726 1.593.572 0 1.158-.272 1.432-.589l-.535-.411c-.357.264-.56.326-.885.326-.292 0-.52-.09-.682-.25zm5.57-1.039c0-.709-.507-1.223-1.252-1.223a1.28 1.28 0 0 0-1.005.494v-.442h-.846v3.081h.846v-1.753c0-.316.245-.651.698-.651.35 0 .712.243.712.651v1.753h.847v-1.91zm3.647.37c0-.904-.725-1.593-1.65-1.593-.933 0-1.663.7-1.663 1.593 0 .903.726 1.592 1.651 1.592.932 0 1.662-.7 1.662-1.592zm2.066 1.54l1.268-3.081h-.967l-.765 2.099-.765-2.1h-.966l1.268 3.081h.927zm4.449-1.54c0-.904-.725-1.593-1.65-1.593-.932 0-1.662.7-1.662 1.593 0 .903.725 1.592 1.65 1.592.932 0 1.662-.7 1.662-1.592z"/>
    </svg>
  </div>
  <span class="brand-icon__name">lenovo</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_dell = {
  id: 'brand-dell',
  name: 'Dell',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'dell'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Dell</title><path d="M17.963 14.6V9.324h1.222v4.204h2.14v1.07h-3.362zm-9.784-3.288l2.98-2.292c.281.228.56.458.841.687l-2.827 2.14.611.535 2.827-2.216c.281.228.56.458.841.688a295.83 295.83 0 0 1-2.827 2.216l.61.536 2.83-2.295-.001-1.986h1.223v4.204h2.216v1.07h-3.362v-1.987c-.995.763-1.987 1.529-2.981 2.292l-2.981-2.292c-.144.729-.653 1.36-1.312 1.694-.285.147-.597.24-.915.276-.183.022-.367.017-.551.017H3.516V9.325H5.69a2.544 2.544 0 0 1 1.563.557c.454.36.778.872.927 1.43m-3.516-.917v3.21l.953-.001a1.377 1.377 0 0 0 1.036-.523 1.74 1.74 0 0 0 .182-1.889 1.494 1.494 0 0 0-.976-.766c-.166-.04-.338-.03-.507-.032h-.688zM11.82 0h.337a11.94 11.94 0 0 1 5.405 1.373 12.101 12.101 0 0 1 4.126 3.557A11.93 11.93 0 0 1 24 11.82v.36a11.963 11.963 0 0 1-3.236 8.033A11.967 11.967 0 0 1 12.182 24h-.361a11.993 11.993 0 0 1-4.145-.806 12.04 12.04 0 0 1-4.274-2.836A12.057 12.057 0 0 1 .576 15.67 12.006 12.006 0 0 1 0 12.181v-.361a11.924 11.924 0 0 1 1.992-6.396 12.211 12.211 0 0 1 4.71-4.172A11.875 11.875 0 0 1 11.82 0m-.153 1.23a10.724 10.724 0 0 0-6.43 2.375 10.78 10.78 0 0 0-3.319 4.573 10.858 10.858 0 0 0 .193 8.12 10.788 10.788 0 0 0 3.546 4.421 10.698 10.698 0 0 0 4.786 1.946c1.456.209 2.955.124 4.376-.26a10.756 10.756 0 0 0 5.075-3.062 10.742 10.742 0 0 0 2.686-5.28 10.915 10.915 0 0 0-.122-4.682 10.77 10.77 0 0 0-7.098-7.626 10.78 10.78 0 0 0-3.693-.525z"/>
    </svg>
  </div>
  <span class="brand-icon__name">dell</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_hp = {
  id: 'brand-hp',
  name: 'HP',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'hp'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>HP</title><path d="M12.0069 24h-.3572l2.459-6.7453h3.3796c.5907 0 1.2364-.4533 1.4424-1.0166l2.6652-7.3085c.4396-1.1952-.2473-2.1706-1.525-2.1706h-4.6983l-3.929 10.798-2.2255 6.127C3.929 22.434 0 17.6806 0 12.007 0 6.498 3.7092 1.8546 8.7647.4396L6.4705 6.759 2.6514 17.2547h2.5415L8.4488 8.339h1.9095l-3.2558 8.9158H9.644l3.0223-8.3251c.4396-1.1952-.2473-2.1706-1.525-2.1706h-2.143l2.459-6.7453C11.636 0 11.8145 0 11.9931 0 18.6285 0 24 5.3715 24 12.007c.0137 6.6216-5.3578 11.993-11.9931 11.993zM19.2742 8.325h-1.9096l-2.6789 7.336h1.9096l2.6789-7.336z"/>
    </svg>
  </div>
  <span class="brand-icon__name">hp</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_ebay = {
  id: 'brand-ebay',
  name: 'eBay',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'ebay'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>eBay</title><path d="M6.056 12.132v-4.92h1.2v3.026c.59-.703 1.402-.906 2.202-.906 1.34 0 2.828.904 2.828 2.855 0 .233-.015.457-.06.668.24-.953 1.274-1.305 2.896-1.344.51-.018 1.095-.018 1.56-.018v-.135c0-.885-.556-1.244-1.53-1.244-.72 0-1.245.3-1.305.81h-1.275c.136-1.29 1.5-1.62 2.686-1.62 1.064 0 1.995.27 2.415 1.02l-.436-.84h1.41l2.055 4.125 2.055-4.126H24l-3.72 7.305h-1.346l1.07-2.04-2.33-4.38c.13.255.2.555.2.93v2.46c0 .346.01.69.04 1.005H16.8a6.543 6.543 0 01-.046-.765c-.603.734-1.32.96-2.32.96-1.48 0-2.272-.78-2.272-1.695 0-.15.015-.284.037-.405-.3 1.246-1.36 2.086-2.767 2.086-.87 0-1.694-.315-2.2-.93 0 .24-.015.494-.04.734h-1.18c.02-.39.04-.855.04-1.245v-1.05h-4.83c.065 1.095.818 1.74 1.853 1.74.718 0 1.355-.3 1.568-.93h1.24c-.24 1.29-1.61 1.725-2.79 1.725C.95 15.009 0 13.822 0 12.232c0-1.754.982-2.91 3.116-2.91 1.688 0 2.93.886 2.94 2.806v.005zm9.137.183c-1.095.034-1.77.233-1.77.95 0 .465.36.97 1.305.97 1.26 0 1.935-.69 1.935-1.814v-.13c-.45 0-.99.006-1.484.022h.012zm-6.06 1.875c1.11 0 1.876-.806 1.876-2.02s-.768-2.02-1.893-2.02c-1.11 0-1.89.806-1.89 2.02s.765 2.02 1.875 2.02h.03zm-4.35-2.514c-.044-1.125-.854-1.546-1.725-1.546-.944 0-1.694.474-1.815 1.546z"/>
    </svg>
  </div>
  <span class="brand-icon__name">ebay</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_etsy = {
  id: 'brand-etsy',
  name: 'Etsy',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'etsy'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Etsy</title><path d="M8.559 2.445c0-.325.033-.52.59-.52h7.465c1.3 0 2.02 1.11 2.54 3.193l.42 1.666h1.27c.23-4.728.43-6.784.43-6.784s-3.196.36-5.09.36H6.635L1.521.196v1.37l1.725.326c1.21.24 1.5.496 1.6 1.606 0 0 .11 3.27.11 8.64 0 5.385-.09 8.61-.09 8.61 0 .973-.39 1.333-1.59 1.573l-1.722.33V24l5.13-.165h8.55c1.935 0 6.39.165 6.39.165.105-1.17.75-6.48.855-7.064h-1.2l-1.284 2.91c-1.005 2.28-2.476 2.445-4.11 2.445h-4.906c-1.63 0-2.415-.64-2.415-2.05V12.8s3.62 0 4.79.096c.912.064 1.463.325 1.76 1.598l.39 1.695h1.41l-.09-4.278.192-4.305h-1.391l-.45 1.89c-.283 1.244-.48 1.47-1.754 1.6-1.666.17-4.815.14-4.815.14V2.45h-.05z"/>
    </svg>
  </div>
  <span class="brand-icon__name">etsy</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_aliexpress = {
  id: 'brand-aliexpress',
  name: 'AliExpress',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'aliexpress'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>AliExpress</title><path d="M5.166 9.096a.022.022 0 0 0-.022.021c0 .396-.32.717-.713.717a.021.021 0 0 0-.021.022c0 .012.01.021.021.021.394 0 .713.322.713.718 0 .012.01.021.022.021.011 0 .021-.01.021-.021A.717.717 0 0 1 5.9 9.88a.021.021 0 0 0 0-.043.716.716 0 0 1-.713-.718v-.002a.021.021 0 0 0-.006-.015.022.022 0 0 0-.015-.006zm-3.693.526L0 13.462h.48l.355-.922h1.782l.354.922h.481L1.98 9.622zm2.264.002v3.838h.491V9.624zm2.375 0v3.838h2.413v-.502H6.613v-1.19H8.19v-.477H6.613v-1.166h1.773v-.502zm-4.386.592l.698 1.82H1.028zm14.689.402a1.466 1.466 0 0 0-.966.366V10.7h-.491v2.763h.49c.002-.477 0-.955.002-1.433a.969.969 0 0 1 .965-.918zm4.18.007c-.053 0-.105.003-.158.01-.315.031-.606.175-.753.377a.689.689 0 0 0-.14.465c.007.2.066.357.233.496.184.147.42.2.657.259.311.067.426.095.546.186.08.07.133.127.136.27 0 .25-.221.372-.42.41a.89.89 0 0 1-.894-.344l-.371.288c.33.382.777.505 1.09.5.54-.01.891-.217 1.029-.534.066-.153.063-.309.063-.38a.677.677 0 0 0-.267-.545c-.228-.177-.583-.228-.636-.242-.437-.078-.658-.196-.697-.341-.043-.192.102-.35.297-.411a.76.76 0 0 1 .857.277l.367-.247a1.166 1.166 0 0 0-.939-.494zm2.387 0c-.052 0-.105.003-.157.01-.316.031-.607.175-.753.377a.689.689 0 0 0-.14.465c.006.2.065.357.233.496.183.147.42.2.657.259.31.067.426.095.545.186.081.07.134.127.136.27.001.25-.221.372-.42.41a.89.89 0 0 1-.894-.344l-.371.288c.33.382.777.505 1.09.5.541-.01.891-.217 1.03-.534.065-.153.062-.309.062-.38a.677.677 0 0 0-.267-.545c-.227-.177-.583-.228-.636-.242-.437-.078-.658-.196-.696-.341-.043-.192.101-.35.297-.411a.76.76 0 0 1 .857.277l.367-.247a1.167 1.167 0 0 0-.94-.494zm-9.84.002a1.461 1.461 0 0 0-1.42 1.117 1.305 1.305 0 0 0-.041.327v2.833h.491v-1.813c.17.18.487.42.96.454a1.447 1.447 0 0 0 1.208-.627 1.457 1.457 0 0 0-1.199-2.292zm4.804 0a1.448 1.448 0 0 0-1.288 2.08c.255.53.811.87 1.412.833a1.452 1.452 0 0 0 1.012-.51l-.363-.291a.968.968 0 0 1-1.106.273 1.01 1.01 0 0 1-.602-.69h2.239l.002-.427a1.295 1.295 0 0 0-1.306-1.268zm-9.2.08l1.062 1.377-1.062 1.378h.581l.779-1.01.778 1.01h.581l-1.062-1.378 1.062-1.378h-.581l-.778 1.01-.779-1.01zm-3.825.015v2.74h.49v-2.74zm8.233.37a.96.96 0 0 1 .95.993.963.963 0 0 1-.863.998.962.962 0 0 1-1.034-.739c-.074-.382 0-.746.307-1.019a.959.959 0 0 1 .64-.233zm4.79.015a.823.823 0 0 1 .819.755h-1.76a.964.964 0 0 1 .94-.755z"/>
    </svg>
  </div>
  <span class="brand-icon__name">aliexpress</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_target = {
  id: 'brand-target',
  name: 'Target',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'target'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Target</title><path d="M12.0005 0C18.627 0 24 5.373 24 12.0005 24 18.627 18.627 24 11.9995 24 5.373 24 0 18.627 0 11.9995 0 5.373 5.373 0 12.0005 0zm0 19.826a7.8265 7.8265 0 10-.001-15.652C7.7133 4.2246 4.2653 7.7136 4.2653 12c0 4.2864 3.448 7.7754 7.7342 7.826h.001zm0-3.9853a3.8402 3.8402 0 110-7.6803c2.1204.0006 3.839 1.7197 3.839 3.8401s-1.7186 3.8396-3.839 3.8402z"/>
    </svg>
  </div>
  <span class="brand-icon__name">target</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_ikea = {
  id: 'brand-ikea',
  name: 'IKEA',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'ikea'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>IKEA</title><path d="M0 7.2v9.6h24V7.2H0zm12.002 9.12C5.308 16.32.48 14.36.48 12s4.831-4.32 11.522-4.32c6.69 0 11.518 1.96 11.518 4.32s-4.824 4.32-11.518 4.32zm-.225-6.062h4.176v.964c-.103-.047-.203-.047-.306-.047h-1.758v.46h1.689v.732h-1.689v.457h1.758c.103 0 .203 0 .306-.05v.967h-4.176c.052-.101.052-.198.052-.299V10.56c0-.101 0-.198-.052-.302zm-7.076.302v2.881c0 .101 0 .198.052.299H2.4c.052-.101.052-.198.052-.299V10.56c0-.101 0-.198-.052-.299h2.353c-.052.101-.052.198-.052.299zm6.447 2.881c.076.107.158.208.255.299H8.805c0-.101-.1-.306-.21-.467-.11-.161-.705-1.044-.705-1.044v1.212c0 .101 0 .198.052.299H5.778c.052-.101.052-.198.052-.299V10.56c0-.101 0-.198-.052-.299h2.164c-.052.101-.052.198-.052.299v1.259s.691-.88.85-1.085c.12-.154.268-.373.268-.473h2.257c-.155.101-.327.282-.468.45l-.826.984s1.039 1.548 1.177 1.746zm10.546-3.005a.178.178 0 0 0-.175-.178h-.21v.551h.083v-.195h.12l.11.195h.093l-.12-.212a.184.184 0 0 0 .099-.161zm-.189.101h-.114v-.191h.124c.055 0 .093.047.093.101 0 .053-.048.093-.103.09zm-.021-.457h-.031a.444.444 0 0 0-.437.457c0 .007 0 .017-.003.023a.466.466 0 0 0 .482.447.464.464 0 0 0 .458-.47v-.017a.454.454 0 0 0-.469-.44zm0 .823a.372.372 0 0 1-.375-.366v-.027a.357.357 0 0 1 .375-.339c.206 0 .375.165.375.366s-.168.366-.375.366zm-.877-.339c-.038-.101-.093-.198-.065-.299h-3.017c.014.101-.024.198-.062.299l-1.07 2.881a.852.852 0 0 1-.162.299h1.785c-.014-.101.024-.198.058-.299.034-.101.072-.198.072-.198l.021-.054h1.304l.021.05c.048.118.083.198.083.198.041.101.079.198.069.299h2.263a.837.837 0 0 1-.169-.299 690.277 690.277 0 0 0-1.131-2.877zm-2.167 1.893c.155-.42.289-.772.299-.806.028-.074.048-.151.062-.228.017.077.041.154.069.228l.316.806h-.746z"/>
    </svg>
  </div>
  <span class="brand-icon__name">ikea</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_mcdonalds = {
  id: 'brand-mcdonalds',
  name: 'McDonald\'s',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'mcdonalds'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>McDonald's</title><path d="M17.243 3.006c2.066 0 3.742 8.714 3.742 19.478H24c0-11.588-3.042-20.968-6.766-20.968-2.127 0-4.007 2.81-5.248 7.227-1.241-4.416-3.121-7.227-5.231-7.227C3.031 1.516 0 10.888 0 22.476h3.014c0-10.763 1.658-19.47 3.724-19.47 2.066 0 3.741 8.05 3.741 17.98h2.997c0-9.93 1.684-17.98 3.75-17.98Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">mcdonalds</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_starbucks = {
  id: 'brand-starbucks',
  name: 'Starbucks',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'starbucks'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Starbucks</title><path d="M13.2072 5.2801c-.1052-.0188-.6126-.104-1.2072-.104s-1.102.0848-1.2072.104c-.0605.0108-.0837-.0484-.0377-.0828.0417-.0308 1.2445-.9463 1.2445-.9463l1.244.9463c.0469.0344.024.0936-.0364.0828zm-2.0783 5.9446s-.0636.0228-.0804.0788c.252.1937.4257.6343.9515.6343s.6995-.4406.9511-.6343c-.0164-.0564-.08-.0788-.08-.0788s-.3293.0776-.8711.0776c-.5418 0-.8711-.0776-.8711-.0776zM12 10.4832c-.146 0-.178-.0552-.2777-.0548-.0948.0004-.2789.076-.319.1453a.1542.1542 0 00.0413.0948c.2129.032.309.1505.5558.1505.2469 0 .3425-.1185.5558-.1505a.1579.1579 0 00.0412-.0948c-.0396-.0692-.224-.1445-.3193-.1453-.1-.0008-.1324.0548-.2781.0548zm11.9868 2.27a11.964 11.964 0 01-.076.8528c-1.359.2249-1.8447-.986-3.2368-.9252.0832.2954.1508.5963.2029.9036 1.148-.0008 1.6105 1.0724 2.8878.9143-.0672.3281-.148.6519-.2413.9708-1.01.0992-1.3657-.9044-2.5345-.8767.0096.1664.0148.3345.0148.5041l-.0048.2805 2.2696.866a12.04 12.04 0 01-.3965.9479c-.6823-.0376-.9175-.9127-1.9555-.8431a9.0882 9.0882 0 01-.118.665c.9015-.0632 1.0955.7667 1.7414.834a12.2317 12.2317 0 01-.5302.8767c-.3826-.205-.7143-.8231-1.4398-.8612a8.6035 8.6035 0 00.195-.6994c-.6435 0-1.3794-.2509-1.9964-.8127.2-1.1388-1.5674-2.2984-1.5674-3.1324 0-.9059.4582-1.4073.4582-2.6285 0-.9063-.4402-1.8895-1.104-2.5614a2.2175 2.2175 0 00-.4114-.3309c.6098.7547 1.078 1.6494 1.078 2.6858 0 1.15-.535 1.757-.535 2.8186 0 1.0612 1.5526 1.9796 1.5526 3.074 0 .4305-.1377.851-.5914 1.677.697.6962 1.605 1.076 2.1908 1.076.19 0 .292-.058.3601-.2073a9.0925 9.0925 0 00.1665-.391c.631.0245.9199.5979 1.2692.8268-.1916.2573-.393.5057-.6038.7462-.234-.2593-.5486-.6954-1.0092-.8167a9.2087 9.2087 0 01-.2613.473c.3966.108.6679.5082.878.7715a12.1305 12.1305 0 01-.7075.6754c-.1532-.2384-.3917-.541-.659-.7042a8.3639 8.3639 0 01-.3077.391c.2272.154.4277.4313.5586.6574-.2833.2272-.5763.443-.8796.6446-.1496-1.2192-1.8138-2.0548-1.3653-3.4693-.1472.2493-.3229.561-.3229.9364 0 1.024 1.0908 1.8366 1.1776 2.8542-.226.1353-.4573.2625-.693.383-.0392-1.1185-1.194-2.3425-1.194-3.2604 0-1.0248 1.342-2.054 1.342-3.2636 0-1.2105-1.5485-2.0484-1.5485-3.1112 0-1.062.6586-1.673.6586-3.0343 0-.9972-.4738-2.0063-1.2056-2.651-.1297-.1144-.2573-.2052-.4106-.2849.6903.828 1.0904 1.579 1.0904 2.7186 0 1.2801-.7546 1.9908-.7546 3.244 0 1.2537 1.5197 1.9507 1.5197 3.1192 0 1.1684-1.4145 2.1532-1.4145 3.3536 0 1.092 1.2468 2.182 1.2653 3.4777a11.7704 11.7704 0 01-.8327.3257c.1584-1.3089-1.245-2.659-1.245-3.727 0-1.1676 1.4674-2.1712 1.4674-3.43 0-1.2597-1.4917-1.8451-1.4917-3.138 0-1.292.9151-2.0075.9151-3.4352 0-1.1129-.5494-2.1136-1.352-2.7338l-.0509-.0385c-.0756-.056-.138.0116-.0844.078.5682.7095.8719 1.427.8719 2.4894 0 1.306-1.0512 2.3673-1.0512 3.6325 0 1.4934 1.4117 1.9203 1.4117 3.1456 0 1.2248-1.5137 2.2048-1.5137 3.5053 0 1.206 1.4325 2.5445 1.1868 3.9366a11.6645 11.6645 0 01-.8743.192c.2689-1.7334-1.1364-2.9782-1.1364-4.1122 0-1.2277 1.5677-2.322 1.5677-3.5217 0-1.1316-1.1252-1.5014-1.2732-2.659-.0204-.158-.1473-.2753-.3221-.2461-.2285.0416-.5214.192-.9816.192-.4602 0-.753-.1508-.982-.192-.1744-.0288-.3013.0884-.3217.246-.1476 1.1577-1.2736 1.527-1.2736 2.659 0 1.1997 1.5681 2.2937 1.5681 3.5218 0 1.134-1.4053 2.3788-1.1368 4.1123a12.1233 12.1233 0 01-.8743-.1921c-.2457-1.3921 1.1872-2.7306 1.1872-3.9366 0-1.3005-1.5141-2.2805-1.5141-3.5053 0-1.2253 1.412-1.6522 1.412-3.1456 0-1.2652-1.0515-2.326-1.0515-3.6325 0-1.062.3037-1.7795.8723-2.4893.0532-.0665-.0088-.134-.0848-.078l-.0504.0384c-.802.6186-1.351 1.6193-1.351 2.7322 0 1.4277.9152 2.1431.9152 3.4352 0 1.2925-1.4917 1.878-1.4917 3.138 0 1.2588 1.4673 2.2624 1.4673 3.43 0 1.0684-1.4033 2.4181-1.2445 3.727a11.8995 11.8995 0 01-.833-.3257c.0188-1.2957 1.2648-2.3861 1.2648-3.4777 0-1.2004-1.4137-2.1852-1.4137-3.3536 0-1.1685 1.519-1.8655 1.519-3.1192 0-1.2532-.7543-1.9639-.7543-3.244 0-1.1396.3997-1.8907 1.09-2.7186-.1537.0797-.281.1705-.4102.285-.7318.6446-1.2052 1.6537-1.2052 2.651 0 1.3612.6586 1.9722.6586 3.0342 0 1.0628-1.5485 1.9007-1.5485 3.1112 0 1.2096 1.342 2.2392 1.342 3.2636 0 .9183-1.1556 2.1423-1.1944 3.2604a11.8754 11.8754 0 01-.693-.383c.0872-1.0176 1.1776-1.8303 1.1776-2.8542 0-.3754-.1753-.687-.323-.9364.4486 1.4145-1.2156 2.25-1.3652 3.4693a12.1204 12.1204 0 01-.8796-.6446c.1305-.2257.331-.5034.5586-.6575a7.9134 7.9134 0 01-.3077-.391c-.2677.1633-.5066.4659-.6594.7043a12.2459 12.2459 0 01-.707-.6754c.21-.2633.4813-.6635.8779-.7715a9.0433 9.0433 0 01-.2613-.473c-.4606.1213-.7755.5574-1.0092.8167a12.141 12.141 0 01-.6038-.7462c.3493-.229.6382-.8027 1.2688-.8267.0529.1312.1085.2617.1669.3909.068.1493.1705.2073.3601.2073.5858 0 1.4934-.3798 2.1908-1.076-.4537-.826-.5914-1.2465-.5914-1.677 0-1.094 1.5526-2.0124 1.5526-3.074 0-1.0615-.535-1.6686-.535-2.8186 0-1.0364.4682-1.9311 1.078-2.6858a2.2175 2.2175 0 00-.4114.331c-.6638.6722-1.104 1.655-1.104 2.5613 0 1.2212.4586 1.7226.4586 2.6285 0 .834-1.7679 1.9936-1.5678 3.1324-.617.5618-1.3529.8127-1.9967.8127a9.305 9.305 0 00.1949.6994c-.7251.0385-1.0568.6567-1.4398.8612a12.0872 12.0872 0 01-.5302-.8768c.6455-.0672.84-.897 1.7419-.8339a9.1275 9.1275 0 01-.1185-.665c-1.038-.0696-1.2732.8059-1.9555.8431a12.04 12.04 0 01-.3965-.948l2.27-.8659-.0048-.2805c0-.1696.0052-.3377.0144-.5041-1.1688-.0273-1.5246.976-2.5345.8767a12.106 12.106 0 01-.241-.9708c1.2766.158 1.7395-.9151 2.888-.9143a8.7482 8.7482 0 01.2024-.9036c-1.392-.0604-1.8779 1.1505-3.2364.9252a11.7352 11.7352 0 01-.076-.8527c1.5794.1764 2.1716-1.122 3.6097-.9632a8.4303 8.4303 0 01.471-.9963c-1.803-.317-2.4153 1.1908-4.0935.9591C.1813 5.2805 5.4844.0898 12 .0898S23.8187 5.2805 24 11.753c-1.6786.2317-2.2908-1.2757-4.0935-.9591.1773.32.335.6526.471.9963 1.4373-.1592 2.0295 1.1396 3.6093.9632zm-17.147-5.035c-.884-.3613-1.954-.278-2.868.309-.1416-.8504-.603-1.6058-1.26-2.0616-.0908-.0628-.1853-.0032-.1769.102.1389 1.7967-.9115 3.3569-2.2032 4.7282 1.3313.4001 2.4645-1.3141 4.1912-.7159a9.0364 9.0364 0 012.3168-2.3617zM12 6.6314c-1.1144 0-2.048.6303-2.2924 1.4446-.0188.0624.0068.1028.0788.0704.2005-.09.4285-.1333.6762-.1333.4546 0 .8551.1669 1.092.4574.1049.3457.1137.8463-.0048 1.132-.1872-.042-.2545-.1868-.4373-.1868-.1829 0-.3245.1284-.6347.1284-.3097 0-.346-.1465-.5498-.1465-.2396 0-.2837.247-.2837.5254 0 1.2417 1.1413 2.9503 2.3553 2.9503 1.2136 0 2.3549-1.7086 2.3549-2.9503 0-.2785-.0573-.517-.3077-.5494-.1249.09-.2397.1705-.5254.1705-.3102 0-.3958-.1284-.5783-.1284-.2204 0-.1984.465-.4601.491-.1745-.4194-.1829-.9572-.038-1.4362.2373-.2905.6374-.4574 1.092-.4574.2477 0 .4773.0437.6758.1333.0724.0324.0976-.0084.0788-.0704-.244-.8143-1.1772-1.4446-2.2916-1.4446zm1.7743 1.7815c-.2673 0-.5807.082-.7775.3013-.0204.0596-.0204.1484.0084.2077.4845-.166.9119-.1725 1.1184.0584.11-.1.1452-.19.1452-.2945 0-.1613-.164-.273-.4945-.273zm-3.8979.5674c.2337-.234.7263-.224 1.238-.0352.0225-.2545-.4333-.5326-.8887-.5326-.3309 0-.4945.1116-.4945.2733 0 .1044.0352.1949.1452.2945zm7.6804-4.2031c-.8799.0628-1.6442.3649-2.2624.8683.2625-.7443.5958-1.3953 1.0184-2.0264-1.1204.1189-2.0572.5286-2.7406 1.2289l-.535-1.4025 1.1876-1.0488-1.5902-.1125L12 .8053l-.635 1.479-1.5902.1124 1.1876 1.0488-.5346 1.4025c-.6838-.7003-1.6206-1.11-2.7402-1.2289.4218.6315.7551 1.2825 1.0176 2.0264-.6178-.5038-1.3821-.806-2.262-.8683.5278.6786.9955 1.402 1.342 2.18.0393.0876.1233.1164.2141.0712 1.2053-.599 2.5634-.936 4.0003-.936 1.437 0 2.7946.3374 4.0007.936.0908.0452.1748.0164.2136-.0712.347-.778.8147-1.5014 1.343-2.18zm1.9211 5.3035c1.7259-.5982 2.8595 1.1156 4.1908.7159-1.2917-1.3713-2.3417-2.9315-2.2028-4.7282.0084-.1052-.0865-.1652-.1769-.102-.6574.4558-1.1188 1.2112-1.26 2.0615-.9144-.587-1.984-.6706-2.868-.3089a9.0431 9.0431 0 012.317 2.3617z"/>
    </svg>
  </div>
  <span class="brand-icon__name">starbucks</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_cocacola = {
  id: 'brand-cocacola',
  name: 'Coca-Cola',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'cocacola'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Coca-Cola</title><path d="M16.813 8.814s-.45.18-.973.756c-.524.577-.828 1.225-.603 1.397.087.066.287.079.65-.25a2.864 2.864 0 00.766-1.063c.234-.57.16-.833.16-.84m2.863 1.038c-.581-.299-1.006-.664-1.448-.89-.422-.216-.695-.307-1.036-.261a1.057 1.057 0 00-.14.035s.176.6-.523 1.607c-.708 1.022-1.35 1.015-1.533.734-.191-.296.056-.9.468-1.437.432-.562 1.19-1.028 1.19-1.028s-.241-.148-.835.19c-.58.326-1.577 1.107-2.502 2.423-.926 1.316-1.11 2.04-1.242 2.61-.132.57-.012 1.18.62 1.18s1.368-.964 1.576-1.299c.386-.624.637-1.581.112-1.45-.259.065-.468.351-.6.627a2.683 2.683 0 00-.19.554 2.185 2.185 0 00-.513.298 3.788 3.788 0 00-.486.43s.002-.456.365-1.194c.364-.737 1.03-1.074 1.408-1.106.34-.027.783.262.408 1.327-.375 1.065-1.483 2.36-2.646 2.376-1.073.015-1.776-1.355-.282-3.745C13.501 9.19 15.441 8.38 16.07 8.29c.63-.09.835.187.835.187a2.709 2.709 0 011.197-.197c.77.052 1.364.596 2.15.979-.205.195-.4.4-.575.592m3.454-.89c-.533.342-1.27.652-1.979.586-.179.185-.371.4-.563.634 1.228.243 2.305-.519 2.877-1.167A3.82 3.82 0 0024 8.248a4.792 4.792 0 01-.869.714m-1.636 3.462a.268.268 0 00.023-.051.124.124 0 00-.113-.108c-.117-.005-.277.017-.695.48a6.303 6.303 0 00-.89 1.263c-.24.438-.337.764-.2.848a.199.199 0 00.146.015c.093-.022.199-.11.36-.295.075-.088.158-.212.258-.349.277-.376.973-1.563 1.111-1.803m-4.349.504c.07-.182.159-.541-.026-.682-.199-.15-.705.201-.708.561-.003.369.357.535.443.559.05.013.066.01.09-.029a3.284 3.284 0 00.201-.409m-.383.67a1.531 1.531 0 01-.348-.222 1.116 1.116 0 01-.26-.317c-.008-.012-.015-.003-.023.008-.007.01-.039.039-.309.434-.27.396-.684 1.216-.31 1.355.241.09.641-.331.86-.61a5.21 5.21 0 00.402-.614c.012-.023 0-.029-.012-.034m4.258.947c-.102.163-.218.476.117.281.41-.236.994-1.123.994-1.123h.265a8.88 8.88 0 01-.803 1.054c-.415.46-.922.879-1.28.837-.416-.048-.286-.596-.286-.596s-.596.635-1.01.59c-.557-.062-.387-.751-.387-.751s-.63.774-1.06.75c-.673-.04-.504-.859-.316-1.436.1-.308.193-.55.193-.55s-.067.017-.21.038c-.076.011-.212.019-.212.019s-.28.495-.505.792c-.224.297-1.178 1.322-1.74 1.117-.518-.19-.346-.984-.044-1.615.44-.92 1.68-2.243 2.396-2.068.741.18.017 1.532.017 1.532s0 .005.007.009c.015.005.054.01.143-.008a1.605 1.605 0 00.271-.08s.746-1.561 1.569-2.583c.823-1.02 2.465-2.78 3.11-2.354.156.105.086.465-.126.902a2.891 2.891 0 01-.291.078c.142-.258.236-.475.264-.627.097-.528-1.135.585-2.015 1.78a16.594 16.594 0 00-1.409 2.28 3.86 3.86 0 00.454-.324 13.002 13.002 0 001.118-1.043 12.169 12.169 0 00.951-1.098 2.58 2.58 0 00.28-.029 12.054 12.054 0 01-1.05 1.24c-.35.355-.73.737-1.061 1.015a8.84 8.84 0 01-.931.691s-.77 1.553-.351 1.652c.246.06.732-.69.732-.69s.635-.967 1.017-1.404c.522-.593.97-.936 1.42-.942.261-.005.415.273.415.273l.123-.19h.757s-1.414 2.398-1.527 2.579m2.111-5.58c-.533.341-1.27.651-1.979.585-.18.185-.371.4-.564.634 1.229.243 2.305-.518 2.878-1.167A3.82 3.82 0 0024 8.248a4.792 4.792 0 01-.869.714m-10.63 1.177h-.72l-.407.658h.72zm-3.41 2.277c.307-.42 1.152-1.891 1.152-1.891a.124.124 0 00-.112-.108c-.117-.006-.312.034-.7.519-.387.485-.688.87-.907 1.272-.24.438-.346.747-.207.831a.205.205 0 00.144.015c.09-.022.208-.113.369-.298a5.57 5.57 0 00.262-.34m-3.863-1.99c-.199-.15-.705.201-.708.56-.003.369.456.482.515.484a.09.09 0 00.05-.01.06.06 0 00.024-.027 3.483 3.483 0 00.146-.325c.07-.183.158-.541-.027-.682m-.3 1.27a1.678 1.678 0 01-.39-.18.812.812 0 01-.279-.309c-.007-.012-.015-.003-.022.008-.007.01-.047.061-.318.458-.27.398-.672 1.21-.296 1.35.24.09.644-.334.864-.612a7.24 7.24 0 00.455-.681c.009-.024 0-.03-.014-.034m5.88.244h.263s-1.321 1.912-2.068 1.823c-.416-.049-.293-.563-.293-.563s-.585.685-1.123.546c-.487-.125-.172-.936-.172-.936-.056.022-1.111 1.211-1.853.926-.776-.3-.373-1.296-.225-1.595.125-.253.263-.499.263-.499s-.119.034-.195.051l-.186.04s-.367.596-.591.894c-.225.297-1.178 1.32-1.74 1.117-.562-.204-.423-.99-.107-1.615.512-1.012 1.726-2.256 2.458-2.068.739.189.127 1.388.127 1.388s.147.019.5-.222c.507-.346 1.176-1.277 1.901-1.167.342.051.66.4.225 1.064-.139.213-.372.403-.55.215-.111-.118-.014-.33.103-.477a.457.457 0 01.39-.179s.12-.273-.185-.269c-.247.005-.871.58-1.223 1.16-.323.533-.813 1.441-.322 1.639.451.182 1.309-.836 1.706-1.37.397-.533 1.302-1.742 2.062-1.79.261-.017.417.221.417.221l.088-.139h.759s-1.43 2.387-1.542 2.567c-.088.141-.204.46.117.281.322-.178.996-1.043.996-1.043m-.414 3.824a3.144 3.144 0 00-1.908-.557 1.17 1.17 0 00-.93.504c-.29-.505-.862-.815-1.747-.808-1.43.016-2.849.676-3.972.675-1.077 0-1.863-.677-1.837-1.88.047-2.109 1.83-4.009 3.16-4.864.767-.49 1.409-.637 1.828-.59.306.034.674.388.442.909-.341.761-.812.699-.795.335.01-.237.168-.386.286-.469a.582.582 0 01.278-.068c.068-.057.117-.474-.429-.337-.546.137-1.21.676-1.84 1.371-.63.696-1.61 2.011-1.852 3.392-.113.64-.039 1.808 1.48 1.795 1.287-.01 3.185-.859 4.929-.841a3.34 3.34 0 011.725.472c.451.278.992.684 1.184.961"/>
    </svg>
  </div>
  <span class="brand-icon__name">cocacola</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_nike = {
  id: 'brand-nike',
  name: 'Nike',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'nike'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Nike</title><path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"/>
    </svg>
  </div>
  <span class="brand-icon__name">nike</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_adidas = {
  id: 'brand-adidas',
  name: 'Adidas',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'adidas'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Adidas</title><path d="m24 19.535-8.697-15.07-4.659 2.687 7.145 12.383Zm-8.287 0L9.969 9.59 5.31 12.277l4.192 7.258ZM4.658 14.723l2.776 4.812H1.223L0 17.41Z"/>
    </svg>
  </div>
  <span class="brand-icon__name">adidas</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_puma = {
  id: 'brand-puma',
  name: 'Puma',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'puma'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>Puma</title><path d="M23.845 3.008c-.417-.533-1.146-.106-1.467.08-2.284 1.346-2.621 3.716-3.417 5.077-.626 1.09-1.652 1.89-2.58 1.952-.686.049-1.43-.084-2.168-.405-1.807-.781-2.78-1.792-3.017-1.97-.487-.37-4.23-4.015-7.28-4.164 0 0-.372-.75-.465-.763-.222-.025-.45.451-.616.501-.15.053-.413-.512-.565-.487-.153.02-.302.586-.6.877-.22.213-.486.2-.637.463-.052.096-.034.265-.093.42-.127.32-.551.354-.555.697 0 .381.357.454.669.72.248.212.265.362.554.461.258.088.632-.187.964-.088.277.081.543.14.602.423.054.256 0 .658-.34.613-.112-.015-.598-.174-1.198-.11-.725.077-1.553.309-1.634 1.11-.041.447.514.97 1.055.866.371-.071.196-.506.399-.716.267-.27 1.772.944 3.172.944.593 0 1.031-.15 1.467-.605.04-.029.093-.102.155-.11a.632.632 0 01.195.088c1.131.897 1.984 2.7 6.13 2.721.582.007 1.25.279 1.796.777.48.433.764 1.125 1.037 1.825.418 1.053 1.161 2.069 2.292 3.203.06.068.99.78 1.06.833.012.01.084.167.053.255-.02.69-.123 2.67 1.365 2.753.366.02.275-.231.275-.41-.005-.341-.065-.685.113-1.04.253-.478-.526-.709-.509-1.756.019-.784-.645-.651-.984-1.25-.19-.343-.368-.532-.35-.946.073-2.38-.517-3.948-.805-4.327-.227-.294-.423-.403-.207-.54 1.24-.815 1.525-1.574 1.525-1.574.66-1.541 1.256-2.945 2.075-3.57.166-.12.589-.44.852-.56.763-.362 1.173-.578 1.388-.788.356-.337.635-1.053.294-1.48z"/>
    </svg>
  </div>
  <span class="brand-icon__name">puma</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

const brand_newbalance = {
  id: 'brand-newbalance',
  name: 'New Balance',
  category: 'icons',
  iconCategory: 'Brands',
  tags: ['simple-icons', 'brand', 'logo', 'svg', 'newbalance'],
  author: 'simple-icons',
  html: `<div class="brand-icon">
  <div class="brand-icon__svg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>New Balance</title><path d="M12.169 10.306l1.111-1.937 3.774-.242.132-.236-3.488-.242.82-1.414h6.47c1.99 0 3.46.715 2.887 2.8-.17.638-.979 2.233-3.356 2.899.507.06 1.76.616 1.54 2.057-.384 2.558-3.69 3.774-5.533 3.774l-7.641.006-.38-1.48 4.005-.28.137-.237-4.346-.264-.467-1.755 6.178-.363.137-.231-11.096-.693.534-.925 11.948-.775.138-.231-3.504-.231m5 .385l1.1-.006c.738-.005 1.502-.34 1.783-1.018.259-.632-.088-1.171-.55-1.166h-1.067l-1.266 2.19zm-1.27 2.195l-1.326 2.305h1.265c.589 0 1.64-.292 1.964-1.128.302-.781-.253-1.177-.638-1.177h-1.266zM6.26 16.445l-.77 1.315L0 17.77l.534-.923 5.726-.402zm.385-10.216l4.417.006.336 1.248-5.276-.33.523-.924zm5 2.245l.484 1.832-7.542-.495.528-.92 6.53-.417zm-3.84 5.281l-.957 1.661-5.32-.302.534-.924 5.743-.435z"/>
    </svg>
  </div>
  <span class="brand-icon__name">newbalance</span>
</div>`,
  css: `.brand-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-subtle, #2c2c34);
  background: var(--bg-card, #1b1b20);
  transition: all 0.2s ease;
  cursor: pointer;
}

.brand-icon:hover {
  border-color: var(--accent, #a78bfa);
  background: var(--bg-hover, #232329);
  transform: translateY(-2px);
}

.brand-icon__svg {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary, #f4f4f5);
  transition: color 0.2s ease;
}

.brand-icon:hover .brand-icon__svg {
  color: var(--accent, #a78bfa);
}

.brand-icon__name {
  font-size: 11px;
  color: var(--text-muted, #71717a);
  font-family: ui-monospace, monospace;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}`
}

export { brand_github, brand_gitlab, brand_git, brand_bitbucket, brand_docker, brand_kubernetes, brand_google, brand_googlecloud, brand_googlemaps, brand_googleanalytics, brand_googleassistant, brand_googleads, brand_googlescholar, brand_googletranslate, brand_googleearth, brand_googlekeep, brand_googlemessages, brand_apple, brand_applemusic, brand_applepay, brand_applepodcasts, brand_appletv, brand_intel, brand_nvidia, brand_amd, brand_qualcomm, brand_arm, brand_raspberrypi, brand_arduino, brand_linux, brand_ubuntu, brand_debian, brand_fedora, brand_archlinux, brand_centos, brand_redhat, brand_linuxmint, brand_opensuse, brand_gentoo, brand_alpinelinux, brand_firefox, brand_safari, brand_opera, brand_brave, brand_torbrowser, brand_vivaldi, brand_duckduckgo, brand_jetbrains, brand_intellijidea, brand_webstorm, brand_pycharm, brand_phpstorm, brand_rubymine, brand_goland, brand_clion, brand_datagrip, brand_rider, brand_eclipse, brand_sublimetext, brand_atom, brand_xcode, brand_neovim, brand_vim, brand_python, brand_javascript, brand_typescript, brand_deno, brand_bun, brand_go, brand_rust, brand_ruby, brand_php, brand_kotlin, brand_swift, brand_scala, brand_elixir, brand_erlang, brand_haskell, brand_clojure, brand_perl, brand_lua, brand_r, brand_julia, brand_dart, brand_crystal, brand_zig, brand_nim, brand_ocaml, brand_fsharp, brand_c, brand_fortran, brand_assemblyscript, brand_react, brand_vuedotjs, brand_angular, brand_svelte, brand_nextdotjs, brand_astro, brand_remix, brand_preact, brand_emberdotjs, brand_backbonedotjs, brand_gatsby, brand_gridsome, brand_eleventy, brand_tailwindcss, brand_bootstrap, brand_sass, brand_vite, brand_webpack, brand_esbuild, brand_swc, brand_gulp, brand_babel, brand_postcss, brand_less, brand_stylus, brand_express, brand_fastify, brand_nestjs, brand_fastapi, brand_django, brand_flask, brand_laravel, brand_spring, brand_quarkus, brand_gin, brand_prisma, brand_typeorm, brand_sequelize, brand_mongoose, brand_drizzle, brand_postgresql, brand_mysql, brand_mongodb, brand_redis, brand_sqlite, brand_supabase, brand_firebase, brand_mariadb, brand_influxdb, brand_neo4j, brand_elasticsearch, brand_cockroachlabs, brand_hasura, brand_appwrite, brand_vercel, brand_netlify, brand_cloudflare, brand_digitalocean, brand_render, brand_flydotio, brand_railway, brand_fastly, brand_akamai, brand_vultr, brand_hetzner, brand_scaleway, brand_ovh, brand_namecheap, brand_godaddy, brand_stripe, brand_paypal, brand_visa, brand_mastercard, brand_americanexpress, brand_wise, brand_coinbase, brand_binance, brand_revolut, brand_mercadopago, brand_square, brand_adyen, brand_razorpay, brand_x, brand_instagram, brand_facebook, brand_youtube, brand_tiktok, brand_twitch, brand_discord, brand_whatsapp, brand_telegram, brand_reddit, brand_medium, brand_substack, brand_notion, brand_pinterest, brand_tumblr, brand_flickr, brand_vimeo, brand_snapchat, brand_signal, brand_mastodon, brand_bluesky, brand_threads, brand_figma, brand_framer, brand_behance, brand_dribbble, brand_sketch, brand_blender, brand_cinema4d, brand_spotify, brand_soundcloud, brand_netflix, brand_hbomax, brand_crunchyroll, brand_tidal, brand_deezer, brand_pandora, brand_shazam, brand_letterboxd, brand_imdb, brand_wordpress, brand_ghost, brand_webflow, brand_squarespace, brand_wix, brand_shopify, brand_woocommerce, brand_contentful, brand_strapi, brand_sanity, brand_storyblok, brand_payloadcms, brand_statamic, brand_joomla, brand_huggingface, brand_anthropic, brand_ollama, brand_replicate, brand_langchain, brand_perplexity, brand_airbnb, brand_uber, brand_lyft, brand_tripadvisor, brand_expedia, brand_kayak, brand_gmail, brand_googlecalendar, brand_googledrive, brand_googledocs, brand_googlesheets, brand_googleslides, brand_trello, brand_asana, brand_clickup, brand_jira, brand_confluence, brand_todoist, brand_obsidian, brand_logseq, brand_roamresearch, brand_zoom, brand_googlemeet, brand_webex, brand_steam, brand_epicgames, brand_riotgames, brand_valve, brand_playstation, brand_gamejolt, brand_itchdotio, brand_roblox, brand_unity, brand_unrealengine, brand_godotengine, brand_gamemaker, brand_samsung, brand_razer, brand_corsair, brand_asus, brand_msi, brand_lenovo, brand_dell, brand_hp, brand_ebay, brand_etsy, brand_aliexpress, brand_target, brand_ikea, brand_mcdonalds, brand_starbucks, brand_cocacola, brand_nike, brand_adidas, brand_puma, brand_newbalance }
export default { brand_github, brand_gitlab, brand_git, brand_bitbucket, brand_docker, brand_kubernetes, brand_google, brand_googlecloud, brand_googlemaps, brand_googleanalytics, brand_googleassistant, brand_googleads, brand_googlescholar, brand_googletranslate, brand_googleearth, brand_googlekeep, brand_googlemessages, brand_apple, brand_applemusic, brand_applepay, brand_applepodcasts, brand_appletv, brand_intel, brand_nvidia, brand_amd, brand_qualcomm, brand_arm, brand_raspberrypi, brand_arduino, brand_linux, brand_ubuntu, brand_debian, brand_fedora, brand_archlinux, brand_centos, brand_redhat, brand_linuxmint, brand_opensuse, brand_gentoo, brand_alpinelinux, brand_firefox, brand_safari, brand_opera, brand_brave, brand_torbrowser, brand_vivaldi, brand_duckduckgo, brand_jetbrains, brand_intellijidea, brand_webstorm, brand_pycharm, brand_phpstorm, brand_rubymine, brand_goland, brand_clion, brand_datagrip, brand_rider, brand_eclipse, brand_sublimetext, brand_atom, brand_xcode, brand_neovim, brand_vim, brand_python, brand_javascript, brand_typescript, brand_deno, brand_bun, brand_go, brand_rust, brand_ruby, brand_php, brand_kotlin, brand_swift, brand_scala, brand_elixir, brand_erlang, brand_haskell, brand_clojure, brand_perl, brand_lua, brand_r, brand_julia, brand_dart, brand_crystal, brand_zig, brand_nim, brand_ocaml, brand_fsharp, brand_c, brand_fortran, brand_assemblyscript, brand_react, brand_vuedotjs, brand_angular, brand_svelte, brand_nextdotjs, brand_astro, brand_remix, brand_preact, brand_emberdotjs, brand_backbonedotjs, brand_gatsby, brand_gridsome, brand_eleventy, brand_tailwindcss, brand_bootstrap, brand_sass, brand_vite, brand_webpack, brand_esbuild, brand_swc, brand_gulp, brand_babel, brand_postcss, brand_less, brand_stylus, brand_express, brand_fastify, brand_nestjs, brand_fastapi, brand_django, brand_flask, brand_laravel, brand_spring, brand_quarkus, brand_gin, brand_prisma, brand_typeorm, brand_sequelize, brand_mongoose, brand_drizzle, brand_postgresql, brand_mysql, brand_mongodb, brand_redis, brand_sqlite, brand_supabase, brand_firebase, brand_mariadb, brand_influxdb, brand_neo4j, brand_elasticsearch, brand_cockroachlabs, brand_hasura, brand_appwrite, brand_vercel, brand_netlify, brand_cloudflare, brand_digitalocean, brand_render, brand_flydotio, brand_railway, brand_fastly, brand_akamai, brand_vultr, brand_hetzner, brand_scaleway, brand_ovh, brand_namecheap, brand_godaddy, brand_stripe, brand_paypal, brand_visa, brand_mastercard, brand_americanexpress, brand_wise, brand_coinbase, brand_binance, brand_revolut, brand_mercadopago, brand_square, brand_adyen, brand_razorpay, brand_x, brand_instagram, brand_facebook, brand_youtube, brand_tiktok, brand_twitch, brand_discord, brand_whatsapp, brand_telegram, brand_reddit, brand_medium, brand_substack, brand_notion, brand_pinterest, brand_tumblr, brand_flickr, brand_vimeo, brand_snapchat, brand_signal, brand_mastodon, brand_bluesky, brand_threads, brand_figma, brand_framer, brand_behance, brand_dribbble, brand_sketch, brand_blender, brand_cinema4d, brand_spotify, brand_soundcloud, brand_netflix, brand_hbomax, brand_crunchyroll, brand_tidal, brand_deezer, brand_pandora, brand_shazam, brand_letterboxd, brand_imdb, brand_wordpress, brand_ghost, brand_webflow, brand_squarespace, brand_wix, brand_shopify, brand_woocommerce, brand_contentful, brand_strapi, brand_sanity, brand_storyblok, brand_payloadcms, brand_statamic, brand_joomla, brand_huggingface, brand_anthropic, brand_ollama, brand_replicate, brand_langchain, brand_perplexity, brand_airbnb, brand_uber, brand_lyft, brand_tripadvisor, brand_expedia, brand_kayak, brand_gmail, brand_googlecalendar, brand_googledrive, brand_googledocs, brand_googlesheets, brand_googleslides, brand_trello, brand_asana, brand_clickup, brand_jira, brand_confluence, brand_todoist, brand_obsidian, brand_logseq, brand_roamresearch, brand_zoom, brand_googlemeet, brand_webex, brand_steam, brand_epicgames, brand_riotgames, brand_valve, brand_playstation, brand_gamejolt, brand_itchdotio, brand_roblox, brand_unity, brand_unrealengine, brand_godotengine, brand_gamemaker, brand_samsung, brand_razer, brand_corsair, brand_asus, brand_msi, brand_lenovo, brand_dell, brand_hp, brand_ebay, brand_etsy, brand_aliexpress, brand_target, brand_ikea, brand_mcdonalds, brand_starbucks, brand_cocacola, brand_nike, brand_adidas, brand_puma, brand_newbalance }