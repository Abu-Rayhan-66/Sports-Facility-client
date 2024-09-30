import { useState } from "react";
import { useGetAllFacilityQuery } from "../../Redux/Features/facility/facility.Api";
import { Inputs } from "../../Pages/Dashboard/CreateFacility/CreateFacility";
import { Link } from "react-router-dom";


const FeaturedFacilities = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const { data, isLoading, error } = useGetAllFacilityQuery({
        searchTerm,
        isDeleted: false, 
      });

      if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: Something went wrong</div>;
      }
    
    
      if (!data || !data.data || data.data.length === 0) {
        return <div>No facilities found</div>;
      }

    return (
        <div>
            <div>
        <input
          type="text"
          placeholder="Search facilities"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="border p-2 rounded mb-4 hidden"
        />
      </div>
      <h2 className="text-3xl font-semibold text-center mt-10 uppercase">popular facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10  max-w-7xl mx-auto mt-10">
            {
                data?.data.slice(0,6).map((item:Inputs)=>(
                    <div key={item._id} className="card card-compact  rounded-md border-[#03AED2] border-[1px] shadow-sm hover:shadow-[#03AED2]">
              <figure>
                <img className="h-40 w-full" src={item.image} alt="Facility image" />
              </figure>
              <div className="card-body">
                <h2 className="text-lg font-semibold text-black">{item.name}</h2>
                <p className="text-lg text-black">Price per hour: {item.pricePerHour}</p>
                <p className="text-lg text-black">{item.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/facilityDetails/${item._id}`}>
                    <button className="py-1 px-4  text-white rounded-tl-md rounded-br-md bg-[#03AED2] text-lg font-medium">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
                ))
            }
            
          </div>
          <div className="flex justify-center mt-4 mb-10">
            <button  className=" py-1 px-4  text-white rounded-tl-md rounded-br-md bg-[#03AED2] text-lg font-medium"><Link to={"/facility"}>See All</Link></button>
            </div>
        </div>
    );
};

export default FeaturedFacilities;