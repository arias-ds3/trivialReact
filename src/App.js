import { useState } from 'react';
import './App.css';


let App = () => {
  let [points, setPoints] = useState(0)
  let [questions, setQuestions] = useState([
    {
      text: "¿Cual es la capital de Argentina?",
      options: ["Buenos Aires", "Santa Fe", "Cordoba"],
      anwser: 0
    },
    {
      text: "¿Cual es la capital de España?",
      options: ["Paris", "Madrid", "Berlin"],
      anwser: 1
    },
    {
      text: "¿Cual es la capital de Alemania?",
      options: ["Madrid", "Paris", "Berlin"],
      anwser: 2
    }
  ])

  return (
    <div className="App">
     <h1>Trivial</h1>
    </div>
  );
}

export default App;
