import React from 'react';
import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {
    let INIT_URL = "https://media.istockphoto.com/id/1180851480/photo/wide-landscape-of-green-field.jpg?s=1024x1024&w=is&k=20&c=ouepQY-H-S5P-SZDuO-2kbG43aQL-ybn2EKtlizQTfA=";
    

    return (
        <div className="InfoBox">
            <h1>{info.city}</h1>
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={INIT_URL}
                    alt="Weather"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                   
                       
                        Humidity: {info.humidity}% <br />
                        Temp: {info.temp}°C <br />
                        Max Temp: {info.tempMax}°C <br />
                        Min Temp: {info.tempMin}°C
                        <p>The weather can be described as {info.weather} and feels like {info.feelsLike}</p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}

