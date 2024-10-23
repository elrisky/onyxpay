// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation,Pagination,Scrollbar,A11y,Autoplay,} from "swiper/modules";
import "swiper/css/bundle";
import banner1 from "../../assets/user-asset/images/banner/banner.jpg"
import banner2 from "../../assets/user-asset/images/banner/banner1.png"
import banner3 from "../../assets/user-asset/images/banner/banner2.png"
import banner4 from "../../assets/user-asset/images/banner/banner2.jpg"
const SwiperComp = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      style={{ width: "100%", height: "100px" }}
      loop={true}
      slidesPerView={1}
      spaceBetween={50}
      autoplay={{
        delay: 10000,
        disableOnInteraction: true,
      }}
      pagination={{ clickable: true }}
      className="rounded mt-0 pt-0"
    >
      <SwiperSlide>
        <img
          src={banner1}
          alt="ads-image"
          width="100%"
          height="100%"
          className="rounded"
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={banner2}
          alt="ads-image"
          width="100%"
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={banner3}
          alt="ads-image"
          width="100%"
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={banner4}
          alt="ads-image"
          width="100%"
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};
export default SwiperComp;