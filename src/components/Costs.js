import React, { useState, useEffect } from 'react';

function Costs({ setGlobalCosts }) {
  const [venueCost, setVenueCost] = useState('');
  const [entertainmentCost, setEntertainmentCost] = useState('');
  const [marketingCost, setMarketingCost] = useState('');
  const [staffingCost, setStaffingCost] = useState('');
  const [miscellaneousCost, setMiscellaneousCost] = useState('');

  useEffect(() => {
    const totalCost =
      venueCost +
      entertainmentCost +
      marketingCost +
      staffingCost +
      miscellaneousCost;
    setGlobalCosts(totalCost);
  }, [
    venueCost,
    entertainmentCost,
    marketingCost,
    staffingCost,
    miscellaneousCost,
    setGlobalCosts,
  ]);

  function handleFocus(event) {
    event.target.select();
  }

  function disableScrollChange(event) {
    event.target.blur();
  }

  return (
    <div className="costs-container">
      {/* Repeat this structure for each cost type */}
      <label>Venue Cost:</label>
      <input
        type="number"
        value={venueCost}
        onChange={e => setVenueCost(Number(e.target.value))}
        onFocus={handleFocus}
        onWheel={disableScrollChange}
      />
      <label>Entertainment Cost:</label>
      <input
        type="number"
        value={entertainmentCost}
        onChange={e => setEntertainmentCost(Number(e.target.value))}
        onFocus={handleFocus}
        onWheel={disableScrollChange}
      />
      <label>Marketing Cost:</label>
      <input
        type="number"
        value={marketingCost}
        onChange={e => setMarketingCost(Number(e.target.value))}
        onFocus={handleFocus}
        onWheel={disableScrollChange}
      />
      <label>Staffing Cost:</label>
      <input
        type="number"
        value={staffingCost}
        onChange={e => setStaffingCost(Number(e.target.value))}
        onFocus={handleFocus}
        onWheel={disableScrollChange}
      />
      <label>Miscellaneous Cost:</label>
      <input
        type="number"
        value={miscellaneousCost}
        onChange={e => setMiscellaneousCost(Number(e.target.value))}
        onFocus={handleFocus}
        onWheel={disableScrollChange}
      />
    </div>
  );
}

export default Costs;
