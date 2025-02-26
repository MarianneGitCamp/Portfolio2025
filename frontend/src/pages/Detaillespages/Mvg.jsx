import React, { useEffect } from "react";
import Detail from "../../components/Detail";
import mv1 from "../../images/Mv1.png";
import mv2 from "../../images/Mv2.png";
import mv3 from "../../images/Mv3.png";
import mv4 from "../../images/Mv4.png";

const MvgDetail = () => {
  useEffect(() => {
    document.body.classList.add('detail-page');
    return () => {
      document.body.classList.remove('detail-page');
    };
  }, []);

  const detailImages = [
    { src: mv2, alt: "Test Image 1" },
    { src: mv3, alt: "Test Image 2" },
    { src: mv4, alt: "Test Image 3" },
  ];

  const text = `Création de l’API REST pour le site Mon Vieux Grimoire, permettant la gestion des livres, utilisateurs et notes. Mise en place de Node.js avec Express pour un serveur performant et sécurisé.

Connexion à une base de données MongoDB pour stocker les informations des livres et utilisateurs. Sécurisation des routes avec JWT pour l’authentification.

Implémentation de multer pour la gestion des images, avec compression via sharp afin de respecter les bonnes pratiques du Green Code.

Réalisation des tests unitaires avec Jest pour assurer la robustesse de l’API. Documentation complète et déploiement pour intégration avec le front-end en React.`;

  return (
    <div>
      <Detail
        title="Interface de gestion pour Mon Vieux Grimoire"
        mainImage={mv1}
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

export default MvgDetail;