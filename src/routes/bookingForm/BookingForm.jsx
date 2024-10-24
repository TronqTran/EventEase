import { useState } from "react";
import "./BookingForm.scss";
import SinglePage from "../singlePage/SinglePage";

export default function BookingForm() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [guestCount, setGuestCount] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process booking logic here
    setConfirmed(true); // Simulate confirmation after submission
  };

  return (
    <div className="bookingForm">
      <div className="venueContainer">
        <SinglePage />
      </div>
      <div className="customerForm">
        <h1>Complete Your Booking</h1>

        {!confirmed ? (
          <form onSubmit={handleSubmit}>
            {/* Event Information */}
            <div className="section">
              <h3>Event Details</h3>
              <label>
                Event Name:
                <input
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  required
                />
              </label>
              <label>
                Event Date:
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  required
                />
              </label>
              <label>
                Guest Count:
                <input
                  type="number"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  required
                />
              </label>
              <label>
                Special Requests / Notes:
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </label>
            </div>

            {/* Customer Information */}
            <div className="section">
              <h3>Customer Information</h3>
              <label>
                Full Name:
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </label>
            </div>

            {/* Payment Information */}
            <div className="section">
              <h3>Payment Method</h3>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit Card"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
                Credit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Bank Transfer"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
                Bank Transfer
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
                Cash
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submitButton">
              Confirm Booking
            </button>
          </form>
        ) : (
          <div className="confirmation">
            <h2>Booking Confirmed!</h2>
            {/* <p>Thank you, {customerName}! Your booking for the "{eventName}" event on {eventDate} has been confirmed.</p> */}
            <p>You will receive a confirmation email shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
}
