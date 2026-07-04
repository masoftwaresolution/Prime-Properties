import { useState } from "react"
import FAQ from "../components/FAQ";
import FAQItem from "../components/FAQItem";
import { Link } from "react-router-dom"
import PropertyCard from "../components/PropertyCard";
import { Star } from "lucide-react";
function Properties() {
    const [category, setCategory] = useState("All");
    const properties = [
        {
            id: 1,
            title: "Palm Heights Residences",
            price: "$420,000",
            image: "/images/house1.jpg",
            category: "Off Plan",
            description: " Modern off-plan apartments featuring premium finishes, flexible payment plans, smart home technology, and excellent investment potential."
        },
        {
            id: 2,
            title: "Skyline Grand Tower",
            price: "$510,000",
            image: "/images/house2.jpg",
            category: "Off Plan",
            description: "Luxury off-plan residences in the city center with spacious layouts, rooftop amenities, and attractive early investor pricing."
        },
        {
            id: 3,
            title: "Emerald Bay Apartments",
            price: "$365,000",
            image: "/images/house3.jpg",
            category: "Off Plan",
            description: "Contemporary apartments designed for modern living, offering waterfront views, secure parking, and flexible installment options."
        },
        {
            id: 4,
            title: "Oasis Garden Villas",
            price: "$780,000",
            image: "/images/house5.jpg",
            category: "Off Plan",
            description: "Elegant off-plan villas with private gardens, premium interiors, gated security, and a family-friendly community environment."
        },
        {
            id: 5,
            title: "Horizon Business Plaza",
            price: "$640,000",
            image: "/images/house6.jpg",
            category: "Off Plan",
            description:"Premium off-plan commercial offices located in a prime business district with modern facilities and high rental potential."
        },
        {
            id: 6,
            title: "Crystal Park Residences",
            price: "$455,000",
            image: "/images/house7.jpg",
            category: "Off Plan",
            description: "Stylish off-plan homes featuring green spaces, fitness facilities, children's play areas, and convenient access to schools and shopping."
        },
        {
            id: 7,
            title: "Luxury Family House",
            price: "$650,000",
            image: "/images/house8.jpg",
            category: "Buy",
            description:"A spacious family home featuring modern architecture, private parking, landscaped gardens, and premium-quality finishes."
        },
        {
            id: 8,
            title: "Sunrise Modern Villa",
            price: "$890,000",
            image: "/images/house9.jpg",
            category: "Buy",
            description: "Elegant villa with a private swimming pool, smart home technology, spacious bedrooms, and a peaceful neighborhood."
        },
        {
            id: 9,
            title: "Royal Palm Residence",
            price: "$740,000",
            image: "/images/house10.jpg",
            category: "Buy",
            description: "Premium residential property offering luxury interiors, beautiful balconies, and easy access to schools and shopping centers."
        },
        {
            id: 10,
            title: "Green Valley House",
            price: "$580,000",
            image: "/images/house11.jpg",
            category: "Buy",
            description: "A stylish family house surrounded by green landscapes with secure parking and spacious living areas."
        },
        {
            id: 11,
            title: "Elite Townhouse",
            price: "$690,000",
            image: "/images/house12.jpg",
            category: "Buy",
            description: "Modern townhouse featuring high-end finishes, open-plan living spaces, and a private outdoor terrace."
        },
        {
            id: 12,
            title: "Golden Horizon Villa",
            price: "$950,000",
            image: "/images/house13.jpg",
            category: "Buy",
            description: "Luxury villa with premium amenities, elegant interiors, private garden, and excellent investment value."
        },
        {
            id: 13,
            title: "City View Apartment",
            price: "$2,100 / Month",
            image: "/images/house14.jpg",
            category: "Rent",
            description: "Modern apartment with city skyline views, secure parking, high-speed internet, and 24/7 security."
        },
        {
            id: 14,
            title: "Urban Comfort Studio",
            price: "$1,350 / Month",
            image: "/images/house15.jpg",
            category: "Rent",
            description: "Fully furnished studio apartment located near shopping malls, restaurants, and public transportation."
        },
        {
            id: 15,
            title: "Ocean Breeze Apartment",
            price: "$2,500 / Month",
            image: "/images/house16.jpg",
            category: "Rent",
            description: "Beautiful apartment with sea views, fitness center, swimming pool, and premium community facilities."
        },
        {
            id: 16,
            title: "Downtown Office Suite",
            price: "$3,200 / Month",
            image: "/images/house17.jpg",
            category: "Rent",
            description: "Modern office space located in the business district with conference rooms and private parking."
        },
        {
            id: 17,
            title: "Family Rental Villa",
            price: "$4,100 / Month",
            image: "/images/house18.jpg",
            category: "Rent",
            description: "Spacious rental villa featuring four bedrooms, a private garden, covered parking, and luxury interiors."
        },
        {
            id: 18,
            title: "Parkside Residence",
            price: "$2,300 / Month",
            image: "/images/house19.jpg",
            category: "Rent",
            description: "Comfortable apartment facing a public park with children's play area, gym, and 24-hour security."
        },
        {
            id: 19,
            title: "Skyline Luxury Penthouse",
            price: "$2,850,000",
            image: "/images/house20.jpg",
            category: "Luxury",
            description: "Exclusive penthouse with panoramic city views, private rooftop terrace, luxury interiors, and premium amenities.Elegant villa with a private swimming pool, smart home technology, spacious bedrooms, and a peaceful neighborhood."
        },
        {
            id: 20,
            title: "Royal Beach Villa",
            price: "$3,500,000",
            image: "/images/house21.jpg",
            category: "Luxury",
            description: "Beachfront villa offering private beach access, infinity pool, smart home features, and elegant architecture."
        },
        {
            id: 21,
            title: "Diamond Heights Residence",
            price: "$2,100,000",
            image: "/images/house22.jpg",
            category: "Luxury",
            description: "Luxury residence with spacious living areas, premium imported finishes, concierge service, and private parking."
        },
        {
            id: 22,
            title: "Prestige Palace Villa",
            price: "$4,250,000",
            image: "/images/house23.jpg",
            category: "Luxury",
            description: "A magnificent villa featuring a private cinema, swimming pool, landscaped gardens, and world-class facilities."
        },
        {
            id: 23,
            title: "Imperial Grand Mansion",
            price: "$5,900,000",
            image: "/images/house24.jpg",
            category: "Luxury",
            description: "Ultra-luxury mansion with premium architecture, grand interiors, smart automation, and breathtaking outdoor spaces."
        },
        {
            id: 24,
            title: "Crystal Sky Penthouse",
            price: "$3,100,000",
            image: "/images/house25.jpg",
            category: "Luxury",
            description: "Contemporary penthouse offering floor-to-ceiling windows, private elevator, rooftop lounge, and luxury lifestyle amenities."
        },
    ];
    return (
        <div>
            <div className="relative w-full h-[50vh] lg:mt-20 overflow-hidden">
                <video className="absolute top-0 left-0 w-full h-full object-cover" src="/videos/Heropic.mp4" autoPlay loop muted></video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
                <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 text-white pt-4">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl w-auto text-white font-bold text-center">Find Your Dream Home Today</h1>
                    <p className="text-gray-300 text-large pt-4 text-center">Explore premium properties in top locations and make your dream a reality.</p>
                </div>
            </div>
            <div className="px-6 md:px-12 lg:px-24 py-20 bg-slate-950">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-white text-center">Our Listing Properties</h1>
                <div className="flex gap-2 lg:gap-10 justify-center py-10">
                    <button onClick={() => setCategory("All")} className="h-auto w-auto px-3 py-2 md:px-6 md:py-4 lg:px-6 lg:py-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-black font-semibold">All</button>
                    <button onClick={() => setCategory("Off Plan")} className="h-auto w-auto px-3 py-2 md:px-6 md:py-4 lg:px-6 lg:py-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-black font-semibold">Off Plan</button>
                    <button onClick={() => setCategory("Buy")} className="h-auto w-auto px-3 py-2 md:px-6 md:py-4 lg:px-6 lg:py-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-black font-semibold">Buy</button>
                    <button onClick={() => setCategory("Rent")} className="h-auto w-auto px-3 py-2 md:px-6 md:py-4 lg:px-6 lg:py-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-black font-semibold">Rent</button>
                    <button onClick={() => setCategory("Luxury")} className="h-auto w-auto px-3 py-2 md:px-6 md:py-4 lg:px-6 lg:py-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-black font-semibold">Luxury</button>
                </div>
                <div className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {properties
                            .filter((property) => category === "All" || property.category === category
                            )
                            .map((property) => (
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
            </div>
            <div className="px-6 md:px-12 lg:px-24 pt-12 pb-20 bg-slate-950">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-center text-white">Testimonials</h1>
                <h3 className="text-center pt-4 pb-4 text-gray-300">Hear what our client says</h3>
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
            <div className="bg-gray-50">
                <FAQ />
            </div>
            <div className=" bg-slate-900 px-6 py-32">
                <p className="text-center text-gray-400">Let's get started</p>
                <h1 className="text-white text-center text-3xl md:text-5xl lg:text-7xl font-semibold lg:py-3 py-2.5">Ready to find your dream home?</h1>
                <h4 className="text-gray-400 text-center pb-6 pt-2 max-w-2xl mx-auto">Discover premium properties and let us help you make the right investment.</h4>
                <Link to="/Contact" className="bg-yellow-400 hover:bg-yellow-600 rounded-2xl text-center h-12 w-32 flex items-center justify-center text-black font-semibold mx-auto transition duration-300">Contact Us</Link>

            </div>
        </div>
    )
}

export default Properties