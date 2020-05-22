import React, { useState } from 'react';

import { Navbar } from './Components/Navbar/Navbar';
import { StudentsContainer } from './Components/StudentsContainer/StudentsContainer';


// TODO: ADD O ENDERECO DO ESTUDANTE + icone

function App() {

  const [ studentsList, setStudentsList ] = useState(
    [ 
      {
        name: "Rafael Rahal",
        hasSmartphone: true,
        has3G: true,
        hasWifi: false,
        hasResponsible: true,
      },
      {
        name: "Marcelo Dias",
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
        <StudentsContainer studentList={studentsList} />
      </div>
    </div>
  );
}

export default App;
