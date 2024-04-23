import { NavLink } from "react-router-dom";
import InputSearch from "../components/InputSearch";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-5">
      <span className="flex font-bold text-[#B7DFFF] text-2xl">
        ARTEMS.news
      </span>
      <div className="flex gap-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/news/business">Business</NavLink>
        <NavLink to="/news/entertainment">Entertainment</NavLink>
        <NavLink to="/news/sports">Sports</NavLink>
        <NavLink to="/news/technology">Technology</NavLink>
        <NavLink to="/news/science">Science</NavLink>
      </div>
      <InputSearch />
    </nav>
  );
};

export default Navbar;
