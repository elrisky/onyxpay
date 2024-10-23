import { Camera, ChevronRight } from "react-feather";
import HeaderNavigation from "../../components/userComponents/HeaderNavigation";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ListViewTitle from "../../components/userComponents/ListViewTitle";
import Menu from "../../components/userComponents/Menu";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Profile = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);


    return (
      <>
        <HeaderNavigation title="Settings" />
        <div
          className="container"
          style={{ marginBottom: "100px", marginTop: "100px" }}
        >
          <div className="section text-center">
            <div className="css-1wpwbv3">
              <div
                role="button"
                tabIndex="0"
                className="css-soonpg m-auto stroke"
                style={{
                  width: "150px", // Size of the circular area
                  height: "150px",
                  borderRadius: "50%", // Circular shape
                  backgroundColor: "#3333", // White background
                  border: "2px dotted", // Optional border for style
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Optional shadow
                  position: "relative",
                }}
              >
                <input
                  accept="image/*"
                  type="file"
                  autoComplete="off"
                  tabIndex="-1"
                  style={{ display: "none" }}
                />
                <div
                  className=" css-7zlern d-flex flex-column align-items-center"
                  style={{
                    width: "123px", // Size of the circular area
                    height: "123px",
                    borderRadius: "50%", // Circular shape
                    backgroundColor: "#3333", // White background
                    border: "2px solid #333", // Optional border for style
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Optional shadow
                    position: "relative",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="MuiBox-root css-v73erd iconify iconify--ic"
                    width="40" // Icon size
                    height="40"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    style={{ marginBottom: "5px" }} // Space between icon and text
                  >
                    <path
                      fill="currentColor"
                      d="M3 8c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1H5V2c0-.55-.45-1-1-1s-1 .45-1 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2z"
                    ></path>
                    <circle cx="13" cy="14" r="3" fill="currentColor"></circle>
                    <path
                      fill="currentColor"
                      d="M21 6h-3.17l-1.24-1.35A2 2 0 0 0 15.12 4h-6.4c.17.3.28.63.28 1c0 1.1-.9 2-2 2H6v1c0 1.1-.9 2-2 2c-.37 0-.7-.11-1-.28V20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"
                    ></path>
                  </svg>
                  <span className="MuiTypography-root MuiTypography-caption css-176slt">
                    Upload photo
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-3">
              <h4 className="text-gray-100 text-2xl font-medium">
                Oluwadamilare Samuel Oluleye
              </h4>
              <p className="text-muted ">oluwadamilareoluleye@gmail.com</p>
            </div>
          </div>
          <ListViewTitle title="Theme" />
          <div className="card item bg-gray-200">
            <div className="card-body in d-flex justify-content-between align-items-center">
              <div className="text-muted">Dark Mode</div>
              <div className="form-check">
                <label className="switch">
                  <input
                    type="checkbox"
                    hidden
                    checked={isDarkMode}
                    onChange={toggleTheme}
                  />
                  <div className="switch__wrapper">
                    <div className="switch__toggle"></div>
                  </div>
                </label>
              </div>
              {/* <div className="form-check form-switch  ms-2">
                <input
                  className="form-check-input dark-mode-switch"
                  type="checkbox"
                  onChange={toggleTheme}
                />
                <label
                  className="form-check-label"
                  htmlFor="darkmodeSwitch"
                ></label>
              </div> */}
            </div>
          </div>
          <ListViewTitle title="Notification" />
          <div className="card item bg-gray-200">
            <div className="card-body in d-flex justify-content-between align-items-center">
              <div>
                <h3 className="fs-6 text-muted">Payment Alert</h3>
                <span className="fs-10 text-muted-muted" style={{ color: "" }}>
                  Send Notification when new payment recieved
                </span>
              </div>
              <div className="form-check">
                <label className="switch">
                  <input type="checkbox" hidden />
                  <div className="switch__wrapper">
                    <div className="switch__toggle"></div>
                  </div>
                </label>
              </div>
              {/* <div className="form-check form-switch  ms-2">
                <input
                  className="form-check-input dark-mode-switch"
                  type="checkbox"
                  id="darkmodeSwitch"
                />
                <label
                  className="form-check-label"
                  htmlFor="darkmodeSwitch"
                ></label>
              </div> */}
            </div>
            <hr className="mx-3" />
            <h6 className="fs-6 p-2 text-muted">Notification Sound</h6>
          </div>
          <ListViewTitle title="Profile Settings" />
          <div className="card bg-gray-200">
            <div className="card-body">
              <ul className="list-unstyled">
                <Link
                  to="/dashboard/user/change-username"
                  className="text-muted  text-decoration-none"
                >
                  <li className="py-3 border-bottom stroke d-flex justify-content-between align-items-center">
                    Change Username
                    <ChevronRight className="text-muted" />
                  </li>
                </Link>
                <Link
                  to="/dashboard/user/update-email"
                  className="text-muted  text-decoration-none"
                >
                  <li className="py-3 border-bottom stroke d-flex justify-content-between align-items-center">
                    <div className="">
                      Update Email
                      <span className="text-danger d-block fs-7 pt-2">
                        Not-verified
                      </span>
                    </div>
                    <ChevronRight className="text-muted" />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="card bg-gray-200 mt-4">
            <div className="card-body">
              <ul className="list-unstyled">
                <Link
                  to="/dashboard/user/update-password"
                  className="text-muted  text-decoration-none"
                >
                  <li className="py-2 d-flex justify-content-between align-items-center">
                    About
                    <ChevronRight className="text-muted" />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <ListViewTitle title="Security" />
          <div className="card bg-gray-200">
            <div className="card-body">
              <ul className="list-unstyled">
                <Link
                  to="/dashboard/user/update-password"
                  className="text-muted  text-decoration-none"
                >
                  <li className="py-3 border-bottom stroke d-flex justify-content-between align-items-center">
                    Update Password
                    <ChevronRight className="text-muted" />
                  </li>
                </Link>
                <Link
                  to="/dashboard/user/Tansaction-pin"
                  className="text-muted  text-decoration-none"
                >
                  <li className="py-3 border-bottom stroke d-flex justify-content-between align-items-center">
                    Transaction Pin
                    <ChevronRight className="text-muted" />
                  </li>
                </Link>
                <li className="py-3 border-bottom stroke d-flex justify-content-between align-items-center">
                  <a href="" className="text-muted text-decoration-none">
                    Lock Screen
                  </a>
                  <ChevronRight className="text-muted" />
                </li>
                <Link
                  to="/dashboard/user/rate"
                  className="text-muted text-decoration-none"
                >
                  <li className="py-3 border-bottom stroke d-flex justify-content-between align-items-center">
                    Rate Us
                    <ChevronRight className="text-muted" />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <Menu />
        </div>
      </>
    );
}
 
export default Profile;