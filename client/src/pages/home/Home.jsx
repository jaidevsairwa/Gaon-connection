import React, { useState, useEffect } from "react";

import HomeImage from "../../components/homeImage";
import ImageBox from "../../components/imageBox";
import LifeHack from "./LifeHack/LifeHack";
import CardImage from "./CardImage/CardImage";
import CardGallery from "./CardGallery/CardGallery";
import TopImages from "./mobileTop/top";
import audioFile from "../../assets/audio/HueBechain.mp3";
import Audio from "./Audio/Audio";
import { fetchJSON } from "../../api";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import {
  Daily_News_English,
  Daily_News_In_Hindi,
  getAdd1,
  getAdd2,
  getBlockAdd1,
  getBlockAdd2,
  getBlockAdd3,
  getBlockAdd4,
  getBlockAdd5,
  getBlockAdd6,
  getPdfs,
  getStory,
  get_category,
  get_challenges,
  get_gardening,
  get_social,
} from "../../Repo/Apis";
import { useLanguage } from "../../LanguageContext";
import CarouselCard from "../../components/Carousel/CarouselCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import Video from "./video/video";
import { StoryCanvas } from "../../components/Canvas/StoryCanvas";

const Home = () => {
  const [socialLife, setSocialLife] = useState([]);
  const [sinleSocila, setSingleSocial] = useState({});
  const [gardening, setGardening] = useState([]);
  const [singleGarden, setSingleGarden] = useState("");
  const [singleDaily, setSingleDaily] = useState({});
  const [challenges, setChallenges] = useState([]);
  const [singleChallenges, setSingleChallenges] = useState({});
  const [daily, setDaily] = useState([]);
  const [Ads1, setAds1] = useState([]);
  const [add, setAdd] = useState([]);
  const [add2, setAdd2] = useState([]);
  const [add3, setAdd3] = useState([]);
  const [category, setCategory] = useState([]);
  const [story, setStory] = useState([]);
  const { selectedLanguage } = useLanguage();
  const [pdfs, setPdfs] = useState([]);
  const navigate = useNavigate();
  const [id, setid] = useState("");


  // useEffect(() => {
  //   fetchJSON("adds?populate=*", "GET", "").then((data) => {
  //     setAds1(data.data);
  //   });

  //   fetchJSON("social-lives?populate=*", "GET", "").then((data) => {
  //     setSocialLife(data.data);
  //   });
  // }, []);

  const fetchDaily = () => {
    if (selectedLanguage === "hi") {
      Daily_News_In_Hindi(setDaily, setSingleDaily);
    } else {
      Daily_News_English(setDaily, setSingleDaily);
    }
  };

  useEffect(() => {
    fetchDaily();
    // get_challenges(selectedLanguage, setChallenges, setSingleChallenges);
    // get_social(selectedLanguage, setSocialLife, setSingleSocial);
    // get_gardening(selectedLanguage, setGardening, setSingleGarden);
    get_category(selectedLanguage, setCategory);
  }, [selectedLanguage]);

  useEffect(() => {
    // getAdd1(setAdd);
    // getAdd2(setAdd2);
    // getAdd3(setAdd3);
    getStory(setStory);
    getPdfs(setPdfs);
  }, []);

  const responsive = {
    superLargeDesktop: {
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

  const dialyText =
    selectedLanguage === "hi" ? "किसान कनेक्शन" : "Kisaan Connection";

  const teacherText =
    selectedLanguage === "hi" ? "उत्पादन " : "Teacher Connection";

  const base = "http://45.126.126.209:1337";

  const downloadPDF = (name, data) => {
    axios
      .get(`${base}${data}`, {
        method: "GET",
        responseType: "blob",
      })
      .then((response) => {
        const url = window.URL.createObjectURL(
          new Blob([response.data], { type: "application/pdf" })
        );
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("target", "_blank");
        link.setAttribute("view", name);
        document.body.appendChild(link);
        link.click();
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const [modalShow, setModalShow] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <StoryCanvas
        show={modalShow}
        setShow={() => setModalShow(false)}
        id={id}
      />
      <Audio audioFile={audioFile} />
      <TopImages />
      <HomeImage />

      {/* Daily Life */}

      <ImageBox
        main_heading={dialyText}
        title={singleDaily?.attributes?.Title}
        desc={singleDaily?.attributes?.Desc?.slice(0, 200)}
        image={`${base}${singleDaily?.attributes?.images?.data?.[0]?.attributes?.url}`}
        link={`/kissan-connection/${singleDaily?.id}`}
      />
      <CarouselCard
        data={daily}
        link={"/kisaan-connection"}
        indiLink={"/kisaan-connection"}
      />
      {/* ------- */}
      <CardImage data={add} type={"images"} />
      <ImageBox
        main_heading="The Changemakers"
        heading="बागवानी और खेती"
        title={singleGarden?.attributes?.Titlle}
        desc={singleGarden?.attributes?.Desc}
        image={`${base}${singleGarden?.attributes?.images?.data?.[0]?.attributes?.url}`}
        link={`/the-changemakers/${singleGarden.id}`}
      />
      <div className="container_cardlist">
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
          {gardening?.slice(1)?.map((i, index) => (
            <div className="card" key={index}>
              <img
                src={`${base}${i?.attributes?.images?.data?.[0]?.attributes?.url}`}
                alt="Card Image"
                className="card-image"
              />
              <div className="card-content">
                <h2 className="card-heading">{i?.attributes?.Titlle}</h2>
                <p className="card-description">
                  <span
                    style={{ color: "#0CC5FF" }}
                    onClick={() => navigate(`/the-changemakers/${i.id}`)}
                  >
                    {" "}
                    Read More
                  </span>
                </p>
              </div>
            </div>
          ))}
        </Carousel>

        <button className="btn" onClick={() => navigate(`/the-changemakers`)}>
          View All
        </button>
      </div>

      <div className="container_cardlist">
        <h1 className="imageBox_header">Web-Stories</h1>
        <div className="strory--container">
          {story?.slice(0, 6)?.map((item) => (
            <div
              key={item.id}
              // onClick={() => navigate(`/story/${item.id}`)}
              onClick={() => {
                setid(item.id);
                setModalShow(true);
              }}
              style={{ textAlign: "center" }}
            >
              <div
                className="story_container"
                style={{
                  backgroundImage: `url(${base}${item?.attributes?.images?.data?.[0]?.attributes?.url})`,
                }}
              ></div>
              <span style={{ color: "#000", fontSize: "20px" }}>
                {item.attributes.name}
              </span>
            </div>
          ))}
        </div>
        <button className="btn" onClick={() => navigate(`/all-stories`)}>
          View All
        </button>
      </div>

      {/* Challanges */}
      {singleChallenges && (
        <ImageBox
          main_heading={teacherText}
          title={singleChallenges?.attributes?.Title}
          desc={singleChallenges?.attributes?.Desc?.slice(0, 200)}
          image={`${base}${singleChallenges?.attributes?.Images?.data?.[0]?.attributes?.url}`}
          link={`/challenges-item/${singleChallenges?.id}`}
        />
      )}

      {challenges?.length > 0 && (
        <div className="container_cardlist">
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
            {challenges?.slice(1)?.map((i, index) => (
              <div className="card" key={index}>
                <img
                  src={`${base}${i?.attributes?.Images?.data?.[0]?.attributes?.url}`}
                  alt="Card Image"
                  className="card-image"
                />
                <div className="card-content">
                  <h2 className="card-heading">{i?.attributes?.Title}</h2>
                  <p className="card-description">
                    <span
                      style={{ color: "#0CC5FF" }}
                      onClick={() => navigate(`/teacher-connection/${i.id}`)}
                    >
                      {" "}
                      Read More
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </Carousel>

          <button
            className="btn"
            onClick={() => navigate(`/teacher-connection`)}
          >
            View All
          </button>
        </div>
      )}

      <CardImage data={add2} type={"image"} />
      <LifeHack />
      {/* Social Life */}
      {sinleSocila && (
        <ImageBox
          main_heading="Aam Dani Bhadae"
          heading="सामाजिक जीवन"
          title={sinleSocila?.Title}
          desc={sinleSocila?.Desc}
          image={`${base}${sinleSocila?.images?.data?.[0]?.attributes?.url}`}
        />
      )}
      {socialLife?.length > 0 && (
        <CarouselCard
          data={socialLife}
          link={"/aamdani-bhadaye"}
          indiLink={"/aamdani-bhadaye-item"}
        />
      )}

      {/* --------- */}
      <CardImage data={add3} type={"image"} />
      {/* <Video /> */}
      {/* <Images /> */}

      <CardGallery />

      {/* gardening */}

      <ImageBox main_heading={"Survey and Reports"} />
      {pdfs?.length > 0 && (
        <div className="container_cardlist">
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
            {pdfs?.map((i, index) => (
              <div className="card" style={{ boxShadow: "none" }} key={index}>
                <img
                  src={`${base}${i?.attributes?.thumbnail?.data?.[0]?.attributes?.url}`}
                  onClick={() =>
                    downloadPDF(
                      i?.attributes?.Docs?.data?.[0]?.attributes?.name,
                      i?.attributes?.Docs?.data?.[0]?.attributes?.url
                    )
                  }
                  alt=""
                  className="card-image"
                />
              </div>
            ))}
          </Carousel>

          <button
            className="btn"
            onClick={() => navigate(`/teacher-connection`)}
          >
            View All
          </button>
        </div>
      )}

      {/* Category */}
      {category?.length > 0 &&
        category?.map((i, index) => (
          <>
            <ImageBox
              main_heading={i?.attributes?.name}
              title={i?.attributes?.category_data?.data?.[0]?.attributes?.Name}
              desc={i?.attributes?.category_data?.data?.[0]?.attributes?.desc}
              image={`${base}${i?.attributes?.category_data?.data?.[0]?.attributes?.images?.data?.[0]?.attributes?.url}`}
            />

            <div className="container_cardlist">
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
                {i?.attributes?.category_data?.data?.map((item) => (
                  <div className="card" key={index}>
                    <img
                      src={`${base}${item?.attributes?.images?.data?.[0]?.attributes?.url}`}
                      alt=""
                      className="card-image"
                    />
                    <div className="card-content">
                      <h2 className="card-heading">{item?.attributes?.Name}</h2>
                    </div>
                  </div>
                ))}
              </Carousel>

              <button
                className="btn"
                onClick={() => navigate(`/category/${i?.id}`)}
              >
                View All
              </button>
            </div>
          </>
        ))}

      {/* <CardImage />
      <SolarHelp /> */}
    </div>
  );
};

export default Home;
