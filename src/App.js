import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Costs />
      <TicketCalculator />
      <Revenue />
      {/* <Output /> */}
    </div>
  );
}

function Costs() {
  const [venueCost, setVenueCost] = useState(0);
  const [entertainmentCost, setEntertainmentCost] = useState(0);
  const [marketingCost, setMarketingCost] = useState(0);
  const [staffingCost, setStaffingCost] = useState(0);
  const [miscellaneousCost, setMiscellaneousCost] = useState(0);
  const totalCost =
    venueCost +
    entertainmentCost +
    marketingCost +
    staffingCost +
    miscellaneousCost;

  return (
    <div>
      <div className="cost-form">
        <h3 className="head">Expected Costs:</h3>
        <form>
          <label>Venue Cost:</label>
          <input
            value={venueCost}
            onChange={e => setVenueCost(Number(e.target.value))}
          ></input>
          <br></br>
          <label>Entertainment Cost:</label>
          <input
            value={entertainmentCost}
            onChange={e => setEntertainmentCost(Number(e.target.value))}
          ></input>
          <br></br>
          <label>Marketing Cost:</label>
          <input
            value={marketingCost}
            onChange={e => setMarketingCost(Number(e.target.value))}
          ></input>
          <br></br>
          <label>Staffing Cost:</label>
          <input
            value={staffingCost}
            onChange={e => setStaffingCost(Number(e.target.value))}
          ></input>
          <br></br>
          <label>Miscellaneous Costs:</label>
          <input
            value={miscellaneousCost}
            onChange={e => setMiscellaneousCost(Number(e.target.value))}
          ></input>
        </form>
      </div>
      <h3>Total Costs: £{totalCost}</h3>
    </div>
  );
}

function TicketCalculator() {
  // Create a state to manage all phases
  const [phases, setPhases] = useState([]);

  function handlePriceChange(e, index) {
    // Update the ticket price for the specific phase
    const newPhases = [...phases];
    newPhases[index].ticketPrice = Number(e.target.value);
    setPhases(newPhases);
  }

  function handleSalesChange(e, index) {
    // Update the expected sales for the specific phase
    const newPhases = [...phases];
    newPhases[index].expectedSales = Number(e.target.value);
    setPhases(newPhases);
  }

  function addPhase() {
    // Add a new phase with default values
    setPhases([...phases, { ticketPrice: 0, expectedSales: 0 }]);
  }

  function removePhase() {
    // Remove the last phase
    setPhases(phases.slice(0, -1));
  }

  // Calculate totals
  const totalTicketRevenue = phases.reduce(
    (acc, phase) => acc + phase.ticketPrice * phase.expectedSales,
    0
  );
  const totalTickets = phases.reduce(
    (acc, phase) => acc + phase.expectedSales,
    0
  );

  return (
    <div>
      <div className="cost-form">
        <h3 className="head">Ticket Calculator:</h3>
        {phases.map((phase, index) => (
          <div key={index}>
            <label>Phase {index + 1}: </label>
            <label>Ticket Price: </label>
            <input
              value={phase.ticketPrice}
              onChange={e => handlePriceChange(e, index)}
            ></input>
            <label> Expected Amount of Sales: </label>
            <input
              value={phase.expectedSales}
              onChange={e => handleSalesChange(e, index)}
            ></input>
          </div>
        ))}
      </div>
      <br></br>
      <div>
        <button onClick={addPhase}>Add Phase</button>
        <button onClick={removePhase}> Remove Phase</button>
      </div>
      <div>
        <h3>Total Ticket Revenue: £{totalTicketRevenue}</h3>
        <h3>Expected Attendees (Total Tickets Bought): {totalTickets}</h3>
      </div>
    </div>
  );
}

function Revenue() {
  const [sponsorshipRevenue, setSponsorshipRevenue] = useState(0);
  const [merchandiseRevenue, setMerchandiseRevenue] = useState(0);
  const [miscellaneousRevenue, setMiscellaneousRevenue] = useState(0);

  const totalRevenue =
    sponsorshipRevenue + merchandiseRevenue + miscellaneousRevenue;

  return (
    <div>
      <div className="cost-form">
        <h3 className="head">Other Revenue:</h3>
        <form>
          <label>Sponsership Revenue:</label>
          <input
            value={sponsorshipRevenue}
            onChange={e => setSponsorshipRevenue(Number(e.target.value))}
          ></input>
          <br></br>
          <label>Merchandise Revenue:</label>
          <input
            value={merchandiseRevenue}
            onChange={e => setMerchandiseRevenue(Number(e.target.value))}
          ></input>
          <br></br>
          <label>Miscellaneous Revenue:</label>
          <input
            value={miscellaneousRevenue}
            onChange={e => setMiscellaneousRevenue(Number(e.target.value))}
          ></input>
          <br></br>
        </form>
      </div>
      <h3>Total Revenue (Including Tickets): £{totalRevenue}</h3>
    </div>
  );
}

export default App;
