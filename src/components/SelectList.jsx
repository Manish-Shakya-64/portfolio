import React from 'react'

const SelectList = ({ items, selected, setSelected, classes }) => {

    const handleSelect = (item) => {
        setSelected(item)
    }
    return (
        <div className={`relative w-full text-[15px] text-white-2 ${classes}`}>

            <div className='w-full flex items-center gap-8'>
                {items.map((item) => (
                    <div key={item} onClick={() => handleSelect(item)} className={`text-white-2 cursor-pointer ${selected === item ? 'text-yellow-1' : ''}`}>{item}</div>
                ))}
            </div>
        </div >
    )
}

export default SelectList