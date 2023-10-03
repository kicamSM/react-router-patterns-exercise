import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import NewColorForm from "./NewColorForm";
import { v4 as uuid } from "uuid";

function Colors({colors, setColors, state}) {

    // const links = state?.colors || colors;
    console.log('state in colors:', state)

    const [showForm, setShowForm] = useState(false);


    console.log('colors in Colors:', colors)
    // !use this when destructuring { colors, setColors }
    // const links = colors.map(color => (
    //     <NavLink key={color} to={`/colors/${color}`}   style={{ margin: '20px' }}>
    //       {color}
    //     </NavLink>
    // ))

    // ! use this for colors [{red: '#ff0000'}, {orange: '#ffa500' }, {blue:'#0000ff'}]
    const links = colors.map((color) => {
        // Get the color name.
        const colorName = Object.keys(color)[0];
        console.log('colorName:', colorName)
        // Return a NavLink component with the color name as the link text.
        return (
          <NavLink key={colorName} to={`/colors/${colorName}`} style={{ margin: '20px' }}>
            {colorName}
          </NavLink>
        );
      });

    const addColor  = (color) => {
        console.log('color in addColor:', color)
        let colorValue = color['value'];
        let colorName = color['color']
        console.log('colorName:', colorName)
        let newColor = {[colorName]: colorValue}
        // console.log('newColor', newColor)
        setColors((colors) => [...colors, newColor])
    };

    console.log('colors in Colors!!!!', colors)

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

