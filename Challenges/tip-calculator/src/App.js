import Bill from "./Components/Bill";
import Service from "./Components/Service";
import Result from "./Components/Result";

import { useState } from "react";
function App() {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [friendService, setFriendService] = useState(0);

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to reset the bill ?"
    );
    if (confirmed) {
      setBill(0);
      setService(0);
      setFriendService(0);
    }
  }

  return (
    <div className="App">
      <Bill bill={bill} onBillChange={setBill} />
      <Service service={service} onServiceChange={setService}>
        How did you like the service?
      </Service>
      <Service service={friendService} onServiceChange={setFriendService}>
        How did your friend like the service?
      </Service>
      <Result
        bill={bill}
        service={service}
        friendService={friendService}
        onClearList={handleClearList}
      />
    </div>
  );
}

export default App;
