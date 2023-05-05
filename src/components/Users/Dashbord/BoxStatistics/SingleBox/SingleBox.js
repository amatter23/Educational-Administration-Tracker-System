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
      {/* {console.log(data)} */}
      <div className={classes.title}>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={data.icon} size='xs' />
        </div>
        <h6>{data.title}</h6>
      </div>
      <div className={classes.content}>
        {/* <FontAwesomeIcon icon={faHashtag} /> */}
        <h4>{data.data}</h4>
      </div>
    </div>
  );
};

export default SingleBox;
