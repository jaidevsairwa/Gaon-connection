import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { useNavigate } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

import HomeImage from "../../components/homeImage";
import ImageBox from "../../components/imageBox";
import LifeHack from "./LifeHack/LifeHack";
import "react-multi-carousel/lib/styles.css";
import '../../components/card/card.scss'
import axios from "axios";
import {
  getPdfs,
  get_Story,
  get_all_category,
} from "../../Repo/Apis";
import { useLanguage } from "../../LanguageContext";

const Home = () => {
  const [category, setCategory] = useState({});
  const [story, setStory] = useState([]);
  const { selectedLanguage } = useLanguage();
  const [pdfs, setPdfs] = useState([]);
  const navigate = useNavigate();
  const [sortedData, setSortedData] = useState([]);
  const [video_title,setTitle] = useState({});

  window.scrollTo(0, 0);


  useEffect(() => {
    get_all_category(selectedLanguage, setCategory);
  }, [selectedLanguage]);

  useEffect(() => {
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
    <div>
      {/* <TopImages
        gaonImage={gaon_image?.url}
        radioImage={radio_image?.url}
        podImage={pod_image?.url}
      /> */}

      <a href="/podcast"><button className="podcast-button">
      {/* <img width="50" height="50" src="https://img.icons8.com/ios/50/play--v1.png" alt="play--v1"/> */}
      <svg fill="#ffffff" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30 c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15 C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"></path> <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30 S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"></path> </g> </g></svg>
        Podcast
      </button>
      </a>
      
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
                desc={i?.attributes?.category_data_hindis?.data?.[0]?.attributes?.desc.slice(
                  0,
                  200
                )}
                image={`${base}${i?.attributes?.category_data_hindis?.data?.[0]?.attributes?.image?.data?.attributes?.url}`}
                
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
                image={`${base}${i?.attributes?.category_data?.data?.[0]?.attributes?.image?.data?.attributes?.url}`}
                link={`/indi-category/${i?.attributes?.category_data?.data?.[0]?.id}`}
              />
            )}
            {console.log(i?.attributes?.category_data?.data)}

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
                            src={`${base}${item?.attributes?.image?.data?.attributes?.url}`}
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
                              src={`${base}${item?.attributes?.image?.data?.attributes?.url}`}
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
