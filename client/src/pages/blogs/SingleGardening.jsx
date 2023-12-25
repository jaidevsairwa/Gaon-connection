import React, { useEffect, useState } from "react";
import "./blog.css";
import { useParams } from "react-router-dom";
import { single_gardening } from "../../Repo/Apis";
import { useLanguage } from "../../LanguageContext";
import ReactMarkdown from 'react-markdown'

const SingleGardening = () => {
  const { id } = useParams();
  const { selectedLanguage } = useLanguage();
  const [data, setData] = useState({});

  useEffect(() => {
    single_gardening(selectedLanguage, id, setData);
  }, [id, selectedLanguage]);

  const divStyle = {
    maxWidth: "1000px",
    margin: "auto",
    padding: "20px",
    backgroundColor:"#f1f5fa",
    textAlign:"justify",
    color:"black"
  };

  const imgStyle = {
    maxWidth: "100%",
    margin: "auto",
  };


  return (
    <div style={divStyle}>
      <img
        src={`http://45.126.126.209:1337${data?.attributes?.images?.data?.[0]?.attributes?.url}`}
        alt=""
        style={imgStyle}
      />
      <h3 className="" style={{ fontSize: "20px" }}>
        {" "}
        {data?.attributes?.Title}{" "}
      </h3>

      <ReactMarkdown>{data?.attributes?.Desc }</ReactMarkdown>
    </div>
  );
};

export default SingleGardening;
