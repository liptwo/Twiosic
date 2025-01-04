import React from 'react'


const Categories = () => {

    const categoryList = [
        { name: "All", color: "#ff2421" },
        { name: "Chill vibes", color: "#a3c1e0" },
        { name: "Japan", color: "#ff5733" },
        { name: "Romance", color: "#c70039" },
        { name: "Sad", color: "#900c3f" },
        { name: "EDM", color: "#581845" },
        { name: "Party", color: "#28b463" },
        { name: "Christmas", color: "#8e44ad" },
        { name: "Holidays", color: "#f1c40f" },
        { name: "Energetic", color: "#e67e22" },
        { name: "Jazz", color: "#2ecc71" },
        { name: "Lofi", color: "#e74c3c" },
        { name: "Anime", color: "#3498db" },
        { name: "Fighting", color: "#9b59b6" },
        { name: "Rock", color: "#34495e" }
      ]  
    return (
        <>

        <div className='text-white w-full h-full '>
        <p className='font-bold text-3xl m-5'>Choose a categories</p>
        <div className='gap-4 font-sans grid grid-cols-2 lg:grid-cols-3'>
        {categoryList.map((item,index)=>(
            <div key={index} style={{ backgroundColor: item.color }} className={` rounded p-5 w-[80%] h-[10rem] m-4 flex justify-start`}>
                <p className='font-bold text-lg'>{item.name}</p>
            </div>  
        ))}
        </div>
    </div>
        </>
  )
}

export default Categories
