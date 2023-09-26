import React from "react";
import { NavLink } from "react-router-dom";
import './DogInformation.css'



function DogInformation({ dog }) {
  console.log('Dog information is running!!!')
  console.log('dog:', dog)
  let facts = dog.facts

  return (
    <div>
      <h1>{ dog.name }</h1>
      <div>
        <img className="DogInformation-img" src={dog.src}></img>
      </div>
      <h3>Age: { dog.age }</h3>
      <ul>
        {facts.map(fact => (
          <p key={fact} className="DogInformation-p" >
            { fact }
          </p>
        ))}
      </ul>

    </div>
  )
  // return (
  //   <div>
  //     <h1>Welcome to {dogs}'s page!</h1>
  //     <p>Here's what's been on our mind lately.</p>
  //     <ul>
  //       {dogs.map(dog => (
  //         <li key={dog}>
  //           <NavLink to={`/dogs/${dogs}`}>{dogs}</NavLink>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  // return (
  //   <div>
  //     <h1>Welcome to {dogs}'s page!</h1>
  //     <p>Here's what's been on our mind lately.</p>
  //     <ul>
  //       {dogs.map((dog) => (
  //         <li key={dog}>
  //           <NavLink to={`/dogs/${dog}`}>{dog}</NavLink>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  return (
    <h1>This is the dog information</h1>
  )
}

export default DogInformation;
