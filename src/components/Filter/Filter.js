import React from 'react'
import PropTypes from 'prop-types';
import styles from './Filter.module.css'


function Filter({ filterLabel }) {
  return (
    <>
      <div className={styles.job__filterTag}>
        {filterLabel}
      </div>
      <button className={styles.job__filterRemove}>&nbsp;</button>
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
