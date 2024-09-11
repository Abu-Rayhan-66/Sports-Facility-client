import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../Redux/Features/auth/authApi";
import { useAppDispatch } from "../../Redux/hooks";
import { setUser } from "../../Redux/Features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { toast } from "sonner";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginUserMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
   const toastId =  toast.loading("Logging in...");
    try {
      const res = await login(data).unwrap();
      console.log("userData", res.data);
      const user = verifyToken(res.token);
      dispatch(setUser({ user: user, token: res.token, userData: res.data }));
      toast.success("logged in",{id:toastId});
      navigate("/");
    } catch (err) {
      toast.error("Something went wrong", {id:toastId});
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen mt-6">
      <div className="hero-content flex-col ">
        <div className="card bg-base-100 w-screen max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={"rayhan@gmail.com"}
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                className="p-2 rounded-md border-[1px] focus:border-[#1b918b] focus:outline-none  border-black"
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
                defaultValue={123456}
                {...register("password", { required: true })}
                type="password"
                placeholder="Password"
                className="p-2 rounded-md border-[1px] focus:border-[#1b918b] focus:outline-none  border-black"
              />
              <div className="h-2">
                {errors.password && <span>This field is required</span>}
              </div>
              <label className="label">
                <h4>
                  Already have an account?{" "}
                  <Link to="/register" className="text-red-400">
                    Login
                  </Link>
                </h4>
              </label>
            </div>
            <div className="form-control ">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
