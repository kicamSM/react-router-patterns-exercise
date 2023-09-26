import React from 'react';
import { useParams } from 'react-router-dom';
import DogInformation from './DogInformation';
import Dogs from './Dogs'

function FindDog({dogs}) {

  const {name} = useParams();

  if (name) {
    const currentDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    if(currentDog === undefined) {
        return <Dogs />
    }
    return <DogInformation dog={currentDog} />;
  }
  
  return null;
}

export default FindDog;