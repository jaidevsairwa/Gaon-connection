import React, { useEffect, useState } from "react";
import { getStory, get_videoName  } from "../../../Repo/Apis";
import { useNavigate } from "react-router-dom";

const AllHack = () => {
  const [story, setStory] = useState([]);
  const [title,setTitle] = useState([]);
  const navigate = useNavigate();
  const base = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    getStory(setStory);
    get_videoName(setTitle)
  }, []);

  return (
    <div>
      <h1 className="imageBox_header">{title.story}</h1>
      <div className="story--container forWrap">
        {story?.length > 0 &&
        story?.map((item) => (
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
