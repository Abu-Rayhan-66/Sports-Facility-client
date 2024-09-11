
const Banner = () => {
  return (
    <div className="flex justify-around  items-center gap-10 min-h-screen bg-[radial-gradient(ellipse_at_top,#0f7f7d_0%,_#104658_50%)]">
        <div className="">
            <h2 className="text-white text-lg font-normal">Welcome to </h2>
            <button>explore</button>
        </div>
        <div className="">
             <img src="https://i.ibb.co.com/Tk2wg8m/Screenshot-178.png" className=" rounded-full md:h-[700px] md:w-[700px] shadow-2xl outline outline-2"  alt="" />
             
         
        </div>
       
    </div>
  );
};

export default Banner;
