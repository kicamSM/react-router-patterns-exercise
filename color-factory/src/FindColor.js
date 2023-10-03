import React from 'react';
import { useParams } from 'react-router-dom';
// import DogInformation from './DogInformation';
import Colors from './Colors'
import ColorPage from './ColorPage'

function FindColor({colors}) {
    console.log('findColor runs after Routes')
    console.log('***!!!!colors*** in findColor:', colors)

    // console.log('***colors*** in type of findColor:', typeof colors);
    // array will return tyoeof obect 

  const {color} = useParams();

//   if(!colors.includes(color)) {
//     return 
//   }

  if (color) {

    // console.log("color in findColor", color)

    // const currentColor = colors.find(
    //   color => color.toLowerCase() === color.toLowerCase()
    // console.log('typeOf("colors"):', typeof(colors))
    // console.log('colors??????', colors[0])
    const currentColor = colors.includes(color);

    // console.log('!!!!!! currentColor:', currentColor)

    // );
    // const currentColor = colors.map((color) => {
    //     if (colors.includes(color)) {
    //          console.log('!!!!!color:', color)
    //       return color;}})

    // console.log("!!!!currentColor", currentColor)
    // map functions console.log() object then you can console.log new changed before returning to make it correct. implicit return dont get tot see what you are retrning do an explicit return.

    
    
    if(currentColor === false) {
        return <Colors />
    }
    return <ColorPage color={color} />;
  }
  
  return null;
}

export default FindColor;