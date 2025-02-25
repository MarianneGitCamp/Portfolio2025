import React, { useEffect } from "react";
import Detail from "../../components/Detail";
import test from "../../images/test.png";
import mvgbw from "../../images/mvgbw.png";
import sbbw from "../../images/sbbw.png";

const TestDetail = () => {
  useEffect(() => {
    document.body.classList.add('detail-page');
    return () => {
      document.body.classList.remove('detail-page');
    };
  }, []);

  const detailImages = [
    { src: mvgbw, alt: "Test Image 1" },
    { src: sbbw, alt: "Test Image 2" },
    { src: test, alt: "Test Image 3" },
  ];

  const text = `Refonte complète du site web de Kasa, entreprise de location d’appartements entre particuliers, avec des technologies modernes pour améliorer la rapidité et la navigation. Utilisation de React pour créer une application web fluide et responsive, adaptée à tous les écrans.
  Développement d’une galerie photo interactive avec défilement en boucle et gestion automatique des images. Mise en place de menus déroulants animés pour une expérience utilisateur plus dynamique. Intégration du design Figma en respectant les maquettes et animations prévues.
  Utilisation de Sass pour styliser le site avec un code plus propre et facile à modifier. Gestion des données via un fichier JSON en attendant la connexion au serveur. Le projet suit des normes de qualité pour garantir un site rapide, moderne et accessible.`;

  return (
    <div>
      <Detail
        title="Refonte du site web de Kasa"
        mainImage={test}
        text={text}
        images={detailImages}
      />
    </div>
  );
};

export default TestDetail;