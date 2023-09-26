import React from "react";
import { NavLink } from "react-router-dom";

function Nav({colors}) {
    console.log("Nav is running!")
    console.log("colors", colors)

  const links = colors.map(color => (
    <NavLink key={color.color} to={`/colors/${color.color}`}   style={{ margin: '20px' }}>
      {color}
    </NavLink>
  ));
  console.log("links:", links)
  return (
    <div className="Nav">
    <nav>
      <NavLink exact to="/colors">this</NavLink>

          {/* {[links]} */}
    </nav>
    <div>Hello!!!!!</div>
    </div>
  );
}
// end

export default Nav;
