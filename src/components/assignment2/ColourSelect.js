import React, { useState } from "react";


const  ColourSelect = ({colours}) {
    const colours = ["Blue", "Pink", "Purple", "Yellow", "Orange"];    
    const [colourSelector, setColourSelector] = useState("");
    const handlecoloursLength = () => {
        setColourSelector(colours.length);
      };
    return (
        <div>
            <h3>Chosse your background colour:</h3>
            <button onClick={Style={backgroundColor: "blue"}}>Blue</button>
            <button onClick={Style={backgroundColor: "Pink"}}>Pink</button>
            <button onClick={Style={backgroundColor: "Purple"}}>Purple</button>
            <button onClick={Style={backgroundColor: "Yellow"}}>Yellow</button>
            <button onClick={Style={backgroundColor: "Orange"}}>Orange</button>            
        </div>);
    }

export default ColourSelect;