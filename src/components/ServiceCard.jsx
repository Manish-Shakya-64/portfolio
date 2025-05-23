import React from 'react'

const ServiceCard = ({ info }) => {
    return (
        <div
            className='service-card bg-gradient-2 flex gap-4 items-start rounded-2xl shadow-s2 px-4 py-6 md:px-7 md:py-8'>
            <img src={info.icon} alt={info.title} className='w-10 mt-1 z-10' />
            <div className='flex flex-col gap-2 z-10'>
                <h1 className='text-lg font-semibold text-white-1 m-0'>{info.title}</h1>
                <p className='text-[15px] font-medium md:text-sm text-gray-1'>{info.description}</p>
            </div>
        </div>
    )
}

export default ServiceCard