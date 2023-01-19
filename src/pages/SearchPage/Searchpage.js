import React, { useState } from "react";
import "./Searchpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { getDataFromApi, getWeather } from "../../services/Api";

function Searchpage({ searchpage, setSearchPage }) {
  const [text, setText] = useState("");
  return (
    <div className="search-main">
      <div
        className="search"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          color: "black",
        }}
      >
        <button
          style={{ border: "0px", background: "transparent" }}
          onClick={() => {
            setSearchPage(false);
          }}
        >
          <FontAwesomeIcon
            icon={faStepBackward}
            style={{
              position: "absolute",
              left: "10px",
              top: "28px",
              fontSize: "2.2rem",
            }}
          />
        </button>
        <input
          onChange={async (e) => {
            setText(e.target.value);
            console.log(text);
            const response = await getWeather(text);
            console.log(response);
          }}
          type="text"
          className="searchtextinput"
          placeholder="Search City"
          name="search"
          style={{
            width: "400px",
            height: "50px",
            border: "1px solid",
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255,0.4)",
          }}
        />
      </div>
    </div>
  );
}

export default Searchpage;
