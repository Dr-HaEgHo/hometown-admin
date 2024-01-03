'use client'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataChart = {
    labels: [],
    datasets: [
        {
            label: 'value: ',
            data: [12, 19],
            backgroundColor: [
                '#36BB2A',
                '#596AFF',
                
            ],
            borderColor: [
                '#36BB2A',
                '#596AFF',
                
            ],
            borderWidth: 1,
        },
    ],
};


const Chart = () => {
  return (
      <Doughnut
          data={dataChart}
      />
  )
}

export default Chart