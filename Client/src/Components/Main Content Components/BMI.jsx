import React, { useState, useEffect } from 'react'; 
import "./bmi.css";

const BMICal = () => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [history, setHistory] = useState([]);

  // Load history from local storage on mount
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('bmiHistory')) || [];
    setHistory(storedHistory);
  }, []);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters ** 2)).toFixed(2);

    setBMI(bmiValue);

    // Create a new record with name, bmi, and date
    const date = new Date().toLocaleString();
    const newRecord = { name, bmi: bmiValue, date };

    // Update history and local storage
    const updatedHistory = [newRecord, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('bmiHistory', JSON.stringify(updatedHistory));
  };

  // Clear history and local storage
  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('bmiHistory');
  };

  return (
    <div style = {{marginTop:"20px"}} className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Weight in kg"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Height in cm"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div className="bmi-result">
          <p>{name ? `${name}'s BMI` : 'Your BMI'}: {bmi}</p>
        </div>
      )}

      <h3>Past Records</h3>
      <ul className="bmi-history">
        {history.map((record, index) => (
          <li key={index}>
            {record.name} - BMI: {record.bmi} (Date: {record.date})
          </li>
        ))}
      </ul>

      {history.length > 0 && (
        <button onClick={clearHistory} className="delete-history-button">
          Delete Records
        </button>
      )}
    </div>
  );
};

export default BMICal;
