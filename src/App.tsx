import {CloudSun } from 'lucide-react'
// https://geocoding-api.open-meteo.com/v1/search?name=cairo
//api.open-meteo.com/v1/forecast?latitude=30.06263&longitude=31.24967&current_weather=true
import './App.css'

import {type Cities, type City} from './types/cities'
import useLocalStorage from './hooks/localStorageForCIties'
import React, { useState  , useEffect} from 'react'
function App() {
  const [searchInput , setSearchInput] = useState<string | null>(null)
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
     const  searchValue  = e.target.value
      setSearchInput(searchValue)
    
  }
  useEffect(()=>{
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchInput}`)
    .then()
  },[searchInput])
  const initialCities:Cities = [
    { id: 1, city: "hjhj", country: "egypt", temp: 20, windSpeed: 5 },
    { id: 2, city: "alexandria", country: "egypt", temp:50, windSpeed: 10 }
  ];
  const {value : cities , setValue :setCities} = useLocalStorage("cities" , initialCities)
  
  const deleteCity = (id: number) => {
    
        setCities((items) => items.filter(item => item.id !== id))
}
  return (
    <div className='flex flex-col p-10 border-2 mt-7 w-[85%] mx-auto'>
      <div className='flex justify-between'>
        <div className='flex '>
                <CloudSun size={100} color="#72b8e3" strokeWidth={0.75} className='border-1'/>
                <div className='flex flex-col justify-center p-4'>
                  <p className='text-3xl'>Weather Dashboard</p>
                  <p className='text-2xl opacity-60'>Real time weather updates every 15 seconds</p>
                </div>
        </div>
        <div className='border-1 w-[100px] h-[40px] flex my-auto px-2 rounded-2xl'>
          <div className='size-5 bg-red-600 rounded-full my-2 '></div>
          <p className='text-xl  my-.75 mx-auto'>live</p>
        </div>
      </div>
      <div className='flex justify-between mt-[30px]'>
        <search className='flex justify-between mt-[30px] w-[100%]'>
          <input type="text" className='w-[90%] rounded-xl text-2xl border-1 ' value={searchInput ?? ""} onChange={handleSearch}  placeholder='search city...'/>
          <button  className='text-2xl bg-blue-400 hover:bg-red-500 w-[100px] h-[40px] rounded-xl cursor-pointer'>search</button>
        </search>
      </div>
      
      <div className='grid grid-cols-3 gap-4 mt-[40px]'>
          {
            cities.map((city)=>(
              <div key={city.id} className='border-1 h-[290px] flex flex-col p-4 rounded-2xl'>
                <div className='flex justify-between'>
                  <div className='flex flex-col'>
                    <h1 className='text-3xl'>{city.city}</h1>
                    <p>{city.country}</p>
                  </div>
                  <button className='text-red-600 text-3xl mt-[10px] cursor-pointer' onClick={()=>deleteCity(city.id)}>X</button>
                </div>
                <div className='text-7xl mx-auto mt-[15px]'>
                  {city.temp} C
                </div>
                <div className='w-[200px] h-[55px] border-1 mx-auto my-auto rounded-2xl'>
                  <h1 className='text-center text-xl'>wind speed :</h1>
                  <p className='text-center'>{city.windSpeed?city.windSpeed : "__"} Km/h</p>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default App
