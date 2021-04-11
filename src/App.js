import './App.css';
import Header from "./components/Header/Header.js";
import FilterBox from "./components/FilterBox/FilterBox";
import TicketsButton from "./components/TicketsButton/TicketsButton";
import Tickets from "./components/Tickets/Tickets";
import ButtonShowMore from './components/ButtonShowMore/ButtonShowMore';


function App() {
  return (
    <div className="flexContainer">
      <Header />
      <div className="mainWrapper">
        <FilterBox />
        <div className="ticketsWrapper">
          <TicketsButton />
          <Tickets />
          <ButtonShowMore />
        </div>
      </div>
    </div>
  );
}

export default App;
