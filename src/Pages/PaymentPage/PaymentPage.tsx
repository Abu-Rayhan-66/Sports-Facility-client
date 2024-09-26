import { useParams } from "react-router-dom";
import { useGetSingleBookingQuery } from "../../Redux/Features/booking/booking.api";
import { useGetSingleFacilityQuery } from "../../Redux/Features/facility/facility.Api";


const PaymentPage = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, error } = useGetSingleBookingQuery(id);
  const facilityId =  data.data.facility
  const { data:facility, isLoading:facilityLoading, error:facilityError } = useGetSingleFacilityQuery(facilityId);

  console.log("specific user data", data);

  if (isLoading || facilityLoading) {
    return <div>Loading...</div>;
  }

  if (error ||facilityError) {
    return <div>Error: Something went wrong</div>;
  }

  // Check if data exists and contains facilities
  if ((!data || !facility) ||( !data.data || !facility.data) || (data.data.length || facility.data.length) === 0) {
    return <div>No facilities found</div>;
  }

  return (
    <div className="mt-24">
      {data?.data?.map((item) => (<div>
          <h2>Payment Amount: {item.payableAmount}</h2>
        </div>
      ))}
    </div>
  );
};

export default PaymentPage;
