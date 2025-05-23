import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import SectionHeader from './SectionHeader';
import SectionSubHeading from './SectionSubHeading';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isEmailFocused, setIsEmailFocused] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Real-time email validation
        if (name === 'email') {
            const isValid = /^(?!.*\.\.)(?!\.)(?!.*\.$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            setIsEmailValid(isValid || value.length === 0);
        }
    };

    const isFormValid = () => {
        return (
            formData.name.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.subject.trim() !== '' &&
            formData.message.trim() !== '' &&
            isEmailValid
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='w-full p-5 md:p-8 transition-all duration-1000 ease-in-out'>
            <SectionHeader />
            <div>
                <figure className='w-full h-full '>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1452.5542319649055!2d72.63063275441834!3d23.002406488678236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1747675538254!5m2!1sen!2sin" width="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded-2xl grayscale-100 invert-100 h-[230px] sm:h-[300px] md:h-[400px] border-1 border-gray-1'></iframe>
                </figure>
                <div className="contact-form">
                    <SectionSubHeading title="Contact Form" classes="my-6" />
                    <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl border border-ternary focus:outline-none transition-all duration-100
                              focus:border-bittersweet-shimmer
                              [:not(:placeholder-shown)&]:focus:border-yellow-1"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setIsEmailFocused(true)}
                                onBlur={() => setIsEmailFocused(false)}
                                className={`w-full p-4 rounded-xl border transition-all duration-100
                                ${isEmailFocused
                                        ? isEmailValid
                                            ? 'border-yellow-1'
                                            : 'border-bittersweet-shimmer'
                                        : 'border-ternary'}
                                    focus:outline-none
                                `}
                                required
                            />
                        </div>
                        <input
                            type="text"
                            placeholder='Subject'
                            name='subject'
                            value={formData.subject}
                            onChange={handleChange}
                            className='w-full p-4 rounded-xl border border-ternary focus:outline-none transition-all duration-100
                          focus:border-bittersweet-shimmer
                          [:not(:placeholder-shown)&]:focus:border-yellow-1'
                            required
                        />
                        <textarea
                            id="message"
                            placeholder='Message'
                            rows={4} name='message'
                            value={formData.message}
                            onChange={handleChange}
                            className='w-full p-4 rounded-xl border border-ternary focus:outline-none transition-all duration-100
                          focus:border-bittersweet-shimmer
                          [:not(:placeholder-shown)&]:focus:border-yellow-1'
                            required
                        >
                        </textarea>
                        <div
                            className='w-full flex justify-center md:justify-end'>
                            <button type='submit' className='w-full md:w-fit submit-btn px-5 py-4 flex items-center justify-center gap-2 rounded-2xl  shadow-s2 focus:outline-none transition-all duration-100 text-yellow-1 text-sm md:text-base z-10'
                                disabled={!isFormValid()}
                                title={isFormValid() ? 'Send Message' : 'Please fill all the fields'}
                            > <IoIosSend className='text-xl' /> Send Message</button>
                        </div>

                    </form>
                </div>
            </div>
        </div >
    )
}

export default Contact