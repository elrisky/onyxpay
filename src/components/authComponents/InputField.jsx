import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const InputField = ({ iconName, label, value, onChange,validate }) => (
  <div className="input-area">
    <FontAwesomeIcon icon={iconName} className="icon-class icon me-2" />
    <input
      type="text"
      placeholder={label}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
        validate(e.target.value);
      }}
    />
  </div>
);

export default InputField;
