import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Style.css'

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState(null);
  const [age, setAge] = useState(null);

  const handleDateChange = (date) => {
    setBirthDate(date);

    const today = new Date();
    const birthYear = date.getFullYear();
    const birthMonth = date.getMonth();
    const birthDay = date.getDate();

    const ageYear = today.getFullYear() - birthYear;
    const ageMonth = today.getMonth() - birthMonth;
    const ageDay = today.getDate() - birthDay;

    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      setAge(ageYear - 1);
    } else if (ageMonth >= 6) {
      setAge(ageYear + 1);
    } else {
      setAge(ageYear);
    }
  };

  return (
    <div>
      <DatePicker
        selected={birthDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="D.O.B"
        className='basic-form-input'
      />
      {age !== null && <p>Your age is {age} years</p>}
    </div>
  );
}

export default AgeCalculator;
