import React, { useEffect } from 'react'

const Navbar = ({ currentTab, setCurrentTab }) => {
    const tabs = ['about', 'resume', 'projects', 'contact']

    const handleTabClick = (tab) => {
        setCurrentTab(tab)
        sessionStorage.setItem('currentTab', tab)
    }

    useEffect(() => {
        const storedTab = sessionStorage.getItem('currentTab')
        if (storedTab) {
            setCurrentTab(storedTab)
        }
    }, [setCurrentTab])
    return (
        <>
            {/* navbar for desktop */}
            <div className='hidden md:block absolute top-0 right-0 w-lg bg-gray-2 z-[1] rounded-bl-3xl rounded-tr-3xl border border-ternary backdrop-blur-3xl'>
                <ul className='flex items-center justify-center gap-16'>
                    {
                        tabs.map((tab, index) => (
                            <li key={index} className={`text-white-1 text-[16px] font-semibold cursor-pointer py-4 ${currentTab === tab && 'text-yellow-1'}`} onClick={() => handleTabClick(tab)}>
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* navbar for mobile - fixed to bottom of viewport */}
            <div className='md:hidden fixed bottom-0 left-0 right-0 bg-gray-2 z-50 border-t border-ternary backdrop-blur-[100px] rounded-t-2xl'>
                <ul className='flex items-center justify-center gap-10'>
                    {
                        tabs.map((tab, index) => (
                            <li key={index} className={`text-white-1 text-[14px] font-semibold cursor-pointer py-5 ${currentTab === tab && 'text-yellow-1'}`} onClick={() => handleTabClick(tab)}>
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Navbar