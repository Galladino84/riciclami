import React, { useState, useEffect } from "react";

const NextCollection = ({ comune }) => {
  const [raccolta, setRaccolta] = useState(null);

  useEffect(() => {
    fetch(`/data/${comune.toLowerCase()}.json`)
      .then((response) => response.json())
      .then((data) => {
        const oggi = new Date().toISOString().split("T")[0];
        let prossima = null;

        Object.entries(data.raccolta_differenziata).forEach(([tipo, info]) => {
          const dateFuture = info.giorni_raccolta.filter((date) => date >= oggi);
          if (dateFuture.length > 0) {
            prossima = prossima || dateFuture[0];
          }
        });

        setRaccolta(prossima);
      })
      .catch((error) => console.error("Errore nel caricamento dei dati:", error));
  }, [comune]);

  return (
    <div className="alert alert-success">
      {raccolta ? <p>Prossima raccolta: {raccolta}</p> : <p>Caricamento dati...</p>}
    </div>
  );
};

export default NextCollection;
