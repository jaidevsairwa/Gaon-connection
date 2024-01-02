import React, { useState, useEffect } from "react";

import HomeImage from "../../components/homeImage";
import ImageBox from "../../components/imageBox";
import LifeHack from "./LifeHack/LifeHack";
import CardImage from "./CardImage/CardImage";
import TopImages from "./mobileTop/top";
import Insights from "../../components/insights";
import Audio from "./Audio/Audio";
import "react-multi-carousel/lib/styles.css";
import '../../components/card/card.scss'
import axios from "axios";
import {
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
  get_image,
  get_videoName
} from "../../Repo/Apis";
import { useLanguage } from "../../LanguageContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const audioFile = "https://mehramedia.in:9306/stream.mp3&autoplay=1";

const Home = () => {
  const [banner1, setBanner1] = useState({});
  const [banner2, setBanner2] = useState({});
  const [block1, setBlock1] = useState({});
  const [block2, setBlock2] = useState({});
  const [block3, setBlock3] = useState({});
  const [block4, setBlock4] = useState({});
  const [block5, setBlock5] = useState({});
  const [block6, setBlock6] = useState({});
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
    get_image("gaon", setGaonImage);
    get_image("radio", setRadioImage);
    get_image("pod", setPodImage);
  }, []);

  useEffect(() => {
    getAdd1(setBanner1);
    getAdd2(setBanner2);
    getBlockAdd1(setBlock1);
    getBlockAdd2(setBlock2);
    getBlockAdd3(setBlock3);
    getBlockAdd4(setBlock4);
    getBlockAdd5(setBlock5);
    getBlockAdd6(setBlock6);
    getStory(setStory);
    getPdfs(setPdfs);
    get_videoName(setTitle);
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
    <div className={selectedLanguage === "hi" && "HindiFOnts"}>
      <Audio audioFile={audioFile} />
      <TopImages
        gaonImage={gaon_image?.image?.data?.attributes?.url}
        radioImage={radio_image?.image?.data?.attributes?.url}
        podImage={pod_image?.image?.data?.attributes?.url}
      />
      <HomeImage />
      <Insights image={banner1?.image?.data?.attributes?.url} />
      {/* Category */}
      {category?.length > 0 &&
        sortedData?.map((i, index) => (
          <>
            {index == 1 && <CardImage ad1={block1} ad2={block2} />}
            {index == 2 && (
              <div className="container_cardlist">
                <h1 className="imageBox_header">{video_title.story}</h1>

                <div className="strory--container1">
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
                <CardImage ad1={block3} ad2={block4} />
                <LifeHack />
                <Insights image={banner2?.image?.data?.attributes?.url} />
              </>
            )}
            {index == 4 && <CardImage ad1={block5} ad2={block6} />}
            {index == 5 && (
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
                main_heading={i?.attributes?.name}
                title={
                  i?.attributes?.category_data_hindis?.data?.[0]?.attributes
                    ?.Title
                }
                desc={i?.attributes?.category_data_hindis?.data?.[0]?.attributes?.Desc.slice(
                  0,
                  200
                )}
                image={`${base}${i?.attributes?.category_data_hindis?.data?.[0]?.attributes?.images?.data?.[0]?.attributes?.url}`}
                link={`/indi-category/${i?.attributes?.category_data_hindis?.data?.[0]?.id}`}
                id={i?.attributes?.name}
              />
            ) : (
              <ImageBox
                main_heading={i?.attributes?.name}
                title={
                  i?.attributes?.category_data?.data?.[0]?.attributes?.Title
                }
                desc={i?.attributes?.category_data?.data?.[0]?.attributes?.Desc.slice(0,200)}
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
                      {/* {i?.attributes?.category_data_hindis?.data >0 && (
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
                        )} */}
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
              {index == 1 && (
                <>
                  <button
                    className="btn"
                    style={{
                      margin: "20px auto",
                      borderRadius: "10px",
                      padding: "10px 15px",
                      backgroundColor: "#ff2800",
                      color: "white"
                    }}
                    onClick={() => navigate(`/the-changemakers`)}
                  >
                    View All
                  </button>
                </>
              )}
              {index !== 1 && (
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
              )}

            </div>
          </>
        ))}
    </div>
  );
};

export default Home;
