import React, { useState, useEffect } from "react";

const ComuneSelector = ({ comuneSelezionato, setComune }) => {
  const [comuni, setComuni] = useState([]);

  useEffect(() => {
    fetch("/data/raccolta.json")
      .then((response) => response.json())
      .then((data) => {
        const comuniDisponibili = Object.keys(data); // Prende i nomi dei comuni dal JSON
        setComuni(comuniDisponibili);
        if (!comuneSelezionato && comuniDisponibili.length > 0) {
          setComune(comuniDisponibili[0]); // Imposta il primo comune come default
        }
      })
      .catch((error) => console.error("Errore nel caricamento dei comuni:", error));
  }, [setComune, comuneSelezionato]);

  return (
    <select
      className="form-select"
      value={comuneSelezionato}
      onChange={(e) => setComune(e.target.value)}
    >
      {comuni.map((comune) => (
        <option key={comune} value={comune}>
          {comune}
        </option>
      ))}
    </select>
  );
};

export default ComuneSelector;
