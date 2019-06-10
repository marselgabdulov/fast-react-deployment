import React from "react";
import "./App.css";
import FruitsList from "./components/FruitsList/FruitsList";
import FruitsCardsList from "./components/FruitsCardsList/FruitsCardsList";
import PersonsList from "./components/PersonsList/PersonsList";
import SpaceXCapsulesList from "./components/SpaceXCapsulesList/SpaceXCapsulesList";

function App() {
  return (
    <div className="App">
      <h1>Fast React Class. Task 1</h1>
      <FruitsList />
      <FruitsCardsList />
      <h2>Persons</h2>
      <PersonsList />
      <h2>SpaceX Capsules</h2>
      <SpaceXCapsulesList />
    </div>
  );
}

export default App;
