import React, { useState } from 'react';
import Chart from './components/chart';
import TimeframeSelector from './components/timeframe';
import data from './data/sampleData.json';
import './App.css';

function App() {
  const [timeframe, setTimeframe] = useState('All Time');

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };

  return (
    <div className="main-container">
      <TimeframeSelector selectedTimeframe = {timeframe} onTimeframeChange={handleTimeframeChange} />
      <div className="chart-container">
        <Chart data={data} timeframe={timeframe} />
      </div>
    </div>
  );
}

export default App;
