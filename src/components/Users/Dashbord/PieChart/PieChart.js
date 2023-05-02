import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import classes from './PieChart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = props => {
  const [formData, setFormData] = useState({
    issue: 12,
    noIssue: 19,
    department: 'الموارد البشرية',
  });
  const data = {
    labels: ['لا يوجد', 'يوجد'],
    datasets: [
      {
        label: 'عدد المدارس ',
        data: [formData.noIssue, formData.issue],
        backgroundColor: ['#182938', '#617586'],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={classes.container}>
      <h5>سلبيات قسم {formData.department} </h5>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
