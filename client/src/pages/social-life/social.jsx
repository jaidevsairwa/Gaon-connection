import React, { useState, useEffect } from "react";
import Card from "../articles/card";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";
// import { get_social } from "../../Repo/Apis";
import ReactMarkdown from 'react-markdown'

const Social = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const { selectedLanguage } = useLanguage();

  // useEffect(() => {
  //   get_social(selectedLanguage, setdata);
  // }, [selectedLanguage]);

  return (
    <div className="article_div" >
      <div className="article_body">
        <h4 style={{ color: "black" }}> AAMDANI Bhadaye</h4>
        {data?.map((i, index) => (
          <div
            className="article_card"
            key={index}
            style={{ fontFamily: "Poppins" }}
            onClick={() => navigate(`/aamdani-bhadaye-item/${i.id}`)}
          >
            <img
              src={`${import.meta.env.VITE_BASE_URL}${i?.attributes?.images?.data?.[0]?.attributes?.url}`}
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
            <Card title={i?.attributes?.Title} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Social;
