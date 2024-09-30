import { useState } from "react";
import {
  useCancelBookingMutation,
  useGetSpecificUserBookingQuery,
} from "../../../Redux/Features/booking/booking.api";
import { useAppSelector } from "../../../Redux/hooks";
import { RootState } from "../../../Redux/store";
import { toast } from "sonner";

export type TFacility = {
  _id: string;
  name: string;
  image: string;
  location: string;
  description: string;
  pricePerHour:string;
  isDeleted:boolean;
};

export type TBooking = {
  _id:string
  date:string ;
  startTime: string;
  endTime: string;
  user: string
  facility: TFacility;
  payableAmount: number;
  priceInHour:number
  booking: string;
  transactionId: string;
  isBooked: string;
}


const MyBookings = () => {
  const user = useAppSelector((state: RootState) => state.auth.userData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  
  const { data, isLoading, error } = useGetSpecificUserBookingQuery({
    userId: user?._id,
    page: currentPage,
    limit: itemsPerPage,
  });

  const [cancelBooking,{ data: cancelData, isLoading: cancelLoading, error: cancelError },] = useCancelBookingMutation();
  console.log(cancelData)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  

  const handleCancel = async (bookingId: string) => {
    const toastId = toast.loading("Booking canceling")
    try {
      await cancelBooking(bookingId);
      toast.success("booking canaled",{id:toastId}) 
    } catch (err) {
      toast.error("Something went wrong",{id:toastId})
    }
  };

  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    } else {
      console.error("Modal element not found");
    }
  };

  const closeModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.close();
    } else {
      console.error("Modal element not found");
    }
  };

  console.log({ data });

  if (isLoading || cancelLoading) {
    return <div>Loading...</div>;
  }

  if (error || cancelError) {
    return <div>No booking Found</div>;
  }

  if (!data || !data.data || data.data.length === 0) {
    return <div>No facilities found</div>;
  }

  return (
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
          {data.data.map((item:TBooking, index:number) => (
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
              <td>
                <button
                  className="py-1 px-4  text-white rounded-tl-md rounded-br-md bg-[#03AED2] text-lg font-medium"
                  onClick={() => openModal(`modal_${item._id}`)}
                >
                 Details
                </button>
                <dialog
                  id={`modal_${item._id}`}
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box bg-gradient-to-tr from-[#083f53] to-[#1c9991]">
                    <h3 className="font-bold text-lg text-white">Booking Details</h3>
                    <p className="py-2 text-white text-base">
                      Facility Name: {item.facility.name}
                    </p>
                    <p className="py-2 text-white text-base">
                      Start time: {item.startTime}
                    </p>
                    <p className="py-2 text-white text-base">
                      End time: {item.endTime}
                    </p>
                    <p className="py-2 text-white text-base">
                      Booking status: {item.isBooked}
                    </p>
                    <p className="py-2 text-white text-base">
                      Price per hour: {item.priceInHour}
                    </p>
                    <p className="py-2 text-white text-base">
                      Total price: {item.payableAmount}
                    </p>
                    <p className="py-2 text-white text-base">
                      Location: {item.facility.location}
                    </p>
                    <p className="py-2 text-white ">
                      Description: {item.facility.description}
                    </p>
                    <div className="modal-action">
                      <button
                        className="py-1 px-4  text-white rounded-tl-md rounded-br-md bg-[#03AED2] text-lg font-medium"
                        onClick={() => closeModal(`modal_${item._id}`)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </dialog>
              </td>
              <td>
                <button
                  onClick={() => handleCancel(item._id)}
                  className="py-1 px-4  text-white rounded-tl-md rounded-br-md bg-[#03AED2] text-lg font-medium"
                >
                  Cancel
                </button>
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
    disabled={data && data.data.length < 2} 
    className="py-1 px-4 bg-[#03AED2] text-white rounded-md ml-2 disabled:opacity-50"
  >
    Next
  </button>
</div>
    </div>
  );
};

export default MyBookings;
