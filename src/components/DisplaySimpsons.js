// src/components/DisplaySimpsons.js
import React from 'react';

function DisplaySimpsons({ simpson }) {
  return (
    <div className="DisplaySimpsons">
      <img src={simpson.image} alt=" "/>
      <ul>
        <li>{simpson.character}{' '}</li>
        <li>{simpson.quote}</li>
      </ul>
    </div>
  );
};

export default DisplaySimpsons;