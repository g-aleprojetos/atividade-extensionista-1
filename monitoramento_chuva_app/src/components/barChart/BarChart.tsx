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
import {Bar} from 'react-chartjs-2';
import * as S from './BarChart.styles';

export type Props = {
  item: number;
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarChart = ({item}: Props) => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Dataset',
      },
      scales: {
        x: {
          grid: {
            offset: true,
          },
        },
      },
    },
  };

  const labels = ['45'];
  const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        barPercentage: 0.1,
        borderColor: 'blue',
        borderWidth: 1,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
