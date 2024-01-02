import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";

const Reels = () => {
  const [lifeHack, setLifeHack] = useState([]);

  const Auth = {
    headers: {
      Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
    },
  };

  const fetchHandler = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/reel?populate=*`,
        Auth
      );
      const data = res.data.data;
      setLifeHack(data);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const swiperRef = useRef(null);

  const base = `${import.meta.env.VITE_BASE_URL}`;

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
    <div className="Story-Modal Story_Modal_2">
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
        {/* {console.log(lifeHack)} */}
        {lifeHack?.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div>
              <video
                autoPlay={activeIndex === index}
                className="video-player" 
                style={{
                  // width:"100%",
                  height:"100vh"
                }}
                ref={(el) => {
                  if (activeIndex === index) {
                    setActiveVideo(el);
                  }
                }}
              >
                <source 
                style={{
                  width:'100%',
                  height:"100vh"
                }}
                  src={
                    base + item?.attributes?.videos?.data?.[0]?.attributes?.url
                  }
                  type="video/mp4"
                />
                {/* {console.log(base + item?.attributes?.videos?.data?.[0]?.attributes?.url)} */}
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reels;
