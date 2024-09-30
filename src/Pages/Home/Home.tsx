import Banner from "../../Components/Banner/Banner";
import CustomerTestimonials from "../../Components/CustomerTestimonials/CustomerTestimonials";
import FeaturedFacilities from "../../Components/FeaturedFacilities/FeaturedFacilities";
import Footer from "../../Components/Footer/Footer";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
// import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import Navbar from "../../Components/Navbar/Navbar";
import PhotoGallary from "../../Components/PhotoGallary/PhotoGallary";


const Home = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Banner></Banner>
            <FeaturedFacilities></FeaturedFacilities>
            <CustomerTestimonials></CustomerTestimonials>
            <PhotoGallary></PhotoGallary>
            <HowItWorks></HowItWorks>
            <Footer></Footer>
        </div>
    );
};

export default Home;