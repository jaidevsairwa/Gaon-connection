import React, { useEffect, useState } from "react";
import { getStory } from "../../../Repo/Apis";
import { useNavigate } from "react-router-dom";

const AllHack = () => {
  const [story, setStory] = useState([]);
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
      setStory(data.data);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const base = "http://45.126.126.209:1337";

  return (
    <div>
      <h1 className="imageBox_header">लाइफ़ हैक्स</h1>
      <div className="strory--container">
        {story?.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/video-story/${item.id}`)}
            style={{ textAlign: "center" }}
          >
            <div
              className="story_container"
              style={{
                backgroundImage: `url(${base}${item?.attributes?.images?.data?.[0]?.attributes?.url})`,
              }}
            ></div>
            <span style={{ color: "#000", fontSize: "20px" }}>
              {item.attributes.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllHack;
