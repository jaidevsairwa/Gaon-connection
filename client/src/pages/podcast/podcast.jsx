import React, { useEffect, useState } from "react";
import axios from "axios";
import AudioPlayer from "./player";

import "./podcast.css";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const containerStyles = {
  width: "100%",
  height: "300px",
  margin: "0px auto",
};

const podcast = () => {
  const [podcast, setPodcast] = useState([]);
  const [banner, setBanner] = useState([]);
  const navigate = useNavigate();
  const [aud, setAud] = useState('')
  const [title, setTitle] = useState('')

  const head = {
    headers: {
      Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
    },
  };
  const base = import.meta.env.VITE_BASE_URL;
  //  const base = "http://localhost:1337"

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BASE_URL
        }/api/podcast-categories?populate[podcast_cates][populate]=*`,
        head
      )
      .then((res) => {
        setPodcast(res.data.data);
      });
    axios
      .get(
        `${import.meta.env.VITE_BASE_URL}/api/podcast-banners?populate=*`,
        head
      )
      .then((res) => {
        setBanner(res.data.data);
      });
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.2,
    },
  };

  const slides = banner?.map((item) => (
    <div key={item?.id}>
      {console.log(item)}
      <img
        src={`${base}${item?.attributes?.images?.data?.[0]?.attributes?.url}`}
        alt=""
      />
    </div>
  ));

  return (
    <div className="test">
      <Carousel
        draggable={true}
        transitionDuration={500}
        fade={true}
        arrows={true}
        responsive={responsive}
        autoplay={true}
        autoplaySpeed={500}
        infinite
      >
        {slides}
      </Carousel>

      {podcast?.map((pod) => {
        const { id, attributes } = pod;
        return (
          <div className="parent" key={id}>
            <div key={id}>
              <h2 id="div-1">{attributes?.name}</h2>

              {attributes?.podcast_cates?.data?.length > 0 && (
                <Carousel
                  draggable={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  fade={true}
                  arrows={true}
                  responsive={responsive1}
                  autoplay={false}
                >
                  {attributes?.podcast_cates?.data?.reverse()?.map((data) => (
                    <div id="div-2" key={data.id}>
                      <div className="box">
                        <img src={`${base}${data?.attributes?.image?.data?.attributes?.url}`}
                          onClick={() => {
                            setAud(`${base}${data?.attributes?.Audio?.data?.attributes?.url}`)
                            setTitle(data?.attributes.Title)
                          }}
                          alt="" />
                      </div>
                      <span className="card-title">
                        {data?.attributes?.Name}
                      </span>
                    </div>
                  ))}
                </Carousel>
              )}
            </div>
          </div>
        );
      })}
      {aud!=='' && (
        <AudioPlayer className="audiop"
          title={title}
          audioSrc={aud}
        ></AudioPlayer>
      )}
      
    </div>
  );
};
export default podcast;
