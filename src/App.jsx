import React,{useState} from "react";
import "./App.css"
import Calculator from "./components/Calculator";

const App = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };
  return (
    <div className={`App ${isNightMode ? 'night-theme' : 'day-theme'}`}>
    <button className="toggle-theme" onClick={toggleTheme}>
      {!isNightMode ? 'Day Mode' : 'Night Mode'}
    </button>
    <div className=".mac-dots">
        <div className=".mac-dot red"></div>
        <div className=".mac-dot orange"></div>
        <div className=".mac-dot green"></div>
      </div>
      <Calculator />
    </div>
  );
};

export default App;