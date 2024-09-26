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
        <div className="mt-24">
         <div  className="card card-compact bg-base-100 w-96 shadow-xl">
           <figure>
             <img
               src={facility.image}
               alt="Facility image" />
           </figure>
           <div className="card-body">
             <h2 className="card-title">{facility.name}</h2>
             <p>Price per hours: {facility.pricePerHour}</p>
             <div className="card-actions justify-end">
               <button className="btn btn-primary"><Link to={`/booking/${facility._id}`}>View Details</Link> </button>
             </div>
           </div>
         </div>
        
    </div>
    );
};

export default FacilityDetails;