
const array = [
    "All","Chill vibes","Japan","Romance","Sad","EDM","Party","Christmas","Holidays","Energetic","Jazz","Lofi","Anime","Fighting",
]

function SelectCategory(){
    return (
        <div className=" h-[15vh] bg-black pl-2 font-sans">
            <div className="text-2xl text-white pl-1 font-semibold"> 
                Select Categories
            </div>
            <div className="list-item list-none mt-3 overflow-x-scroll whitespace-nowrap scrollbar-hide text-gray-300">
                {array.map((item, index)=>(
                     <li key={index} className="inline-block mx-2 outline-4 outline-white min-w-[2rem] p-3 rounded-full hover:bg-orange-500 hover:cursor-pointer hover:text-white">{item}</li>
                ))}
            </div>
        </div>
    )
}

export default SelectCategory