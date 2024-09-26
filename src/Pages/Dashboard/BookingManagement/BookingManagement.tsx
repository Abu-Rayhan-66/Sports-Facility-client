import { useGetAllBookingQuery } from "../../../Redux/Features/booking/booking.api";


const BookingManagement = () => {

    const {data, isLoading, error} = useGetAllBookingQuery(undefined)

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
           {data.data.map((item) => (
                <div key={item._id}>
                    <h2>Payable Amount {item.payableAmount}</h2>
                </div>
            ))}
        </div>
    );
};

export default BookingManagement;