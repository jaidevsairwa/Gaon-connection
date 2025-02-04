import React, { useState, useEffect } from "react";
import "./stories.css";
import Stories from "react-insta-stories";
import { getSingleStory } from "../../../Repo/Apis";
import { useParams } from "react-router-dom";

const VideoStory = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getSingleStory(setData, id);
  }, []);
  
  let images;
  if (data) {
    images = data?.attributes?.video?.data?.map((i) => ({
      url: `${import.meta.env.VITE_BASE_URL}${i?.attributes?.url}`,
      type: i?.attributes?.mime === "video/mp4" ? "video" : "image",
    }));
  }

console.log(images);



  return (
    <div className="stories">
      {images?.length > 0 && (
        <Stories
          stories={images}
          defaultInterval={1500}
          width={432}
          loader
          loop
          height={768}
        />
      )}
    </div>
  );
};
export default VideoStory;
