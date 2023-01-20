import React from "react";
import "./Cards.css";
import img from "../../assets/images/03_Favourite_blank/Group38/group/icon_nothing.png";
import likeactive from "../../assets/images/02_Home_Favourite/Group/icon_favourite_Active.png";
function CardMobile() {
  return (
    <div className="card-container">
      <div className="top-text-div">
        <p>6 City added to favourite </p>
        <p>Remove all </p>
      </div>
      <div className="card">
        <div className="card-innertext-div">
          <p className="card-city-text">CIty,state</p>
          <img src={likeactive} className="card-climate-img" />
          <span className="card-temp-text"> 31 </span>
          <span> °C </span>
          <span className="card-climate-text"> Mostly sunny</span>
        </div>
        <img src={likeactive} className="card-likeactive-img" />
      </div>
    </div>
  );
}
function CardWeb() {
  return (
    <div className="card-container-web">
      <div className="top-text-div">
        <p>6 City added to favourite </p>
        <p>Remove all </p>
      </div>
      <div className="card">
        <p className="card-city-text">CIty,state</p>
        <div
       
          className='web'
        >
          <img src={likeactive} className="card-climate-img" />
          <span className="card-temp-text"> 31 </span>
          <span> °C </span>
          <span className="card-climate-text"> Mostly sunny</span>
        </div>

        <img src={likeactive} className="card-likeactive-img" />
      </div>
    </div>
  );
}

export { CardMobile, CardWeb };
