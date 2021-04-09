
import logoImg from "./assets/images/Logo.png";
import S7Logo from "./assets/images/S7Logo.png";
import './App.css';

function App() {
  return (
    <div className="flexContainer">

      <header className="headerWrapper">
        <img src={logoImg} alt="logo"></img>
      </header>

      <div className="mainWrapper">
        <div className="filterBox">
          <div className="filterName">Количество пересадок </div>
          <div> 1) ТУТ РАБОТА С ЧЕКБОКСОМ </div>
          <div> 2) ТУТ РАБОТА С ЧЕКБОКСОМ </div>
          <div> 3) ТУТ РАБОТА С ЧЕКБОКСОМ </div>
        </div>
        <div className="ticketsWrapper">
          <div className="ticketsButtonWrapper">
            <div>самый дешевый</div>
            <div>самый быстрый</div>
            <div>оптимальный</div>
          </div>

          <div className="ticketContainer">
            <div className="price">13400</div>
            <img src={S7Logo} alt="S7Logo" className="S7Logo"></img>
            <div className="sideItems">
              <div className="item">mow-rnd</div>
              <div className="item">в пути</div>
              <div className="item">1 пересадки</div>
            </div>
            <div className="sideItems2">
              <div className="item">10:30-11:45</div>
              <div className="item">1ч 20м</div>
              <div className="item"> MOS, RND</div>
            </div>
            <div className="sideItems">
              <div className="item">mow-rnd</div>
              <div className="item">в пути</div>
              <div className="item">1 пересадки</div>
            </div>
            <div className="sideItems2">
              <div className="item">10:30-11:45</div>
              <div className="item">1ч 20м</div>
              <div className="item"> MOS, RND</div>
            </div>

          </div>
          <div className="ticketContainer">
            <div>Билет 2</div>
          </div>
          <div className="ticketContainer">
            <div>Билет 3</div>
          </div>
          <div className="ticketContainer">
            <div>Билет 4</div>
          </div>
          <div className="ticketContainer">
            <div>Билет 5</div>
          </div>


          <button className="buttonShowMore">показать еще 5 билетов!</button>
        </div>
      </div>

    </div>
  );
}

export default App;
