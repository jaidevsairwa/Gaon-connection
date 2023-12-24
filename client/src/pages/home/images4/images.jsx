import React from 'react';
import './images.css';
import image from '../../../assets/imageBox.png'

const ImageGrid = () => {
  return (
    <div className="image-grid">
      <div className='image-wrap' >
        <div className="image-wrapper">
          <img src={image} alt="Image 1" className="large-image" style={{ marginRight: "15px" }} />
          <div className="image-text">
            <h2 className="card-heading">
              The solar buzz in Bundelkhand is helping.
            </h2>
            <p>Filler text is text that shares some charcteristics of a real otherwise generated. It may be used ...{" "} <span style={{ color: "#0CC5FF" }}> Read More</span></p>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={image} alt="Image 2" className="small-image" style={{ marginLeft: "15px" }} />
          <div className="image-text">
            <h2 className="card-heading">
              The solar buzz in Bundelkhand is helping.
            </h2>
            <p>Filler text is text that shares some charcteristics of a real otherwise generated. It may be used ...{" "}<span style={{ color: "#0CC5FF" }}> Read More</span></p>

          </div>
        </div>
      </div>
      <div className='image-wrap'  >
        <div className="image-wrapper">
          <img src={image} alt="Image 3" className="small-image" style={{ marginRight: "15px" }} />
          <div className="image-text">
            <h2 className="card-heading">
              The solar buzz in Bundelkhand is helping.
            </h2>
            <p>Filler text is text that shares some charcteristics of a real otherwise generated. It may be used ...{" "} <span style={{ color: "#0CC5FF" }}> Read More</span></p>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={image} alt="Image 4" className="large-image" style={{ marginLeft: "15px" }} />
          <div className="image-text">
            <h2 className="card-heading">
              The solar buzz in Bundelkhand is helping.
            </h2>
            <p>Filler text is text that shares some charcteristics of a real otherwise generated. It may be used ...{" "}<span style={{ color: "#0CC5FF" }}> Read More</span> </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
