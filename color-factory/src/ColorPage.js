import React from "react";
import './ColorPage.css';


function ColorPage({ color, colorValue }) {
  console.log('routes --> findColors --> colorsPage')
  console.log('color in colorPage:', color)
  console.log('colorValue in colorPage:', colorValue)


  return (
    <div className="ColorPage" style={{backgroundColor: colorValue}}>
      <h1>The chosen color is { color }!</h1>
      <h3>Isn't it beatiful?</h3>
    </div>
  )}

  export default ColorPage