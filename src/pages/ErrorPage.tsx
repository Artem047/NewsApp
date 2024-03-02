import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="relative flex gap-20 items-center justify-center flex-col py-5 overflow-hidden h-screen">
      <img src="/bg-error.png" alt="" className="absolute -z-10 left-[15%]" />
      <h1 className="uppercase font-black text-3xl text-center">
        <i>Not found</i>
      </h1>
      <img src="/error.svg" alt="" />
      <Link to="/" className="py-2 px-8 border-black border-4 flex items-center justify-center rounded-[30px] bg-[#E8F5FF]">
          <img src="/arrow.svg" alt="" />
          <p>Go Home</p>
      </Link>
    </div>
  );
};

export default ErrorPage;
