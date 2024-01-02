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


  const imgStyle = {
    maxWidth: "100%",
    margin: "auto",
    width:"100%"
  };
  const date = new Date(data?.attributes?.publishedAt)
  const forDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  return (
    <div className="divStyle">
      <h5 className="title" style={{ fontSize: "30px" }}>
        {" "}
        {data?.attributes?.Title}{" "}
      </h5>
      <div className="author" onClick={() => navigate(`../creator/${data?.attributes?.user_info?.data?.id}`)}>
        <img className="auth-img" src={`${import.meta.env.VITE_BASE_URL}/${user?.attributes?.personalPhoto?.data?.attributes?.formats?.thumbnail?.url}`} alt="" />
        <span className="author-name"> {data?.attributes?.user_info?.data?.attributes?.username}</span>
        <span className="cre-date" >{forDate}</span>
      </div>
      <img
        src={`${import.meta.env.VITE_BASE_URL}/${data?.attributes?.Images?.data?.[0]?.attributes?.url}`}
        alt=""
        style={imgStyle}
      />
      <ReactMarkdown>{data?.attributes?.Desc}</ReactMarkdown>
    </div>
  );
};

export default SingleChallenge;
