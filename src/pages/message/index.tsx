import React, { useState } from "react";
import Sidebar from "@/Components/ui/Sidebar";
import { FaPaperPlane } from "react-icons/fa"; // Import the send icon from FontAwesome

const users = [
    { id: 1, name: "User 1", avatar: "url_to_avatar", messages: [] },
    { id: 2, name: "User 2", avatar: "url_to_avatar", messages: [] },
    { id: 3, name: "User 3", avatar: "url_to_avatar", messages: [] },
];

const Chat: React.FC = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [messageInput, setMessageInput] = useState("");
    const [messages, setMessages] = useState<{ [userId: number]: string[] }>({});

    const handleUserSelect = (userId: number) => {
        setSelectedUserId(userId);
    };

    const handleMessageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessageInput(event.target.value);
    };

    const sendMessage = () => {
        if (selectedUserId !== null && messageInput.trim() !== "") {
            const newMessage = messageInput.trim();
            setMessages((prevMessages) => ({
                ...prevMessages,
                [selectedUserId]: [...(prevMessages[selectedUserId] || []), newMessage],
            }));
            setMessageInput(""); // Clear input after sending message
        }
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <Sidebar />
            <div className="container mx-auto px-4 lg:ml-40 flex-grow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-screen">
                    <div className="lg:col-span-1 bg-white rounded-lg shadow-md overflow-hidden">
                        <h3 className="text-xl font-semibold mb-4 bg-gray-100 py-3 px-4">Users</h3>
                        <ul className="space-y-3">
                            {users.map((user) => (
                                <li
                                    key={user.id}
                                    onClick={() => handleUserSelect(user.id)}
                                    className={`cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition-colors duration-300 ${
                                        selectedUserId === user.id ? "bg-blue-100" : ""
                                    }`}
                                >
                                    {user.name}
                                </li>
                            ))}
                        </ul>
                        {selectedUserId === null && (
                            <div className="text-center mt-6 text-gray-500">
                                Select a user to start chatting.
                            </div>
                        )}
                    </div>
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                        {selectedUserId !== null && (
                            <>
                                <h3 className="text-xl font-semibold mb-4 bg-gray-100 py-3 px-4">Messages for User {selectedUserId}</h3>
                                <div className="flex-grow p-6">
                                    {messages[selectedUserId]?.map((message, index) => (
                                        <div key={index} className="flex mb-4">
                                            <img src={users[selectedUserId - 1].avatar} alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
                                            <div>
                                                <div className="flex items-center mb-1">
                                                    <span className="font-semibold mr-2">{users[selectedUserId - 1].name}</span>
                                                    <span className="text-gray-500 text-sm">Just now</span>
                                                </div>
                                                <div>{message}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 bg-gray-100 relative">
                                    <input
                                        type="text"
                                        value={messageInput}
                                        onChange={handleMessageInputChange}
                                        placeholder="Type your message..."
                                        className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                                    />
                                    <button
                                        onClick={sendMessage}
                                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                    >
                                        <FaPaperPlane />
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
