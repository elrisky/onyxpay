import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/landingPage/css/style.css";
import sliderImage1 from "../../assets/landingPage/images/backgrounds/Ai image.jpg";
import sliderImage2 from "../../assets/landingPage/images/backgrounds/backgroun.jpg";
import sliderImage3 from "../../assets/landingPage/images/backgrounds/background.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  const slides = [sliderImage1, sliderImage2, sliderImage3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  // Updated titles
  const titles = [
    "Discover Affordable Data Plans with Radius.",
    "Experience Seamless Connectivity Anytime, Anywhere.",
    "Join the Radius Community for Unbeatable Rates.",
  ];

  // Initial title set based on the first slide
  const [title, setTitle] = useState(titles[currentSlide]);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTitle(titles[(currentSlide + 1) % titles.length]);
      setFade(true);
    }, 500);
  };

  // const prevSlide = () => {
  //   setFade(false);
  //   setTimeout(() => {
  //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  //     setTitle(titles[(currentSlide - 1 + titles.length) % titles.length]);
  //     setFade(true);
  //   }, 500);
  // };
 const goToLogin = () => {
   // Replace with your login page navigation logic
   window.location.href = "/login";
 };
 const BackgroundImageStyles = {
   height: "100vh",
   backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slides[currentSlide]})`,
   backgroundSize: "contain",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   transition: "opacity 0.5s ease-in-out",
   opacity: fade ? 1 : 0,
 };

  return (
    <>
      <main
        style={BackgroundImageStyles}
        className="relative d-flex justify-content-center align-items-center bg-no-repeat bg-contain"
      >
        <div className="container text-center">
          <div className="col-12 col-md-8 col-lg-8 m-auto">
            <h1
              className="text-white landing-header">
              {title}
            </h1>
            <p className="text-white pt-2">
              Get more value for your money with Radius, your ultimate data
              solution.
            </p>
            <div className="col-6 m-auto mt-2">
              {currentSlide === slides.length - 1 ? (
                <Link to="/login"
                  className="btn bolder fs-4 p-2"
                  style={{
                    backgroundColor: "rgba(var(--white),1)",
                    width: "100%",
                  }}
                >
                  Get Started
                </Link>
              ) : (
                <button
                  className="btn bolder fs-4 p-2"
                  style={{
                    backgroundColor: "rgba(var(--white),1)",
                    width: "100%",
                  }}
                  onClick={nextSlide}
                >
                  Next
                </button>
              )}
            </div>
            <div className="btn position-absolute bottom-0 install-btn">Download App/</div>
            <p className="text-white pt-4">
              Slide {currentSlide + 1} of {slides.length}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
export default Index