import React from "react";

function Service({ children, service, onServiceChange }) {
  return (
    <div>
      <div style={{ display: "inline" }}>{children}</div>

      <select
        value={service}
        onChange={(e) => onServiceChange(Number(e.target.value))}
      >
        <option value="0">It was bad (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="15">It was perfect (15%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default Service;
