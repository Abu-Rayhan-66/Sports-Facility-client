import { Link } from "react-router-dom";
import { useGetAllFacilityQuery } from "../../Redux/Features/facility/facility.Api";
import { Inputs } from "../Dashboard/CreateFacility/CreateFacility";
import { useState } from "react";

const Facility = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  console.log(searchTerm, minPrice, maxPrice)

  const { data, isLoading, error } = useGetAllFacilityQuery({
    searchTerm,
    minPrice,
    maxPrice,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // Update search term state
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value ? Number(e.target.value) : ""); // Update minimum price
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value ? Number(e.target.value) : ""); // Update maximum price
  };


  return (
    <div className="md:flex md:flex-1 mt-24">
      {/* Search input should always be visible */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search facilities"
          value={searchTerm}
          onChange={handleSearchChange} // Trigger search term change
          className="border p-2 rounded w-full"
        />
        <div className="flex space-x-4 mb-4">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Handle loading, error, and no data states */}
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-400 text-2xl font-medium"> No data found</div>
      ) : !data || data.data.length === 0 ? (
        <div>No facilities found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto max-w-5xl">
          {data.data.map((item: Inputs) => (
            <div key={item._id} className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={item.image} alt="Facility image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>Price per hour: {item.pricePerHour}</p>
                <div className="card-actions justify-end">
                  <Link to={`/facilityDetails/${item._id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Facility;
