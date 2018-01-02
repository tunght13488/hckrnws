import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Todo/Footer";
import AsyncApp from "./containers/Reddit/AsyncApp";
import AddTodo from "./containers/Todo/AddTodo";
import VisibleTodoList from "./containers/Todo/VisibleTodoList";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-reddit">
          <AsyncApp/>
        </div>
        <div className="App-todo">
          <AddTodo/>
          <VisibleTodoList/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
