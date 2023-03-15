import React from "react";
import '../forecast/forecast.css';

const forecast=({data})=>{
    return(
        <div className="forecast">
            <div className="today">
        <img src ={`https://openweathermap.org/img/w/${data && data.list[0].weather[0].icon}.png`} alt="icon" className="w-icon" />
             <div className="contain">
                <div className="day">{data.list[0].dt}</div>   
                <div className="temp">{data.list[0].main.temp}</div>
            </div>
                
            </div>
            <div className="other-days">
                <div className="days">
                    <div className="day">TUE</div>
                    <img src={`https://openweathermap.org/img/w/${data && data.list[8].weather[0].icon}.png`} alt="icon" className="w-icon" />
                    <div className="temp">{data.list[8].main.temp}</div>
                </div>
                <div className="days">
                    <div className="day">TUE</div>
                    <img src={`https://openweathermap.org/img/w/${data && data.list[16].weather[0].icon}.png`} alt="icon" className="w-icon" />
                    <div className="temp">{data.list[16].main.temp}</div>
                </div>
                <div className="days">
                    <div className="day">TUE</div>
                    <img src={`https://openweathermap.org/img/w/${data && data.list[24].weather[0].icon}.png`} alt="icon" className="w-icon" />
                    <div className="temp">{data.list[24].main.temp}</div>
                </div>
                <div className="days">
                    <div className="day">TUE</div>
                    <img src={`https://openweathermap.org/img/w/${data && data.list[32].weather[0].icon}.png`} alt="icon" className="w-icon" />
                    <div className="temp">{data.list[32].main.temp}</div>
                </div>
            </div>
        </div>
    
      
    )
}

export default forecast;