import React, { useEffect, useState } from 'react';
import classes from './SchoolsQualified.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSchool } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from 'react-i18next';

const SchoolsQualified = props => {
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <FontAwesomeIcon icon={faSchool} />
        <div>{t(props.title)}</div>
      </div>
      <div className={classes.content}>
        <div className={classes.tableHeader}>
          <div className={classes.title}>{t('Schools Name')}</div>
          <div className={classes.title}>{t('School Level')}</div>
        </div>
        <div className={classes.tableContent}>
          {props.fields.map(field => (
            <div className={classes.row}>
              <div className={classes.title}>{field.school_name}</div>
              <div className={classes.title}>{t(field.school_level)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolsQualified;
