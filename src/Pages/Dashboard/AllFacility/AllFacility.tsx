import { useState } from "react";
import { useDeleteFacilityMutation, useGetAllFacilityQuery } from "../../../Redux/Features/facility/facility.Api";

import { Link } from "react-router-dom";
import { Inputs } from "../CreateFacility/CreateFacility";
import { toast } from "sonner";

const AllFacility = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const { data, isLoading, error } = useGetAllFacilityQuery({
    searchTerm,
    page: currentPage,
    limit: itemsPerPage,
  });

  const [cancelBooking] = useDeleteFacilityMutation();
  

  console.log(data);

  const handleCancel = async (bookingId: string) => {
    const toastId = toast.loading("Facility Deleting")
    try {
      await cancelBooking(bookingId);
      toast.success("Facility deleted",{id:toastId}) 
    } catch (err) {
      toast.error("Something went wrong",{id:toastId})
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: Something went wrong</div>;
  }


  if (!data || !data.data || data.data.length === 0) {
    return <div>No facilities found</div>;
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
      <div className="overflow-x-auto flex flex-col">
        <table className="table">
          <thead className="bg-[#03AED2]">
            <tr>
              <th className="text-base text-white">Serial</th>
              <th className="text-base text-white">Image</th>
              <th className="text-base text-white">Name</th>
              <th className="text-base text-white">Price</th>
              <th className="text-base text-white">Details</th>
              <th className="text-base text-white">Cancel</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((item:Inputs, index:number) => (
              <tr key={item._id} className="bg-slate-100">
                <th className="text-base text-black">{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt="Facility Image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-base text-black">{item.name}</td>
                <td className="text-base text-black">{item.pricePerHour}</td>
                <td>
                  <Link to={`/updateFacility/${item._id}`}>
                    <button className="py-1 px-4  text-white rounded-tl-md rounded-br-md bg-[#03AED2] text-lg font-medium">
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleCancel(item._id)} className="py-1 px-4  text-white rounded-tl-md rounded-br-md bg-[#03AED2] text-lg font-medium">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
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
                disabled={data && data.data.length < 7} 
                className="py-1 px-4 bg-[#03AED2] text-white rounded-md ml-2 disabled:opacity-50"
              >
                Next
              </button>
            </div>
    </div>
  );
};

export default AllFacility;
