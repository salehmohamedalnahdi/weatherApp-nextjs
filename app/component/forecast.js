"use client"
import {useState} from "react"
import Image from "next/image";


export default function Forecast({data}) {
//src={`http://openweathermap.org/img/wn/${data.list[0].weather.icon}.png`} data.list[0].weather.icon
  return (
    <div >
            {data && (
              <>
                 <div className="forcasts">    
                     <span>Tomorow:</span>
                     <Image src={"http://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+".png"} 
                       width={100}
                       height={100}
                       alt=''
                     />
                     <span>Max Temp: {data.list[0].main.temp_max}°C</span>
                     <span>Min Temp: {data.list[0].main.temp_min}°C</span>
                 </div>     
              </>
             )
            }
         </div>
  );
}
