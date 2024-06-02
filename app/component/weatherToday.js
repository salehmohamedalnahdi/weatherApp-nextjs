"use client"
import {useState} from "react"
import Image from "next/image";


export default function WheatherToday({data,load}) {
  //const urlImg= data.weather[0].icon

  return (
     <div className="content">
          {load && <p>loading...</p>}
          {data && (
            <>
               <p className="title">Today</p>
               <p>{data.name}</p>      
               <Image src={"http://openweathermap.org/img/wn/"+data.weather[0].icon+".png"}
           
                   width={100}
                   height={100}
                   alt=""
                   //alt={"/wheather1.png"} 
               />
               <p>{data.weather[0].main}</p>
               <p>{data.main.temp}°C</p>
                        
               <p>Wind: {data.wind.speed} KM/H</p>
               <p>Humidity: {data.main.humidity}</p>   
            </>
           )
          }
         </div>
  );
}
