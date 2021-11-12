import React from "react";

function Title({ title, span, myColor }) {
  return (
    <div className="title-container">
      <div className="title">
        <h3 style={{ color: myColor }}>
          {title}
          <span>{span}</span>
        </h3>
      </div>
    </div>
  );
}

export default Title;
