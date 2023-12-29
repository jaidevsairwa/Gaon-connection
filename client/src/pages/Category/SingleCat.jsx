import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get_single_category } from "../../Repo/Apis";
import { useLanguage } from "../../LanguageContext";

const SingleCat = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const { selectedLanguage } = useLanguage();
  const [user, setUser] = useState([])

  const imgStyle = {
    maxWidth: "100%",
    margin: "auto",
  };

  useEffect(() => {
    get_single_category(selectedLanguage, setData, id,setUser);
  }, [selectedLanguage, id]);

  return (
    <div className="article_div">
      <div className="article_body">
        {selectedLanguage === "hi" ? (
          <h4 style={{ color: "black" }}> {data?.attributes?.create_category_hindi?.data?.attributes.name} </h4>
        ) : (
            <h4 style={{ color: "black" }}> {data?.attributes?.create_category?.data?.attributes.name} </h4>
        )}


        <div >
          <img src={`http://45.126.126.209:1337${data?.attributes?.images?.data[0].attributes?.url}`} style={{ width: "100%" }} alt="" />
        </div>
        <div className="category_content" style={{ textAlign: 'justify' }}>
          <h6 style={{ fontSize: "28px" }}>{data?.attributes?.Name}</h6>
          <p>{data?.attributes?.desc}</p>
          <div>
            <img className="auth-img" src={`http://45.126.126.209:1337${user?.attributes?.personalPhoto?.data?.attributes?.url}`} alt="" />
            <span>Author : {data?.attributes?.user_info?.data?.attributes?.username}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCat;
