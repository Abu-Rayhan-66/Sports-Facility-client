import ContactDetails from "../../Components/ContactDetails/ContactDetails";
import Maps from "../../Components/Maps/Maps";


const ContactUs = () => {
    return (
        <div className=" max-w-7xl mx-auto mt-24">
           <ContactDetails></ContactDetails>
           <div className="md:flex md:gap-4 md:items-center mx-4">
            <div className="flex-1">
                <Maps></Maps>
            </div>
            <div className="flex-1">
                idj
            </div>
           </div>
        </div>
    );
};

export default ContactUs;