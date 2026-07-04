import { useState } from "react";
import { Link } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import { Users, Target, Trophy, Star, MapPin, Headset, TrendingUp, Handshake, ShieldCheck, Clock3, House, } from "lucide-react";
function Team() {
    const [category, setCategory] = useState("All");
    return (
        <div>
            <div className="relative w-full h-[50vh] lg:mt-20 overflow-hidden">
                <video className="absolute top-0 left-0 w-full h-full object-cover" src="/videos/Heropic.mp4" autoPlay loop muted playsInline preload="metadata"></video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
                <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 text-white pt-4">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl text-center text-white font-semibold">Find Your Dream Home Today</h1>
                    <p className="text-gray-300 text-center text-large pt-4">Explore premium properties in top locations and make your dream a reality.</p>
                </div>
            </div>
            <section className="bg-slate-950 py-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
                        <div>
                            <span className="text-amber-500 font-semibold uppercase tracking-widest"> Our Agents </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight"> Expert Agents. <br />
                                <span className="text-amber-500"> Better Results. </span>
                            </h2>
                        </div>
                        <div>
                            <p className="text-gray-400 leading-8 text-lg text-justify"> Our experienced real estate agents are committed to helping you buy, sell, and invest with complete confidence. We combine local market knowledge with personalized service to deliver the best possible results for every client. </p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <img src="/images/house1.jpg" alt="Team" className="rounded-3xl w-full h-full object-cover" />
                        </div>
                        <div className="grid gap-6">
                            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-amber-500 duration-300">
                                <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center mb-5">
                                    <Target className="text-amber-500" />
                                </div>
                                <h3 className="text-2xl text-white font-bold mb-3"> Your Goals,
                                    <span className="text-amber-500"> {" "}Our Priority </span>
                                </h3>
                                <p className="text-gray-400 leading-7 text-justify"> We understand your needs and guide you through every step to help you find the perfect property. </p>
                                <button className="mt-6 text-amber-500 font-semibold hover:translate-x-2 duration-300"> Learn More → </button>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700 text-center hover:border-amber-500 duration-300">
                                    <Users size={40} className="mx-auto text-amber-500 mb-4" />
                                    <h2 className="text-white text-4xl font-bold"> 150+ </h2>
                                    <p className="text-gray-400 mt-2"> Expert Agents </p>
                                </div>
                                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700 text-center hover:border-amber-500 duration-300">
                                    <Trophy size={40} className="mx-auto text-amber-500 mb-4" />
                                    <h2 className="text-white text-4xl font-bold"> 500+ </h2>
                                    <p className="text-gray-400 mt-2"> Happy Clients </p>
                                </div>
                            </div>
                            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-amber-500 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center mb-5">
                                    <TrendingUp className="text-amber-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3"> Experience You
                                    <span className="text-amber-500"> Can Trust</span>
                                </h3>
                                <p className="text-gray-400 leading-7 text-justify"> With years of experience in the real estate market, our agents provide expert advice, local knowledge, and personalized service to help you make confident property decisions. </p>
                                <button className="mt-6 text-amber-500 font-semibold hover:translate-x-2 transition-all duration-300"> Learn More → </button>
                            </div>
                            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-amber-500 hover:-translate-y-2 transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center">
                                        <TrendingUp className="text-amber-500" />
                                    </div>
                                    <div>
                                        <h2 className="text-4xl font-bold text-white"> $250M+ </h2>
                                        <p className="text-gray-400"> Total Property Sales </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 bg-gray-900 rounded-3xl border border-gray-700 p-10">
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <span className="text-amber-500 uppercase tracking-widest font-semibold"> Why Choose Us </span>
                                <h2 className="text-4xl font-bold text-white mt-4 leading-tight"> Let's Build Your
                                    <span className="text-amber-500"> Real Estate Success</span>
                                </h2>
                                <p className="text-gray-400 mt-5 leading-8 text-justify"> Whether you're buying, selling, or investing, our experienced agents provide expert guidance and personalized solutions to help you achieve your property goals. </p>
                                <Link to="/Contact" >
                                    <button className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded-xl mt-8">
                                        Contact Our Team
                                    </button>
                                </Link> 
                            </div>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div className="bg-[#0B1120] p-6 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300">
                                    <MapPin className="text-amber-500 mb-4" size={32} />
                                    <h3 className="text-white font-bold text-lg"> Local Expertise </h3>
                                    <p className="text-gray-400 mt-2 text-sm"> Deep knowledge of local markets and property trends. </p>
                                </div>
                                <div className="bg-[#0B1120] p-6 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300">
                                    <ShieldCheck className="text-amber-500 mb-4" size={32} />
                                    <h3 className="text-white font-bold text-lg"> Trusted Advisors </h3>
                                    <p className="text-gray-400 mt-2 text-sm"> Honest guidance and transparent communication. </p>
                                </div>
                                <div className="bg-[#0B1120] p-6 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300">
                                    <Headset className="text-amber-500 mb-4" size={32} />
                                    <h3 className="text-white font-bold text-lg"> 24/7 Support </h3>
                                    <p className="text-gray-400 mt-2 text-sm">  support whenever you need assistance. </p>
                                </div>
                                <div className="bg-[#0B1120] p-6 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300">
                                    <House className="text-amber-500 mb-4" size={32} />
                                    <h3 className="text-white font-bold text-lg"> Premium Listings </h3>
                                    <p className="text-gray-400 mt-2 text-sm"> Access to exclusive and high-quality properties. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-12 pt-8 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-amber-500 uppercase tracking-[4px] font-semibold"> Meet Our Team </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4"> Meet Our Professional
                        <span className="text-amber-500"> Real Estate Team</span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8"> Our experienced real estate professionals are dedicated to helping you buy, sell, and invest with confidence. With extensive market knowledge and a commitment to exceptional service, we're here to guide you through every step of your real estate journey. </p>
                </div>
            </section>
            <section className=" bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center">
                            <img src="/images/Ceo.jpg" alt="CEO" className="w-full max-w-md rounded-3xl shadow-2xl object-cover h-[80vh] border border-gray-700 hover:border-amber-500" />
                        </div>
                        <div>
                            <span className="text-amber-500 uppercase tracking-[4px] font-semibold"> Leadership </span>
                            <h2 className="text-4xl font-bold text-white lg:mt-4">  Our
                                <span className="text-amber-500"> CEO</span>
                            </h2>
                            <h3 className="text-2xl font-semibold mt-2 lg:mt-8 text-white"> John Carter </h3>
                            <p className="text-amber-500 font-medium lg:mt-2"> Chief Executive Officer </p>
                            <p className="text-gray-400 leading-8 lg:mt-6 text-justify lg:pr-24"> "Our mission is simple, to help every client find the perfect property with confidence. We believe in honesty, transparency, and building long-term relationships through exceptional real estate services." </p>
                            <p className="text-gray-400 leading-8 lg:mt-6 text-justify lg:pr-24"> With years of industry experience, John has led Prime Properties to become a trusted name in real estate by focusing on customer satisfaction, innovation, and premium property solutions. </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-950 py-20 px-6 ">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-gray-900 border border-gray-700 hover:border-amber-500 rounded-3xl overflow-hidden hover:-translate-y-2">
                        <img src="/images/A1.jpg" alt="CEO" className="w-full h-80 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="text-white text-xl font-bold"> Sarah Wilson </h3>
                            <p className="text-amber-500 mt-2"> Senior Property Consultant </p>
                        </div>
                    </div>
                    <div className="bg-gray-900 rounded-3xl overflow-hidden hover:-translate-y-2 border border-gray-700 hover:border-amber-500">
                        <img src="/images/A2.jpg" alt="CEO" className="w-full h-80 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="text-white text-xl font-bold"> Michael Brown </h3>
                            <p className="text-amber-500 mt-2"> Sales Manager </p>
                        </div>
                    </div>
                    <div className="bg-gray-900 rounded-3xl overflow-hidden hover:-translate-y-2 border border-gray-700 hover:border-amber-500">
                        <img src="/images/A3.jpg" alt="CEO" className="w-full h-80 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="text-white text-xl font-bold"> Emily Davis </h3>
                            <p className="text-amber-500 mt-2"> Luxury Property Specialist </p>
                        </div>
                    </div>
                    <div className="bg-gray-900 rounded-3xl overflow-hidden hover:-translate-y-2 border border-gray-700 hover:border-amber-500">
                        <img src="/images/A4.jpg" alt="CEO" className="w-full h-80 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="text-white text-xl font-bold"> David Anderson </h3>
                            <p className="text-amber-500 mt-2"> Investment Advisor </p>
                        </div>
                    </div>
                    <div className="bg-gray-900 rounded-3xl overflow-hidden hover:-translate-y-2 border border-gray-700 hover:border-amber-500">
                        <img src="/images/A5.jpg" alt="CEO" className="w-full h-80 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="text-white text-xl font-bold"> Jessica Miller </h3>
                            <p className="text-amber-500 mt-2"> Client Relations Manager </p>
                        </div>
                    </div>
                    <div className="bg-gray-900 rounded-3xl overflow-hidden hover:-translate-y-2 border border-gray-700 hover:border-amber-500">
                        <img src="/images/A6.jpg" alt="CEO" className="w-full h-80 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="text-white text-xl font-bold"> Daniel Clark </h3>
                            <p className="text-amber-500 mt-2"> Property Consultant </p>
                        </div>
                    </div>
                    <div className="bg-gray-900 rounded-3xl overflow-hidden hover:-translate-y-2 border border-gray-700 hover:border-amber-500">
                        <img src="/images/A7.jpg" alt="CEO" className="w-full h-80 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="text-white text-xl font-bold"> Olivia Martinez </h3>
                            <p className="text-amber-500 mt-2"> Marketing Director </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="px-6 py-32 bg-slate-900">
                <p className="text-center text-gray-400">Let's get started</p>
                <h1 className="text-white text-center text-3xl md:text-5xl lg:text-7xl font-bold lg:py-3 py-2.5">Ready to Find Your Dream Home?</h1>
                <h4 className="text-gray-400 text-center pb-6 pt-2 max-w-2xl mx-auto">Discover premium properties and connect with our experts to find the perfect home for your lifestyle.</h4>
                <Link to="/Contact" className="flex justify-center">
                    <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 font-semibold text-black rounded-xl">
                        Contact Us
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default Team;