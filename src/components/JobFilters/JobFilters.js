import React, { useContext } from 'react'
import styles from './JobFilters.module.css'
import { FilterContext } from '../../App';
import Filter from '../Filter/Filter';

function JobFilters({ activeFilters }) {

  const { filters } = useContext(FilterContext)
  return (
    <div className={`${styles.job__filters} ${activeFilters ? '' : styles.job__filters__hidden}`}>
      <ul className={styles.job__filterList}>
        {
          // Role filters
          filters.role.length > 0 &&
          filters.role.map((roleFilter, index) => (
            <li
              key={index}
              className={styles.job__filterItem}>
              <Filter filterLabel={roleFilter} />
            </li>
          ))
        }
        {
          // Level filters
          filters.level.length > 0 &&
          filters.level.map((levelFilter, index) => (
            <li
              key={index}
              className={styles.job__filterItem}>
              <Filter filterLabel={levelFilter} />
            </li>
          ))
        }
        {
          // Languages filters
          filters.languages.length > 0 &&
          filters.languages.map((languagesFilter, index) => (
            <li
              key={index}
              className={styles.job__filterItem}>
              <Filter filterLabel={languagesFilter} />
            </li>
          ))
        }
        {
          // Tools filters
          filters.tools.length > 0 &&
          filters.tools.map((toolsFilter, index) => (
            <li
              key={index}
              className={styles.job__filterItem}>
              <Filter filterLabel={toolsFilter} />
            </li>
          ))
        }
      </ul>
      <button className={styles.job__filterClear}>Clear</button>
    </div>
  )
}

export default JobFilters
