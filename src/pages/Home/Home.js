import { NavLink, Link, Outlet, Route, Routes } from "react-router-dom";
import "./Home.css";
import searchlogo from "../../assets/images/01_Home/Group2/icon_search_white.png";
import weatherLogo from "../../assets/images/01_Home/logo_web.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import HomeComponent from "../../components/HomeComponent";
import Favourite from "../Favourite/favourite";
import Recent from "../Recentsearch/Recent";
import { useNavigate } from "react-router-dom";
import Searchpage from "../SearchPage/Searchpage";
import moment from "moment";
import { getDataFromApi } from "../../services/Api";
import { useDispatch } from "react-redux";
import { setState } from "../../Redux/WeatherSlice";
import { v4 as uuidv4 } from "uuid";
function Home() {
  const [text, setText] = useState("");
  const [cities, setCities] = useState([]);
  const [cityname, setCityName] = useState("");
  const [searchpage, setSearchPage] = useState(false);
  const navigate = useNavigate();
  const ref = useRef(null);
  const ref1 = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // ref1.current.focus();
    // ref1.current.placeholder = "";
    "Search here".split("").forEach((c, i) => {
      setTimeout(() => {
        ref1.current.placeholder+= c;
      }, 100 * i);
    });
  }, []);

  const openDrawer = () => {
    ref.current.style.display = "block";
  };

  return (
    <div className="main">
      <div
        onClick={() => {
          ref.current.style.display = "none";
        }}
        ref={ref}
        className="drawer"
      >
        {/* <button
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
              color: "black",
            }}
          />
        </button> */}
        <ul>
          <li
            onClick={() => {
              navigate("/");
              ref.current.style.display = "none";
            }}
            style={{ cursor: "pointer" }}
            className="drawer-text"
          >
            Home
          </li>

          <li
            onClick={() => {
              navigate("/favourite");
              ref.current.style.display = "none";
            }}
            style={{ cursor: "pointer" }}
            className="drawer-text"
          >
            favourite
          </li>

          <li
            onClick={() => {
              navigate("/Recent");
              ref.current.style.display = "none";
            }}
            style={{ cursor: "pointer" }}
            className="drawer-text"
          >
            Recent Search
          </li>
        </ul>
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
                autoComplete="off"
                ref={ref1}
                onChange={async (e) => {
                  setText(e.target.value);
                  const response = await getDataFromApi(text);
                  setCities(response);
                }}
                type="text"
                className="searchtextinput"
                // placeholder="Search here"
                name="search"
              />

              <img src={searchlogo} />
              {cities.length > 0 ? (
                <div className="cities-div-web">
                  {cities.map((e) => (
                    <button
                      key={uuidv4()}
                      style={{
                        background: "transparent",
                        border: "0px",
                        width: "100%",
                      }}
                      onClick={async () => {
                        setCityName(e);
                        cities.length = 0;
                        ref1.current.value = "";
                        dispatch(setState());
                        navigate("/");
                      }}
                    >
                      <p>{e.name}</p>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </header>
          <div className="topnav">
            <NavLink
              to="/"
              className="tablink"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #FFA222" : "none",
                  color: isActive ? "#FFA222" : "white",
                  fontSize: isActive ? "1.1rem" : "1rem",
                  transition: isActive ? "all 0.1s ease" : null,
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/favourite"
              className="tablink1"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #FFA222" : "none",
                  color: isActive ? "#FFA222" : "white",
                  fontSize: isActive ? "1.1rem" : "1rem",
                  transition: isActive ? "all 0.1s" : null,
                };
              }}
            >
              Favourite
            </NavLink>
            <NavLink
              to="/Recent"
              className="tablink2"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "3px solid #FFA222" : "none",
                  color: isActive ? "#FFA222" : "white",
                  fontSize: isActive ? "1.1rem" : "1rem",
                  transition: isActive ? "all 0.1s" : null,
                };
              }}
            >
              Recent Search
            </NavLink>
            <span className="datetime">
              {moment().format("ddd, DD MMM YYYY hh:mm A")}
              {/* <span>{moment().format("a")}</span> */}
            </span>
          </div>
        </>
      ) : (
        <Searchpage setSearchPage={setSearchPage} setCityName={setCityName} />
      )}

      {/* <Outlet /> */}
      <Routes>
        <Route path="/" element={<HomeComponent cityname={cityname} />}></Route>
        <Route
          path="/favourite"
          element={<Favourite setCityName={setCityName} />}
        ></Route>
        <Route
          path="/Recent"
          element={<Recent setCityName={setCityName} />}
        ></Route>
        <Route path="/Search" element={<Searchpage />}></Route>
      </Routes>
    </div>
  );
}
export default Home;
