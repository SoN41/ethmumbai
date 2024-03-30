import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "@/Components/ui/Sidebar";

const ProfilePage: React.FC = () => {
    const [userData, setUserData] = useState<any>(null); // State to store user data

    useEffect(() => {
        // Fetch user data from backend API
        const fetchUserData = async () => {
            try {
                const response = await axios.get("/api/user"); // Replace "/api/user" with your backend endpoint
                setUserData(response.data); // Set user data in state
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData(); // Call the fetchUserData function when the component mounts
    }, []);
    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <Sidebar />
            <div className="container mx-auto px-4 lg:ml-40 flex-grow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-screen">
                    <div className="lg:col-span-1 bg-white rounded-lg shadow-md overflow-hidden w-full">
                        <h3 className="text-xl font-semibold mb-4 bg-gray-100 py-3 px-4">user name</h3>
                        {userData ? (
                            <div>
                                <div className="flex items-center mb-4">
                                    <img src={userData.profilePicture} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
                                    <div>
                                        <h2 className="text-2xl font-bold">{userData.name}</h2>
                                        <p className="text-gray-500">{userData.email}</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Bio</h3>
                                    <p>{userData.bio}</p>
                                </div>
                                {/* Add more sections for other user details */}
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;