import React, { useEffect, useState } from "react";
import api from '../utils/api';


const TempApp = () => {
  
    const [city, setCity] = useState({});
    const [status, setStatus] = useState("");
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        fetchApi({city: search});
    }, [search])

    const fetchApi = async ({city='', lat='', lon=''}) => {
        const url = api.getWeatherDetails({city, lat, lon})
        const response = await fetch(url)
        const resJson = await response.json();
        setCity(resJson);
        console.log(response) 
    }


    const getLocation = () => {
        if (!navigator.geolocation) {
          setStatus("Geolocation is not supported by your browser");
        } else {
          setStatus("Locating...");
          navigator.geolocation.getCurrentPosition(
            async (position) => {
             fetchApi({lat:position.coords.latitude, lon:position.coords.longitude});
            },
            () => {
              setStatus("Unable to retrieve your location");
            }
          );
        }
      };

      const {main = {}, name} = city;
    
    return (
        <>
            <div className="box container">
                <div className="inputData">
                    <input
                        placeholder="Enter City"
                        type="search"
                        className="inputField"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }}
                    />
                </div>
                {
                    !city ? (
                        <p>No Data Found</p>
                    ) : (
                        <div className="info">
                            <h2 className="location"><i className="fa-solid fa-street-view icon"></i>{name}</h2>
                        <h1 className="temp">{main.temp} °C</h1>
                        <h3 className="temp_min_max">Min {main.temp_min} °C | Max {main.temp_max} °C</h3>
                    </div>
                    )
                }
<button onClick={getLocation} className="btn">
          Get Device Location
        </button>
            </div>
    
        </>
    )
}

export default TempApp