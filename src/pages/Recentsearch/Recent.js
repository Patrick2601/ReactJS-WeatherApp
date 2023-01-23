import React, { useEffect, useState } from "react";
import "./Recent.css";
import img from "../../assets/images/03_Favourite_blank/Group38/group/icon_nothing.png";
import { useDispatch, useSelector } from "react-redux";
import { CardMobile, CardWeb } from "../../components/cards/Cards";
import { deleteSearchData, setState } from "../../Redux/WeatherSlice";

function Recent() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.searchData);
  const state = useSelector((state) => state.weather.state);
  useEffect(() => {}, [state]);
  // console.log('444',state);

  return (
    <div className="favcontainer">
      {weatherData.length === 0 ? (
        <div className="no-fav-div">
          <img src={img}></img>
          <p>No Recent added</p>
        </div>
      ) : null}

      {weatherData.length !== 0 ? (
        <div className="top-text-div">
          <p>{weatherData.length} City added to Recent </p>
          <button
            onClick={() => {
              console.log("genc");
              dispatch(deleteSearchData());
              dispatch(setState());
            }}
            style={{ background: "transparent", border: "0px" }}
          >
            <p>Remove all </p>
          </button>
        </div>
      ) : null}
      {weatherData.length !== 0 ? (
        <>
          <div className="mobile-view">
            <CardMobile weatherData={weatherData} />
          </div>
          <div className="web-view">
            <CardWeb weatherData={weatherData} />
          </div>
        </>
      ) : null}

      {/* <div className="mobile-view">
        <CardMobile weatherData={weatherData} />
      </div>
      <div className="web-view">
        <CardWeb weatherData={weatherData} />
      </div> */}
    </div>
  );
}

export default Recent;
