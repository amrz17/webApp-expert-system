import { Link } from "react-router-dom";
import MainLayoutUser from "../layout/MainLayoutUser";

const RuleTes = () => {
  return (
    <MainLayoutUser>
      <div className="flex h-screen justify-center items-center">
        <div
          className="flex flex-col w-[90%] md:w-[75%] xl:w-[60%] p-4 text-center 
        justify-center items-center gap-4"
        >
          <h2 className="text-xl font-bold xl:text-2xl">
            TATA CARA PENGISISAN
          </h2>
          <p className="xl:text-xl">
            Bacalah setiap pernyataan atau aktivitas dengan seksama. Tentukan
            apakah Anda setuju atau tidak setuju dengan pernyataan atau
            aktivitas tersebut. Jangan terlalu lama memikirkan jawaban Anda.
            Pilih jawaban yang pertama kali muncul di pikiran Anda. Setelah
            pernyataan terjawab semua klik tombol submit untuk melihat hasil
            tes.
          </p>
          <Link to="/start">
            <button
              className="bg-blue-500 btn-block text-white py-2 px-4 rounded 
          hover:bg-blue-700 xl:btn-wide"
            >
              Mulai Tes
            </button>
          </Link>
        </div>
      </div>
    </MainLayoutUser>
  );
};
export default RuleTes;
