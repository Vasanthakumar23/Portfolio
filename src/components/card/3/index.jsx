import React from "react";
import "./index.css"
const Card = () => {
  return (
    <div class="cardm">
      <div class="card">
        
        <div class="main">23 °C</div>
        <div class="mainsub">Dunmore, Ireland</div>
      </div>

      <div class="card2">
        <div class="upper">
          <div class="humidity">
            <div class="humiditytext">Humidity 30%</div>
            
          </div>

          <div class="air">
            <div class="airtext">Wind8 Km/h</div>
            
          </div>
        </div>

        <div class="lower">
          <div class="aqi">
           
            <div class="aqitext">AQI30</div>
          </div>

          <div class="realfeel">
           
            <div class="realfeeltext">Real Feel21 °C</div>
          </div>

          <div class="pressure">
            
            <div class="pressuretext">Pressure1012 mbar</div>
          </div>
          <div class="card3">Healthy</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
