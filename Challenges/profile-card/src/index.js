import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <div class="skill-list">
          <SkillList color="blue" skillname="HTML + CSS" emoji="&#129321;" />
          <SkillList color="yellow" skillname="Javascript" emoji="&#129322;" />
          <SkillList
            color="teal"
            skillname="Python and Django"
            emoji="&#129323;"
          />
          <SkillList
            color="orange"
            skillname="Git and Github"
            emoji="&#129325;"
          />
          <SkillList color="aqua" skillname="React" emoji="&#129327;" />
          <SkillList color="red" skillname="Unity" emoji="&#129320;" />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img class="avatar" src="./PhotoVinay.jpeg" alt="Vinay's pic" />;
}

function Intro() {
  return (
    <div>
      <h1>Vinay Singh</h1>
      <p>
        Full-stack web developer and Studying at Udemy. When not coding or
        studying a course, I like to play board games, to cook (and eat), or to
        just enjoy the watching anime.
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div class="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skillname}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
