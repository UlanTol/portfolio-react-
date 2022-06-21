import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <InstagramIcon />
        <LinkedinIcon />
        <FacebookIcon />
      </div>
      <p> &copy; 2022 Ulan</p>
    </div>
  );
};

export default Footer;
