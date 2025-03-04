import React, { useRef } from "react";
import "../index.css";
import test from "../images/test.png";
import mvgbw from "../images/mvgbw.png";
import sbbw from "../images/sbbw.png";
import bbw from "../images/bbw.png";
import opbw from "../images/opbw.png";
import mmbw from "../images/mmbw.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import emailjs from "emailjs-com";

const Collection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fv8j93q', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="h-screen m-1 pt-3">
        <header>
          <Navigation />
          <div className="grid h-[25vh] grid-cols-1 md:grid-cols-3 gap-[3rem] p-[2rem] px-12">
            <div className="fluo bg-black border-red-500 p-4 block">
              <p className="text-white break-words">tout à gauche wokistan</p>
            </div>
            <div className="fluo bg-black border-red-500 p-4 block">
              <p className="text-white break-words">macron</p>
            </div>
            <div className="fluo bg-black border-red-500 p-4 block">
              <p className="text-white break-words">
                Colonne droite je suis jigsaw holalal hypnose et je fais du
                tricycle je deviens fou loco hahahha loco
              </p>
            </div>
          </div>
        </header>
        <main id="main">
          <div className="grid-container justify-items-center gap-8">
            <Link to="/Detaillespages/test" className="link-unstyled">
              <div className="container mx-auto">
                <div
                  className="rectangle-vert"
                  style={{
                    backgroundImage: `url(${test})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="overlay">
                  <p>Test 1</p>
                </div>
              </div>
            </Link>
            <Link to="/Detaillespages/mvg" className="link-unstyled">
              <div className="container mx-auto">
                <div
                  className="rectangle-vert"
                  style={{
                    backgroundImage: `url(${mvgbw})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="overlay">
                  <p>
                    Test 2 pb d'affichage dans les pages après ouvertures à
                    reprendre{" "}
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/Detaillespages/sbbw" className="link-unstyled">
              <div className="container mx-auto">
                <div
                  className="rectangle-vert"
                  style={{
                    backgroundImage: `url(${sbbw})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="overlay">
                  <p>Test 3</p>
                </div>
              </div>
            </Link>
            <Link to="/Detaillespages/bbw" className="link-unstyled">
              <div className="container mx-auto">
                <div
                  className="rectangle-vert"
                  style={{
                    backgroundImage: `url(${bbw})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="overlay">
                  <p>Test 4</p>
                </div>
              </div>
            </Link>
            <Link to="/Detaillespages/opbw" className="link-unstyled">
              <div className="container mx-auto">
                <div
                  className="rectangle-vert"
                  style={{
                    backgroundImage: `url(${opbw})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="overlay">
                  <p>Test 5</p>
                </div>
              </div>
            </Link>
            <Link to="/Detaillespages/mmbw" className="link-unstyled">
              <div className="container mx-auto">
                <div
                  className="rectangle-vert"
                  style={{
                    backgroundImage: `url(${mmbw})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="overlay">
                  <p>Test 6</p>
                </div>
              </div>
            </Link>
          </div>
          <h2 className="form-title">Contact :  </h2> {/* Nouveau titre */}
          <form ref={form} onSubmit={sendEmail} className="form-container">
            <label htmlFor="name">Nom ou Prénom</label>
            <input type="text" id="name" name="user_name" required />

            <label htmlFor="email">Votre mail</label>
            <input type="email" id="email" name="user_email" required />

            <label htmlFor="description">Description du projet</label>
            <textarea id="description" name="project_description" placeholder="Refonte, création de site, optimisation, maintenance, amélioration du référencement (SEO), corrections, mises à jour, ajout de fonctionnalités, design, performances, accessibilité, migration… Besoin d’un service spécifique ?" required></textarea>

            <label htmlFor="inspiration">Fichiers d'inspiration (optionnel)</label>
            <input type="file" id="inspiration" name="inspiration_files" multiple accept="image/*" />

            <button type="submit">Envoyer</button>
          </form>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Collection;
