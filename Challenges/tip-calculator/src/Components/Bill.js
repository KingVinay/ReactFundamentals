function Bill({ bill, onBillChange }) {
  return (
    <div>
      <div style={{ display: "inline" }}>How much was the bill?</div>
      <input
        type="number"
        placeholder="Enter Bill Amount"
        value={bill}
        onChange={(e) => onBillChange(Number(e.target.value))}
      />
    </div>
  );
}

export default Bill;
