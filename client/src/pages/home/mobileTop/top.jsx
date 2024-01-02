import React from "react";
import "./top.css";
import { Link, useNavigate } from "react-router-dom";

const TopImages = ({ gaonImage, radioImage, podImage }) => {
  const base = `${import.meta.env.VITE_BASE_URL}`;

  const images = [
    {
      id: 1,
      title: "गाँव रेडियो",
      imageUrl: base + gaonImage,
      route: "/radio",
      text_route: "/gaon-audio",
    },
    {
      id: 2,
      title: "गाँव टीवी",
      imageUrl: base + radioImage,
      route: "/gaon-tv",
      text_route: "/gaon-tv",
    },
    {
      id: 3,
      title: "गाँव पॉडकास्ट",
      imageUrl: base + podImage,
      route: "/podcast",
      text_route: "/gaon-broadcast",
    },
  ];
  const navigae = useNavigate();

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <Link to={image.route}>
            <img src={image.imageUrl} alt={image.title} />
          </Link>
          <p onClick={() => navigae(`${image.text_route}`)}>{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default TopImages;
