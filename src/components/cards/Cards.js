import React, { useEffect } from "react";
import "./Cards.css";
import likeactive from "../../assets/images/02_Home_Favourite/Group/icon_favourite_Active.png";
import likeinactive from "../../assets/images/icon_favourite.png";
import { ToastContainer, toast } from "react-toastify";
import sunny from "../../assets/images/01_Home/background/icon_mostly_sunny.png";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavData,
  filterFavData,
  setCity,
  setState,
} from "../../Redux/WeatherSlice";

function CardMobile({ weatherData }) {
  return (
    <div className="card-container">
      {weatherData.length > 0
        ? weatherData.map((e) => {
            return (
              <div key={e.id} className="card">
                <div className="card-innertext-div">
                  <p className="card-city-text">{e.name}</p>
                  <img src={sunny} className="card-climate-img" />
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
  const navigate = useNavigate();
  const state = useSelector((state) => state.weather.state);
  useEffect(() => {}, [state]);
  const favData = useSelector((state) => state.weather.favData);
  const dispatch = useDispatch();
  // console.log("favDDDDDD", favData);
  return (
    <div>
      <div className="card-container-web">
        {weatherData.length > 0
          ? weatherData.map((e) => {
              return (
                <div className="card" key={e.id}>
                  <p
                  
                    onClick={() => {
                      dispatch(setCity(e));
                      navigate("/");
                    }}
                    className="card-city-text"
                  >
                    {e.name}
                  </p>
                  <div className="web">
                    <img src={sunny} className="card-climate-img" />
                    <div style={{ position: "absolute", left: "80px" }}>
                      <span className="card-temp-text">
                        {" "}
                        {(e.main.temp_min - 273.15).toFixed(1)}{" "}
                      </span>
                      <span> °C </span>
                    </div>

                    <span className="card-climate-text">
                      {" "}
                      {e.weather[0].description}
                    </span>
                  </div>
                  {favData.length > 0 ? (
                    favData.filter((item) => item.id === e.id).length > 0 ? (
                      <button
                        onClick={() => {
                          dispatch(filterFavData(e.id));
                          dispatch(setState());
                        }}
                        style={{ border: "0px", background: "transparent" }}
                      >
                        <img src={likeactive} className="card-likeactive-img" />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          dispatch(addToFavData(e));
                          dispatch(setState());
                          toast.success("Added to Favourite", {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: false,
                            progress: undefined,
                            theme: "dark",
                          });
                        }}
                        style={{ border: "0px", background: "transparent" }}
                      >
                        <img
                          src={likeinactive}
                          className="card-likeactive-img"
                        />
                      </button>
                    )
                  ) : (
                    <button
                      onClick={() => {
                        dispatch(addToFavData(e));
                        dispatch(setState());
                        toast.success("Added to Favourite", {
                          position: "top-right",
                          autoClose: 1000,
                          hideProgressBar: true,
                          closeOnClick: true,
                          pauseOnHover: false,
                          draggable: false,
                          progress: undefined,
                          theme: "dark",
                        });
                      }}
                      style={{ border: "0px", background: "transparent" }}
                    >
                      <img src={likeinactive} className="card-likeactive-img" />
                    </button>
                  )}
                </div>
              );
            })
          : null}
      </div>
      <ToastContainer />
    </div>
  );
}

export { CardMobile, CardWeb };
