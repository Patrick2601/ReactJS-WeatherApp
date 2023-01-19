import { NavLink, Link, Outlet, Route, Routes } from "react-router-dom";
import "./Home.css";
import searchlogo from "../../assets/images/01_Home/Group2/icon_search_white.png";
import weatherLogo from "../../assets/images/01_Home/logo_web.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useState } from "react";
import Weatherdetails from "../../components/Weatherdetails";
import HomeComponent from "../../components/HomeComponent";
import Favourite from "../Favourite/favourite";
import Recent from "../Recentsearch/Recent";
import { useNavigate } from "react-router-dom";
import Searchpage from "../SearchPage/Searchpage";
import moment from "moment";

function Home() {
  const [searchpage, setSearchPage] = useState(false);
  const navigate = useNavigate();
  const ref = useRef(null);
  const openDrawer = () => {
    console.log("ggg");
    ref.current.style.display = "block";
  };
  return (
    <div className="main">
      <div ref={ref} className="drawer">
        <button
          style={{ border: "0px", background: "transparent" }}
          onClick={() => {
            ref.current.style.display = "none";
          }}
        >
          <FontAwesomeIcon
            icon={faPlus}
            size="2x"
            style={{
              transform: "rotate(45deg)",
              position: "absolute",
              right: "10px",
              top: "10px",
            }}
          />
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate("/");
            ref.current.style.display = "none";
          }}
        >
          <p className="drawer-text">Home</p>
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate("/favourite");
            ref.current.style.display = "none";
          }}
        >
          <p className="drawer-text">favourite</p>
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate("/Recent");
            ref.current.style.display = "none";
          }}
        >
          <p className="drawer-text">Recent Search</p>
        </button>
      </div>
      {!searchpage ? (
        <>
          <header className="mainheader">
            <button
              style={{ background: "transparent", border: "0px" }}
              onClick={openDrawer}
            >
              <FontAwesomeIcon icon={faBars} className="baricon" />
            </button>

            <img src={weatherLogo} className="weatherLogo" />
            <button
              style={{ background: "transparent", border: "0px" }}
              onClick={() => {
                setSearchPage(true);
                ref.current.style.display = "none";
              }}
            >
              <img src={searchlogo} className="searchlogo" />
            </button>
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
            <span className="datetime">
              {moment().format("ddd, DD MMM YYYY hh:mm:a")}
            </span>
          </div>
          <Routes>
            <Route path="/" element={<HomeComponent />}></Route>
            <Route path="/favourite" element={<Favourite />}></Route>
            <Route path="/Recent" element={<Recent />}></Route>
            <Route path="/Search" element={<Searchpage />}></Route>
          </Routes>
        </>
      ) : (
        <Searchpage setSearchPage={setSearchPage} />
      )}

      {/* <Outlet /> */}
    </div>
  );
}
export default Home;
