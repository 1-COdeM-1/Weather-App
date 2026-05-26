import {CloudSun } from 'lucide-react'
export default function Logo(){
    return(
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
    )
}