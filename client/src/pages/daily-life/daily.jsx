import React, { useEffect, useState } from "react";
import Card from "../articles/card";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";
import { Daily_News_English, Daily_News_In_Hindi } from "../../Repo/Apis";
import ReactMarkdown from 'react-markdown'

const Daily = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  const { selectedLanguage } = useLanguage();

  useEffect(() => {
    if (selectedLanguage === "hi") {
      Daily_News_In_Hindi(setdata);
    } else {
      Daily_News_English(setdata);
    }
  }, [selectedLanguage]);

  return (
    <div className="article_div">
      <div className="article_body">
        <h4 style={{ color: "black" }}>Kisaan Connection</h4>
        {data?.map((i, index) => (
          <div
            className="article_card"
            key={index}
            style={{ fontFamily: "Poppins" }}
            onClick={() => navigate(`/kisaan-connection/${i.id}`)}
          >
            <img
              src={`http://45.126.126.209:1337${i?.attributes?.images?.data?.[0]?.attributes?.url}`}
              alt=""
            />
            <div className="article_content">
              <a className="heading-title">{i?.attributes?.Title} </a>
              {/* <p > */}
                <ReactMarkdown className="heading-article">
                {i?.attributes?.Desc?.slice(0, 300)}
                </ReactMarkdown>
              {/* </p> */}
            </div>
            <Card title={i?.attributes?.Title} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Daily;
