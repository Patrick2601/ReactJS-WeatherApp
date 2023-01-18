import React from "react";

import { useState } from "react";
import likeactive from "../assets/images/02_Home_Favourite/Group/icon_favourite_Active.png";
import Weatherdetails from "./Weatherdetails";
import likeinactive from "../assets/images/icon_favourite.png";
import sunny from "../assets/images/01_Home/background/icon_mostly_sunny.png";
function HomeComponent() {
  const [liked, setliked] = useState(false);
  return (
    <div>
      <div className="weatherdetails">
        <p className="datetimetext">DATE and TIME</p>
        <p className="citytext">City,state</p>
        <div>
          {liked ? (
            <button
              className="favbtn"
              onClick={() => {
                console.log("gggg");
                setliked(!liked);
              }}
            >
              <img src={likeactive} />
            </button>
          ) : (
            <button
              className="favbtn"
              onClick={() => {
                console.log("gggg");
                setliked(!liked);
              }}
            >
              <img src={likeinactive} />
            </button>
          )}

          <span className="addfavtext">Add to favourite</span>
        </div>
        <img src={sunny} className="climateimg" />
        <div className="temperaturetext">
          <span className="temperaturetext">31</span>
          <span>&#8451;{"  "}</span>
          <span>&#8457;</span>
        <p className="climatetext">Mostly Sunny</p>
        </div>
      </div>

      <Weatherdetails />
    </div>
  );
}

export default HomeComponent;
