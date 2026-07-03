import { useState } from "react";

function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);

    return (<div className="bg-gray-900 border border-gray-700 hover:border-amber-500 shadow-lg rounded-xl p-5">
        <button
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between items-center"
        > <h3 className="text-lg font-semibold text-left text-white">
                {question} </h3>


            <span className="text-2xl text-white">
                {open ? "-" : "+"}
            </span>
        </button>

        {open && (
            <p className="mt-4 text-gray-300">
                {answer}
            </p>
        )}
    </div>


    );
}

export default FAQItem;
