import { Link, NavLink } from "react-router-dom";
import { RootState } from "../../Redux/store";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { User, logout } from "../../Redux/Features/auth/authSlice";

const MainNavbar = () => {
  const user = useAppSelector((state: RootState) => state.auth.userData) as User
  console.log(user)
  const dispatch = useAppDispatch();
  const handleLOgOut = () => {
    dispatch(logout());
  };

  const navigationButton = (
    <>
      <h2 className="text-white font-medium uppercase text-lg m-3">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#03AED2] border-2 border-[#03AED2] rounded-tl-xl rounded-br-xl p-1" : ""
          }
        >
          home
        </NavLink>
      </h2>
      <h2 className="text-white font-medium uppercase text-lg m-3">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#03AED2] border-2 border-[#03AED2] rounded-tl-xl rounded-br-xl p-1" : ""
          }
        >
          about
        </NavLink>
      </h2>
      <h2 className="text-white font-medium uppercase text-lg m-3">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#03AED2] border-2 border-[#03AED2] rounded-tl-xl rounded-br-xl p-1" : ""
          }
        >
          contact
        </NavLink>
      </h2>
      {
        user ?  <h2 className="text-white font-medium uppercase text-lg m-3">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#03AED2] border-2 border-[#03AED2] rounded-tl-xl rounded-br-xl p-1" : ""
          }
        >
          Dashboard
        </NavLink>
      </h2>:""
      }
    </>
  );

  return (
    <div>
      <nav
        className={`fixed top-0 w-full z-50  bg-gradient-to-l from-[#083f53] to-[#1c9991] border-b-[1px] border-slate-400
      }`}
      >
        <div className="navbar bg-transparent">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#1c9991] rounded-box z-[50] mt-3 w-52 p-2 shadow"
              >
                {navigationButton}
              </ul>
            </div>
            {user ? <a className="btn btn-ghost text-xl text-white">{user.name}</a> : ""}
            <div>
            <Link to="/">
          <img className="rounded-full size-12" src="https://i.ibb.co.com/JcVyrjg/Screenshot-3.png" alt="" />
            </Link>
          </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navigationButton}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <button
                onClick={handleLOgOut}
                className="py-1 px-4 text-white  rounded-tl-md rounded-br-md bg-[#03AED2] text-lg font-medium "
              >
                <NavLink to="/login">SignOut</NavLink>
              </button>
            ) : (
              <button className="py-1 px-4 text-white  rounded-tl-md rounded-br-md bg-[#03AED2] text-lg font-medium">
                <NavLink to="/login">Login</NavLink>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavbar;
