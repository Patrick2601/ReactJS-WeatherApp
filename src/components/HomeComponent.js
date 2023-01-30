import React, { useEffect } from "react";

import { useState } from "react";
import likeactive from "../assets/images/02_Home_Favourite/Group/icon_favourite_Active.png";
import Weatherdetails from "./Weatherdetails";
import likeinactive from "../assets/images/icon_favourite.png";
import moment from "moment";
import sunny from "../assets/images/01_Home/background/icon_mostly_sunny.png";
import { getWeather } from "../services/Api";
import { useDispatch, useSelector } from "react-redux";
import {
  addSearchData,
  addToFavData,
  filterFavData,
  setCity,
} from "../Redux/WeatherSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomeComponent({ cityname }) {
  const weatherData = useSelector((state) => state.weather.city);
  const dispatch = useDispatch();
  const [tempToggle, settemptoggle] = useState(false);
  const [liked, setliked] = useState(false);
  // const [weatherData, setWeatherData] = useState({});
  const favData = useSelector((state) => state.weather.favData);
  useEffect(() => {
    setTimeout(async () => {
      if (cityname.name !== undefined) {
        const response = await getWeather(cityname.name);
        // console.log("res", response);
        if (response === undefined) {
          // console.log("i m in");
          toast.error("Error", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });
        } else {
          // setWeatherData(response);
          dispatch(addSearchData(response));
          dispatch(setCity(response));
        }
      }
    }, 1000);
  }, [cityname]);
  // console.log("gaggadad", weatherData);
  const addFav = () => {
    dispatch(addToFavData(weatherData));
    setliked(!liked);
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
  };
  return (
    <div>
      {JSON.stringify(weatherData) !== "{}" ? (
        <>
          <div className="weatherdetails">
            <p className="datetimetext">
              {moment().format("ddd, DD MMM YYYY h:mm:a")}
            </p>
            <p className="citytext">{weatherData.name}</p>
            <div>
              {favData.length > 0 ? (
                favData.filter((e) => e.id === weatherData.id).length > 0 ? (
                  <button
                    className="favbtn"
                    onClick={() => {
                      // console.log("gggg88");
                      dispatch(filterFavData(weatherData.id));
                      setliked(!liked);
                    }}
                  >
                    <img src={likeactive} />
                  </button>
                ) : (
                  <button
                    className="favbtn"
                    onClick={() => {
                      addFav();
                    }}
                  >
                    <img src={likeinactive} />
                  </button>
                )
              ) : (
                <button
                  className="favbtn"
                  onClick={() => {
                    addFav();
                  }}
                >
                  <img src={likeinactive} />
                </button>
              )}

              <span className="addfavtext">Add to favourite</span>
              <ToastContainer />
            </div>
            <img src={sunny} className="climateimg" />
            <div className="temperaturetext">
              {!tempToggle ? (
                <>
                  <span className="temperaturetext">
                    {(weatherData.main.temp - 273.15).toFixed(1)}
                  </span>{" "}
                  <button
                    onClick={() => settemptoggle(!tempToggle)}
                    style={{ border: "0px", background: "transparent" }}
                  >
                    <span>&#8451;{"  "}</span>
                  </button>
                </>
              ) : (
                <>
                  <span className="temperaturetext">
                    {((weatherData.main.temp - 273.15) * 1.8 + 32).toFixed(1)}
                  </span>
                  <button
                    onClick={() => settemptoggle(!tempToggle)}
                    style={{ border: "0px", background: "transparent" }}
                  >
                    {" "}
                    <span>&#8457;</span>
                  </button>
                </>
              )}

              <p className="climatetext">
                {weatherData.weather[0].description}
              </p>
            </div>
          </div>

          <Weatherdetails WeatherData={weatherData} />
        </>
      ) : (
        <div
          style={{
            textAlign: "center",
            // border: "1px solid",
            margin: "300px auto",
            opacity: "0",
            animation: "search 1s ease 0.3s 1 forwards",
          }}
        >
          Search a City
        </div>
      )}
    </div>
  );
}

export default HomeComponent;
