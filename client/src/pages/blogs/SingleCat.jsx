import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get_single_category } from "../../Repo/Apis";
import { useLanguage } from "../../LanguageContext";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { Tweet } from "react-tweet"
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import "./blog.css";

const SingleCat = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const { selectedLanguage } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    get_single_category(selectedLanguage, setData, id);
    const tww = () =>{
      if (data?.attributes?.Desc){
        document?.querySelector("twitter-tweet")?.load("https://platform.twitter.com/widgets.js")
      }
      else{}
    }
    tww()
  }, [selectedLanguage, id]);

  console.log(data.attributes)

  return (
    <div className="divStyle">
      <div>
        <h1 className="title">{data?.attributes?.Title}</h1>
        <img
          className="blog-image"
          src={`${import.meta.env.VITE_BASE_URL}${
            data?.attributes?.image?.data?.attributes?.url
          }`}
          alt=""
        />
      </div>

      <div className="blog-content">
        {/* <div dangerouslySetInnerHTML={{ __html: data?.attributes?.Desc }} /> */}
        <ReactMarkdown rehypePlugins={[rehypeRaw]} >{data?.attributes?.desc}</ReactMarkdown>
      </div>
    </div>
  );
};
export default SingleCat;
