import React, { useState } from "react";

const  ColourSelect = () => {
    const colours = ["Blue", "Pink", "Purple", "Yellow", "Orange"];    
    const [colourSelector, setColourSelector] = useState("");
    const handleColourChange = (colours) => {
        setColourSelector(colours);
      };
    return (
        <div style={{backgroundColor:colourSelector}}>
        {colours.map(c => (
            <button
                        key={c}
                        style={{ backgroundColor: c }}
                        onClick={() => handleColourChange(c)}
                    >
                        {c}
                    </button>
        ))}
            <h3>Chosse your background colour:</h3>
            
        </div>);
    }

export default ColourSelect;