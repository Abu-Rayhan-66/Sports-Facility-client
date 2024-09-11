import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";
import { logout } from "../../Redux/Features/auth/authSlice";


const Navbar = () => {

  const user= useAppSelector((state: RootState) => state.auth.userData);
  const dispatch = useAppDispatch()
  const handleLOgOut = ()=>{
    dispatch(logout())
  }

  const navigationButton = (
    <>
      <h2 className="text-white font-medium uppercase text-lg m-3">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          home
        </NavLink>
      </h2>
      <h2 className="text-white font-medium uppercase text-lg m-3">
        <NavLink to="/about" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }>about</NavLink>
      </h2>
      <h2 className="text-white font-medium uppercase text-lg m-3">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
          }
        >
          contact
        </NavLink>
      </h2>
    </>
  );

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-3000 ease-in-out ${
        isScrolled
          ? "bg-gradient-to-l from-[#083f53] to-[#1c9991] border-b-[1px] border-slate-400"
          : "bg-transparent border-none"
      }`}
    >
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navigationButton}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navigationButton}</ul>
        </div>
        <div className="navbar-end">
        {user ? <button onClick={handleLOgOut} className="py-2 px-4 text-white bg-black text-lg font-medium rounded-md"><NavLink to="/login">SignOut</NavLink></button>  :<button className="py-2 px-4 text-white bg-black text-lg font-medium rounded-md"><NavLink to="/login">Login</NavLink></button> 

        }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
