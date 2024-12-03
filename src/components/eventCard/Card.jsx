import React from 'react';
import PropTypes from "prop-types";
import './card.scss';
import { Link } from 'react-router-dom';

export default function Card({ event }) {
  console.log(event);
  const imageUrl = event.imageEvent.length > 0 ? event.imageEvent[0].imageLink : 'default-image.jpg';

  return (
    <div className="card">
      <Link to={`/${event.id}`} state={{ venue: event }} className="imageContainer">
        <img src={imageUrl} alt={event.eventName} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${event.id}`} state={{ venue: event }}>{event.eventName}</Link>
        </h2>
        <p className="description">{event.description}</p>
        <p className="price">Deposit: {event.depositRequired} VND</p>
        <p className="date">{new Date(event.eventDate).toLocaleDateString()}</p>
        <p className="participants">Max Participants: {event.maxParticipants}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    eventName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    eventDate: PropTypes.string.isRequired,
    depositRequired: PropTypes.number.isRequired,
    maxParticipants: PropTypes.number.isRequired,
    imageEvent: PropTypes.arrayOf(
      PropTypes.shape({
        imageLink: PropTypes.string,
      })
    ),
  }).isRequired,
};