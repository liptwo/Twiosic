import { ArrowRightAlt, ArrowRightSharp, ChevronLeftOutlined, LogoutSharp } from '@mui/icons-material'
import aGirl from '../../images/aGirl.png'

import React from 'react'

const Menu = () => {
  return (
    <div className='col-span-1 h-[90vh] bg-search text-xl text-gray-400 border-black border-[1rem] rounded-3xl'>
        <div className='block text-orange-400 mx-auto text-center text-3xl p-4 font-semibold'>
          Twiosic 
        </div>
        <div className='flex flex-col justify-between h-[80vh]'>
        <div>
          <div className='mx-6'>
            <div className='block p-3 hover:cursor-pointer hover:bg-orange-500 hover:text-white rounded'>
              <i class="fa-solid fa-house pr-2"></i>
              Home
            </div>

            <div className='block p-3 hover:cursor-pointer hover:bg-orange-500 hover:text-white rounded'>
              <i class="fa-solid fa-list pr-2"></i>
              Categories
            </div>

            <div className='block p-3 hover:cursor-pointer hover:bg-orange-500 hover:text-white rounded'>
              <i class="fa-regular fa-user pr-2"></i>
              Aritists
            </div>

            <div className='block p-3'>
              <div className='hover:text-white cursor-pointer'>
                <i class="fa-solid fa-music pr-2"></i>
                Playlists
                <i class="fa-solid fa-chevron-up pl-11"></i>
                {/* <ChevronLeftOutlined/> */}
              </div>

              <div className='list-item list-none ml-7 mt-2 overflow-scroll scrollbar-hide max-h-[300px] hover:bg-gray-900 rounded'>
                <li className='flex items-center hover:bg-orange-500 hover:text-white rounded p-2 cursor-pointer'>
                  <img src={aGirl} className='bg-cover w-[40px] rounded-lg mr-2'></img>
                  Playlist 1
                </li>
                <li className='flex items-center hover:bg-orange-500 hover:text-white rounded p-2 cursor-pointer'>
                  <img src={aGirl} className='bg-cover w-[40px] rounded-lg mr-2'></img>
                  Playlist 2
                </li>
                <li className='flex items-center hover:bg-orange-500 hover:text-white rounded p-2 cursor-pointer'> 
                  <img src={aGirl} className='bg-cover w-[40px] rounded-lg mr-2'></img>
                  Playlist 3
                </li>
                <li className='flex items-center hover:bg-orange-500 hover:text-white rounded p-2 cursor-pointer'> 
                  <img src={aGirl} className='bg-cover w-[40px] rounded-lg mr-2'></img>
                  Playlist 4
                </li>
                <li className='flex items-center hover:bg-orange-500 hover:text-white rounded p-2 cursor-pointer'> 
                  <img src={aGirl} className='bg-cover w-[40px] rounded-lg mr-2'></img>
                  Playlist 5
                </li>
                <li className='flex items-center hover:bg-orange-500 hover:text-white rounded p-2 cursor-pointer'> 
                  <img src={aGirl} className='bg-cover w-[40px] rounded-lg mr-2'></img>
                  Playlist 6
                </li>
                <li className='flex items-center hover:bg-orange-500 hover:text-white rounded p-2 cursor-pointer'> 
                  <img src={aGirl} className='bg-cover w-[40px] rounded-lg mr-2'></img>
                  Playlist 7
                </li>
              </div>
          </div>
          </div> 
          </div>
          <div className='relative  p-1 m-3 left-[20px] bottom-[20px] hover:cursor-pointer  hover:text-white rounded'>
            {/* <i class="fa-solid fa-arrow-right-from-bracket"></i> */}
            <LogoutSharp/> 
            Log Out
          </div>
           
        </div>
    </div>
  )
}

export default Menu