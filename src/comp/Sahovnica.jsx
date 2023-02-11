// const { , useEffect } = React;
import { useState, useEffect } from "react";

function Sahovnica() {
  const [columns, setColumns] = useState(8);
  const [rows, setRows] = useState(8);
  const [squares, setSquares] = useState([]);
  const [squaresColor, setSquaresColor] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  // get total squares
  useEffect(() => {
    setSquares(Array(columns * rows).fill(null));
  }, [columns, rows]);

  // get black/white squares styling
  useEffect(() => {
    setSquaresColor(generateSquareColorPatern());
  }, [columns]);

  // reset isCopied after 3s
  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 3000);
    }
  }, [isCopied]);

  const generateSquareColorPatern = () => {
    let squaresColorPattern = "";
    const columnsX2 = columns * 2;
    const squaresNthChildColor = (offset) =>
      `.square:nth-child(${columnsX2}n + ${offset})`;

    for (let i = 1; i < columnsX2; i += 2) {
      if (i > columns && i - 2 < columns) {
        i++;
      }
      squaresColorPattern += squaresNthChildColor(i) + ",\n  ";
    }

    squaresColorPattern +=
      squaresNthChildColor(columns % 2 === 0 ? columnsX2 : columnsX2 + 1) +
      " {\n    background: white;\n  }";

    return squaresColorPattern;
  };

  const copyBoardCode = () => {
    navigator.clipboard.writeText(`<div class="board">
  ${squares.map((square) => '<div class="square"></div>').join("\n  ")}
</div>

<style>
  .board {
    display: grid;
    grid-template-columns: repeat(${columns}, 64px);
  }

  .square {
    width: 64px;
    height: 64px;
    background: red;
  }

  ${squaresColor}
</style>`);
  };

  return (
    <div className="flex flex-col items-center py-12">
      <h1 className="text-4xl mb-8 font-bold">Variant Chessboard Generator</h1>
      <div className="flex mb-6 items-center">
        <input
          className="rounded py-2 px-4 text-center w-20"
          type="number"
          min="1"
          value={columns}
          onChange={(event) => setColumns(event.target.value)}
        />
        <div className="text-2xl font-bold px-2">X</div>
        <input
          className="rounded py-2 px-4 text-center w-20"
          type="number"
          min="1"
          value={rows}
          onChange={(event) => setRows(event.target.value)}
        />
      </div>
      <div
        className="board grid"
        style={{ gridTemplateColumns: `repeat(${columns}, 50px)` }}
      >
        {squares.map((square, index) => (
          <div key={index} className="square bg-black h-14 w-14"></div>
        ))}
      </div>
      <button
        className="bg-green-400 hover:bg-green-300 text-white py-2 px-4 rounded mt-6"
        onClick={() => {
          copyBoardCode();
          setIsCopied(true);
        }}
      >
        {isCopied ? "Copied!" : "Copy board code"}
      </button>
      <style>{squaresColor}</style>
    </div>
  );
}

export default Sahovnica;
