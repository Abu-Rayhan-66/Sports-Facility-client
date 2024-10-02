import { Link, useParams } from "react-router-dom";

import { useGetSingleFacilityQuery } from "../../Redux/Features/facility/facility.Api";


const FacilityDetails = () => {
  const {id} = useParams()
  
    const {data, isLoading, error} = useGetSingleFacilityQuery(id)

    console.log(data)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: Something went wrong</div>;
  }

  if (!data || data.length === 0) {
    return <div>No facilities found</div>;
  }

  const facility = data.data

    return (
     <div className="min-h-[70vh]">
       <div className=" mt-24 max-w-4xl mx-auto bg-slate-300 rounded-md">
      <div className="md:flex gap-6">
       <div className="flex-1">
       <img className="h-96 rounded-md w-full" src={facility.image} alt="" />
       </div>
       <div className="mt-16 flex-1">
        <h2 className="text-xl font-medium text-white">{facility.name}</h2>
        <h4 className="text-base mt-4 text-white">{facility.location}</h4>
        <h4 className="text-base text-white">{facility.pricePerHour}</h4>
        <h4 className="text-base text-white">{facility.description}</h4>
        <button className="py-1 px-4 mb-4 mt-3  text-white rounded-tl-md rounded-br-md bg-[#03AED2] text-lg font-medium"><Link to={`/booking/${facility._id}`}>View Details</Link> </button>
       </div>
      </div>
     
 </div>
     </div>
    );
};

export default FacilityDetails;