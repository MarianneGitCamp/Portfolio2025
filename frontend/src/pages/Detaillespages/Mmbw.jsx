import React, { useEffect } from "react";
import Detail from "../../components/Detail";
import test from "../../images/test.png";
import mvgbw from "../../images/mvgbw.png";
import sbbw from "../../images/sbbw.png";

const MmDetail = () => {
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

  const text = `Le projet consiste à planifier la création d’un site web permettant aux restaurateurs de concevoir et personnaliser leurs menus en ligne. La planification inclut l’élaboration d’un document de spécifications techniques présentant les technologies choisies et justifiant ces choix. Un tableau Kanban complet a été réalisé sur Notion, répertoriant toutes les tâches selon quatre catégories : à faire, en cours, à tester et terminé. Chaque tâche est attribuée à un profil spécifique (développeur front-end ou back-end), avec une estimation en story points, une description des critères de succès et des spécifications techniques associées. Enfin, une veille technologique a été mise en place sur Feedly pour suivre les tendances du développement web et les technologies pertinentes pour le projet.`;

  return (
    <div>
      <Detail
        title="Planification du projet “Menu Maker” pour restaurateurs"
        mainImage={test}
        text={text}
        images={detailImages}
      />
    </div>
  );
};

export default MmDetail;