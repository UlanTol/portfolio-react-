import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

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
      {/* <Stack className="avatar" direction="row" spacing={2}>
        <Avatar
          sx={{ width: 56, height: 56 }}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
      </Stack> */}
    </div>
  );
};

export default Navbar;
