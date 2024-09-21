import { NavLink, Outlet, useLocation } from "react-router-dom";
import MainNavbar from "../../Components/MainNavbar/MainNavbar";
import { useAppSelector } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";

const Dashboard = () => {
  const location = useLocation();
  const user = useAppSelector((state: RootState) => state.auth.userData);
  const token = useAppSelector((state: RootState) => state.auth.token);
  console.log(token)

  return (
    <div className="">
      {location.pathname !== "/" && <MainNavbar />}
      
      <div className="md:flex mt-[64px] md:mt-[65px] lg:mt-[84px]">
        <div
          className="md:flex-1 w-full h-12 md:h-[90vh] sticky top-[64px] md:top-[65px] lg:top-[86px] left-0 bg-slate-300 z-[50]"
        >
          {user?.role === "user" ? (
            <div className="flex justify-center sm:flex sm:justify-center sm:gap-2 md:flex-col">
              <NavLink
                to="/dashboard"
                end
                style={{ display: "block", textAlign: "center", padding: "8px" }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-purple-600 text-white p-2 px-3 text-xs md:text-base md:font-semibold mb-2 block text-center border-l-4 border-red-600"
                    : ""
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/dashboard/bookings"
                style={{ display: "block", textAlign: "center", padding: "8px" }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-purple-600 text-white p-2 px-3 text-xs md:text-base md:font-semibold mb-2 block text-center border-l-4 border-red-600"
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
                style={{ display: "block", textAlign: "center", padding: "8px" }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-purple-600 text-white p-2 px-3 text-xs md:text-base md:font-semibold mb-2 block text-center border-l-4 border-red-600"
                    : ""
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/dashboard/createFacility"
                style={{ display: "block", textAlign: "center", padding: "8px" }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-purple-600 text-white p-2 px-3 text-xs md:text-base md:font-semibold mb-2 block text-center border-l-4 border-red-600"
                    : ""
                }
              >
                Create Facility
              </NavLink>
              <NavLink
                to="/dashboard/allFacility"
                style={{ display: "block", textAlign: "center", padding: "8px" }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-purple-600 text-white p-2 px-3 text-xs md:text-base md:font-semibold mb-2 block text-center border-l-4 border-red-600"
                    : ""
                }
              >
                All Facility
              </NavLink>
              <NavLink
                to="/dashboard/bookingManagement"
                style={{ display: "block", textAlign: "center", padding: "8px" }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-purple-600 text-white p-2 px-3 text-xs md:text-base md:font-semibold mb-2 block text-center border-l-4 border-red-600"
                    : ""
                }
              >
                Booking Management
              </NavLink>
              <NavLink
                to="/dashboard/addAdmin"
                style={{ display: "block", textAlign: "center", padding: "8px" }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-purple-600 text-white p-2 px-3 text-xs md:text-base md:font-semibold mb-2 block text-center border-l-4 border-red-600"
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
                <div className="mx-auto mt-10 break-words h-[30vh] max-w-2xl bg-red-500">
                  <h2>Welcome {user!.name}</h2>
                  <h2 className="p-7">Welcome {token}</h2>
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

