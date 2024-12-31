import React, { useEffect } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const PlaySong = ({ baihat }) => {
  useEffect(() => {
    if (baihat) {
      const audio = new Audio(baihat);
      audio.play();
    }
  }, [baihat]);

  return (
      <div className='bg-zinc-700 fixed text-white h-[10vh] w-[100%] bottom-0 grid grid-cols-4 z-50'>
        <div className='m-auto col-span-1 flex flex-row'>
            <div>
              <img src="./minji.jpg" className='size-16 rounded-full object-cover' alt="thumbnail" />
            </div>
            <div className='flex flex-col ml-[1rem] justify-center'>
              <h2 className='font-bold text-'>Odoriko </h2>
              <span> MINJI-(뉴진스) </span>
            </div>
        </div>
        <div className='col-span-3 flex justify-center'>
            <AudioPlayer src={baihat} layout="horizontal-reverse"
            autoPlayAfterSrcChange={true}
            />
        </div>
    </div>
  )
}

export default PlaySong