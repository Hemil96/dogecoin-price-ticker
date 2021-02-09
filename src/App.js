import './App.css';
import logo from './logo512.png'
import PriceCard from './components/PriceCard';


const App = () => {
  return(
    <div className="app">
      <img src={logo} width={150} height={150} alt="Dogecoin Logo" />
      <h1 className="title">Live Dogecoin Price</h1>
      <h5 className="subtitle">Dogecoin To The Moon 🚀🌕</h5>
      <div className="prices-container">
        <PriceCard type="low" price={100} />
        <PriceCard type="high" price={200} />
        <PriceCard type="current" price={150} />
      </div>
  </div>
  ) 
};

export default App;