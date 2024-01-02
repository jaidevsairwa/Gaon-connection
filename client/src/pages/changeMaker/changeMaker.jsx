import React, { useEffect, useState } from "react";
import "./changeMaker.css";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import img from "../../assets/img.jpg";
import img1 from "../../assets/img1.jpg";

const ChangeMaker = () => {
  const [data, setData] = useState([]);
  const [singledata, setSingledata] = useState({});
  const base = import.meta.env.VITE_BASE_URL
  const Auth = {
    headers: {
      Authorization:
        `Bearer ${import.meta.env.VITE_TOKEN}` ,
    },
  };

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        `${base}/api/change-makers?populate=*`,
        Auth
      );
      setData(data.data);
      setSingledata(data?.data?.reverse()?.[0]);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);


  const imgContainer = {
    width: "300px",
    height: "250px",
  };

  return (
    <div>
      <div className="div-container">
        <img src={img} alt="" style={imgContainer} />
        <img src={img1} alt="" style={imgContainer} />
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        This unique long term project aims to build a one-of-its-kind National
        Registry of Changemakers in the country. From social workers, teachers,
        environmentalists, farmers, artists, to individuals whose work has
        transformed lives will be featured as part of The Changemakers Project.
        Gaon Connection has been building and nurturing connections for the past
        eleven years now. The Changemakers Project is another step in that
        direction. There are hundreds of thousand people out there — the doers —
        whose life mission is to help others. And they often work under extreme
        circumstances with bare minimum resources — financial or material.
      </p>
      </div>
      <div className="change-maker">
        <div>
          <img
            src={`${import.meta.env.VITE_BASE_URL}${singledata?.attributes?.Images?.data?.[0]?.attributes?.url}`}
            alt=""
          />
        </div>
        <div className="maker-text">{singledata?.attributes?.Desc}</div>
      </div>
      <div className="article_div">
        <div className="article_body">
          <h4 style={{ color: "black" }}>The Change Makers Project</h4>
          {data?.map((i, index) => (
            <div
              className="article_card"
              key={index}
              style={{ fontFamily: "Poppins" }}
            >
              <img
                src={`${import.meta.env.VITE_BASE_URL}/${i?.attributes?.Images?.data?.[0]?.attributes?.url}`}
                alt=""
              />
              <div className="article_content">
                <a className="heading-title">{i?.attributes?.Title} </a>
                <p className="heading-article">
                  <ReactMarkdown>
                    {i?.attributes?.Desc?.slice(0, 300)}
                  </ReactMarkdown>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ChangeMaker;
