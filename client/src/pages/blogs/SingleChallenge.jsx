import React, { useEffect, useState } from "react";
import { ImageCard1 } from "../../public/Images";
import "./blog.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLanguage } from "../../LanguageContext";
import { single_challenges } from "../../Repo/Apis";
import ReactMarkdown from 'react-markdown'

const SingleChallenge = () => {
  const { id } = useParams();
  const { selectedLanguage } = useLanguage();
  const [data, setData] = useState({});
  const [user, setUser] = useState([])

  useEffect(() => {
    single_challenges(selectedLanguage, id, setData, setUser);
  }, [id, selectedLanguage]);

  const divStyle = {
    color:"black",
    textAlign:"justify",
    maxWidth: "1000px",
    margin: "auto",
    padding: "20px",
    backgroundColor:"#f1f5fa",
  };

  const imgStyle = {
    maxWidth: "100%",
    margin: "auto",
    width:"100%"
  };
  const sty = {
    height: "50px",
    width: "50px",
    borderRadius: "100px"
  }

  return (
    <div style={divStyle}>
      <img
        src={`http://45.126.126.209:1337${data?.attributes?.Images?.data?.[0]?.attributes?.url}`}
        alt=""
        style={imgStyle}
      />
      <h5 className="title" style={{ fontSize: "30px" }}>
        {" "}
        {data?.attributes?.Title}{" "}
      </h5>
      <ReactMarkdown>{data?.attributes?.Desc}</ReactMarkdown>
      <div>
        <img className="auth-img" src={`http://45.126.126.209:1337${user?.attributes?.personalPhoto?.data?.attributes?.url}`} alt="" />
        <span>Author : {data?.attributes?.user_info?.data?.attributes?.username}</span>
      </div>
    </div>
  );
};

export default SingleChallenge;
