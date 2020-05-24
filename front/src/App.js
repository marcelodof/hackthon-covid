import React, { useState } from 'react';

import { Navbar } from './Components/Navbar/Navbar';
import { StudentsContainer } from './Components/StudentsContainer/StudentsContainer';
import { StudentsFilter } from './Components/StudentsFilter/StudentsFilter';
import { NumberOfStudents } from './Components/NumberOfStudents/NumberOfStudents'
import { DefaultStudents } from './Static/DefaultStudents'
import './App.css';

const defaultStudents = DefaultStudents

function App() {

    const [ studentsList, setStudentsList ] = useState(defaultStudents)
    //const possibleFilter = ["notSmartphone", "hasSmartphone", "hasWhatsApp", "hasWifi"]

    const [activeFilter, setActiveFilter] = useState(null);

    const [filteredStudentsMetrics, setFilteredStudentsMetrics] = useState({studentsCount:studentsList.length, studentsPercentage:'100%'});

    const [allStudentsList, setAllStudentsList] = useState(defaultStudents);

    const [sentHomeworkPercentage, setSentHomeworkPercentage] = useState(null);

  const filterStudents = (filter) => {
    const filteredStudents = defaultStudents.filter((student) => {
      switch (filter) {
        case "notSmartphone":
          return !student["hasSmartphone"] && student["hasAddress"];
        case "hasSmartphone":
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

  const filterHomeworkHasBeenSent = () => {
    const newAllStudents = []
    allStudentsList.forEach((student) => {
        let found = false
        studentsList.forEach((filteredStudent) => {
            if (student.name == filteredStudent.name) {
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
}

  const metricsText = `${defaultStudents.length} aluno${defaultStudents.length !== 1 ? 's' : ''}`
  
  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <div className="all-students">
          <StudentsContainer studentsList={defaultStudents} hasShadow>
              <NumberOfStudents metricsText={metricsText} />  
          </StudentsContainer>
        </div>
        <StudentsFilter 
          handleFilter={filterStudents} 
          studentsList={studentsList}
          studentsMetrics={filteredStudentsMetrics} 
          activeFilter={activeFilter} 
          homeworkHasBeenSent={filterHomeworkHasBeenSent}/>
      </div>
    </div>
  );
}

export default App;
