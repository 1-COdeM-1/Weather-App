import { useState ,useEffect } from "react";
import { type allData, type Cities } from "../types/cities";


 function useLocalStorage2 (key : string , initialValue:null){
    const stored = localStorage.getItem(`${key}`)
    const localStorageValue = stored ? JSON.parse(stored):null

    const [value , setValue] = useState<allData | null>(localStorageValue ?? initialValue)

    useEffect(()=>{
        localStorage.setItem( `${key}` , JSON.stringify(value))
    },[value  , key])
    return {value ,setValue}
}
export default useLocalStorage2