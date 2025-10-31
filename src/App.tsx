import { useState } from "react";
import stringCalculator from "./stringCalculator";

const App = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const calculatedResult = stringCalculator(input);
    setResult(calculatedResult);
  };

  return (
    <main
      style={{
        padding: "20px",
        backgroundColor: "#fff",
        color: "#222",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={600}
        height={400}
      />

      <h2>String Calculator</h2>

      <h1 style={{ fontSize: "20px" }}>Enter numbers</h1>

      <label
        htmlFor="numberInput"
        style={{ display: "block", fontWeight: "bold", marginTop: "10px" }}
      >
        Enter numbers
      </label>

      <textarea
        id="numberInput"
        name="numberInput"
        style={{
          margin: "10px 0",
          color: "#000",
          width: "100%",
          minHeight: "100px",
          fontSize: "16px",
        }}
        placeholder="Enter numbers"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleCalculate}
        style={{
          padding: "10px 20px",
          backgroundColor: "#008cba",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Calculate
      </button>

      {result !== null && <p style={{ color: "green" }}>Result: {result}</p>}

      <div role="alert">
        <p>Make sure you enter numbers correctly!</p>
      </div>
    </main>
  );
};

export default App;
