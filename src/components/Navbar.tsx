import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-5 h-[50px] text-white bg-purple-800">
      <h3 className="font-bold italic">Saadet Store</h3>
      <div className="text-xl font-oswald">
        <Link to="/" className="mr-2">
          Home
        </Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
};

export default NavBar;
