import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        {" "}
        <button
          onClick={() => {
            setExpandNavbar(prev => !prev);
          }}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
};

export default Navbar;
