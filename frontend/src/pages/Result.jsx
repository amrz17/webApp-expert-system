import { useState } from "react";
import axios from "axios";

const QuestionForm = () => {
  const [answers, setAnswers] = useState(Array(60).fill(0)); // Asumsi ada 60 pertanyaan
  const [prediction, setPrediction] = useState(null);
  const [message, setMessage] = useState("");

  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/result", {
        user_answer_tmua: answers,
      });
      setPrediction(response.data);
      setMessage("Jawaban berhasil disimpan dan prediksi berhasil dibuat!");
    } catch (error) {
      console.error("Error submitting answers:", error);
      setMessage("Gagal menyimpan jawaban atau membuat prediksi!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Jawab Pertanyaan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {answers.map((answer, index) => (
          <li key={index} className="list-none border p-4 mb-2">
            <p className="mb-2">Pertanyaan {index + 1}</p>
            <div className="flex gap-4">
              <input
                type="button"
                value="No"
                onClick={() => handleAnswer(index, 0)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
              />
              <input
                type="button"
                value="Yes"
                onClick={() => handleAnswer(index, 1)}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
              />
            </div>
          </li>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
      {prediction && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Prediksi</h3>
          <p>{JSON.stringify(prediction)}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
