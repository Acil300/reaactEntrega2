import React from 'react'
import useWeather from '../Hooks/useWeather';

const CardWeather = ({weatherInfo}) => {
  const {isClick, handleClick, changeToCel, changeToFah } = useWeather();
  return (
    <div className="card-time">
      <div className="container">
        <h1 className="app">
          <b>App Weather</b>
        </h1>
        <ul>
          {
            <div className="container__info">
              <h1 className="city">
                {weatherInfo?.name},<span>{weatherInfo?.sys.country}</span>
              </h1>
              <div className="container-tmp">
                <h1 id="temperature">
                  {isClick
                    ? changeToCel(weatherInfo?.main?.temp)
                    : changeToFah(weatherInfo?.main?.temp)}
                  <span>{isClick ? "°C" : "°F"}</span>
                </h1>
                <img
                  src={
                    weatherInfo &&
                    `http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`
                  }
                  alt="icons-weather"
                />
              </div>
              <button onClick={handleClick}>
                {isClick ? "Temperature  °C" : "Temperature  °F"}
              </button>
              <h3>{weatherInfo?.weather[0].description}</h3>
              <div className="card-opacity">
                <p>
                  <i className="fa-solid fa-cloud"></i>
                  {weatherInfo?.clouds.all} %
                </p>
                <p>
                  <i className="fa-solid fa-wind"></i>
                  {weatherInfo?.wind.speed} km/h
                </p>
                <p>
                  <i className="fa-solid fa-smog"></i>
                  H: {weatherInfo?.main.humidity} %
                </p>
                <p>
                  <i className="fa-solid fa-temperature-half"></i>
                  {weatherInfo?.main.pressure} mb
                </p>
              </div>
              <h4>
                <b>Time Zone:</b> {weatherInfo?.timezone}
              </h4>
            </div>
          }
        </ul>
      </div>
    </div>
  );
}

export default CardWeather