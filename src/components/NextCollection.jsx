import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faLeaf, faFileAlt, faRecycle, faWineBottle } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  trash: faTrash,
  leaf: faLeaf,
  fileAlt: faFileAlt,
  recycle: faRecycle,
  "wine-bottle": faWineBottle
};

const NextCollection = ({ comune }) => {
  const [raccolta, setRaccolta] = useState([]);
  const [dataProssima, setDataProssima] = useState(null);

  useEffect(() => {
    fetch(`/data/raccolta.json`)
      .then((response) => response.json())
      .then((data) => {
        if (!data[comune]) {
          console.error("Comune non trovato nel JSON!");
          return;
        }

        console.log("Dati JSON ricevuti:", data[comune]);

        const oggi = new Date().toISOString().split("T")[0];

        // Trova la prossima raccolta disponibile
        const dateFuture = Object.keys(data[comune].raccolta_per_data)
          .filter((date) => date >= oggi)
          .sort();

        if (dateFuture.length > 0) {
          const dataProssima = dateFuture[0];
          setDataProssima(dataProssima);
          setRaccolta(data[comune].raccolta_per_data[dataProssima]);
        } else {
          setDataProssima("N/D");
          setRaccolta([]);
        }
      })
      .catch((error) => console.error("Errore nel caricamento dei dati:", error));
  }, [comune]);

  return (
    <div className="alert alert-success">
      <h4>Prossima raccolta: {dataProssima || "N/D"}</h4>
      {raccolta.length > 0 ? (
        raccolta.map((item, index) => (
          <div key={index} className="d-flex align-items-center gap-2">
            <FontAwesomeIcon icon={iconMap[item.icona]} size="2x" />
            <span>{item.descrizione} ({item.frequenza})</span>
          </div>
        ))
      ) : (
        <p>Caricamento dati...</p>
      )}
    </div>
  );
};

export default NextCollection;
