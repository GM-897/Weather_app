import React from "react";
import '../forecast/forecast.css';

const forecast=({data})=>{
    return(
        <div className="forecast">
            <div className="today">
        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="icon" class="w-icon" />
             <div className="contain">
                <div className="day">SOMEDAY</div>   
                <div className="temp">27.3</div>
            </div>
                
            </div>
            <div className="other-days">
                <div className="days">
                    <div className="day">TUE</div>
                    <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="icon" class="w-icon" />
                    <div className="temp">33.4</div>
                </div>
                <div className="days">
                    <div className="day">TUE</div>
                    <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="icon" class="w-icon" />
                    <div className="temp">33.4</div>
                </div>
                <div className="days">
                    <div className="day">TUE</div>
                    <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="icon" class="w-icon" />
                    <div className="temp">33.4</div>
                </div>
                <div className="days">
                    <div className="day">TUE</div>
                    <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="icon" class="w-icon" />
                    <div className="temp">33.4</div>
                </div>
            </div>
        </div>
    
      
    )
}

export default forecast;