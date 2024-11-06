import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DataGraph = ({ products = [] }) => {
  const groupedData = products.reduce((acc, product) => {
    if (acc[product.category]) {
      acc[product.category] += product.stockQuantity;
    } else {
      acc[product.category] = product.stockQuantity;
    }
    return acc;
  }, {});

  const labels = Object.keys(groupedData);
  const dataValues = Object.values(groupedData);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Total Stock Quantity',
        data: dataValues,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Total Stock Quantity by Category' },
    },
    scales: {
      x: { type: 'category', title: { display: true, text: 'Category' } },
      y: { beginAtZero: true, title: { display: true, text: 'Stock Quantity' } },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
      <canvas data-testid="data-graph" />
    </div>
  );
};

export default DataGraph;
