import {CloudSun } from 'lucide-react'
export default function Logo(){
    return(
        <div className='flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0'>
        <div className='flex items-center'>
                <CloudSun size={60} color="#72b8e3" strokeWidth={0.75} className='border-1 shrink-0 sm:w-[100px] sm:h-[100px]'/>
                <div className='flex flex-col justify-center p-2 sm:p-4'>
                  <p className='text-xl sm:text-2xl md:text-3xl font-semibold'>Weather Dashboard</p>
                  <p className='text-sm sm:text-base md:text-xl opacity-60'>Real time weather updates every 15 seconds</p>
                </div>
        </div>
        <div className='border-1 w-[90px] sm:w-[100px] h-[36px] sm:h-[40px] flex items-center px-2 rounded-2xl self-start sm:self-auto sm:my-auto'>
          <div className='size-4 sm:size-5 bg-red-600 rounded-full shrink-0'></div>
          <p className='text-base sm:text-xl mx-auto'>live</p>
        </div>
      </div>
    )
}