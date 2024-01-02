import React, { useEffect, useState } from "react";
import { getStory  } from "../../../Repo/Apis";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllHack = () => {
  const [story, setStory] = useState([]);
  const navigate = useNavigate();
  const Auth = {
    headers: {
      Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
    },
  };
  const base = import.meta.env.VITE_BASE_URL;
  const fetchHandler = async () => {
    // try {
    //   const data  = await axios.get(
    //     `${base}/api/reel?populate=*`,
    //     Auth
    //   );
    //   console.log(data);
    //   setStory(data.data);
    // } catch { console.log("error")}
    const data = await axios.get(
        `${base}/api/reel?populate=*`,
        Auth
      );
      setStory(data.data.data);
  };

  useEffect(() => {
    // fetchHandler();
    getStory(setStory)
  }, []);

console.log(story);
  return (
    <div>
      <h1 className="imageBox_header">लाइफ़ हैक्स</h1>
      <div className="strory--container">
        {story?.length > 0 &&
        story?.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/video-story/${item.id}`)}
            style={{ textAlign: "center" }}
          >
            {console.log(item.id)}
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
