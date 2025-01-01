import NavBar from './NavBar'
import HeroBanner from './HeroBanner'
import SelectCategory from "./selectCategory"
import PoppularSong from "./poppularSong"

function Home(){
    return (
        <>
            <NavBar />
            <HeroBanner />
            <SelectCategory></SelectCategory>
            <PoppularSong></PoppularSong>
        </>
    )
}

export default Home