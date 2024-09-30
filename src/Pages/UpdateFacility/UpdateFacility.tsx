import { useParams } from "react-router-dom";
import { useGetSingleFacilityQuery, useUpdateFacilityMutation } from "../../Redux/Features/facility/facility.Api";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
// import { useState } from "react";


export type Inputs = {
    _id:string
    name: string;
    description: string;
    pricePerHour: number;
    location: string;
    image: string;
  };

const UpdateFacility = () => {

    const {id} = useParams()
  
    const {data, isLoading, error} = useGetSingleFacilityQuery(id)
    // const [facilityId, setFacilityId] = useState("")
    const [updateFacility] = useUpdateFacilityMutation()


    // setFacilityId(data?.data?._id)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>();
    
      const onSubmit: SubmitHandler<Inputs> =async (data) => {
        const toastId = toast.loading("Creating Facility");
        try {
          const formData = {
            name: data.name,
            description: data.description,
            pricePerHour: Number(data.pricePerHour),
            location: data.location,
            image: data.image,
          };
          console.log(formData);
          await updateFacility({
            id:id, 
          data: formData,
          });
          toast.success("Facility  created successfully", { id: toastId });
        } catch (err) {
          console.error("Create facility error:", err)
          toast.error("Something went Wrong", { id: toastId });
        }
      };

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

  const facility = data?.data

    return (
        <div className="hero bg-white h-[90vh] mt-24">
      <div className="hero-content flex-col ">
        <div className="card bg-base-100 w-screen max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
                defaultValue={facility.name}
              />
              <div className="h-2">
                {errors.name && <span>Name is required</span>}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                {...register("description", { required: true })}
                type="text"
                placeholder="Description"
                className="input input-bordered"
                defaultValue={facility.description}
              />
              <div className="h-2">
                {errors.description && <span>Description is required</span>}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price Per Hour</span>
              </label>
              <input
                {...register("pricePerHour", { required: true })}
                type="text"
                placeholder="Price Per Hour"
                className="input input-bordered"
                defaultValue={facility.pricePerHour}
              />
              <div className="h-2">
                {errors.pricePerHour && <span>Price Per Hour is required</span>}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                {...register("location", { required: true })}
                type="text"
                placeholder="Location"
                className="input input-bordered"
                defaultValue={facility.location}
              />
              <div className="h-2">
                {errors.location && <span>Location is required</span>}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                {...register("image", { required: true })}
                type="text"
                placeholder="Image"
                className="input input-bordered"
                defaultValue={facility.image}
              />
              <div className="h-2 mb-4">
                {errors.image && (
                  <span className="text-sm">Image is required</span>
                )}
              </div>
              
            </div>
            <div className="form-control ">
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default UpdateFacility;