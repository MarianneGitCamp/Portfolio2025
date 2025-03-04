import React from "react";
import Navigation from "../components/Navigation";
import gifImage from "../images/MoiGlitch.gif"; 

const Moi = () => {
  return (
    <div className= "h-screen">
      <header id="navigation-header">
        <Navigation />
      </header>
      <main className="moi-container">
        <h1 className="page-title-moi">Mavca (Marianne) </h1> 
        <div className="gif-container">
          <img src={gifImage} alt="GIF" className="gif-image" />
        </div>
        <h1 className="title">À propos de moi</h1>
        <div className="text-blocks">
          <div className="text-block">
            <span className="bullet-point">•</span>
            <p> J'aime l'informatique, la culture alternative et la nature. </p>
          </div>
          <div className="text-block">
            <span className="bullet-point">•</span>
            <p> Encore étudiante, je poursuis un Bac+4 orienté informatique en septembre 2025. </p>
          </div>
          <div className="text-block">
            <span className="bullet-point">•</span>
            <p>Je réalise les sites gratuitement afin de me constituer un premier book de projets, puis les tarifs augmenteront progressivement. j'en profite pour remettre mon mail pour tout projet : <a href="mailto:Mavcaweb@gmail.com">Mavcaweb@gmail.com</a> </p>
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