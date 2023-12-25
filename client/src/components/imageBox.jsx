import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const ImageBox = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <>
        {props?.main_heading && (
          <h1 className="imageBox_header">{props?.main_heading}</h1>
        )}
        <div className="container-box">
          {props?.image && (
            <div className="image-container-box">
              <img
                src={props?.image}
                alt="Description of the image"
                className="image-box"
              />
            </div>
          )}
          <div className="text-container-box">
            <div>
              {/* {props?.heading && <h1>{props?.heading}</h1>} */}
              {props?.title && <h2>{props?.title?.slice(0, 100)}...</h2>}
              <p>{props?.desc?.slice(0, 100)}</p>
              {props?.link && (
                <button
                  onClick={() => navigate(props.link)}
                  className="read-more-button-box"
                >
                  Read More
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ImageBox;
