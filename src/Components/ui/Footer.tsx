import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-300 fixed bottom-0 w-full z-10">
            <div className="container mx-auto px-4 flex justify-center items-center h-10">
                <p className="text-gray-600 text-sm">© 2024 Your App Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;