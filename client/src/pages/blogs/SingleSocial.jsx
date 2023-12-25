import React, { useEffect, useState } from "react";
import { ImageCard1 } from "../../public/Images";
import "./blog.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { single_social } from "../../Repo/Apis";
import { useLanguage } from "../../LanguageContext";
import ReactMarkdown from "react-markdown"

const SingleSocial = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const { selectedLanguage } = useLanguage();

  useEffect(() => {
    single_social(selectedLanguage, id, setData);
  }, [selectedLanguage, id]);

  const divStyle = {
    maxWidth: "1000px",
    margin: "auto",
    padding: "20px",
    textAlign: " center",
    color:"black",
    backgroundColor:"#f1f5fa",
    minHeight:"90vh"
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
      <p className="title" style={{ fontSize: "20px" }}>
        {" "}
        {data?.attributes?.Title}{" "}
      </p>
      <ReactMarkdown>{data?.attributes?.Desc}</ReactMarkdown>
    </div>
  );
};

export default SingleSocial;
