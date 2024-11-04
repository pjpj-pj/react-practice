import React, { useState } from "react";

export default function ColorPicker() {

    const [color, setColorPicker] = useState("#0000");

    function handleColorChange(event) {
        setColorPicker(event.target.value);
    }

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-input" style={{background: color}}>
                <label>Set a color: <b>{color}</b></label>
                <input type="color" onChange={handleColorChange}/>
            </div>
        </div>
    );
}

