import React, { useState } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import Colors from './Colors'
import ColorPage from './ColorPage'

function FindColor({colors}) {
    // console.log('findColor runs after Routes')
    // console.log('***!!!!colors*** in findColor:', colors)
    const {color} = useParams();
    console.log('color:', color)
    let currentColor; 
    let colorValue;

if (color) {
    colors.forEach(function(colorObj) {

        if(color === Object.keys(colorObj)[0]) {
            colorValue = Object.values(colorObj)[0];
            // console.log('colorValue', colorValue)
            currentColor = color;
        }
        console.log('after first if statement is running ')
    
    console.log('!!!!!currentColor:', currentColor)

    })


    if (currentColor) {
        return <ColorPage color={color} colorValue={colorValue} />;
      } else {
        return <Redirect to="/colors" />;
      }
    }
}

export default FindColor;