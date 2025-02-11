import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)  // let count = 0

  const [calcul, setCalcul] = useState('0')


  function calculate() {
    // On utilise la fonction eval pour calculer le résultat
    setCalcul(eval(calcul).toString());
  }

  function resetCalcul() {
    // On remet la valeur à 0
    setCalcul("0");
  }

  function deleteChar() {
    // Si la longueur de la chaîne est égale à 1, on remet la valeur à 0
    if (calcul.length == 1) {
      setCalcul("0");
  } else {
    setCalcul(calcul.slice(0, -1));
  }
  }

  function addChar(character) {
    // Si le dernier caractère est un opérateur et que le caractère à ajouter est un opérateur
    // On ne fait rien 
    if ((calcul.slice(-1) == "+" ||
      calcul.slice(-1) == "-" ||
      calcul.slice(-1) == "*" ||
      calcul.slice(-1) == "/")
      && (character == "+" ||
        character == "-" ||
        character == "*" ||
        character == "/")
    ) {
      return;
    }

    if (calcul == "0") {
      setCalcul(character);
    } else {
      setCalcul(calcul + character);
    }
  }

  return (
    <>
      <div id='container'>
        <div id="calculatrice">
          <div id="titreBarre">
            <h1>Calculatrice</h1>
            <input id="result" type="text" disabled value={calcul} />
          </div>
          <div className="clavier">
            <button className="btnbleu character" onClick={
              () => { addChar('7') }}>7</button>
            <button className="btnbleu character" onClick={
              () => { addChar('8') }}>8</button>
            <button className="btnbleu character" onClick={
              () => { addChar('9') }}>9</button>
            <button className="btnvert  operator character" onClick={
              () => { addChar('+') }}>+</button>
            <button className="btnbleu character" onClick={
              () => { addChar('4') }}>4</button>
            <button className="btnbleu character" onClick={
              () => { addChar('5') }}>5</button>
            <button className="btnbleu character" onClick={
              () => { addChar('6') }}>6</button>
            <button className="btnvert  operator character" onClick={
              () => { addChar('-') }}>-</button>
            <button className="btnbleu character" onClick={
              () => { addChar('1') }}>1</button>
            <button className="btnbleu character" onClick={
              () => { addChar('2') }}>2</button>
            <button className="btnbleu character" onClick={
              () => { addChar('3') }}>3</button>
            <button className="btnvert  operator character" onClick={
              () => { addChar('*') }}>*</button>
            <button className="btnbleu character" onClick={
              () => { addChar('0') }}>0</button>
            <button className="btnbleu character" onClick={
              () => { addChar('.') }}>.</button>
            <button className="btnrouge" id="reset"
              onClick={resetCalcul}>C</button>
            <button className="btnvert operator character" onClick={
              () => { addChar('/') }}>/</button>
            <button className="btn operator" id="equal"
              onClick={calculate}>=</button>

            <button className="btndelete rouge" id="reset"
              onClick={deleteChar}>DELETE</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
