import React, { useState } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import Colors from './Colors'
import ColorPage from './ColorPage'

function FindColor({colors}) {
    const [stateColors, setStateColors] = useState(colors);
    console.log('findColor runs after Routes')
    console.log('***!!!!colors*** in findColor:', colors)
    const history = useHistory()
    const {color} = useParams();
    console.log('color:', color)
    let currentColor; 
    let colorValue;

if (color) {
// if (color && colors.includes(color)) {
    colors.forEach(function(colorObj) {
    console.log('colorObj', colorObj)
    console.log('Object.keys(colorObj)[0]:', Object.keys(colorObj)[0])

        if(color === Object.keys(colorObj)[0]) {
            console.log('if color === Object.keys(colorObj)[0]')
            console.log('YESSSSS!!!!')
            colorValue = Object.values(colorObj)[0];
            console.log('colorValue', colorValue)
            currentColor = color;
        }
        console.log('after first if statement is running ')
    
    console.log('!!!!!currentColor:', currentColor)

    })


    if (currentColor) {
        return <ColorPage color={color} colorValue={colorValue} />;
      } else {
        // return <Redirect to="/colors" />;
        // return <Colors colors={colors}/>\
        // const navigate = useNavigate();
        // navigate('/colors', { state: { colors } });
        // return null;
        // history.push('/colors')
        return

      }
    }
}



//     return <ColorPage color={color} colorValue={colorValue} />;
//   }
  
//   return null;
// }
// }
export default FindColor;