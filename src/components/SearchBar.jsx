import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
    const [location, setLocation] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [price, setPrice] = useState(500000);

    const handleSearch = () => {
        console.log({
            location,
            propertyType,
            price,
        });
    };

    return (
        <div className="w-full max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4">
            <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="flex-1 w-full">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Location
                    </label>
                    <select
                        className="w-full border bg-white text-black rounded-2xl px-4 py-3 outline-none"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <option value="">Location</option>
                        <option value="Dubai">Dubai</option>
                        <option value="London">London</option>
                        <option value="New York">New York</option>
                    </select>
                </div>

                {/* Property Type */}
                <div className="flex-1 w-full">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Property Type
                    </label>
                    <select
                        className="w-full border bg-white text-black rounded-2xl px-4 py-3 outline-none"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                    >
                        <option value="">Property Type</option>
                        <option value="House">House</option>
                        <option value="Villa">Villa</option>
                        <option value="Apartment">Apartment</option>
                    </select>
                </div>

                {/* Price */}
                <div className="flex-1 w-full">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Price Range
                    </label>

                    <input
                        type="range"
                        min="50000"
                        max="1000000"
                        step="10000"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full"
                    />

                    <p className="text-sm text-gray-600 mt-1">
                        ${Number(price).toLocaleString()}
                    </p>
                </div>

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className="bg-teal-600 hover:bg-teal-800 text-white px-8 py-4 rounded-full flex items-center gap-2 font-semibold"
                >
                    <Search size={18} />
                    Search
                </button>

            </div>
        </div>
    );
}