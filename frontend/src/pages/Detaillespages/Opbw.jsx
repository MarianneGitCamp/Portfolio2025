import React, { useEffect } from "react";
import Detail from "../../components/Detail";
import test from "../../images/test.png";
import mvgbw from "../../images/mvgbw.png";
import sbbw from "../../images/sbbw.png";

const OpDetail = () => {
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

  const text = `Optimisation du chargement du site en compressant les images et en réorganisant le code pour une meilleure accessibilité. Implémentation du référencement local avec Schema.org et ajout de métas pour les réseaux sociaux, renforçant la visibilité en ligne. Correction des bugs de navigation dans la galerie et du filtre de sélection. Le score Lighthouse passe de 50/100 à 99/100, améliorant considérablement le référencement, la rapidité et la qualité globale du site.`;

  return (
    <div>
      <Detail
        title="Amélioration des performances, référencement et correction de bugs"
        mainImage={test}
        text={text}
        images={detailImages}
      />
    </div>
  );
};

export default OpDetail;