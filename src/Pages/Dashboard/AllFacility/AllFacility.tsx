import { useGetAllFacilityQuery } from "../../../Redux/Features/facility/facility.Api";
import { Inputs } from "../CreateFacility/CreateFacility";


const AllFacility = () => {

    const {data, isLoading, error} = useGetAllFacilityQuery(undefined)

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

    return (
        <div>
            {
                data.data.map((item:Inputs) => <div>
                    <h2>this is {item.name}</h2>
                </div>)
            }
        </div>
    );
};

export default AllFacility;