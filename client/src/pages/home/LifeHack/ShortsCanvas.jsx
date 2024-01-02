import React, { useRef, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import close from "../../../assets/x.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ShortsCanvas = ({ show, setShow, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const swiperRef = useRef(null);

  const base = `${import.meta.env.VITE_BASE_URL}`

  useEffect(() => {
    if (activeVideo) {
      activeVideo.play();
      pauseOtherVideos(activeVideo);
    }
  }, [activeIndex, activeVideo]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const pauseOtherVideos = (currentVideo) => {
    const videos = document.querySelectorAll(".video-player");
    videos.forEach((video) => {
      if (video !== currentVideo) {
        video.pause();
      }
    });
  };

  return (
    <Modal
      show={show}
      fullscreen={true}
      onHide={() => {
        setShow(false);
      }}
      style={{ padding: 0 }}
    >
      <Modal.Body
        className="Story-Modal Story_Modal_2"
        style={{ background: "#0B1F34" }}
      >
        <div className="close">
          <img src={close} onClick={() => setShow(false)} alt="Close" />
        </div>

        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          ref={swiperRef}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div>
                <video
                  autoPlay={activeIndex === index}
                  className="video-player"
                  ref={(el) => {
                    if (activeIndex === index) {
                      setActiveVideo(el);
                    }
                  }}
                >
                  <source
                    src={base + item?.attributes?.videos?.data?.[0]?.attributes?.url}
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
