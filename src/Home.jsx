import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitlIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import "./styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi my name is Ulan </h2>
        <div className="prompt">
          <p>
            I'm a student at 55th school.As soon as possible I want to be middle
            or even junior web developer. I've been doing web development since
            May in 2022. I can be called Jr HTML\CSS developer but in future I
            will be called a JS developer. In addition i have big dream in heart
            in this industry and i think i will get it. If you ask me Why IT and
            Why exactly web developing here my answer-it has a lot of great
            interesting things. Also I am a candidate of master of sport of
            Grappling. I love sports so much like voleyball,cycling,mma and
            grappling. I'm not afraid of big changes and open to new ideas.
          </p>
          <div id="icons">
            <EmailIcon />
            <GitlIcon />
            <CallIcon />
          </div>
        </div>
      </div>
      <div className="skills">
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
