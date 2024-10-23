import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import HeaderNavigation from "../../components/userComponents/HeaderNavigation";

const TransactionPin = () => {
  const [pin, setPin] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 4) {
      setPin(value); // Allow only up to 4 digits
    }
  };


  return (
    <div className="container-fluid vh-100 mt-5">
      <HeaderNavigation title="Transaction PIN" />
      <div className="mt-4 text-center pt-5 px-4">
        <span>
          For your security, please set a 4-digit transaction PIN. This PIN will
          be required for all future transactions.
        </span>
      </div>
      <div className="d-flex justify-content-center my-5">
        <input
          type="tel"
          value={pin}
          onChange={handleChange}
          maxLength="4"
          className="form-control bg-gray-200 stroke text-muted"
          style={{
            width: "200px",
            height: "60px",
            fontSize: "24px",
            textAlign: "center",
            color: "white",
          }}
          placeholder="Enter PIN"
        />
      </div>
      <div className="col-8 m-auto">
        <button className="btn theme-btn p-3 mb-3">Proceed</button>
      </div>
    </div>
  );
};

export default TransactionPin;
