import React from "react";
import "./Searchpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";

function Searchpage({ searchpage, setSearchPage }) {

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
            size="2x"
            style={{
              position: "absolute",
              left: "10px",
              top: "25px",
            }}
          />
        </button>
        <input
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
