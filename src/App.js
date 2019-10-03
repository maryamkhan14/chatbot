import React, { useState, useEffect } from "react";
import { subscribeToTimer } from "./api";
function App() {
  const [timestamp, setTimestamp] = useState({ timestamp: "no timestamp yet" });
  useEffect(() => {
    subscribeToTimer((err, timestamp) =>
      setTimestamp({
        timestamp
      })
    );
  }, [timestamp]);

  return (
    <div className="App">
      <p className="App-intro">
        This is the timer value: {JSON.stringify(timestamp)}
      </p>
    </div>
  );
}

export default App;
