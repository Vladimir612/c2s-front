import React from "react";
import "./ONama.scss";

const ONama = () => {
  return (
    <div>
      <div className="logo-c2s">
        <div className="levi-trapez"></div>
        <div className="srednji-trapez"></div>
        <div className="desni-trapez"></div>
        <div className="lopte-nav">
          <div className="lop lopta-1 active">1</div>
          <div className="lop lopta-2">2</div>
          <div className="lop lopta-3">3</div>
          <div className="lop lopta-4">4</div>
          <div className="lop lopta-5">5</div>
          <div className="lop lopta-6">6</div>
        </div>
        <div className="linije-nav">
          <div className="lin linija-1"></div>
          <div className="lin linija-2"></div>
          <div className="lin linija-3"></div>
          <div className="lin linija-4"></div>
          <div className="lin linija-5"></div>
        </div>
      </div>
    </div>
  );
};

export default ONama;
