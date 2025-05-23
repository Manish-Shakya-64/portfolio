import React from 'react'

const SectionSubHeading = ({ title, classes = '' }) => {
    return (
        <h1 className={`text-2xl sm:text-3xl md:text-[24px] font-semibold text-white-1 ${classes}`}>{title}</h1>
    )
}

export default SectionSubHeading