import PoppularArtists from "./poppularArtists";
import SelectFromTwiosic from "./selectFromTwiosic";
import AlbumOfArtists from "./albumOfArtists";
import ListenEarly from "./listenEarly";
import NewRelease from "./newRelease";

function Artists(){
    return (
        <div className="text-white font-sans pb-5">
            <NewRelease></NewRelease>
            <PoppularArtists></PoppularArtists>
            <AlbumOfArtists></AlbumOfArtists>
            <SelectFromTwiosic></SelectFromTwiosic>
            <ListenEarly></ListenEarly>
        </div>
    )
}

export default Artists