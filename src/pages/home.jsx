import SearchBar from "../components/SearchBar"
import PropertyCard from "../components/PropertyCard"
import { FaHome, FaBuilding, FaCity, FaHotel, FaHouseUser } from "react-icons/fa";
import FAQ from "../components/FAQ"
import { Link } from "react-router-dom";
import { ShieldCheck, Building2, ClipboardCheck, Headset, Star } from "lucide-react";
function Home() {
    const properties = [
        {
            id: 1,
            title: "Luxury Beachfront Villa",
            price: "$1,250,000",
            image: "/images/house1.jpg", 
            description: "Experience luxury living with breathtaking sea views, private beach access, a spacious swimming pool, and premium interiors."
        },
        {
            id: 2,
            title: "Skyline Penthouse",
            price: "$980,000",
            image: "/images/house2.jpg",
            description: "A modern penthouse featuring panoramic city views, elegant interiors, smart home technology, and rooftop amenities."
        },
        {
            id: 3,
            title: "Palm View Residence",
            price: "$720,000",
            image: "/images/house3.jpg", 
            description: "Beautiful family residence offering spacious living areas, landscaped gardens, secure parking, and a peaceful environment."
        },
        {
            id: 4,
            title: "Modern Townhouse",
            price: "$560,000",
            image: "/images/house6.jpg", 
            description: "Stylish townhouse with open-plan living, premium finishes, private garage, and easy access to schools and shopping centers."
        },
        {
            id: 5,
            title: "Elite Business Office",
            price: "$850,000",
            image: "/images/house8.jpg",
            description: "Premium office space located in the city's business district with modern facilities, meeting rooms, and secure parking."
        },
        {
            id: 6,
            title: "Grand Family House",
            price: "$690,000",
            image: "/images/house10.jpg",
            description: "Elegant family home featuring four spacious bedrooms, a private garden, modern kitchen, and a safe neighborhood."
        },
    ];
    return (
        <div >
            <div className="relative w-full lg:mt-20 h-screen overflow-hidden">
                <video className="absolute top-0 left-0 w-full h-full object-cover" src="/videos/Heropic.mp4" autoPlay loop muted playsInline preload="metadata"></video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
                <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 text-white pt-4">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl lg:text-center text-white font-bold">Find Your Dream Home Today</h1>
                    <p className="text-gray-300 text-large pt-8 text-justify md:text-justify lg:text-center lg:px-40">We help you discover premium homes, apartments, and commercial properties in the most desirable locations. Whether you're buying, selling, or renting, our trusted real estate experts are committed to making your property journey simple, secure, and stress-free.</p>
                    <div className="flex gap-4 mt-6 lg:mx-auto">
                        <Link to="/Properties" className="flex justify-center">
                            <button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-4 rounded-2xl">
                                Explore Properties
                            </button>
                        </Link>
                        <Link to="/Contact" className="flex justify-center">
                            <button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-4 rounded-2xl">
                                Contact Agent
                            </button>
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="py-20 px-6 md:px-12 lg:px-24 bg-slate-950">
                <h1 className="text-center text-3xl md:text-5xl lg:text-7xl font-bold pb-2 text-white">Featured Properties</h1>
                <p className="text-center text-lg pb-6 text-gray-300 ">Discover our handpicked premium properties.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            image={property.image}
                            title={property.title}
                            price={property.price}
                            description={property.description}
                        />
                    ))}
                </div>
            </div>

            <div className="pb-16 pt-8 bg-slate-950">
                <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-bold py-4 text-white">Why Choose Us</h1>
                <p className="text-center text-gray-300">Your trusted partner in buying, renting, and investing.</p>
                <div className="px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                    <div className="h-auto w-auto border border-gray-700 hover:border-amber-500 bg-gray-900 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 px-4 py-6 rounded-2xl">
                        <ShieldCheck className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                        <h1 className="text-3xl font-semibold text-center text-white ">Trusted Agents</h1>
                        <p className="text-center pt-3 text-gray-300">Trusted experts helping you find the perfect property.</p>
                    </div>
                    <div className="h-auto w-auto border border-gray-700 hover:border-amber-500 bg-gray-900 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 px-4 py-6 rounded-2xl">
                        <Building2 className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                        <h1 className="text-3xl font-semibold text-center text-white">Premium Listings</h1>
                        <p className="text-center pt-3 text-gray-300">Explore carefully selected properties in top locations.</p>
                    </div>
                    <div className="h-auto w-auto border border-gray-700 hover:border-amber-500 bg-gray-900 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 px-4 py-6 rounded-2xl">
                        <ClipboardCheck className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                        <h1 className="text-3xl font-semibold text-center text-white">Easy Process</h1>
                        <p className="text-center pt-3 text-gray-300">A smooth and hassle-free buying, renting, and investing experience.</p>
                    </div>
                    <div className="h-auto w-auto border border-gray-700 hover:border-amber-500 bg-gray-900 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 px-4 py-6 rounded-2xl">
                        <Headset className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                        <h1 className="text-3xl font-semibold text-center text-white">24/7 Support</h1>
                        <p className="text-center pt-3 text-gray-300">Our team is always available to assist you whenever you need help.</p>
                    </div>
                </div>
            </div>
            <div className="pb-16 pt-20 px-6 md:px-12 lg:px-24 bg-slate-950">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center text-white">Testimonials</h1>
                <h3 className="text-center pt-2 pb-4 text-gray-300">Hear what our client says</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="h-auto w-auto bg-gray-900 border border-gray-700 hover:border-amber-500 shadow-sm px-6 py-6 rounded-3xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                        <p className="pt-3 text-justify text-gray-300">"I was impressed by the quality of the property listings and the honesty of the agents. They helped me find the perfect investment property within my budget."</p>
                        <div className="flex items-center gap-4 pt-6">
                            <div className="h-16 w-16 bg-gray-500 rounded-full">
                                <img src="/images/T1.jpg" alt="client pic" className="h-full w-full rounded-full" />
                            </div>
                            <div>
                                <h1 className="font-bold text-white">Michael Brown</h1>
                                <h3 className="text-gray-300">Business Owner</h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-3">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-5 h-5 fill-amber-500 text-amber-500"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="h-auto w-auto bg-gray-900 border border-gray-700 hover:border-amber-500 shadow-sm px-6 py-6 rounded-3xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                        <p className="text-justify pt-3 text-gray-300">"The entire experience was smooth from start to finish. The team understood exactly what I was looking for and found the ideal property for my family."</p>
                        <div className="flex items-center gap-4 pt-6">
                            <div className="h-16 w-16 bg-gray-500 rounded-full">
                                <img src="/images/T2.jpg" alt="client pic" className="h-full w-full rounded-full" />
                            </div>
                            <div>
                                <h1 className="font-bold text-white">Emily Davis</h1>
                                <h3 className="text-gray-300">Interior Designer</h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-3">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-5 h-5 fill-amber-500 text-amber-500"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="h-auto w-auto bg-gray-900 border border-gray-700 hover:border-amber-500 shadow-sm px-6 py-6 rounded-3xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                        <p className="text-justify pt-3 text-gray-300">"Excellent customer service and great communication throughout the buying process. I highly recommend Prime Properties to anyone looking for a trusted real estate partner."</p>
                        <div className="flex items-center gap-4 pt-6">
                            <div className="h-16 w-16 bg-gray-500 rounded-full">
                                <img src="/images/T3.jpg" alt="client pic" className="h-full w-full rounded-full" />
                            </div>
                            <div>
                                <h1 className="font-bold text-white">David Wilson</h1>
                                <h3 className="text-gray-300">Financial Consultant</h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-3">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-5 h-5 fill-amber-500 text-amber-500"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="h-auto w-auto bg-gray-900 border border-gray-700 hover:border-amber-500 shadow-sm px-6 py-6 rounded-3xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                        <p className="pt-3 text-justify text-gray-300">"Prime Properties exceeded my expectations. Their professional approach and premium property options made finding my dream home a stress-free experience."</p>
                        <div className="flex items-center gap-4 pt-6">
                            <div className="h-16 w-16 bg-gray-500 rounded-full">
                                <img src="/images/T4.jpg" alt="client pic" className="h-full w-full rounded-full" />
                            </div>
                            <div>
                                <h1 className="font-bold text-white">Jessica Miller</h1>
                                <h3 className="text-gray-300">Marketing Manager</h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-3">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-5 h-5 fill-amber-500 text-amber-500"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="h-auto w-auto bg-gray-900 border border-gray-700 hover:border-amber-500 shadow-sm px-6 py-6 rounded-3xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                        <p className="text-justify pt-3 text-gray-300">"I appreciated their transparency and attention to detail. Every property they showed me matched my requirements, and the entire process was handled efficiently."</p>
                        <div className="flex items-center gap-4 pt-6">
                            <div className="h-16 w-16 bg-gray-500 rounded-full">
                                <img src="/images/T5.jpg" alt="client pic" className="h-full w-full rounded-full" />
                            </div>
                            <div>
                                <h1 className="font-bold text-white">Daniel Anderson</h1>
                                <h3 className="text-gray-300">Architect</h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-3">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-5 h-5 fill-amber-500 text-amber-500"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="h-auto w-auto bg-gray-900 border border-gray-700 hover:border-amber-500 shadow-sm px-6 py-6 rounded-3xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                        <p className="text-justify pt-3 text-gray-300">"The agents were knowledgeable, friendly, and always available to answer my questions. I would definitely recommend Prime Properties to my friends and family."</p>
                        <div className="flex items-center gap-4 pt-6">
                            <div className="h-16 w-16 rounded-full">
                                <img src="/images/T6.jpg" alt="client pic" className="h-full w-full rounded-full" />
                            </div>
                            <div>
                                <h1 className="font-bold text-white">Jhon Carter</h1>
                                <h3 className="text-gray-300">Entrepreneur</h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-3">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-5 h-5 fill-amber-500 text-amber-500"
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className=" bg-slate-900 px-6 md:px-12 lg:px-24 py-32">
                <p className="lg:text-center text-gray-400">Let's get started</p>
                <h1 className="text-white lg:text-center text-3xl md:text-5xl lg:text-7xl font-bold lg:py-3 py-2.5">Ready to find your dream home?</h1>
                <h4 className="text-gray-400 lg:text-center  pb-6 pt-2">Discover premium properties and let us help you make the right investment.</h4>
                <Link to="/Contact" className="bg-yellow-400 hover:bg-yellow-600 rounded-2xl lg:text-center h-12 w-32 flex items-center justify-center lg:mx-auto text-black font-semibold transition duration-300">Contact Us</Link>

            </div>
        </div>
    )
}
export default Home


