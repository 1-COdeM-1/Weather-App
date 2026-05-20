import {CloudSun } from 'lucide-react'
// https://geocoding-api.open-meteo.com/v1/search?name=cairo
//api.open-meteo.com/v1/forecast?latitude=30.06263&longitude=31.24967&current_weather=true
import './App.css'

import {type Cities, type City  } from './types/cities'
import useLocalStorage from './hooks/localStorageForCIties'
import React, { useState  , useEffect} from 'react'
import useLocalStorage2 from './hooks/localstoragefordata'

function App() {
  const [searchInput , setSearchInput] = useState<string>("")
  
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
     const  searchValue  = e.target.value
     setData(null)
      setSearchInput(searchValue)
    
  }
  const [serButton , setSerButton ] = useState<boolean>(false)
  const handleSerButton = ()=>{
    setSerButton(!serButton)
  }
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
          <button  className='text-2xl bg-blue-400 hover:bg-red-500 w-[100px] h-[40px] rounded-xl cursor-pointer' onClick={handleSerButton}>search</button>
          
        </search>
        
      </div>
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
