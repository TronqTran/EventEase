import { useEffect, useState } from "react";
import "./eventList.scss";
import { useNavigate, useLocation } from "react-router-dom";
import Slider from "../../components/imgSlider/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import {
  eventcategorys,
  eventList,
  locationList,
} from "../../lib/venue_data_20";
import Card from "../../components/eventCard/Card";
import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";

export default function EventList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setData(locationList);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bookingPage">
      <div className="eventList">
        <div className="wrapper">
          <Filter />
          {eventList.map((event) => (
            <Card key={event.id} event={event} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}
