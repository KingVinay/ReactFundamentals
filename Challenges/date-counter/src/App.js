import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [Step, setStep] = useState(1);
  const [Count, setCount] = useState(0);

  const date = new Date(Date.now());
  date.setDate(date.getDate() + Count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="Date">
      <div className="Step">
        <input
          type="range"
          value={Step}
          min="1"
          max="10"
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{Step}</span>
      </div>
      <div className="Count">
        <button onClick={() => setCount((c) => c - Step)}>-</button>
        <input
          type="number"
          value={Count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + Step)}>+</button>
      </div>
      <h3>
        {Count === 0
          ? "Today is "
          : Count > 0
          ? `${Count} days from today is `
          : `${Math.abs(Count)} days ago was `}
        {date.toDateString()}
      </h3>
      {Count !== 0 || Step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
