import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import classes from './PieChartWorkersAffairs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartWorkersAffairs = props => {
  const { t } = useTranslation();
  const data = {
    labels: [
      `${t('percentage of absence > 10')}`,
      `${t('percentage of absence > 20')}`,
      `${t('percentage of absence > 30')}`,
      `${t('percentage of absence > 40')}`,
      `${t('percentage of absence > 50')}`,
    ],
    datasets: [
      {
        label: `${t('schools number')}`,
        data: [
          props.fields.percentage_of_absence_gt_10,
          props.fields.percentage_of_absence_gt_20,
          props.fields.percentage_of_absence_gt_30,
          props.fields.percentage_of_absence_gt_40,
          props.fields.percentage_of_absence_gt_50,
        ],
        //todo updates colors
        backgroundColor: [
          '#182938',
          '#273745',
          '#8B9CAA',
          '#525F6A',
          '#8C949C',
        ],
        borderColor: [],
        borderWidth: 0,
      },
    ],
  };
  return (
    <div className={classes.container}>
      <h5>{t('percentage of absence')}</h5>
      <Pie data={data} />
    </div>
  );
};

export default PieChartWorkersAffairs;
