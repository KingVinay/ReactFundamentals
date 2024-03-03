import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "GoLang",
    level: "beginner",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Python+Django",
    level: "intermediate",
    color: "#FF3B00",
  },
];

function App() {
  const skilllist = skills;
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <div className="skill-list">
          {skilllist.map((skills) => (
            <SkillList skillsObj={skills} key={skills.skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./PhotoVinay.jpeg" alt="Vinay's pic" />;
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

function SkillList({ skillsObj }) {
  console.log(skillsObj);
  return (
    <div className="skill" style={{ backgroundColor: skillsObj.color }}>
      <span>{skillsObj.skill}</span>

      {/* Using Ternary Operator */}

      {skillsObj.level === "advanced" ? (
        <span>💪</span>
      ) : skillsObj.level === "intermediate" ? (
        <span>👍</span>
      ) : (
        <span>👶</span>
      )}

      {/* Another Method = if first condition true then code prints else short circuit and move to next line */}
      {/* <span>
        {level === "beginner" && "👶"} 
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
