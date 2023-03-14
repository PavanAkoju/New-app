import Life from './Life';

import New from "./New";

function App() {
  return (
    <div className="App">
     <Life />
     {/* <New /> */}
    </div>
  );
}
export default App;



// import React, { useState } from 'react';
// import data from './data.json';
// import { Row, Col } from 'react-bootstrap';

// function App() {
//   const [selectedAge, setSelectedAge] = useState('');
//   const [selectedPlan, setSelectedPlan] = useState(0);
//   const [payingTerm, setPayingTerm] = useState(0);
//   const [premiumRate, setPremiumRate] = useState(0);
//   const [Sum, setSum] = useState('');
//   const [displayValues, setDisplayValues] = useState(true);
//   const handleInputChange = (event, setInput) => {
//     setInput(event.target.value);
//   };

//   // handle paying term selection change
//   function handleAgechange(event) {
//     setSelectedAge(parseInt(event.target.value));
//   }

//   // handle plan selection change
//   function handlePlanChange(event) {
//     setSelectedPlan(event.target.value);
//   }

//   // handle paying term selection change
//   function handlePayingTermChange(event) {
//     setPayingTerm(parseInt(event.target.value));
//   }
//   // fetch the premium rate from the data object
//   function fetchPremiumRate() {
//     const rate = data[selectedAge][selectedPlan][payingTerm];
//     setPremiumRate(rate);
//   }
//   // calculate the premium rate for a given interval
//   function calculatePremium(interval) {
//     const rate = data[selectedAge][selectedPlan][payingTerm];
//     const premium = rate / interval;
//     return premium.toFixed(2);
//   }
//   // handle plan name input change
//   function handlePlanNameChange(event) {
//     setSelectedPlan(event.target.value);
//   }
//   // handle paying term input change
//   function handlePayingTermInputChange(event) {
//     setPayingTerm(parseInt(event.target.value));
//   }

//   // handle form submission
//   function handleSubmit(event) {
//     event.preventDefault();
//     const rate = data[selectedAge][selectedPlan][payingTerm];
//     setPremiumRate(rate);
//   }
//   // premium calculations
//   const Yearly = (Sum * premiumRate) / 100;
//    const halfyear = (Yearly * 10)/100;
//    const quarterly = (halfyear * 12)/100;
//    const monthly = (quarterly * 15)/100;
//   // premium calculations

// // Annualized premium calculation
//    const two = (Yearly * 2);
//    const three = (Yearly * 3);
//    const four = (Yearly * 4);
//    const five = (Yearly * 5);
//    const six = (Yearly * 6);
//    const seven = (Yearly * 7);
//    const eight = (Yearly * 8);
//    const nine = (Yearly * 9);
//    const ten = (Yearly * 10);
// // Annualized premium calculation ends
 
// // Surrender benifit  calculation
//    const Stwo = (two * 40) /100;
//    const Sthree = (three * 40) /100;
//    const Sfour = (four * 40) /100;
//    const Sfive = (five * 40) /100;
//    const Ssix = (six * 40) /100;
//    const Sseven = (seven * 40) /100;
//    const Seight = (eight * 40) /100;
//    const Snine = (nine * 40) /100;
//    const Sten = (ten * 40) /100;
// // Surrender benifit  calculation ends
 

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>

//          <Row style={{ marginTop: '50px' }}>
//           <Col>
//           <label>
//           Age:
//           <input type="text" value={selectedAge} onChange={handleAgechange} />
//         </label>
//           </Col>
//           <Col>
//             <label>Select Plan</label><br />
//             <select className='basic-form-input' style={{ width: '45%' }} onChange={handlePlanChange}>
//               <option value="">--Select--</option>
//               <option value="Endowment Plan">Endowment Plan</option>
//               <option value="Term Life">Term Life</option>
//               <option value="Money Back 15 Years">Money Back 15 Years</option>
//               <option value="Money Back 20 Years">Money Back 20 Years</option>
//               <option value="Child Assurance">Child Assurance</option>
//               <option value="Whole Life">Whole Life</option>
//             </select>
//           </Col>
//           <Col>
//             <label>Coverage For</label><br />
//             <p className='coverage-text'>Individual Life</p>
//           </Col>
//           <Col>
//             <label>Sum Assured</label><br />
//             <input type="text" value={Sum} onChange={(event) => handleInputChange(event, setSum)} className='basic-form-input' />
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <label>Paying Term</label><br />
//             <select className='basic-form-input' style={{ width: '45%' }} onChange={handlePayingTermChange}>
//             <option value="">--Select--</option>
//               <option value="10">5 years</option>
//               <option value="20">10 years</option>
//               <option value="30">15 years</option>
//               <option value="30">20 years</option>
//               <option value="30">25 years</option>
//               <option value="30">30 years</option>
//             </select>
//           </Col>
//           <Col>
//             <label>Policy Term</label><br />
//             <select className='basic-form-input' style={{ width: '45%' }} >
//               <option value="">--Select--</option>
//               <option value="10">5 years</option>
//               <option value="20">10 years</option>
//               <option value="30">15 years</option>
//               <option value="30">20 years</option>
//               <option value="30">25 years</option>
//               <option value="30">30 years</option>
              
//             </select>
//           </Col>
//         </Row>
//         <button type="submit">Fetch Premium Rate</button>
//       </form>

//       <div>
//          <p> {selectedAge}</p> 
//         <p>Selected Plan: {selectedPlan}</p>
//         <p>Paying Term: {payingTerm}</p>
//         <p>Premium Rate: {premiumRate}</p>
//        <p>Sum:{displayValues && <span>{Sum}</span>}</p>
//        <p>Yearly: {Yearly}</p>
//        <p>Halfyearly :{halfyear}</p>
//        <p>quarterly :{quarterly}</p>
//        <p>monthly :{monthly}</p>
//        <p>two:{two}</p>
//        <p>three:{three}</p>
//        <p>four:{four}</p>
//        <p>five:{five}</p>
//        <p>six:{six}</p>
//        <p>seven:{seven}</p>
//        <p>eight:{eight}</p>
//        <p>nine:{nine}</p>
//        <p>ten:{ten}</p>
//        <p>Stwo:{Stwo}</p>
//        <p>Sthree:{Sthree}</p>
//        <p>Sfour:{Sfour}</p>
//        <p>Sfive:{Sfive}</p>
//        <p>Ssix:{Ssix}</p>
//        <p>Sseven:{Sseven}</p>
//        <p>Seight:{Seight}</p>
//        <p>Snine:{Snine}</p>
//        <p>Sten:{Sten}</p>
       
//         <p>18% of premiumrate</p>
//       </div>
      
//     </div>
//       );
// }
// export default App;