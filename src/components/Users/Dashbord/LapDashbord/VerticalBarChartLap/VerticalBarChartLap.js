import React, { useState } from 'react';
import classes from './VerticalBarChartLap.module.css';
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

const VerticalBarChartLap = props => {
  // todo add the work_validity to statics
  const { t } = useTranslation();
  // state to handle the fields to return the kyes and values
  const [fields, setFields] = useState(() => {
    // remove first two elemrnts from opject
    const { work_validity_exits, work_validity_noexist, ...rest } =
      props.fields;
    return { keys: Object.keys(rest), values: Object.values(rest) };
  });
  // state to handle the fields to return the kyes with arabic names
  const labels = fields.keys.map(label => t(label));
  const data = {
    labels,
    datasets: [
      {
        label: `${t('Number')}`,
        data: labels.map((label, index) => fields.values[index]),
        backgroundColor: '#182938',
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

export default VerticalBarChartLap;
