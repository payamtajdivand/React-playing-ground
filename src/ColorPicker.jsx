import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="color-container">
      <h2>Color Picker</h2>
      <div className="color-selected" style={{ backgroundColor: color }}>
        Selected Color:
        <br /> {color}
      </div>
      <label className="color-text">Select a color:</label>
      <br />
      <input
        className="color-input"
        type="color"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
}
export default ColorPicker;
