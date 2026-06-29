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
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABiVBMVEUAAAAAAP9NerV/f39O
          e7ZQfLZVf6pRfbfL5fdRfbZIbbZmmcxols5nlc5OebSPsteLrdVSfLZxl89oks1qlM5ahsBdicNa
          hsFcicRhjcdWgbpahsFficJbhsFijsmErOWLt+9xndZdicJahsFahsFdicN5n81xjcZqlNRpls1q
          lNBfn99pls9nkcxXgrpZgrtZgrtik81OebWNsdeMrtZOebRNerVZg7pwmMhNebRKdLRNerZNebHZ
          8v9o lM9jj8rV7v3X7v1ch7+Ktu6Ltulhsep7p+Cz1PO+3fqJte5/q+V+quOUvfLY8f+TvfKp
          zvarz/ap0/ap0/an0fWRvPGdxfSXv/LX8P/W8P+32fnK5vyMuPCmzPXW8P6ny/WWv/KOufGawvO2
          2Pgr5vwdwfqjzfWx1PiYwfKOufDD4funzPXF4vvE4vuOuvHV7/7U7/7G4/uNufCw1Pew0/ez2Pes
          xfiMu/G21viPufF/q+SCrud+quSItO2kyvWjyfVijslrltFmkcyEqtZgjMf///8NXQssAAAAPHRSTlMAAZgCW+EG
          y+jMBxRaRXHC2H8bX0ry/vrhyvnw0PDHR0Be/e/4/f4SDDNiEFVb0eI5iMHCho7NwI0YOBdy59Cm
          AAAAAWJLR0SCi7P/RAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cCEBITAJMBs+kAAAFb
          SURBVCjPY2CAAUYmZgY8gIWVBY8sGzsHJxc2CW4eXiDJx28jIAjiCgnzgoV5ebiBpIiomK2duISk
          lL2Ng6O0jIwsmCsnIW5nKyYqwiDv5AwELq5uNjY27h6enh4ancoLiHKSZ1BwBgNvH6C0j68zKlCA
          SfvZgIA/LukAsHQAVDgwCE06OAQoGxoMlQ4Lj0CVdo6MsomKhrJjfGwi0aSdY+NiYcx4G5sEdGkk
          kGhjk4RHOjnEJgWPtLNvKprL07CpgktHpEfgk/a3ycAnnWmThRDMxpDOscmFi6Xl5aNLF+QUwqWL
          bIoxogQBSpJskkpwS5cC4yYFp3RZElA6qQwh7VFeAWZXVFYByWpwxNcAueUeQGlFJWUZCZXauloV
          CRllVdt6NbB0QyOIq6TIoK4BSrWaWpogSltHVw8srW8A4mqoY6R6QyOgrLEJztxiamZuZsGGOztZ
          WlnD2QBCYbJl9Cx9XAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0xNlQxODoxOTowMCswMDow
          MG/wqfUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDItMTZUMTg6MTk6MDArMDA6MDAerRFJAAAA
          KHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAyLTE2VDE4OjE5OjAwKzAwOjAwSbgwlgAAAABJRU5ErkJggg=="
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
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
            AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABaFBMVEUAAAAA//8ilfIhlfMg
            lvIglvMglvIeku8cjf8glvMhlfIflvMhlfIhlvIglvMhl/MglvIglfIglPEfmfIglfIglvQfn/8g
            lfIglvIhlfMglfIglvMhl/AhlfIcm/AAf/8qlOkglPYglvIZmf8zmf8hlfIglfIXi+cilPMhlvMg
            lfQhlvMglvIhlfIgl/MglvMhlvMhlfMhlvIfl+8hlvMhlfMglvMglvI/f/8hlvMilvMelvAglfIg
            lvMhlvIglPIglvIglfIglPIhlvMglfMglvIhlvMhlvMilvMjlfEglvMhlfIhlfMglfIflvEnnOsh
            lvIflPEflfIek/QglvIglvMhlfIglPIhlfMhlfIhlfIglfIhlfIgl/QflPQhlvP///+FIn/GAAAAdnRSTlMAAVKu1MmNIQmy91ig/Z5s0fo3KP5dCL27Lvm0NvwSAgwf+woFv7oL
            Q0RGa9L1Vtndx4sgme3FZgTIFiI/hvZld3sch8Tv7kI683nV6DgN4GBQMsycjw8k6nWqRW3cUxMa
            5dpnfLU87N8mBrxXG5jnibjLoi8YaHuXCQAAAAFiS0dEd0Zk+dcAAAAJcEhZcwAACxMAAAsTAQCa
            nBgAAAAHdElNRQfnAhEIBBbLW8PtAAABJ0lEQVQoz62RZ1fCMBSG46atomBR1IJ7g+KotKKgxYl7
            4Z6493x/v6T0QKMtn/p8ec/Nk5Pc5BLiHCWlZeUVlVU21sWBwgvWuho1bqG2Dh6vla0X4ctGQyP8
            VrqpuUVPCQGXlQ+26tEGtBfpX0JHp73t6kYPs9Db159nYDAEj8RoNxjCQ+xxvuFIgZHRMcemQMi4
            iP+I8kRU0TUHG9RJqpWYFVPTcahKsc/jkSAzfgNuVvvjk5gj84W7FhZZvYRl4o0apFawGmT0GsKm
            an0DmzS31O3cQgo75t27SNLYQyRNc/8AhzkROzrOPjCEE1poMk7Pzi8Sl7gyxp5B/Fq4Aa//A7m9
            y7V6/2Ac+/hEy8CzUb68ysDbezp/rZL5+Pz6NvWh/TgwzV+1HV530mQc1AAAACV0RVh0ZGF0ZTpj
            cmVhdGUAMjAyMy0wMi0xN1QwODowNDoyMiswMDowML1dmzYAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
            MjMtMDItMTdUMDg6MDQ6MjIrMDA6MDDMACOKAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
            LTE3VDA4OjA0OjIyKzAwOjAwmxUCVQAAAABJRU5ErkJggg=="
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
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABBVBMVEUAAABL4f9O5v9P5f9Q
          5f9R5/8AZsxB0vYAd9EAeNQAd9MeoOM1w/EYmuIXnOIAAP8AccYmrOgYmuAWneEA//8AdtQZ
          m+JP5f8ZmeUAf89L3vwcoOQYmeIAddEAeNUrseocjeIAd9QAeNMxu+4kqucZmuEYm+IWmeI5xfIf
          n99P3/9Q5v9Q5v9Q5v9G2Pk0wPA+zfVN4v5L3vw+zfUwve8iqOcrs+s9zPVM4f1N4v1E1vklrOki
          p+cmrOhH2fpP5f5F1/kstewqs+tO4/4nruott+0or+pL3vxE1flK3vxA0fcjqecrtOxO5P4yvvAs
          tOw6yPNA0Pc7yfQ4xfI3xPL///8cI4U2AAAALnRSTlMAEXF3ZWsFeC3S26iVh7MsAQnAVCIB
          Z7FtChBv6GonVZQJs4yLxtPNLY8IEHuINVg0ZAAAAAFiS0dEVgoN6YkAAAAJcEhZcwAACxMAAAsTAQCa
          nBgAAAAHdElNRQfnAhIFCRn0J5yMAAAAq0lEQVQY02NgIAkwMjFDARMjXJBFDw5Y4IKsCEFWmBgb
          u56+gaERsiAHJxc3nrGJqZm5haWeFQ8vHz9QUEAQqt3a1MbWTkhYRBRmprG9A5qZYuJ6jk62ziYu
          QEEJSaiglDRIjaOpraubu4wsupM8PL2g2gXk5BX0vH18LYwgZiqCLOJQUlbR0/Nz9LcNCAwKVlVT
          10DRbh1iGqqphc+b2ANEW0cXCnS0SQt0ALCcIug70CWhAAAABJRU5ErkJggg=="
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
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABuVBMVEUAAAAAAAAECQkIDg4E
          BAQAAAAAAAAFBQUHDAwIDg4MFBUNFRUKCgoPGhxGenw/b3FDdXcmRUYJDAwJDw9Pi40LFBQNFhYM
          FhYPGhsMExQKEhIPGhoKEhQMExMOGhoMExMPGhoKFBQLExMNFxcKEhILFBQKExMKExQLEhILERMK
          EREHDQ1SkJMuUlMABAQAAAASHh9FeXtAcXI8aWszWlwvU1M4Y2QjPT4NGBoAAAAAAAAAAAAAAAAA
          AAAAAAAAAAAAAABYmZtVlplKgoVlsbRsvsF0zM9uwsVtwcNsvb9ecU53czF0bStgbkdqt7dntbhp
          tbRxaCf5uxD+vxD7vBBTUilYlZdtwMNms7Zdc1P8vRDYpBR5b0imsKy0wcFzhoZdkpRldEx6cU3W
          5eWLnJxdm51otrlZdl67kBWxvbmUo6RmfHxajo9ouLpqt7mJdiN8YxnH1dWVpaVfn6Jgl41OUUKv
          u7pWe3xwxsldn6KmtLTO3NxUf4BswMN0ys5gpaedrKzT4uJjd3dsvcBqubxXg4Vgd3hthYVid3dh
          d3Zof39shYVkf4BVeXpqt7pksbJjr7Jdo6X////f0mPcAAAAQXRSTlMABGh/a1xUZIqPo7BH2vv4
          /vJQgvyxwLLCpqXBsqfBqcKutcCwuamtop+SgPzwOQzg/f728fD166Zla1o/PiEmFs+XjUIAAAAB
          YktHRJKWBO8gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5wISBQ8aO3RqsAAAAQlJREFU
          GNNjYMAOGJmYmVlY2djYmZk5OLm4ecBivHyOTs7O/ALOTo6Oji6ugkJAQWERNxTgLgoUFEMVc/MQ
          BwpKuLl5enn7+PpBBf0lwYIBgUHBwSGhYeFgwQgpoKC0W2RUcHB0TGxcfAJYuwxYMDE4OCgpGQhS
          UoGCabJAQTm39KDgjEyQYHJWdo5brjxQUMEtLz+ooDAZAoqKXRXBgp4lpWXJMFBeoQQUVHZzq6yC
          i1XX1KoABVXr3OobYGKNTc0takBBdVc3t9a29vaOzq7unt4+t34NoKDmBFRvTtQCCmrroArq6gEF
          9Q0MnY2MTUxNzYxBwNwCHMj6llbWNrZ29jZg4IAjKhgAAWdbVO4nzP4AAAAldEVYdGRhdGU6Y3Jl
          YXRlADIwMjMtMDItMThUMDU6MTU6MjYrMDA6MDCumAyfAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIz
          LTAyLTE4VDA1OjE1OjI2KzAwOjAw38W0IwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0x
          OFQwNToxNToyNiswMDowMIjQlfwAAAAASUVORK5CYII="
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
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
          AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABNVBMVEUAAAAAr8EArMAAqsAA
          rMEBrMABrMEArMAAq8AArb8AqsIBrMEgtMa53+S53+QetMYArMEArMEAqrsArMA9scFegp4Cqr8A
          o8gArMEErMHn6+wTobgArMAArMBCvc1sco8Aq8EArMFSqrmNWn1Dvs4Aq8EErcLo7O0SorgArMAA
          q8A8sMBifJYBqr8BrMEftMa23eO33uQcs8YAq8AArMAAq8ABq8AAq8EAq8Mtdn9DW2OvvcSwvcSrucJ3
          kZyvvcWrv8OruMJ6kZ55kJ2rusAArMHFzdLH0NS5xMru7u7l5+jm6Ojp3eDd4OK2ubvAhZL4G0en
          rK1YYWV3foHu7e39Mlns7OwzXWQxW2Tl5+f6VHSssLKpra/9MVnc4OL1m6y5xcvv09kxcX5FWmR4
          kJywvsWsusK///80ikJBAAAARHRSTlMAHUotv/j5vSw/9cvd3MrzPg/q4+rqDnXk+/NzucP3t873
          /cJ05Przcunj8en0y93cyz28/vu7K1RASpWb/YBAhvP3hpKCbb4AAAABYktHRGYs1NklAAAACXBI
          WXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5wISBRAIBZcVZgAAAM1JREFUGNNjYMAHGJmYGNGEmFlc
          WNlc2DmQxTi5uHlc3Xj5+AUQYoJCwu4enl4e3iKiYnBBcQlJHw8PD18/fylpuKCMLFAoIDAoOERO
          Hi6ooOjuERoWHuERqaSAUKkMVBkV7REcg6RSRVUtFijsEeevroGwXVMrHiSYoK2DsJ1BQFdP38PD
          wJDfCNn1HMYmpqYmZuZoHrVITLTACBDLpCRLJK6VNRDY2CYn29qAWFZgQbsUIEhNBoJUEMsOLGhv
          BwQOjk5Ojs4glj0DCQAAJCUofMKIT9cAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDItMThUMDU6
          MTY6MDgrMDA6MDBXtcu8AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTE4VDA1OjE2OjA4KzAw
          OjAwJuhzAAAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xOFQwNToxNjowOCswMDowMHH9
          Ut8AAAAASUVORK5CYII="
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