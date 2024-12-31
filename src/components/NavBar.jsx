import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

import React from 'react'


const NavBar = () => {
  return (
    <div className='top-0 z-10 left-12 sticky w-full h-[6rem] grid grid-cols-3 gap-4 '>
        <div className='col-span-2 text-white flex flex-row justify-end l items-center'>
            <input className='h-12 font-medium text-white m-4 pl-4 w-[70%] rounded-full bg-search ' type="text" placeholder='Search for a song'/>
            <div className='relative left-[-4rem]'>
                 <SearchIcon sx={{fontSize:30}} />
            </div>
        </div>
        <div className='flex text-white col-span-1 items-center justify-end'>
            <div className='pr-4 '>
                <img src="./Avatar2.webp" alt="Avatar" className='w-[4rem] rounded-full' />
            </div>
            <div className='flex flex-col h-12'>
                <h3 className='font-bold'>Molly Hunted</h3>
                <div>
                    <span className='tems-center bg-slate-700 px-1 mt-1 ml-1 rounded text-sm font-nomarl text-white'>Premium</span>
                </div>
            </div>
            <div className='w-[3rem] h-[3rem] bg-gray-800 rounded-full flex justify-center items-center mx-4 hover:bg-slate-400 active:bg-slate-500'>
                <FavoriteIcon sx={{fontSize:30,}}/>
            </div>
            <div className='w-[3rem] h-[3rem] bg-gray-800 rounded-full flex justify-center items-center mr-4 hover:bg-slate-400 active:bg-slate-500'>
                <SettingsIcon sx={{fontSize:30,}} />
            </div>
        </div>

    </div>
  )
}

export default NavBar