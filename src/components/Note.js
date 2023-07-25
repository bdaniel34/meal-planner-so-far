import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Note({
  text,
  id,
  date,
  handleDeleteNote,
  option,
  options,
  image,
  category,
  container,
}) {
  return (
    <div className="recipes">
      <div>
        <span
          className="photo"
          style={{ backgroundImage: "url(" + image + ")" }}
        >
          <div>
            <AiFillCloseCircle
              className="delete-icon"
              onClick={() => handleDeleteNote(id)}
              size="2.3em"
            />
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </span>
        {/* <div id="namecontainer">{text}</div> */}
        <Link to="./folder">
        {text}
        </Link>
        <div>{container}</div>
        <h1>{date}</h1>
        <h2>{option}</h2>
        <h2>{options}</h2>
        <h2>{category}</h2>
      </div>
    </div>
  );
}
