import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get_post } from "../../Repo/Apis";
import { useLanguage } from "../../LanguageContext";
import { useNavigate } from "react-router-dom";

const AuthorStory = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const { selectedLanguage } = useLanguage();
    const [user, setUser] = useState([])
    const navigate = useNavigate();

    const imgStyle = {
        maxWidth: "100%",
        margin: "auto",
        width: "99%",
    };
    const date = new Date(data?.attributes?.publishedAt)
    const forDate = date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    useEffect(() => {
        get_post(id, setData);
    }, [selectedLanguage, id]);

    return (
        <div className="divStyle">
            {/* {selectedLanguage === "hi" ? (
                <h4 style={{ color: "black" }}> {data?.attributes?.create_category_hindi?.data?.attributes.name} </h4>
                ) : (
                    <h4 style={{ color: "black" }}> {data?.attributes?.create_category?.data?.attributes.name} </h4>
                )} */}


            <div >
                <h6 style={{ fontSize: "28px" }}>{data?.attributes?.Title}</h6>
                <div className="author" onClick={() => navigate(`../creator/${data?.attributes?.user_info?.data?.id}`)}>
                    <img className="auth-img" src={`${import.meta.env.VITE_BASE_URL}${user?.attributes?.personalPhoto?.data?.attributes?.formats?.thumbnail?.url}`} alt="" />
                    <span className="author-name"> {data?.attributes?.user_info?.data?.attributes?.username}</span>
                    <span className="cre-date" >{forDate}</span>
                </div>
                <img style={imgStyle} src={`${import.meta.env.VITE_BASE_URL}/${data?.attributes?.images?.data[0].attributes?.url}`} alt="" />
            </div>
            <div className="category_content" style={{ textAlign: 'justify' }}>
                <p>{data?.attributes?.Desc}</p>
            </div>
        </div>
    );
};

export default AuthorStory;
