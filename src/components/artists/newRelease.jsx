import G_Sound from '../../assets/images/thumnail1.webp'
import aGirl from '../../assets/images/aGirl.png'

function NewRelease(){
    return (
        <div className=" pl-[1%] py-[1%] mr-12">
            <div className='font-bold text-2xl mb-1'>New Release</div>
            <div className='flex bg-gray-900 bg-opacity-20 rounded-lg'>
                <div>
                    <img src={G_Sound} alt="G Sound image" className='w-96 h-60 bg-cover rounded-lg'/>
                </div>

                <div className='w-full pl-3'>
                    <div className="flex pb-2">
                        <div className='flex justify-between w-full'>
                            <div className='flex mt-2'>
                                <img src={aGirl} alt="G Sound image" className='w-16 h-16 mr-2 bg-cover rounded-full'/>
                                <div>
                                    <div className='font-light'>New release of</div>
                                    <div className='text-xl font-semibold'>G Sounds</div>
                                </div>
                            </div>
                            <div className='mr-2'>
                                <i class="fa-regular fa-heart mr-3 cursor-pointer"></i>
                                <i class="fa-solid fa-ellipsis cursor-pointer"></i>
                            </div>
                        </div>
                    </div>  

                    <div className=''>
                        <div className='font-extralight'>Release in 2024</div>
                        <div className='text-xl font-semibold'>Pure Imagination (Lofi)</div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default NewRelease