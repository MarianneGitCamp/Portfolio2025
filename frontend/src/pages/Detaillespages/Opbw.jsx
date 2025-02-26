import React, { useEffect } from "react";
import Detail from "../../components/Detail";
import op1 from "../../images/Op1.png";
import op2 from "../../images/Op2.png";
import op3 from "../../images/Op3.png";

const OpDetail = () => {
  useEffect(() => {
    document.body.classList.add('detail-page');
    return () => {
      document.body.classList.remove('detail-page');
    };
  }, []);

  const detailImages = [
    { src: op2, alt: "performance du site avant optimisation 65/100" },
    { src: op3, alt: "Test Image 2" },
    { src: op1, alt: "performance du site après optimisation 99/100" },
  ];

  const text = `Optimisation du chargement du site en compressant les images et en réorganisant le code pour une meilleure accessibilité. Implémentation du référencement local avec Schema.org et ajout de métas pour les réseaux sociaux, renforçant la visibilité en ligne. Correction des bugs de navigation dans la galerie et du filtre de sélection. Le score Lighthouse passe de 60/100 à 99/100, améliorant considérablement le référencement, la rapidité et la qualité globale du site.`;

  return (
    <div>
      <Detail
        title="Amélioration des performances, référencement et correction de bugs"
        mainImage={op1}
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

export default OpDetail;