import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper/modules";
import  "swiper/css/bundle";
const Info = ({ items }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        style={{ width: "100%", height: "100px" }}
        loop={true}
        slidesPerView={1}
        spaceBetween={50}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        className="rounded mt-0 pt-0"
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            autoPlay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
          >
            <div className="px-3 rounded py-3 bg-gray-200 d-flex align-items-center">
              <div
                className="me-3 rounded d-flex justify-content-center align-items-center"
                style={{
                  width: "50px",
                  height: "50px",
                  background: "#333333",
                }}
              >
                <img src={item.icon} alt=" info-icon" className="img-fluid" />
              </div>
              <div className="">
                <h6 className="fs-6">{item.title}</h6>
                <p className="fs-17 pb-0 mb-0 text-muted">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Info;
