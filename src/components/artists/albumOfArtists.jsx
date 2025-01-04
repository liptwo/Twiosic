import image1 from '../../assets/images/GirlAnime.jpg'
import aGirl from '../../assets/images/aGirl.png'

function AlbumOfArtists(){
    return (
        <div className="pl-[1%] mt-5">
            <div className="font-bold text-2xl mb-1">Most Listening</div>
            <div>
            <div className="overflow-x-scroll overflow-auto flex mt-2 whitespace-nowrap scrollbar-hide">
                <div className="min-w-64 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
                    <div className='relative'>
                        <img src={image1} alt="Image Music" className='h-96 w-64 object-top object-cover bg-cover hover:cursor-pointer rounded-lg border-2 border-orange-500 hover:opacity-70'/>
                        <div className='absolute flex items-center bottom-[1px] left-1/2 transform -translate-x-1/2 w-[98%] bg-emerald-800 bg-opacity-70 text-orange-400 text-center mt-[1px] mx-[1px] px-1 rounded-lg'>
                            <div>
                                <img src={aGirl} alt="Image" className='w-9 pr-1 rounded-full'/>
                            </div>
                            <div className='font-medium'>Vaundry</div>
                        </div>
                    </div>
                </div>
                <div className="min-w-64 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
                    <div className='relative'>
                        <img src={image1} alt="Image Music" className='h-96 w-64 object-top object-cover bg-cover hover:cursor-pointer rounded-lg border-2 border-orange-500 hover:opacity-70'/>
                        <div className='absolute flex items-center bottom-[1px] left-1/2 transform -translate-x-1/2 w-[98%] bg-emerald-800 bg-opacity-70 text-orange-400 text-center mt-[1px] mx-[1px] px-1 rounded-lg'>
                            <div>
                                <img src={aGirl} alt="Image" className='w-9 pr-1 rounded-full'/>
                            </div>
                            <div className='font-medium'>Minji</div>
                        </div>
                    </div>
                </div>
                <div className="min-w-64 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
                    <div className='relative'>
                        <img src={image1} alt="Image Music" className='h-96 w-64 object-top object-cover bg-cover hover:cursor-pointer rounded-lg border-2 border-orange-500 hover:opacity-70'/>
                        <div className='absolute flex items-center bottom-[1px] left-1/2 transform -translate-x-1/2 w-[98%] bg-emerald-800 bg-opacity-70 text-orange-400 text-center mt-[1px] mx-[1px] px-1 rounded-lg'>
                            <div>
                                <img src={aGirl} alt="Image" className='w-9 pr-1 rounded-full'/>
                            </div>
                            <div className='font-medium'>Artist 'name'</div>
                        </div>
                    </div>
                </div>
                <div className="min-w-64 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
                    <div className='relative'>
                        <img src={image1} alt="Image Music" className='h-96 w-64 object-top object-cover bg-cover hover:cursor-pointer rounded-lg border-2 border-orange-500 hover:opacity-70'/>
                        <div className='absolute flex items-center bottom-[1px] left-1/2 transform -translate-x-1/2 w-[98%] bg-emerald-800 bg-opacity-70 text-orange-400 text-center mt-[1px] mx-[1px] px-1 rounded-lg'>
                            <div>
                                <img src={aGirl} alt="Image" className='w-9 pr-1 rounded-full'/>
                            </div>
                            <div className='font-medium'>Artist 'name'</div>
                        </div>
                    </div>
                </div>
                <div className="min-w-64 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
                    <div className='relative'>
                        <img src={image1} alt="Image Music" className='h-96 w-64 object-top object-cover bg-cover hover:cursor-pointer rounded-lg border-2 border-orange-500 hover:opacity-70'/>
                        <div className='absolute flex items-center bottom-[1px] left-1/2 transform -translate-x-1/2 w-[98%] bg-emerald-800 bg-opacity-70 text-orange-400 text-center mt-[1px] mx-[1px] px-1 rounded-lg'>
                            <div>
                                <img src={aGirl} alt="Image" className='w-9 pr-1 rounded-full'/>
                            </div>
                            <div className='font-medium'>Artist 'name'</div>
                        </div>
                    </div>
                </div>
                <div className="min-w-64 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
                    <div className='relative'>
                        <img src={image1} alt="Image Music" className='h-96 w-64 object-top object-cover bg-cover hover:cursor-pointer rounded-lg border-2 border-orange-500 hover:opacity-70'/>
                        <div className='absolute flex items-center bottom-[1px] left-1/2 transform -translate-x-1/2 w-[98%] bg-emerald-800 bg-opacity-70 text-orange-400 text-center mt-[1px] mx-[1px] px-1 rounded-lg'>
                            <div>
                                <img src={aGirl} alt="Image" className='w-9 pr-1 rounded-full'/>
                            </div>
                            <div className='font-medium'>Artist 'name'</div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default AlbumOfArtists