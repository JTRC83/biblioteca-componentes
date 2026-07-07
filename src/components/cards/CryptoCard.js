export default {
  id: 'card-crypto',
  name: 'Crypto Price Card',
  category: 'cards',
  tags: ['card', 'crypto', 'price', 'chart', 'toggle', 'css-only', 'dark', 'finance'],
  author: 'Vosoone',
  html: `<div class="cc-card">
  <div class="cc-header">
    <span class="cc-logo">CryptoApp</span>
    <span class="cc-open">Open App →</span>
  </div>

  <fieldset class="cc-switch">
    <input type="radio" id="cc-bitcoin" name="cc-crypto" checked="" />
    <label for="cc-bitcoin"> BTC </label>

    <input type="radio" id="cc-ethereum" name="cc-crypto" />
    <label for="cc-ethereum"> ETH </label>

    <input type="radio" id="cc-solana" name="cc-crypto" />
    <label for="cc-solana"> SOL </label>

    <input type="radio" id="cc-tether" name="cc-crypto" />
    <label for="cc-tether"> TET </label>

    <div class="cc-slider"></div>
  </fieldset>

  <div class="cc-price-infos">
    <div class="cc-price-info cc-bitcoin-info">
      <div class="cc-price">$57,256.15</div>
      <div class="cc-stats">
        <span class="cc-amount">12.458 BTC</span>
        <span class="cc-change">+10.4%</span>
      </div>
    </div>

    <div class="cc-price-info cc-ethereum-info">
      <div class="cc-price">$3,452.12</div>
      <div class="cc-stats">
        <span class="cc-amount">34.123 ETH</span>
        <span class="cc-change">+8.2%</span>
      </div>
    </div>

    <div class="cc-price-info cc-solana-info">
      <div class="cc-price">$145.78</div>
      <div class="cc-stats">
        <span class="cc-amount">150.78 SOL</span>
        <span class="cc-change">+12.1%</span>
      </div>
    </div>

    <div class="cc-price-info cc-tether-info">
      <div class="cc-price">$1.00</div>
      <div class="cc-stats">
        <span class="cc-amount">10,000 TET</span>
        <span class="cc-change">+0.0%</span>
      </div>
    </div>
  </div>

  <div class="cc-chart">
    <svg id="cc-chart-bitcoin" viewBox="0 0 100 50" preserveAspectRatio="none">
      <path
        d="M0,48 L5,45 L10,42 L15,38 L20,40 L25,35 L30,32 L35,28 L40,30 L45,25 L50,28 L55,22 L60,25 L65,20 L70,23 L75,18 L80,20 L85,15 L90,18 L95,12 L100,15, L 100 190"
      ></path>
    </svg>

    <svg id="cc-chart-ethereum" viewBox="0 0 100 40" preserveAspectRatio="none">
      <path
        d="M0,40 L5,38 L10,36 L15,34 L20,32 L25,30 L30,28 L35,26 L40,24 L45,22 L50,20 L55,22 L60,18 L65,20 L70,15 L75,18 L80,14 L85,16 L90,12 L95,14 L100,10, L 100 190"
      ></path>
    </svg>

    <svg id="cc-chart-solana" viewBox="0 0 100 38" preserveAspectRatio="none">
      <path
        d="M0,35 L5,33 L10,31 L15,29 L20,27 L25,25 L30,23 L35,21 L40,19 L45,18 L50,16 L55,15 L60,14 L65,12 L70,11 L75,10 L80,9 L85,8 L90,7 L95,6 L100,5, L 100 190"
      ></path>
    </svg>

    <svg
      id="cc-chart-tether"
      viewBox="0 0 100 50"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M0,25 L5,25 L10,25 L15,25 L20,25 L25,25 L30,25 L35,25 L40,25 L45,25 L50,25 L55,25 L60,25 L65,25 L70,25 L75,25 L80,25 L85,25 L90,25 L95,25 L100,25,"
      ></path>
    </svg>
  </div>
</div>`,
  css: `
.cc-card {
  max-width: 360px;
  width: 90%;
  padding: 20px;
  border-radius: 35px;
  background: #000;
  color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.cc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.cc-logo {
  font-weight: bold;
  font-size: 1.2em;
}
.cc-open {
  font-size: 0.85em;
  color: #888;
  cursor: pointer;
  transition: all 0.3s ease;
}
.cc-open:hover {
  color: #fff;
}

.cc-switch {
  position: relative;
  display: flex;
  background: #222;
  border-radius: 20px;
  padding: 4px;
  gap: 8px;
  margin-bottom: 16px;
  user-select: none;
  border: none;
}
.cc-switch input {
  display: none;
}
.cc-switch label {
  flex: 1;
  text-align: center;
  padding: 8px 0;
  border-radius: 16px;
  cursor: pointer;
  color: #cccccc;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: color 0.3s;
  font-size: 0.9em;
}
.cc-switch input:checked + label {
  color: #ffffff;
}

.cc-slider {
  position: absolute;
  top: 4px;
  bottom: 4px;
  width: calc((100% - 24px) / 4);
  background: rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(0.5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  z-index: 1;
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.4),
    inset 0 -2px 4px rgba(255, 255, 255, 0.2);
}
.cc-switch input:hover + label {
  color: #ffffff;
}
#cc-bitcoin:checked ~ .cc-slider {
  transform: translateX(0%);
}
#cc-ethereum:checked ~ .cc-slider {
  transform: translateX(105%);
}
#cc-solana:checked ~ .cc-slider {
  transform: translateX(214%);
}
#cc-tether:checked ~ .cc-slider {
  transform: translateX(323%);
}

.cc-price-infos {
  margin-bottom: 16px;
}
.cc-price-info .cc-price {
  font-size: 1.6em;
  font-weight: bold;
  margin-bottom: 4px;
}
.cc-price-info .cc-stats {
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
}
.cc-price-info .cc-change {
  color: #0f0;
  font-weight: bold;
}

.cc-chart {
  height: 90px;
  background: #1b1b1b;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  width: 100%;
}
.cc-chart svg {
  width: 100%;
  height: 100%;
  display: none;
  transform: translateX(2px) scale(1.05);
}
.cc-chart path {
  stroke: #0f0;
  stroke-width: 0.7;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: cc-draw 3s forwards;
  fill: rgba(0, 255, 0, 0.2);
}
@keyframes cc-draw {
  to {
    stroke-dashoffset: 0;
  }
}

.cc-card:has(#cc-bitcoin:checked) .cc-chart #cc-chart-bitcoin,
.cc-card:has(#cc-ethereum:checked) .cc-chart #cc-chart-ethereum,
.cc-card:has(#cc-solana:checked) .cc-chart #cc-chart-solana,
.cc-card:has(#cc-tether:checked) .cc-chart #cc-chart-tether {
  display: block;
}

.cc-price-info {
  display: none;
}
.cc-card:has(#cc-bitcoin:checked) .cc-price-info.cc-bitcoin-info,
.cc-card:has(#cc-ethereum:checked) .cc-price-info.cc-ethereum-info,
.cc-card:has(#cc-solana:checked) .cc-price-info.cc-solana-info,
.cc-card:has(#cc-tether:checked) .cc-price-info.cc-tether-info {
  display: block;
}
`
}