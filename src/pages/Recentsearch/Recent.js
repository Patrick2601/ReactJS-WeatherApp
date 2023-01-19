import React from "react";
import img from "../../assets/images/03_Favourite_blank/Group38/group/icon_nothing.png";
function Recent() {
  return (
    <div className="favcontainer">
      <div className="no-fav-div">
        <img src={img}></img>
        <p>No Recent added</p>
      </div>
    </div>
  );
}

export default Recent;
