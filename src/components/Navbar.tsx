import { NavLink } from "react-router-dom";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <nav className="py-10 flex justify-around items-center">
      <span className="flex font-bold text-[#B7DFFF] text-2xl">
        ARTEMS.news
      </span>
      <div className="flex gap-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/business">Business</NavLink>
        <NavLink to="/entertainment">Entertainment</NavLink>
        <NavLink to="/sports">Sports</NavLink>
        <NavLink to="/technology">Technology</NavLink>
        <NavLink to="/science">Science</NavLink>
      </div>
      <InputSearch />
    </nav>
  );
};

export default Navbar;
