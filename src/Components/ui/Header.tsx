import React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-white border-b border-gray-300 fixed w-full z-10">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                    <img
                        className="h-12"
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        alt="Instagram"
                    />
                </div>
                <div className="hidden md:flex items-center justify-center flex-grow">
                    <input
                        type="text"
                        placeholder="Search"
                        className="py-2 px-4 bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-md text-sm"
                    />
                </div>
                <div className="flex items-center">
                    <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm">
                        Log In
                    </button>
                    <button className="ml-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 14a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 21v-2a4 4 0 014-4h0a1 1 0 011-1h6a1 1 0 011 1h0a4 4 0 014 4v2"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
