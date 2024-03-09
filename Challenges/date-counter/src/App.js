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

  const date = new Date("March 9 2024");
  date.setDate(date.getDate() + Count);

  return (
    <div className="Date">
      <div className="Step">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {Step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="Count">
        <button onClick={() => setCount((c) => c - Step)}>-</button>
        <span>Count: {Count}</span>
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
    </div>
  );
}

export default App;
