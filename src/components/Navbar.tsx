import { Link } from "react-router-dom";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <nav className="py-10 flex justify-around items-center">
      <span className="flex font-bold text-[#FC4308] text-2xl">
        ARTEMS.news
      </span>
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/">Category</Link>
        <Link to="/">Contact</Link>
        <Link to="/"></Link>
      </div>
      <InputSearch />
    </nav>
  );
};

export default Navbar;
