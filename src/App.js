import LandingPage from "./Components/LandingPage";
import { Route, Routes } from "react-router-dom";
import TodoList from "./Components/TodoList";
import SignUpForm from "./Components/SignUpForm";
import React, { useState} from "react"

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/sign-up" element={<SignUpForm/>}/>
        <Route path="/login" element={<LandingPage/>}/>
        <Route path="/todo-list" element={<TodoList/>}/>
      </Routes>
    </div>
  );
}

export default App;
