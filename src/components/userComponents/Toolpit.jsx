import React, { useState, useEffect } from "react";
import "../../assets/user-asset/css/user.css";

const Toolpit = ({ text, visible, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.closest(".tooltip") || e.target.closest(".help-icon"))
        return;
      onClose(); // Close the tooltip
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    visible && (
      <span
        style={{
          position: "absolute",
          zIndex: "999",
          top: -10,
          width: "300px",
        }}
        className="bg-white p-2 ms-1 tooltip"
      >
        <span>{text}</span>
      </span>
    )
  );
};

export default Toolpit;
