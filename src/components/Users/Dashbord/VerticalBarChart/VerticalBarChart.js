import React, { useState } from 'react';
import classes from './VerticalBarChart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

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

const VerticalBarChart = props => {
  const { t } = useTranslation();
  const getFieldsName = data => {
    const keys = Object.keys(data).map(key => key.replace('_admin', ''));
    var need = [];
    keys.forEach(element => {
      // need to loop keys and get keys but remove key is doplcated
      element = element
        .replace('_valid', '')
        .replace('_invalid', '')
        .replace('_disciplined', '')
        .replace('_undisciplined', '')
        .replace('_noexist', '')
        .replace('_exits', '');

      need.push(element);
    });
    return need.filter((item, index) => need.indexOf(item) === index);
  };

  const keys = Object.values(props.fields);
  const [arr1, arr2] = keys.reduce(
    (acc, curr, i) => {
      acc[i % 2].push(curr);
      return acc;
    },
    [[], []]
  );

  const dataSet1 = arr2;
  const dataSet2 = arr1;
  const [fieldsName, setFieldsName] = useState(getFieldsName(props.fields));
  const labels = fieldsName.map(label => t(label));

  const data = {
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

  return (
    <div className={classes.container}>
      <h5>
        {t('Department stats') +
          ' ' +
          t(props.userData.role.replace('_admin', ''))}
      </h5>
      <Bar data={data} className={classes.datasets} />
    </div>
  );
};

export default VerticalBarChart;
