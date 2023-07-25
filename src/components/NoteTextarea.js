import React, { useState } from "react";

export default function NoteTextarea() {
     const [first, setfirst] = useState()
    const handleChange = (event) => {
        setfirst(event.target.value);
      };
    
  return (
    <textarea
      rows={8}
      cols={10}
      value={first}
      placeholder="Write here"
      onChange={handleChange}
    ></textarea>
  );
}
