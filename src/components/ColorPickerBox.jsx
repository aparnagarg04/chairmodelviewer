import React from 'react';
import './ColorPickerBox.css';

const ColorPickerBox = () => {
  return (
    <div className="blur-box">
      <div className="color-picker">
        <div className="color-circle"></div>
        <input type="color" className="color-input" />
      </div>
      <button className="see-more-button">See More </button>
    </div>
  );
};

export default ColorPickerBox;
