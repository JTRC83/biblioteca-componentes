export default {
  id: 'anim-weather-card',
  name: 'Weather Card',
  category: 'animations',
  tags: ['card', 'weather', 'animated', 'css-only', 'hover', 'info', 'climate', 'forecast', 'widget'],
  author: 'mahiatlinux',
  html: `<div class="cardm">
  <div class="card">
    <svg
      xml:space="preserve"
      viewBox="0 0 100 100"
      height="100px"
      width="100px"
      y="0px"
      x="0px"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      version="1.1"
      class="weather"
    >
      <image
        href="data:image/png;base64,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"
        y="0"
        x="0"
        height="100"
        width="100"
        id="image0"
      ></image>
    </svg>
    <div class="main">23 °C</div>
    <div class="mainsub">Dunmore, Ireland</div>
  </div>

  <div class="card2">
    <div class="upper">
      <div class="humidity">
        <div class="humiditytext">Humidity<br />30%</div>
        <svg
          class="humiditysvg"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="30px"
          height="30px"
          viewBox="0 0 30 30"
          xml:space="preserve"
        >
          <image
            id="image0"
            width="30"
            height="30"
            x="0"
            y="0"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAdUlEQVR42u2UYRWAMBCCJ0mMYxfz2MU4NtEIOxD1qfCbu++NsbUWEZqWbVdncRaqwvFUWnBErJwarntl4XCWiYHD3eCqD1c8m4r/Xa2+Bax+EL25RB3wD8HrPA7K4t5corbEXfHDuYzxwXkSJhm42qq2P/quDm0uNdtEWO8KAAAAAElFTkSuQmCC"
          ></image>
        </svg>
      </div>

      <div class="air">
        <div class="airtext">Wind<br />8 Km/h</div>
        <svg
          xml:space="preserve"
          viewBox="0 0 30 30"
          height="30px"
          width="30px"
          y="0px"
          x="0px"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          version="1.1"
          class="airsvg"
        >
          <image
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAaklEQVR42mNgGAWjYBRQCTBS28Cc0tr/MPaU7mac5jPR0lc5pbX/kR1CUx8T63tGQhrIAciWwMxCt5iJXj6ma+LCl8hYaOljfKl6cOVjShMXMb5nYhgFI7KSIDdxkZJ9RhPXKBgFo4BsAADE1STNiw0JLQAAAABJRU5ErkJggg=="
            y="0"
            x="0"
            height="30"
            width="30"
            id="image0"
          ></image>
        </svg>
      </div>
    </div>

    <div class="lower">
      <div class="aqi">
        <svg
          xml:space="preserve"
          viewBox="0 0 20 20"
          height="20px"
          width="20px"
          y="0px"
          x="0px"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          version="1.1"
          class="aqisvg"
        >
          <image
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAdklEQVR42mNgGHGAkZACvTOF/9HFLpn0M5JsIDaDiDGYiVzDcKljItawi8Z9DBeN+wgaykTtSGEix6v4XEl1F7LgksAWXuji+meLGIiKZZq4EN12mMuwuQqnC/HlAGITOBNd8jIpyQfdV0zE5lFi1VG9tBn8AAB9NjEXNCADPwAAAABJRU5ErkJggg=="
            y="0"
            x="0"
            height="20"
            width="20"
            id="image0"
          ></image>
        </svg>
        <div class="aqitext">AQI<br />30</div>
      </div>

      <div class="realfeel">
        <svg
          xml:space="preserve"
          viewBox="0 0 20 20"
          height="20px"
          width="20px"
          y="0px"
          x="0px"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          version="1.1"
          class="rfsvg"
        >
          <image
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAARUlEQVR42mNgGOyAkRhFH5rk/sPYAnWP8OphIsUwbHySDSQVjBo4aiC1DcSViPElbvq5kFAWwyU/hCOFUDGFS55p0BewAA12Gl+U3XtOAAAAAElFTkSuQmCC"
            y="0"
            x="0"
            height="20"
            width="20"
            id="image0"
          ></image>
        </svg>
        <div class="realfeeltext">Real Feel<br />21 °C</div>
      </div>

      <div class="pressure">
        <svg
          xml:space="preserve"
          viewBox="0 0 20 20"
          height="20px"
          width="20px"
          y="0px"
          x="0px"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          version="1.1"
          class="pressuresvg"
        >
          <image
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAd0lEQVR42mNgGHGAkZCCnNLa/+hiU7qbGUk2EJtBxBjMSMgwbJrwyTORahgDAwNDwYETOH3CRIp3GBgYGO6Yuv5HNxSngTDbCBnGwMDAoHJ6NyNMHbIrmYhNDsiaVE7vxhmZTKQYNsHBAq9hJAFiktEoGAWDBQAAZXc1yHIeo58AAAAASUVORK5CYII="
            y="0"
            x="0"
            height="20"
            width="20"
            id="image0"
          ></image>
        </svg>
        <div class="pressuretext">Pressure<br />1012 mbar</div>
      </div>
      <div class="card3">Healthy</div>
    </div>
  </div>
</div>`,
  css: `
.cardm {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 46.64%;
  left: 50%;
}

.card {
  position: absolute;
  width: 250px;
  height: 130px;
  border-radius: 25px;
  background: #1e1e1e;
  color: #ffffff;
  z-index: 2;
  transition: 0.4s ease-in-out;
}

.weather {
  position: relative;
  margin: 1em;
}

.main {
  font-size: 2em;
  position: relative;
  top: -3em;
  left: 4.3em;
}

.mainsub {
  position: relative;
  top: -10.2em;
  left: 14em;
  font-size: 0.6em;
}

.card2 {
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 240px;
  height: 130px;
  border-radius: 35px;
  background: #2d2d2d;
  z-index: -1;
  transition: 0.4s ease-in-out;
}

.card:hover {
  background-color: #3a3a3a;
  cursor: pointer;
}

.card:hover + .card2 {
  height: 300px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.card:hover + .card2 .lower {
  top: 20.2em;
}

.upper {
  display: flex;
  flex-direction: row;
  position: relative;
  color: #ffffff;
  left: 1.8em;
  top: 0.5em;
  gap: 4em;
}

.humiditytext {
  position: relative;
  left: 3.6em;
  top: 2.7em;
  font-size: 0.6em;
}

.airtext {
  position: relative;
  left: 3.8em;
  top: 2.7em;
  font-size: 0.6em;
}

.lower {
  display: flex;
  flex-direction: row;
  position: absolute;
  text-align: center;
  color: #ffffff;
  left: 3em;
  top: 1em;
  margin-top: 0.7em;
  font-size: 0.7em;
  transition: 0.4s ease-in-out;
}

.aqi {
  margin-right: 3.25em;
}

.realfeel {
  margin-right: 1.8em;
}

.card3 {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 30px;
  top: 4.7em;
  left: -2.4em;
  font-size: 1.24em;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  background: #2ecc71;
  color: #1e1e1e;
  transition: 0.4s ease-in-out;
}
`
}