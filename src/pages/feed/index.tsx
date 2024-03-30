import React from "react";
import Sidebar from "@/Components/ui/Sidebar";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import { RiAddCircleLine } from "react-icons/ri"; // Import plus icon

const StorySection: React.FC = () => {
    // Define your user's story data here
    const userStory = { imageUrl: "URL_OF_USER_STORY_IMAGE" }; // Replace URL_OF_USER_STORY_IMAGE with the URL of the user's story image
    // const userStory = '';

    // Define other stories data here
    const stories = [
        { id: 1, imageUrl: "URL_OF_OTHER_STORY_IMAGE" },
        { id: 2, imageUrl: "URL_OF_OTHER_STORY_IMAGE" },
    ];

    return (
        <div className="px-4 py-2">
            <div className="flex space-x-4 overflow-x-auto">
                {/* Display user's story */}
                {userStory ? (
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <img src={userStory.imageUrl} alt="User Story" className="w-16 h-16 rounded-full" />
                            {/* Outline for story */}
                            <div className="absolute inset-0 rounded-full border-2 border-blue-500 pointer-events-none"></div>
                        </div>
                    </div>
                ) : (
                    // If no user story, display a button with a plus icon
                    <button className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white">
                        <RiAddCircleLine className="w-10 h-10" /> 
                    </button>
                )}
                {/* Display other stories */}
                {stories.map((story) => (
                    <div key={story.id} className="flex-shrink-0">
                        <div className="relative">
                            <img src={story.imageUrl} alt="Story" className="w-16 h-16 rounded-full" />
                            {/* Outline for story */}
                            <div className="absolute inset-0 rounded-full border-2 border-customOutline pointer-events-none"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Feed: React.FC = () => {
    const posts = [
        { id: 1, title: "Post 1", body: "Body of post 1", imageUrl: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png", caption: "Caption 1" },
        { id: 2, title: "Post 2", body: "Body of post 2", imageUrl: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png", caption: "Caption 2" },
        { id: 3, title: "Post 3", body: "Body of post 3", imageUrl: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png", caption: "Caption 3" },
        { id: 4, title: "Post 4", body: "Body of post 4", imageUrl: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png", caption: "Caption 4" },
        { id: 5, title: "Post 5", body: "Body of post 5", imageUrl: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png", caption: "Caption 5" },
        { id: 6, title: "Post 6", body: "Body of post 6", imageUrl: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png", caption: "Caption 6" },
    ];

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 overflow-auto ml-40">
                <StorySection />
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {posts.map((post) => (
                            <div key={post.id} className="border border-gray-300 p-4 rounded relative">
                                {/* Follow button */}
                                <button className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">
                                    Follow
                                </button>
                                {/* Post content */}
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="p-3">username</h3>
                                    {/* You can adjust the spacing as needed */}
                                </div>
                                <img src={post.imageUrl} alt={post.title} className="w-full mb-2 rounded-md" />
                                <p className="text-gray-500">{post.caption}</p>
                                <div className="flex justify-between mt-4">
                                    <button className="flex items-center space-x-2 text-gray-600">
                                        <FaHeart />
                                        <span>Like</span>
                                    </button>
                                    <button className="flex items-center space-x-2 text-gray-600">
                                        <FaComment />
                                        <span>Comment</span>
                                    </button>
                                    <button className="flex items-center space-x-2 text-gray-600">
                                        <HiShare />
                                        <span>Share</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;