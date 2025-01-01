import { Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import PlaySong from './components/home/PlaySong'
import './App.css'
import Menu from "./components/home/menu"

function App() {

  return (
    <>
      <div className='bg-zinc-800 grid grid-cols-4 '>
          <div className='col-span-1 bg-black'>
            <Menu></Menu>
          </div>

          <div className="col-span-3 overflow-y-auto max-h-[90vh]">
            <Routes>
              <Route path='/Home' element={<Home></Home>}> </Route>
            </Routes>
          </div>
          <PlaySong />
        </div>
    </>
  )
}

export default App
