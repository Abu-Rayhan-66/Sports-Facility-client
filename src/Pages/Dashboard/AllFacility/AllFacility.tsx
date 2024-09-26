import { useState } from "react";
import { useGetAllFacilityQuery } from "../../../Redux/Features/facility/facility.Api";
import { Inputs } from "../CreateFacility/CreateFacility";

const AllFacility = () => {
    const [searchTerm, setSearchTerm] = useState(""); // Initialize searchTerm state
    const { data, isLoading, error } = useGetAllFacilityQuery({
        searchTerm, // Pass searchTerm to the query
    });

    console.log(data);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: Something went wrong</div>;
    }

    // Check if data exists and contains facilities
    if (!data || !data.data || data.data.length === 0) {
        return <div>No facilities found</div>;
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search facilities"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state
                className="border p-2 rounded mb-4 hidden"
            />
            {data.data.map((item: Inputs) => (
                <div key={item._id}>
                    <h2>This is {item.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default AllFacility;
