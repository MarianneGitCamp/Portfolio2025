import React from "react";
import Navigation from "../components/Navigation";
import gifImage from "../images/MoiGlitch.gif"; 
import icone from "../images/icone.png";
import { Link } from "react-router-dom";
const Moi = () => {
  return (
    <div className= "h-screen">
      <header className = "pb-1 pt-16 pr-10 pl-10" id="navigation-header">
        <Navigation />
        <div className="nav-logo">
          <Link to="/Collection">
            <img src={icone} alt="Logo" className="logo" />
          </Link>
        </div>
      </header>
      <main className="moi-container p-5">
        <h1 className="page-title-moi pb-10">Mavca (Marianne) </h1> 
        <div className="gif-container pb-10">
          <img src={gifImage} alt="GIF" className="gif-image" />
        </div>
        <h1 className="title pb-10">À propos de moi</h1>
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
            <p>
              Je suis en recherche d'une <span style={{ color: '#1aeb32' }}>alternance</span> dans le cadre de ma formation conceptrice réalisatrice d'application pour 2025.
            </p>
           
          </div>
          <div className="text-block">
            <span className="bullet-point">•</span>
            <p>
              Je réalise les sites gratuitement afin de me constituer un premier book de projets, puis les tarifs augmenteront progressivement. Mon mail pour tout projet : <a href="mailto:Mavcaweb@gmail.com" style={{ color: '#1aeb32' }}>Mavcaweb@gmail.com</a>.
            </p>
          </div>
        </div>
        <h2 className="spotify-title pb-10 pt-10">Musique que j'aime :</h2>
        <div className="spotify-container">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/2mVUE1N5lo7ABEqBSF9gmq?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="eager"
            title="Spotify"
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default Moi;