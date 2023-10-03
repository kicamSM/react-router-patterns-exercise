import React, { createContext, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Colors from "./Colors";
import FindColor from './FindColor'
import NewColorForm from "./NewColorForm";



function Routes() {
    // const [colors, setColors] = useState(['red', 'orange', 'blue']);
    const [colors, setColors] = useState([{red: '#ff0000'}, {orange: '#ffa500' }, {blue:'#0000ff'}]);

    console.log("colors in routes:", colors)
    // const ColorsContext = createContext(colors);

    const addColor  = (color) => {
        console.log('color in addColor:', color)
        let colorValue = color['value'];
        let colorName = color['color']
        console.log('colorName:', colorName)
        let newColor = {[colorName]: colorValue}
        // console.log('newColor', newColor)
        setColors((colors) => [...colors, newColor])
    };

    return (
        <Switch>
            <Route exact path = "/colors"><Colors colors={colors}  setColors={setColors}/></Route>
            <Route exact path="/colors/new"><NewColorForm addColor={addColor} /></Route>
            <Route exact path="/colors/:color"><FindColor colors={colors} /></Route>
        </Switch>
    )
}

export default Routes