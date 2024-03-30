import React, { useState } from "react";
import { IoIosHome } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";

const Header: React.FC = () => {
    const [searchText, setSearchText] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

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
                    <div className="p-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="py-2 px-4 bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-md text-sm"
                            value={searchText}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="p-4">
                        <a href="/feed">
                            <IoIosHome />
                        </a>
                    </div>
                    <div className="p-4">
                        <a href="/upload">
                            <FaPlusCircle />
                        </a>
                    </div>
                    <div className="p-4">
                        <a href="/message">
                            <IoChatbox />
                        </a>
                    </div>
                    <div className="p-4">
                        <a href="/like">
                        < FaHeart />
                        </a>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm">
                        Log Out
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
