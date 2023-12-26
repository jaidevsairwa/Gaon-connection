import React, { useState, useEffect } from "react";

import HomeImage from "../../components/homeImage";
import ImageBox from "../../components/imageBox";
import LifeHack from "./LifeHack/LifeHack";
import CardImage from "./CardImage/CardImage";
import CardGallery from "./CardGallery/CardGallery";
import TopImages from "./mobileTop/top";
import audioFile from "../../assets/audio/HueBechain.mp3";
import Insights from "../../components/insights"
import Audio from "./Audio/Audio";
import { fetchJSON } from "../../api";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import {Tweet} from 'react-tweet'
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
  get_all_category,
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
  const [banner1, setBanner1] = useState({});
  const [banner2, setBanner2] = useState({});
  const [block1, setBlock1] = useState({})
  const [block2, setBlock2] = useState({})
  const [block3, setBlock3] = useState({})
  const [block4, setBlock4] = useState({})
  const [block5, setBlock5] = useState({})
  const [block6, setBlock6] = useState({})
  const [category, setCategory] = useState({});
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
    get_challenges(selectedLanguage, setChallenges, setSingleChallenges);
    get_social(selectedLanguage, setSocialLife, setSingleSocial);
    get_gardening(selectedLanguage, setGardening, setSingleGarden);
    get_all_category(selectedLanguage, setCategory);
  }, [selectedLanguage]);

  useEffect(() => {
    getAdd1(setBanner1);
    getAdd2(setBanner2);
    getBlockAdd1(setBlock1);
    getBlockAdd2(setBlock2)
    getBlockAdd3(setBlock3)
    getBlockAdd4(setBlock4)
    getBlockAdd5(setBlock4)
    getBlockAdd6(setBlock6)
    getStory(setStory);
    getPdfs(setPdfs);
  }, {});

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
    selectedLanguage === "hi" ? "टीचर कनेक्शन " : "Teacher Connection";

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
      <Insights image={banner1?.image?.data?.attributes?.url} />
      {/* <Tweet id="1523158774566989825" /> */}

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
      <CardImage ad1={block1} ad2={block2} />
      <ImageBox
        main_heading="The Changemakers"
        heading={singleGarden?.attributes?.Title}
        title={singleGarden?.attributes?.Title}
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
                <h2 className="card-heading">{i?.attributes?.Title}</h2>
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
              onClick={() => {
                setid(item.id);
                setModalShow(true);
              }}
              className="outer-div"
              style={{ textAlign: "center" }}
            >
              <div
                className="story_container"
                style={{
                  backgroundImage: `url(${base}${item?.attributes?.images?.data?.[0]?.attributes?.url})`,
                }}
              ></div>
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
          link={`/teacher-connection/${singleChallenges?.id}`}
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

      <CardImage ad1={block3} ad2={block4}/>
      <LifeHack />
      <Insights image={banner2?.image?.data?.attributes?.url} />
      {/* Social Life */}
      {sinleSocila && (
        <ImageBox
          main_heading="Aamdani Bhadaye"
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

      <CardImage ad1={block5} ad2={block6} />
      {/* <CardGallery /> */}
      
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
            onClick={() => navigate(`/survey-report`)}
          >
            View All
          </button>
        </div>
      )}

      {/* Category */}
      {category?.length > 0 &&
        category?.map((i, index) => (
          <>
            {selectedLanguage === "hi" ?
             (
              <ImageBox
                main_heading={i?.attributes?.name}
                title={i?.attributes?.category_data_hindis?.data?.[0]?.attributes?.Name}
                desc={i?.attributes?.category_data_hindis?.data?.[0]?.attributes?.desc.slice(0, 200)}
                image={`${base}${i?.attributes?.category_data_hindis?.data?.[0]?.attributes?.images?.data?.[0]?.attributes?.url}`}
                link={`/indi-category/${i?.attributes?.category_data_hindis?.data?.[0]?.id}`}
              />
            ) : (
                <ImageBox
                  main_heading={i?.attributes?.name}
                  title={i?.attributes?.category_data?.data?.[0]?.attributes?.Name}
                  desc={i?.attributes?.category_data?.data?.[0]?.attributes?.desc.slice(0, 200)}
                  image={`${base}${i?.attributes?.category_data?.data?.[0]?.attributes?.images?.data?.[0]?.attributes?.url}`}
                  link={`/indi-category/${i?.attributes?.category_data?.data?.[0]?.id}`}
                />
            )}

            <div className="container_cardlist" key={index}>
              {selectedLanguage ==="hi" ? (
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
                  {i?.attributes?.category_data_hindis?.data?.map((item,index) => (
                    <div className="card" key={index} onClick={() => navigate(`/indi-category/${item?.id}`)}>
                      <img
                        src={`${base}${item?.attributes?.images?.data?.[0]?.attributes?.url}`}
                        alt=""
                        className="card-image"
                      />
                      <div className="card-content">
                        <h2 className="card-heading">{item?.attributes?.Name}</h2>
                        <span
                          style={{ color: "#0CC5FF" }}
                          onClick={() => navigate(`/indi-category/${item?.id}`)}
                        >
                          {" "}
                          Read More
                        </span>
                      </div>
                    </div>
                  ))}
                </Carousel>
              ):(
                  <Carousel
                draggable = { true }
                customTransition = "all .5"
                transitionDuration = { 500 }
                fade = { true }
                arrows = { true }
                responsive = { responsive }
                autoplay = { true }
                autoplaySpeed = { 500 }
                  >
                {i?.attributes?.category_data?.data?.map((item) => (
              <div className="card" key={index} onClick={() => navigate(`/indi-category/${item?.id}`)}>
                <img
                  src={`${base}${item?.attributes?.images?.data?.[0]?.attributes?.url}`}
                  alt=""
                  className="card-image"
                />
                <div className="card-content">
                  <h2 className="card-heading">{item?.attributes?.Name}</h2>
                  <span
                    style={{ color: "#0CC5FF" }}
                    onClick={() => navigate(`/indi-category/${item?.id}`)}
                  >
                    {" "}
                    Read More
                  </span>
                </div>
              </div>
                ))}
            </Carousel>
              )}

              <button
                className="btn"
                onClick={() => navigate(`/category/${i?.id}`)}
              >
                View All
              </button>
            </div>
          </>
        ))}
    </div>
  );
};

export default Home;
