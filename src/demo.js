import React, { useState } from 'react';
import data from './data.json';

function App() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [payingTerm, setPayingTerm] = useState(0);
  const [policyTerm, setPolicyTerm] = useState(0);
  const [premiumRate, setPremiumRate] = useState(0);

  // handle plan selection change
  function handlePlanChange(event) {
    setSelectedPlan(event.target.value);
  }

  // handle paying term selection change
  function handlePayingTermChange(event) {
    setPayingTerm(parseInt(event.target.value));
  }

  // handle policy term selection change
  function handlePolicyTermChange(event) {
    setPolicyTerm(parseInt(event.target.value));
  }

  // calculate the premium rate for a given interval
  function calculatePremium(interval) {
    const rate = data[selectedPlan][payingTerm][policyTerm];
    const premium = rate / interval;
    return premium.toFixed(2);
  }

  // fetch the premium rate from the data object
  function fetchPremiumRate() {
    const rate = data[selectedPlan][payingTerm][policyTerm];
    setPremiumRate(rate);
  }

  return (
    <div>
      <label>Select Plan</label>
      <select onChange={handlePlanChange}>
        <option value="">--Select--</option>
        <option value="Plan A">Plan A</option>
        <option value="Plan B">Plan B</option>
        <option value="Plan C">Plan C</option>
      </select>

      <label>Paying Term</label>
      <select onChange={handlePayingTermChange}>
        <option value="">--Select--</option>
        <option value="10">10 years</option>
        <option value="20">20 years</option>
        <option value="30">30 years</option>
      </select>

      <label>Policy Term</label>
      <select onChange={handlePolicyTermChange}>
        <option value="">--Select--</option>
        <option value="10">10 years</option>
        <option value="20">20 years</option>
        <option value="30">30 years</option>
      </select>

      <button onClick={fetchPremiumRate}>Fetch Premium Rate</button>

      <div>
        <p>Selected Plan: {selectedPlan}</p>
        <p>Paying Term: {payingTerm}</p>
        <p>Policy Term: {policyTerm}</p>
           <p>Premium Rate: {premiumRate}</p>

        <p>Premium Rate (Yearly): {premiumRate.toFixed(2)}</p>
        <p>Premium Rate (Half-Yearly): {calculatePremium(2)}</p>
        <p>Premium Rate (Quarterly): {calculatePremium(4)}</p>
        <p>Premium Rate (Monthly): {calculatePremium(12)}</p> 
        <p>18% of premiumrate</p>
      </div>
    </div>
  );
}

export default App;
