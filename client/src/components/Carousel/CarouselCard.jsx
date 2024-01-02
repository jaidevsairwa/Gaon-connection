import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../card/card.scss";
import { useNavigate } from "react-router-dom";

const CarouselCard = ({ data, link, indiLink }) => {
  const navigate = useNavigate();
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
      {data?.length > 0 && (
        <Carousel
          draggable={true}
          customTransition="all .5"
          transitionDuration={500}
          fade={true}
          arrows={true}
          responsive={responsive}
          autoplay={true}
          autoplaySpeed={500}
        >
          {data?.slice(1).map((i, index) => (
            <div className="card" key={index}>
              <img
                src={`${import.meta.env.VITE_BASE_URL}/${i?.attributes?.images?.data?.[0]?.attributes?.url}`}
                alt="Card Image"
                className="card-image"
              />
              <div className="card-content">
                <h2 className="card-heading">{i?.attributes?.Title?.slice(0,100)}...</h2>
                <p className="card-description">
                  <span
                    style={{ color: "#0CC5FF" }}
                    onClick={() => navigate(`${indiLink}/${i?.id}`)}
                  >
                    {" "}
                    Read More
                  </span>
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      )}

      <button className="btn" onClick={() => navigate(`${link}`)}>
        View All
      </button>
    </div>
  );
};

export default CarouselCard;
