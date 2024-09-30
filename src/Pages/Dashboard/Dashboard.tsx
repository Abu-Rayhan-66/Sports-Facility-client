import { NavLink, Outlet, useLocation } from "react-router-dom";
import MainNavbar from "../../Components/MainNavbar/MainNavbar";
import { useAppSelector } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";

const Dashboard = () => {
  const location = useLocation();
  const user = useAppSelector((state: RootState) => state.auth.userData);
  const token = useAppSelector((state: RootState) => state.auth.token);


  return (
    <div className="">
      {location.pathname !== "/" && <MainNavbar />}
      
      <div className="md:flex mt-[64px] md:mt-[65px] lg:mt-[84px]">
        <div
          className="md:flex-1 w-full h-12 md:h-[91vh] sticky top-[64px] md:top-[65px] lg:top-[86px] left-0 bg-gradient-to-tl from-[#083f53] to-[#1c9991] z-[40]"
        >
          {user?.role === "user" ? (
            <div className="flex justify-center sm:flex sm:justify-center sm:gap-2 md:flex-col">
              <NavLink
                to="/dashboard"
                end
                style={{ display: "block", textAlign: "center", padding: "8px",color: "white" }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#03AED2] text-white p-2 px-3 text-xs md:text-base md:font-semibold mb-2 block text-center border-l-4 border-[#68D2E8]"
                    : ""
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/dashboard/bookings"
                style={{ display: "block", textAlign: "center", padding: "8px",color: "white" }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#03AED2] text-white p-2 px-3 text-xs md:text-base md:font-semibold mb-2 block text-center border-l-4 border-[#68D2E8]"
                    : ""
                }
              >
                Bookings
              </NavLink>
            </div>
          ) : (
            // admin routes
            <div className="flex justify-center sm:flex sm:justify-center sm:gap-2 md:flex-col">
              <NavLink
                to="/dashboard"
                end
                style={{ display: "block", textAlign: "center", padding: "8px",color: "white" }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#03AED2] text-white p-2 px-3 text-xs md:text-base md:font-semibold mb-2 block text-center border-l-4 border-[#68D2E8]"
                    : ""
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/dashboard/createFacility"
                style={{ display: "block", textAlign: "center", padding: "8px",color: "white" }}
                className={ ( { isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#03AED2] text-white p-2 px-3 text-xs md:text-base md:font-semibold mb-2 block text-center border-l-4 border-[#68D2E8]"
                    : ""
                }
              >
                Create Facility
              </NavLink>
              <NavLink
                to="/dashboard/allFacility"
                style={{ display: "block", textAlign: "center", padding: "8px",color: "white" }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#03AED2] text-white p-2 px-3 text-xs md:text-base md:font-semibold mb-2 block text-center border-l-4 border-[#68D2E8]"
                    : ""
                }
              >
                All Facility
              </NavLink>
              <NavLink
                to="/dashboard/bookingManagement"
                style={{ display: "block", textAlign: "center", padding: "8px",color: "white" }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#03AED2] text-white p-2 px-3 text-xs md:text-base md:font-semibold mb-2 block text-center border-l-4 border-[#68D2E8]"
                    : ""
                }
              >
                Booking Management
              </NavLink>
              <NavLink
                to="/dashboard/addAdmin"
                style={{ display: "block", textAlign: "center", padding: "8px",color: "white" }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#03AED2] text-white p-2 px-3 text-xs md:text-base md:font-semibold mb-2 block text-center border-l-4 border-[#68D2E8]"
                    : ""
                }
              >
                Add Admin
              </NavLink>


            </div>
          )}
        </div>
        <div className="md:flex-[3] lg:flex-[5]">
        {location.pathname === "/dashboard" && (
            < >
              {
               token   &&
                <div className="relative rounded-md  md:flex md:justify-between md:items-center mx-auto mt-10 break-words h-[50vh] max-w-3xl bg-gradient-to-tr from-[#083f53] to-[#1c9991]">
                  <div className="">
                  <h2 className="text-white font-medium text-xl ml-4">Welcome back, {user!.name}</h2>
                  <h4 className="text-white ml-4 mt-4">Nice to see you again. <br /> Hope you are doing well</h4>
                  </div>
                  <div>
                    <img className="h-5/6 w-2/3 absolute bottom-0 right-0" src="https://i.ibb.co.com/V3Dstv4/9439678-removebg-preview.png" alt="" />
                  </div>
                </div>
              }
            </>
          )}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

