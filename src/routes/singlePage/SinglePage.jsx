import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Slider from "../../components/imgSlider/Slider";
import PropTypes from "prop-types";
import "./singlePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStar,
  faComment,
  faTag,
  faPersonShelter,
  faArrowUpRightFromSquare,
  faUser,
  faWifi,
  faSquareParking,
  faWind,
  faUtensils,
  faVolumeHigh,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import Map from "../../components/map/Map";
import { selectVenue, setView } from "../../redux/reducer";

export default function SinglePage() {
  // const { id } = useParams(); // Get the ID from the URL
  const location = useLocation();
  const venue = location.state?.venue;
  const [isChatVisible, setIsChatVisible] = useState(false);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!venue) {
    return <div>Error: Venue data is not available.</div>;
  }

  const handleSelect = () => {
    if (!user) {
      dispatch(setView(location.pathname));
      dispatch(selectVenue(venue));
      navigate("/login");
    } else {
      navigate("/event", { state: { venue } });
    }
  };

  const toggleChat = () => {
    if (!user) {
      dispatch(setView(location.pathname));
      dispatch(selectVenue(venue));
      navigate("/login");
    } else {
      setIsChatVisible((prev) => !prev);
    }
  };

  // Extract image links from imageLocations
  const imageLinks = venue.imageLocations.map((image) => image.imageLink);

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={imageLinks} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{venue.title}</h1>
                <div className="address">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{venue.address}</span>
                </div>
                <div className="rating">
                  {venue.rating}
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="price">{venue.price} VND</div>
              </div>
            </div>
            <div className="description">{venue.description}</div>
            <div className="bottom">
              <button onClick={handleSelect}>Select</button>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">Space and Capacity</p>
          <div className="listVertical">
            <div className="area">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" />
              <div className="areaText">
                <span>Size</span>
                <p>{venue.size} m2</p>
              </div>
            </div>
            <div className="area">
              <FontAwesomeIcon icon={faUser} size="xl" />
              <div className="areaText">
                <span>Capacity</span>
                <p>{venue.capacity} guests</p>
              </div>
            </div>
            <div className="area">
              <FontAwesomeIcon icon={faPersonShelter} size="xl" />
              <div className="areaText">
                <span>Spaces</span>
                <p>{venue.placeType}</p>
              </div>
            </div>
          </div>

          <p className="title">Facilities and Services</p>
          <div className="services">
            {venue.features.includes("Free Wifi") && (
              <div className="service">
                <FontAwesomeIcon icon={faWifi} />
                <span>Free Wifi</span>
              </div>
            )}
            {venue.features.includes("Parking") && (
              <div className="service">
                <FontAwesomeIcon icon={faSquareParking} />
                <span>Parking</span>
              </div>
            )}
            {venue.features.includes("Catering") && (
              <div className="service">
                <FontAwesomeIcon icon={faUtensils} />
                <span>Catering</span>
              </div>
            )}
            {venue.features.includes("Air Conditioner") && (
              <div className="service">
                <FontAwesomeIcon icon={faWind} />
                <span>Air Conditioner</span>
              </div>
            )}
            {venue.features.includes("Sound System") && (
              <div className="service">
                <FontAwesomeIcon icon={faVolumeHigh} />
                <span>Sound System</span>
              </div>
            )}
            {venue.features.includes("Lighting System") && (
              <div className="service">
                <FontAwesomeIcon icon={faLightbulb} />
                <span>Lighting System</span>
              </div>
            )}
            {venue.features.includes("Rest Area") && (
              <div className="service">
                <FontAwesomeIcon icon={faPersonShelter} />
                <span>Rest Area</span>
              </div>
            )}
          </div>

          <p className="title">Type of Event</p>
          <div className="listHorizontal">
            {venue.eventTypes.includes("Wedding") && (
              <div className="areaText">
                <span>Wedding</span>
              </div>
            )}
            {venue.eventTypes.includes("Birthday") && (
              <div className="areaText">
                <span>Birthday</span>
              </div>
            )}
            {venue.eventTypes.includes("Conference") && (
              <div className="areaText">
                <span>Conference</span>
              </div>
            )}
            {venue.eventTypes.includes("Party") && (
              <div className="areaText">
                <span>Party</span>
              </div>
            )}
            {venue.eventTypes.includes("Meeting") && (
              <div className="areaText">
                <span>Meeting</span>
              </div>
            )}
            {venue.eventTypes.includes("Trade Shows") && (
              <div className="areaText">
                <span>Trade Shows</span>
              </div>
            )}
            {venue.eventTypes.includes("Product Launches") && (
              <div className="areaText">
                <span>Product Launches</span>
              </div>
            )}
            {venue.eventTypes.includes("Anniversary Parties") && (
              <div className="areaText">
                <span>Anniversary Parties</span>
              </div>
            )}
            {venue.eventTypes.includes("Festivals") && (
              <div className="areaText">
                <span>Festivals</span>
              </div>
            )}
            {venue.eventTypes.includes("Concerts") && (
              <div className="areaText">
                <span>Concerts</span>
              </div>
            )}
            {venue.eventTypes.includes("Art Exhibitions") && (
              <div className="areaText">
                <span>Art Exhibitions</span>
              </div>
            )}
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[venue]} />
          </div>
          <div className="buttons">
            <button onClick={toggleChat}>
              <FontAwesomeIcon icon={faComment} className="fontAwesomeIcon" />
              Send a Message
            </button>
            <button>
              <FontAwesomeIcon icon={faTag} className="fontAwesomeIcon" />
              Save the Place
            </button>
          </div>
        </div>
        {isChatVisible && (
          <div className="chatBox">
            <div className="top">
              <span className="close" onClick={toggleChat}>
                X
              </span>
            </div>
            <div className="center"></div>
            <div className="bottom">
              <textarea></textarea>
              <button>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}