import React, { Component } from 'react';
import './App.css';
import Login from "./Login/Login";
import TodoList from "./TodoList/TodoList";
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={Login}/>
            <Route exact path="/list" component={TodoList}/>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
