
import Logo from '../components/logo'
import SearchThings from "../components/searchBar/searchThings"
import DropDown from './searchBar/dropDown'
import ShowCities from './showCities'
export default function AppContent (){
        return (
            <div className='flex flex-col p-4 sm:p-6 md:p-10 border-2 mt-4 sm:mt-7 w-full sm:w-[90%] md:w-[85%] mx-auto min-h-screen relative'>
                <Logo />  
                <SearchThings />
                <DropDown />
                <ShowCities />
            </div>
          )
}