import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const DropDown = ({ items, selected, setSelected, classes }) => {

    const [isOpen, setIsOpen] = useState(false)
    const handleSelect = (item) => {
        setSelected(item)
        setIsOpen(false)
    }

    return (
        <div className={`relative w-full text-xs md:text-sm text-white-2 ${classes}`}>
            <div className='flex items-center justify-between px-4 py-3 border-1 border-ternary rounded-xl' onClick={() => setIsOpen(!isOpen)}>
                <span className='text-white-1'>{selected}</span>
                {isOpen ? <IoIosArrowUp className='text-white-1' /> : <IoIosArrowDown className='text-white-1' />}
            </div>
            {isOpen && (
                <div className='absolute top-[120%] left-0 w-full bg-secondary border-1 border-ternary rounded-xl p-2'>
                    {items.map((item) => (
                        <div key={item} onClick={() => handleSelect(item)} className='p-2 rounded-lg hover:bg-ternary cursor-pointer'>{item}</div>
                    ))}
                </div>
            )}
        </div >
    )
}

export default DropDown