import Banner from "../../Components/Banner/Banner";
import CustomerTestimonials from "../../Components/CustomerTestimonials/CustomerTestimonials";
import FeaturedFacilities from "../../Components/FeaturedFacilities/FeaturedFacilities";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import PhotoGallary from "../../Components/PhotoGallary/PhotoGallary";
import WhatWeOffer from "../../Components/WhatWeOffer/WhatWeOffer";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <WhatWeOffer></WhatWeOffer>
            <FeaturedFacilities></FeaturedFacilities>
            <CustomerTestimonials></CustomerTestimonials>
            <PhotoGallary></PhotoGallary>
            <HowItWorks></HowItWorks>
            
        </div>
    );
};

export default Home;