import {React,useEffect,useState} from 'react'
import './App.css';
import Classlist from './components/Classlist'
import api from '../src/api/addclass'
import AddClass from '../src/components/Addclass'
import AddStudent  from '../src/components/Addstudent'
import StudentList from '../src/components/Studentlist'
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {

  const [classes , setClasses] = useState([]);
  const [student , setStudent] = useState([]);

  // retrieve classes
const Retriveclasses  = async () => {
  const response = await api.get('/classes');
  return response.data;
}
const Retrivestudent  = async () => {
  const student = await api.get('/students');
  return student.data;
}

const addClassHandler = async (classes) => {
  const request = {
    id: uuidv4(),
    ...classes,
  };
  const response = await api.post("/classes", request);
  window.location.reload();
};

const addStudentHandler = async (student) => {
  console.log(student);
  const request = {
    id: uuidv4(),
    ...student,
  };
  const response = await api.post("/students", request);
  window.location.reload();
};

const removeClassHandler = async (id) => {
  await api.delete(`/classes/${id}`);
  const newClassesList = classes.filter((data) => {
    return data.id !== id;
  });

  setClasses(newClassesList);
};

const removeStudentHandler = async (id) => {
  console.log(id)
  await api.delete(`/students/${id}`);
  const newStudentList = student.filter((data) => {
    return data.id !== id;
  });

  setStudent(newStudentList);
};

useEffect(() => {
  const Classes  = async () => {
    const allclasses = await Retriveclasses();
    if(allclasses) setClasses(allclasses);
    console.log(allclasses);
  }
  const Students  = async () => {
    const allstudent = await Retrivestudent();
    if(allstudent) setStudent(allstudent);
    console.log(allstudent);
  }
  Classes();
  Students();

}, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/"  exact  render={(props) => (
              <Classlist
                {...props} classes={classes}
                getClassId={removeClassHandler}
              />
            )}
          />
          <Route path="/add-class" 
            render={(props) => (
              <AddClass {...props} addClassHandler={addClassHandler} />
            )}
          />
          <Route path="/add-student/:id" 
            render={(props) => (
              <AddStudent {...props} addStudentHandler={addStudentHandler} />
            )}
          />
          <Route path="/student-list/:id"
            render={(props) => (
              <StudentList {...props}  student={student} getStudentId={removeStudentHandler} />
            )} 
          />

          {/* <Route path="/edit" render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          /> */}

          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
