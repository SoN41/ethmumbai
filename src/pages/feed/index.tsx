/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Sidebar from "@/Components/ui/Sidebar";
import { FaHeart, FaComment } from "react-icons/fa";
import { HiShare, HiOutlineHeart } from "react-icons/hi";
import { RiAddCircleLine } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

// StorySection component displaying user stories
const StorySection: React.FC = () => {
    const userStory = { imageUrl: "URL_OF_USER_STORY_IMAGE" }; // Placeholder for user story image URL
    const stories = [
        { id: 1, imageUrl: "URL_OF_OTHER_STORY_IMAGE" },
        { id: 2, imageUrl: "URL_OF_OTHER_STORY_IMAGE" },
    ];

    return (
        <div className="px-4 py-2 border-gray-600">
            <div className="flex space-x-4 overflow-x-auto">
                {userStory ? (
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <img src={userStory.imageUrl} alt="User Story" className="w-16 h-16 rounded-full border-2 border-blue-500" />
                            <div className="absolute inset-0 rounded-full border-2 border-blue-500 pointer-events-none"></div>
                        </div>
                    </div>
                ) : (
                    <button className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white">
                        <RiAddCircleLine className="w-10 h-10" />
                    </button>
                )}
                {stories.map((story) => (
                    <div key={story.id} className="flex-shrink-0">
                        <div className="relative">
                            <img src={story.imageUrl} alt="Story" className="w-16 h-16 rounded-full border-2 border-gray-300" />
                            <div className="absolute inset-0 rounded-full border-2 border-customOutline pointer-events-none"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


// Feed component displaying posts
const Feed: React.FC = () => {
    // State to manage posts
    const [posts, setPosts] = useState([
        { id: 1, title: "Post 1", body: "Body of post 1", imageUrl: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", caption: "Caption 1", liked: false, likesCount: 0, comments: [], following: false },
        { id: 2, title: "Post 1", body: "Body of post 1", imageUrl: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", caption: "Caption 1", liked: false, likesCount: 0, comments: [], following: false },
        { id: 3, title: "Post 1", body: "Body of post 1", imageUrl: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", caption: "Caption 1", liked: false, likesCount: 0, comments: [], following: false },
        { id: 4, title: "Post 1", body: "Body of post 1", imageUrl: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", caption: "Caption 1", liked: false, likesCount: 0, comments: [], following: false },
        { id: 5, title: "Post 1", body: "Body of post 1", imageUrl: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", caption: "Caption 1", liked: false, likesCount: 0, comments: [], following: false },
        { id: 6, title: "Post 1", body: "Body of post 1", imageUrl: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", caption: "Caption 1", liked: false, likesCount: 0, comments: [], following: false },
        // Add more posts here if needed
    ]);

    // State to manage comment inputs for each post
    const [commentInputs, setCommentInputs] = useState<{ [postId: number]: string }>({});

    // State to manage comment visibility for each post
    const [commentVisibility, setCommentVisibility] = useState<{ [postId: number]: boolean }>({});

    // Function to handle like button click
    const handleLikeClick = (postId: number) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) => {
                if (post.id === postId) {
                    // Toggle the liked status
                    return { ...post, liked: !post.liked, likesCount: post.liked ? post.likesCount - 1 : post.likesCount + 1 };
                }
                return post;
            })
        );
    };

// Function to handle follow button click
const handleFollowButtonClick = (postId: number) => {
    setPosts((prevPosts) =>
        prevPosts.map((post) => {
            if (post.id === postId) {
                // Toggle the following status
                const updatedPost = { ...post, following: !post.following };
                if (updatedPost.following) {
                    toast.success('following');
                } else {
                    toast.error('unfollowed');
                }
                return updatedPost;
            }
            return post;
        })
    );
};


    // Function to handle comment button click
    const handleCommentButtonClick = (postId: number) => {
        setCommentVisibility((prevVisibility) => ({ ...prevVisibility, [postId]: !prevVisibility[postId] }));
    };
    // Function to handle adding a comment
    const handleAddComment = (postId: number) => {
        if (!commentInputs[postId]) return; // Prevent adding empty comments
        setPosts((prevPosts): any =>
            prevPosts.map((post) => {
                if (post.id === postId) {
                    // Add the new comment to the post
                    return { ...post, comments: [...post.comments, commentInputs[postId]] };
                }
                return post;
            })
        );
        setCommentInputs((prevInputs) => ({ ...prevInputs, [postId]: "" })); // Clear comment input after adding comment
    };

    // Function to handle comment input change
    const handleCommentInputChange = (postId: number, event: React.ChangeEvent<HTMLInputElement>) => {
        setCommentInputs((prevInputs) => ({ ...prevInputs, [postId]: event.target.value }));
    };

    // Function to handle share button click
    // const handleShareButtonClick = (post: any) => {
    //     navigator.clipboard.writeText(post.caption)
    //         .then(() => alert('Post caption copied to clipboard!'))
    //         .catch((error) => console.error('Failed to copy: ', error));
    // };
    const handleShareButtonClick = (post: any) => {
        navigator.clipboard.writeText(post.id)
            .then(() => toast.success('Post link copied to clipboard!'))
            .catch((error) => {
                console.error('Failed to copy: ', error);
                toast.error('Failed to copy post caption!');
            });
    };

    return (
        <div className="flex">
            <hr className=" pt-4" />
            <Sidebar />
            <div className="flex-1 overflow-auto ml-40">
                <StorySection />
                <hr className="mt-4 mb-4 border-t border-gray-600 w-full" />
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {posts.map((post) => (
                            <div key={post.id} className="border border-gray-300 p-4 rounded relative bg-gray-100">
                                {/* Follow button */}
                                <button className={`absolute top-6 right-2 px-2 py-1 rounded w-20 h-8 ${post.following ? 'bg-gray-100 text-black border border-black' : 'bg-blue-500'} text-black`} onClick={() => handleFollowButtonClick(post.id)}>
                                    {post.following ? 'Following' : 'Follow'}
                                </button>
                                {/* Post content */}
                                <div className="flex items-center mb-2">
                                    <img src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' alt="User Peofile" className="w-8 h-8 rounded-full border-2 border-black" />
                                    <h3 className="p-3">username</h3>
                                    {/* You can adjust the spacing as needed */}
                                </div>
                                <img src={post.imageUrl} alt={post.title} className="w-full mb-2 rounded-md" />
                                <p className="text-gray-500">{post.caption}</p>
                                <div className="flex justify-between mt-4">
                                    {/* Like button */}
                                    <button className="flex items-center space-x-2 text-gray-600" onClick={() => handleLikeClick(post.id)}>
                                        {post.liked ? <HiOutlineHeart color="red" /> : <FaHeart />}
                                        {post.likesCount > 0 ? (
                                            <span>{post.likesCount} Likes</span>
                                        ) : (
                                            <span>Like</span>
                                        )}
                                    </button>

                                    {/* Comment button */}
                                    <button className="flex items-center space-x-2 text-gray-600" onClick={() => handleCommentButtonClick(post.id)}>
                                        <FaComment />
                                        <span>Comment</span>
                                    </button>
                                    {/* Share button */}
                                    <button className="flex items-center space-x-2 text-gray-600" onClick={() => handleShareButtonClick(post)}>
                                        <HiShare />
                                        <span>Share</span>
                                    </button>
                                </div>
                                {/* Comment input and button */}
                                {commentVisibility[post.id] && (
                                    <div className="flex mt-4">
                                        <input
                                            type="text"
                                            placeholder="Add a comment..."
                                            className="flex-1 border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                                            value={commentInputs[post.id] || ""}
                                            onChange={(e) => handleCommentInputChange(post.id, e)}
                                        />
                                        <button
                                            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                            onClick={() => handleAddComment(post.id)}
                                        >
                                            Post
                                        </button>
                                    </div>
                                )}
                                {/* Render comments */}
                                <div className="mt-2">
                                    {post.comments.length > 0 && (
                                        <>
                                            <div className="flex items-center py-1">
                                                <div className="w-8 h-8 rounded-full bg-gray-200"> user </div>
                                                <div className="ml-2 text-gray-600">{post.comments[0]}</div>
                                            </div>
                                            {post.comments.length > 1 && !commentVisibility[post.id] && (
                                                <button
                                                    className="ml-2 text-gray-600 underline focus:outline-none"
                                                    onClick={() => handleCommentButtonClick(post.id)}
                                                >
                                                    Show more comments
                                                </button>
                                            )}
                                            {commentVisibility[post.id] && (
                                                <>
                                                    {post.comments.slice(1).map((comment, index) => (
                                                        <div key={index} className="flex items-center py-1">
                                                            <div className="w-8 h-8 rounded-full bg-gray-200"> user </div>
                                                            <div className="ml-2 text-gray-600">{comment}</div>
                                                        </div>
                                                    ))}
                                                </>
                                            )}
                                        </>
                                    )}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Toaster position="bottom-left" />
        </div>
    );
};

export default Feed;
