
import Logo from '../components/logo'
import SearchThings from "../components/searchBar/searchThings"
import DropDown from './searchBar/dropDown'
import ShowCities from './showCities'
export default function AppContent (){
        return (
            <div className='flex flex-col p-10 border-2 mt-7 w-[85%] mx-auto'>
                <Logo />  
                <SearchThings />
                <DropDown />
                <ShowCities />
            </div>
          )
}