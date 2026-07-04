import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import Email from "@mui/icons-material/Email";

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_j2zhqda',
            'template_34a0l3e',
            form.current,
            'iAOQNMv6DIh8ab86a'
        )
            .then(() => {
                alert("Message Sent Successfully!");
            })
            .catch((error) => {
                alert("Failed to send message");
                console.log(error);
            });
    };

    return (
        <div>
            <div className="relative w-full h-[50vh] lg:mt-20 overflow-hidden">
                <video className="absolute top-0 left-0 w-full h-full object-cover" src="/videos/Heropic.mp4" autoPlay loop muted playsInline preload="metadata"></video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
                <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 text-white pt-4">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl lg:text-center text-white font-bold">Get in Touch</h1>
                    <p className="text-gray-300 text-justify lg:text-center text-large pt-4">Explore premium properties in top locations and make your dream a reality.</p> 
                </div>
            </div>
            <div className="lg:flex lg:justify-center lg:items-center h-auto bg-slate-950 border-b border-gray-900 pt-12 md:pt-8 lg:pt-0 px-6 md:px-12 lg:px-24">
                <form ref={form} onSubmit={sendEmail} className="bg-gray-900 border border-gray-700 hover:border-amber-500 hover:border-2 hover:-translate-y-2 hover:shadow-2xl transition duration-300 p-8 rounded-2xl shadow-lg lg:w-1/2">
                    <h1 className="text-white text-2xl font-bold text-center mb-6">Request a Qoute </h1>
                    <input type="text" name="user_name" placeholder="Your Name" className="text-white w-full border p-3 mb-4 rounded-lg" required />
                    <input type="email" name="user_email" placeholder="Your Email" className="text-white w-full border p-3 mb-4 rounded-lg" required />
                    <input type="text" name="Subject" placeholder="Subject" className="text-white w-full border p-3 mb-4 rounded-lg" required />
                    <textarea name="message" placeholder="Your Message" className="text-white w-full border p-3 mb-4 rounded-lg h-32" required ></textarea>
                    <button type="submit" className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-3 rounded-lg"> Send Message </button>
                </form>
                <div className="lg:mx-auto lg:max-w-sm md:px-auto py-4 md:py-8 lg:py-16 grid lg:grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="h-auto w-full bg-gray-900 border border-gray-700 hover:border-amber-500 hover:-translate-y-2 hover:shadow-2xl transition duration-300 rounded-2xl">
                        <div className="flex justify-center mt-1">
                            <CallIcon sx={{ fontSize: 70 }} className="text-amber-400" />
                        </div>
                        <h1 className="text-white text-2xl text-center font-semibold pt-3">Call Us</h1>
                        <h1 className="text-gray-300 pb-4 text-center font-semibold pt-2">+92 300 1234567</h1>
                    </div>
                    <div className="h-auto w-full bg-gray-900 border border-gray-700 hover:border-amber-500 hover:-translate-y-2 hover:shadow-2xl transition duration-300 rounded-2xl">
                        <div className="flex justify-center mt-1">
                            <Email sx={{ fontSize: 70 }} className="text-amber-400" />
                        </div>
                        <h1 className="text-white text-2xl text-center font-semibold pt-3">Email</h1>
                        <h1 className="text-gray-300 pb-4 text-center font-semibold pt-2">info@primeproperties.com</h1>
                    </div>
                    <div className="h-auto w-full px-4 bg-gray-900 border border-gray-700 hover:border-amber-500  hover:-translate-y-2 hover:shadow-2xl transition duration-300 rounded-2xl">
                        <div className="flex justify-center mt-1">
                            <LocationOnIcon sx={{ fontSize: 70 }} className="text-amber-400" />
                        </div>
                        <h1 className="text-white text-2xl text-center font-semibold pt-3">Location</h1>
                        <h1 className="text-gray-300 pb-4 text-center font-semibold pt-2 px-20">123 Main Street, Karachi</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;