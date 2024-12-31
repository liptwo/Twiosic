import NavBar from './components/NavBar'
import HeroBanner from './components/HeroBanner'
import PlaySong from './components/PlaySong'
import './App.css'
import Menu from "./components/home/menu"
import SelectCategory from "./components/home/selectCategory"
import PoppularSong from "./components/home/poppularSong"
import { useState } from 'react'
import song from '/odorikominji.mp3'


function App() {
  const [baihat, setBaiHat] = useState(song);
  return (
    <>
      <div className='bg-black overflow-auto'>
          <div className=' absolute z-50'>
            <Menu></Menu>
          </div>

          <div className="bg-black overflow-auto">
            <NavBar />
            <HeroBanner setBaiHat={setBaiHat}/>
            <SelectCategory></SelectCategory>
            <PoppularSong></PoppularSong>
            <PoppularSong></PoppularSong>
            <PoppularSong></PoppularSong>
          </div>
          <PlaySong baihat={baihat}/>
        </div>
    </>
  )
}

export default App
