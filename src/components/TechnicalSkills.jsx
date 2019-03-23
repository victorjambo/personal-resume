import React from "react";

const TechnicalSkills = ({skills}) => {
  const items = skills.map(skill => (
    <div className="candidatos" key={skill+Math.random()}>
      <div className="parcial">
        <div className="info">
          <div className="nome">{skill.stack}</div>
          <div className="percentagem-num">{skill.level}</div>
        </div>
        <div className="progressBar">
          <div className="percentagem" style={{ width: skill.level }} />
        </div>
      </div>
    </div>
  ))
  return (
  <div className="each-skills">
    {items}
  </div>
)};

export default TechnicalSkills;
