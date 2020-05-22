import React from 'react';
import Navbar from'./components/Navbar/Navbar'
import ExerciseList from './components/ExerciseList/ExerciseList'
import EditExercise from './components/EditExercise/EditExercise'
import CreateExercise from './components/CreateExercise/CreateExercise'
import CreateUser from './components/CreateUser/CreateUser'
import {Route,Switch} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <div>
        <Navbar />
        <Switch>
            <Route exact path='/'>
                <ExerciseList />
            </Route>
            <Route path="/edit/:id">
                <EditExercise />
            </Route>
            <Route path="/create">
                <CreateExercise />
            </Route>
            <Route path='/user'>
                <CreateUser />
            </Route>
        </Switch>
    </div>
  )
}

export default App;
