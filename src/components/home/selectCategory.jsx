

function SelectCategory(){
    const categoryList = ["All", "Chill vibes", "Japan", "Romance", "Sad", "EDM", "Party", "Christmas", "Holidays", "Energetic", "Jazz", "Lofi", "Anime", "Fighting", "Rock"]
    return (
        <div className=" h-[15vh] bg-black font-sans">
            <div className="text-2xl text-white pl-1 font-semibold"> 
                Select Categories
            </div>
            <div className="list-item list-none mt-3 overflow-x-scroll whitespace-nowrap scrollbar-hide text-gray-300">
                {
                    categoryList.map((item) => (
                        <li className="inline-block mx-2 border border-blue-200 p-3 rounded-xl hover:bg-orange-500 hover:cursor-pointer hover:text-white">
                            {item}
                        </li>
                    ))
                }
            </div>
        </div>
    )
}

export default SelectCategory