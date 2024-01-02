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
  const [user, setUser] = useState([])

  useEffect(() => {
    single_social(selectedLanguage, id, setData,setUser);
  }, [selectedLanguage, id]);

  const imgStyle = {
    maxWidth: "100%",
    margin: "auto",
  };
  const date = new Date(data?.attributes?.publishedAt)
  const forDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  return (
    <div className="divStyle">
      <p className="title"> {data?.attributes?.Title} </p>
      <div className="author" onClick={() => navigate(`../creator/${data?.attributes?.user_info?.data?.id}`)}>
        <img className="auth-img" src={`http://45.126.126.209:1337${user?.attributes?.personalPhoto?.data?.attributes?.formats?.thumbnail?.url}`} alt="" />
        <span className="author-name"> {data?.attributes?.user_info?.data?.attributes?.username}</span>
        <span className="cre-date" >{forDate}</span>
      </div>
      <img
        src={`${import.meta.env.VITE_BASE_URL}${data?.attributes?.images?.data?.[0]?.attributes?.url}`}
        alt=""
        style={imgStyle}
      />
      <ReactMarkdown className="desc" >{data?.attributes?.Desc}</ReactMarkdown>
    </div>
  );
};

export default SingleSocial;
