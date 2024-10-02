import { Link } from "react-router-dom";
import { useGetAllFacilityQuery } from "../../Redux/Features/facility/facility.Api";
import { Inputs } from "../Dashboard/CreateFacility/CreateFacility";
import { useState } from "react";

const Facility = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10;
  console.log(searchTerm, minPrice, maxPrice)

  const { data, isLoading, error } = useGetAllFacilityQuery({
    searchTerm,
    minPrice,
    maxPrice,
    page: currentPage,
    limit:itemsPerPage,
    isDeleted: false, 
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); 
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value ? Number(e.target.value) : ""); 
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value ? Number(e.target.value) : "");
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className="min-h-[70vh]">
      <div className="lg:flex flex-1  mt-24">
    
    <div className="mb-6  mr-3 ">
      <input
        type="text"
        placeholder="    Search by name and location"
        value={searchTerm}
        onChange={handleSearchChange} 
        className="py-1 w-full mb-3 rounded-md border-[2px] focus:border-[#1b918b] focus:outline-none  border-[#03AED2]"
      />
       <h2 className="mb-2 bg-[#03AED2] py-1 px-2 text-white rounded-md">Filter by price range</h2>
      <div className="flex space-x-4 mb-4">
       
        <input
          type="number"
          placeholder="  Min Price"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="py-1 w-full rounded-md border-[2px] focus:border-[#1b918b] focus:outline-none  border-[#03AED2]"
        />
        <input
          type="number"
          placeholder="  Max Price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="py-1 w-full rounded-md border-[2px] focus:border-[#1b918b] focus:outline-none  border-[#03AED2]"
        />
      </div>
      <div className="flex justify-center mt-4">
<button
  onClick={() => handlePageChange(currentPage - 1)}
  disabled={currentPage === 1}
  className="py-1 px-4 bg-[#03AED2] text-white rounded-md mr-2 disabled:opacity-50"
>
  Previous
</button>
<span className="py-1 px-2">Page {currentPage}</span>
<button
  onClick={() => handlePageChange(currentPage + 1)}
  disabled={data && data.data.length < 10} 
  className="py-1 px-4 bg-[#03AED2] text-white rounded-md ml-2 disabled:opacity-50"
>
  Next
</button>
</div>
    </div>

    {isLoading ? (
      <div>Loading...</div>
    ) : error ? (
      <div className="text-red-400 text-2xl font-medium"> No data found</div>
    ) : !data || data.data.length === 0 ? (
      <div>No facilities found</div>
    ) : (
      <div className="flex-[5] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto ">
        {data.data.map((item: Inputs) => (
          <div key={item._id} className="card card-compact bg-white  rounded-md border-[#03AED2] border-[1px] shadow-sm hover:shadow-[#03AED2]">
            <figure>
              <img className="h-40 w-full" src={item.image} alt="Facility image" />
            </figure>
            <div className="card-body">
              <h2 className="text-lg font-medium text-black">{item.name}</h2>
              <p className="text-base text-black">Price per hour: {item.pricePerHour}</p>
              <div className="card-actions justify-end">
                <Link to={`/facilityDetails/${item._id}`}>
                  <button className="py-1 px-4  text-white rounded-tl-md rounded-br-md bg-[#03AED2] text-lg font-medium">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
         
      </div>

    )}
   
  </div>
    </div>
  );
};

export default Facility;
