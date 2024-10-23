import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const PasswordCriteria = ({ criteria }) => (
  <ul className="password-criteria text-start">
    <li className={criteria.length ? "valid" : "invalid"}>
      <FontAwesomeIcon icon={faInfoCircle} className="icon-class icon" />
      Make sure your password is at least 8 characters long!
    </li>
    <li className={criteria.uppercase ? "valid" : "invalid"}>
      <FontAwesomeIcon icon={faInfoCircle} className="icon-class icon" />
      Don't forget to include at least one uppercase letter!
    </li>
    <li className={criteria.number ? "valid" : "invalid"}>
      <FontAwesomeIcon icon={faInfoCircle} className="icon-class icon" />A
      number will make your password stronger!
    </li>
    <li className={criteria.specialChar ? "valid" : "invalid"}>
      <FontAwesomeIcon icon={faInfoCircle} className="icon-class icon" />
      Add a special character for extra security! (e.g., !@#$%^&*)
    </li>
  </ul>
);

export default PasswordCriteria;
