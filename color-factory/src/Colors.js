import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import NewColorForm from "./NewColorForm";
import { v4 as uuid } from "uuid";

function Colors({colors, setColors}) {
    const [showForm, setShowForm] = useState(false);


    // !use this when destructuring { colors, setColors }
    const links = colors.map(color => (
        <NavLink key={color} to={`/colors/${color}`}   style={{ margin: '20px' }}>
          {color}
        </NavLink>
    ))

    const addColor  = (color) => {
        console.log('color in addColor:', color)
        let newColor = color['value'];
        console.log('newColor', newColor)
        setColors((colors) => [...colors, newColor])
    };

    console.log('colors!!!!', colors)

  return (
    <div>
        {/* <div>
            <NewColorForm addColor={addColor}/>
        </div> */}
        <button onClick={() => setShowForm(!showForm)}>Color Form</button>
        {showForm && <NewColorForm addColor={addColor} />}
        <div>
            {links}
        <h1>Colors!</h1>
        <h4>Here are the current colors.</h4>
        <p>Click on links above to see the details of each color.</p>
        </div>
    </div>
  );
}

export default Colors;

