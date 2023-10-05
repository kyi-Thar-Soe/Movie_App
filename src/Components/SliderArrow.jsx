import React from "react";
import { GrPrevious, GrNext } from 'react-icons/gr'

export function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next-btn" style={{ marginRight: "-50px" }}>
        <GrNext />
      </button>
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev-btn" style={{ marginLeft: "-50px" }}>
        <GrPrevious />
      </button>
    </div>
  );
}
