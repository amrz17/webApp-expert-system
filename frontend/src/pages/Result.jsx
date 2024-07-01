import { useEffect, useState } from "react";
import MainLayoutUser from "../layout/MainLayoutUser";
import axios from "axios";

const Result = () => {
  const [userResult, setUserResult] = useState();

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:5000/result");
    setUserResult(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <MainLayoutUser>
      <div className="flex h-screen justify-center items-center">
        <div className="border border-white">
          {userResult.map((result) => {
            <div key={result.id_tmur}>{result.score_tmur}</div>;
          })}
        </div>
      </div>
    </MainLayoutUser>
  );
};

export default Result;
