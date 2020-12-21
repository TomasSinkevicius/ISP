import React, { useState } from "react";
import { useFirebase } from "../../Context/firebase/FirebaseContext.js";

const ReplyComment = (props) => {
  const { replyComment } = useFirebase();
  const add = (body, id, user_email, comment_id) => {
    replyComment(body, id, user_email, comment_id);
    // window.location.reload();
    alert("Sekmingai atsakyta į komentarą");
  };
  const [value, setValue] = useState(props.body);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="reply-comment">
      <textarea
        placeholder="Write your reply here!"
        className="reply-comment__write"
        value={value}
        onChange={handleChange}
      ></textarea>
      <button
        className="reply-comment__button"
        type="button"
        onClick={() =>
          add(value, props.movie_id, props.user_email, props.comment_id)
        }
      >
        Reply
      </button>
    </div>
  );
};

export default ReplyComment;
