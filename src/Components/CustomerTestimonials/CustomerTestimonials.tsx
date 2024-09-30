import Marquee from "react-fast-marquee";

const CustomerTestimonials = () => {
  return (
   <div>
    <h2 className="text-3xl font-semibold text-center mt-10 mb-4 uppercase">Customer Testimonial</h2>
     <div className="bg-gray-100 py-8 max-w-7xl mx-auto">
      <Marquee direction="left" speed={50} pauseOnHover gradient={false}>
        <div className="flex space-x-8">
          <div className="bg-white p-4 shadow-lg rounded-md w-72 text-center">
            <h2 className="text-lg font-semibold">Michael, Basketball Coach</h2>
            <p className="text-sm text-gray-600">As a coach, finding a reliable place to train my team was crucial. SportUp provides
             the best indoor basketball courts with all the amenities we need for practice. It's our go-to facility.</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-md w-72 text-center">
            <h2 className="text-lg font-semibold">Samantha, Tennis Player</h2>
            <p className="text-sm text-gray-600">I've been using SportUp's tennis courts for over a year now, and it's always a great experience. The courts are well-maintained, and the staff is incredibly friendly. Highly recommend</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-md w-72 text-center">
            <h2 className="text-lg font-semibold">John, Football Lover</h2>
            <p className="text-sm text-gray-600">The facilities at SportUp are top-notch! The football grounds are always in excellent condition, and the booking process is seamless. My friends and I love playing here every weekend</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-md w-72 text-center">
            <h2 className="text-lg font-semibold">Chris, Cricketer</h2>
            <p className="text-sm text-gray-600">Booking the cricket pitch through SportUp has made it so convenient to organize weekend matches with my friends. The pitch is well-prepared, and the service is exceptional.</p>
          </div>
        </div>
      </Marquee>
    </div>
   </div>
  );
};

export default CustomerTestimonials;
