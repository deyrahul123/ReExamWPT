import React from "react";
import { Route, Switch } from "react-router";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="Gallery" component={Gallery} />
      </Switch>
      <About />
      <Contact />
    </>
  );
};

export default App;
