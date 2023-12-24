import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Card from "./card";
import image from "../../assets/card.png";
import {
  SolarBuzz2,
  SolarBuzz1,
  SolarBuzz,
  SolarHelp,
} from "../../public/Images";
import "./card.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const CardList = (props) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const Auth = {
    headers: {
      Authorization:
        "Bearer e2fb59354010ffcd981795bf4c8da3508bb642866b3ff075560bb46572e400a44fec02a8f50fbac78912d9ba3bbf33280ce27307d71640914cdfd3c47bc0df967963caeed5e04ae64b3adfc47d06f8b1da50563def8ec6bcff9e356a57d98abf53eb83cd5cb50e85c0d1c7c6f74ae37efab00001df93ef8f5ffc4c0071a42ef7",
    },
  };

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        `http://45.126.126.209:1337/api/${props.apiLink}?populate=*&`,
        Auth
      );
      setData(data.data);
    } catch {}
  };
  useEffect(() => {
    fetchHandler();
  }, []);
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

  return (
    <div className="container_cardlist">
      <Carousel
        draggable={true}
        // infinite= {true}
        customTransition="all .5"
        transitionDuration={500}
        fade={true}
        // containerClass="card-container"
        arrows={true}
        responsive={responsive}
        autoplay={true}
        autoplaySpeed={500}
        //  sliderClass="card"
      >
        {data?.map((i, index) => (
          <div className="card" key={index}>
            <img
              src={`http://45.126.126.209:1337${i?.attributes?.images?.data?.[0]?.attributes?.url}`}
              alt="Card Image"
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-heading">{i?.attributes?.Title}</h2>
              <p className="card-description">
                <span
                  style={{ color: "#0CC5FF" }}
                  onClick={() => navigate(`${props.naviLink}/${i?.id}`)}
                >
                  {" "}
                  Read More
                </span>
                {/* <span style={{ color: "#0CC5FF" }} onClick={() => navigate(`blogs/6`)}> Read More</span> */}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
      <button className="btn" onClick={() => navigate(`/${props.route}`)}>
        View All
      </button>
    </div>
  );
};

export default CardList;
