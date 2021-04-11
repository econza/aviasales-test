import './App.css';
import Header from "./components/Header/Header.js";
import FilterBox from "./components/FilterBox/FilterBox";
import {data} from "./tickets";
import TicketsBox from './components/MainBox/MainBox';


function App() {
  console.log(data)
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
