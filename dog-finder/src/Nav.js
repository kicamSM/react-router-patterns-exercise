import React from "react";
import { NavLink } from "react-router-dom";


function Nav({dogs}) {

  const links = dogs.map(dog => (
    <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}   style={{ margin: '20px' }}>
      {dog.name}
    </NavLink>
  ));
  return (
    <div className="Nav">
    <nav>
      <NavLink exact to="/dogs"></NavLink>
      {links}
    </nav>
    </div>
  );
}
// end

export default Nav;
