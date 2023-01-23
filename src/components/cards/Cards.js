import React, { useEffect } from "react";
import "./Cards.css";
import likeactive from "../../assets/images/02_Home_Favourite/Group/icon_favourite_Active.png";
import { useDispatch, useSelector } from "react-redux";
import { filterFavData } from "../../Redux/WeatherSlice";

function CardMobile({ weatherData }) {
  return (
    <div className="card-container">
      {/* <div className="top-text-div">
        <p>{weatherData.length} City added to favourite </p>
        <p>Remove all </p>
      </div> */}
      {weatherData.length > 0
        ? weatherData.map((e) => {
            return (
              <div className="card">
                <div className="card-innertext-div">
                  <p className="card-city-text">{e.name}</p>
                  <img src={likeactive} className="card-climate-img" />
                  <span className="card-temp-text"> 31 </span>
                  <span> °C </span>
                  <span className="card-climate-text"> Mostly sunny</span>
                </div>
                <img src={likeactive} className="card-likeactive-img" />
              </div>
            );
          })
        : null}
    </div>
  );
}
function CardWeb({ weatherData }) {
  const state = useSelector((state) => state.weather.state);
  useEffect(() => {}, [state]);
 const dispatch=useDispatch()
  return (
    <div>
      <div className="card-container-web">
        {/* <div className="top-text-div">
          <p>{weatherData.length} City added to favourite </p>
          <p>Remove all </p>
        </div> */}
        {weatherData.length > 0
          ? weatherData.map((e) => {
              return (
                <div className="card">
                  <p className="card-city-text">{e.name}</p>
                  <div className="web">
                    <img src={likeactive} className="card-climate-img" />
                    <span className="card-temp-text">
                      {" "}
                      {(e.main.temp_min - 273.15).toFixed(1)}{" "}
                    </span>
                    <span> °C </span>
                    <span className="card-climate-text">
                      {" "}
                      {e.weather[0].main}
                    </span>
                  </div>
                  <button 
                  onClick={()=>{
                    dispatch(filterFavData(e.name));
                  }}
                  style={{ border: "0px", background: "transparent" }}>
                    <img src={likeactive} className="card-likeactive-img" />
                  </button>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export { CardMobile, CardWeb };
