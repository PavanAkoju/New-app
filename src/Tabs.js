import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Style.css'
import data from './data.json';
import { FaUserAlt } from 'react-icons/fa';
import { ImForward3 } from 'react-icons/im';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { GrDocumentVerified } from 'react-icons/gr';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// import AgeCalculator from './AgeCalculator';
// import DownloadButton from './DownloadButton';


export default function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const numTabs = 4;

  function handleNextClick() {
    if (activeTabIndex < numTabs - 1) {
      setActiveTabIndex(activeTabIndex + 1);
    }
  }

  function handleBackClick() {
    if (activeTabIndex > 0) {
      setActiveTabIndex(activeTabIndex - 1);
    }
  }

  ///START///
  // const [selectedAge, setSelectedAge] = useState('');
  // const [selectedPlan, setSelectedPlan] = useState(0);
  // const [payingTerm, setPayingTerm] = useState(0);
  // const [premiumRate, setPremiumRate] = useState(0);
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [payingTerm, setPayingTerm] = useState(0);
  const [premiumRate, setpremiumRate] = useState(0);

  // handle paying term selection change
  function handleAgechange(event) {
    setSelectedAge(parseInt(event.target.value));
  }

  // handle plan selection change
  function handlePlanChange(event) {
    setSelectedPlan(event.target.value);
  }

  // handle paying term selection change
  function handlePayingTermChange(event) {
    setPayingTerm(parseInt(event.target.value));
  }
  // fetch the premium rate from the data object
  function fetchppremiumRate() {
    const rate = data[selectedAge][selectedPlan][payingTerm];
    setpremiumRate(rate);
  }
  // calculate the premium rate for a given interval
  function calculatePremium(interval) {
    const rate = data[selectedAge][selectedPlan][payingTerm];
    const premium = rate / interval;
    return premium.toFixed(2);
  }
  // handle plan name input change
  function handlePlanNameChange(event) {
    setSelectedPlan(event.target.value);
  }
  // handle paying term input change
  function handlePayingTermInputChange(event) {
    setPayingTerm(parseInt(event.target.value));
  }

  // handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    const rate = data[selectedAge][selectedPlan][payingTerm];
    setpremiumRate(rate);
  }

  

  // const [value, setValue] = useState('');
  // const halfYearlypremiumRate = (premiumRate / 2).toFixed(2);
  // const quarterlypremiumRate = (premiumRate / 4).toFixed(2);
  // const monthlypremiumRate = (premiumRate / 12).toFixed(2);

  // function handlePlanChange(event) {
  //   setSelectedAge(parseInt(event.target.value));
  // }
  // // handle plan selection change
  // function handlePlanChange(event) {
  //   setSelectedPlan(event.target.value);
  // }

  // // handle paying term selection change
  // function handlePayingTermChange(event) {
  //   setPayingTerm(parseInt(event.target.value));
  // }

  // // handle policy term selection change
  // // function handlePolicyTermChange(event) {
  // //   setPolicyTerm(parseInt(event.target.value));
  // // }
  // //ENDS//

  function fetchpremiumRate() {
    const rate = data[selectedAge][selectedPlan][payingTerm];
    setpremiumRate(rate);
    setShowTable(true);
  }
  // const yearValue = (value * parseFloat(premiumRate) / 100).toFixed(2);
  // const yearValue = Sum ? (Sum * parseFloat(premiumRate) / 100).toFixed(2) : 0;
  // printing input values
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Middlename, setMiddlename] = useState('');
  const [Age, setAge] = useState('');
  const [Gender, setGender] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Address, setAddress] = useState('');
  const [Sum, setSum] = useState('');
  const [policyTerm, setpolicyTerm] = useState('');
  const [displayValues, setDisplayValues] = useState(true);
  const handleInputChange = (event, setInput) => {
    setInput(event.target.value);
  };

  // for printing pdf
  const handlePrint = () => {
    const input = document.getElementById('print-container');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: [280, 210], // A4 size in mm
      });
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 0);
      pdf.save('Premium_Illustration.pdf');
    });
  }
  // ends here


  // time printing
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  // for check box value printing
  const [value, setValue] = useState('');
  const halfYearly = (value / 2).toFixed(2);
  const quarterly = (value / 4).toFixed(2);
  const monthly = (value / 12).toFixed(2);
  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      if (event.target.value === '100') {
        setValue('100');
      } else if (event.target.value === '500') {
        setValue('500');
      }
    } else {
      setValue('');
    }
  };

  // premium calculations
  const Yearlypremium = (Sum * premiumRate) / 100;
   const halfyearpremium = (Yearlypremium * 10)/100;
   const halfyearpremium1 =(halfyearpremium + Yearlypremium);
   const halfyearpremium2 = (halfyearpremium1)/2;
   const halfyearpremium3 = halfyearpremium2.toFixed(2);

   const quarterlypremium = (Yearlypremium * 12)/100;
   const quarterlypremium1 = (quarterlypremium + Yearlypremium);
   const quarterlypremium2 = (quarterlypremium1)/4;
   const quarterlypremium3 = quarterlypremium2.toFixed(2);


   const monthlypremium = (Yearlypremium * 15)/100;
   const monthlypremium1 = (monthlypremium + Yearlypremium);
   const monthlypremium2 = (monthlypremium1)/12;
   const monthlypremium3 = monthlypremium2.toFixed(2);


  // premium calculations
  const [showTable, setShowTable] = useState(false); //for table
  const tax = (Yearlypremium * 0.05).toFixed(2);
  const halfYearlytax = (tax / 2).toFixed(2);
  const quarterlyYearlytax = (tax / 4).toFixed(2);
  const monthlytax = (tax / 12).toFixed(2);
// Annualized premium calculation
   const two = (Yearlypremium * 2);
   const three = (Yearlypremium * 3);
   const four = (Yearlypremium * 4);
   const five = (Yearlypremium * 5);
   const six = (Yearlypremium * 6);
   const seven = (Yearlypremium * 7);
   const eight = (Yearlypremium * 8);
   const nine = (Yearlypremium * 9);
   const ten = (Yearlypremium * 10);
// Annualized premium calculation ends
 
// Surrender benifit  calculation
   const Stwo = (two * 40) /100;
   const Sthree = (three * 40) /100;
   const Sfour = (four * 40) /100;
   const Sfive = (five * 40) /100;
   const Ssix = (six * 40) /100;
   const Sseven = (seven * 40) /100;
   const Seight = (eight * 40) /100;
   const Snine = (nine * 40) /100;
   const Sten = (ten * 40) /100;
// Surrender benifit  calculation ends
 

  // for total count
  const [totalValue, setTotalValue] = useState(0);
  const [totalValuehalf, setTotalValuehalf] = useState(0);
  const [totalValuequater, setTotalValuequater] = useState(0);
  const [totalValuemonth, setTotalValuemonth] = useState(0);

  useEffect(() => {
    const premiumRateNum = parseFloat(Yearlypremium);
    const valueNum = parseFloat(value);
    const taxNum = parseFloat(tax);
    const total = premiumRateNum + valueNum + taxNum;
    const total1 = total.toFixed(2);
    setTotalValue(total1);

    const premiumRateNum1 = parseFloat(halfyearpremium);
    const valueNum1 = parseFloat(halfYearly);
    const taxNum1 = parseFloat(halfYearlytax);
    const total2 = premiumRateNum1 + valueNum1 + taxNum1;
    const total3 = total2.toFixed(2);
    setTotalValuehalf(total3);

    const premiumRateNum2 = parseFloat(quarterlypremium);
    const valueNum2 = parseFloat(quarterly);
    const taxNum2 = parseFloat(quarterlyYearlytax);
    const total4 = premiumRateNum2 + valueNum2 + taxNum2;
    const total5 = total4.toFixed(2);
    setTotalValuequater(total5);

    const premiumRateNum3 = parseFloat(monthlypremium);
    const valueNum3 = parseFloat(monthly);
    const taxNum3 = parseFloat(monthlytax);
    const total6= premiumRateNum3 + valueNum3 + taxNum3;
    const total7 = total6.toFixed(2);

    setTotalValuemonth(total7);
  }, [
    Yearlypremium,
    value,
    tax,
    halfyearpremium,
    halfYearly,
    halfYearlytax,
    quarterlypremium,
    quarterly,
    quarterlyYearlytax,
    monthlypremium,
    monthly,
    monthlytax,
  ]);


  return (
    <div className='container'>
      {/* <DownloadButton fileName="IL230000003.pdf" /> */}
      {activeTabIndex === 0 && <div className='container mt-5'>
        <div className='container'>
          <Row >
            <Col >
              <Row>
                {/* <Col></Col> */}
                <Col className='tab-active'><FaUserAlt />&nbsp;&nbsp;Basic Details</Col>
                <Col> <h1 className='text-center'> <ImForward3 color="#9e3223" /></h1></Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className='tab-inactive'><FaUserAlt />&nbsp;&nbsp;Select Product</Col>
                <Col> <h1 className='text-center'> <ImForward3 color="#9e3223" /></h1></Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className='tab-inactive'><AiOutlineDollarCircle />&nbsp;&nbsp;Quote</Col>
                <Col> <h1 className='text-center'> <ImForward3 color="#9e3223" /></h1></Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className='tab-inactive'><GrDocumentVerified />&nbsp;&nbsp;Premium</Col>
                <Col></Col>
              </Row>
            </Col>
          </Row>
        
        </div>
        <hr className='tab-bar' />
        <Row style={{ marginTop: '50px' }}>
          <Col>
            <label>First Name</label><br />
            <input type="text" value={Firstname} onChange={(event) => handleInputChange(event, setFirstname)} className='basic-form-input' />
          </Col>
          <Col>
            <label>Middle Name</label><br />
            <input type="text" value={Middlename} onChange={(event) => handleInputChange(event, setMiddlename)} className='basic-form-input' />
          </Col>
          <Col>
            <label>Last Name</label><br />
            <input type="text" value={Lastname} onChange={(event) => handleInputChange(event, setLastname)} className='basic-form-input' />
          </Col>
        </Row>
        <Row>
           {/* <Col>
           <label>D.O.B</label>
           <AgeCalculator />
           </Col> */}
          
          <Col>
          <label>
          Age:
          </label><br/>
          <input type="text" value={selectedAge} className='basic-form-input' onChange={handleAgechange} />
        
          </Col>
          <Col>
            <label>Gender</label><br />
            <select className='basic-form-input' style={{ width: '45%' }} value={Gender} onChange={(event) => handleInputChange(event, setGender)}>
              <option value="">--Select--</option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
            </select>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <label>Mobile</label><br />
            <input type="text" value={Mobile} onChange={(event) => handleInputChange(event, setMobile)} className='basic-form-input' />
          </Col>
          <Col>
            <label>Address</label><br />
            <input type="text" value={Address} onChange={(event) => handleInputChange(event, setAddress)} className='basic-form-input' />
          </Col>
          <Col></Col>
        </Row>

      </div>}
      {activeTabIndex === 1 && <div className='container mt-5'>
      <div className='container'>
          <Row >
            <Col >
              <Row>
                {/* <Col></Col> */}
                <Col className='tab-inactive'><FaUserAlt />&nbsp;&nbsp;Basic Details</Col>
                <Col> <h1 className='text-center'> <ImForward3 color="#9e3223" /></h1></Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className='tab-active'><FaUserAlt />&nbsp;&nbsp;Select Product</Col>
                <Col> <h1 className='text-center'> <ImForward3 color="#9e3223" /></h1></Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className='tab-inactive'><AiOutlineDollarCircle />&nbsp;&nbsp;Quote</Col>
                <Col> <h1 className='text-center'> <ImForward3 color="#9e3223" /></h1></Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className='tab-inactive'><GrDocumentVerified />&nbsp;&nbsp;Premium</Col>
                <Col></Col>
              </Row>
            </Col>
          </Row>
        
        </div>
        <hr className='tab-bar' />

        <Row style={{ marginTop: '50px' }}>
          {/* <Col>
            <label>Select Plan</label><br />
            <select className='basic-form-input' style={{ width: '45%' }} onChange={handlePlanChange}>
              <option value="">--Select--</option>
              <option value="Endowment Plan">Endowment Plan</option>
              <option value="Term Life">Term Life</option>
              <option value="Money Back 15 Years">Money Back 15 Years</option>
              <option value="Money Back 20 Years">Money Back 20 Years</option>
              <option value="Child Assurance">Child Assurance</option>
              <option value="Whole Life">Whole Life</option>
            </select>
          </Col>
          <Col>
            <label>Coverage For</label><br />
            <p className='coverage-text'>Individual Life</p>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <label>Sum Assured</label><br />
            <input type="text" value={Sum} onChange={(event) => handleInputChange(event, setSum)} className='basic-form-input' />
          </Col>
          <Col>
            <label>Paying Term</label><br />
            <select className='basic-form-input' style={{ width: '45%' }} onChange={handlePayingTermChange}>
            <option value="">--Select--</option>
              <option value="10">5 years</option>
              <option value="20">10 years</option>
              <option value="30">15 years</option>
              <option value="30">20 years</option>
              <option value="30">25 years</option>
              <option value="30">30 years</option>
            </select>
          </Col>
          <Col>
            <label>Policy Term</label><br />
            <select className='basic-form-input' style={{ width: '45%' }} value={policyTerm} onChange={(event) => handleInputChange(event, setpolicyTerm)}>
              <option value="">--Select--</option>
              <option value="10">5 years</option>
              <option value="20">10 years</option>
              <option value="30">15 years</option>
              <option value="30">20 years</option>
              <option value="30">25 years</option>
              <option value="30">30 years</option>
              
            </select>
          </Col>
        </Row> */}
         <Col>
            <label>Select Plan</label><br />
            <select className='basic-form-input' style={{ width: '45%' }} onChange={handlePlanChange}>
              <option value="">--Select--</option>
              <option value="Endowment Plan">Endowment Plan</option>
              <option value="Term Life">Term Life</option>
              <option value="Money Back 15 Years">Money Back 15 Years</option>
              <option value="Money Back 20 Years">Money Back 20 Years</option>
              <option value="Child Assurance">Child Assurance</option>
              <option value="Whole Life">Whole Life</option>
            </select>
          </Col>
          <Col>
            <label>Coverage For</label><br />
            <p className='coverage-text'>Individual Life</p>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <label>Sum Assured <span className='text-danger' style={{ fontWeight: '700' }}>*</span></label> <br />
            <input type="text" value={Sum} onChange={(event) => handleInputChange(event, setSum)} className='basic-form-input' />
          </Col>
          <Col>
            <label>Paying Term</label><br />
            <select className='basic-form-input' style={{ width: '45%' }} onChange={handlePayingTermInputChange}>
            <option value="">--Select--</option>
              <option value="5">5 years</option>
              <option value="10">10 years</option>
              <option value="15">15 years</option>
              <option value="20">20 years</option>
              <option value="25">25 years</option>
              <option value="30">30 years</option>
            </select>
          </Col>
          <Col>
            <label>Policy Term</label><br />
            <select className='basic-form-input' style={{ width: '45%' }} value={policyTerm} onChange={(event) => handleInputChange(event, setpolicyTerm)} >
              <option value="">--Select--</option>
              <option value="10">5 years</option>
              <option value="20">10 years</option>
              <option value="30">15 years</option>
              <option value="30">20 years</option>
              <option value="30">25 years</option>
              <option value="30">30 years</option>
              
            </select>
          </Col>
        </Row>
        <Row>
          <p>Additional Riders</p>
          <Col>
          </Col>
          <Col>
          </Col>
        </Row>
        <input type="checkbox" name="checkbox-1"
          value="100" onChange={handleCheckboxChange} />&nbsp;&nbsp;
        <label>Accidental Death Benifit</label><br /><br />
        <input type="checkbox" name="checkbox-2"
          value="500" onChange={handleCheckboxChange} />&nbsp;&nbsp;
        <label>Permanent Total Disability</label><br />
      </div>}
      {activeTabIndex === 2 && <div className='container mt-5'>
      <div className='container'>
          <Row >
            <Col >
              <Row>
                {/* <Col></Col> */}
                <Col className='tab-inactive'><FaUserAlt />&nbsp;&nbsp;Basic Details</Col>
                <Col> <h1 className='text-center'> <ImForward3 color="#9e3223" /></h1></Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className='tab-inactive'><FaUserAlt />&nbsp;&nbsp;Select Product</Col>
                <Col> <h1 className='text-center'> <ImForward3 color="#9e3223" /></h1></Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className='tab-active'><AiOutlineDollarCircle />&nbsp;&nbsp;Quote</Col>
                <Col> <h1 className='text-center'> <ImForward3 color="#9e3223" /></h1></Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className='tab-inactive'><GrDocumentVerified />&nbsp;&nbsp;Premium</Col>
                <Col></Col>
              </Row>
            </Col>
          </Row>
        
        </div>
        <hr className='tab-bar' />
        <table style={{ marginTop: '24px', width: '50%' }} >
          <tr>
            <th colspan="2">Selected values</th>
          </tr>
          <tr>
            <td>Selected Plan</td>
            <td>{selectedPlan}</td>
          </tr>
          <tr>
            <td>Paying Term</td>
            <td>{payingTerm}</td>
          </tr>
          <tr>
            <td>Sum</td>
            <td>{Sum}</td>
          </tr>
          {/* <tr>
            <td>premiumRate</td>
            <td>{premiumRate}</td>
          </tr> */}
          <tr>
            <td>Policy Term</td>
            <td>{displayValues && <span>{policyTerm}years</span>}</td>
          </tr>
        </table>
        <button onClick={fetchpremiumRate} style={{ marginTop: '24px' }} className="btn-back">Calculate Premium</button>
        {showTable && (<table style={{ marginTop: '50px' }} id='print-container'>
          <thead>
            <tr>
              <th></th>
              <th>Yearly</th>
              <th>Half Yearly</th>
              <th>Quarterly</th>
              <th>Monthly</th>
            </tr>
          </thead>
          <tbody>
        
            <tr>
              <td>Life Premium</td>
              <td>{Yearlypremium}</td>
              <td>{halfyearpremium3}</td>
              <td>{quarterlypremium3}</td>
              <td>{monthlypremium3}</td>
            </tr>
            <tr>
              <td>Rider Premium</td>
              <td>{value}</td>
              <td>{halfYearly}</td>
              <td>{quarterly}</td>
              <td>{monthly}</td>
            </tr>
            <tr>
              <td>Value Added Tax</td>
              <td>{tax}</td>
              <td>{halfYearlytax}</td>
              <td>{quarterlyYearlytax}</td>
              <td>{monthlytax}</td>
            </tr>
            <tr>
              <td style={{fontWeight:'bold'}}>Total Premium</td>
              <td style={{fontWeight:'bold'}}>{totalValue}</td>
              <td style={{fontWeight:'bold'}}>{totalValuehalf}</td>
              <td style={{fontWeight:'bold'}}>{totalValuequater}</td>
              <td style={{fontWeight:'bold'}}>{totalValuemonth}</td>
            </tr>
          </tbody>
        </table>
        )}
        <div style={{ marginTop: '50px' }}>
          <button className="btn-back" onClick={handlePrint}>Download</button>
        </div>
      </div>}

      {activeTabIndex === 3 && <div className='container mt-5'>
        <div id='print-container'>
          <div className='main-print'>
            <div className='child-print'>
              < Row>
                <Col>
                  <h2 className='print-logo'><span style={{ color: '#9e3223' }}>Dar </span>AI Takaful</h2>
                  <p className='print-logo-text'>Premium Islamic Insurance</p>
                </Col>
                <Col className='text-center'><h4 className='pdf-heading'><span className='logo-text-border'>Benefit Illustration</span></h4>
                <b style={{fontSize:'18px',marginBottom:'48px'}}>{selectedPlan}</b>
                </Col>
                <Col>
                  <Row>
                    <Col></Col>
                    <Col>
                      <Row className='' style={{ marginRight: 'auto', padding: '0px 12px' }}>
                        <p style={{ float: 'right', marginRight: 'auto' }}>Time: {currentTime.toLocaleTimeString()}</p>
                      </Row>
                      <Row style={{ padding: '0px 12px' }}>
                        <p style={{ float: 'right' }}>Date: {currentTime.toLocaleDateString()}</p>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className='heading' ><h5 className='print-heading'>Basic Details</h5></div>
              <div style={{ padding: '0px 12px' }}>
                <Row style={{ marginTop: '32px' }}>
                  <Col>
                    <p cl><span className='print-text'>First Name &nbsp;:</span> &nbsp;{displayValues && <span>{Firstname}</span>}</p>
                  </Col>
                  <Col>
                    <p> <span className='print-text'>Middle Name &nbsp;:</span>&nbsp;{displayValues && <span>{Middlename}</span>}</p>
                  </Col>
                  <Col>
                    <p><span className='print-text'>Last Name&nbsp;:</span> &nbsp;{displayValues && <span>{Lastname}</span>}</p>
                  </Col>
                </Row>
                <Row style={{ marginTop: '32px' }}>
                  <Col>
                    <p><span className='print-text'>Age &nbsp;: </span>&nbsp;{displayValues && <span>{Age}</span>}</p>
                  </Col>
                  <Col>
                    <p><span className='print-text'>Gender &nbsp;:</span> &nbsp;{displayValues && <span>{Gender}</span>}</p>
                  </Col>
                  <Col>
                    <p><span className='print-text'>Mobile number &nbsp;:</span> &nbsp;{displayValues && <span>{Mobile}</span>}</p>
                  </Col>
                </Row>
              </div>
              <div className='heading' style={{ marginTop: '32px' }}>
                <h5 className='print-heading'>Selected Plan</h5></div>
              <div style={{ padding: '0px 12px' }}>
                <Row style={{ marginTop: '32px' }}>
                  <Col>
                    <p> <span className='print-text'>Selected Plan &nbsp;:</span> &nbsp;<span>{selectedPlan}</span></p>
                  </Col>
                  <Col>
                    <p><span className='print-text'>Coverage For &nbsp;:</span> &nbsp;<span>Individual Life</span></p>
                  </Col>
                  <Col>
                  </Col>
                </Row>
                <Row style={{ marginTop: '32px' }}>
                  <Col>
                    <p><span className='print-text'>Sum Assured &nbsp;:</span>&nbsp;{displayValues && <span>{Sum}</span>}</p>
                  </Col>
                  <Col>
                    <p><span className='print-text'>Paying Term &nbsp;:</span> &nbsp;<span>{payingTerm}&nbsp;Years</span></p>
                  </Col>
                  <Col>
                    <p><span className='print-text'>Policy Term &nbsp;:</span> &nbsp;{displayValues && <span>{policyTerm}years</span>}</p>
                  </Col>
                </Row>
              </div>

             <div style={{marginTop:'32px'}}>
              <b style={{marginBottom:'18px',display:'block'}}>How to read and understand this benefit illustration?</b>

              <p>This benefit illustration is intended to show year-wise premiums payable and benefits under the policy, at two assumed rates of interest i.e., 8% p.a. and 4% p.a</p>

               <p>Some benefits are guaranteed and some benefits are variable with returns based on the future performance of your insurer carrying on life insurance business. If your policy
offers guaranteed benefits then these will be clearly marked 'guaranteed' in the illustration table on this page. If your policy offers variable benefits then the illustrations on this
page will show two different rates of assumed future investment returns, of 8% p.a. and 4% p.a. These assumed rates of return are not guaranteed and they are not the upper
or lower limits of what you might get back, as the value of your policy is dependent on a number of factors including future investment performance</p> 
             </div>
               

              <table  style={{width:'70%',margin:'auto',marginTop:'48px'}}>
    <thead>
      <tr>
        <th>Policy year</th>
        <th>Annualized
premium2
(cumulative)</th>
        <th colspan="3">
          <th style={{textAlign:'center'}}>Guaranteed benefits</th>
          <table>
          <tr  style={{border:'none'}}>
        <th style={{border:'none'}}>Surrender benefit</th>
        <th style={{border:'none'}}>Death benefit</th>
        <th style={{border:'none'}}>Maturity benefit</th>

          </tr>
        </table>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>{Yearlypremium}</td>
        <td>0</td>
        <td>{Sum}</td>
        <td>0</td>
      </tr>
      <tr>
         <td>2</td>
        <td>{two}</td>
        <td>{Stwo}</td>
        <td>{Sum}</td>
        <td>0</td>
      </tr>
       <tr>
         <td>3</td>
        <td>{three}</td>
        <td>{Sthree}</td>
        <td>{Sum}</td>
        <td>0</td>
      </tr>
       <tr>
         <td>4</td>
        <td>{four}</td>
        <td>{Sfour}</td>
        <td>{Sum}</td>
        <td>0</td>
      </tr>
       <tr>
         <td>5</td>
        <td>{five}</td>
        <td>{Sfive}</td>
        <td>{Sum}</td>
        <td>0</td>
      </tr>
       <tr>
         <td>6</td>
        <td>{six}</td>
        <td>{Ssix}</td>
        <td>{Sum}</td>
        <td>0</td>
      </tr>
       <tr>
         <td>7</td>
        <td>{seven}</td>
        <td>{Sseven}</td>
        <td>{Sum}</td>
        <td>0</td>
      </tr>
       <tr>
         <td>8</td>
        <td>{eight}</td>
        <td>{Seight}</td>
        <td>{Sum}</td>
        <td>0</td>
      </tr>
       <tr>
         <td>9</td>
        <td>{nine}</td>
        <td>{Snine}</td>
        <td>{Sum}</td>
        <td>0</td>
      </tr>
      <tr>
         <td>10</td>
        <td>{ten}</td>
        <td>{Sten}</td>
        <td>{Sum}</td>
        <td>{Sum}</td>
      </tr>
      
    </tbody>
  </table>

  <div>
    <b style={{marginTop:'32px',display:'block'}} >Notes:</b>
    <p>The main objective of the illustration is that the client is able to appreciate the features of the products and the flow of the benefit in different circumstances with some level of
quantification</p>
<p>This illustration is applicable to a standard (from medical, life style and occupation point of view) life.</p>
<p>1.It includes rider(s) premiums in respect of all the rider(s) opted by the proposer/policyholder at inception of the policy.
</p>
<p>2.Annualized premium excludes underwriting extra premium, frequency loadings on premiums, the premiums paid towards the riders, if any, and goods & service tax. Refer
sales literature for explanation of terms used in this illustration.</p>
<p>3.In any case, the total death benefit at any time shall not be less than 105% of the total premiums paid (excluding GST, extra premium and rider premiums, if any).
</p>
<p>4.Special surrender value may however be payable, if it is more favourable to the policyholder.
</p>
  </div>
              {/* <Row className='' style={{ marginTop: '48px', padding: '0px 12px' }}>
            <p style={{ float: 'right' }}>Time: {currentTime.toLocaleTimeString()}</p>
          </Row>
          <Row style={{ padding: '0px 12px' }}>
            <p style={{ float: 'right' }}>Date: {currentTime.toLocaleDateString()}</p>
          </Row>  */}
            </div>
          </div>
        </div>
        <button className='print-btn' onClick={handlePrint}>PRINT</button>
      </div>}
      <div style={{ marginTop: '50px', display: 'flex',marginBottom:'32px' }}>
        <button onClick={handleBackClick} className="btn-back">Back</button>
        <button onClick={handleNextClick} className="btn-next">Next</button>
      </div>
    </div>
  );
}
