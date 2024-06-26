import { Link } from "react-router-dom";
import { findTalent } from "../assets";

const LandingPage = () => {
  return (
    <div className="bg-gray-50 xl:h-svh flex items-center xl:justify-center flex-col ">
      <div
        className="text-justify text-black w-[90%] md:w-[70%] xl:w-[75%] my-6 xl:my-0
        xl:grid xl:grid-cols-2 xl:gap-8 xl:border xl:p-24 xl:bg-sky-50
        xl:rounded-md"
      >
        <div className="md:flex items-center justify-center ">
          <img src={findTalent} className="rounded-md md:w-[700px]" />
        </div>
        <div className="xl:flex xl:text-xl 2xl:text-xl flex-col xl:justify-center">
          <h2 className="mt-4 text-center ">
            <strong className="bg-gray-800 text-white p-1">
              {" "}
              @ GOT TALENT
            </strong>{" "}
            membantumu menemukan bakat dan minat dengan menjawab tes{" "}
            <span className="underline underline-offset-2">RIASEC</span>{" "}
            berikut.
          </h2>
          <div className="flex justify-center">
            <Link to="/rules">
              <button
                className="btn bg-sky-200 flex justify-center hover:text-white font-bold 
              btn-wide text-black text-base my-3 xl:my-5"
              >
                START TEST
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
