import { Outlet, useLocation } from "react-router-dom";
import MainNavbar from "../../Components/MainNavbar/MainNavbar";



const MainLayout = () => {
const location = useLocation()

    return (
        <div className="">
           {location.pathname !== "/" && <MainNavbar />}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;