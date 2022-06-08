import axios from 'axios'
import { useEffect, useState } from 'react'
import CardWeather from "./components/CardWeather"
import Loader from "./components/Loader"
import useWeather from "./Hooks/useWeather"
import './App.css'




function App() {

  const{weatherInfo, isLoad} = useWeather()

  return (
    <>
    {
      isLoad ?
        <Loader/>
      :
        <CardWeather weatherInfo={weatherInfo} />
    }
    </>

  );
}

export default App
