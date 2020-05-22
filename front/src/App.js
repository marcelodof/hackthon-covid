import React, { useState } from 'react';

import { Navbar } from './Components/Navbar/Navbar';
import { StudentsContainer } from './Components/StudentsContainer/StudentsContainer';
import { StudentsFilter } from './Components/StudentsFilter/StudentsFilter';

import './App.css';

function App() {

  const [ studentsList, setStudentsList ] = useState(
    [ 
      {
        name: "Rafael Rahal",
        hasAddress: false,
        hasSmartphone: true,
        has3G: true,
        hasWifi: false,
        hasResponsible: true,
      },
      {
        name: "Marcelo Dias",
        hasAddress: true,
        hasSmartphone: true,
        has3G: true,
        hasWifi: true,
        hasResponsible: true,
      },
      {
        name: "Paulo de Paula",
        hasAddress: true,
        hasSmartphone: true,
        has3G: true,
        hasWifi: true,
        hasResponsible: false,
      },
      {
        name: "Matheus Ishimoto",
        hasAddress: true,
        hasSmartphone: false,
        has3G: false,
        hasWifi: false,
        hasResponsible: false,
      },
      {
        name: "Gabriel Pera",
        hasAddress: true,
        hasSmartphone: true,
        has3G: true,
        hasWifi: true,
        hasResponsible: true,
      }
    ])

  
  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <StudentsContainer studentsList={studentsList} />
        <StudentsFilter />
      </div>
    </div>
  );
}

export default App;
