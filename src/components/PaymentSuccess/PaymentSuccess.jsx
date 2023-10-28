import React from "react";
import "./PaymentSuccess.css";
import checkmark from "../../assets/checkmark.png";

function PaymentSuccess() {
  return (
      <div className="paymentContainer">
        <img src={checkmark} className="checkmark"></img>
        <p className="greenText"> Payment Complete!</p>
        <p className="boldText">Thank you for choosing our radiologists!</p>
        <p className="smallerText">
          Your chosen radiologist has received a notification letting them know
          to interpret your image! You will receive a notification when they
          have reviewed your scan within 48 hours.
        </p>
      </div>
  );
}
export default PaymentSuccess;
