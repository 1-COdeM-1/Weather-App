import { useState ,useEffect } from "react";
import { type Cities } from "../types/cities";

function useLocalStorage (key : string , initialValue:Cities){
    const stored = localStorage.getItem(`${key}`)
    const localStorageValue = stored ? JSON.parse(stored):null

    const [value , setValue] = useState<Cities>(localStorageValue ?? initialValue)

    useEffect(()=>{
        localStorage.setItem( `${key}` , JSON.stringify(value))
    },[value  , key])
    return {value ,setValue}
}
export default useLocalStorage; 