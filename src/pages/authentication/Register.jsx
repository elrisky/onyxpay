import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { Eye, EyeOff } from "react-feather";

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
              alt="registration form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Create your account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="First Name"
                type="text"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Last Name"
                type="text"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Phone Number"
                type="tel"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Referral Code"
                type="text"
                size="lg"
              />
              <div className="" style={{ position: "relative " }}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  type={passwordVisible ? "text" : "password"}
                  size="lg"
                  onChange={() => {}}
                />
                {passwordVisible ? (
                  <Eye
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      cursor: "pointer",
                    }}
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <EyeOff
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      cursor: "pointer",
                    }}
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
              <MDBInput
                wrapperClass="mb-4"
                label="Confirm Password"
                type={passwordVisible ? "text" : "password"}
                size="lg"
              />
             
              <MDBBtn className="mb-4 px-5" color="dark" size="lg">
                Register
              </MDBBtn>

              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Already have an account?{" "}
                <a href="/login" style={{ color: "#393f81" }}>
                  Login here
                </a>
              </p>

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;
