import React from "react";
import"../index.css";
import test from "../images/test.png";
import mvgbw from "../images/mvgbw.png";
import sbbw from"../images/sbbw.png";
import bbw from "../images/bbw.png";
import opbw from "../images/opbw.png";
import mmbw from "../images/mmbw.png";
import { Link } from "react-router-dom";
const Collection = () => {
  return (
    <>
      <div className="h-screen m-1 pt-3">
        <header>
        <div className="grid h-[25vh] grid-cols-1 md:grid-cols-3 gap-[3rem] p-[2rem] px-12 ">
          {/* Colonne gauche qui prend 2/3 de la grille */}
          <div className="fluo bg-black border-red-500 p-4 block">
            <p className="text-white break-words">
              tout à gauche wokistan
            </p>
          </div>
          <div className="fluo bg-black border-red-500 p-4 block">
            <p className="text-white break-words">
            macron 
            </p>
          </div>
  
          {/* Colonne droite qui prend 1/3 de la grille */}
          <div className="fluo bg-black border-red-500 p-4 block">
            <p className="text-white break-words">
              Colonne droite je suis jigsaw holalal hypnose et je fais du tricycle je deviens fou loco hahahha loco
            </p>
          </div>
        </div>
        </header>
  <body>
        <div class="grid-container justify-items-center gap-8">
<Link to ="/Detaillespages/test" className="link-unstyled">
    <div class="container mx-auto">
      <div class="rectangle-vert" style={{backgroundImage:`url(${test})`,backgroundSize: 'cover' }}></div> {/** la j'appel l'image por remplacer e rectangle vert de base et j'utilise la fonctionnalité cover pour pas que l'image se répéte ( elle est trop petite debase ) il faut faire ça pou tout les projet mtn  */}
      <div class="overlay">
        <p>Test 1</p>
      </div>
    </div>
    </Link>
    <Link to ="/Detaillespages/mvg" className="link-unstyled">
    <div class="container mx-auto">
      <div class="rectangle-vert"  style={{backgroundImage:`url(${mvgbw})`,backgroundSize: 'cover' }}></div>
      <div class="overlay">
        <p>Test 2 pb d'affichage dans les pages après ouvertures à reprendre </p>
      </div>
    </div>
  </Link>
  <Link to ="/Detaillespages/sbbw" className="link-unstyled">
    <div class="container mx-auto">
    <div class="rectangle-vert"  style={{backgroundImage:`url(${sbbw})`,backgroundSize: 'cover' }}></div>
      <div class="overlay">
        <p>Test 3</p>
      </div>
    </div>
</Link>
    <div class="container">
    <div class="rectangle-vert"  style={{backgroundImage:`url(${bbw})`,backgroundSize: 'cover' }}></div>
      <div class="overlay">
        <p>Test 4</p>
      </div>
    </div>

   
    <div class="container">
    <div class="rectangle-vert"  style={{backgroundImage:`url(${opbw})`,backgroundSize: 'cover' }}></div>
      <div class="overlay">
        <p>Test 5</p>
      </div>
    </div>

    <div class="container">
    <div class="rectangle-vert"  style={{backgroundImage:`url(${mmbw})`,backgroundSize: 'cover' }}></div>
      <div class="overlay">
        <p>Test 6</p>
      </div>
    </div>
  </div>
  </body>
  <footer></footer>
      </div>

  
      
    </>
  );
}

export default Collection;