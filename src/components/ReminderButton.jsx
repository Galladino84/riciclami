import React from "react";

const ReminderButton = ({ raccolta }) => {
  const handleReminder = () => {
    alert(`Promemoria impostato per la raccolta del ${raccolta}`);
  };

  return raccolta ? (
    <button className="btn btn-primary w-100" onClick={handleReminder}>
      Imposta Promemoria 📅
    </button>
  ) : null;
};

export default ReminderButton;
