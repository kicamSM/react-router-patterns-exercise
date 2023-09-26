import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Colors from ".Colors";


function Routes({dogs}) {
    return (
        <Switch>
    
            {/* <Route exact path="/colors/:color"><FindDog dogs={dogs} /></Route> */}
            <Route exact path = "/colors"><Colors /></Route>
        </Switch>
    )
}

export default Routes