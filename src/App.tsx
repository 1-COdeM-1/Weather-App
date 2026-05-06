import {CloudSun } from 'lucide-react'
import './App.css'
import { useState } from 'react'
import {type Cities ,type City} from './types/cities'
function App() {
  const [cities , setCities] = useState<Cities | []>([{city:"cairo" , country:"egypt" , temp:20 , skyState:"good" , windSpeed:5 , codition:"excillient"}, {city:"cairo" , country:"egypt" , temp:20 , skyState:"good" , windSpeed:5 , codition:"excillient"},{city:"cairo" , country:"egypt" , temp:20 , skyState:"good" , windSpeed:5 , codition:"excillient"},{city:"cairo" , country:"egypt" , temp:20 , skyState:"good" , windSpeed:5 , codition:"excillient"}])
  return (
    <div className='flex flex-col p-10 border-2 mt-7 w-[85%] mx-auto'>
      <div className='flex justify-between'>
        <div className='flex '>
                <CloudSun size={100} color="#72b8e3" strokeWidth={0.75} className='border-1'/>
                <div className='flex flex-col justify-center p-4'>
                  <p className='text-3xl'>Weather Dashboard</p>
                  <p className='text-2xl opacity-60'>Real time weather updates every 15 seconds</p>
                </div>
        </div>
        <div className='border-1 w-[100px] h-[40px] flex my-auto px-2 rounded-2xl'>
          <div className='size-5 bg-red-600 rounded-full my-2 '></div>
          <p className='text-xl  my-.75 mx-auto'>live</p>
        </div>
      </div>
      <div className='flex justify-between mt-[30px]'>
        <input type="text" className='w-[90%] rounded-xl text-2xl border-1 '  placeholder='search city...'/>
        <button  className='text-2xl bg-blue-400 hover:bg-red-500 w-[100px] h-[40px] rounded-xl cursor-pointer'>search</button>
      </div>
      <div className='grid grid-cols-3 gap-4 mt-[40px]'>
          {
            cities.map((city , index)=>(
              <div className='border-1 h-[325px]'>

              </div>
            ))
          }
      </div>
    </div>
  )
}

export default App
