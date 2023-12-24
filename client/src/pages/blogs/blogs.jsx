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

  useEffect(() => {
    Single_News(selectedLanguage, id, setData);
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
    </div>
  );
};
export default Blogs;
