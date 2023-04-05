import React from "react";
import api from '../utils/api';


const Weather = ({ city, hidePage }) => {
    const { main = {}, name, weather } = city;

    return (

        <div className="parent-box">
            <div className="info child-box">
                <header className="flex">
                    <p onClick={hidePage}><i className="fa-solid fa-arrow-left arrow"></i></p>
                    <h1 className="weather">Weather App</h1>
                </header>
                <hr></hr>

                <div className="mid">
                    <img src={api.getIcon(weather[0].icon)} />
                    <h3 className="temp">{main.temp} °C</h3>
                    <h2 className="location"><i className="fa-solid fa-street-view icon"></i> {name}</h2>
                    <h2 className="sky">{weather[0].description}</h2>
                </div>
                <hr></hr>
                <h3 className="temp_min_max"> Min {main.temp_min} °C  |   Max {main.temp_max} °C</h3>




            </div>
        </div>
    )
}
export default Weather;