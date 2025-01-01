import NavBar from './components/home/NavBar'
import HeroBanner from './components/home/HeroBanner'
import PlaySong from './components/home/PlaySong'
import './App.css'
import Menu from "./components/home/menu"
import SelectCategory from "./components/home/selectCategory"
import PoppularSong from "./components/home/poppularSong"

function App() {

  return (
    <>
      <div className='bg-zinc-800 grid grid-cols-4 '>
          <div className='col-span-1 bg-black'>
            <Menu></Menu>
          </div>

          <div className="col-span-3 overflow-y-auto max-h-[90vh]">
            <NavBar />
            <HeroBanner />
            <SelectCategory></SelectCategory>
            <PoppularSong></PoppularSong>
          </div>
          <PlaySong />
        </div>
    </>
  )
}

export default App
