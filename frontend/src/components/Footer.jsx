import React, { useEffect } from "react";
import TextScramble from "../scripts/TextScramble";

const Footer = () => {
  useEffect(() => {
    const phrases = [
      'Aurevoir',
      'Goodbye',
      'Ciao',
      'Adios',
      'Auf Wiedersehen',
      'Sayonara',
      'до побаченн',
    ]
    ;

    const el = document.querySelector('.text');
    if (el) {
      const fx = new TextScramble(el);

      let counter = 0;
      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 800);
        });
        counter = (counter + 1) % phrases.length;
      };

      next();
    }
  }, []);

  return (
    <footer>
      <div className="text"></div>
    </footer>
  );
};

export default Footer;