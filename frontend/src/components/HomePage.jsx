import { talent } from "../assets";

const HomePage = () => {
  return (
    <div className="bg-white xl:h-svh flex items-center xl:justify-center flex-col ">
      <div
        className="text-justify text-black w-[90%] md:w-[80%] xl:w-[70%] my-6 xl:my-0
        xl:grid xl:grid-cols-2 xl:gap-8 xl:border  xl:p-24 xl:bg-[#00ffff]
        xl:rounded-md"
      >
        <div className="xl:flex items-center justify-center ">
          <img src={talent} className="rounded-md md:w-[700px] xl:h-[450px] " />
        </div>
        <div className="xl:flex flex-col xl:justify-center">
          <h2 className="mt-2">
            Temukan bakat dan minat mu bersama kami dengan menjawab tes berikut.
          </h2>
          <div className="flex justify-center">
            <button className="btn bg-warning flex justify-center hover:text-white font-bold btn-block md:btn-wide text-black text-base my-3">
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
export default HomePage;
