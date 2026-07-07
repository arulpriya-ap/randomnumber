import "./index.css";
import { useState } from "react";

function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState("");
  const [numbers, setNumbers] = useState([]);

  function generateNumber() {
    const num = Math.floor(Math.random() * 100) + 1;

    setRandomNumber(num);
    setNumbers([...numbers, num]);
  }

  function reset() {
    setRandomNumber("");
    setNumbers([]);
  }

  return (
    <div className="container">
      <h1>Random Number Generator</h1>

      <div className="numberBox">
        {randomNumber ? (
          <h2>{randomNumber}</h2>
        ) : (
          <p>No number generated yet</p>
        )}
      </div>

      <button onClick={generateNumber}>
        Generate Number
      </button>

      <button onClick={reset}>
        Reset
      </button>

      <h3>Generated Numbers</h3>

      {numbers.length > 0 ? (
        <ul>
          {numbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      ) : (
        <p className="nonumbers">No numbers in the list.</p>
      )}
    </div>
  );
}

export default RandomNumber;