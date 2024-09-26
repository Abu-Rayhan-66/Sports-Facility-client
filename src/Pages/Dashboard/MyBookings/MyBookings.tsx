
import { useGetSpecificUserBookingQuery } from "../../../Redux/Features/booking/booking.api";
// import { useAppSelector } from "../../../Redux/hooks";
// import { RootState } from "../../../Redux/store";

const MyBookings = () => {
  // const user = useAppSelector((state: RootState) => state.auth.userData);
  const { data, isLoading, error } = useGetSpecificUserBookingQuery(undefined);
  console.log(data)
  
  console.log("specific user data", data);

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
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          Number
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        data.data.map((item, index) => <tr key={item._id}>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)

      }
     
    </tbody>
  </table>
</div>
  );
};

export default MyBookings;
