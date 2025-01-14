import image2 from '../../assets/images/thumnail1.webp'
import image3 from '../../assets/images/thumnail4.webp'
import image6 from '../../assets/images/thumnail5.webp'

function SelectFromTwiosic(){
    return (
    <div className="pl-[1%] mt-5 pb-[1%]">
        <div className="font-bold text-2xl mb-1">Recommend from Twiosic</div>
        <div className="list-item list-none mt-2 overflow-x-scroll whitespace-nowrap scrollbar-hide">
            <li className='inline-block bg-orange-800 mr-3 p-2 text-center hover:cursor-pointer hover:opacity-80 rounded    '>
                <img
                    src={image2}
                    className='min-w-36 max-w-36 bg-cover rounded-md min-h-36'
                    alt='ImageMusic'
                />
                <div className='text-lg'>
                    Artist 'name'
                </div>
            </li>
            <li className='inline-block bg-cyan-800 mr-3 p-2 text-center hover:cursor-pointer hover:opacity-80 rounded  '>
                <img
                    src={image3}
                    className='min-w-36 max-w-36 bg-cover rounded-md min-h-36'
                    alt='ImageMusic'
                />
                <div className='text-lg'>
                    Artist 'name'
                </div>
            </li>
            <li className='inline-block bg-lime-800 p-2 mr-3 text-center hover:cursor-pointer hover:opacity-80 rounded  '>
                <img
                    src={image2}
                    className='min-w-36 max-w-36 bg-cover rounded-md min-h-36'
                    alt='ImageMusic'
                />
                <div className='text-lg'>
                    Artist 'name'
                </div>
            </li>
            <li className='inline-block bg-red-800 mr-3 p-2 text-center hover:cursor-pointer hover:opacity-80 rounded   '>
                <img
                    src={image6}
                    className='min-w-36 max-w-36 bg-cover rounded-md min-h-36'
                    alt='ImageMusic'
                />
                <div className='text-lg'>
                    Artist 'name'
                </div>
            </li>
            
            <li className='inline-block bg-green-700 mr-3 p-2 text-center hover:cursor-pointer hover:opacity-80 rounded '>
                <img
                    src={image3}
                    className='min-w-36 max-w-36 bg-cover rounded-md min-h-36'
                    alt='ImageMusic'
                />
                <div className='text-lg'>
                    Artist 'name'
                </div>
            </li>
            <li className='inline-block bg-amber-800 mr-3 p-2 text-center hover:cursor-pointer hover:opacity-80 rounded '>
                <img
                    src={image6}
                    className='min-w-36 max-w-36 bg-cover rounded-md min-h-36'
                    alt='ImageMusic'
                />
                <div className='text-lg'>
                    Artist 'name'
                </div>
            </li>
            <li className='inline-block bg-fuchsia-800 mr-3 p-2 text-center hover:cursor-pointer hover:opacity-80 rounded   '>
                <img
                    src={image2}
                    className='min-w-36 max-w-36 bg-cover rounded-md min-h-36'
                    alt='ImageMusic'
                />
                <div className='text-lg'>
                    Artist 'name'
                </div>
            </li>
            <li className='inline-block bg-lime-800 mr-3 p-2 text-center hover:cursor-pointer hover:opacity-80 rounded  '>
                <img
                    src={image6}
                    className='min-w-36 max-w-36 bg-cover rounded-md min-h-36'
                    alt='ImageMusic'
                />
                <div className='text-lg'>
                    Artist 'name'
                </div>
            </li>
            <li className='inline-block bg-rose-800 mr-3 p-2 text-center hover:cursor-pointer hover:opacity-80 rounded  '>
                <img
                    src={image3}
                    className='min-w-36 max-w-36 bg-cover rounded-md min-h-36'
                    alt='ImageMusic'
                />
                <div className='text-lg'>
                    Artist 'name'
                </div>
            </li>
        </div>
    </div>
    )
}

export default SelectFromTwiosic