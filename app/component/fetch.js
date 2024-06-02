"use client"
import { useState,useEffect } from "react";
import Image from "next/image";
import SearchInput from "./searchInput"
import WheatherToday from "./weatherToday"
import Forecast from "./forecast";




//https://api.openweathermap.org/data/2.5/forecast?q=aden&appid=cbc230fc223067e9a0b72ea9f509f0db&units=metric
export default function Fetch(){
  const [dataCurrent,setDataCurrent]=useState("")
  const [dataForecast,setDataForecast]=useState("")
  const [load,setLoad]=useState(false)
 
  const handleSearch = async (city) => {
    if (city){
      setLoad(true)
    }
    try {
            const responseWeather= await fetch(`https://wheatherapp-backend.onrender.com/weather/${city}`, {
                next: {revalidate: 60}
              });
              setLoad(false)
            const resultWeather= await responseWeather.json();
            setDataCurrent(resultWeather)
            console.log(dataCurrent,resultWeather)
      
            //forcast
            const responseForecast= await fetch(`https://wheatherapp-backend.onrender.com/forecast/${city}`, {
                next: {revalidate: 60}
              });
            const resultForecast= await responseForecast.json();
            setDataForecast(resultForecast)
         } catch (error) {
               console.error(error);
             }
  
  }
    return (
   <div className="containers">    
      <div className="main">
          <SearchInput onSearch={handleSearch} />
          <WheatherToday data={dataCurrent} load={load}/>
          <Forecast data={dataForecast} /> 
    </div>
   </div>
    )
}
