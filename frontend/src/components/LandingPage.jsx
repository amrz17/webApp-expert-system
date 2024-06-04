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
        <div className="xl:flex 2xl:text-xl flex-col xl:justify-center">
          <h2 className="mt-4 text-center ">
            <strong className="bg-base-100 text-white p-1">
              {" "}
              @ GOT TALENT
            </strong>{" "}
            membantumu menemukan bakat dan minat dengan menjawab tes{" "}
            <span className="underline underline-offset-2">RIASEC</span>{" "}
            berikut.
          </h2>
          <div className="flex justify-center">
            <button
              className="btn bg-sky-200 flex justify-center hover:text-white font-bold 
              btn-block text-black text-base my-3 xl:my-5"
            >
              START TEST
            </button>
          </div>
          <h2>
            Mengetahui apa yang kamu suka dan apa yang kamu pandai lakukan
            sangat penting. Ini bisa membantumu memilih kegiatan dan pekerjaan
            yang cocok buat mu, menyenangkan dan membuatmu bersemangat. Dengan
            mengetahui bakat dan minatmu, kamu bisa menjadi lebih baik dalam
            hal-hal yang kamu lakukan. Ini juga membantumu membuat keputusan
            yang baik tentang sekolah dan pekerjaan nanti, sehingga kamu merasa
            bahagia dan tidak menyesal.
          </h2>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
