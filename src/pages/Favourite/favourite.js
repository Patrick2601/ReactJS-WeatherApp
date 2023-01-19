import "./favourite.css";
import img from "../../assets/images/03_Favourite_blank/Group38/group/icon_nothing.png";
import { CardMobile, CardWeb } from "../../components/cards/Cards";

function FavouriteMobile() {
  return (
    <div className="favcontainer">
      {/* <div className="no-fav-div">
        <img src={img}></img>
        <p>No favourites added</p>
      </div> */}

      {/* <CardMobile/> */}
      <CardWeb />
    </div>
  );
}

export default FavouriteMobile;
