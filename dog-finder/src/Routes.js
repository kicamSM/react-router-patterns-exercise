import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dogs from "./Dogs";
import DogInformation from "./DogInformation";
import FindDog from "./findDog";
// import Contact from "./Contact";
// import BlogHome from "./BlogHome";
// import Post from "./Post";

function Routes({dogs}) {
    return (
        <Switch>
    
            <Route exact path="/dogs/:name"><FindDog dogs={dogs} /></Route>
            <Route exact path = "/dogs"><Dogs /></Route>
        </Switch>
    )
}

export default Routes;
