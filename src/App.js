import React from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import AddNote from "./components/AddNote";
import {Link} from "react-router-dom";
export default function App() {
  const [Notes, setNotes] = useState([]);
  const [search, setsearch] = useState("");
 

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("save-to-localstorage"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("save-to-localstorage", JSON.stringify(Notes));
  }, [Notes]);
  const addNote = (text, category, image, container) => {
    // const date = new Date();

    const newNote = {
      id: nanoid(),
      text: text,
      // date: date.toLocaleDateString(),
      // option: date.toLocaleTimeString(),
      options: "Recipe",
      category: category,
      image: image,
      container: container,
    };
 

    const newNotes = [...Notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = Notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    console.log(search);
  };
  const searchNotes = () => {
    return Notes.filter(
      (note) =>
        search === null ||
        search === "" ||
        note?.text?.toLowerCase().includes(search) ||
        note?.category?.toLowerCase().includes(search)
    );
  };
  {Notes.map((note) => (
    <li key={note.id}>
      <Link to={`/folder/${note.id}`}>{note.text}</Link>
    </li>
  ))}

  return (
    <div className="container">
      <div className="row">
        <div className="col -6">
          <Search
            className="container-fluid"
            handleSearch={setsearch}
            totalNotes={Notes.length}
            totalselectedNotes={searchNotes().length}
          />
          {/* <NoteTextarea  /> */}
        </div>

        <div className="col -6">
          <AddNote handleAddNote={addNote} />
        </div>

 
        <NotesList notes={searchNotes()}   handleDeleteNote={deleteNote} />

      </div>
      {/* <Calendar /> */}
    </div>
  );
}
