import React, { useState } from "react";

const ComuneSelector = ({ onComuneChange }) => {
  const [comune, setComune] = useState("Besnate");

  const handleComuneChange = (event) => {
    setComune(event.target.value);
    onComuneChange(event.target.value);
  };

  return (
    <div className="mb-3">
      <label className="form-label">Seleziona il Comune:</label>
      <select className="form-select" value={comune} onChange={handleComuneChange}>
        <option value="Besnate">Besnate</option>
      </select>
    </div>
  );
};

export default ComuneSelector;
