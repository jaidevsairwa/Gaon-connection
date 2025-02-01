import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import "./index.css";
import { fetchJSON } from "../api";
const ImageGallery = ({ data }) => {
  return (
    <>
      {data?.length > 0 &&
        data?.map((item, index) => (
          <ImageCard key={index} image={item?.attributes?.image?.data} />
        ))}
    </>
  );
};

const ImageCard = ({ image, index }) => {
  return (
    <div className="carousel_container">
      {image?.map((item,index) => (
        <div className="picture-container" key={index}>
          <img
            src={`${import.meta.env.VITE_BASE_URL}${item?.attributes?.url}`}
            alt=""
            className=""
          />
        </div>
      ))}
    </div>
  );
};
const PictureWithText = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    fetchJSON("banners?populate=*", "GET", "").then((data) => {
      setBannerData(data.data);
    });
  }, []);

  return (
    <>
      <ImageGallery data={bannerData} />
    </>
  );
};

export default PictureWithText;
