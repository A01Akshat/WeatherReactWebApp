import React, { useEffect, useState } from "react";
import "./css/style.css";
//137dc8f5ed28c3517f3a2e8123dc5098
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={137dc8f5ed28c3517f3a2e8123dc5098}
const Tempapp = () => {





    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("Mumbai");

    useEffect(() => {

        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=137dc8f5ed28c3517f3a2e8123dc5098`
            const response = await fetch(url);
            const resJson = await response.json();
            setcity(resJson.main);
        }

        fetchApi();
    },[search])


    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputFeild"
                        onChange={(event) => { setsearch(event.target.value) }}
                    />
                </div>


                {!city ? (
                    <p>NO DATA</p>
                ) : (
                    <div>
                    <div className="info">
                    <h2 className="location">
                        {search}
                    </h2>

                    <h1 className="temp" >{city.temp}Celcius</h1>
                    <h3 className="tempmin_max">Min:{city.temp_min}Cel | Max: {city.temp_max}Cel</h3>
                </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                </div>)}

                
            </div>
        </>
    )
}

export default Tempapp; 
