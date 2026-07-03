import SearchBar from "../components/SearchBar"
import { FaFacebook, FaHome, FaDollarSign, FaKey, FaBuilding, FaHandshake } from "react-icons/fa";
import FAQ from "../components/FAQ";
function About() {
    return (
        <div>
            <div className="relative w-full h-[50vh] mt-20 overflow-hidden">
                <video className="absolute top-0 left-0 w-full h-full object-cover" src="/videos/Heropic.mp4" autoPlay loop muted></video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
                <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 text-white pt-4">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl w-auto text-white font-semibold lg:text-center">Find Your Dream Home Today</h1>
                    <p className="text-gray-300 text-large pt-4 lg:text-center">Explore premium properties in top locations and make your dream a reality.</p>
                </div>
            </div>
            <div className="px-6 md:px-12 lg:px-24 flex lg:flex-row flex-col-reverse lg:justify-between lg:items-center gap-10 py-20 bg-slate-950">
                <img src="/images/house2.jpg" alt="Luxury House" className="lg:w-1/2 h-[40vh] md:h-[60vh] lg:h-[80vh] border-4 border-gray-700 hover:border-amber-500 shadow-2xl rounded-2xl" />
                <div className="lg:w-1/2">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold pb-4 text-white">Mission </h1>
                    <p className="text-justify text-gray-300">Our mission is to help individuals and families find the perfect property that matches their needs, lifestyle, and budget. We are dedicated to making the buying, selling, and renting process simple, transparent, and stress-free by providing expert guidance and personalized support throughout every stage of the real estate journey.</p>
                    <p className="py-4 text-justify text-gray-300">We believe that trust, honesty, and professionalism are the foundation of every successful relationship. Our goal is to deliver exceptional customer service, clear communication, and reliable market insights, ensuring that every client can make informed decisions with confidence and peace of mind.</p>
                    <p className="text-justify text-gray-300">We strive to create lasting value for our clients and communities by offering innovative real estate solutions and outstanding service. Through modern technology, industry expertise, and a customer-focused approach, we help people achieve their property goals while maintaining the highest standards of excellence and integrity.</p>
                </div>
            </div>
            <div className="px-6 md:px-12 lg:px-24 flex lg:flex-row flex-col lg:justify-between lg:items-center gap-10 pb-16 pt-8 bg-slate-950">
                <div className="lg:w-1/2">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold pb-4 text-white">Vission </h1>
                    <p className="text-justify text-gray-300">Our vision is to become a trusted leader in the real estate industry by helping people discover homes and investment opportunities that improve their quality of life. We aim to create a platform where property decisions are easier, safer, and more rewarding for every client.</p>
                    <p className="py-4 text-justify text-gray-300">We envision a future where real estate services are driven by transparency, innovation, and customer satisfaction. By combining market expertise with modern technology, we strive to deliver a seamless experience that empowers buyers, sellers, and investors to make confident decisions.</p>
                    <p className="text-justify text-gray-300">Our vision is to build strong communities through responsible real estate practices and exceptional service. We are committed to creating long-term value for our clients, supporting sustainable growth, and becoming the first choice for people seeking reliable and professional property solutions.</p>
                </div>
                <img src="/images/house2.jpg" alt="Luxury House" className="lg:w-1/2 h-[40vh] md:h-[60vh] lg:h-[80vh] border-4 border-gray-700 hover:border-amber-500 shadow-2xl rounded-2xl" />
            </div> 
            <div className="pt-16 pb-20 bg-slate-950 px-6 md:px-12 lg:px-24">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold lg:text-center pt-4 pb-4 text-white">Our Services</h1>
                <p className="lg:text-center text-justify text-gray-300">At Ramos Realty, we provide unique housing solutions with a host of highly profitable real estate investment opportunities.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-6 md:px-12 lg:px-24 py-8">
                    <div className="flex flex-col justify-center items-center">
                        <div className="h-32 w-32 hover:-translate-y-2 border-4 border-amber-500 shadow-2xl flex justify-center items-center rounded-full">
                            <FaBuilding className="text-amber-500 text-5xl" />
                        </div>
                        <h1 className="text-xl text-center font-semibold pt-4 text-white">Property Management</h1>
                    </div> 
                    <div className="flex flex-col justify-center items-center">
                        <div className="h-32 w-32 hover:-translate-y-2 border-4 border-amber-500 shadow-2xl flex justify-center items-center rounded-full">
                            <FaHandshake className="text-amber-500 text-5xl" />
                        </div>
                        <h1 className="text-xl text-center font-semibold pt-4 text-white">Property Consultation</h1>
                    </div> 
                    <div className="flex flex-col justify-center items-center">
                        <div className="h-32 w-32 hover:-translate-y-2 border-4 border-amber-500 shadow-2xl flex justify-center items-center rounded-full">
                            <FaHome className="text-amber-500 text-5xl" />
                        </div>
                        <h1 className="text-xl font-semibold pt-4 text-white">Buy Property</h1>
                    </div> 
                    <div className="flex flex-col justify-center items-center">
                        <div className="h-32 w-32 hover:-translate-y-2 border-4 border-amber-500 shadow-2xl flex justify-center items-center rounded-full">
                            <FaDollarSign className="text-amber-500 text-5xl" />
                        </div>
                        <h1 className="text-xl font-semibold pt-4 text-white">Sell Property</h1>
                    </div> 
                    <div className="flex flex-col justify-center items-center">
                        <div className="h-32 w-32 hover:-translate-y-2 border-4 border-amber-500 shadow-2xl flex justify-center items-center rounded-full">
                            <FaKey className="text-amber-500 text-5xl" />
                        </div>
                        <h1 className="text-xl font-semibold pt-4 text-white">Rent Property</h1>
                    </div>  
                </div>
            </div>
            <div>
                <FAQ/>
            </div>
        </div>
    )
}

export default About