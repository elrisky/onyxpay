import React from "react";
import "../../assets/user-asset/css/user.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";



const ShorService = ({ items }) => {
  const getBackgroundColor = (iconColor) => {
    switch (iconColor) {
      case "orange":
        return "#333333"; // Coral
      case "lemon":
        return "#333333"; // Light yellow
      case "purple":
        return "#333333"; // Medium purple
      case "light purple":
        return "#333333"; // Lavender
      default:
        return "#333333"; // Default light gray for unrecognized colors
    }
  };

  return (
    <div className=" px-3 my-4 bg-gray-200 rounded">
      <div className="row g-3">
        {items.map((item) => (
          <div className="col-3 col-sm-4 col-lg-3 py-3 m-0" key={item.id}>
            <div className="border-0">
              <Link to={item.link} className="text-decoration-none text-reset">
                <div className="card-body text-center p-0">
                  <div className="mb-2">
                    <div
                      className="icon-bg rounded d-flex justify-content-center align-items-center p-2 text-white mx-auto"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: getBackgroundColor(item.color),
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={`${item.title} icon`}
                        className="img-fluid"
                        style={{ width: "24px", height: "24px" }}
                      />
                    </div>
                  </div>
                  <h5
                    className="card-title fw-bold text-white text-truncate"
                    style={{ fontSize: "10px" }}
                  >
                    {item.title}
                  </h5>
                  <p
                    className="card-text text-muted d-none d-sm-block"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {item.description}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShorService;

// Usage in your main component
// <ShorService items={items} />
