import React from "react";
import Note from "./Note";

const NotesList = ({ notes,  handleDeleteNote }) => {
 
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          title={note.title}
          date={note.date}
          option={note.option}
          category={note.category}
          image={note.image}
          handleDeleteNote={handleDeleteNote}
          container={note.container}
        />
      ))}
    </div>
  );
};
export default NotesList;
