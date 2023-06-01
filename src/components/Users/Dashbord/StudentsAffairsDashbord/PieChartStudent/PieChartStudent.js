import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import classes from './PieChartStudent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartWorkersAffairs = props => {
  const { t } = useTranslation();
  const data = {
    labels: [
      `${t('percentage absent primary school')}`,
      `${t('percentage absent intermediate school')}`,
      `${t('percentage absent secondary school')}`,
    ],
    datasets: [
      {
        label: `${t('percentage absent')}`,
        data: [
          props.fields.percentage_of_absence_primary,
          props.fields.percentage_of_absence_intermediate,
          props.fields.percentage_of_absence_secondary
        ],
        backgroundColor: ['#182938', '#525F6A', '#8B9CAA'],
        borderColor: [],
        borderWidth: 0,
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

export default PieChartWorkersAffairs;
