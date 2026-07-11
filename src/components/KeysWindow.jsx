import React from "react";

const KeysWindow = ({ handleButton }) => {

  const buttons = [
    '(', ')', 'mc', 'm+', 'm-', 'mr', 'C', '+/-', '%', '/',
    '2nd', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '7', '8', '9', '*',
    '1/x', '²√x', '³√x', 'ʸ√x', 'ln', 'log₁₀', '4', '5', '6', '-',
    'x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+',
    'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '='
  ];

  return (
    <div className="keysWindow">
      <div className="keys_basic">
        {buttons.map((item, index) => (
          <button
            key={index}
            className={`${/^[0-9]$/.test(item) || item === "." ? "number" : ""} 
            ${item === "=" || item === "+" || item === "-" || item === "*" || item === "/"  ?  "yellow" : ""} 
            ${item === "0" ? "zero" : ""}
            `}
            onClick={() => handleButton(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeysWindow;