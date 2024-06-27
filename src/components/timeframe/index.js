import "./index.css"


const Timeframe = ({selectedTimeframe, onTimeframeChange}) => {
  const timeframes = ["Last Week", "Last Month", "Last Year", "All Time"];

  return (
    <div className="timeframe-container">
      <label htmlFor="TimeFrame" className="timeframe-label">Time Frame :{" "}</label>

      <select
        id="TimeFrame"
        className="timeframe-selector"
        value={selectedTimeframe}
        onChange={(event) => onTimeframeChange(event.target.value)}
      >
        {timeframes.map((timeframe) => (
          <option value={timeframe} key={timeframe} className="timeframe">
            {timeframe}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Timeframe;