import React, { useState } from "react";
import "../App.css";
import { useAlert } from "react-alert";
import Squares from "./Squares.jsx";
const GamePage = () => {
  const alert = useAlert();
  const [val, setVal] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [6, 7, 8],
    [6, 4, 2],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 5],
  ];

  const handleOnClick = (index) => {
    const valCopy = Array.from(val);
    if (valCopy[index] !== null) return;
    valCopy[index] = currentTurn;
    setVal(valCopy);

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (
        valCopy[a] === valCopy[b] &&
        valCopy[b] === valCopy[c] &&
        valCopy[a] !== null
      ) {
        alert.success(`${currentTurn} won the Game.`);
        valCopy.fill(null);
        return;
      }
    }
    let count = 0;
    for (let i = 0; i < 9; i++) {
      if (valCopy[i] != null) count++;
    }
    if (count === 9) alert.error("No result");
    setCurrentTurn(currentTurn === "X" ? "0" : "X");
  };
  const resetFunction = () => {
    const valCopy = Array.from(val);
    for (let i = 0; i < 9; i++) {
      valCopy[i] = null;
    }
    setVal(valCopy);
  };

  return (
    <div className="page">
      <div className="board">
        <div
          className="game-board"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="row">
            <Squares onClick={() => handleOnClick(0)} value={val[0]} />
            <Squares onClick={() => handleOnClick(1)} value={val[1]} />
            <Squares onClick={() => handleOnClick(2)} value={val[2]} />
          </div>
          <div className="row">
            <Squares onClick={() => handleOnClick(3)} value={val[3]} />
            <Squares onClick={() => handleOnClick(4)} value={val[4]} />
            <Squares onClick={() => handleOnClick(5)} value={val[5]} />
          </div>
          <div className="row">
            <Squares onClick={() => handleOnClick(6)} value={val[6]} />
            <Squares onClick={() => handleOnClick(7)} value={val[7]} />
            <Squares onClick={() => handleOnClick(8)} value={val[8]} />
          </div>
        </div>
        <button
          onClick={resetFunction}
          data-aos="flip-up"
          data-aos-duration="1000"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default GamePage;
