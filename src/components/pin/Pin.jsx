import { Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";

import "./pin.scss";
import { Link } from "react-router-dom";
export default function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} />
          <div className="textContainer">
            <Link to={`/location/${item.id}`} state={{ venue: item }}>
              {item.title}
            </Link>
            <span>{item.capacity} guests</span>
            <b>{item.price} VND</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

Pin.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    img: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    capacity: PropTypes.number,
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
    )
  }).isRequired,
};
