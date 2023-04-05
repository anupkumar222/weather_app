import React, { useState } from "react";
import api from '../utils/api';
import Weather from './WeatherInfo';

const TempApp = () => {

    const [city, setCity] = useState({});
    const [status, setStatus] = useState("");
    const [search, setSearch] = useState("Mumbai");
    const [togglePage, setTogglePage] = useState(false);


    const hidePage = () => {
        setTogglePage(false)
    }

    const fetchApi = async ({ city = '', lat = '', lon = '' }) => {
        const url = api.getWeatherDetails({ city, lat, lon })
        const response = await fetch(url);
        if (response.status === 404) {
            setStatus('City not found!');
            setCity({});
            return;
        }
        const resJson = await response.json();
        setCity(resJson);
        setTogglePage(true)
    }


    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus("Geolocation is not supported by your browser");
        } else {
            setStatus("Locating...");
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    setStatus(null)
                    fetchApi({ lat: position.coords.latitude, lon: position.coords.longitude });
                },
                () => {
                    setStatus("Unable to retrieve your location");
                }
            )
                ;
        }
    };

    const handleSearch = (event) => {
        if (event.keyCode === 13) {
            fetchApi({ city: search });
        }
    }

   
    if (togglePage) return <Weather city={city} hidePage={hidePage} />;

    return (
        <>
            <div className="main">
                <center>
                    <div className="box container">
                        <h1>Weather App</h1>
                        <hr></hr>
                        <div className="inputData">
                            <input
                                placeholder="Enter City Name"
                                type="search"
                                className="inputField"
                                onChange={(event) => {
                                    setSearch(event.target.value)
                                }}
                                onKeyDown={handleSearch}
                            />
                        </div>
                        <div className="median-line">
                            <div className="line"></div>
                            <p className="or">or</p>
                            <div className="line"></div>
                        </div>
                        <button
                            onClick={getLocation}
                            className="btn">
                            Get Device Location
                        </button>
                        {status && (<p className="err">{status}</p>)}
                    </div>
                </center>
            </div>
        </>
    )
}

export default TempApp