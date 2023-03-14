// import React, { useState } from 'react';

// function New() {
//   const [input1, setInput1] = useState('');
//   const [input2, setInput2] = useState('');
//   const [input3, setInput3] = useState('');
//   const [input4, setInput4] = useState('');
//   const [displayValues, setDisplayValues] = useState(false);

//   const handleInputChange = (event, setInput) => {
//     setInput(event.target.value);
//   };

//   const handleButtonClick = () => {
//     setDisplayValues(true);
//   };

//   return (
//     <div>
//       <input value={input1} onChange={(event) => handleInputChange(event, setInput1)} />
//       <input value={input2} onChange={(event) => handleInputChange(event, setInput2)} />
//       <input value={input3} onChange={(event) => handleInputChange(event, setInput3)} />
//       <input value={input4} onChange={(event) => handleInputChange(event, setInput4)} />

//       <button onClick={handleButtonClick}>Print Input Values</button>

//       {displayValues && <p>{input1} {input2} {input3} {input4}</p>}
//     </div>
//   );
// }

// export default New;

// import React, { useState } from 'react';

// function New() {
//   const [input1, setInput1] = useState('');
//   const [input2, setInput2] = useState('');
//   const [input3, setInput3] = useState('');
//   const [input4, setInput4] = useState('');
//   const [displayValues, setDisplayValues] = useState(true);

//   const handleInputChange = (event, setInput) => {
//     setInput(event.target.value);
//   };

//   return (
//     <div>
//       <input value={input1} onChange={(event) => handleInputChange(event, setInput1)} />
//       <input value={input2} onChange={(event) => handleInputChange(event, setInput2)} />
//       <input value={input3} onChange={(event) => handleInputChange(event, setInput3)} />
//       <input value={input4} onChange={(event) => handleInputChange(event, setInput4)} />

//       {displayValues && <p>{input1} {input2} {input3} {input4}</p>}
//     </div>
//   );
// }

// export default New;


// import React from 'react'
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import './Style.css'



// export default function New() {


//   const handlePrint = () => {
//     const input = document.getElementById('print-container');
//     html2canvas(input)
//       .then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF();
//         pdf.addImage(imgData, 'PNG', 0, 0);
//         pdf.save('download.pdf');
//       });
//     }

//   return (
//     <>
//     <div id='print-container'>
//     < Row>
//               <Col>
//               <img src="https://dat.ae/wp-content/uploads/2022/02/DAT.png" alt="My Image" />
//               </Col>
//               <Col className='text-center'>Policy</Col>
//               <Col></Col>
//             </Row>
//         <div className='heading' ><h5 className='print-heading'>Basic Details</h5></div>
//          <Row style={{marginTop:'32px'}}>
//           <Col>
//            <p cl><span className='print-text'>First Name &nbsp;:</span> &nbsp;{displayValues &&<span>{Firstname}</span>}</p> 
//           </Col>
//           <Col>
//           <p> <span className='print-text'>Middle Name &nbsp;:</span>&nbsp;{displayValues &&<span>{Middlename}</span>}</p>
//           </Col>
//           <Col>
//           <p><span className='print-text'>Last Name&nbsp;:</span> &nbsp;{displayValues &&<span>{Lastname}</span>}</p>
//           </Col>
//          </Row>
//          <Row style={{marginTop:'32px'}}>
//           <Col>
//            <p><span className='print-text'>Age &nbsp;: </span>&nbsp;{displayValues &&<span>{Age}</span>}</p>
//           </Col>
//           <Col>
//           <p><span className='print-text'>Gender &nbsp;:</span> &nbsp;{displayValues &&<span>{Gender}</span>}</p>
//           </Col>
//           <Col>
//           <p><span className='print-text'>Mobile number &nbsp;:</span> &nbsp;{displayValues &&<span>{Mobile}</span>}</p>
//           </Col>
//          </Row>
         
//           <div className='heading' style={{marginTop:'32px'}}>
//             <h5 className='print-heading'>Selected plans</h5></div>
//             <Row style={{marginTop:'32px'}}>
//               <Col>
//                <p> <span className='print-text'>Selected Plan &nbsp;:</span> &nbsp;<span>{selectedPlan}</span></p>
//               </Col>
//               <Col>
//                <p><span className='print-text'>Coverage For &nbsp;:</span> &nbsp;<span>Individual Life</span></p>
//               </Col>
//               <Col>
//               </Col>
//             </Row>
//             <Row style={{marginTop:'32px'}}>
//               <Col>
//                <p><span className='print-text'>Sum Assured &nbsp;:</span>&nbsp;{displayValues &&<span>{Sum}</span>}</p>
//               </Col>
//               <Col>
//                <p><span className='print-text'>Paying Term &nbsp;:</span> &nbsp;<span>{payingTerm}&nbsp;Years</span></p>
//               </Col>
//               <Col>
//                <p><span className='print-text'>Policy Term &nbsp;:</span> &nbsp;<span>{policyTerm}&nbsp;Years</span></p>
//               </Col>
//             </Row>


//             <table style={{marginTop:'32px'}} >
//     <thead>
//       <tr>
//         <th></th>
//         <th>Yearly</th>
//         <th>Half Yearly</th>
//         <th>Quarterly</th>
//         <th>Monthly</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>Basic Premium</td>
//         <td>{premiumRate}</td>
//         <td>{calculatePremium(2)}</td>
//         <td>{calculatePremium(4)}</td>
//         <td>{calculatePremium(12)}</td>
//       </tr>
//       <tr>
//         <td>Additional Premium</td>
//         <td></td>
//         <td></td>
//         <td></td>
//         <td></td>
//       </tr>
//       <tr>
//         <td>Tax</td>
//         <td></td>
//         <td></td>
//         <td></td>
//         <td></td>
//       </tr>
//       <tr>
//         <td>Total Premium</td>
//         <td>{premiumRate}</td>
//         <td>{calculatePremium(2)}</td>
//         <td>{calculatePremium(4)}</td>
//         <td>{calculatePremium(12)}</td>
//       </tr>
     
//     </tbody>
//   </table>
//   </div>
//         <button className='print-btn' onClick={handlePrint}>PRINT</button>
//     </>
//   )
// }


// const handlePrint = () => {
//   const input = document.getElementById('print-container');
//   const image = document.querySelector('img');
//   image.onload = () => {
//     html2canvas(input)
//       .then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF();
//         pdf.addImage(imgData, 'PNG', 0, 0);
//         pdf.save('download.pdf');
//       });
//   };
// };

// return (
//   <>
//     <div id='print-container'>
//       <Row>
//         <Col>
//           <img
//             src='https://dat.ae/wp-content/uploads/2022/02/DAT.png'
//             alt='My Image'
//           />
//         </Col>
//         <Col className='text-center'>Policy</Col>
//         <Col></Col>
//       </Row>
//       {/* Rest of the code */}
//     </div>
//     <button className='print-btn' onClick={handlePrint}>
//       PRINT
//     </button>
//   </>
// );




import React, { useState } from 'react';
import data from './data.json';

function New() {
  const [age, setAge] = useState('');
  const [planType, setPlanType] = useState('');
  const [payingTerm, setPayingTerm] = useState('');
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch(name) {
      case 'age':
        setAge(value);
        break;
      case 'planType':
        setPlanType(value);
        break;
      case 'payingTerm':
        setPayingTerm(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = data[age][planType][payingTerm];
    setValue(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Age:
        <input type="text" name="age" value={age} onChange={handleChange} />
      </label>
      <label>
        Plan Type:
        <select name="planType" value={planType} onChange={handleChange}>
          <option value="">Select Plan Type</option>
          <option value="Endowment Plan">Endowment Plan</option>
          <option value="TermPlan">Term Plan</option>
        </select>
      </label>
      <label>
        Paying Term:
        <select name="payingTerm" value={payingTerm} onChange={handleChange}>
          <option value="">Select Paying Term</option>
          {Object.keys(data[age][planType]).map(term => (
            <option key={term} value={term}>{term} years</option>
          ))}
        </select>
      </label>
      <button type="submit">Submit</button>
      {value && <div>Value: {value}</div>}
    </form>
  );
}

export default New;
