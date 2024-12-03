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
import { postLocation, uploadLocationImage } from "../../api/locationService";

export default function SinglePage() {
  const [size, setSize] = useState(10);
  const [capacity, setCapacity] = useState(10);
  const [latitude, setLatitude] = useState(10.774431);
  const [longitude, setLongitude] = useState(106.694991);
  const [bigImage, setBigImage] = useState(null);
  const [smallImage1, setSmallImage1] = useState(null);
  const [smallImage2, setSmallImage2] = useState(null);
  const [smallImage3, setSmallImage3] = useState(null);
  const [imgVenue, setImgVenue] = useState(null);

  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  const handleLatitudeChange = (e) => {
    setLatitude(parseFloat(e.target.value));
  };

  const handleLongitudeChange = (e) => {
    setLongitude(parseFloat(e.target.value));
  };

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    const requiredFields = [
      "venueName",
      "address",
      "price",
      "description",
      "latitude",
      "longitude",
      "size",
      "capacity",
    ];

    for (const field of requiredFields) {
      if (!e.target[field].value) {
        alert(`Please fill out the ${field} field.`);
        return;
      }
    }

    const formData = {
      venueName: e.target.venueName.value,
      imgVenue: imgVenue,
      bigImage: bigImage,
      smallImage1: smallImage1,
      smallImage2: smallImage2,
      smallImage3: smallImage3,
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

      latitude: latitude,
      longitude: longitude,

      size: parseFloat(e.target.size.value),
      capacity: parseFloat(e.target.capacity.value),
    };

    const venueObject = createVenueObject(formData);

    try {
      const response = await postLocation(token, venueObject); // Gọi hàm postLocation
      console.log("Location posted successfully:", response.id);

      // Upload images
      if (imgVenue) await uploadLocationImage(response.id, imgVenue);
      if (bigImage) await uploadLocationImage(response.id, bigImage);
      if (smallImage1) await uploadLocationImage(response.id, smallImage1);
      if (smallImage2) await uploadLocationImage(response.id, smallImage2);
      if (smallImage3) await uploadLocationImage(response.id, smallImage3);

      navigate("/add/venue/step-2", { state: { venue: response } });
    } catch (error) {
      console.error("Error posting location:", error);
      alert("Error posting location. Please try again.");
    }
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
              onChange={(e) => handleImageChange(e, setBigImage)}
              style={{ display: "none" }} // Ẩn input file
            />
            <div className="bigImage">
              {bigImage ? (
                <img
                  src={URL.createObjectURL(bigImage)}
                  alt="Big Venue"
                  className="previewImage"
                />
              ) : (
                <label htmlFor="bigImage" className="bigImageLabel">
                  Click to upload big image
                </label>
              )}
            </div>
            <div className="smallImages">
              <input
                type="file"
                name="smallImage1"
                id="smallImage1"
                style={{ display: "none" }} // Ẩn input file
                onChange={(e) => handleImageChange(e, setSmallImage1)}
              />
              <div className="smallImage">
                {smallImage1 ? (
                  <img
                    src={URL.createObjectURL(smallImage1)}
                    alt="Small Venue"
                    className="smallImage"
                  />
                ) : (
                  <label htmlFor="smallImage1" className="smallImageLabel">
                    Click to upload small image
                  </label>
                )}
              </div>
              <input
                type="file"
                name="smallImage2"
                id="smallImage2"
                style={{ display: "none" }} // Ẩn input file
                onChange={(e) => handleImageChange(e, setSmallImage2)}
              />
              <div className="smallImage">
                {smallImage2 ? (
                  <img
                    src={URL.createObjectURL(smallImage2)}
                    alt="Small Venue"
                    className="smallImage"
                  />
                ) : (
                  <label htmlFor="smallImage2" className="smallImageLabel">
                    Click to upload small image
                  </label>
                )}
              </div>
              <input
                type="file"
                name="smallImage3"
                id="smallImage3"
                style={{ display: "none" }} // Ẩn input file
                onChange={(e) => handleImageChange(e, setSmallImage3)}
              />
              <div className="smallImage">
                {smallImage3 ? (
                  <img
                    src={URL.createObjectURL(smallImage3)}
                    alt="Small Venue"
                    className="smallImage"
                  />
                ) : (
                  <label htmlFor="smallImage3" className="smallImageLabel">
                    Click to upload small image
                  </label>
                )}
              </div>
            </div>
          </div>
          <div className="info">
            <div className="left">
              <label htmlFor="imgVenue">Venue Image</label>
              <input
                type="file"
                name="imgVenue"
                id="imgVenue"
                style={{ display: "none" }} // Ẩn input file
                onChange={(e) => handleImageChange(e, setImgVenue)}
              />
              <div className="imgVenue">
              {imgVenue ? (
                <img src={URL.createObjectURL(imgVenue)}
                  alt="img Venue"                  
                />
              ) : (
                <label htmlFor="imgVenue" className="imgVenueLabel">
                  Click to upload venue image
                </label>
              )}
              </div>
            </div>

            <div className="right">
              <div className="name">
              <label htmlFor="venueName">Venue Name</label>
              <input
                type="text"
                name="venueName"
                id="venueName"
                placeholder="Venue Name"
              />
              </div>

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

              <div className="description">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" placeholder="Description"></textarea>
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
                  value={latitude}
                  onChange={handleLatitudeChange}
                />
              </div>
              <div className="longitude">
                <label htmlFor="longitude">Longitude</label>
                <input
                  type="number"
                  name="longitude"
                  id="longitude"
                  value={longitude}
                  onChange={handleLongitudeChange}
                />
              </div>

              <Map items={[{ id: 1, latitude, longitude }]} />
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
