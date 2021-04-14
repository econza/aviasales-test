import * as React from 'react'
import './App.css';
import Header from "./components/Header/Header.js";
import FilterBox from "./components/FilterBox/FilterBox";
import TicketsBox from './components/TicketsBox/TicketsBox';
import { useSelector } from "react-redux";


function App() {
  return (
    <div className="flexContainer">
      <Header />
      <div className="mainWrapper">
        <FilterBox />
        <TicketsBox />
      </div>
    </div>
  );
}

export default App;
