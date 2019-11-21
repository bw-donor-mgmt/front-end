import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import DonorList from "./Components/Donor/DonorList";
import DonationList from "./Components/Donations/DonationList";
import CampaignList from "./Components/Campaign/CampaignList";
import FullDonorList from "./Components/Donor/FullDonorList";
import PrivateRoute from "./Routes/PrivateRoute";

import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const WrapperDiv = styled.div`
  h1 {
    color: steelblue;
    padding-top: 30px;
    margin-bottom: 20px;
  }
  h3 {
    color: steelblue;
    padding-top: 30px;
    margin-bottom: 20px;
  }
  nav {
    padding-bottom: 30px;
    background-color: khaki;
    text-decoration: none;
  }
  a {
    margin: 20px;
    text-decoration: none;
    color: steelblue;
    font-size: 25px;
    border-radius: 3px;
  }
  a:hover {
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
  }
  .card {
    margin-top: 20px;
  }
  input {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 5px;
    margin-right: 5px;
  }
  form {
    max-width: 600px;
    margin: auto;
  }
  button:hover {
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
  }
`;

function App() {
  return (
    <WrapperDiv>
      <div className="App">
        <header className="App-header"></header>
        <Route exact path="/" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <PrivateRoute exact path="/Homepage" component={Homepage} />
        <PrivateRoute exact path="/Donors" component={FullDonorList} />
        <PrivateRoute exact path="/charity/:id" component={CampaignList} />
        <PrivateRoute exact path="/charity/:id/donor" component={DonorList} />
        <PrivateRoute
          path="/charity/:id/donor/:donorId"
          component={DonationList}
        />
      </div>
    </WrapperDiv>
  );
}

export default App;
