import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const PlaySong = () => {
  return (
      <div className='bg-zinc-700 fixed text-white h-[10vh] w-[100%] bottom-0 grid grid-cols-4'>
        <div className='m-auto col-span-1 flex  flex-row'>
            <div>
              <img src="./Avatar.webp"  className='size-16 rounded-full' alt="thumnail" />
            </div>
            <div className='flex flex-col ml-[1rem] justify-center'>
              <h2 className='font-bold text-'>Echoes of Midnight</h2>
              <span>Jon Hickman</span>
            </div>
        </div>
        <div className='col-span-3 flex justify-center'>
            <AudioPlayer src='' layout="horizontal-reverse"
            />
        </div>
    </div>
  )
}

export default PlaySong