import React, { useState } from "react";
import Sidebar from "@/Components/ui/Sidebar";

// Dummy data for users and messages
const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    // Add more users as needed
];

const Chat: React.FC = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

    const handleUserSelect = (userId: number) => {
        setSelectedUserId(userId);
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <Sidebar />
            <div className="container mx-auto px-4 py-8 lg:ml-40">
                <h2 className="text-2xl font-bold mb-4">Chat</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Users</h3>
                        <ul className="space-y-2">
                            {users.map((user) => (
                                <li
                                    key={user.id}
                                    onClick={() => handleUserSelect(user.id)}
                                    className="cursor-pointer hover:bg-gray-200 p-2 rounded-md"
                                >
                                    {user.name}
                                </li>
                            ))}
                        </ul>
                        {selectedUserId === null && (
                            <div className="text-center mt-4">
                                <p>Select a user to start chatting.</p>
                            </div>
                        )}
                    </div>
                    <div>
                        {selectedUserId !== null && (
                            <h3 className="text-lg font-semibold mb-2">Messages for User {selectedUserId}</h3>
                        )}
                        {/* Render chat messages here when a user is selected */}
                        {/* For now, display a placeholder */}
                        {selectedUserId !== null ? (
                            <div className="p-4 bg-gray-200 rounded-md">
                                <p>Chat messages for User {selectedUserId} will be displayed here.</p>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;