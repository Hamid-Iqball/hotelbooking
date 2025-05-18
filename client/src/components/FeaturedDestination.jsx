
import {  roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'

function FeaturedDestination() {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
        <Title title='Featured Destination' subTitle='Discover our handpicked selection of the exceptional properties around the world, offering unparalleled luxury and unforgetable experience's/>
        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>

      

            {roomsDummyData.slice(0,4).map((room,index)=>(
                <HotelCard key={room._id} room={room} index={index}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedDestination