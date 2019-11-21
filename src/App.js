import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import DonorList from "./Components/Donor/DonorList";
import DonationList from "./Components/Donations/DonationList";
import CampaignList from "./Components/Campaign/CampaignList";
import PrivateRoute from "./Routes/PrivateRoute"

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Route exact path="/" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <PrivateRoute exact path="/Homepage" component={Homepage} />
      <PrivateRoute exact path="/charity/:id" component={CampaignList} />
      <PrivateRoute exact path="/charity/:id/donor" component={DonorList} />
      <PrivateRoute path="/charity/:id/donor/:donorId" component={DonationList} />
    </div>
  );
}

export default App;
