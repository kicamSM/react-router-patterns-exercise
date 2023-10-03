import React from "react";
import { NavLink } from "react-router-dom";

function Nav({colors}) {
    // ! Note you can only display properties of the color because this is a child component.

    // console.log("Nav is running!")
    // console.log("colors", colors)

//   const links = colors.map(color => (
//     <NavLink key={color.color} to={`/colors/${color.color}`}   style={{ margin: '20px' }}>
//       {color.color}
//     </NavLink>
//   ));
//   console.log("links:", links)
  return (
    <div className="Nav">
    <div>Please select a color.</div>
    {/* <nav>
      <NavLink exact to="/colors"></NavLink>
          {links}
    </nav> */}
    </div>
  );
}
// end

export default Nav;
