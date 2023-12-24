import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Stories from "react-insta-stories";
import { getSingleStory } from "../../Repo/Apis";
import "../../pages/home/stories/stories.css";
import img from "../../assets/download.svg";
import close from "../../assets/x.svg";

export const StoryCanvas = ({ show, setShow, id }) => {
  const [data, setData] = useState([]);
  const [currentStory, setCurrentStory] = useState(0);

  useEffect(() => {
    if (show) {
      getSingleStory(setData, id);
      // Reset current story index when showing the modal
      setCurrentStory(0);
    }
  }, [show, id]);

  let images;
  if (data) {
    images = data?.attributes?.video?.data?.map((i) => ({
      url: `http://45.126.126.209:1337${i?.attributes?.url}`,
      type: i?.attributes?.mime === "video/mp4" ? "video" : "image",
    }));
  }

  const handleNext = () => {
    setCurrentStory((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentStory(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };


  return (
    <Modal
      show={show}
      fullscreen={true}
      onHide={() => {
        console.log("Hiding modal");
        setShow(false);
      }}
      style={{ padding: 0 }}
    >
      <Modal.Body
        className="Story-Modal"
        style={{ background: " linear-gradient(#e66465, #9198e5)" }}
      >
        <div className="close">
          <img src={close} onClick={() => setShow(false)} />
        </div>
      
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
      </Modal.Body>
    </Modal>
  );
};
