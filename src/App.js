import "./App.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from "./component/navbar-landing";
import {Jumbotron1, Jumbotron2, Jumbotron3, Jumbotron4} from "./component/jumbotorn";

function App() {
  return (
    <div className="App">
      <CollapsibleExample></CollapsibleExample>
      <Jumbotron1></Jumbotron1>
      <Jumbotron2></Jumbotron2>
      <Jumbotron3></Jumbotron3>
      <Jumbotron4></Jumbotron4>
    </div>
  );
}

export default App;
