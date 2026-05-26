
// https://geocoding-api.open-meteo.com/v1/search?name=cairo
//api.open-meteo.com/v1/forecast?latitude=30.06263&longitude=31.24967&current_weather=true
import './App.css'

import {type Cities, type City  } from './types/cities'
import useLocalStorage from './hooks/localStorageForCIties'
import React, { useState  , useEffect} from 'react'
import useLocalStorage2 from './hooks/localstoragefordata'
//////////////////////////////////////////////
import ProfileProvider from "../context/searchInput/profileProvider"
import Logo from './components/logo'
import SearchThings from "./components/searchBar/searchThings"
function App() {
  const [searchInput , setSearchInput] = useState<string>("")
  
  
  const [serButton , setSerButton ] = useState<boolean>(false)
  
  const [data , setData] = useState<Cities | null>(null)
  const {value : cities , setValue :setCities} = useLocalStorage("cities" , null)
  useEffect(()=>{
    if(searchInput.length >= 3 && serButton){
      fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchInput}`)
      .then((res)=>res.json())
      .then((data)=>setData(data.results))
    }
  },[searchInput , serButton])

  // const [data2 , setData2] = useState<Cities | null>(null)
const {value : data2 , setValue : setData2} = useLocalStorage2("data2" , null)
  const handleclickCity = (id: number) => {
  const clickedCity = data?.find((city) => city.id === id)
  
  if (!clickedCity) return

  // ✅ Only add if not already in the list
  setCities((prev) => {
    const already = prev?.some((city) => city.id === id)
    if (already) return prev
    return [...(prev ?? []), clickedCity]
  })
}
  useEffect(() => {
  
    if (cities && cities.length >= 1) {  // ✅ check cities
    const fetchWeather = () => {
    Promise.all(
      cities.map((city) =>
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true`)
          .then((res) => res.json())
          .then((data) => ({
            id: city.id,
            name: city.name,
            country: city.country,
            ...data.current_weather
          }))
      )
    ).then((results) => {
      setData2(results)
    })
  }

  fetchWeather()  // ✅ fetch immediately on mount, don't wait 15s

  const interval = setInterval(fetchWeather, 15000)

  return () => clearInterval(interval)  // ✅ cleanup old interval
  }
 
}, [cities])  // ✅ runs whenever cities changes
    
  const deleteCity = (id: number) => {
    
        setCities((items) => items.filter(item => item.id !== id))
        setData2((items) => items.filter(item => item.id !== id))
}
  return (
    <div className='flex flex-col p-10 border-2 mt-7 w-[85%] mx-auto'>
      
      <Logo />
      <ProfileProvider>
        <SearchThings />
      </ProfileProvider>
      {/* //////////////////////////////////////////////////////// */}
  {/* Dropdown */}
  {serButton && data && data.length > 0 && (
    <div className='absolute top-[275px] left-[170px] w-[70%] max-h-[300px] overflow-y-auto
                    bg-white border border-gray-200 rounded-xl shadow-lg z-10'>
      {data.map((city) => (
        <div
          key={city.id}
          className='px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100'
          onClick={() => {
            // handle city selection here
            setSerButton(false)
            handleclickCity(city.id)
          }}
        >
         <div className='flex justify-between'>
            <div>
               <p className='text-lg font-medium'>{city.name}</p>
               <p className='text-sm text-gray-500'>{city.country}</p>
            </div>
            <div>
               <p className='text-lg font-medium'>code:{city.country_code}</p>
               <p className='text-sm text-gray-500'>timeZone:{city.timezone}</p>
            </div>
         </div>
        </div>
      ))}
    </div>
  )}

      {/* ///////////////////////////////////////////////////// */}
      <div className='grid grid-cols-3 gap-4 mt-[40px]'>
          {
            data2?.map((city)=>(
              <div key={city.id} className='border-1 h-[290px] flex flex-col p-4 rounded-2xl'>
                <div className='flex justify-between'>
                  <div className='flex flex-col'>
                    <h1 className='text-3xl'>{city.name}</h1>
                    <p>{city.country}</p>
                  </div>
                  <button className='text-red-600 text-3xl mt-[10px] cursor-pointer' onClick={()=>deleteCity(city.id)}>X</button>
                </div>
                <div className='text-7xl mx-auto mt-[15px]'>
                  {city.temperature} C
                </div>
                <div className='w-[200px] h-[55px] border-1 mx-auto my-auto rounded-2xl'>
                  <h1 className='text-center text-xl'>wind speed :</h1>
                  <p className='text-center'>{city.windspeed?city.windspeed : "__"} Km/h</p>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default App
