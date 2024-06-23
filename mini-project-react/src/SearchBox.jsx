import { useState } from 'react'; // Import useState from React
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {

    let [city, setCity] = useState(""); // Initialize city state
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="1123bcb779c1d8afd2dc0993dc157742";

    let getWeatherInfo=async()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,

        };
        console.log(result);
        return result;
    };

    

    let handleChange = (evt) => {
        setCity(evt.target.value); // Update city state on input change
    };

    let handleSubmit = async(evt) => {
        evt.preventDefault(); // Prevent form default submission behavior
        console.log(city); // Log the current city to the console
        setCity(""); // Clear the city input after submission
       let info=await getWeatherInfo();
       updateInfo(info);
    };

    return (
        <div className="SearchBox">
            <h3>Search for a city</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange}
                />
              <br></br>
              
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}
