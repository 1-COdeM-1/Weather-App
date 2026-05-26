import { createContext} from "react";
type ProfileContextType = {
    searchInput : string ; 
    setSearchInput: React.Dispatch<React.SetStateAction<string>>,
    serButton : boolean , 
     setSerButton : React.Dispatch<React.SetStateAction<boolean>>
}

// const all2Context = createContext<ProfileContextType | null>(null) 
// or
const  SearchINput = createContext<ProfileContextType>({
    searchInput : "",
    
    setSearchInput : ()=>{},
    serButton : false , 
    setSerButton : ()=>{}
})


export default SearchINput;