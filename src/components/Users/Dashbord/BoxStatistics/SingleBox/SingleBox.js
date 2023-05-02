import React, { useState } from 'react';
import classes from './SingleBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faHashtag,
} from '@fortawesome/free-solid-svg-icons';
const SingleBox = props => {
  const [data, setData] = useState(props.data);
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={data.icon} size='xs' />
        </div>
        <h6>{data.title}</h6>
      </div>
      <div className={classes.content}>
        <FontAwesomeIcon icon={faHashtag} />
        <h3>123</h3>
      </div>
    </div>
  );
};

export default SingleBox;
