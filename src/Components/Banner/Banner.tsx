import { Link } from "react-router-dom";
import { FaChessQueen} from "react-icons/fa";
import { FaFan } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#E0E0D6] relative">
      <div className="max-w-7xl mx-auto md:flex md:flex-row-reverse md:justify-between gap-20  items-center  min-h-[75vh] ">
        <div className="">
          <img
            className="mb-10   h-[55vh] w-[55vh] rounded-full  shadow-2xl "
            src="https://i.ibb.co.com/0hmz8wp/4-reasons-adults-team-sports-header-image.jpg"
            alt=""
          />
        </div>
        <div className="leading-[52px] mb-10 font-Saira">
          <h2 className="text-[#002966] text-[46px]   font-bold  mb-6 ">
            Welcome to SportUp
          </h2>
          <p className="text-[#003566] text-xl font-semibold ">
            SportUp is a{" "}
            <span className="text-[#003566] ">
              sport facility booking Platform
            </span>{" "}
            where people can rent <br />
            different kind of playing ground for a better and healthy life.
          </p>
          <button className="mt-6  py-1 px-4  bg-black text-xl font-medium text-white ">
            <Link to={"/facility"}>Get Started</Link>
          </button>
        </div>
      </div>

      <div className="hidden md:block w-[67%] mx-auto h-32 absolute right-0 left-0 -bottom-16 ">

        <div className="md:flex justify-between items-center text-white ">
          <div className="bg-black flex-1 h-full">
            <div className="flex items-center gap-3 p-6 h-32 ">
              <p className="text-7xl text-white ">
                <FaChessQueen></FaChessQueen>
              </p>
              <div>
              <h2 className="font-semibold text-xl"> Bullseye Field Point</h2>
              <p>A sharp pointed head for your arrow that hits the target.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#003566] flex-1 h-full">
            <div className="flex items-center gap-3 p-6 h-32">
              <p className="text-7xl text-white">
                <FaFan></FaFan>
              </p>
              <h2> sports</h2>
            </div>
          </div>
          <div className="bg-black flex-1 h-full">
            <div className="flex items-center gap-3 p-6 h-32">
              <p className="text-7xl text-white">
                <FaRegDotCircle></FaRegDotCircle>
              </p>
              <h2> sports</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
