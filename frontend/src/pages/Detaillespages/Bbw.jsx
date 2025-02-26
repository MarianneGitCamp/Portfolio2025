import React, { useEffect } from "react";
import Detail from "../../components/Detail";
import b1 from "../../images/B1.png";
import b2 from "../../images/B2.png";
import b3 from "../../images/B3.png";
import b4 from "../../images/B4.png";

const BbvDetail = () => {
  useEffect(() => {
    document.body.classList.add('detail-page');
    return () => {
      document.body.classList.remove('detail-page');
    };
  }, []);

  const detailImages = [
    { src: b2, alt: "Test Image 1" },
    { src: b3, alt: "Test Image 2" },
    { src: b4, alt: "Test Image 3" },
  ];

  const text = `Réalisation du site Booki pour permettre aux usagers de trouver des hébergements et des activités dans la ville de leur choix Utilisation de HTML et CSS pour le front-end Intégration des maquettes desktop tablette et mobile fournies via Figma Collaboration avec Sarah la CTO et Loïc l’UI designer Respect des spécifications et contraintes techniques détaillées dans la note de synthèse Compléter et améliorer la base de code HTML et CSS existante Utilisation de Git pour versionner le projet tout au long du développement Objectif créer une interface utilisateur fluide et responsive pour trouver des hébergements et des activités Livraison du projet complet via GitHub à la fin du développement`;

  return (
    <div>
      <Detail
        title="intégration du site Booki "
        mainImage={b1}
        text={text}
        images={detailImages}
      />
    </div>
  );
};

export default BbvDetail;