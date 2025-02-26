import React, { useEffect } from "react";
import Detail from "../../components/Detail";
import mm1 from "../../images/Mm1.png";
import mm2 from "../../images/Mm2.png";
import mm3 from "../../images/Mm3.png";
import mm4 from "../../images/Mm4.png";

const MmDetail = () => {
  useEffect(() => {
    document.body.classList.add('detail-page');
    return () => {
      document.body.classList.remove('detail-page');
    };
  }, []);

  const detailImages = [
    { src: mm1, alt: "Test Image 1" },
    { src: mm2, alt: "Test Image 2" },
    { src: mm3, alt: "Test Image 3" },
  ];

  const text = `Le projet consiste à planifier la création d’un site web permettant aux restaurateurs de concevoir et personnaliser leurs menus en ligne. La planification inclut l’élaboration d’un document de spécifications techniques présentant les technologies choisies et justifiant ces choix. Un tableau Kanban complet a été réalisé sur Notion, répertoriant toutes les tâches selon quatre catégories : à faire, en cours, à tester et terminé. Chaque tâche est attribuée à un profil spécifique (développeur front-end ou back-end), avec une estimation en story points, une description des critères de succès et des spécifications techniques associées. Enfin, une veille technologique a été mise en place sur Feedly pour suivre les tendances du développement web et les technologies pertinentes pour le projet.`;

  return (
    <div>
      <Detail
        title="Planification du projet “Menu Maker” pour restaurateurs"
        mainImage={mm4}
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

export default MmDetail;