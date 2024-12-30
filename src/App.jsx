import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroBanner from './components/HeroBanner'
import PlaySong from './components/PlaySong'
import './App.css'

function App() {
  return (
    <>
    <div className='bg-zinc-800 grid grid-cols-4'>
      <div className='col-span-1'> 
        
      </div>
      <div className='col-span-3'>
          <NavBar />
          <HeroBanner />
      </div>
    </div>
    <PlaySong />
    </>
  )
}

export default App
