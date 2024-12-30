import aGirl from '../../images/aGirl.png'

import React from 'react'

const Menu = () => {
  return (
    <div className='col-span-1 h-[90vh] bg-slate-800 text-xl text-gray-400'>
        <div className='block text-orange-400 mx-auto text-center text-3xl p-4 font-semibold'>
          Twiosic 
        </div>

        <div className='mx-6'>
          <div className='block p-4 hover:cursor-pointer hover:bg-orange-500 hover:text-white rounded'>
            <i class="fa-solid fa-house pr-2"></i>
            Home
          </div>

          <div className='block p-4 hover:cursor-pointer hover:bg-orange-500 hover:text-white rounded'>
            <i class="fa-solid fa-list pr-2"></i>
            Categories
          </div>

          <div className='block p-4 hover:cursor-pointer hover:bg-orange-500 hover:text-white rounded'>
            <i class="fa-regular fa-user pr-2"></i>
            Aritists
          </div>

          <div className='block p-4'>
            <div className='hover:text-white cursor-pointer'>
              <i class="fa-solid fa-music pr-2"></i>
              Playlists
              <i class="fa-solid fa-chevron-up pl-11"></i>
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

          <div className='block p-2 hover:cursor-pointer hover:bg-orange-500 hover:text-white rounded'>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            Log Out
          </div>

        </div>
    </div>
  )
}

export default Menu