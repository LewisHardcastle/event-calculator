import React, { useState } from 'react';
import './AppDarkMode.css';
import Costs from './components/Costs';
import TicketCalculator from './components/TicketCalculator';
import Revenue from './components/Revenue';
import Output from './components/Output';
import Footer from './components/Footer';

function App4() {
  const [globalCosts, setGlobalCosts] = useState(0);
  const [globalPeople, setGlobalPeople] = useState(0);
  const [globalTicketRevenue, setGlobalTicketRevenue] = useState(0);
  const [globalOtherRevenue, setGlobalOtherRevenue] = useState(0);

  return (
    <div className="app-container">
      <Costs setGlobalCosts={setGlobalCosts} />
      <TicketCalculator
        setGlobalPeople={setGlobalPeople}
        setGlobalTicketRevenue={setGlobalTicketRevenue}
      />
      <Revenue setGlobalOtherRevenue={setGlobalOtherRevenue} />
      <Output
        globalCosts={globalCosts}
        globalPeople={globalPeople}
        globalTicketRevenue={globalTicketRevenue}
        globalOtherRevenue={globalOtherRevenue}
      />
      <Footer />
    </div>
  );
}

export default App4;
