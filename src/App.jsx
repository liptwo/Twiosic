import Menu from "./components/home/menu"
import SelectCategory from "./components/home/selectCategory"
import PoppularSong from "./components/home/poppularSong"

function App() {

  return (
    <div>
      <div className="grid grid-cols-4"> 
        <Menu></Menu>
        <div className="col-span-3">
          <SelectCategory></SelectCategory>
          <PoppularSong></PoppularSong>
        </div>
      </div>
    </div>
  )
}

export default App
