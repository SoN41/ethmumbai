import Sidebar from "@/Components/ui/Sidebar";
import React from "react";

const User: React.FC = () => {
    return (
        <div>
            <Sidebar />
            <div className="container mx-auto px-4 py-8 ml-40">
                <h2 className="text-2xl font-bold mb-4">Search</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    this is user
                </div>
            </div>
        </div>
    );
};

export default User;