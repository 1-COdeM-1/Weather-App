import { useContext } from "react"
import SearchINput from "../../../context/searchInput/profileContext"
export default function DropDown (){
    const {serButton , data ,setSerButton , setCities} = useContext(SearchINput)
    
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
    return(
        <>
        {serButton && data && data.length > 0 && (
            <div className='absolute top-[140px] sm:top-[160px] left-4 sm:left-6 md:left-10 right-4 sm:right-6 md:right-10 max-h-[300px] overflow-y-auto
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
          </>
    )
}