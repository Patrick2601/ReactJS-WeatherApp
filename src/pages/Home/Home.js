import { NavLink, Link, Outlet, Route, Routes } from "react-router-dom";
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
import HomeComponent from "../../components/HomeComponent";
import Favourite from "../Favourite/favourite";
import Recent from "../Recentsearch/Recent";
function Home() {
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
        <NavLink
          to="/"
          className="tablink"
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "2px solid #FFA222" : "none",
              color: isActive ? "#FFA222" : "white",
            };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/favourite"
          className="tablink"
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "2px solid #FFA222" : "none",
              color: isActive ? "#FFA222" : "white",
            };
          }}
        >
          Favourite
        </NavLink>
        <NavLink
          to="/Recent"
          className="tablink"
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "2px solid #FFA222" : "none",
              color: isActive ? "#FFA222" : "white",
            };
          }}
        >
          Rescent Search
        </NavLink>
        <span className="datetime">Date and time</span>
      </div>
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/favourite" element={<Favourite />}></Route>
        <Route path="/Recent" element={<Recent />}></Route>
      </Routes>

      {/* <Outlet /> */}
    </div>
  );
}
export default Home;
