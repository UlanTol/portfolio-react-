import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitlIcon from "@mui/icons-material/GitHub";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import "animate.css";

import "./styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Ulan </h2>
        <div className="prompt">
          <p className="animate__slideInUp">
            {" "}
            Little bit about me: First of all i'm a beginner web developer and
            I've been doing web development since May in 2022. At the moment
            i'am learning these fascinating things as HTML\CSS, JavaScript and
            React also trying to create amazing projects like this website) I am
            a sportsman, almost 6 years I am in sport, have big enough
            background In grappling and MMA. In addition, have big goals in
            these industries and hope i will get it. I'm not afraid of big
            changes and open to new ideas.
          </p>
          <h4
            style={{
              color: "aliceblue",
              fontSize: "small",
            }}>
            Жырга
          </h4>
          <div id="icons">
            <a href="https://mail.google.com/mail/u/0/#search/tologonov.ulan22%40gmail.com">
              <EmailIcon />
            </a>
            <a href="https://github.com/UlanTol/">
              <GitlIcon />
            </a>
            <a href="https://www.linkedin.com/in/ulan-tologonov-76a391239/">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <img
          style={{ borderRadius: "90px", marginTop: "45px" }}
          // src="http://weeek.net/uploads/blog/683d3857eb802a86b3622c4dc88ee9fc.png"
          src="https://institute.careerguide.com/wp-content/uploads/2020/11/coach-goodhabitz-wevoke-dribbble-01.gif"
          alt="Image"
        />
        <h1>Skills</h1>
        <div className="list">
          <span className="item">
            <h2>FrontEnd</h2>
            <p>ReactJS HTML CSS Material UI Bootstrap </p>
          </span>
          <li className="item">
            <h2>Languages</h2>

            <p>JavaScript</p>
          </li>
          <span className="item">
            <h2>Hobby</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              eum provident voluptas placeat, similique veniam, accusantium,
              porro sunt sint deleniti cupiditate. Dolorum modi sit officiis
              laboriosam dolor labore facilis fuga.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
