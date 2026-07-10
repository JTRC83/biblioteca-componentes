export default {
  id: 'anim-pda',
  name: 'Retro PDA',
  category: 'animations',
  tags: ['pda', 'retro', 'cyberpunk', 'lcd', 'animated', 'css-only', 'radio', 'tracker', 'device', '90s'],
  author: 'chase2k25',
  html: `<div class="pda-device">
  <input
    class="pda-tab"
    id="pda-tab-status"
    name="pda-tab"
    type="radio"
    checked=""
  />
  <input class="pda-tab" id="pda-tab-map" name="pda-tab" type="radio" />
  <input class="pda-tab" id="pda-tab-info" name="pda-tab" type="radio" />
  <input class="pda-tab" id="pda-tab-sys" name="pda-tab" type="radio" />
  <input class="pda-backlight" id="pda-backlight" type="checkbox" />

  <div class="pda-bezel">
    <div class="pda-screws" aria-hidden="true">
      <svg class="pda-screw" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="7" fill="#26292f"></circle>
        <path d="M3 8h10" stroke="#70757d" stroke-width="2"></path>
      </svg>
      <svg class="pda-screw" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="7" fill="#26292f"></circle>
        <path d="M3 8h10" stroke="#70757d" stroke-width="2"></path>
      </svg>
      <svg class="pda-screw" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="7" fill="#26292f"></circle>
        <path d="M3 8h10" stroke="#70757d" stroke-width="2"></path>
      </svg>
      <svg class="pda-screw" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="7" fill="#26292f"></circle>
        <path d="M3 8h10" stroke="#70757d" stroke-width="2"></path>
      </svg>
    </div>

    <label class="pda-knob" for="pda-backlight" aria-label="Toggle backlight">
      <div class="pda-knob-cap"></div>
    </label>

    <div class="pda-led" aria-hidden="true"></div>

    <div class="pda-screen">
      <div class="pda-statusbar">
        <div class="pda-logo">HAX-PDA<img class="pda-blink" alt="" /></div>
        <div class="pda-ind">
          <div class="pda-sig">
            <span class="pda-sb pda-sb--1"></span
            ><span class="pda-sb pda-sb--2"></span
            ><span class="pda-sb pda-sb--3"></span>
          </div>
          <div class="pda-bat">
            <div class="pda-bb"><div class="pda-bf"></div></div>
            <div class="pda-bt"></div>
          </div>
          <div class="pda-clk">12:45</div>
        </div>
      </div>

      <div class="pda-boot">
        <div class="pda-bline pda-bline--1">HAX-PDA v1.09 (C) 1998</div>
        <div class="pda-bline pda-bline--2">Checking memory... OK</div>
        <div class="pda-bline pda-bline--3">Mounting FS... OK</div>
        <div class="pda-bline pda-bline--err">POST ERROR 021 — RTC LOW</div>
        <div class="pda-bprog"><div class="pda-bfill"></div></div>
        <div class="pda-bline pda-bline--5">
          Press any icon to continue.
        </div>
      </div>

      <div class="pda-viewport">
        <div class="pda-apps">
          <div class="pda-app pda-app--status">
            <div class="pda-title">PACKAGE STATUS</div>
            <div class="pda-box">
              <div class="pda-kv">
                <div class="pda-k">ORDER</div>
                <div class="pda-v">#A2Z-1048</div>
              </div>
              <div class="pda-kv">
                <div class="pda-k">PLACED</div>
                <div class="pda-v">11 AUG 2025</div>
              </div>
              <div class="pda-kv">
                <div class="pda-k">ETA</div>
                <div class="pda-v">15 AUG 2025</div>
              </div>
            </div>

            <div class="pda-prog">
              <div class="pda-trk"></div>
              <div class="pda-fill"></div>
              <div class="pda-ticks" aria-hidden="true"></div>
              <div class="pda-plabel">3/5 IN TRANSIT</div>
            </div>

            <div class="pda-timeline">
              <div class="pda-row pda-row--done">
                <span class="pda-dot"></span
                ><span class="pda-rt">ORDER PLACED · 11 AUG · 10:12</span>
              </div>
              <div class="pda-row pda-row--done">
                <span class="pda-dot"></span
                ><span class="pda-rt">PACKED · 11 AUG · 14:40</span>
              </div>
              <div class="pda-row pda-row--now">
                <span class="pda-dot pda-dot--truck">
                  <svg class="pda-truck" viewBox="0 0 48 24">
                    <rect x="2" y="7" width="14" height="10" rx="2" class="pda-tc"></rect>
                    <rect x="16" y="5" width="24" height="12" rx="2" class="pda-tb"></rect>
                    <circle cx="12" cy="18" r="3" class="pda-tw"></circle>
                    <circle cx="30" cy="18" r="3" class="pda-tw"></circle>
                  </svg>
                </span>
                <span class="pda-rt">SHIPPED · 12 AUG · 09:05</span>
              </div>
              <div class="pda-row">
                <span class="pda-dot"></span
                ><span class="pda-rt">OUT FOR DELIVERY · 15 AUG · 08:00</span>
              </div>
              <div class="pda-row">
                <span class="pda-dot"></span
                ><span class="pda-rt">DELIVERED · 15 AUG · BY 18:00</span>
              </div>
            </div>

            <div class="pda-cursor">▌</div>
          </div>

          <div class="pda-app pda-app--map">
            <div class="pda-title">ORIGIN MAP</div>
            <div class="pda-box pda-box--map">
              <svg class="pda-map" viewBox="0 0 160 80" aria-hidden="true">
                <rect x="15" y="28" width="10" height="8" class="pda-px"></rect>
                <rect x="25" y="28" width="10" height="8" class="pda-px"></rect>
                <rect x="35" y="26" width="10" height="8" class="pda-px"></rect>
                <rect x="45" y="26" width="10" height="8" class="pda-px"></rect>
                <rect x="55" y="28" width="10" height="8" class="pda-px"></rect>
                <rect x="65" y="30" width="10" height="8" class="pda-px"></rect>
                <rect x="75" y="30" width="10" height="8" class="pda-px"></rect>
                <rect x="85" y="28" width="10" height="8" class="pda-px"></rect>
                <rect x="95" y="26" width="10" height="8" class="pda-px"></rect>
                <rect x="105" y="28" width="10" height="8" class="pda-px"></rect>
                <rect x="115" y="32" width="10" height="8" class="pda-px"></rect>
                <rect x="125" y="34" width="10" height="8" class="pda-px"></rect>
                <circle cx="50" cy="32" r="4" class="pda-ping"></circle>
              </svg>
              <div class="pda-legend">
                <div class="pda-kv">
                  <div class="pda-k">FROM</div>
                  <div class="pda-v">HYDERABAD</div>
                </div>
                <div class="pda-kv">
                  <div class="pda-k">TO</div>
                  <div class="pda-v">VIZAG</div>
                </div>
              </div>
            </div>
            <div class="pda-scan" aria-hidden="true"></div>
          </div>

          <div class="pda-app pda-app--info">
            <div class="pda-title">DETAILS</div>
            <div class="pda-box pda-scroll">
              <div class="pda-kv">
                <div class="pda-k">CARRIER</div>
                <div class="pda-v">A2Z SURFACE</div>
              </div>
              <div class="pda-kv">
                <div class="pda-k">AWB</div>
                <div class="pda-v">AWB-9823471</div>
              </div>
              <div class="pda-kv">
                <div class="pda-k">PAYMENT</div>
                <div class="pda-v">PREPAID</div>
              </div>
              <div class="pda-kv">
                <div class="pda-k">ITEM</div>
                <div class="pda-v">CLASSIC LEATHER WALLET</div>
              </div>
              <div class="pda-kv">
                <div class="pda-k">COLOR</div>
                <div class="pda-v">BROWN</div>
              </div>
              <div class="pda-kv">
                <div class="pda-k">QTY</div>
                <div class="pda-v">1</div>
              </div>
              <div class="pda-kv">
                <div class="pda-k">NOTES</div>
                <div class="pda-v">LEAVE AT GATE IF NOT HOME</div>
              </div>
            </div>
            <div class="pda-tip">TIP: PRESS KNOB TO TOGGLE BACKLIGHT</div>
          </div>

          <div class="pda-app pda-app--sys">
            <div class="pda-title">SYSTEM STATUS</div>
            <div class="pda-box">
              <div class="pda-meter">
                <div class="pda-ml">CPU</div>
                <div class="pda-mb">
                  <div class="pda-mf pda-mf--cpu"></div>
                </div>
                <div class="pda-mv">42%</div>
              </div>
              <div class="pda-meter">
                <div class="pda-ml">MEM</div>
                <div class="pda-mb">
                  <div class="pda-mf pda-mf--mem"></div>
                </div>
                <div class="pda-mv">68%</div>
              </div>
              <div class="pda-meter">
                <div class="pda-ml">STO</div>
                <div class="pda-mb">
                  <div class="pda-mf pda-mf--sto"></div>
                </div>
                <div class="pda-mv">55%</div>
              </div>
            </div>
            <div class="pda-diag">
              <div class="pda-drow">
                <span class="pda-caret">&gt;</span> SELF-TEST ...... OK
              </div>
              <div class="pda-drow">
                <span class="pda-caret">&gt;</span> IO-BUS ......... OK
              </div>
              <div class="pda-drow">
                <span class="pda-caret">&gt;</span> RADIO .......... OK
              </div>
              <div class="pda-drow">
                <span class="pda-caret">&gt;</span> TEMP ........... 34°C
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pda-dock">
        <label class="pda-db" for="pda-tab-status" title="Status">
          <svg class="pda-ico" viewBox="0 0 24 24">
            <rect x="3" y="5" width="18" height="12" class="pda-st" fill="none"></rect>
            <path d="M6 11h4M6 9h6M6 13h8" class="pda-st"></path>
          </svg>
        </label>
        <label class="pda-db" for="pda-tab-map" title="Map">
          <svg class="pda-ico" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8" class="pda-st" fill="none"></circle>
            <path d="M6 12h12M12 6v12" class="pda-st"></path>
          </svg>
        </label>
        <label class="pda-db" for="pda-tab-info" title="Info">
          <svg class="pda-ico" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="1.5" class="pda-st"></circle>
            <path d="M11 11h2v7h-2" class="pda-st"></path>
          </svg>
        </label>
        <label class="pda-db" for="pda-tab-sys" title="System">
          <svg class="pda-ico" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" class="pda-st"></circle>
            <path
              d="M12 3v3M12 18v3M3 12h3M18 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"
              class="pda-st"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  </div>
</div>`,
  css: `
.pda-device {
  --pda-w: 300px;
  --pda-h: 400px;

  --pda-case-top: #676c73;
  --pda-case-bot: #2b2f35;
  --pda-lcd-bg: #f3d9a3;
  --pda-lcd-ink: #3a2700;
  --pda-lcd-dim: #a38241;
  --pda-lcd-line: rgba(0, 0, 0, 0.06);
  --pda-dock: #242b30;

  width: var(--pda-w);
  height: var(--pda-h);
  position: relative;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono",
    monospace;
  color: var(--pda-lcd-ink);
}

.pda-tab,
.pda-backlight {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.pda-bezel {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--pda-case-top), var(--pda-case-bot));
  border-radius: 16px;
  box-shadow:
    inset 0 2px 0 rgba(255, 255, 255, 0.15),
    inset 0 -2px 0 rgba(0, 0, 0, 0.28),
    0 16px 28px rgba(0, 0, 0, 0.35);
  padding: 12px 10px 12px 10px;
}

.pda-screws {
  position: absolute;
  inset: 6px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  pointer-events: none;
}
.pda-screws .pda-screw {
  width: 12px;
  height: 12px;
}
.pda-screws .pda-screw:nth-child(1) {
  justify-self: start;
  align-self: start;
}
.pda-screws .pda-screw:nth-child(2) {
  justify-self: end;
  align-self: start;
}
.pda-screws .pda-screw:nth-child(3) {
  justify-self: start;
  align-self: end;
}
.pda-screws .pda-screw:nth-child(4) {
  justify-self: end;
  align-self: end;
}

.pda-knob {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #7b828a, #444a52);
  box-shadow:
    inset 0 3px 5px rgba(255, 255, 255, 0.18),
    inset 0 -3px 5px rgba(0, 0, 0, 0.5),
    0 6px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  user-select: none;
  display: grid;
  place-items: center;
}
.pda-knob-cap {
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: #14181d;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.15),
    0 -1px 0 rgba(0, 0, 0, 0.6);
}

.pda-led {
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4a1010;
  box-shadow:
    inset 0 0 2px #ff5b5b,
    0 0 0 1px #100;
}
.pda-led::after {
  content: "";
  position: absolute;
  left: -2px;
  top: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(255, 70, 70, 0);
  pointer-events: none;
}
#pda-tab-map.pda-tab:checked ~ .pda-bezel .pda-led {
  background: #ff3a3a;
  box-shadow:
    inset 0 0 2px #ffd5d5,
    0 0 6px 2px rgba(255, 60, 60, 0.45);
  animation: pda-led 1s steps(2, end) infinite;
}
#pda-tab-map.pda-tab:checked ~ .pda-bezel .pda-led::after {
  animation: pda-beam 1.6s ease-out infinite;
}
@keyframes pda-led {
  50% {
    filter: brightness(1.3);
  }
}
@keyframes pda-beam {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 70, 70, 0.35);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(255, 70, 70, 0);
  }
}

.pda-screen {
  position: absolute;
  left: 10px;
  right: 10px;
  top: 40px;
  bottom: 48px;
  background: var(--pda-lcd-bg);
  border-radius: 9px;
  overflow: hidden;
  box-shadow:
    inset 0 2px 0 rgba(255, 255, 255, 0.5),
    inset 0 -2px 0 rgba(0, 0, 0, 0.12),
    0 0 0 2px #101010;
}
.pda-screen::before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
      0deg,
      transparent 0 1px,
      var(--pda-lcd-line) 1px 2px
    ),
    repeating-linear-gradient(
      90deg,
      transparent 0 1px,
      rgba(0, 0, 0, 0.03) 1px 2px
    );
  pointer-events: none;
}
.pda-screen::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.12),
      transparent 45%
    ),
    radial-gradient(
      60% 40% at 10% 0%,
      rgba(255, 255, 255, 0.16),
      transparent 60%
    );
  mix-blend-mode: screen;
  pointer-events: none;
}

.pda-statusbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0 6px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2), transparent);
  font-weight: 900;
  font-size: 11px;
}
.pda-logo {
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
}
.pda-blink {
  width: 5px;
  height: 10px;
  background: var(--pda-lcd-ink);
  display: inline-block;
  animation: pda-blink 1s steps(2, end) infinite;
}
@keyframes pda-blink {
  50% {
    opacity: 0;
  }
}
.pda-ind {
  display: grid;
  grid-auto-flow: column;
  gap: 6px;
  align-items: center;
}
.pda-sig {
  display: grid;
  grid-auto-flow: column;
  gap: 2px;
}
.pda-sb {
  width: 3px;
  background: var(--pda-lcd-ink);
  display: inline-block;
}
.pda-sb--1 {
  height: 5px;
}
.pda-sb--2 {
  height: 8px;
}
.pda-sb--3 {
  height: 10px;
}
.pda-bat {
  display: grid;
  grid-auto-flow: column;
  gap: 2px;
  align-items: center;
}
.pda-bb {
  width: 16px;
  height: 9px;
  border: 1px solid var(--pda-lcd-ink);
  position: relative;
}
.pda-bf {
  position: absolute;
  left: 1px;
  top: 1px;
  bottom: 1px;
  width: 10px;
  background: var(--pda-lcd-ink);
  animation: pda-bat 3s steps(3, end) infinite;
}
@keyframes pda-bat {
  0%,
  100% {
    width: 10px;
  }
  50% {
    width: 14px;
  }
}
.pda-bt {
  width: 2px;
  height: 5px;
  background: var(--pda-lcd-ink);
}
.pda-clk {
  font-weight: 900;
}

.pda-boot {
  position: absolute;
  inset: 20px 0 26px 0;
  padding: 8px 8px 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.25),
    rgba(255, 255, 255, 0.12)
  );
  animation: pda-boot-fade 2.7s 0.2s ease forwards;
  z-index: 3;
}
@keyframes pda-boot-fade {
  0% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    pointer-events: none;
  }
}
.pda-bline {
  color: var(--pda-lcd-ink);
  font-weight: 900;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
}
.pda-bline--1 {
  max-width: 0;
  animation: pda-type 0.85s steps(22, end) forwards;
}
.pda-bline--2 {
  max-width: 0;
  animation: pda-type 0.6s 0.85s steps(20, end) forwards;
}
.pda-bline--3 {
  max-width: 0;
  animation: pda-type 0.6s 1.45s steps(18, end) forwards;
}
.pda-bline--err {
  margin: 2px 0;
  padding: 2px 4px;
  border: 1px dashed var(--pda-lcd-ink);
  background: rgba(0, 0, 0, 0.06);
  animation: pda-errflash 0.9s 2.05s steps(2, end) 2;
}
@keyframes pda-errflash {
  50% {
    filter: invert(1);
  }
}
.pda-bprog {
  margin-top: 2px;
  height: 7px;
  border: 1px solid var(--pda-lcd-ink);
  position: relative;
}
.pda-bfill {
  position: absolute;
  inset: 1px;
  width: 0;
  background: var(--pda-lcd-ink);
  animation: pda-fill 1.1s 2.05s steps(12, end) forwards;
}
@keyframes pda-fill {
  to {
    width: calc(100% - 2px);
  }
}
.pda-bline--5 {
  position: absolute;
  bottom: 2px;
  left: 8px;
  opacity: 0.95;
}
@keyframes pda-type {
  to {
    max-width: 100%;
  }
}

.pda-viewport {
  position: absolute;
  inset: 20px 0 26px 0;
  overflow: hidden;
}
.pda-apps {
  position: absolute;
  top: 0;
  left: 0;
  width: 400%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  transition: transform 0.48s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.pda-app {
  position: relative;
  padding: 6px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 6px;
  background:
    radial-gradient(
        3px 3px at 22% 32%,
        rgba(0, 0, 0, 0.03) 35%,
        transparent 40%
      )
      0 0/10px 10px,
    radial-gradient(
        3px 3px at 70% 60%,
        rgba(0, 0, 0, 0.03) 35%,
        transparent 40%
      )
      0 0/12px 12px,
    transparent;
}
.pda-title {
  font-weight: 900;
  font-size: 11px;
  text-transform: uppercase;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.15);
  padding-bottom: 3px;
}

.pda-box {
  border: 1px solid rgba(0, 0, 0, 0.25);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.28),
    rgba(255, 255, 255, 0.12)
  );
  padding: 6px;
  border-radius: 2px;
  display: grid;
  gap: 4px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.55),
    inset 0 -1px 0 rgba(0, 0, 0, 0.08);
}
.pda-box--map {
  display: grid;
  grid-template-rows: auto auto;
  gap: 6px;
}

.pda-kv {
  display: grid;
  grid-template-columns: 58px 1fr;
  gap: 4px;
  font-weight: 900;
  font-size: 11px;
}
.pda-k {
  color: var(--pda-lcd-dim);
}
.pda-v {
  color: var(--pda-lcd-ink);
}

.pda-prog {
  position: relative;
  height: 16px;
  margin-top: 2px;
}
.pda-trk {
  position: absolute;
  inset: 3px;
  border: 1px solid var(--pda-lcd-ink);
}
.pda-fill {
  position: absolute;
  left: 4px;
  top: 4px;
  bottom: 4px;
  width: 0;
  background: var(--pda-lcd-ink);
  animation: pda-prog 1.5s 0.2s steps(28, end) forwards;
}
.pda-ticks {
  position: absolute;
  inset: 3px;
  background: repeating-linear-gradient(
    90deg,
    transparent 0 7px,
    rgba(0, 0, 0, 0.14) 7px 8px
  );
  pointer-events: none;
}
.pda-plabel {
  position: absolute;
  right: 6px;
  top: 0;
  bottom: 0;
  display: grid;
  align-items: center;
  font-weight: 900;
  font-size: 10px;
}
@keyframes pda-prog {
  to {
    width: calc(60% - 6px);
  }
}

.pda-timeline {
  margin-top: 5px;
  display: grid;
  gap: 4px;
}
.pda-row {
  display: grid;
  grid-template-columns: 8px 1fr;
  gap: 6px;
  align-items: center;
  font-weight: 900;
  font-size: 10px;
}
.pda-row--done .pda-rt {
  color: var(--pda-lcd-dim);
}
.pda-dot {
  width: 6px;
  height: 6px;
  background: var(--pda-lcd-ink);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18) inset;
}
.pda-dot--truck {
  display: grid;
  place-items: center;
  background: transparent;
  border: 1px solid var(--pda-lcd-ink);
}
.pda-truck {
  width: 9px;
  height: 9px;
}
.pda-tc,
.pda-tb,
.pda-tw {
  fill: var(--pda-lcd-ink);
}

.pda-cursor {
  position: absolute;
  right: 6px;
  bottom: 32px;
  font-weight: 900;
  animation: pda-cursor 1.05s steps(2, end) infinite;
}
@keyframes pda-cursor {
  50% {
    opacity: 0;
  }
}

.pda-map {
  width: 100%;
  height: 72px;
  image-rendering: pixelated;
}
.pda-px {
  fill: var(--pda-lcd-ink);
}
.pda-ping {
  fill: none;
  stroke: var(--pda-lcd-ink);
  stroke-width: 1;
  animation: pda-ping 1.7s ease-out infinite;
  transform-origin: center;
}
@keyframes pda-ping {
  0% {
    r: 0;
    opacity: 1;
  }
  70% {
    r: 12;
    opacity: 0.2;
  }
  100% {
    r: 12;
    opacity: 0;
  }
}

.pda-legend {
  display: grid;
  gap: 2px;
}
.pda-scan {
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 36px;
  height: 7px;
  border: 1px solid var(--pda-lcd-ink);
  overflow: hidden;
}
.pda-scan::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: repeating-linear-gradient(
    90deg,
    var(--pda-lcd-ink) 0 6px,
    transparent 6px 10px
  );
  animation: pda-scan 1.1s linear infinite;
}
@keyframes pda-scan {
  to {
    transform: translateX(10px);
  }
}

.pda-scroll {
  max-height: 132px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.pda-scroll::-webkit-scrollbar {
  display: none;
}
.pda-tip {
  text-align: center;
  font-size: 10px;
  color: var(--pda-lcd-dim);
  margin-top: 5px;
}

.pda-meter {
  display: grid;
  grid-template-columns: 34px 1fr 26px;
  gap: 6px;
  align-items: center;
}
.pda-ml {
  font-weight: 900;
  font-size: 10px;
  color: var(--pda-lcd-dim);
}
.pda-mb {
  height: 9px;
  border: 1px solid var(--pda-lcd-ink);
  position: relative;
  overflow: hidden;
}
.pda-mf {
  position: absolute;
  inset: 1px;
  background: repeating-linear-gradient(
    90deg,
    var(--pda-lcd-ink) 0 6px,
    transparent 6px 8px
  );
}
.pda-mf--cpu {
  width: 42%;
  animation: pda-wob 2.3s ease-in-out infinite;
}
.pda-mf--mem {
  width: 68%;
  animation: pda-wob 3s ease-in-out infinite;
}
.pda-mf--sto {
  width: 55%;
  animation: pda-wob 2.6s ease-in-out infinite;
}
@keyframes pda-wob {
  50% {
    transform: translateX(2px);
  }
}
.pda-mv {
  justify-self: end;
  font-weight: 900;
  font-size: 10px;
}

.pda-diag {
  margin-top: 5px;
  border: 1px dashed rgba(0, 0, 0, 0.18);
  padding: 6px;
}
.pda-drow {
  font-weight: 900;
  font-size: 10px;
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 6px;
}
.pda-caret {
  font-weight: 900;
}

.pda-dock {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 26px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5));
  border-top: 1px solid #0f0f0f;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
.pda-db {
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: filter 0.15s;
}
.pda-db:hover {
  filter: brightness(1.1);
}
.pda-ico {
  width: 14px;
  height: 14px;
}
.pda-st {
  stroke: var(--pda-lcd-ink);
  stroke-width: 1.7;
  fill: none;
}

#pda-tab-status.pda-tab:checked ~ .pda-bezel .pda-apps {
  transform: translateX(0%);
}
#pda-tab-map.pda-tab:checked ~ .pda-bezel .pda-apps {
  transform: translateX(-25%);
}
#pda-tab-info.pda-tab:checked ~ .pda-bezel .pda-apps {
  transform: translateX(-50%);
}
#pda-tab-sys.pda-tab:checked ~ .pda-bezel .pda-apps {
  transform: translateX(-75%);
}

#pda-tab-status.pda-tab:checked
  ~ .pda-bezel
  .pda-dock
  .pda-db:nth-child(1)::after,
#pda-tab-map.pda-tab:checked
  ~ .pda-bezel
  .pda-dock
  .pda-db:nth-child(2)::after,
#pda-tab-info.pda-tab:checked
  ~ .pda-bezel
  .pda-dock
  .pda-db:nth-child(3)::after,
#pda-tab-sys.pda-tab:checked
  ~ .pda-bezel
  .pda-dock
  .pda-db:nth-child(4)::after {
  content: "";
  width: 60%;
  height: 2px;
  background: var(--pda-lcd-ink);
  display: block;
  border-radius: 1px;
  animation: pda-ul 0.9s steps(3, end) infinite;
}
@keyframes pda-ul {
  50% {
    transform: translateY(-1px);
  }
}

.pda-backlight:checked ~ .pda-bezel .pda-screen {
  filter: brightness(1.12) contrast(1.05) saturate(1.06);
}
.pda-backlight:not(:checked) ~ .pda-bezel .pda-screen {
  filter: brightness(0.88) contrast(0.95) saturate(0.92);
}
`
}