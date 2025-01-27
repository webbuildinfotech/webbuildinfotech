import React from 'react';

const ContactBanner = () => {
    return (
        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-b from-blue-100 to-blue-50">
            <img
                src="https://t3.ftcdn.net/jpg/05/89/92/50/360_F_589925063_ecQvtkwNAEnB7Nd9ad3hM7GOP0lae694.jpg"
                alt="contact"
                className="w-full h-full object-cover"
            />
            {/* Overlay for Banner Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-blue-900 bg-opacity-40 text-center text-white px-4">
                <h1 className="text-4xl font-extrabold text-white tracking-tight">
                    Contact <span className="text-blue-600">With Us</span>
                </h1>
            </div>
        </div>
    );
};

export default ContactBanner;
