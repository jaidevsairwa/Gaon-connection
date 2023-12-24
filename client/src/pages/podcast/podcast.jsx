import React, { useEffect, useState } from "react";
import axios from "axios";
import AudioPlayer from "./player";

import "./podcast.css";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";
import { Daily_News_English, Daily_News_In_Hindi } from "../../Repo/Apis";
import CarouselCard from "../../components/Carousel/CarouselCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import im from '../../assets/Images/banner.png'
import pn from '../../assets/insights.png'
import audioFile from "../../assets/audio/HueBechain.mp3";

const slides = [
    { url: im,},
    { url: pn,},
    { url: im,},
    { url: pn,},
]

const containerStyles = {
    width: "100%",
    height: "300px",
    margin: "0px auto",
}

const podcast = () => {
    const [podcast, setPodcast] = useState([]);
    const [banner, setBanner] = useState([])
    const navigate = useNavigate();

    const head = {
        headers: {
            Authorization:
                "Bearer " + import.meta.env.VITE_TOKEN,
        }
    }
    const base = "http://45.126.126.209:1337"
    //  const base = "http://localhost:1337"

useEffect(() =>{
    axios.get(`${import.meta.env.VITE_BASE_URL}api/podcast-categories?populate[podcast_cates][populate]=*`, head)
    .then(res =>{
        setPodcast(res.data.data)
    });
    axios.get(`${import.meta.env.VITE_BASE_URL}api/podcast-banners?populate=*`,head)
        .then(res => {
            console.log(res.data.data);
            setBanner(res.data.data)
        });
},[])

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
    }
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
        }
    };

    const filterFirstImageInCategory = (podcastCates) => {
        const firstImageMap = {};

        return podcastCates.filter((category) => {
            if (!firstImageMap[category.attributes.Name]) {
                firstImageMap[category.attributes.Name] = true;
                return true;
            }
            return false;
        });
    };

// const slides = slideData.map(item => (
    //     <img class="img-cont" src={item.url} alt="imagetest" />
    // ));
    const slides = banner.map(item => (
        <div key={item.id}>
            <img src={`${base}${item.attributes.image.data[0].attributes.url}`} alt="" />
        </div>
        ))
        
    return(
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
        {podcast.map(pod => {
                const {id,attributes} = pod;
                return(
                    <div className="parent" key={id}>
                        <div key={id}>
                                <h2 id="div-1">{attributes.name}</h2>
                            <Carousel
                                draggable={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                fade={true}
                                arrows={true}
                                responsive={responsive1}
                                autoplay={false}
                            >
                            {/* <div id="div-2"> */}

                                {attributes.podcast_cates.data.reverse().map(data => (
                                    <div id="div-2"  key={data.id}>
                                        <div className="box">
                                        <AudioPlayer audioSrc={audioFile} imgSrc={`${base}${data.attributes.image.data.attributes.url}`} ></AudioPlayer>
                                        </div>
                                        <span className="card-title">{data.attributes.Name}</span>
                                    </div>
                                ))}
                            {/* </div> */}
                            </Carousel>
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
}
export default podcast;
