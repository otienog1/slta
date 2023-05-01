"use client"

import { useState } from "react"

const ContactForm = () => {
    const [name, setName] = useState(''),
        [email, setEmail] = useState(''),
        [message, setMessage] = useState('')

    let data = ''

    const submitMessage = async () => {
        await fetch('', {
            method: 'post',
            body: data
        })
    }


    return (
        <div>
            <input type="hidden" name="form-name" value="contact" />
            <div>
                <label className="block text-base tracking-tight text-gray-600">Name</label>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    className="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                />
            </div>
            <div className="mt-6">
                <label className="block text-base tracking-tight text-gray-600">Email address</label>
                <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    onChange={e => setEmail(e.target.value)}
                    className="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"
                />
            </div>
            <div className="mt-6">
                <label className="block text-base tracking-tight text-gray-600">Message</label>
                <textarea
                    placeholder="Your message"
                    required
                    onChange={e => setMessage(e.target.value)}
                    className="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700">
                </textarea>
            </div>
            <button
                onClick={() => submitMessage()}
                className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4 mt-6"
            >
                Send message
            </button>
        </div>
    )
}

export default ContactForm