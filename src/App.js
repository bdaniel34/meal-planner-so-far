import React from "react";
import Mainfile from "./components/Mainfile";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <div className="frontpage">
      <h1>Meal organizer</h1>
      <div className="nav">
        <Link to="./Mainfile">Add Recipe</Link>
        <Link to="./search">Search</Link>
        <Link to="./Mainfile">Calendar</Link>
      </div>
      
    </div>
  );
}