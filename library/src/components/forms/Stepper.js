export default {
  id: 'stepper',
  name: 'Stepper',
  category: 'forms',
  tags: ['stepper', 'steps', 'wizard', 'multi-step', 'form', 'animated', 'js-driven'],
  author: 'reactbits-adapted',
  source: 'reactbits.dev',
  html: `<div class="stepper" data-js-animated="true">
  <div class="stepper__container">
    <div class="stepper__indicators">
      <div class="stepper__indicator" data-step="1">
        <div class="stepper__indicator-inner">
          <span class="stepper__number">1</span>
        </div>
      </div>
      <div class="stepper__connector"><div class="stepper__connector-inner"></div></div>
      <div class="stepper__indicator" data-step="2">
        <div class="stepper__indicator-inner">
          <span class="stepper__number">2</span>
        </div>
      </div>
      <div class="stepper__connector"><div class="stepper__connector-inner"></div></div>
      <div class="stepper__indicator" data-step="3">
        <div class="stepper__indicator-inner">
          <span class="stepper__number">3</span>
        </div>
      </div>
      <div class="stepper__connector"><div class="stepper__connector-inner"></div></div>
      <div class="stepper__indicator" data-step="4">
        <div class="stepper__indicator-inner">
          <span class="stepper__number">4</span>
        </div>
      </div>
    </div>

    <div class="stepper__content">
      <div class="stepper__step" data-step="1">
        <h2 class="stepper__title">Bienvenido al Stepper</h2>
        <p class="stepper__desc">Navega entre los pasos con los botones de abajo. Cada paso puede contener cualquier tipo de contenido.</p>
      </div>
      <div class="stepper__step" data-step="2">
        <h2 class="stepper__title">Paso 2</h2>
        <div class="stepper__image" style="background: url('https://picsum.photos/seed/stepper-cat/400/200') center/cover; height: 120px; border-radius: 12px; margin: 12px 0;"></div>
        <p class="stepper__desc">Contenido personalizado con imagen.</p>
      </div>
      <div class="stepper__step" data-step="3">
        <h2 class="stepper__title">Cómo about un input?</h2>
        <input class="stepper__input" type="text" placeholder="Tu nombre?" />
        <p class="stepper__desc">Los campos de formulario funcionan dentro de cada paso.</p>
      </div>
      <div class="stepper__step" data-step="4">
        <h2 class="stepper__title">Paso final</h2>
        <p class="stepper__desc">Lo lograste! Has completado todos los pasos.</p>
      </div>
    </div>

    <div class="stepper__footer">
      <div class="stepper__nav">
        <button class="stepper__back" type="button">Previous</button>
        <button class="stepper__next" type="button">Continue</button>
      </div>
    </div>
  </div>
</div>`,
  css: `.stepper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 16px;
  font-family: 'Inter', system-ui, sans-serif;
}

.stepper__container {
  width: 100%;
  max-width: 448px;
  border-radius: 2rem;
  border: 1px solid #e4e4e7;
  background: #fafafa;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
  overflow: hidden;
}

.stepper__indicators {
  display: flex;
  align-items: center;
  padding: 32px 32px 0;
}

.stepper__indicator {
  position: relative;
  cursor: pointer;
  outline: none;
}

.stepper__indicator-inner {
  display: flex;
  height: 2rem;
  width: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-weight: 600;
  background: #f4f4f5;
  color: #a1a1aa;
  border: 2px solid #e4e4e7;
  transition: all 0.3s ease;
}

.stepper__indicator.is-active .stepper__indicator-inner {
  background: #5227ff;
  border-color: #5227ff;
}

.stepper__indicator.is-active .stepper__indicator-inner .stepper__number {
  display: none;
}

.stepper__indicator.is-active .stepper__indicator-inner::after {
  content: '';
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  background: #fff;
}

.stepper__indicator.is-complete .stepper__indicator-inner {
  background: #5227ff;
  border-color: #5227ff;
}

.stepper__indicator.is-complete .stepper__indicator-inner .stepper__number {
  display: none;
}

.stepper__indicator.is-complete .stepper__indicator-inner::after {
  content: '';
  width: 1rem;
  height: 1rem;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23fff' stroke-width='2.5' viewBox='0 0 24 24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/%3E%3C/svg%3E") center/contain no-repeat;
}

.stepper__number {
  font-size: 0.875rem;
}

.stepper__connector {
  position: relative;
  margin: 0 0.5rem;
  height: 0.125rem;
  flex: 1;
  overflow: hidden;
  border-radius: 0.25rem;
  background: #e4e4e7;
}

.stepper__connector-inner {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  background: #5227ff;
  transition: width 0.4s ease;
}

.stepper__connector.is-complete .stepper__connector-inner {
  width: 100%;
}

.stepper__content {
  position: relative;
  overflow: hidden;
  min-height: 160px;
}

.stepper__step {
  padding: 32px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
  pointer-events: none;
}

.stepper__step.is-current {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
  position: relative;
}

.stepper__step.is-exited-left {
  opacity: 0;
  transform: translateX(-50%);
}

.stepper__step.is-exited-right {
  opacity: 0;
  transform: translateX(100%);
}

.stepper__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #18181b;
  margin: 0 0 8px;
}

.stepper__desc {
  font-size: 0.95rem;
  color: #71717a;
  line-height: 1.6;
  margin: 0;
}

.stepper__image {
  margin: 12px 0;
}

.stepper__input {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  color: #18181b;
  background: #fff;
  outline: none;
  transition: border-color 0.2s ease;
  margin: 12px 0;
}

.stepper__input:focus {
  border-color: #5227ff;
  box-shadow: 0 0 0 3px rgba(82, 39, 255, 0.1);
}

.stepper__footer {
  padding: 0 32px 32px;
}

.stepper__nav {
  margin-top: 2.5rem;
  display: flex;
}

.stepper__nav.is-spread {
  justify-content: space-between;
}

.stepper__nav.is-end {
  justify-content: flex-end;
}

.stepper__back {
  transition: all 0.35s ease;
  border-radius: 0.375rem;
  padding: 0.375rem 0.875rem;
  color: #a1a1aa;
  background: transparent;
  border: none;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
}

.stepper__back:hover {
  color: #52525b;
}

.stepper__next {
  transition: all 0.35s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background: #5227ff;
  color: #fff;
  font-family: inherit;
  font-weight: 500;
  letter-spacing: -0.025em;
  font-size: 0.95rem;
  padding: 0.5rem 1.25rem;
  border: none;
  cursor: pointer;
}

.stepper__next:hover {
  background: #3f1dcc;
}

.stepper__next:active {
  transform: scale(0.97);
}

.stepper__completed {
  display: none;
  align-items: center;
  justify-content: center;
  padding: 48px 32px;
  text-align: center;
}

.stepper__completed.is-visible {
  display: flex;
}

.stepper__completed-text {
  font-size: 1.125rem;
  font-weight: 600;
  color: #5227ff;
}
`,
  js: `(() => {
  function setupStepper(root) {
    const indicators = root.querySelectorAll('.stepper__indicator');
    const connectors = root.querySelectorAll('.stepper__connector');
    const steps = root.querySelectorAll('.stepper__step');
    const backBtn = root.querySelector('.stepper__back');
    const nextBtn = root.querySelector('.stepper__next');
    const nav = root.querySelector('.stepper__nav');
    const footer = root.querySelector('.stepper__footer');
    const container = root.querySelector('.stepper__container');

    const totalSteps = steps.length;
    let currentStep = 1;
    let direction = 0;
    let isCompleted = false;

    const completedEl = document.createElement('div');
    completedEl.className = 'stepper__completed';
    completedEl.innerHTML = '<span class="stepper__completed-text">Todos los pasos completados!</span>';
    container.appendChild(completedEl);

    function update() {
      if (isCompleted) {
        completedEl.classList.add('is-visible');
        steps.forEach(s => s.style.display = 'none');
        footer.style.display = 'none';
        return;
      }

      indicators.forEach((ind, i) => {
        const step = i + 1;
        ind.classList.remove('is-active', 'is-complete');
        if (step === currentStep) ind.classList.add('is-active');
        else if (step < currentStep) ind.classList.add('is-complete');
      });

      connectors.forEach((c, i) => {
        const step = i + 1;
        c.classList.toggle('is-complete', step < currentStep);
      });

      steps.forEach((s, i) => {
        const step = i + 1;
        s.classList.remove('is-current', 'is-exited-left', 'is-exited-right');
        if (step === currentStep) {
          s.classList.add('is-current');
        } else if (step < currentStep) {
          s.classList.add('is-exited-left');
        } else {
          s.classList.add('is-exited-right');
        }
      });

      const isLast = currentStep === totalSteps;
      nextBtn.textContent = isLast ? 'Complete' : 'Continue';
      backBtn.style.display = currentStep !== 1 ? '' : 'none';
      nav.classList.toggle('is-spread', currentStep !== 1);
      nav.classList.toggle('is-end', currentStep === 1);
    }

    function goTo(newStep, dir) {
      if (newStep < 1 || newStep > totalSteps + 1) return;
      direction = dir;
      if (newStep > totalSteps) {
        isCompleted = true;
        update();
      } else {
        currentStep = newStep;
        update();
      }
    }

    nextBtn.addEventListener('click', () => {
      if (currentStep === totalSteps) {
        goTo(totalSteps + 1, 1);
      } else {
        goTo(currentStep + 1, 1);
      }
    });

    backBtn.addEventListener('click', () => {
      if (currentStep > 1) goTo(currentStep - 1, -1);
    });

    indicators.forEach((ind, i) => {
      ind.addEventListener('click', () => {
        const step = i + 1;
        if (step !== currentStep) goTo(step, step > currentStep ? 1 : -1);
      });
    });

    update();
  }

  function init() {
    document.querySelectorAll('[data-js-animated="true"].stepper').forEach(setupStepper);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();`
}