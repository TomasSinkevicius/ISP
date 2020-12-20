import React, { useState } from "react";
import { useFirebase } from "../../../Context/firebase/FirebaseContext.js";

const AddComment = (props) => {
  const { addComment } = useFirebase();
  const add = (body, id, user_email, author_id) => {
    addComment(body, id, user_email, author_id);
    // window.location.reload();
    alert("Sekmingai pakomentuota");
  };
  const [value, setValue] = useState(props.body);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="write-comment">
      <textarea
        placeholder="Write your comment here!"
        className="write-comment__text"
        value={value}
        onChange={handleChange}
      ></textarea>
      <button
        className="write-comment__button"
        type="button"
        onClick={() =>
          add(value, props.movie_id, props.user_email, props.author_id)
        }
      >
        Comment
      </button>
    </div>
  );
};

export default AddComment;
