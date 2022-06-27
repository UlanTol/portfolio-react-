import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";

import "./Footer.css";
import { useHref } from "react-router-dom";

const Footer = () => {
  function toInstagram() {
    useHref;
  }
  return (
    <div className="footer">
      <div>
        <a href="https://www.instagram.com/t1gnv/">
          <InstagramIcon />
        </a>
        <a href="">
          <CallIcon />
        </a>

        <FacebookIcon />
      </div>
      <p> &copy; 2022 Ulan</p>
    </div>
  );
};

export default Footer;
