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

  

  const filterStudents = (filter) => {
    setStudentsList(defaultStudents.filter((student) => {
      if (filter === "notSmartphone") {
        return !student["hasSmartphone"] && student["hasAddress"];
      } else if (filter === "hasSmartphone") {
        return student[filter] && !student["hasWhatsApp"];
      } else if (filter === "hasWhatsApp") {
        return student[filter] && student["hasSmartphone"];
      } else if (filter === "hasWifi") {
        return student[filter] && student["hasSmartphone"]
      }
    }))
    setActiveFilter(filter);
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
