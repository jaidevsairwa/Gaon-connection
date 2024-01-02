import React, { useState, useEffect } from "react";
import "./cardgallery.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  GridImage,
  GridImage1,
  GridImage2,
  GridImage3,
} from "../../../public/Images";
import { fetchJSON } from "../../../api";
import { useNavigate } from "react-router-dom";

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

const CardGallery = () => {
  const navigate = useNavigate();
  const [challenges, setChallenges] = useState([]);
  useEffect(() => {
    fetchJSON("teacher-connections?populate=*", "GET", "").then((data) => {
      // console.log(data.data[0].attributes.image.data[0].attributes.url);
      // console.log(data);
      setChallenges(data.data);
    });
  }, []);

  // console.log(challenges[0].attributes.Main.data.attributes.url)
  // const Main_url=challenges.map((item,index)=> item.attributes.Main.data.attributes.url)
  // console.log(challenges[0].attributes.image)
  return (
    // <div className='grid_container'>
    //     {challenges.map((item,index)=>(
    //         <>
    //     <div className='first_div'>

    //             <img src={`http://45.126.126.209:1337${item.attributes.Main.data.attributes.url}`} />
    //             <div >
    //                 <h1>{item.attributes.Title}</h1>
    //                     <p>{item.attributes.Desc} ... {" "}
    //                     <span style={{ color: "#0CC5FF" }}>Read More</span></p>
    //             </div>
    //     </div>
    //     </>
    //     ))}
    // </div>
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
        {challenges.map((i, index) => (
          // <Card key={index} {...card} />
          <div className="card" key={index}>
            <img
              src={`${import.meta.env.VITE_BASE_URL}/${i?.attributes?.Main?.data?.attributes?.url}`}
              alt="Card Image"
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-heading">{i?.attributes?.Title}</h2>
              <p className="card-description">
                {/* {i.attributes.Desc} ... {" "} */}
                <span
                  style={{ color: "#0CC5FF" }}
                  onClick={() => navigate(`challenges-item/${i?.id}`)}
                >
                  {" "}
                  Read More
                </span>
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardGallery;