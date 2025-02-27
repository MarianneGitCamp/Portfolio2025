import React from "react";
import Navigation from "../components/Navigation";
import gifImage from "../images/MoiGlitch.gif"; 

const Moi = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main className="moi-container">
        <div className="gif-container">
          <img src={gifImage} alt="GIF" className="gif-image" />
        </div>
        <h1 className="title">À propos de moi</h1>
        <div className="text-blocks">
          <div className="text-block">
            <span className="bullet-point">•</span>
            <p>Texte 1</p>
          </div>
          <div className="text-block">
            <span className="bullet-point">•</span>
            <p>Texte 2</p>
          </div>
          <div className="text-block">
            <span className="bullet-point">•</span>
            <p>Texte 3</p>
          </div>
        </div>
        <h2 className="spotify-title">Musique que j'aime :</h2>
        <div className="spotify-container">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/2mVUE1N5lo7ABEqBSF9gmq?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify"
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default Moi;