import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [sheet1Data, setSheet1Data] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => setSheet1Data(data.Sheet1));
      console.log('data')
  }, []);

  return (
    <ul>
      {sheet1Data.map((plan) => (
        <li key={plan['Plan Number']}>{plan['Plan Name']}</li>
      ))}
    </ul>
  );
}

export default MyComponent;
