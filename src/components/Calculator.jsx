import React, { useState } from "react";
import DisplayWindow from "./DisplayWindow";
import KeysWindow from "./KeysWindow";
import ConfettiExplosion from "react-confetti-explosion";


const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [displayEXP, setDisplayEXP] = useState("");
  const [result, setResult] = useState("0");
  const [showConfetti, setShowConfetti] = useState(false);

  const sciFunc = {
    "sin": "Math.sin",
    "cos": "Math.cos",
    "tan": "Math.tan",
    "ln": "Math.log",
    "log₁₀": "Math.log10",
    "xʸ" : "**",
    "π": "Math.PI",
    "e": "Math.E",
    "x²": "square",
    "x³": "cube",
    "eˣ": "Math.exp",
    "10ˣ": "tenExp",
    "x!": "factorial",
    "1/x": "reciprocal",
    "²√x": "squareRoot",
    "³√x": "cubeRoot",
    "ʸ√x": "root",
    "EE": "EE",
  };


  const square = (num) => num * num;
  const cube = (num) => num * num * num;
  const tenExp = (num) => Math.pow(10, num);
  const factorial = (num) => {
    let result = 1;
    for (let i = 2; i <= num; i++) result *= i;
    return result;
  };
  const reciprocal = (num) => 1 / num;
  const squareRoot = (num) => Math.sqrt(num);
  const cubeRoot = (num) => Math.cbrt(num);
  const root = (base, exponent) => Math.pow(base, 1 / exponent);

  const toggleConfetti = (exp) => {
    if (exp.includes("2") && exp.includes("6")) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000); // Hide confetti after 2 seconds
    }
  };

  // Evaluate expression and update result
  const calcResult = () => {
    try {
      let compute = eval(expression);
      compute = parseFloat(compute.toFixed(4));
      setResult(compute);
      toggleConfetti(expression); // Check for confetti trigger
    } catch (error) {
      setResult("An Error Occurred!");
    }
  };

  // Handle button click
  const handleButton = (value) => {
    if (value === "C") {
      setExpression("");
      setDisplayEXP("");
      setResult("0");

    } else if (sciFunc.hasOwnProperty(value)) {
      setDisplayEXP(displayEXP + value + "(");
      setExpression(expression + sciFunc[value] + "(");
    } else if (value === "+/-") {
      handleSignChange();
    } else if (value === "=") {
      calcResult();
    } else {
      setDisplayEXP(displayEXP + value);
      setExpression(expression + value);
    }
  };

  // Function to handle sign change
  const handleSignChange = () => {
    if (expression.startsWith("-")) {
      setExpression(expression.substring(1));
    } else {
      setExpression("-" + expression);
    }
  };
  // const calcResult = () => {
  //   if (expression.length !== 0) {
  //     try {
  //       let compute = eval(expression);
  //       compute = parseFloat(compute.toFixed(4));
  //       setResult(compute);
  //     } catch (error) {
  //       setResult("An Error Occurred!");
  //     }
  //   } else {
  //     setResult("An Error Occurred!");
  //   }
  // };

  // const handleButton = (value) => {
  //   if (value === "C") {
  //     setExpression("");
  //     setDisplayEXP("");
  //     setResult("0");
  //   } else if (sciFunc.hasOwnProperty(value)) {
  //     if (value === "xʸ" || value === "ʸ√x") {
  //       setDisplayEXP(displayEXP + value + "(");
  //       setExpression(expression + sciFunc[value] + "(");
  //     } else if (value === "x!") {
  //       const newExpression = displayEXP + "!";
  //       const result = factorial(parseFloat(expression));
  //       setDisplayEXP(newExpression);
  //       setExpression(result.toString());
  //       setResult(result.toString());
  //     } else {
  //       setDisplayEXP(displayEXP + value + "(");
  //       setExpression(expression + sciFunc[value] + "(");
  //     }
  //   } else if (value === '+/-') {
  //     setExpression(prev => (parseFloat(prev) * -1).toString());
  //     setDisplayEXP(prev => (parseFloat(prev) * -1).toString());
  //   } else if (value === "=") {
  //     calcResult();
  //   } else {
  //     setDisplayEXP(displayEXP + value);
  //     setExpression(expression + value);
  //   }
  // };


  return (
    
    <div className="calculator">
      {showConfetti && <ConfettiExplosion />}
    <div className="mac-dots">
          <div className="mac-dot red"></div>
          <div className="mac-dot orange"></div>
          <div className="mac-dot green"></div>
        </div>
        
      <div className="displayWindow">
     
      <p className="expression">{displayEXP}</p>
      <p className="result">{result}</p>
    </div>
      <KeysWindow handleButton={handleButton} />
    </div>
  );
};

export default Calculator;