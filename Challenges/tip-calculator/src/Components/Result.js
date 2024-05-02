function Result({ bill, service, friendService, onClearList }) {
  const averageTip = Math.round((service + friendService) / 2);
  const tipAmount = Math.round((bill * averageTip) / 100);
  const total = bill + tipAmount;
  return (
    <div>
      <h2>{`You pay $${total} ($${bill} + $${tipAmount} tip)`}</h2>
      <button onClick={onClearList}>Reset</button>
    </div>
  );
}

export default Result;
