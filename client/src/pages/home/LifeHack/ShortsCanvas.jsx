import React, { useRef } from "react";
import Slider from "react-slick";
import { Modal } from "react-bootstrap";
import close from "../../../assets/x.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ShortsCanvas = ({ show, setShow, data }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    swipeToSlide: true,
    verticalSwiping: true,
    arrows: false,
  };

  // const handleSwipe = (e) => {
  //   if (e.deltaY < 0) {
  //     sliderRef.current.slickPrev(); // Swipe-up action
  //   } else if (e.deltaY > 0) {
  //     sliderRef.current.slickNext(); // Swipe-down action
  //   }
  // };

  const base = "http://45.126.126.209:1337";

  return (
    <Modal
      show={show}
      fullscreen={true}
      onHide={() => {
        setShow(false);
      }}
      style={{ padding: 0 }}
    >
      <Modal.Body className="Story-Modal Story_Modal_2" style={{ background: "#0B1F34" }}>
        <div className="close">
          <img src={close} onClick={() => setShow(false)} />
        </div>

        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          {data?.map((item) => (
            <SwiperSlide>
              <div key={item.id}>
                <video autoPlay>
                  <source
                    src={
                      base +
                      item?.attributes?.videos?.data?.[0]?.attributes?.url
                    }
                    type="video/mp4"
                  />
                </video>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

       
      </Modal.Body>
    </Modal>
  );
};

export default ShortsCanvas;
