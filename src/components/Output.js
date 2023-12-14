import React from 'react';

function Output({
  globalCosts,
  globalPeople,
  globalTicketRevenue,
  globalOtherRevenue,
}) {
  const profit = globalTicketRevenue + globalOtherRevenue - globalCosts;
  const worstCaseProfit =
    globalTicketRevenue + globalOtherRevenue - globalCosts * 1.5;
  const costPerCustomer = globalPeople > 0 ? globalCosts / globalPeople : 0;

  return (
    <div className="output-container">
      <h3>Total Costs: £{globalCosts}</h3>
      <h3>Expected Attendees: {globalPeople}</h3>
      <h3>Cost per Customer: £{costPerCustomer.toFixed(2)}</h3>
      <h3>Total Revenue: £{globalTicketRevenue + globalOtherRevenue}</h3>
      <h3>Expected Profit: £{profit}</h3>
      <h3>Worst Case Scenario (Profit with 1.5x Costs): £{worstCaseProfit}</h3>
    </div>
  );
}

export default Output;
