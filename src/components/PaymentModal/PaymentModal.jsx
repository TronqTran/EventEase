import React from "react";
import "./PaymentModal.scss";

export default function PaymentModal() {
  return (
    <div className="paymentmodal">
      <form className="paymentmodalform">
        <h2 className="paymentmodaltitle">Payment Information</h2>
        <div className="paymentmodalcreditcardinfo">
          <div className="paymentmodalinputcontainer">
            <label className="paymentmodalinputlabel" htmlFor="cardholder_name">
              Cardholder Full Name
            </label>
            <input
              placeholder="Enter your full name"
              title="Input title"
              name="cardholder_name"
              type="text"
              className="paymentmodalinputfield"
              id="cardholder_name"
              required
            />
          </div>
          <div className="paymentmodalinputcontainer">
            <label className="paymentmodalinputlabel" htmlFor="card_number">
              Card Number
            </label>
            <input
              placeholder="0000 0000 0000 0000"
              title="Input title"
              name="card_number"
              type="text"
              className="paymentmodalinputfield"
              id="card_number"
              required
            />
          </div>
          <div className="paymentmodalinputcontainer">
            <label className="paymentmodalinputlabel" htmlFor="expiry_cvv">
              Expiry Date / CVV
            </label>
            <div className="paymentmodalinputsplit">
              <input
                placeholder="MM/YY"
                title="Expiry Date"
                name="expiry_date"
                type="text"
                className="paymentmodalinputfield"
                id="expiry_date"
                required
              />
              <input
                placeholder="CVV"
                title="CVV"
                name="cvv"
                type="text"
                className="paymentmodalinputfield"
                id="cvv"
                required
              />
            </div>
          </div>
          <button type="submit" className="paymentmodalcheckoutbutton">
            Checkout
          </button>
          <div className="paymentmodalseparator">
            <hr className="paymentmodalline" />
            <p>or pay using e-wallet</p>
            <hr className="paymentmodalline" />
          </div>
          <div className="paymentmodaloptions">
            <button type="button" name="paypal" className="paymentmodalpaymentbutton">  
              <img src="https://th.bing.com/th/id/OIP.FWBt0ze4Q8KVB4kjjPCFCQHaD4?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="PayPal" />      
            </button>
            <button type="button" name="apple-pay" className="paymentmodalpaymentbutton">
              <img src="https://th.bing.com/th/id/OIP.D2xUWoMreipVyr04H04hcQHaDs?w=335&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Apple Pay" />
            </button>
            <button type="button" name="google-pay" className="paymentmodalpaymentbutton">
              <img src="https://th.bing.com/th/id/OIP.82fObEscmV-byfk9OeXyZAHaEe?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Google Pay" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}