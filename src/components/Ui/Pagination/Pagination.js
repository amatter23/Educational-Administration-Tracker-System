import react, { useState } from 'react';
import classes from './Pagination.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
const PaginationCustom = props => {
  // pagination handler state
  const { t } = useTranslation();
  const [pageNext, updatePageNext] = useState(props.pageNext);
  const [pagePrevious, updatePagePrevious] = useState(props.pagePrevious);
  const [pageUrl, updatePageUrl] = useState();
  return (
    <ul className={classes.pagination}>
      {pageNext === null ? (
        <button disabled={true} className={classes.btnPagenationDisable}>
          {t('Next')}

          <FontAwesomeIcon
            className={classes.iconePagenationDisable}
            icon={faForward}
          />
        </button>
      ) : (
        <button
          disabled={false}
          className={classes.btnPagenation}
          onClick={() => {
            props.getPaginationUrl(pageNext);
          }}
        >
          {t('Next')}

          <FontAwesomeIcon
            className={classes.iconePagenation}
            icon={faForward}
          />
        </button>
      )}
      {pagePrevious === null ? (
        <button disabled={true} className={classes.btnPagenationDisable}>
          {t('Previous')}

          <FontAwesomeIcon
            className={classes.iconePagenationDisable}
            icon={faBackward}
          />
        </button>
      ) : (
        <button
          disabled={false}
          className={classes.btnPagenation}
          onClick={() => {
            console.log(pagePrevious);
            props.getPaginationUrl(pagePrevious);
          }}
        >
          {t('Previous')}

          <FontAwesomeIcon
            className={classes.iconePagenation}
            icon={faBackward}
          />
        </button>
      )}
    </ul>
  );
};

export default PaginationCustom;
