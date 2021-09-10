import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { ClassifyPost } from "./Classify";
import { AppHeader } from "./Navbar";
import { Footer } from "./Footer";
import { Aboutus } from "./About";
import { Error } from "./Error";

function App() {
  return (
    <main>
      <AppHeader />
      <Switch>
        <Route path="/" component={ClassifyPost} exact />
        <Route path="/about" component={Aboutus} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
