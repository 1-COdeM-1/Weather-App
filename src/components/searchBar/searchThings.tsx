import { useContext } from "react"
import SearchINput from "../../../context/searchInput/profileContext"


export default function SearchThings(){
    const {searchInput , serButton , setSearchInput , setSerButton} = useContext(SearchINput)
    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
     const  searchValue  = e.target.value
    //  setData(null)
      setSearchInput(searchValue)
    
  }
  const handleSerButton = ()=>{
    setSerButton(!serButton)
    
  }
  
    return(
        
            <div className='flex justify-between mt-[30px]'>
            <search className='flex justify-between mt-[30px] w-[100%]'>
            <input type="text" className='w-[90%] rounded-xl text-2xl border-1 ' value={searchInput ?? ""} onChange={handleSearch}  placeholder='search city...'/>
            <button  className='text-2xl bg-blue-400 hover:bg-red-500 w-[100px] h-[40px] rounded-xl cursor-pointer' onClick={handleSerButton}>search</button>
            
            </search>
            
        </div>
      
    )
}