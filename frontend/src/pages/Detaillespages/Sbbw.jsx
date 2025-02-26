import React, { useEffect } from "react";
import Detail from "../../components/Detail";
import sb1 from "../../images/Sb1.png";
import sb2 from "../../images/Sb2.png";
import sb3 from "../../images/Sb3.png";
import sb4 from "../../images/Sb4.png";

const SbDetails = () => {
  useEffect(() => {
    document.body.classList.add('detail-page');
    return () => {
      document.body.classList.remove('detail-page');
    };
  }, []);

  const detailImages = [
    { src: sb2, alt: "Test Image 1" },
    { src: sb3, alt: "Test Image 2" },
    { src: sb4, alt: "Test Image 3" },
  ];

  const text = `Réalisation du site portfolio pour une architecte d'intérieur Utilisation de HTML CSS et JavaScript pour le front-end Intégration du design fourni via Figma Connexion avec le code back-end existant pour persister les données Création de la page de présentation des travaux de l'architecte Développement de la page de connexion de l'administrateur Implémentation d'une modale pour uploader de nouveaux médias Suivi des tâches via un Kanban Travail en équipe avec des développeurs back-end et des designers Objectif fournir une interface utilisateur fluide et responsive`;

  return (
    <div>
      <Detail
        title="Développement d'une Architecte d'intérieur"
        mainImage={sb1}
        text={text}
        images={detailImages}
        mainImageStyle={{
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  );
};

export default SbDetails;