import React from 'react';
import classes from './LoadingRing.module.css';
const LoadingRing = () => {
  return (
    <div className={classes.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default LoadingRing;
