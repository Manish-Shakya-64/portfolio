import React, { useEffect, useState } from 'react'

const SectionHeader = ({ currentTab }) => {


    return (
        <div className="heading flex flex-col gap-1 md:gap-4 mb-6">
            <h1 className='text-2xl sm:text-3xl md:text-[33px] font-semibold text-white-1'>{currentTab.charAt(0).toUpperCase() + currentTab.slice(1)}</h1>
            <span className="underline w-[40px] h-[5px] bg-gradient rounded-md"></span>
        </div>
    )
}

export default SectionHeader