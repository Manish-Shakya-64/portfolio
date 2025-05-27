import React, { useEffect } from 'react'
import Accordion from './components/Accordion'
import Maincontent from './components/Maincontent'

function App() {

  return (
    <div className="relative w-[95%] sm:w-full mx-auto min-h-screen flex flex-col xl:flex-row gap-7 pt-6 pb-18 sm:p-18 md:px-10 xl:px-28 xl:py-18">
      <Accordion />
      <Maincontent />
    </div>
  )
}

export default App