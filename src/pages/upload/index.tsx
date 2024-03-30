import React, { useState } from "react";
import Sidebar from "@/Components/ui/Sidebar";

const Page: React.FC = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBody(event.target.value);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Title:", title);
        console.log("Body:", body);
        console.log("Image:", selectedFile);
        setTitle("");
        setBody("");
        setSelectedFile(null);
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <Sidebar />
            <div className="container mx-auto px-4 py-8 lg:ml-40 bg-gray-100">
                <h2 className="text-2xl font-bold mb-4">Upload Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title:
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={handleTitleChange}
                            required
                            className="mt-1 p-2 border rounded-md w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="body" className="block text-sm font-medium text-gray-700">
                            Caption:
                        </label>
                        <textarea
                            id="body"
                            name="body"
                            value={body}
                            onChange={handleBodyChange}
                            required
                            className="mt-1 p-2 border rounded-md w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Image:
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleFileChange}
                            accept="image/*"
                            required
                            className="mt-1 p-2 border rounded-md w-full"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Upload
                    </button>
                </form>
                {selectedFile && (
                    <div>
                        <h3>Selected File:</h3>
                        <p>{selectedFile.name}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;
