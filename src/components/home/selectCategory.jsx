

function SelectCategory(){
    return (
        <div className=" h-[15vh] bg-black pl-2 font-sans">
            <div className="text-2xl text-white pl-1 font-semibold"> 
                Select Categories
            </div>
            <div className="list-item list-none mt-3 overflow-x-scroll whitespace-nowrap scrollbar-hide text-gray-300">
                <li className="inline-block mx-2 border border-blue-200 p-3 rounded-xl hover:bg-orange-500 hover:cursor-pointer hover:text-white">All</li>
                <li className="inline-block mx-2 border border-blue-200 p-3 rounded-xl hover:bg-orange-500 hover:cursor-pointer hover:text-white">Chill vibes</li>
                <li className="inline-block mx-2 border border-blue-200 p-3 rounded-xl hover:bg-orange-500 hover:cursor-pointer hover:text-white">Japan</li>
                <li className="inline-block mx-2 border border-blue-200 p-3 rounded-xl hover:bg-orange-500 hover:cursor-pointer hover:text-white">Romance</li>
                <li className="inline-block mx-2 border border-blue-200 p-3 rounded-xl hover:bg-orange-500 hover:cursor-pointer hover:text-white">Sad</li>
                <li className="inline-block mx-2 border border-blue-200 p-3 rounded-xl hover:bg-orange-500 hover:cursor-pointer hover:text-white">EDM</li>
                <li className="inline-block mx-2 border border-blue-200 p-3 rounded-xl hover:bg-orange-500 hover:cursor-pointer hover:text-white">Party</li>
                <li className="inline-block mx-2 border border-blue-200 p-3 rounded-xl hover:bg-orange-500 hover:cursor-pointer hover:text-white">Christmas</li>
                <li className="inline-block mx-2 border border-blue-200 p-3 rounded-xl hover:bg-orange-500 hover:cursor-pointer hover:text-white">Holidays</li>
                <li className="inline-block mx-2 border border-blue-200 p-3 rounded-xl hover:bg-orange-500 hover:cursor-pointer hover:text-white">Energetic</li>
                <li className="inline-block mx-2 border border-blue-200 p-3 rounded-xl hover:bg-orange-500 hover:cursor-pointer hover:text-white">Jazz</li>
                <li className="inline-block mx-2 border border-blue-200 p-3 rounded-xl hover:bg-orange-500 hover:cursor-pointer hover:text-white">Lofi</li>
                <li className="inline-block mx-2 border border-blue-200 p-3 rounded-xl hover:bg-orange-500 hover:cursor-pointer hover:text-white">Anime</li>
                <li className="inline-block mx-2 border border-blue-200 p-3 rounded-xl hover:bg-orange-500 hover:cursor-pointer hover:text-white">Fighting</li>
                <li className="inline-block mx-2 border border-blue-200 p-3 rounded-xl hover:bg-orange-500 hover:cursor-pointer hover:text-white">Rock</li>
            </div>
        </div>
    )
}

export default SelectCategory