import React, { createContext, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Colors from "./Colors";
import FindColor from './FindColor'



function Routes() {
    const [colors, setColors] = useState(['red', 'orange', 'blue']);
    // const [colors, setColors] = useState([{red: '#ff0000'}, {orange: '#ffa500' }, {blue:'#0000ff'}]);

    console.log("colors in routes:", colors)
    // const ColorsContext = createContext(colors);

    return (
        <Switch>
            <Route exact path = "/colors"><Colors colors={colors}  setColors={setColors}/></Route>
            <Route exact path="/colors/:color"><FindColor colors={colors} /></Route>

        </Switch>
    )
}

export default Routes