import "./addVenuePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createVenueObject } from "../../helper/helper";
import {
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
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SinglePage() {
  const [size, setSize] = useState(10);
  const [capacity, setCapacity] = useState(10);
  const [coordinates, setCoordinates] = useState({
    latitude: 10.774431,
    longitude: 106.694991,
  });

  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const handleLatitudeChange = (e) => {
    setCoordinates((prev) => ({
      ...prev,
      latitude: parseFloat(e.target.value),
    }));
  };

  const handleLongitudeChange = (e) => {
    setCoordinates((prev) => ({
      ...prev,
      longitude: parseFloat(e.target.value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validation checks
    const requiredFields = [
      'venueName',
      'address',
      'price',
      'description',
      'latitude',
      'longitude',
      'size',
      'capacity',
    ];
  
    for (const field of requiredFields) {
      if (!e.target[field].value) {
        alert(`Please fill out the ${field} field.`);
        return;
      }
    }
  
    const formData = {
      venueName: e.target.venueName.value,
      imgVenue: e.target.imgVenue.files[0],
      bigImage: e.target.bigImage.files[0],
      smallImage1: e.target.smallImage1.files[0],
      smallImage2: e.target.smallImage2.files[0],
      smallImage3: e.target.smallImage3.files[0],
      address: e.target.address.value,
      price: e.target.price.value,
      description: e.target.description.value,
      placeType: e.target.placeType.value,
  
      eventTypes: [
        { name: "Conference", checked: e.target.conference.checked },
        { name: "Meeting", checked: e.target.meeting.checked },
        { name: "Trade Shows", checked: e.target.tradeShows.checked },
        { name: "Product Launches", checked: e.target.productLaunches.checked },
        { name: "Wedding", checked: e.target.weddings.checked },
        { name: "Birthday Parties", checked: e.target.birthdayParties.checked },
        {
          name: "Anniversary Parties",
          checked: e.target.anniversaryParties.checked,
        },
        { name: "Party", checked: e.target.party.checked },
        { name: "Festivals", checked: e.target.festivals.checked },
        { name: "Concerts", checked: e.target.concerts.checked },
        { name: "Art Exhibitions", checked: e.target.artExhibitions.checked },
      ],
  
      features: [
        { name: "Free Wifi", checked: e.target.freeWifi.checked },
        { name: "Parking", checked: e.target.parking.checked },
        { name: "Air Conditioner", checked: e.target.airConditioner.checked },
        { name: "Catering", checked: e.target.catering.checked },
        { name: "Sound System", checked: e.target.soundSystem.checked },
        { name: "Lighting System", checked: e.target.lightingSystem.checked },
        { name: "Rest Area", checked: e.target.restArea.checked },
      ],
  
      coordinates: {
        latitude: parseFloat(e.target.latitude.value),
        longitude: parseFloat(e.target.longitude.value),
      },
  
      size: parseFloat(e.target.size.value),
      capacity: parseFloat(e.target.capacity.value),
    };
  
    const venueObject = createVenueObject(formData);
    navigate("/add/venue/step-2", { state: { venue: venueObject } });
    console.log(venueObject);
  };

  return (
    <div className="addVenuePage">
      <form onSubmit={handleSubmit}>
        <div className="details">
          <div className="images">
            <input
              type="file"
              name="bigImage"
              id="bigImage"
              className="bigImage"
            />
            <div className="smallImages">
              <input
                type="file"
                name="smallImage1"
                id="smallImage1"
                className="smallImage"
              />
              <input
                type="file"
                name="smallImage2"
                id="smallImage2"
                className="smallImage"
              />
              <input
                type="file"
                name="smallImage3"
                id="smallImage3"
                className="smallImage"
              />
            </div>
          </div>
          <div className="info">
            <div className="left">
              <label htmlFor="venueName">Venue Name</label>
              <input
                type="text"
                name="venueName"
                id="venueName"
                placeholder="Venue Name"
              />

              <div className="address">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                />
              </div>

              <div className="price">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Price"
                />
              </div>
            </div>

            <div className="right">
              <label htmlFor="imgVenue">Venue Image</label>
              <input type="file" name="imgVenue" id="imgVenue" />
              <div className="description">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description"></textarea>
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
                  <input
                    type="range"
                    name="size"
                    id="size"
                    min={10}
                    max={1000}
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  />
                  <p>{size} m2</p>
                </div>
              </div>
              <div className="area">
                <FontAwesomeIcon icon={faUser} size="xl" />
                <div className="areaText">
                  <span>Capacity</span>
                  <input
                    type="range"
                    name="capacity"
                    id="capacity"
                    min={10}
                    max={3000}
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                  />
                  <p>{capacity} guests</p>
                </div>
              </div>
              <div className="area">
                <FontAwesomeIcon icon={faPersonShelter} size="xl" />
                <div className="areaText">
                  <span>Spaces</span>
                  <select name="placeType" id="placeType">
                    <option value="inside">Inside</option>
                    <option value="outside">Outside</option>
                  </select>
                </div>
              </div>
            </div>

            <p className="title">Facilities and Services</p>
            <div className="services">
              <div className="service">
                <input type="checkbox" name="freeWifi" id="freeWifi" />
                <FontAwesomeIcon icon={faWifi} />
                <span>Free Wifi</span>
              </div>

              <div className="service">
                <input type="checkbox" name="parking" id="parking" />
                <FontAwesomeIcon icon={faSquareParking} />
                <span>Parking</span>
              </div>

              <div className="service">
                <input type="checkbox" name="catering" id="catering" />
                <FontAwesomeIcon icon={faUtensils} />
                <span>Catering</span>
              </div>

              <div className="service">
                <input
                  type="checkbox"
                  name="airConditioner"
                  id="airConditioner"
                />
                <FontAwesomeIcon icon={faWind} />
                <span>Air Conditioner</span>
              </div>

              <div className="service">
                <input type="checkbox" name="soundSystem" id="soundSystem" />
                <FontAwesomeIcon icon={faVolumeHigh} />
                <span>Sound System</span>
              </div>
              <div className="service">
                <input
                  type="checkbox"
                  name="lightingSystem"
                  id="lightingSystem"
                />
                <FontAwesomeIcon icon={faLightbulb} />
                <span>Lighting System</span>
              </div>
              <div className="service">
                <input type="checkbox" name="restArea" id="restArea" />
                <FontAwesomeIcon icon={faPersonShelter} />
                <span>Rest Area</span>
              </div>
            </div>

            <p className="title">Type of Event</p>
            <div className="listHorizontal">
              <div className="corporate">
                <div className="areaText">
                  <input type="checkbox" name="conference" id="conference" />
                  <span>Conference</span>
                </div>
                <div className="areaText">
                  <input type="checkbox" name="meeting" id="meeting" />
                  <span>Meeting</span>
                </div>
                <div className="areaText">
                  <input type="checkbox" name="tradeShows" id="tradeShows" />
                  <span>Trade Shows</span>
                </div>
                <div className="areaText">
                  <input
                    type="checkbox"
                    name="productLaunches"
                    id="productLaunches"
                  />
                  <span>Product Launches</span>
                </div>
              </div>
              <div className="social">
                <div className="areaText">
                  <input type="checkbox" name="weddings" id="weddings" />
                  <span>Weddings</span>
                </div>
                <div className="areaText">
                  <input
                    type="checkbox"
                    name="birthdayParties"
                    id="birthdayParties"
                  />
                  <span>Birthday Parties</span>
                </div>
                <div className="areaText">
                  <input
                    type="checkbox"
                    name="anniversaryParties"
                    id="anniversaryParties"
                  />
                  <span>Anniversary Parties</span>
                </div>
                <div className="areaText">
                  <input type="checkbox" name="party" id="party" />
                  <span>Party</span>
                </div>
              </div>

              <div className="cultural">
                <div className="areaText">
                  <input type="checkbox" name="festivals" id="festivals" />
                  <span>Festivals</span>
                </div>
                <div className="areaText">
                  <input type="checkbox" name="concerts" id="concerts" />
                  <span>Concerts</span>
                </div>
                <div className="areaText">
                  <input
                    type="checkbox"
                    name="artExhibitions"
                    id="artExhibitions"
                  />
                  <span>Art Exhibitions</span>
                </div>
              </div>
            </div>
            <p className="title">Location</p>
            <div className="mapContainer">
              <div className="latitude">
                <label htmlFor="latitude">Latitude</label>
                <input
                  type="number"
                  name="latitude"
                  id="latitude"
                  value={coordinates.latitude}
                  onChange={handleLatitudeChange}
                />
              </div>
              <div className="longitude">
                <label htmlFor="longitude">Longitude</label>
                <input
                  type="number"
                  name="longitude"
                  id="longitude"
                  value={coordinates.longitude}
                  onChange={handleLongitudeChange}
                />
              </div>

              <Map items={{ id: 1, coordinates }} />
            </div>
            <div className="buttons">
              <button type="submit">Next</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
