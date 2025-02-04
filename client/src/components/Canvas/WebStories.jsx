import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Stories from "react-insta-stories";
import { getSingleStory } from "../../Repo/Apis";
import "../../pages/home/stories/stories.css";
import img from "../../assets/download.svg";
import { useParams } from "react-router-dom";

const WebStories = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [currentStory, setCurrentStory] = useState(0);

  useEffect(() => {
    if (id) {
      getSingleStory(setData, id);
      setCurrentStory(0);
    }
  }, [id]);

  let images;
  if (data) {
    images = data?.attributes?.video?.data?.map((i) => ({
      url: `${import.meta.env.VITE_BASE_URL}${i?.attributes?.url}`,
      type: i?.attributes?.mime === "video/mp4" ? "video" : "image",
    }));
  }

  console.log(images);
  const handleNext = () => {
    setCurrentStory((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentStory(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="Story-Modal">
        <div className="stories">
          {images?.length > 0 && (
            <React.Fragment>
              <Stories
                stories={images}
                defaultInterval={1500}
                width={432}
                loader
                loop
                height={768}
                currentIndex={currentStory}
              />
              <div className="navigation-buttons">
                <img src={img} alt="" className="privo" onClick={handleNext} />{" "}
                <img
                  src={img}
                  alt=""
                  className="next"
                  onClick={handlePrevious}
                />
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </>
  );
};

export default WebStories;
