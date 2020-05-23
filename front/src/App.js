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

    const [filteredStudentsPercentage, setFilteredStudentsPercentage] = useState(100);

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
      }
    })
    const percentage = (filteredStudents.length/defaultStudents.length).toFixed(2)*100
    //const studentsCount = filteredStudents.length
    setStudentsList(filteredStudents)
    setFilteredStudentsPercentage(percentage)
    setActiveFilter(filter);
  }
  
  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <StudentsContainer studentsList={studentsList} studentsMetrics={filteredStudentsPercentage}/>
        <StudentsFilter handleFilter={filterStudents}/>
      </div>
    </div>
  );
}

export default App;
