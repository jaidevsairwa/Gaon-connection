import React from "react";
import "./gaontv.scss";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Gaon_Tv = () => {
  const [data, setData] = useState([]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const Auth = {
    headers: {
      Authorization:
        `Bearer ${import.meta.env.VITE_TOKEN}`,
    },
  };

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}api/gaon-tvs?populate=*`,
        Auth
      );
      setData(data.data);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <div className="container_cardlist" id="main_gao">
          {data.map((i,index)=>(
            <a href={`${i?.attributes?.link}`}>
            <div className="card" id="gaotv"  key={index}>
              <img src={`http://45.126.126.209:1337${i?.attributes?.images?.data?.[0]?.attributes?.url}`} alt="Card Image"
                className="card-image" />
              <div className="card-content">
                <h2 className="card-heading">{i?.attributes?.Title?.slice(0, 100)}...</h2>
              </div>
            </div>
              </a>
          ))}
        </div>
  );
};
