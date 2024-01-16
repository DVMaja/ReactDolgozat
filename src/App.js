import './App.css';
import Cim from './komponensek/Cim.js';
import MondatKieg from './komponensek/MondatKieg.js';
import Model from './model/Model.js';
import { useState } from 'react';
import Pont from './komponensek/Pont.js';


const model = new Model();


function App() {

  //const aktualisElem = model.aktElem;
  const [aktualisElem, setAktElem] = useState(2);
  const mondatSzavai = model.aktMOndatOsszerak(aktualisElem);
  const joValasz = model.aktJoValasz(aktualisElem);


  function tovabb() {
    let valami = model.kovetkezoElem();
    //model.aktElem();
    //model.setAktElem();

    console.log(valami);
    console.log(model.aktMOndatOsszerak(aktualisElem));


  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dolgozat</h1>
      </header>
      <article>
        <Cim cim={model.cim} />
        <Pont pont={5} />
        <MondatKieg mondatLista={mondatSzavai} valasz={joValasz} tovabb={tovabb} />


        <button onClick={tovabb}>Következő</button>

      </article>
      <footer>Dreilinger Vanessza Maja</footer>
    </div>
  );
}

export default App;
