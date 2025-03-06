import React, { useState } from "react";
import "../index.css";
import Modal from "./Modal";

const Detail = ({ title, mainImage, text, images, mainImageStyle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="detail-container">
      <h1 className="text-center text-4xl mb-4">{title}</h1>
      <div className="main-image-wrapper">
        <div
          className="main-image"
          style={{
            backgroundImage: `url(${mainImage})`,
            ...mainImageStyle, // Appliquer les styles personnalisés
          }}
        ></div>
      </div>
      <div className="text-wrapper">
        <p className="text-sm text-left leading-9">{text}</p>
      </div>
      <div className="images-wrapper">
        {images.map((image, index) => (
          <div key={index} className="image-item hover-zoom" onClick={() => openModal(image.src)}>
            <img src={image.src} alt={image.alt} className="hover-zoom-image" />
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
    </div>
  );
};

export default Detail;