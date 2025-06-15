import React, { useState } from 'react'
import Title from "../components/Title"
import { assets, userBookingsDummyData } from '../assets/assets'

function MyBookings() {
  // eslint-disable-next-line no-unused-vars
  const [bookings, setBookings] = useState(userBookingsDummyData)
  
  return (
    <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
      <Title 
        title='My Bookings' 
        subTitle='Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks' 
        align='left'
      />
      
      <div className='max-w-6xl mt-8 w-full text-gray-800'>
        {/* Fixed Header Grid */}
        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
          <div>Hotels</div>
          <div>Date & Time</div>
          <div>Payments</div>
        </div>
        
        {/* Bookings List */}
        {bookings.map((booking) => (
          <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t gap-4'>
            
            {/* Hotel Details - First Column */}
            <div className='flex items-center gap-4'>
              <img 
                src={booking.room.images.at(0)} 
                alt="hotel image" 
                className='w-32 h-24 md:w-44 md:h-32 rounded shadow object-cover flex-shrink-0' 
              />
              <div className='flex flex-col gap-1.5'>
                <p className='font-playfair text-xl md:text-2xl'>
                  {booking.hotel.name}
                  <span className='text-sm font-inter'> ({booking.room.roomType})</span>
                </p>
                
                <div className='flex items-center gap-1 text-sm text-gray-500'>
                  <img src={assets.locationIcon} alt="location-icon" />
                  <span>{booking.hotel.address}</span>
                </div>
                
                <div className='flex items-center gap-1 text-sm text-gray-500'>
                  <img src={assets.guestsIcon} alt="guests-icon" />
                  <span>Guests: {booking.guests}</span>
                </div>
                
                <p className='text-base font-medium'>Total: ${booking.totalPrice}</p>
              </div>
            </div>
            
            {/* Date & Time - Second Column (FIXED) */}
            <div className='flex flex-col justify-center gap-4 md:px-4'>
              <div>
                <p className='font-medium text-sm text-gray-700'>Check-In:</p>
                <p className='text-gray-600 text-sm'>
                  {new Date(booking.checkInDate).toLocaleDateString('en-US', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <div>
                <p className='font-medium text-sm text-gray-700'>Check-Out:</p>
                <p className='text-gray-600 text-sm'>
                  {new Date(booking.checkOutDate).toLocaleDateString('en-US', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
            
            {/* Payment Status - Third Column (FIXED) */}
            <div className='flex flex-col items-start justify-center md:px-4'>
              <div className='flex items-center gap-2'>
                <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}></div>
                <p className={`text-sm font-medium ${booking.isPaid ? "text-green-600" : "text-red-600"}`}>
                  {booking.isPaid ? "Paid" : "Unpaid"}
                </p>
              </div>
              {!booking.isPaid && (
                <button className='px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer'>
                  Pay Now
                </button>
              )}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBookings