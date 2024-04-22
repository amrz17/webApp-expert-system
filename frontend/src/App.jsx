import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [arr, setArr] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api/users");
    setArr(response.data.diagnosa);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl">Pisikolog Online</h1>
        <h2>Diagnosa Penyakit Mental : </h2>
        {arr.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </div>
    </>
  );
}

export default App;
