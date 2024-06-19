import axios from "axios";
import { useEffect, useState } from "react";

const BE = () => {
  const [arr, setArr] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:5000/api/questions");
    setArr(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="bg-white flex flex-col  justify-center items-center">
      <h2 className="text-xl text-black mt-8">Pertanyaan: </h2>
      <div className="flex flex-col my-4 md:w-[80%] lg:w-[50%] text-black text-base">
        {arr.map((question) => (
          <li
            key={question.id_tmq}
            className="list-none border border-black
            px-6 pt-6 "
          >
            <p className="text-center">
              <span>{question.id_tmq}.</span> {question.question_tmq}
            </p>
            <div className="flex gap-2 justify-center">
              <button
                className="btn bg-error hover:text-white font-bold 
              btn-sm text-black text-base my-3 xl:my-5 hover:bg-error"
              >
                No
              </button>
              <button
                className="btn bg-accent flex justify-center hover:text-white 
                font-bold btn-sm text-black text-base my-3 xl:my-5 hover:bg-accent"
              >
                Yes
              </button>
            </div>
            <div className="flex justify-end">
              <button
                className="btn bg-info flex justify-center hover:text-white 
                btn-sm text-black text-base my-3 xl:my-5 hover:bg-info"
              >
                Next
              </button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default BE;
