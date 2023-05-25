import react, { useState } from 'react';
import classes from './Search_Filter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

const SearchFilter = props => {

  //todo handle css styles
  // state to handle the translate
  const { t } = useTranslation();
  return (
    <div className={classes.search}>
      <input
        onChange={event => {
          props.search(event.target.value, props.role);
        }}
        type='text'
        placeholder={t('Search')}
        style={{ height: '80%' }}
      />
      <Select
        style={{ fontSize: '8px' }}
        placeholder={t('filter py level')}
        options={[
          { value: 'primary', label: t('primary') },
          { value: 'intermediate', label: t('intermediate') },
          { value: 'secondary', label: t('secondary') },
        ]}
        onChange={event => {
          props.filter(event.value, props.role);
        }}
      ></Select>
    </div>
  );
};

export default SearchFilter;
