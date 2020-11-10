import React, { useState } from "react";
import './App.css';
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="App">
      <h1>Asha's To Do List</h1>
      <TodoList />
    </div>
  );
};
