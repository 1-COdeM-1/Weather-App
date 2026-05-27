import { createContext} from "react";
import type { Cities , allData} from "../../src/types/cities";
type ProfileContextType = {
    searchInput : string ; 
    setSearchInput: React.Dispatch<React.SetStateAction<string>>,
    serButton : boolean , 
    setSerButton : React.Dispatch<React.SetStateAction<boolean>>,
    data : Cities | null , 
    setData : React.Dispatch<React.SetStateAction<Cities | null>>,
    cities : Cities | null , 
    setCities : React.Dispatch<React.SetStateAction<Cities | null>>
    data2 :  allData | null , 
    setData2 : React.Dispatch<React.SetStateAction<allData | null>>
}

// const all2Context = createContext<ProfileContextType | null>(null) 
// or
const  SearchINput = createContext<ProfileContextType>({
    searchInput : "",
    setSearchInput : ()=>{},
    serButton : false , 
    setSerButton : ()=>{},
    data : null , 
    setData : ()=>{} ,
    cities : null , 
    setCities : ()=>{}
    ,data2 : null , 
    setData2 : ()=>{}
})


export default SearchINput;