import { Link } from "react-router-dom";
import "./card.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStar,
  faUser,
  faSquareParking,
  faWifi,
  faTag,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

export default function Card({ venue }) {
  const imageUrl = venue.imageLocations.length > 0 ? venue.imageLocations[0].imageLink : venue.img;

  return (
    <div className="card">
      <Link
        to={`/location/${venue.id}`}
        state={{ venue: venue }}
        className="imageContainer"
      >
        <img src={imageUrl} alt={venue.title} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/location/${venue.id}`} state={{ venue: venue }}>
            {venue.title}
          </Link>
        </h2>
        <p className="rating">
          {venue.rating}
          <FontAwesomeIcon icon={faStar} className="fontAwesomeIcon" />
        </p>
        <p className="address">
          <FontAwesomeIcon icon={faLocationDot} className="fontAwesomeIcon" />
          <span>{venue.address}</span>
        </p>
        <p className="price">{venue.price} VND</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <FontAwesomeIcon icon={faUser} />
              <span>{venue.capacity} guests</span>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faWifi} className="fontAwesomeIcon" />
            </div>
            <div className="feature">
              <FontAwesomeIcon
                icon={faSquareParking}
                className="fontAwesomeIcon"
              />
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <FontAwesomeIcon icon={faTag} className="fontAwesomeIcon" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faComment} className="fontAwesomeIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  venue: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    imageLocations: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageLink: PropTypes.string.isRequired,
      })
    ).isRequired,
    address: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    capacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    price: PropTypes.number,
    rating: PropTypes.number,
    size: PropTypes.number,
    description: PropTypes.string,
    placeType: PropTypes.string,
    services: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        price: PropTypes.number,
        img: PropTypes.string,
      })
    ),
  }).isRequired,
};