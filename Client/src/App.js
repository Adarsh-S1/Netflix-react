import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Signin from "./Components/Signin/Signin";
import Payment from "./Components/Payment/Payment";
import Prepayment from "./Components/Prepayment/Prepayment";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Signin />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
        <Route exact path="/prepayment">
          <Prepayment></Prepayment>
        </Route>
      </Router>
    </div>
  );
}

export default App;
