import React, { useState } from 'react';
import classes from './RowBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faHashtag,
  faBoxTissue,
  faSchool,
} from '@fortawesome/free-solid-svg-icons';
import SingleBox from '../SingleBox/SingleBox';
import { useTranslation } from 'react-i18next';

const RowBox = props => {
  // translation
  const { t } = useTranslation();
  // state to store the statics
  const [statics, setStatics] = useState(props.schoolStatics);
  const [data, setData] = useState([
    {
      title: `${t('Schools In system')}`,
      icon: faSchool,
      data: statics.total_schools,
    },
    {
      title: `${t('The last school added')}`,
      icon: faSchool,
      data: statics.last_school_added,
    },
    {
      title: `${t('Unanswered problems')}`,
      icon: faBoxTissue,
      data: statics.no_responses,
    },
  ]);
  return (
    <div className={classes.container}>
      {console.log(props.schoolStatics)}
      <div className={classes.content}>
        <SingleBox data={data[0]} />
        <SingleBox data={data[1]} />
        <SingleBox data={data[2]} />
      </div>
    </div>
  );
};

export default RowBox;
