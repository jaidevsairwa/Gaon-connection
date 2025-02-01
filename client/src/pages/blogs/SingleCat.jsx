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
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const imgStyle = {
    maxWidth: "100%",
    margin: "auto",
    width: "99%",
    aspectRatio: "16/9"
  };
  const date = new Date(data?.attributes?.publishedAt);
  const forDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  useEffect(() => {
    get_single_category(selectedLanguage, setData, id, setUser);
    const tww = () =>{
      if (data?.attributes?.Desc){
        document?.querySelector("twitter-tweet")?.load("https://platform.twitter.com/widgets.js")
      }
      else{}
    }
    tww()
  }, [selectedLanguage, id]);

  return (
    <div className="divStyle">
      <div>
        <h1>{data?.attributes?.Title}</h1>
        <h2>{data?.attributes?.sub_title}</h2>

        {/* <div className="author">
          <div onClick={() =>
            navigate(`../creator/${data?.attributes?.user_info?.data?.id}`)
          }>
          <img
            className="auth-img"
            src={`${import.meta.env.VITE_BASE_URL}${
              user?.attributes?.personalPhoto?.data?.attributes?.formats?.thumbnail
                ?.url
            }`}
            alt=""
          />
          <span className="author-name">
            {" "}
            {data?.attributes?.user_info?.data?.attributes?.username}
          </span>
          </div>
          <span className="cre-date">{forDate}</span>
        </div> */}


        <img
          style={imgStyle}
          src={`${import.meta.env.VITE_BASE_URL}${
            data?.attributes?.images?.data[0].attributes?.url
          }`}
          alt=""
        />
      </div>

      <div className="category_content" style={{ textAlign: "justify" }}>
        {/* <div dangerouslySetInnerHTML={{ __html: data?.attributes?.Desc }} /> */}
        <ReactMarkdown rehypePlugins={[rehypeRaw]} >{data?.attributes?.desc}</ReactMarkdown>
      </div>
    </div>
  );
};
export default SingleCat;
