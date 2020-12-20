import React, { useState } from "react";
import { useFirebase } from "../../../Context/firebase/FirebaseContext.js";

const EditComment = (props) => {
  const { editComment } = useFirebase();
  const [value, setValue] = useState(props.body);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="write-comment">
      <textarea
        placeholder={props.value}
        className="write-comment__text"
        value={value}
        onChange={handleChange}
      ></textarea>
      <button
        className="write-comment__button"
        type="button"
        onClick={() => editComment(value, props.id)}
      >
        Edit
      </button>
    </div>
  );
};

export default EditComment;
