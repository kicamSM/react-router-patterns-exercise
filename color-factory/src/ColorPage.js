import React from "react";
import './ColorPage.css';


function ColorPage({ color }) {
  console.log('routes --> findColors --> colorsPage')
  console.log('color in ColorPage:', color)


  return (
    <div className="ColorPage" style={{backgroundColor: color}}>
      <h1>The chosen color is { color }!</h1>
      <h3>Isn't it beatiful?</h3>
    </div>
  )}

  export default ColorPage