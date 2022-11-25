import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* <button
        onClick={(event) => {
          props.onDelete(props.id);
          event.preventDefault();
        }}
      > */}
      <DeleteIcon
        className="btn"
        onClick={(event) => {
          props.onDelete(props.id);
          event.preventDefault();
        }}
      />
      {/* //   </button> */}
    </div>
  );
}

export default Note;
