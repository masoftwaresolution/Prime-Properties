import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Phone, X } from "lucide-react";

function PropertyCard({ image, title, price, description }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="group relative w-full h-auto overflow-hidden cursor-pointer rounded-xl">
            <img src={image} alt={title} className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/90 transition-all duration-500 lg:opacity-0 lg:group-hover:opacity-100"></div>
            <div className="absolute inset-5 rounded-sm border border-white/80"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8">
                <h2 className="text-4xl font-bold mb-3 lg:opacity-0 lg:group-hover:opacity-100"> {title}</h2>
                <div className=" mt-6 flex justify-center lg:opacity-0 translate-y-4 lg:group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ">
                    <button onClick={() => setShowModal(true)} className="w-14 h-14 rounded-full border-2 border-white hidden md:hidden lg:flex lg:items-center lg:justify-center hover:bg-white hover:text-black transition" >
                        <ArrowRight size={24} />
                    </button>
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex md:flex lg:hidden w-full px-4 bg-amber-500 hover:bg-amber-400 text-black py-3 rounded-lg font-semibold"
                    >
                        View Details
                    </button>
                </div>

            </div>
            {showModal && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="bg-gray-900 rounded-2xl max-w-2xl w-[90%] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-80 object-cover"
                        />

                        <div className="p-6">
                            <h2 className="text-3xl font-bold text-white">
                                {title}
                            </h2>

                            <p className="text-amber-400 text-2xl font-semibold mt-2">
                                {price}
                            </p>

                            <p className="text-gray-400 mt-4">
                                {description}
                            </p>

                            <div className="flex gap-4">
                                <button onClick={() => window.open("https://wa.me/923277090787", "_blank")} className="mt-6 font-semibold bg-amber-400 hover:bg-amber-500 text-black px-3 lg:px-6 py-3 rounded-lg flex justify-center items-center gap-2">
                                    <Phone size={18} />
                                    Contact Agent
                                </button>

                                <button
                                    onClick={() => setShowModal(false)}
                                    className="mt-6 font-semibold bg-amber-400 hover:bg-amber-500 text-black px-3 lg:px-6 py-3 rounded-lg"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PropertyCard