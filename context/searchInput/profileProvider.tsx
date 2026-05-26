import SearchINput  from "./profileContext";
import { useState } from "react";
type Props = {
    children : React.ReactNode;
}
export default function ProfileProvider({children}:Props){
    const [searchInput,setSearchInput]  = useState<string>("");
    const [serButton , setSerButton ] = useState<boolean>(false)

    return(
        <SearchINput.Provider value={{searchInput , serButton , setSearchInput , setSerButton}}>
            {children}
        </SearchINput.Provider>
    )
}