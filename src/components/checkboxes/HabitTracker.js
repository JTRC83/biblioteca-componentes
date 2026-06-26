export default {
  id: 'card-habit-tracker',
  name: 'Habit Tracker',
  category: 'checkboxes',
  tags: ['neumorphic', 'habit', 'tracker', 'checklist', 'animated', 'css-only'],
  author: 'chase2k25',
  html: `<div class="neumorphic-background">
  <div class="neumorphic-container">
    <div class="neumorphic-title">Habit Tracker</div>

    <label class="neumorphic-label">
      <input type="checkbox" class="neumorphic-input" />
      <div class="custom-checkbox">
        <svg class="checkmark-svg" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span class="neumorphic-text">Morning Walk</span>
    </label>

    <label class="neumorphic-label">
      <input type="checkbox" class="neumorphic-input" checked="" />
      <div class="custom-checkbox">
        <svg class="checkmark-svg" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span class="neumorphic-text">Journaling</span>
    </label>

    <label class="neumorphic-label">
      <input type="checkbox" class="neumorphic-input" />
      <div class="custom-checkbox">
        <svg class="checkmark-svg" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span class="neumorphic-text">Plan the day</span>
    </label>

    <label class="neumorphic-label">
      <input type="checkbox" class="neumorphic-input" />
      <div class="custom-checkbox">
        <svg class="checkmark-svg" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span class="neumorphic-text">No screen time before bed</span>
    </label>
  </div>
</div>`,
  css: `
.neumorphic-background {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #e0e5ec;
  border-radius: 16px;
  padding: 20px;
  box-sizing: border-box;
}

.neumorphic-container {
  width: 300px;
  background-color: #e0e5ec;
  border-radius: 20px;
  box-shadow:
    9px 9px 16px #a3b1c6,
    -9px -9px 16px #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
}

.neumorphic-title {
  font-size: 22px;
  font-weight: 600;
  color: #5a677a;
  margin-bottom: 10px;
  text-align: center;
}

.neumorphic-label {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 12px 15px;
  border-radius: 12px;
  transition: box-shadow 0.3s ease;
}

.neumorphic-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.custom-checkbox {
  width: 24px;
  height: 24px;
  border-radius: 8px;
  margin-right: 15px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s ease;
  box-shadow:
    5px 5px 10px #a3b1c6,
    -5px -5px 10px #ffffff;
}

.neumorphic-label:hover .custom-checkbox {
  box-shadow:
    3px 3px 6px #a3b1c6,
    -3px -3px 6px #ffffff;
}

.checkmark-svg {
  width: 14px;
  height: 14px;
  stroke: #3498db;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.neumorphic-text {
  color: #5a677a;
  font-size: 16px;
  transition: color 0.4s ease;
}

.neumorphic-input:checked + .custom-checkbox {
  box-shadow:
    inset 5px 5px 10px #a3b1c6,
    inset -5px -5px 10px #ffffff;
}

.neumorphic-input:checked + .custom-checkbox .checkmark-svg {
  opacity: 1;
}

.neumorphic-input:checked ~ .neumorphic-text {
  color: #9ba8bd;
}
`
}
