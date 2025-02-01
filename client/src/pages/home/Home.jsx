import React, { useState, useEffect } from "react";

import HomeImage from "../../components/homeImage";
import ImageBox from "../../components/imageBox";
import LifeHack from "./LifeHack/LifeHack";
import TopImages from "./mobileTop/top";
import "react-multi-carousel/lib/styles.css";
import '../../components/card/card.scss'
import axios from "axios";
import {
  getPdfs,
  get_Story,
  get_all_category,
  get_image,
} from "../../Repo/Apis";
import { useLanguage } from "../../LanguageContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [category, setCategory] = useState({});
  const [story, setStory] = useState([]);
  const { selectedLanguage } = useLanguage();
  const [pdfs, setPdfs] = useState([]);
  const navigate = useNavigate();
  const [sortedData, setSortedData] = useState([]);
  const [gaon_image, setGaonImage] = useState({});
  const [radio_image, setRadioImage] = useState({});
  const [pod_image, setPodImage] = useState({});
  const [video_title,setTitle] = useState({});

  window.scrollTo(0, 0);


  useEffect(() => {
    get_all_category(selectedLanguage, setCategory);
  }, [selectedLanguage]);

  useEffect(() => {
    get_image("tv", setGaonImage);
    get_image("radio", setRadioImage);
    get_image("pod", setPodImage);
    getPdfs(setPdfs);
    get_Story(setStory);
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

  const base = `${import.meta.env.VITE_BASE_URL}`;

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

  useEffect(() => {
    if (Array.isArray(category) && category) {
      const date_sorted = category
        .slice()
        .sort(
          (a, b) => (a?.attributes?.order || 0) - (b?.attributes?.order || 0)
        );

      setSortedData(date_sorted);
    }
  }, [category]);

  return (
    <div className={selectedLanguage === "hi" && "HindiFonts"}>
      <TopImages
        gaonImage={gaon_image?.url}
        radioImage={radio_image?.url}
        podImage={pod_image?.url}
      />
      <HomeImage />
      {category?.length > 0 &&
        sortedData?.map((i, index) => (
          <>
            {index == 2 && (
              <div className="container_cardlist">
                <h1 className="imageBox_header">Stories</h1>

                <div className="story--container-home">
                  {story?.slice(0, 6)?.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        navigate(`/web-stories/${item.id}`);
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
                <button
                  className="btn"
                  style={{
                    margin: "20px auto",
                    borderRadius: "10px",
                    padding: "10px 15px",
                    backgroundColor: "#ff2800",
                    color: "white"
                  }}
                  onClick={() => navigate(`/all-stories`)}
                >
                  View All
                </button>
              </div>
            )}
            {index == 3 && (
              <>
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
                        <div
                          className="card"
                          style={{ boxShadow: "none" }}
                          key={index}
                        >
                          <img
                            src={`${base}${i?.attributes?.thumbnail?.data?.[0]?.attributes?.url}`}
                            onClick={() =>
                              downloadPDF(
                                i?.attributes?.Docs?.data?.[0]?.attributes
                                  ?.name,
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
                      style={{
                        margin: "20px auto",
                        borderRadius: "10px",
                        padding: "10px 15px",
                        backgroundColor: "#ff2800",
                        color: "white"
                      }}
                      onClick={() => navigate(`/survey-report`)}
                    >
                      View All
                    </button>
                  </div>
                )}
              </>
            )}

            {selectedLanguage === "hi" ? (
              <ImageBox
                main_heading={i?.attributes?.Name}
                title={
                  i?.attributes?.category_data_hindis?.data?.[0]?.attributes
                    ?.Title
                }
                desc={i?.attributes?.category_data_hindis?.data?.[0]?.attributes?.Desc.slice(
                  0,
                  200
                )}
                image={`${base}${i?.attributes?.category_data_hindis?.data?.[0]?.attributes?.image?.data?.[0]?.attributes?.url}`}
                
                link={`/indi-category/${i?.attributes?.category_data_hindis?.data?.[0]?.id}`}
                id={i?.attributes?.name}
              />
            ) : (
              <ImageBox
                main_heading={i?.attributes?.name}
                title={
                  i?.attributes?.category_data?.data?.[0]?.attributes?.Title
                }
                desc={i?.attributes?.category_data?.data?.[0]?.attributes?.desc.slice(0,200)}
                image={`${base}${i?.attributes?.category_data?.data?.[0]?.attributes?.images?.data?.[0]?.attributes?.url}`}
                link={`/indi-category/${i?.attributes?.category_data?.data?.[0]?.id}`}
              />
            )}

            <div className="container_cardlist" key={index}>
              {selectedLanguage === "hi"
                ?
                 i?.attributes?.category_data_hindis?.data.length > 0 && (
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
                    {i?.attributes?.category_data_hindis?.data
                      ?.slice(1)
                      .map((item) => (
                        <div
                          className="card"
                          key={index}
                          onClick={() =>
                            navigate(`/indi-category/${item?.id}`)
                          }
                        >
                          <img
                            src={`${base}${item?.attributes?.image?.data?.[0]?.attributes?.url}`}
                            alt=""
                            className="card-image"
                          />
                          <div className="card-content">
                            <h2 className="card-heading">
                              {item?.attributes?.Title}
                            </h2>
                            <span
                              style={{ color: "#0CC5FF" }}
                              onClick={() =>
                                navigate(`/indi-category/${item?.id}`)
                              }
                            >
                              {" "}
                              Read More
                            </span>
                          </div>
                        </div>
                      ))}
                    </Carousel>
                    
                  )
                :  (
                  <>
                    {i?.attributes?.category_data?.data.length > 0 && (
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
                      {i?.attributes?.category_data?.data
                        ?.slice(1)
                        .map((item) => (
                          <div
                            className="card"
                            key={index}
                            onClick={() =>
                              navigate(`/indi-category/${item?.id}`)
                            }
                          >
                            <img
                              src={`${base}${item?.attributes?.images?.data?.[0]?.attributes?.url}`}
                              alt=""
                              className="card-image"
                            />
                            <div className="card-content">
                              <h2 className="card-heading">
                                {item?.attributes?.Title}
                              </h2>
                              <span
                                style={{ color: "#0CC5FF" }}
                                onClick={() =>
                                  navigate(`/indi-category/${item?.id}`)
                                }
                              >
                                {" "}
                                Read More
                              </span>
                            </div>
                          </div>
                        ))}
                    </Carousel>
)}
                  </>
                  )}
              <button
                className="btn"
                style={{
                  margin: "20px auto",
                  borderRadius: "10px",
                  padding: "10px 15px",
                  backgroundColor: "#ff2800",
                  color: "white"
                }}
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
