import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateFacilityMutation } from "../../../Redux/Features/facility/facility.Api";


export type Inputs = {
  _id:string
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
  image: string;
};

const CreateFacility = () => {
  const [facility] = useCreateFacilityMutation()

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
      await facility(formData);
      toast.success("Facility  created successfully", { id: toastId });
    } catch (err) {
      console.error("Create facility error:", err)
      toast.error("Something went Wrong", { id: toastId });
    }
  };

  return (
    <div className="hero bg-base-200 h-[90vh] ">
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

export default CreateFacility;
