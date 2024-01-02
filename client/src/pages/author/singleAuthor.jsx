import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";
import { getAuthor } from "../../Repo/Apis";
import './author.css'
import { useNavigate } from "react-router-dom";

const Author = () => {
    const { id } = useParams();
    const { selectedLanguage } = useLanguage();
    const [data, setData] = useState({});
    const [cate,setCate] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAuthor(id, setData,setCate);
    }, [id, selectedLanguage]);


    return (
        <div className="author-single">
            <div className="top-intro">
                <div>
                <img className="auth-img-page" src={`${import.meta.env.VITE_BASE_URL}${data?.attributes?.personalPhoto?.data?.attributes?.url}`} alt="" />
                </div>
                <div className="auth-content">
                <h4>{data?.attributes?.username} </h4>
                <hr />
                {data?.attributes?.author_desc}
                </div>
            </div>
            <div className="author-uploads">
            <hr />
            <h1>Uploads by the user </h1>
            <hr/>
                {cate.slice(6).map(item =>(
                    (item.data.length > 0 && (
                        item.data.map(cont => (
                            <div className="upload-content" onClick={() => navigate(`../Author-story/${cont?.id}`)}>
                                <h2> {cont.attributes.Title}</h2>
                                <p>{cont.attributes.Desc.slice(0,500)} ..... </p>
                            </div>
                        ))
                    ))
                ))}
            </div>
        </div>
    );
};
export default Author;
