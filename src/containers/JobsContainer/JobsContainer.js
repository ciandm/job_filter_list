import React from 'react'
import styles from './JobsContainer.module.css';

function JobsContainer({ children }) {
  return (
    <div className={styles.jobs__container}>
      {children}
    </div>
  )
}

export default JobsContainer
