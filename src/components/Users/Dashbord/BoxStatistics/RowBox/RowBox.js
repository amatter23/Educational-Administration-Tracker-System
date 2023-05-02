import React, { useState } from 'react';
import classes from './RowBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faHashtag,
} from '@fortawesome/free-solid-svg-icons';
import SingleBox from '../SingleBox/SingleBox';
const RowBox = props => {
  const [data, setData] = useState([
    {
      title: 'School In system',
      icon: faMagnifyingGlass,
    },
    {
      title: 'School In system',
      icon: faMagnifyingGlass,
    },
    {
      title: 'School In system',
      icon: faMagnifyingGlass,
    },
    {
      title: 'School In system',
      icon: faMagnifyingGlass,
    },
  ]);
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <SingleBox data={data[0]} />
        <SingleBox data={data[1]} />
        <SingleBox data={data[2]} />
      </div>
    </div>
  );
};

export default RowBox;
