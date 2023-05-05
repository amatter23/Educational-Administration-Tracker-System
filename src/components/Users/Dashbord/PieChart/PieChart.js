import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import classes from './PieChart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = props => {
  const { t } = useTranslation();
  const data = {
    labels: [`${t('have not Cons')}`, `${t('have Cons')}`],
    datasets: [
      {
        label: `${t('schools number')}`,
        data: [props.schoolStatics.no_issues, props.schoolStatics.issues],
        backgroundColor: ['#182938', '#617586'],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={classes.container}>
      <h5>
        {t('Cons section') + ' ' + t(props.userData.role.replace('_admin', ''))}
      </h5>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
