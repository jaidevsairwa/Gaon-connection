import React from "react";
import "./lifehack.scss";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ShortsCanvas from "./ShortsCanvas";


const LifeHack = () => {
  const [lifeHack, setLifeHack] = useState([]);
  const [modalShow2, setModalShow2] = useState(false);
  const navigate = useNavigate();

  const Auth = {
    headers: {
      Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
    },
  };

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}api/reel?populate=*`,
        Auth
      );
      setLifeHack(data.data);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const base = "http://45.126.126.209:1337";
  return (
    <>
      <ShortsCanvas show={modalShow2} setShow={setModalShow2} data={lifeHack} />
      <div className="life_container">
        <h2>लाइफ़ हैक्स</h2>
        <div className="container_cardlist">
          <div className="strory--container">
            {lifeHack?.slice(0, 6)?.map((item) => (
              <div
                key={item.id}
                // onClick={() => navigate(`/video-story/${item.id}`)}
                onClick={() => setModalShow2(true)}
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
