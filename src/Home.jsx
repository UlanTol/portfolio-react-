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
            I'm a student at 55th school.As soon as possible I'm going to be
            junior web developer. I've been doing web development since May in
            2022. Now i'am learning these precious and interesting things as
            HTML\CSS, JS language and React framework and trying create amazing
            projects like this website) In addition i have big dream, not just a
            dream but goal in this industry and i think i will get it. If you
            ask me Why IT and Why exactly web developing here my answer-it has a
            lot of great interesting things. I love sports so much like
            voleyball,cycling,MMA and grappling. I'm not afraid of big changes
            and open to new ideas.
          </p>
          <h4>Жырга</h4>
          <div id="icons">
            <EmailIcon />
            <GitlIcon />
            <CallIcon />
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
