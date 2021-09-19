import "./App.css";
import Clock from "./components/Clock";
import Fire from "./components/Fire";
import Scale from "./Scale.js";

function App() {
  return (
    <div className="App">
      <h1>Receptes</h1>
      <h2>Tejbegríz</h2>
      <div>
        <div>
          <img src="" alt="Tejbegríz" />
        </div>
        <div>
          <div>
            <Clock />
            <p>15 min</p>
          </div>
          <Scale
            title="Difficulty "
            rating={2}
            max={5}
            fullIcon={() => <Fire isFull />}
            emptyIcon={() => <Fire isFull={false} />}
          />
        </div>
      </div>

      <div>
        <div>
          <h3>Hozzávalók 3 főre</h3>
          <ul>
            <li>1l tej</li>
            <li>120g búzadara</li>
            <li>50g cukor</li>
            <li>50g vaníliás cukor</li>
            <li>25g vaj</li>
            <li>cukor, kakaópor, fahéj</li>
          </ul>
        </div>
        <div>
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
    </div>
  );
}

export default App;
