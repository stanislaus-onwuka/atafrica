import { useState } from 'react';
import './App.css';
import { getRiskData } from './api';
import { useQuery } from 'react-query'
import DonutValue from './components/donut-value';


function App() {
  const [rangeValue, setRangeValue] = useState(0) 

  // const mockData = {
  //   risk_score: 0,
  //   nigerian_stocks: 18,
  //   foreign_stocks:4,
  //   tech_stocks: 2,
  //   emerging_stocks: 7,
  //   nigerian_bonds: 35,
  //   foreign_bonds: 15,
  //   commodities: 7,
  //   real_estate: 12,
  //   t_bills: 0,
  //   alternative: 0
  // }

  const getRiskDataValue = useQuery(
    ['risk-data', rangeValue],
    () => getRiskData(rangeValue)
  )

  const renderView = () => {
    if (getRiskDataValue.isLoading || getRiskDataValue.isFetching) {
      return <div>Loading...</div>
    }

    if (getRiskDataValue.isError) {
      return (
        <div>
          <h3>An error occured</h3>
          <button onClick={getRiskDataValue.refetch}>Refresh</button>
        </div>
      )
    }

    if (getRiskDataValue.isSuccess) {
      if (getRiskDataValue.data?.data?.risk) {
        return (
          <div className='risk-breakdown-wrapper'>
            {
                Object.entries(getRiskDataValue.data?.data?.risk).map(
                  ([k, v]) => {
                    if (k !== 'risk_score' && k !== '_id') {
                      return <DonutValue key={k} valueKey={k} value={v} />
                    }
                    return null
                  }
                )
            }
          </div>
        )
      }
    }
  }

  return (
    <div className='container'>
      <header>
        <nav>
          <div className='logo'>
            <h3>Robo-Advisor</h3>
          </div>
          <ul className='menu'>
            <li className='menu-item-wrapper'>
              <button className='menu-item bordered'>Login</button>
            </li>
            <li className='menu-item-wrapper'>
              <button className='menu-item'>Get Started</button>
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
        <div id='risk-tolerance' className='risk-calculator-wrapper'>
          <h3 className='risk-calculator-wrapper-title'>Find out your risk tolerance</h3>
          <div className='slider-wrapper'>
            <h3 className='min-risk'>0</h3>
            <input
              type='range'
              max={100}
              min={0}
              step={10}
              value={rangeValue}
              onChange={(e)=>setRangeValue(e.target.value)}
            />
            <h3 className='max-risk'>10</h3>
          </div>

          <div className='risk-tolerance-results'>
            <h4 className='risk-tolerance-result-value'>Your risk score is {rangeValue/10}</h4>
            <div>
              { renderView() }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
