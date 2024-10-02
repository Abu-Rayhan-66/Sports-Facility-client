import { Outlet, useLocation } from "react-router-dom";
import MainNavbar from "../../Components/MainNavbar/MainNavbar";
import Footer from "../../Components/Footer/Footer";



const MainLayout = () => {
const location = useLocation()

    return (
        <div className="">
           {location.pathname !== "/" && <MainNavbar />}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;