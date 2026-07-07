export default {
  id: 'card-black-friday',
  name: 'Black Friday Card',
  category: 'cards',
  tags: ['card', 'countdown', 'timer', 'coupon', 'animated', 'css-only', 'discount', 'black-friday', 'scrolling-numbers'],
  author: '3bdel3ziz-T',
  html: `<div class="bf-component">
  <div class="bf-coupon">
    <div class="bf-box"><span>37%</span><span>OFF</span></div>
    <div class="bf-diver"></div>
    <div class="bf-content">
      <h3>
        <span>B</span>
        <span>L</span>
        <span>A</span>
        <span>C</span>
        <span class="bf-end">K </span>
        <span>F</span>
        <span>R</span>
        <span>I</span>
        <span>D</span>
        <span>A</span>
        <span>Y</span>
        <span>🎉</span>
      </h3>
      <p>
        The black friday is getting back with the deal of the year<strong
          >37% OFF</strong
        >
        on all products
        <a href="javascript:void(0)">click here</a>
        to get the discount.
      </p>
    </div>
  </div>
  <div class="bf-timer">
    <div class="bf-item">
      <div class="bf-days">
        <div class="bf-day">
          <span>00</span><span>01</span><span>02</span><span>03</span
          ><span>04</span><span>05</span><span>06</span><span>07</span
          ><span>08</span><span>09</span><span>10</span><span>11</span
          ><span>12</span><span>13</span><span>14</span><span>15</span
          ><span>16</span><span>17</span><span>18</span><span>19</span
          ><span>20</span><span>21</span><span>22</span><span>23</span
          ><span>24</span><span>25</span><span>26</span><span>27</span
          ><span>28</span><span>29</span><span>30</span><span>31</span>
        </div>
      </div>
      <p>day</p>
    </div>
    <span class="bf-colon">:</span>
    <div class="bf-item">
      <div class="bf-hours">
        <div class="bf-hour">
          <span>00</span><span>01</span><span>02</span><span>03</span
          ><span>04</span><span>05</span><span>06</span><span>07</span
          ><span>08</span><span>09</span><span>10</span><span>11</span
          ><span>12</span><span>13</span><span>14</span><span>15</span
          ><span>16</span><span>17</span><span>18</span><span>19</span
          ><span>20</span><span>21</span><span>22</span><span>23</span
          ><span>24</span>
        </div>
      </div>
      <p>hour</p>
    </div>
    <span class="bf-colon">:</span>
    <div class="bf-item">
      <div class="bf-minutes">
        <div class="bf-min">
          <span>00</span><span>01</span><span>02</span><span>03</span
          ><span>04</span><span>05</span><span>06</span><span>07</span
          ><span>08</span><span>09</span><span>10</span><span>11</span
          ><span>12</span><span>13</span><span>14</span><span>15</span
          ><span>16</span><span>17</span><span>18</span><span>19</span
          ><span>20</span><span>21</span><span>22</span><span>23</span
          ><span>24</span><span>25</span><span>26</span><span>27</span
          ><span>28</span><span>29</span><span>30</span><span>31</span
          ><span>32</span><span>33</span><span>34</span><span>35</span
          ><span>36</span><span>37</span><span>38</span><span>39</span
          ><span>40</span><span>41</span><span>42</span><span>43</span
          ><span>44</span><span>45</span><span>46</span><span>47</span
          ><span>48</span><span>49</span><span>50</span><span>51</span
          ><span>52</span><span>53</span><span>54</span><span>55</span
          ><span>56</span><span>57</span><span>58</span><span>59</span
          ><span>60</span>
        </div>
      </div>
      <p>min</p>
    </div>
    <span class="bf-colon">:</span>
    <div class="bf-item">
      <div class="bf-seconds">
        <div class="bf-sec">
          <span>00</span><span>01</span><span>02</span><span>03</span
          ><span>04</span><span>05</span><span>06</span><span>07</span
          ><span>08</span><span>09</span><span>10</span><span>11</span
          ><span>12</span><span>13</span><span>14</span><span>15</span
          ><span>16</span><span>17</span><span>18</span><span>19</span
          ><span>20</span><span>21</span><span>22</span><span>23</span
          ><span>24</span><span>25</span><span>26</span><span>27</span
          ><span>28</span><span>29</span><span>30</span><span>31</span
          ><span>32</span><span>33</span><span>34</span><span>35</span
          ><span>36</span><span>37</span><span>38</span><span>39</span
          ><span>40</span><span>41</span><span>42</span><span>43</span
          ><span>44</span><span>45</span><span>46</span><span>47</span
          ><span>48</span><span>49</span><span>50</span><span>51</span
          ><span>52</span><span>53</span><span>54</span><span>55</span
          ><span>56</span><span>57</span><span>58</span><span>59</span
          ><span>60</span>
        </div>
      </div>
      <p>sec</p>
    </div>
  </div>
</div>`,
  css: `
.bf-component {
  --count: 0;
  --days: 31;
  --hours: 24;
  --minutes: 60;
  --seconds: 60;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  margin: auto;
  padding: 0 40px;
}

.bf-coupon {
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #654bff;
  scale: 0.7;
  transform-origin: bottom center;
}

.bf-coupon:hover .bf-content h3 > span {
  animation: bf-jump 0.15s ease-out 1 normal both;
}

.bf-coupon:hover .bf-content h3 > span:nth-of-type(1) {
  animation-delay: 0.03s;
}
.bf-coupon:hover .bf-content h3 > span:nth-of-type(2) {
  animation-delay: 0.06s;
}
.bf-coupon:hover .bf-content h3 > span:nth-of-type(3) {
  animation-delay: 0.09s;
}
.bf-coupon:hover .bf-content h3 > span:nth-of-type(4) {
  animation-delay: 0.12s;
}
.bf-coupon:hover .bf-content h3 > span.bf-end {
  animation-delay: 0.15s;
}
.bf-coupon:hover .bf-content h3 > span:nth-of-type(6) {
  animation-delay: 0.18s;
}
.bf-coupon:hover .bf-content h3 > span:nth-of-type(7) {
  animation-delay: 0.21s;
}
.bf-coupon:hover .bf-content h3 > span:nth-of-type(8) {
  animation-delay: 0.24s;
}
.bf-coupon:hover .bf-content h3 > span:nth-of-type(9) {
  animation-delay: 0.27s;
}
.bf-coupon:hover .bf-content h3 > span:nth-of-type(10) {
  animation-delay: 0.3s;
}
.bf-coupon:hover .bf-content h3 > span:nth-of-type(11) {
  animation-delay: 0.33s;
}
.bf-coupon:hover .bf-content h3 > span:nth-of-type(12) {
  animation-delay: 0.36s;
}

.bf-coupon .bf-box {
  height: 100%;
  width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 1rem;
}

.bf-coupon .bf-box span {
  display: block;
  font-weight: bold;
  font-size: 1.8rem;
}

.bf-coupon .bf-diver {
  display: block;
  width: 0px;
  height: 160px;
  border: 3px dashed transparent;
  border-right-color: #654bff;
}

.bf-coupon .bf-content {
  padding: 1rem;
  flex: 1;
  color: #fff;
  width: 330px;
  height: 100%;
}

.bf-coupon .bf-content h3 {
  font-weight: 600;
  font-size: 2rem;
  height: 34px;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.bf-coupon .bf-content h3 span.bf-end {
  width: 30px;
}

.bf-coupon .bf-content p {
  font-weight: 400;
  font-style: normal;
  color: #959595;
  font-size: 1rem;
  line-height: 1.25rem;
}

.bf-coupon .bf-content p a {
  font-style: italic;
  color: #654bff;
  text-transform: capitalize;
  word-spacing: 0.03rem;
  font-weight: bolder;
  text-decoration: underline;
  text-underline-offset: 0.05rem;
  text-decoration-color: #654bff;
}

.bf-timer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0rem;
  overflow: hidden;
  width: calc(244px + 0rem);
  text-align: center;
}

.bf-timer .bf-colon {
  width: 8px;
  color: #fff;
  font-size: 2rem;
}

.bf-timer .bf-item {
  text-align: center;
  width: 55px;
  height: fit-content;
}

.bf-timer .bf-item .bf-days,
.bf-timer .bf-item .bf-hours,
.bf-timer .bf-item .bf-minutes,
.bf-timer .bf-item .bf-seconds {
  text-align: center;
  width: 55px;
  overflow: hidden;
  height: 40px;
}

.bf-timer .bf-item .bf-day,
.bf-timer .bf-item .bf-hour,
.bf-timer .bf-item .bf-min,
.bf-timer .bf-item .bf-sec {
  text-align: center;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.bf-timer .bf-item .bf-day span,
.bf-timer .bf-item .bf-hour span,
.bf-timer .bf-item .bf-min span,
.bf-timer .bf-item .bf-sec span {
  height: 40px;
  color: #fff;
  font-size: 2rem;
  display: inline-block;
}

.bf-timer .bf-item .bf-day {
  --count: var(--days);
  animation: bf-slide calc(var(--count) * 86400s) ease-out 0s 31 normal both;
}

.bf-timer .bf-item .bf-hour {
  --count: var(--hours);
  animation: bf-slide calc(var(--count) * 3600s) steps(var(--count)) 0s 24 normal both;
}

.bf-timer .bf-item .bf-min {
  --count: var(--minutes);
  animation: bf-slide calc(var(--count) * 60s) steps(var(--count)) 0s 60 normal both;
}

.bf-timer .bf-item .bf-sec {
  --count: var(--seconds);
  animation: bf-slide calc(var(--count) * 1s) steps(var(--count)) 0s 60 normal both;
}

.bf-timer .bf-item p {
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
}

@keyframes bf-slide {
  0% {
    transform: translateY(calc(-40px * var(--count)));
  }
  99.6% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc(-40px * var(--count)));
  }
}

@keyframes bf-jump {
  0% {
    transform: translateY(0);
    scale: 1;
  }
  50% {
    transform: translateY(-10px);
    scale: 1.1;
  }
  100% {
    transform: translateY(0);
    scale: 1;
  }
}
`
}