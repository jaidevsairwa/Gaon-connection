import React, { useState, useEffect } from "react";
import Card from "../articles/card";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";
import { get_gardening } from "../../Repo/Apis";
import img from "../../assets/img.jpg";
import img1 from "../../assets/img1.jpg";
import ReactMarkdown from 'react-markdown'

const divContainer = {
  display: "flex",
  justifyContent: "space-evenly",
  gap: "20px",
  alignItem: "center",
  flexWrap: "wrap",
  padding: "10px",
};

const imgContainer = {
  width: "300px",
  height: "250px",
};

const Gardening = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const { selectedLanguage } = useLanguage();

  useEffect(() => {
    get_gardening(selectedLanguage, setdata);
  }, [selectedLanguage]);

  return (
    <div className="article_div">
      <div style={divContainer}>
        <img src={img} alt="" style={imgContainer} />
        <img src={img1} alt="" style={imgContainer} />
      </div>
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
      <div className="article_body">
        <h4 style={{ color: "black" }}> The Change Makers</h4>
        {data?.map((i, index) => (
          <div
            className="article_card"
            key={index}
            style={{ fontFamily: "Poppins" }}
            onClick={() => navigate(`/the-changemakers/${i.id}`)}
          >
            <img
              src={`${import.meta.env.VITE_BASE_URL}${i?.attributes?.images?.data?.[0]?.attributes?.url}`}
              alt=""
            />
            <div className="article_content">
              <a className="heading-title">{i?.attributes?.Titlle} </a>
              <p className="heading-article">
                <ReactMarkdown >{i?.attributes?.Desc?.slice(0, 300)}</ReactMarkdown>
              </p>
            </div>
            <Card title={i?.attributes?.Titlle} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gardening;

// Gardening and Farming
