import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Infobox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import HOT_URL from './images/hot.jpg';
import COLD_URL from './images/cold.jpg';
import RAIN_URL from './images/rain.jpg';


export default function InfoBox({info}){
    let INIT_URL="https://unsplash.com/photos/lone-road-going-to-mountains-A-NVHPka9Rk";
 
   return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp>15?HOT_URL :COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80 ? <ThunderstormIcon/> : info.temp>15?<WbSunnyIcon/> :<AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Minimum Temperature={info.tempMin}&deg;C</p>
          <p>MaximumTemperature={info.tempMax}&deg;C</p>
          <p>Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      </Card>
      </div>
        </div>
    );
}