import { useState } from "react";
import { useGetAllBookingQuery } from "../../../Redux/Features/booking/booking.api";
import { TBooking } from "../MyBookings/MyBookings";


const BookingManagement = () => {

    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

    const {data, isLoading, error} = useGetAllBookingQuery({
        page:currentPage,
        limit:itemsPerPage
    })


    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
      };
    

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
          <div className="overflow-x-auto flex flex-col">
      <table className="table">
        <thead className="bg-[#03AED2]">
          <tr>
            <th className="text-base text-white">Serial</th>
            <th className="text-base text-white">Image</th>
            <th className="text-base text-white">Name</th>
            <th className="text-base text-white">Amount</th>
            <th className="text-base text-white">payment Status</th>
            <th className="text-base text-white">price per hour</th>
            <th className="text-base text-white">Start time</th>
            <th className="text-base text-white">End time</th>
          </tr>
        </thead>
        <tbody>
           {data?.data.map((item:TBooking, index:number) => (
                <tr key={item._id} className="bg-slate-100">
                <th className="text-base text-black">{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.facility.image} alt="Facility Image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-base text-black">{item.facility.name}</td>
                <td className="text-base text-black">{item.payableAmount}</td>
                <td className="text-base text-black">
                 {item.isBooked}
                </td>
                <td className="text-base text-black">
                  {item.priceInHour}
                </td>
                <td className="text-base text-black">
                  {item.startTime}
                </td>
                <td className="text-base text-black">
                  {item.endTime}
                </td>
              </tr>
            ))}
            </tbody>
      </table>
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
                disabled={data && data.data.length < 2} // Disable if less than limit
                className="py-1 px-4 bg-[#03AED2] text-white rounded-md ml-2 disabled:opacity-50"
              >
                Next
              </button>
            </div>
        </div>
        </div>
    );
};

export default BookingManagement;