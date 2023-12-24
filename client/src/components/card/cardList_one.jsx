import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Card_one from './card_one';
import image from '../../assets/card.png';
import { SolarBuzz2,SolarBuzz1, SolarBuzz, SolarHelp } from "../../public/Images";
import './card.scss'
import { useNavigate } from 'react-router-dom';


const cardData = [
  {
    image: SolarHelp,
    title: 'The solar buzz in Bundelkhand is helping.',
    content: 'Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...',
  },
  {
    image: SolarBuzz,
    title: 'The solar buzz in Bundelkhand is helping.',
    content: 'Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...',
  },
  {
    image: SolarBuzz1,
    title: 'The solar buzz in Bundelkhand is helping.',
    content: 'Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...',
  },
  {
    image: SolarBuzz2,
    title: 'The solar buzz in Bundelkhand is helping.',
    content: 'Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...',
  },
  {
    image: image,
    title: 'The solar buzz in Bundelkhand is helping.',
    content: 'Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...',
  },
  {
    image: image,
    title: 'The solar buzz in Bundelkhand is helping.',
    content: 'Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...',
  },
  {
    image: image,
    title: 'The solar buzz in Bundelkhand is helping.',
    content: 'Filler text is text that shares some characteristics of a real otherwise generated. It may be used ...',
  },
  // Add more card data here
];

const CardList_one = (props) => {
  const navigate=useNavigate()
  const responsive = {
    
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5

  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide:3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};
  
  const settings = {
    dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
    // Define your settings here
    
    
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div  className='container_cardlist'>
      <Carousel 
      draggable={true}
      // infinite= {true}
      customTransition="all .5"
      transitionDuration={500}
      fade={true}
      // containerClass="card-container"
      arrows={true}
      
      responsive={responsive}
      autoplay= {true}
      autoplaySpeed= {500}
      //  sliderClass="card"
      >
      {cardData.map((card, index) => (
        <Card_one key={index} {...card} />
      ))}
      {/* <div className="card">
      <img src={SolarHelp} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h2 className="card-heading">
          The solar buzz in Bundelkhand is helping.
        </h2>
        <p className="card-description">
          Filler text is text that shares some characteristics of a real
          otherwise generated. It may be used ...{" "}
          <span style={{ color: "#0CC5FF" }}> Read More</span>
        </p>
      </div>
    </div> */}
      </Carousel>
      <button className='btn' onClick={()=> navigate(`/${props.route}`)}>View All</button>
    </div>
  );
};

export default CardList_one;
