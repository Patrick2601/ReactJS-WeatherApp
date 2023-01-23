import "./favourite.css";
import img from "../../assets/images/03_Favourite_blank/Group38/group/icon_nothing.png";
import { CardMobile, CardWeb } from "../../components/cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavData } from "../../Redux/WeatherSlice";

function FavouriteMobile() {
  const weatherData = useSelector((state) => state.weather.searchData);
  const favdata = useSelector((state) => state.weather.favData);
  const dispatch=useDispatch()
  return (
    <div className="favcontainer">
      {favdata.length === 0 ? (
        <div className="no-fav-div">
          <img src={img}></img>
          <p>No Favourite added</p>
        </div>
      ) : null}


      {favdata.length !== 0 ? (
        <div className="top-text-div">
          <p>{favdata.length} City added to Favourite </p>
          <button
            onClick={() => {
              dispatch(deleteFavData())
            }}
            style={{ background: "transparent", border: "0px" }}
          >
            <p >Remove all </p>
          </button>
        </div>
      ) : null}
      {favdata.length !== 0 ? (
        <>
          <div className="mobile-view">
            <CardMobile weatherData={favdata} />
          </div>
          <div className="web-view">
            <CardWeb weatherData={favdata} />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default FavouriteMobile;
