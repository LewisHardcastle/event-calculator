import React, { useState, useEffect } from 'react';

function TicketCalculator({ setGlobalPeople, setGlobalTicketRevenue }) {
  const [phases, setPhases] = useState([]);

  useEffect(() => {
    const totalTicketRevenue = phases.reduce(
      (acc, phase) => acc + phase.ticketPrice * phase.expectedSales,
      0
    );
    setGlobalTicketRevenue(totalTicketRevenue);
    const totalTickets = phases.reduce(
      (acc, phase) => acc + phase.expectedSales,
      0
    );
    setGlobalPeople(totalTickets);
  }, [phases, setGlobalTicketRevenue, setGlobalPeople]);

  const addPhase = () =>
    setPhases([...phases, { ticketPrice: '', expectedSales: '' }]);
  const removePhase = () => setPhases(phases.slice(0, -1));

  const handlePriceChange = (e, index) => {
    const newPhases = [...phases];
    newPhases[index].ticketPrice = Number(e.target.value);
    setPhases(newPhases);
  };

  const handleSalesChange = (e, index) => {
    const newPhases = [...phases];
    newPhases[index].expectedSales = Number(e.target.value);
    setPhases(newPhases);
  };

  function handleFocus(event) {
    event.target.select();
  }

  function disableScrollChange(event) {
    event.target.blur();
  }

  return (
    <div className="ticket-calculator-container">
      {phases.map((phase, index) => (
        <div key={index}>
          <label>Phase {index + 1} Ticket Price:</label>
          <input
            type="number"
            value={phase.ticketPrice}
            onChange={e => handlePriceChange(e, index)}
            onFocus={handleFocus}
            onWheel={disableScrollChange}
          />
          <label>Expected Sales:</label>
          <input
            type="number"
            value={phase.expectedSales}
            onChange={e => handleSalesChange(e, index)}
            onFocus={handleFocus}
            onWheel={disableScrollChange}
          />
        </div>
      ))}
      <div className="ticket-calculator-buttons">
        <button onClick={addPhase}>Add Phase</button>
        <button onClick={removePhase}>Remove Phase</button>
      </div>
    </div>
  );
}

export default TicketCalculator;
