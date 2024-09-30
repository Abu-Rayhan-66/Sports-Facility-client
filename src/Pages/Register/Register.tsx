import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSignUserMutation } from "../../Redux/Features/auth/authApi";
import { toast } from "sonner";

type Inputs = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
};

const Register = () => {
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
        name:data.name ,
        email:data.email ,
        password:data.password ,
        phone:data.phone ,
        role: "user", 
        address: data.address
        };
      console.log(formData);
      signup(formData);
      toast.success("User created successfully", { id: toastId });
    } catch (err) {
      toast.error("Something went Wrong", { id: toastId });
    }
  };

  return (
    <div className="hero bg-white min-h-screen mt-6">
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
                placeholder=" Name"
                className="py-1 w-full rounded-md border-[2px] focus:border-[#1b918b] focus:outline-none  border-[#03AED2]"
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
                placeholder=" Email"
                className="py-1 w-full rounded-md border-[2px] focus:border-[#1b918b] focus:outline-none  border-[#03AED2]"
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
                placeholder=" Password"
                className="py-1 w-full rounded-md border-[2px] focus:border-[#1b918b] focus:outline-none  border-[#03AED2]"
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
                placeholder=" Phone"
                className="py-1 w-full rounded-md border-[2px] focus:border-[#1b918b] focus:outline-none  border-[#03AED2]"
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
                placeholder=" Address"
                className="py-1 w-full rounded-md border-[2px] focus:border-[#1b918b] focus:outline-none  border-[#03AED2]"
              />
              <div className="h-2">
                {errors.address && (
                  <span className="text-sm">address is required</span>
                )}
              </div>
              <label className="label">
                <h4>
                  Already have an account?{" "}
                  <Link to="/login" className="text-red-400">
                    Login
                  </Link>
                </h4>
              </label>
            </div>
            <div className="form-control ">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
