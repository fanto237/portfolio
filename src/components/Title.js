import React from "react";

function Title({ title, span, myColor }) {
  return (
    <div className="title">
      <h3 style={{ color: myColor }}>
        {title}
        <span>{span}</span>
      </h3>
    </div>
  );
}

export default Title;
