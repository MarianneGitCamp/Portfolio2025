import React from "react";
import "../index.css";

const Detail = ({ title, mainImage, text, images }) => {
  return (
    <div className="detail-container">
        <h1 className="text-center text-4xl mb-4">{title}</h1>
      <div className="main-image-wrapper">
        <div className="main-image " style={{ backgroundImage: `url(${mainImage})` }}></div>
      </div>
      <div className="text-wrapper ">
        <p className="text-m text-left leading-9">{text}</p>
      </div>
      <div className="images-wrapper">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;