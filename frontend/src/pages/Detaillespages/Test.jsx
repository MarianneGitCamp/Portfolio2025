import React, { useEffect } from "react";
import Detail from "../../components/Detail";
import kasa1 from "../../images/kasa1.png";
import kasa2 from "../../images/kasa2.png";
import kasa3 from "../../images/kasa3.png";

const TestDetail = () => {
  useEffect(() => {
    document.body.classList.add('detail-page');
    return () => {
      document.body.classList.remove('detail-page');
    };
  }, []);

  const detailImages = [
    { src: kasa1, alt: "image de la page d'acceuil de kasa avec plusieurs encart qui montre différents logement" },
    { src: kasa2, alt: "details d'un logement specifique qui montre l'organisation des details avec ue gallery avec des fleches des encarts pour les équipements etc.." },
    { src: kasa3, alt: "page à propos qui répond à plusieurs question comme le respect des normes ou encore la sécurité " },
  ];

  const text = `Refonte complète du site web de Kasa, entreprise de location d’appartements entre particuliers, avec des technologies modernes pour améliorer la rapidité et la navigation. Utilisation de React pour créer une application web fluide et responsive, adaptée à tous les écrans.
  Développement d’une galerie photo interactive avec défilement en boucle et gestion automatique des images. Mise en place de menus déroulants animés pour une expérience utilisateur plus dynamique. Intégration du design Figma en respectant les maquettes et animations prévues.
  Utilisation de Sass pour styliser le site avec un code plus propre et facile à modifier. Gestion des données via un fichier JSON en attendant la connexion au serveur. Le projet suit des normes de qualité pour garantir un site rapide, moderne et accessible.`;

  return (
    <div>
      <Detail
        title="Refonte du site web de Kasa"
        mainImage={kasa1}
        text={text}
        images={detailImages}
        mainImageStyle={{
          backgroundSize: 'cover', // Ajustez cette propriété selon vos besoins
          backgroundPosition: 'top', // Ajustez cette propriété selon vos besoins
          backgroundRepeat: 'no-repeat', // Ajustez cette propriété selon vos besoins
        }}
      />
    </div>
  );
};

export default TestDetail;