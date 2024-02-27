import React from "react";
import notfoundImg from "../../assets/404/404pic.gif";
import "./NoPage.css";
const NoPage = () => {
  return (
    <div className="NoPage">
      <div className="box404">
        <h1>404</h1>
        <img src={notfoundImg} alt="" />
      </div>
    </div>
  );
};

export default NoPage;
