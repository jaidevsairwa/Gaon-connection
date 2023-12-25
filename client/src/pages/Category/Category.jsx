import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get_category } from "../../Repo/Apis";
import { useLanguage } from "../../LanguageContext";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

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

        {data?.attributes?.category_data?.data.map((i, index) => (
          <div
            className="article_card"
            key={index}
            style={{ fontFamily: "Poppins" }}
            onClick={() => navigate(`/indi-category/${i.id}`)}
          >
            <img
              src={`http://45.126.126.209:1337${i?.attributes?.images?.data[0].attributes?.url}`}
              alt=""
            />
            <div className="article_content">
              <a className="heading-title">{i?.attributes?.Name} </a>
              <p className="heading-article">
                <ReactMarkdown>
                  {i?.attributes?.desc?.slice(0, 300)}
                </ReactMarkdown>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
