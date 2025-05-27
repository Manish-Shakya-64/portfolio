import React from 'react'

const SectionSubHeading = ({ title, classes = '' }) => {
    return (
        <h1 className={`text-xl sm:text-[22px] xl:text-2xl font-semibold text-white-1 ${classes}`}>{title}</h1>
    )
}

export default SectionSubHeading