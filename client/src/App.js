import { useState } from 'react';
import './App.css';
import { getRiskData } from './api';
import { useQuery } from 'react-query'


function App() {
  const [rangeValue, setRangeValue] = useState(0) 

  const getRiskData = useQuery(
    ['risk-data', rangeValue],
    () => getRiskData(rangeValue)
  )

  return (
    <div>
      <header>
        <nav>
          <div className='logo'>
            <h3>Robo-Advisor</h3>
          </div>
          <ul className='menu'>
            <li>
              <button>Login</button>
            </li>
            <li>
              <button>Get Started</button>
            </li>
          </ul>
        </nav>
        <div className='hero'>
          <h1 className='hero-title'>Invest and Grow with Confidence</h1>   
          <p className='hero-body'>
            Welcome to Robo-advisor, where investing is made simple, smart, and tailored just for you. Experience the future of wealth management with our intelligent Robo-advisor that puts your financial goals at the forefront. Take control of your investments with automated portfolios, personalized strategies, and low fees.
          </p>
          <a className='hero-link' href='#risk-tolerance'>Explore How It Works</a>
        </div>
      </header>
      <main>
        <div className='risk-calculator-wrapper'>
          <h3 className='risk-calculator-wrapper-title'>Find out your risk tolerance</h3>
          <input
            type='range'
            max={100}
            min={0}
            step={10}
            value={rangeValue}
            onChange={(e)=>setRangeValue(e.target.value)}
          />
          <div className='risk-tolerance-results'>
            <h4>Your risk score is {rangeValue}</h4>
            <div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
