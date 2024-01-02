import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get_category } from "../../Repo/Apis";
import { useLanguage } from "../../LanguageContext";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import '../articles/maker.css'

const Category = () => {
  const { id } = useParams();
  const [data, setdata] = useState({});
  const { selectedLanguage } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    get_category(selectedLanguage, setdata, id);
  }, [selectedLanguage, id]);

  return (
    <div className="article_div">
      <div className="article_body">
        <h4 style={{ color: "black" }}> {data?.attributes?.name} </h4>

        {selectedLanguage==="hi" ? (
          <div>
          { data?.attributes?.category_data_hindis?.data.map((i, index) => (
            <div
              className="article_card"
              key={index}
              style={{ fontFamily: "Poppins" }}
              onClick={() => navigate(`/indi-category/${i.id}`)}
            >
              <img
                src={`${import.meta.env.VITE_BASE_URL}${i?.attributes?.images.data?.[0]?.attributes?.formats?.small.url}`}
                alt=""
              />
              <div className="article_content">
                <a className="heading-title">{i?.attributes?.Title} </a>
                {/* <p className="heading-article"> */}
                  {/* <ReactMarkdown>
                    {i?.attributes?.Desc?.slice(0, 200)}
                  </ReactMarkdown> */}
                {/* </p> */}
                <p>{i?.attributes?.sub_title}</p>
              </div>
            </div>
          ))}
          </div>
        ):(
          <div>
          {data?.attributes?.category_data?.data.map((i, index) => (
        <div
          className="article_card"
          key={index}
          style={{ fontFamily: "Poppins" }}
          onClick={() => navigate(`/indi-category/${i.id}`)}
        >
          <img
                src={`${import.meta.env.VITE_BASE_URL}${i?.attributes?.images.data?.[0]?.attributes?.formats?.small.url}`}
            alt=""
          />
          <div className="article_content">
            <a className="heading-title">{i?.attributes?.Title} </a>
                <div className="category_content" style={{ textAlign: "justify" }}>
                  {/* <div dangerouslySetInnerHTML={{ __html: i?.attributes?.Desc?.slice(0, 300) }} /> */}
                  {/* <ReactMarkdown> {i?.attributes?.Desc?.slice(0, 300)}  </ReactMarkdown> */}
                  {/* <div dangerouslySetInnerHTML={{ __html: i?.attributes?.Desc?.slice(0, 300) }} /> */}
                  <p>{i?.attributes?.sub_title}</p>
                </div>
          </div>
        </div>
        ))}
        </div>

        )}
      </div>
    </div>
  );
};

export default Category;
