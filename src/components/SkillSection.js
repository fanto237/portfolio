import React from "react";

function SkillSection({ skill, progression }) {
  return (
    <div className="skill-section">
      <div className="skill-container">
        <h5 className="skill-title">{skill}</h5>
        <div className="skill-bar">
          <p className="skill-number">{progression}</p>
          <div className="skill-progress">
            <div className="progress">
              <div
                className="inner-progress"
                style={{ width: progression }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
