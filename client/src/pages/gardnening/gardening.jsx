import React, { useState, useEffect } from "react";
import Card from "../articles/card";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";
import { get_gardening } from "../../Repo/Apis";
import ReactMarkdown from 'react-markdown'

const Gardening = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const { selectedLanguage } = useLanguage();

  useEffect(() => {
    get_gardening(selectedLanguage, setdata);
  }, [selectedLanguage]);

  return (
    <div className="article_div">
      <div className="article_body">
        <h4 style={{ color: "black" }}> Gardening and Farming</h4>
        {data?.map((i, index) => (
          <div
            className="article_card"
            key={index}
            style={{ fontFamily: "Poppins" }}
            onClick={() => navigate(`/garndening-item/${i.id}`)}
          >
            <img
              src={`http://45.126.126.209:1337${i?.attributes?.images?.data?.[0]?.attributes?.url}`}
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
