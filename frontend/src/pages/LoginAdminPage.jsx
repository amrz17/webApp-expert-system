import { admin, user } from "../assets";

const LoginAdminPage = () => {
  return (
    <>
      <div
        className="flex items-center justify-center 
        bg-white h-screen"
      >
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-base-100">@ GOT TALENT</h1>
          </div>
          <div className="flex justify-center items-center gap-2 mt-3">
            <h1 className="text-base-100 text-3xl font-outfit font-semibold">
              Login Admin
            </h1>
            <img src={user} />
          </div>

          <div className="">
            <img src={admin} width={340} />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <label className="text-black">Email</label>
              <input
                type="text"
                placeholder="example@gmail.com"
                className="input input-ghost input-bordered w-full max-w-lg"
              />
            </div>
            <div>
              <label className="text-black">Password</label>
              <input
                type="password"
                placeholder="******"
                className="input input-ghost input-bordered w-full max-w-lg"
              />
            </div>
          </div>
          <p className="flex justify-end text-sm mt-2 text-black hover:text-blue-500">
            Forget Password ?
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginAdminPage;
