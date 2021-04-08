import logo from './logo.svg';
import logoImg from "./assets/images/Logo.png";
import './App.css';

function App() {
  return (
    <div className="flexContainer">

      <header className="headerWrapper">
        <img src={logoImg}></img>
      </header>

      <div className="mainWrapper">
        <div>Количество пересадок ФИЛЬТР </div>
        <div className="ticketsWrapper">
          <div className="ticketsButtonWrapper">
            <div>САМЫЙ ДЕШЕВЫЙ</div>
            <div>САМЫЙ БЫСТРЫЙ</div>
            <div>ОПТИМАЛЬЫНЙ</div>
          </div>
          <div>
            <div>Билет 1</div>
            <div>Билет 2</div>
            <div>Билет 3</div>
          </div>
          <div>КНОПКА ЕЩЕ</div>
        </div>
      </div>

    </div>
  );
}

export default App;
