import React, { useState } from "react";
import ComuneSelector from "./components/ComuneSelector";
import NextCollection from "./components/NextCollection";
import ReminderButton from "./components/ReminderButton";

const App = () => {
  const [comune, setComune] = useState("Besnate");

  return (
    <div className="container mt-4">
      <h1 className="text-success">♻️ RiciclaMi</h1>
      <ComuneSelector onComuneChange={setComune} />
      <NextCollection comune={comune} />
      <ReminderButton raccolta={"2024-09-06"} />
    </div>
  );
};

export default App;
