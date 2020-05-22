import React, { useState } from 'react';

import { Navbar } from './Components/Navbar/Navbar';
import { StudentsContainer } from './Components/StudentsContainer/StudentsContainer';
import { StudentsFilter } from './Components/StudentsFilter/StudentsFilter';

import './App.css';

const defaultStudents = [ 
    {
      name: "Rafael Rahal",
      hasAddress: false,
      hasSmartphone: true,
      hasWhatsApp: true,
      hasWifi: false,
    },
    {
      name: "Marcelo Dias",
      hasAddress: true,
      hasSmartphone: true,
      hasWhatsApp: true,
      hasWifi: true,
    },
    {
      name: "Paulo de Paula",
      hasAddress: true,
      hasSmartphone: true,
      hasWhatsApp: true,
      hasWifi: true,
    },
    {
      name: "Matheus Ishimoto",
      hasAddress: true,
      hasSmartphone: false,
      hasWhatsApp: false,
      hasWifi: false,
    },
    {
      name: "Gabriel Pera",
      hasAddress: true,
      hasSmartphone: true,
      hasWhatsApp: true,
      hasWifi: true,
    }
  ]

function App() {

  const [ studentsList, setStudentsList ] = 
    useState(defaultStudents)
  const [ appliedFilters, setAppliedFilters] =
    useState({
      hasAddress: false,
      hasSmartphone: false,
      hasWhatsApp: false,
      hasWifi: false,
    })

  const applyFilters = (field) => {
    setAppliedFilters({...appliedFilters, field: true})
    setStudentsList(studentsList.filter((student) => {
        return student[field]
    }))
  }

  const removeFilters = (field) => {
    // Getting filter keys   
    const filtersToApply = Object.keys(appliedFilters)
        .filter((key) => {
            return appliedFilters[key] && field !== key
        })
    
    
    // filtersToApply.forEach(() => {
    //     newFilteredStudents = defaultStudents.filter((student) => {
    //         return student[appliedFilters]
    //     })
    // })

    setAppliedFilters({...appliedFilters, field: false})
    
  }

  const filterStudents = (field) => {
    appliedFilters[field] ? removeFilters(field) : applyFilters(field)
  }

  
  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <StudentsContainer studentsList={studentsList} />
        <StudentsFilter handleFilter={filterStudents}/>
      </div>
    </div>
  );
}

export default App;
