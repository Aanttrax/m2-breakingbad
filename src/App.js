import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Characters from "./components/characters/Characters";
import CharacterDetails from "./components/characterDetails/CharacterDetail";
import Episodes from "./components/episodes/Episodes"

import "./App.css";

function App() {
  return (
  <BrowserRouter>
    <Route path= "/" component = {NavBar}></Route>
    <Route exact path="/" component = {Home}></Route>
    <Route path = "/characters/:id" component = {CharacterDetails}></Route>
    <Route path = "/characters" component = {Characters}></Route>
    <Route path = "/episodes" component = {Episodes}></Route>
  </BrowserRouter>
  );
}
export default App;
