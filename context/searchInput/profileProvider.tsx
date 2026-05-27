import SearchINput  from "./profileContext";
import { useState } from "react";
import type { Cities } from "../../src/types/cities";
import useLocalStorage from "../../src/hooks/localStorageForCIties";
import useLocalStorage2 from "../../src/hooks/localstoragefordata";
type Props = {
    children : React.ReactNode;
}
export default function ProfileProvider({children}:Props){
    const [searchInput,setSearchInput]  = useState<string>("");
    const [serButton , setSerButton ] = useState<boolean>(false)
    const [data , setData] = useState<Cities | null>(null)
    const {value : cities , setValue :setCities} = useLocalStorage("cities" , null)
    const {value : data2 , setValue : setData2} = useLocalStorage2("data2" , null)

    return(
        <SearchINput.Provider value={{searchInput , serButton , setSearchInput , setSerButton , data , setData ,cities , setCities , data2 , setData2}}>
            {children}
        </SearchINput.Provider>
    )
}