import React from "react";

import "../../assets/user-asset/css/user.css";
import { Link } from "react-router-dom";
const Tab = ({ title, link,linktxt }) => {
  return (
    <div className="recent-transactions mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="title text-white">{title}</h4>
        <div className="view-all">
          <Link to={link} className="view-link text-decoration-none">
            {linktxt}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="arrow-icon"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tab;
