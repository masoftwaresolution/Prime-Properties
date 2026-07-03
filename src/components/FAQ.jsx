import FAQItem from "./FAQItem";

function FAQ() {
    return (
        <div className="px-6 md:px-12 lg:px-24 py-20 bg-slate-950">
            <h1 className="text-3xl md:text-5xl lg:text-7xl lg:pb-6 font-semibold text-center text-white"> Frequently Asked Questions </h1>
            <div className="mt-10 space-y-6">
                <FAQItem
                    question="How can I find the right property?"
                    answer="Our experienced team helps you find properties that match your budget, preferred location, and lifestyle requirements."
                />

                <FAQItem
                    question="Do you offer rental properties?"
                    answer="Yes, we provide a wide range of rental apartments, villas, townhouses, and commercial properties in prime locations."
                />

                <FAQItem
                    question="What are off-plan properties?"
                    answer="Off-plan properties are homes purchased before construction is completed, often with flexible payment plans and strong investment potential."
                />

                <FAQItem
                    question="Can I schedule a property viewing?"
                    answer="Absolutely! Simply contact our team to arrange a convenient date and time for your property visit."
                />

                <FAQItem
                    question="Do you assist with property financing?"
                    answer="Yes, we work with trusted financial partners to help you explore mortgage and financing options."
                />

                <FAQItem
                    question="Are your property listings verified?"
                    answer="Yes, every property is carefully reviewed and verified to ensure accurate information and a secure buying experience."
                />

                <FAQItem
                    question="Do you help with selling properties?"
                    answer="Yes, we assist property owners with marketing, pricing, and connecting with qualified buyers to achieve the best results."
                />

                <FAQItem
                    question="How do I contact your real estate agents?"
                    answer="You can reach our agents through the Contact Us page, phone, email, or by submitting an inquiry form on our website."
                />

                <FAQItem
                    question="Why should I choose your real estate services?"
                    answer="We offer verified listings, experienced agents, transparent processes, personalized support, and exceptional customer service from start to finish."
                />
            </div>
        </div>

    );
}

export default FAQ;
