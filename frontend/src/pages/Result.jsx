import { useEffect, useState } from "react";
import axios from "axios";

const Result = () => {
  const [userResult, setUserResult] = useState([]);
  const [kategori, setKategori] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/lastanswerdetails",
      );
      const data = Array.isArray(response.data)
        ? response.data
        : [response.data];
      setUserResult(data);

      // Fetch kategori data
      const kategoriResponse = await axios.get(
        "http://localhost:5000/category",
      );
      setKategori(kategoriResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setUserResult([]);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="">
        {Array.isArray(userResult) && userResult.length > 0 ? (
          userResult.map((result) => (
            <div key={result.id_tmur}>
              {kategori.map((cat) => (
                <div key={cat.id_tmc}>
                  {result.result_tmur == cat.id_tmc && (
                    <div className="text-center">
                      <h1 className="text-xl underline underline-offset-4">
                        id user = {result.id_tmur} : {cat.category_name_tmc}
                      </h1>
                      <p>{cat.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))
        ) : (
          <div>No results found</div>
        )}
      </div>
    </div>
  );
};

export default Result;
