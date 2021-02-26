import './App.css';
import logo from './logo512.png'
import PriceCard from './components/PriceCard';
import axios from 'axios';
import { useState, useEffect } from 'react';


const App = () => {
  const [ticker, setTicker] = useState({
    low: 'Loading...',
    high: 'Loading...',
    last: 'Loading...',
  })

  useEffect(() => {
    async function getDogecoinPrice() {
      const { data } = await axios.get(
        'https://doge-coin.herokuapp.com/'
      );
      setTicker(data.ticker);
    }
    getDogecoinPrice();
    const interval = setInterval(() => getDogecoinPrice(), 10000);
    console.log(interval)
    return () => {
      clearInterval(interval);
      console.log('After clear' + interval)
    };

  }, [])

  return(
    <div className="app">
      <img src={logo} width={150} height={150} alt="Dogecoin Logo" />
      <h1 className="title">Live Dogecoin Price</h1>
      <h5 className="subtitle">Dogecoin To The Moon 🚀 🌕</h5>
      <div className="prices-container">
        <PriceCard type="low" price={ticker.low} />
        <PriceCard type="high" price={ticker.high} />
        <PriceCard type="current" price={ticker.last} />
      </div>
      <p>
        Dogecoin price updated every 10 seconds from{' '}
        <a href="https://wazirx.com/">WazirX API</a>
      </p>

  </div>
  ) 
};

export default App;