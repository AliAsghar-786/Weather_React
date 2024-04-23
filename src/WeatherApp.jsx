import React, { useState } from 'react';

import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
   const [weatherInfo,setWeatherInfo]=useState({
    city:"Bhopal",
    feelslike:24.04,
    temp:25.05,
    tempMin:25.05,
    tempMax:25.05,
    humidity:47,
    weather:"haze",
});

let updateInfo=(newInfo)=>{
setWeatherInfo(newInfo);
}

   return (<div style={{textAlign:"center"}}>
        <h2 style={{ color: 'black' }}>WEATHER APP  BY ALI USING REACT</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>);
}