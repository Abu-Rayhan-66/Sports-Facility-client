import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
      <h2 className="text-black font-semibold text-lg py-4 mr-5 font-Saira ">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#002966]" : ""
          }
        >
          Home
        </NavLink>
      </h2>
      <h2 className="text-black font-semibold  text-lg py-4 mr-5 font-Saira">
        <NavLink
          to="/facility"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#03AED2]" : ""
          }
        >
          All Facilities
        </NavLink>
      </h2>
      <h2 className="text-black font-semibold  text-lg py-4 mr-5 font-Saira">
        <NavLink to="/about" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?  "text-[#03AED2]" : ""
          }>About</NavLink>
      </h2>
      <h2 className="text-black font-semibold  text-lg py-4 mr-5 font-Saira">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?  "text-[#03AED2]" : ""
          }
        >
          Contact
        </NavLink>
      </h2>
      {
        user ?  <h2 className="text-black font-semibold  text-lg py-4 mr-5 font-Saira">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ?  "text-[#03AED2]" : ""
          }
        >
          Dashboard
        </NavLink>
      </h2>:""
      }
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
      className={`sticky top-0 z-50 w-full  transition-all duration-3000 ease-in-out ${
        isScrolled
          ? "bg-white border-b border-black/[0.145]"
          : "bg-white border-b border-black/[0.145]"
      }`}
    >
      <div className="navbar max-w-7xl mx-auto ">
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
              className="menu menu-sm dropdown-content bg-[#1c9991] rounded-box z-[50] mt-3 w-52 p-2 shadow"
            >
              
              {navigationButton}
            </ul>
          </div>
          {user ? <a className="btn btn-ghost text-xl text-black">{user.name}</a> : ""}
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
        {user ? <button onClick={handleLOgOut} className="py-1 px-4  text-white  bg-black text-lg font-medium"><NavLink to="/login">SignOut</NavLink></button>  :<button className="py-1 px-4  text-white bg-black text-lg font-medium "><NavLink to="/login">Login</NavLink></button> 
             
        }

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
