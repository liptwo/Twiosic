import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './components/home/Home'
import Artists from './components/artists/artists'
import PlaySong from './components/home/PlaySong'
import './App.css'
import Menu from "./components/home/menu"
import Categories from './components/categories/Categories'

function App() {

  return (
    <>
      <div className='bg-zinc-800 grid grid-cols-4 '>
          <div className='col-span-1 bg-black'>
            <Menu></Menu>
          </div>

          <div className="col-span-3 overflow-y-auto max-h-[90vh] bg-search">
            <Routes>
              <Route path='/Home' element={<Home></Home>}> </Route>
              <Route path='/Categories' element={<Categories></Categories>}> </Route>
              <Route path='/Artists' element={<Artists></Artists>}></Route>
              <Route path="/" element={<Navigate to="/Home" replace />} />
            </Routes>
          </div>
          <PlaySong />
        </div>
    </>
  )
}

export default App
