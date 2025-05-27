import React from 'react'
import ServiceCard from './ServiceCard'
import { services } from '../data'
import SectionHeader from './SectionHeader'
import SectionSubHeading from './SectionSubHeading'
import FadeBox from './animations/FadeBox'

const About = () => {

    return (
        <FadeBox>
            <div className='w-full p-5 md:p-8 transition-all duration-1000 ease-in-out'>
                <SectionHeader currentTab={'about'} />
                <div>
                    <div className="description flex flex-col gap-3 mt-3 text-gray-1 text-[15px] text-xl text-justify">
                        <p>
                            I'm a Full Stack Developer with hands-on experience in React, Node.js, .NET Core MVC, and .NET Core Web API. I specialize in building responsive, user-centric front-end interfaces and developing secure, scalable back-end systems. My projects often involve integrating RESTful APIs, managing databases, and optimizing performance across the stack.
                        </p>
                        <p>
                            If you're looking for someone who can transform your ideas into powerful, full-fledged digital products, I’d love to collaborate and create something exceptional together. Let’s build the future—one line of code at a time!
                        </p>
                    </div>
                </div>
                <div className="heading flex flex-col gap-1 md:gap-4 mt-10">
                    <SectionSubHeading title="What I'm Doing" />

                    <div className="description grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-6 mt-3">
                        {
                            services.map((item, index) => (
                                <ServiceCard info={item} />

                            ))
                        }
                    </div>
                </div>


            </div>
        </FadeBox>
    )
}

export default About