import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './FilterCard.module.css';
import { FilterContext } from '../../App';

function FilterCard({
  id,
  company,
  logo,
  isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools
}) {

  const { filters, handleFilterSelect } = useContext(FilterContext)

  return (
    <div className={styles.filterCard}>
      <div className={styles.filterCard__image}>
        <img src={require(`../../assets/company_logo/${logo}`).default} alt={company} />
      </div>
      <div className={styles.filterCard__details}>
        <div className={styles.filterCard__company}>
          <h3 className={styles.filterCard__companyName}>{company}</h3>
          <div className={styles.filterCard__featured}>
            {isNew &&
              <span className={styles.filterCard__badge}>New</span>
            }
            {featured &&
              <span className={styles.filterCard__badge__secondary}>Featured</span>
            }
          </div>
        </div>
        <h1 className={styles.filterCard__role}>{position}</h1>
        <ul className={styles.filterCard__roleDetails}>
          <li className={styles.filterCard__roleDetail}>{postedAt}</li>
          <li className={styles.filterCard__roleDetail}>{contract}</li>
          <li className={styles.filterCard__roleDetail}>{location}</li>
        </ul>
      </div>
      <ul className={styles.filterCard__tags}>
        <li className={styles.filterCard__tag} onClick={() => handleFilterSelect({ type: "role", data: role })}>{role}</li>
        <li className={styles.filterCard__tag} onClick={() => handleFilterSelect({ type: "level", data: level })}>{level}</li>
        {languages.length > 0 && languages.map((language, index) => (
          <li
            key={index}
            className={styles.filterCard__tag}
            onClick={() => handleFilterSelect({ type: "languages", data: language })}
          >{language}</li>
        ))}
        {tools.length > 0 && tools.map((tool, index) => (
          <li
            key={index}
            className={styles.filterCard__tag}
            onClick={() => handleFilterSelect({ type: "tools", data: tool })}
          >{tool}</li>
        ))}
      </ul>
    </div>
  )
}

FilterCard.propTypes = {
  company: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  isNew: PropTypes.bool.isRequired,
  featured: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
  contract: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  tools: PropTypes.array,
}

export default FilterCard
