import React, { useState } from 'react';

import { Navbar } from './Components/Navbar/Navbar';
import { StudentsContainer } from './Components/StudentsContainer/StudentsContainer';
import { StudentsFilter } from './Components/StudentsFilter/StudentsFilter';
import { NumberOfStudents } from './Components/NumberOfStudents/NumberOfStudents'
import { ExerciseSent } from './Components/ExerciseSent/ExerciseSent'
import { DefaultStudents } from './Static/DefaultStudents'
import { ProgressBar } from './Components/ProgressBar/ProgressBar'
import './App.css';

const defaultStudents = DefaultStudents

function App() {

    const [studentsList, setStudentsList] = useState(defaultStudents)

    const [activeFilter, setActiveFilter] = useState(null);

    const [filteredStudentsMetrics, setFilteredStudentsMetrics] = useState({studentsCount:studentsList.length, studentsPercentage:'100%'});

    const [allStudentsList, setAllStudentsList] = useState(defaultStudents);

    const [showSucessAlert, setShowSucessAlert] = useState(false);

    const [sentHomeworkPercentage, setSentHomeworkPercentage] = useState(0);

    const [showFrontPage, setShowFrontPage] = useState(false);

  const filterStudents = (filter) => {
    const filteredStudents = defaultStudents.filter((student) => {
      switch (filter) {
        case "notAddress":
          return !student["hasAddress"];
        case "hasAddress":
          return student[filter] && !student["hasWhatsApp"];
        case "hasWhatsApp":
          return student[filter] && !student["hasWifi"];
        case "hasWifi":
          return student[filter]
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

  const dismissAlert = () => {
    setShowSucessAlert(false);
  }

  const filterHomeworkHasBeenSent = () => {
    const newAllStudents = []
    allStudentsList.forEach((student) => {
        let found = false
        studentsList.forEach((filteredStudent) => {
            if (student.name === filteredStudent.name) {
              filteredStudent.homeworkHasBeenSent = true
              found = true
              newAllStudents.push(filteredStudent)
        }
        })
        if (!found){
            newAllStudents.push(student)
          }
    })
    setAllStudentsList(newAllStudents)
    const sentHomeworkStudents = allStudentsList.filter((student) => student.homeworkHasBeenSent === true);
    setSentHomeworkPercentage((sentHomeworkStudents.length/allStudentsList.length).toFixed(2)*100)
    setShowSucessAlert(true);
  }

  const handleShowFrontPage = () => {
    setShowFrontPage(true)
  }

  const metricsText = `${defaultStudents.length} aluno${defaultStudents.length !== 1 ? 's' : ''} na turma`
  
  return (
    <div className="App">
      {showFrontPage
      ? <>
        <Navbar showClass={true}/>
        {showSucessAlert && <ExerciseSent handleDismissClick={dismissAlert} shouldShowAlert={showSucessAlert} /> }
        <div className="content-container">
            <div className="all-students">
            <StudentsContainer studentsList={defaultStudents} hasShadow>
              <div className="container-metrics">
                <NumberOfStudents metricsText={metricsText} />  
                <ProgressBar percentage={sentHomeworkPercentage}/> 
              </div>
            </StudentsContainer>
          </div>
          <StudentsFilter 
            handleFilter={filterStudents} 
            studentsList={studentsList}
            studentsMetrics={filteredStudentsMetrics} 
            activeFilter={activeFilter} 
            homeworkHasBeenSent={filterHomeworkHasBeenSent}/>
        </div>
      </>
      : <>
        <Navbar showClass={false}/>
        <div className='start-container'>
          <form className='start-form'>
            <label>Login</label>
            <input type='text'></input>
            <label>Senha</label>
            <input type='text'></input>
            <div className='start-button' onClick={() => handleShowFrontPage()}>
              Começar
            </div>
          </form>
        </div>
      </>}
    </div>
  );
}

export default App;
