import { useEffect, useState } from "react";
import axios from "axios";
import MainLayoutUser from "../layout/MainLayoutUser";
import { Link } from "react-router-dom";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswer, setUserAnswer] = useState(Array(60).fill(0));
  const [result, setResult] = useState([]);
  const [message, setMessage] = useState("");
  const [answeredQuestions, setAnsweredQuestions] = useState({}); // State to track answered questions

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:5000/questions");
    setQuestions(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/adduseranswer", {
        user_answer_tmua: userAnswer,
      });
      setMessage("Jawaban berhasil disimpan!");
    } catch (error) {
      console.error("Error submitting answer:", error);
      setMessage("Gagal menyimpan jawaban!");
    }
  };

  const handleAnswer = (questionIndex, answerValue) => {
    const newAnswers = [...userAnswer];
    newAnswers[questionIndex] = answerValue;
    setUserAnswer(newAnswers);

    // Mark the question as answered
    setAnsweredQuestions((prev) => ({
      ...prev,
      [questionIndex]: answerValue,
    }));
  };

  const handleResult = async () => {
    try {
      await axios.post("http://localhost:5000/result", {
        id_tmua: result,
      });
      setMessage("Jawaban berhasil disimpan!");
      setResult([]); // Reset result setelah berhasil disimpan
    } catch (error) {
      console.error("Error submitting answer:", error);
      setMessage("Gagal menyimpan jawaban!");
    }
  };

  return (
    <MainLayoutUser>
      <div className="mx-auto p-4 xl:w-[70%]">
        <form onSubmit={handleSubmit} className="space-y-4">
          {questions.map((question, index) => (
            <li key={question.id_tmq} className="list-none px-6 pt-6">
              <div className="flex flex-col h-[140px]">
                <p className="text-center mb-[16px] xl:text-xl">
                  <span>{question.id_tmq}.</span> {question.question_tmq}
                </p>
                <div className="flex justify-center gap-4 mb-2">
                  <input
                    type="button"
                    value="Tidak"
                    onClick={() => handleAnswer(index, 0)}
                    className="bg-red-500 text-white py-2 px-4 rounded 
                    hover:bg-red-700"
                  />
                  <input
                    type="button"
                    value="Iya"
                    onClick={() => handleAnswer(index, 1)}
                    className="bg-green-500 text-white py-2 px-4 rounded 
                    hover:bg-green-700"
                  />
                </div>
                {answeredQuestions[index] !== undefined && (
                  <p className="text-center mt-2">
                    Jawaban Anda:{" "}
                    {answeredQuestions[index] === 0 ? "Tidak Setuju" : "Setuju"}
                  </p>
                )}
              </div>
            </li>
          ))}
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 
            items-end "
            >
              Submit
            </button>
          </div>
        </form>
        {message && (
          <div>
            <p className="mt-4">{message}</p>
            <Link to="/result">
              <button
                onClick={handleResult}
                type="submit"
                className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600 
            items-end "
              >
                Tampilkan Hasil
              </button>
            </Link>
          </div>
        )}
      </div>
    </MainLayoutUser>
  );
};

export default Questions;
