import React, { useState, useEffect } from 'react';

function Revenue({ setGlobalOtherRevenue }) {
  const [sponsorshipRevenue, setSponsorshipRevenue] = useState('');
  const [merchandiseRevenue, setMerchandiseRevenue] = useState('');
  const [miscellaneousRevenue, setMiscellaneousRevenue] = useState('');

  useEffect(() => {
    const totalRevenue =
      sponsorshipRevenue + merchandiseRevenue + miscellaneousRevenue;
    setGlobalOtherRevenue(totalRevenue);
  }, [
    sponsorshipRevenue,
    merchandiseRevenue,
    miscellaneousRevenue,
    setGlobalOtherRevenue,
  ]);

  function handleFocus(event) {
    event.target.select();
  }

  function disableScrollChange(event) {
    event.target.blur();
  }

  return (
    <div className="revenue-container">
      <label>Sponsorship Revenue:</label>
      <input
        type="number"
        value={sponsorshipRevenue}
        onChange={e => setSponsorshipRevenue(Number(e.target.value))}
        onFocus={handleFocus}
        onWheel={disableScrollChange}
      />
      <label>Merchandise Revenue:</label>
      <input
        type="number"
        value={merchandiseRevenue}
        onChange={e => setMerchandiseRevenue(Number(e.target.value))}
        onFocus={handleFocus}
        onWheel={disableScrollChange}
      />
      <label>Miscellaneous Revenue:</label>
      <input
        type="number"
        value={miscellaneousRevenue}
        onChange={e => setMiscellaneousRevenue(Number(e.target.value))}
        onFocus={handleFocus}
        onWheel={disableScrollChange}
      />
    </div>
  );
}

export default Revenue;
