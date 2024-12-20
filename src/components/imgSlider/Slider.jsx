import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./slider.scss";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Slider({ images }) {
  console.log(images);
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "right") {
      if (imageIndex === lastFourImages.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    } else {
      if (imageIndex === 0) {
        setImageIndex(lastFourImages.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    }
  };

  // Get the last four images from the array
  const lastFourImages = images.slice(-4);

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <FontAwesomeIcon icon={faChevronLeft} size="2xl" className="fontAwesomeIcon" />
          </div>
          <div className="imgContainer">
            <img src={lastFourImages[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <FontAwesomeIcon
              icon={faChevronRight}
              size="2xl"
              className="fontAwesomeIcon"
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={lastFourImages[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {lastFourImages.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};