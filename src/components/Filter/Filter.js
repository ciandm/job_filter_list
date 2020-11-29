import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import styles from './Filter.module.css'
import { FilterContext } from '../../App';


function Filter({ filterLabel, type }) {

  const { handleFilterRemove } = useContext(FilterContext);


  return (
    <>
      <div className={styles.job__filterTag}>
        {filterLabel}
      </div>
      <button
        className={styles.job__filterRemove}
        onClick={() => handleFilterRemove(type, filterLabel)}
      >&nbsp;</button>
    </>
  )
}

Filter.propTypes = {
  filterLabel: PropTypes.string.isRequired,
}

Filter.defaultProps = {
  filterLabel: 'Filter'
}

export default Filter
