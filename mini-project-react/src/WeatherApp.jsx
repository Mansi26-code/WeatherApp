import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import SearchBox from './SearchBox'; // Ensure this path is correct based on your project structure
import InfoBox from './infoBox';
import "./InfoBox.css";
export default function WeatherApp(){
const[weatherInfo, setWeatherInfo]=useState({
    city:"Delhi",
        feelsLike: 36.79,
        humidity: 20,
        temp: 38.1,
        tempMax: 38.1,
        tempMin: 38.1,
        weather: "scattered clouds"
});

let updateInfo=(info)=>{
    setWeatherInfo(info);
}
    return(
        <>
       
            
            <CssBaseline />
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo}/></>
    );
}