import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

import zoomPlugin from "chartjs-plugin-zoom";

import "./index.css";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin,
  Filler
);

const filterDataByTimeframe = (data, timeframe) => {
  const now = new Date();
  let filteredData;

  switch (timeframe) {
    case "Last Week":
      const lastWeek = new Date(now.setDate(now.getDate() - 7));
      filteredData = data.filter(entry => (new Date(entry.time) >= lastWeek));
      break;
    case "Last Month":
      const lastMonth = new Date(now.setMonth(now.getMonth() - 1));
      filteredData = data.filter(entry => new Date(entry.time) >= lastMonth);
      break;
    case "Last Year":
      const lastYear = new Date(now.setFullYear(now.getFullYear() - 1));
      filteredData = data.filter(entry => new Date(entry.time) >= lastYear);
      break;
    case "All Time":
    default:
      filteredData = data;
  }

  return filteredData;
};



const formatDataForChart = (filterDataByTimeframe) => {
  return {
    labels: filterDataByTimeframe.map(entry => new Date(entry.time).toLocaleDateString()),
    datasets: [
      {
        label: 'Views',
        data: filterDataByTimeframe.map(entry => entry.views),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true
      },
      {
        label: 'Likes',
        data: filterDataByTimeframe.map(entry => entry.likes),
        borderColor: 'rgba(153,102,255,1)',
        backgroundColor: 'rgba(153,102,255,0.2)',
        fill: true
      }
    ]
  };
};


const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2, 
      borderColor: 'rgba(75,192,192,1)',
      fill: true,
    },
    point: {
      radius: 4,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,1)',
    },
  },
  plugins: {
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true
        },
        mode: 'x',
      }
    },
    tooltip: {
      callbacks: {
        label: function(tooltipItem) {
          return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
        }
      }
    },
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'YouTube Video Analytics',
      font: {
        size: 24
    }
    },
  }
};


const Chart = ({ data, timeframe }) => {
  const filterData = filterDataByTimeframe(data, timeframe)

  return (
    <div className='chart-container'>
      <Line data={formatDataForChart(filterData)} options={options} />
    </div>
  );
}

export default Chart