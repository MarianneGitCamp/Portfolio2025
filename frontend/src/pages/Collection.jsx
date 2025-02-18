import React from "react";
import"../index.css";
import test from "../images/test.png";
const Collection = () => {
  return (
    <>
      <div className="h-screen m-1 pt-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem] p-[2rem] ">
          {/* Colonne gauche qui prend 2/3 de la grille */}
          <div className="fluo md:col-span-2 flex justify-around gap-10 bg-gray-700 border-red-500 p-[2rem]">
            {/* Div à gauche */}
            <div className="flex-auto border-red-500 p-4">
              <p className="text-white">Section gauche</p>
            </div>
            {/* Div à droite */}
            <div className="flex-auto border-red-500 p-4">
              <p className="text-white">Section droite</p>
            </div>
          </div>
  
          {/* Colonne droite qui prend 1/3 de la grille */}
          <div className="fluo bg-black border-red-500 p-4 block">
            <p className="text-white break-words">
              Colonne droite je suis jigsaw holalal hypnose et je fais du tricycle je deviens fou loco hahahha loco
            </p>
          </div>
        </div>
        <div className="jsp ">
        <div class="grid-container">

    <div class="container">
      <div class="rectangle-vert" style={{backgroundImage:`url(${test})`,backgroundSize: 'cover' }}></div> {/** la j'appel l'image por remplacer e rectangle vert de base et j'utilise la fonctionnalité cover pour pas que l'image se répéte ( elle est trop petite debase ) il faut faire ça pou tout les projet mtn  */}
      <div class="overlay">
        <p>Test 1</p>
      </div>
    </div>
    

    <div class="container">
      <div class="rectangle-vert"></div>
      <div class="overlay">
        <p>Test 2</p>
      </div>
    </div>


    <div class="container">
      <div class="rectangle-vert"></div>
      <div class="overlay">
        <p>Test 3</p>
      </div>
    </div>

    <div class="container">
      <div class="rectangle-vert"></div>
      <div class="overlay">
        <p>Test 4</p>
      </div>
    </div>

   
    <div class="container">
      <div class="rectangle-vert"></div>
      <div class="overlay">
        <p>Test 5</p>
      </div>
    </div>

    <div class="container">
      <div class="rectangle-vert"></div>
      <div class="overlay">
        <p>Test 6</p>
      </div>
    </div>
  </div>
      </div>
      </div>
  
      
    </>
  );
}

export default Collection;