import React, { useState, useContext } from "react";
import { loginContext } from "../App";
import ProfileCard from "../components/ProfileCard";
import TemperatureCard from "../components/TemperatureCard";

const Dashboard = () => {
  const { state, dispatch } = useContext(loginContext);

  return (
    <>
      <h1>Welcome to Healhub Dashboard</h1>
      <hr />
      <ProfileCard />
    </>
  );
};

export default Dashboard;
