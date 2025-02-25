import React, { useEffect } from "react";
import Detail from "../../components/Detail";
import test from "../../images/test.png";
import mvgbw from "../../images/mvgbw.png";
import sbbw from "../../images/sbbw.png";

const BbvDetail = () => {
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

  const text = `Réalisation du site Booki pour permettre aux usagers de trouver des hébergements et des activités dans la ville de leur choix Utilisation de HTML et CSS pour le front-end Intégration des maquettes desktop tablette et mobile fournies via Figma Collaboration avec Sarah la CTO et Loïc l’UI designer Respect des spécifications et contraintes techniques détaillées dans la note de synthèse Compléter et améliorer la base de code HTML et CSS existante Utilisation de Git pour versionner le projet tout au long du développement Objectif créer une interface utilisateur fluide et responsive pour trouver des hébergements et des activités Livraison du projet complet via GitHub à la fin du développement`;

  return (
    <div>
      <Detail
        title="intégration du site Booki "
        mainImage={test}
        text={text}
        images={detailImages}
      />
    </div>
  );
};

export default BbvDetail;