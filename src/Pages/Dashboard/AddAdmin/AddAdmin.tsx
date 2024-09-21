import { SubmitHandler, useForm } from "react-hook-form";
import { useSignUserMutation } from "../../../Redux/Features/auth/authApi";
import { toast } from "sonner";


type Inputs = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
};

const AddAdmin = () => {
  const [signup] = useSignUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const toastId = toast.loading("Creating User");
    try {
      const formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        role: "admin",
        address: data.address,
      };
      console.log(formData);
      signup(formData);
      toast.success("User created successfully", { id: toastId });
    } catch (err) {
      toast.error("Something went Wrong", { id: toastId });
    }
  };

  return (
    <div className="hero bg-base-200 h-[90vh]">
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
                {errors.name && <span>This field is required</span>}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
              <div className="h-2">
                {errors.email && <span>This field is required</span>}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
              <div className="h-2">
                {errors.password && <span>This field is required</span>}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                {...register("phone", { required: true })}
                type="text"
                placeholder="Phone"
                className="input input-bordered"
              />
              <div className="h-2">
                {errors.phone && <span>This field is required</span>}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                {...register("address", { required: true })}
                type="text"
                placeholder="Address"
                className="input input-bordered"
              />
              <div className="h-2 mb-4">
                {errors.address && (
                  <span className="text-sm">address is required</span>
                )}
              </div>
              
            </div>
            <div className="form-control ">
              <button type="submit" className="btn btn-primary">
                Create Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
