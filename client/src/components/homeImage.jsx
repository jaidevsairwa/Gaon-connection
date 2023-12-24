import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css";
import image from "../assets/homeImage.png";
import { fetchJSON } from "../api";
// import image from '../../assets/card.png';
import { SolarBuzz2, SolarBuzz1, SolarBuzz, SolarHelp } from "../public/Images";
import { useLanguage } from "../LanguageContext";

const cardData = [
  {
    image: SolarHelp,
    title: "The solar buzz in Bundelkhand is helping.",
    content:
      "Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...",
  },
  {
    image: SolarBuzz,
    title: "The solar buzz in Bundelkhand is helping.",
    content:
      "Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...",
  },
  {
    image: SolarBuzz1,
    title: "The solar buzz in Bundelkhand is helping.",
    content:
      "Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...",
  },
  {
    image: SolarBuzz2,
    title: "The solar buzz in Bundelkhand is helping.",
    content:
      "Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...",
  },
  {
    image: image,
    title: "The solar buzz in Bundelkhand is helping.",
    content:
      "Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...",
  },
  {
    image: image,
    title: "The solar buzz in Bundelkhand is helping.",
    content:
      "Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...",
  },
  {
    image: image,
    title: "The solar buzz in Bundelkhand is helping.",
    content:
      "Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...",
  },
];

const ImageGallery = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <ImageCard
          key={`Image${index}`}
          image={item?.attributes?.image?.data}
        />
      ))}
    </>
  );
};

const ImageCard = ({ image, key }) => {
  return (
    <div className="carousel_container">
      {image?.map((item) => (
        <div className="picture-container" key={key}>
          <img
            src={`http://45.126.126.209:1337${item?.attributes?.url}`}
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
