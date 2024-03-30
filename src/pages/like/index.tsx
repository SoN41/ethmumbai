import React from "react";
import Sidebar from "@/Components/ui/Sidebar";

// Dummy user icon component
const UserIcon: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <img src={src} alt={alt} className="w-8 h-8 rounded-full mr-2" />
);

const Like: React.FC = () => {
    // Dummy activity data
    const activities = [
        { id: 1, user: "User 1", userIcon: "user1.jpg", action: "liked your post", post: "Post 1" },
        { id: 2, user: "User 2", userIcon: "user2.jpg", action: "liked your post", post: "Post 2" },
        { id: 3, user: "User 3", userIcon: "user3.jpg", action: "commented on your post", post: "Post 3" },
        { id: 4, user: "User 4", userIcon: "user4.jpg", action: "liked your post", post: "Post 4" },
        { id: 5, user: "User 5", userIcon: "user5.jpg", action: "shared your post", post: "Post 5" },
        { id: 6, user: "User 6", userIcon: "user6.jpg", action: "liked your post", post: "Post 6" },
    ];

    return (
        <div className="flex flex-col lg:flex-row">
            <Sidebar />
            <div className="container mx-auto px-4 py-8 lg:ml-40">
                <h2 className="text-2xl font-bold mb-4">Activity</h2>
                <div className="space-y-4">
                    {activities.map((activity) => (
                        <div key={activity.id} className="flex items-center bg-white p-4 rounded-md shadow-md">
                            <UserIcon src={activity.userIcon} alt={`${activity.user}'s icon`} />
                            <p className="text-gray-600">
                                <span className="font-bold">{activity.user}</span> {activity.action} {activity.post}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Like;
