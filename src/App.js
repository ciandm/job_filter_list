import React, { useState } from 'react';
import Header from './components/Header/Header';
import JobFilters from './components/JobFilters/JobFilters';
import JobsContainer from './containers/JobsContainer/JobsContainer';
import FilterCard from './components/FilterCard/FilterCard';
import customData from './data/data.json';

function App() {

  const [filters, setFilters] = useState({
    role: '',
    level: '',
    languages: [],
    tools: []
  });


  const activeFilters = (filters.role.length === 0 && filters.level.length === 0 && filters.languages.length === 0 && filters.tools.length === 0) ? false : true

  function handleFilterSelect(obj) {
    // if (filters.includes(filter)) return;

    if (obj.type === 'role') {
      if (filters.role.includes(obj.data)) return;
      setFilters(prevFilters => ({
        ...prevFilters,
        role: [...prevFilters.role, obj.data]
      }))
    }

    if (obj.type === 'level') {
      if (filters.level.includes(obj.data)) return;
      setFilters(prevFilters => ({
        ...prevFilters,
        level: [...prevFilters.level, obj.data]
      }))
    }

    if (obj.type === 'languages') {
      if (filters.languages.includes(obj.data)) return;
      setFilters(prevFilters => ({
        ...prevFilters,
        languages: [...prevFilters.languages, obj.data]
      }))
    }

    if (obj.type === 'tools') {
      if (filters.tools.includes(obj.data)) return;
      setFilters(prevFilters => ({
        ...prevFilters,
        tools: [...prevFilters.tools, obj.data]
      }))
    }
  }

  function handleFilterRemove(type, filter) {
    if (type === 'role') {
      setFilters(prevFilters => ({
        ...prevFilters,
        role: ''
      }))
    }

    if (type === 'level') {
      setFilters(prevFilters => ({
        ...prevFilters,
        level: ''
      }))
    }

    if (type === 'languages') {
      let newLanguages = [...filters.languages]
      newLanguages = newLanguages.filter(lang => lang !== filter)
      setFilters(prevFilters => ({
        ...prevFilters,
        languages: newLanguages
      }))
    }

    if (type === 'tools') {
      let newTools = [...filters.tools]
      newTools = newTools.filter(tool => tool !== filter);
      setFilters(prevFilters => ({
        ...prevFilters,
        tools: newTools
      }))
    }
  }

  function handleClearAllFilters() {
    setFilters({
      role: '',
      level: '',
      languages: [],
      tools: []
    })
  }

  function checkIfIsFiltered(obj) {

    let isFiltered = false;

    // reduce filters into an iterable array
    const filtersReduced = Object.values(filters).reduce((total, current) => {
      if (Array.isArray(current)) {
        current.forEach(c => {
          total.push(c);
        })
      } else if (current) {
        total.push(current);
      }
      return total;
    }, [])

    // reduce item tags to iterable array
    const itemsTags = Object.values(obj).reduce((total, current) => {
      if (Array.isArray(current)) {
        current.forEach(c => {
          total.push(c);
        })
      } else if (current) {
        total.push(current);
      }
      return total;
    }, [])

    // check if one of the filters is present on the item tag
    if (filtersReduced.every(filter => itemsTags.includes(filter))) {
      isFiltered = true;
    }

    return isFiltered
  }

  return (
    <>
      <Header />
      <FilterContext.Provider value={{
        filters,
        handleFilterSelect: handleFilterSelect,
        handleFilterRemove: handleFilterRemove,
        handleClearAllFilters: handleClearAllFilters
      }}>
        <JobsContainer>
          <JobFilters activeFilters={activeFilters} />
          {customData.map(job => {
            if (activeFilters) {
              const isFiltered = checkIfIsFiltered({
                role: job.role,
                level: job.level,
                languages: job.languages,
                tools: job.tools
              })
              if (isFiltered) {
                // returns filtered cards
                return (
                  <FilterCard
                    key={job.id}
                    id={job.id}
                    company={job.company}
                    logo={job.logo}
                    isNew={job.new}
                    featured={job.featured}
                    position={job.position}
                    role={job.role}
                    level={job.level}
                    postedAt={job.postedAt}
                    contract={job.contract}
                    location={job.location}
                    languages={job.languages}
                    tools={job.tools}
                  />
                )
              }
              return null;
            }
            return (
              <FilterCard
                key={job.id}
                id={job.id}
                company={job.company}
                logo={job.logo}
                isNew={job.new}
                featured={job.featured}
                position={job.position}
                role={job.role}
                level={job.level}
                postedAt={job.postedAt}
                contract={job.contract}
                location={job.location}
                languages={job.languages}
                tools={job.tools}
              />
            )
          }
          )}
        </JobsContainer>
      </FilterContext.Provider>
    </>
  );
}

export const FilterContext = React.createContext([])

export default App;