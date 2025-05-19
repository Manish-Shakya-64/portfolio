import React, { useState } from 'react'

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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div className='w-full p-5 md:p-8 transition-all duration-1000 ease-in-out'>
            <div className="heading flex flex-col gap-1 md:gap-4">
                <h1 className='text-2xl sm:text-3xl md:text-[33px] font-semibold text-white-1'>Contact</h1>
                <span className="underline w-[40px] h-[5px] bg-gradient rounded-md"></span>
                <div className="description flex flex-col gap-3 mt-3 text-gray-1">
                    <figure className='w-full h-full '>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1452.5542319649055!2d72.63063275441834!3d23.002406488678236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1747675538254!5m2!1sen!2sin" width="100%" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded-2xl grayscale-100 invert-100'></iframe>
                    </figure>
                </div>
                <div className="contact-form">

                    <h3 className='text-xl md:text-2xl  font-semibold text-white-1 my-6'>Contact Form</h3>
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
                        <button type='submit' className='w-full p-4 rounded-xl border border-ternary focus:outline-none transition-all duration-100
                              focus:border-bittersweet-shimmer
                              [:not(:placeholder-shown)&]:focus:border-yellow-1'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact