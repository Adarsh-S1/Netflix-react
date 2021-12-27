import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Signin from "./Components/Signin/Signin";
import Payment from "./Components/Payment/Payment";
import Prepayment from "./Components/Prepayment/Prepayment";
import Userhome from "./Components/Userhome/Userhome";
import Watchmovie from "./Components/Watchmovie/Watchmovie";

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
        <Route exact path="/home">
          <Userhome></Userhome>
        </Route>
        <Route exact path="/watchmovie">
          <Watchmovie/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
