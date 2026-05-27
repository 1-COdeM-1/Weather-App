import SearchINput from "../../context/searchInput/profileContext"
import { useContext  , useEffect} from "react"
export default function ShowCities(){
    const {setCities , data2 , setData2, cities} = useContext(SearchINput)

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
    
        setCities((items) => items!.filter(item => item.id !== id))
        setData2((items) => items!.filter(item => item.id !== id))
}
    return(
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
    )
}