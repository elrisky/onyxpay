import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MicOff } from "react-feather";

const announcements = [
  "🚀 Launching our new product next week!",
  "💡 Join our webinar on React best practices!",
  "📢 Don't miss our special discount offer!",
  "🎉 We are celebrating our anniversary with big discounts!",
];

const Anounce = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 11000); // Change announcement every 11 seconds to match the animation duration

  }, []);

  return (
    <div className="d-flex align-items-center bg-gray-200 rounded p-2 position-relative overflow-hidden">
      <div
        className="position-absolute text-dark top-0 left-0 bg-white d-flex align-items-center justify-content-center rounded"
        style={{ width: "40px", height: "100%", zIndex: "99", left: 0 }}
      >
        <MicOff width="15px" />
      </div>
      <p
        className="text-nowrap mb-0 marquee-text"
        style={{ marginLeft: "25px" }}
      >
        {announcements[currentIndex]}
      </p>
    </div>
  );
};

export default Anounce;
