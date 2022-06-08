import axios from "axios";
import { useEffect, useState } from "react";

const useWeather = () => {

  const [coords, setCoords] = useState();
  const [weatherInfo, setWeatherInfo] = useState();
  const [isClick, setIsClick] = useState(true);
  const [isLoad, setIsLoad] = useState(true);

  const handleClick = () => {
    setIsClick(!isClick);
  }
  const changeToCel = (temp) => {
    return Math.floor(temp - 273.15);
  }

  const changeToFah = (temp) => {
    return Math.floor(((temp - 273.15) * 9) / 5 + 32);
  }


  useEffect(() => {
    if (coords !== undefined) {
      const API_KEY = "13c6fa2bfa1a2ecb9109290f39169b17";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`;

      axios
        .get(URL)
        .then((res) => setWeatherInfo(res.data))
        .catch((err) => console.log(err))
        .finally(() => setIsLoad(false))

    }
  }, [coords]);
  // console.log(weatherInfo)

   useEffect(() => {
     const success = (pos) => {
       let lat = pos.coords.latitude;
       const lon = pos.coords.longitude;
       setCoords({ lat, lon });
     };
     navigator.geolocation.getCurrentPosition(success);
   }, []);

  if (weatherInfo?.weather[0]?.main === "Drizzle") {
    document.body.style.backgroundImage = `url(https://i.giphy.com/media/xT9GEOg09OuResnZ6g/giphy.gif)`;
   } else if (weatherInfo?.weather?.[0]?.main === "Rain") {
    document.body.style.backgroundImage = `url(https://64.media.tumblr.com/475f62ccd3ff499105a79ac8b67711e2/6025a433cd47175f-a3/s540x810/54d94f3aacbb8ceddb42ecf8df32f0db7c493d9f.gifv)`;
  } else if (weatherInfo?.weather?.[0]?.main === "Snow") {
    document.body.style.backgroundImage = `url(https://c.tenor.com/h7udV_fxDUoAAAAC/snowing-snow.gif)`;
  } else if (weatherInfo?.weather?.[0]?.main === "Thunderstorm") {
     document.body.style.backgroundImage = `url(https://static.onecms.io/wp-content/uploads/sites/35/2017/08/03220738/fb-thunderstorm-asthma.gif)`;
  } else if (weatherInfo?.weather?.[0]?.main === "Clouds") {
     document.body.style.backgroundImage = `url(https://i.picsum.photos/id/1064/4236/2819.jpg?hmac=YygzDG22SIIGfbbuoV45bKoBIUguEtto0Jw_YdPDGyY)`;
  } else if (weatherInfo?.weather?.[0]?.main === "Clear") {
  document.body.style.backgroundImage = `url(https://picsum.photos/id/733/200/300)`;
  } else {
    document.body.style.backgroundImage = `url(http://www.spyghana.com/wp-content/uploads/2014/11/sunny-day.jpg)`;
  }

  return {weatherInfo,isClick,isLoad,handleClick,changeToCel,changeToFah};
};
export default useWeather