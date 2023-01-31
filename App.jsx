
import { css } from "styled-components";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IPhone14Pro1 from "./components/IPhone14Pro1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|iphone-14-pro-1)">
          <IPhone14Pro1 {...iPhone14Pro1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const iPhone14Pro1Data = {
    overlapGroup: "/img/rectangle.png",
    toiAussiGenereUnFreshCompliment: <React.Fragment>Toi aussi genere<br />un fresh compliment</React.Fragment>,
    surQuelSujet: "Sur quel sujet ?",
    dansLeStyleDeQuelArtiste1: "Dans le style de quel artiste ?",
    dansLeStyleDeQuelArtiste2: "Dans le style de quel artiste ?",
    gnrer: "générer",
    compliment1: "Compliment 1",
    compliment2: "Compliment 2",
    compliment3: "Compliment 3",
};

