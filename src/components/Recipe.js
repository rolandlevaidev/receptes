import React from "react";
import Clock from "Clock";
import Fire from "Fire.js";
import Scale from "Scale.js";

function Recipe() {
  return (
    <>
      <h2>Tejbegríz</h2>
      <>
        <div>
          <>
            <div>
              <img src="" alt="Tejbegríz" />
            </div>
            <div className="recipeInfo">
              <div className="recipeInfo">
                <Clock />
                <p>15 min</p>
              </div>
              <Scale
                rating={2}
                max={5}
                fullIcon={() => <Fire isFull />}
                emptyIcon={() => <Fire isFull={false} />}
              />
            </div>
          </>
        </div>

        <div className="recipe">
          <div className="ingredients">
            <h3>Hozzávalók 3 főre</h3>
            <ul className="ingredients_list">
              <li>1l tej</li>
              <li>120g búzadara</li>
              <li>50g cukor</li>
              <li>50g vaníliás cukor</li>
              <li>25g vaj</li>
              <li>cukor, kakaópor, fahéj</li>
            </ul>
          </div>
          <div className="method">
            <h3>Elkészítés</h3>
            <p>
              A tejben elkeverjük a búzadarát, a cukrot és a vaníliás cukrot, és
              beledobjuk a vajat is, majd közepes lángon folyamatos keverés
              mellett besűrítjük. Ha lágyabban szeretjük, adjunk hozzá még egy
              kevés tejet, mert hűlés közben is sűrűsödik a tejbegríz. Mikor
              szépen megszívták magukat a daraszemek, kimerjük a tejbegrízt 3-4
              tálba, megszórjuk cukorral vagy porcukorral, és tetszőlegesen
              fahéjjal vagy kakaóporral.
            </p>
          </div>
        </div>
      </>
    </>
  );
}

export default Recipe;
