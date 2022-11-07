import React, { useState } from "react";
import calculate from "../logic/calculate";

function Calculator() {
  const [object, setObject] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  function handleOperations(e) {
    const targetKey = e.target.innerHTML;
    setObject((object) => calculate(object, targetKey));
  }
  const { total, next } = object;
  return (
    <div className="math">
      <p id="paragraph">Let us do some math!</p>
      <div className="calculus">
        <div className="display">{next || total || 0}</div>
        <div className="All">
          <div className="row-1">
            <button type="button" onClick={handleOperations}>
              AC
            </button>
            <button type="button" onClick={handleOperations}>
              +/-
            </button>
            <button type="button" onClick={handleOperations}>
              %
            </button>
            <button type="button" className="orange" onClick={handleOperations}>
              ÷
            </button>
          </div>
          <div className="row-2">
            <button type="button" onClick={handleOperations}>
              7
            </button>
            <button type="button" onClick={handleOperations}>
              8
            </button>
            <button type="button" onClick={handleOperations}>
              9
            </button>
            <button type="button" className="orange" onClick={handleOperations}>
              x
            </button>
          </div>
          <div className="row-3">
            <button type="button" onClick={handleOperations}>
              4
            </button>
            <button type="button" onClick={handleOperations}>
              5
            </button>
            <button type="button" onClick={handleOperations}>
              6
            </button>
            <button type="button" className="orange" onClick={handleOperations}>
              -
            </button>
          </div>
          <div className="row-4">
            <button type="button" onClick={handleOperations}>
              1
            </button>
            <button type="button" onClick={handleOperations}>
              2
            </button>
            <button type="button" onClick={handleOperations}>
              3
            </button>
            <button type="button" className="orange" onClick={handleOperations}>
              +
            </button>
          </div>
          <div className="point">
            <button type="button" className="zero" onClick={handleOperations}>
              0
            </button>
            <button type="button" className="dot" onClick={handleOperations}>
              .
            </button>
            <button type="button" className="orange" onClick={handleOperations}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
