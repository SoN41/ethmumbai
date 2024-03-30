import React from "react";
import { IoIosHome } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Sidebar: React.FC = () => {
    return (
        <div className="bg-gray-200 w-15 px-4 py-8 h-screen fixed top-0 left-0">
            <h3 className="text-xl font-semibold mb-4">Sidebar</h3>
            <div className="p-5">
                <a href="/feed">
                    <IoIosHome />
                </a>
            </div>
            <div className="p-5">
                <a href="/search">
                    <FaSearch />
                </a>
            </div>
            <div className="p-5">
                <a href="/upload">
                    <FaPlusCircle />
                </a>
            </div>
            <div className="p-5">
                <a href="/like">
                    <FaHeart />
                </a>
            </div>
            <div className="p-5">
                <a href="/message">
                    <IoChatbox />
                </a>
            </div>
            <div className="p-5">
                <a href="/user">
                    <FaUser />
                </a>
            </div>
        </div>
    );
};

export default Sidebar;