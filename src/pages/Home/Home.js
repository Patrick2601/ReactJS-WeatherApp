import { NavLink, Link } from "react-router-dom";
import "./Home.css";
import searchlogo from "../../assets/images/01_Home/Group2/icon_search_white.png";
import weatherLogo from "../../assets/images/01_Home/logo_web.png";
import likeactive from "../../assets/images/02_Home_Favourite/Group/icon_favourite_Active.png";
import likeinactive from "../../assets/images/icon_favourite.png";
import sunny from "../../assets/images/01_Home/background/icon_mostly_sunny.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import Weatherdetails from "../../components/Weatherdetails";
function Home() {
  const [liked, setliked] = useState(false);
  return (
    <div className="main">
      <header className="mainheader">
        <FontAwesomeIcon icon={faBars} className="baricon" />
        <img src={weatherLogo} className="weatherLogo" />
        <img src={searchlogo} className="searchlogo" />
        <div className="searchdiv">
          <input
            type="text"
            className="searchtextinput"
            placeholder="Search here"
           
            name="search"
          />
          <img src={searchlogo} />
        </div>
      </header>
      <div className="topnav">
        <NavLink to="favourite">favt page</NavLink>
      </div>

      <div className="weatherdetails">
        <p className="datetimetext">Date and time</p>
        <p className="datetimetext citytext">City,state</p>
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
        <div>
          <span className="temperaturetext">31</span>
          <span>&#8451;{"  "}</span>
          <span>&#8457;</span>
        </div>
        <p className="datetimetext">Mostly Sunny</p>
      </div>
      {/* <NavLink to="about">Click to view our about page</NavLink> */}

      <Weatherdetails />
    </div>
  );
}
export default Home;
