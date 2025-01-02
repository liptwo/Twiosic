import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from '/odorikominji.mp3'

const PlaySong = () => {
  return (
      <div className='bg-gray-900 bg-opacity-90 fixed text-white h-[10vh] w-[100%] bottom-0 grid grid-cols-4'>
        <div className='m-auto col-span-1 flex  flex-row'>
            <div>
              <img src="./minji.jpg"  className='size-16 rounded-full object-cover' alt="thumnail" />
            </div>
            <div className='flex flex-col ml-[1rem] justify-center'>
              <h2 className='font-bold text-'>Odoriko </h2>
              <span> MINJI-(뉴진스) </span>
            </div>
        </div>
        <div className='col-span-3 bg-gray-900 bg-opacity-30 flex justify-center'>
            <AudioPlayer src={song} layout="horizontal-reverse"
            />
        </div>
    </div>
  )
}

export default PlaySong