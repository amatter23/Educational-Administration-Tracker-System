import React, { useState } from 'react';
import classes from './VerticalBarChart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';

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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const dataSet1 = [30, 20, 10, 10, 10, 10, 10];
const dataSet2 = [30, 60, 10, 10, 80, 10, 100];

export const data = {
  labels,
  datasets: [
    {
      label: 'يوجد مشكله',
      data: labels.map((label, index) => dataSet1[index]),
      backgroundColor: '#182938',
    },
    {
      label: 'لا يوجد مشكله',
      data: labels.map((label, index) => dataSet2[index]),
      backgroundColor: '#617586',
    },
  ],
};
const VerticalBarChart = props => {
  const [formData, setFormData] = useState({
    issue: 12,
    noIssue: 19,
    department: 'الموارد البشرية',
  });

  return (
    <div className={classes.container}>
      <h5>سلبيات قسم {formData.department} </h5>
      <Bar options={options} data={data} className={classes.datasets} />
    </div>
  );
};

export default VerticalBarChart;
