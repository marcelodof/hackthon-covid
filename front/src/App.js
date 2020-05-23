import React, { useState } from 'react';

import { Navbar } from './Components/Navbar/Navbar';
import { StudentsContainer } from './Components/StudentsContainer/StudentsContainer';
import { StudentsFilter } from './Components/StudentsFilter/StudentsFilter';
import { NumberOfStudents } from './Components/NumberOfStudents/NumberOfStudents'

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
      hasWhatsApp: false,
      hasWifi: false,
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
    },
    {
      name: "Bruno Albertini",
      hasAddress: false,
      hasSmartphone: false,
      hasWhatsApp: false,
      hasWifi: false,
    }
  ]

function App() {

    const [ studentsList, setStudentsList ] = useState(defaultStudents)
    //const possibleFilter = ["notSmartphone", "hasSmartphone", "hasWhatsApp", "hasWifi"]

    const [activeFilter, setActiveFilter] = useState(null);

    const [filteredStudentsMetrics, setFilteredStudentsMetrics] = useState({studentsCount:studentsList.length, studentsPercentage:'100%'});

  const filterStudents = (filter) => {
    const filteredStudents = defaultStudents.filter((student) => {
      switch (filter) {
        case "notSmartphone":
          return !student["hasSmartphone"] && student["hasAddress"];
        case "hasSmartphone":
          return student[filter] && !student["hasWhatsApp"];
        case "hasWhatsApp":
          return student[filter] && student["hasSmartphone"];
        case "hasWifi":
          return student[filter] && student["hasSmartphone"]
        default:
          return null;
      }
    })
    const studentsPercentage = (filteredStudents.length/defaultStudents.length).toFixed(2)*100
    const studentsCount = filteredStudents.length
    setFilteredStudentsMetrics({studentsCount:studentsCount, studentsPercentage:studentsPercentage})
    setStudentsList(filteredStudents)
    setActiveFilter(filter);
  }

  const metricsText = `${studentsList.length} aluno - 100%`
  
  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <StudentsContainer studentsList={defaultStudents}>
          <NumberOfStudents metricsText={metricsText} />
        </StudentsContainer>
        <StudentsFilter 
          handleFilter={filterStudents} 
          studentsList={studentsList}
          studentsMetrics={filteredStudentsMetrics} 
          activeFilter={activeFilter} />
      </div>
    </div>
  );
}

export default App;
