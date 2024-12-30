import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-black w-full h-[10vh] grid grid-cols-3 gap-4 '>
        <div className='col-span-2'>
            <input className='h-12 font-medium text-white m-4 pl-4 w-[70%] rounded-full bg-search ' type="text" placeholder='Search for a song'/>
            <i className="fa fa-search sm:hidden md:hidden relative left-[-3rem] text-2xl text-white l-[-20px]" aria-hidden="true"></i>
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
            <div className='w-[3rem] h-[3rem] bg-gray-800 rounded-full flex mx-4 hover:bg-slate-400 active:bg-slate-500'>
                <i className="fa fa-heart m-auto scale-125"></i>
            </div>
            <div className='w-[3rem] h-[3rem] bg-gray-800 rounded-full flex mr-4 hover:bg-slate-400 active:bg-slate-500'>
                <i className="fa fa-gear m-auto scale-125"></i>
            </div>
        </div>

    </div>
  )
}

export default NavBar