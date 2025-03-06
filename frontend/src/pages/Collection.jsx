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
      <div className="h-screen m-1 pt-3 gap-10">
        <header>
          <Navigation />
          <div className="nav-logo">
            <Link to="/Collection">
              <img src="/icone.png" alt="Logo" className="logo" />
            </Link>
          </div>
          <div className="grid h-[25vh] grid-cols-1 md:grid-cols-3 gap-[3rem] p-[2rem] px-12">
            <div className="fluo bg-[rgb(24,24,30)] border-red-500 p-4 block">
              <h2 className="text-center text-white pb-6">Services</h2>
              <p className="text-white break-words text-xs text-left leading-8">
                <strong>FRONT END:</strong><br />
                Création d’interfaces réactives. (Ex : Site e-commerce adapté à mobile et desktop.)<br />
                <strong>BACK END:</strong><br />
                Gestion des données et APIs. (Ex : API pour l'inscription des utilisateurs.)<br />
                <strong>PERFORMANCE ET SEO:</strong><br />
                Optimisation du temps de chargement et du référencement naturel. (Ex : Amélioration du score Google PageSpeed.)<br />
                <strong>ACCESSIBILITÉ:</strong><br />
                rendre le web utilisable par tous. (Ex : Mise en place de l'accessibilité pour les personnes malvoyantes.)<br />
              </p>
            </div>
            <div className="fluo bg-[rgb(24,24,30)] border-red-500 p-4 block">
              <h2 className="text-center text-white pb-32">Contact</h2>
              <p className="text-white break-words text-xs text-left leading-10">
                <strong>MAIL :</strong><br/>
                Mavcaweb@gmail.com<br />
                <strong>GITHUB:</strong><br />
                <a href="https://github.com/MarianneGitCamp" target="_blank" rel="noopener noreferrer">https://github.com/MarianneGitCamp</a>
              </p>
            </div>
            <div className="fluo bg-[rgb(24,24,30)] border-red-500 p-4 block">
              <h2 className="text-center text-white pb-6">Compétences Techniques</h2>
              <p className="text-white break-words text-xs text-left leading-10 ">
                JavaScript, React, React Router, HTML, CSS, Sass, Java SE, Jersey, Node.js, Express.js, PHP, Symfony, MongoDB, Mongoose, MySQL, Architecture MVC, API RESTful, VSCode, GitHub, GitLab, Figma, Lighthouse, Google Snippet, WAVE, Squoosh.
              </p>
            </div>
          </div>
        </header>
    
        <main id="main">*
              <h2 className="text-center text-white mt-8 text-2xl pb-20 pt-5">Projets : </h2>
          <div className="grid-container justify-items-center gap-[7rem]">
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
          <h2 className="form-title pb-10 pt-5">Contact :  </h2> 
          <form ref={form} onSubmit={sendEmail} className="form-container">
            <label htmlFor="name">Nom/Prénom</label>
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
