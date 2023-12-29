import React, { useEffect, useState } from "react";
import "./blog.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLanguage } from "../../LanguageContext";
import { Single_News } from "../../Repo/Apis";
import ReactMarkdown from 'react-markdown'

const Blogs = () => {
  const { id } = useParams();
  const { selectedLanguage } = useLanguage();
  const [data, setData] = useState({});
  const [user,setUser] = useState([])

  useEffect(() => {
    Single_News(selectedLanguage, id, setData,setUser);
  }, [id, selectedLanguage]);

  const imgStyle = {
    maxWidth: "100%",
    margin: "auto",
  };

  return (
    <div className="divStyle">
      <img
        src={`http://45.126.126.209:1337${data?.attributes?.images?.data?.[0]?.attributes?.url}`}
        alt=""
        style={imgStyle}
      />
      <p className="title"> {data?.attributes?.Title} </p>
      <ReactMarkdown className="desc" >{data?.attributes?.Desc}</ReactMarkdown>
      <div>
        <img className="auth-img" src={`http://45.126.126.209:1337${user?.attributes?.personalPhoto?.data?.attributes?.url}`} alt="" />
        <span>Author : {data?.attributes?.user_info?.data?.attributes?.username}</span>
      </div>
    </div>
  );
};
export default Blogs;
