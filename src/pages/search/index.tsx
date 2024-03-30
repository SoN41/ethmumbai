import React, { useState } from "react";
import Sidebar from "@/Components/ui/Sidebar";
import { AiOutlineSearch } from "react-icons/ai"; // Import the search icon

const Search: React.FC = () => {
    // State variables
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<string[]>([]); // Assuming searchResults is an array of strings

    // Dummy data for demonstration (replace with your actual data)
    const data = ["Result 1", "Result 2", "Result 3", "Another Result"];

    // Function to handle changes in the search input
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);

        // Filter data based on the search query
        const filteredResults = data.filter(result =>
            result.toLowerCase().includes(event.target.value.toLowerCase())
        );

        setSearchResults(filteredResults);
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <Sidebar />
            <div className="container mx-auto px-4 py-8 ml-40">
                <h2 className="text-2xl font-bold mb-4">Search</h2>
                {/* Search input with icon */}
                <div className="flex items-center mb-4">
                    <AiOutlineSearch className="mr-2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 flex-1"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </div>
                {/* Display search results */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {searchResults.map((result, index) => (
                        <div key={index} className="border border-gray-300 p-4 rounded bg-gray-100">
                            {result}
                        </div>
                    ))}
                    {/* Display message if no results found */}
                    {searchQuery !== "" && searchResults.length === 0 && (
                        <div className="text-gray-500">No results found.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;