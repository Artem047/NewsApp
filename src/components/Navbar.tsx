import { Link } from "react-router-dom";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <nav className="py-10 flex justify-around items-center">
      <span className="flex font-bold text-[#B7DFFF] text-2xl">
        ARTEMS.news
      </span>
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/business">Business</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/technology">Technology</Link>
        <Link to="/science">Science</Link>
      </div>
      <InputSearch />
    </nav>
  );
};

export default Navbar;
