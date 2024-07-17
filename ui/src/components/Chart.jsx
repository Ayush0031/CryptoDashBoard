import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PopulationChart = () => {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then(response => {
        setPopulationData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching the data', error);
      });
  }, []);

  const chartData = {
    labels: populationData.map(item => item.Year),
    datasets: [
      {
        label: 'Population',
        data: populationData.map(item => item.Population),
        borderColor: 'rgba(42,180,42,255)',
        backgroundColor: 'rgba(42,180,42,255)',
        fill: true,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
          color: 'white',
        },
        ticks: {
          color: 'white',
        },
        grid: {
          color: '#313131',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Population',
          color: 'white',
        },
        ticks: {
          color: 'white',
        },
        grid: {
          color: '#313131',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      labels: {
        color: 'white',
      },
    },
  };

  return (
   
      <div className="chart-wrapper">
        <h6 style={{ color: 'white', textAlign: 'center' }}>Population Of United States Over The Years</h6>
        <hr style={{ backgroundColor: 'white' }} />
        <Line data={chartData} options={options} />
      
    </div>
  );
};

export default PopulationChart;
