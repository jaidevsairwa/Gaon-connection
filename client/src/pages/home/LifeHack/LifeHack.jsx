import React from "react";
import "./lifehack.scss";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { get_videoName } from "../../../Repo/Apis";

const LifeHack = () => {
  const [lifeHack, setLifeHack] = useState([]);
  const [video_title, setTitle] = useState({});
  const navigate = useNavigate();

  const Auth = {
    headers: {
      Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
    },
  };

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/reel?populate=*`,
        Auth
      );
      setLifeHack(data.data);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
    get_videoName(setTitle);
  }, []);

  const base = import.meta.env.VITE_BASE_URL;
  return (
    <>
      <div className="life_container">
        <h2>{video_title.story}</h2>
        <div className="container_cardlist">
          <div className="story--container-home">
            {lifeHack?.slice(0, 6)?.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/reels`)}
                style={{ textAlign: "center" }}
                className="outer-div"
              >
                <div
                  className="story_container"
                  style={{
                    backgroundImage: `url(${base}${item?.attributes?.images?.data?.[0]?.attributes?.url})`,
                  }}
                ></div>
              </div>
            ))}
          </div>
          <button className="btn" onClick={() => navigate(`/all-hacks`)}>
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default LifeHack;
