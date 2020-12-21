import React, { useEffect, useState } from "react";
import Like from "../../../assets/images/like.png";
import DisLike from "../../../assets/images/dislike.png";
import TrashBin from "../../../assets/images/trash-bin.png";
import Edit from "../../../assets/images/edit.png";
import Plus from "../../../assets/images/plus.png";
import { useFirebase } from "../../../Context/firebase/FirebaseContext.js";
import EditComment from "../editComment/index.js";
import Reply from "../reply.js";

const Comment = (props) => {
  const {
    deleteComment,
    user,
    editComment,
    increaseCommentRating,
    decreaseCommentRating,
    giveUserPoints,
  } = useFirebase();
  const [commentInputOpen, setCommentInputOpen] = useState(false);
  const deleteCom = (id) => {
    deleteComment(id);
    alert("Ar tikrai norite istrinti?");
  };

  return (
    <div className="comment">
      <div className="comment__header">
        <div className="comment__author">{props.user_email}</div>
        {user.email != props.user_email ? (
          <div className="rating">
            <button
              className="comment-button"
              onClick={() => increaseCommentRating(props.id, props.rating)}
            >
              <img src={Like} alt="user profile" />
            </button>
            <span>{props.rating}</span>
            <button
              className="comment-button"
              onClick={() => decreaseCommentRating(props.id, props.rating)}
            >
              <img src={DisLike} alt="user profile" />
            </button>
            <button
              className="comment-button"
              onClick={() => giveUserPoints(props.author_id, props.user_points)}
            >
              <img src={Plus} alt="user profile" />
            </button>
          </div>
        ) : (
          <div>
            <button
              className="comment-button"
              type="button"
              onClick={() => deleteCom(props.id)}
            >
              <img src={TrashBin} alt="user profile" />
            </button>
            <button
              className="comment-button"
              onClick={() => setCommentInputOpen(!commentInputOpen)}
            >
              <img src={Edit} alt="user profile" />
            </button>
          </div>
        )}
      </div>
      <div className="comment-text">
        {commentInputOpen == false ? (
          props.body
        ) : (
          <EditComment id={props.id} value={props.body} />
        )}
      </div>
      {user.email == props.user_email ? (
        <>
          <div className="comment-author">{props.reply_user_email}</div>
          <div className="comment-text">{props.reply_body}</div>
        </>
      ) : null}
    </div>
  );
};

export default Comment;
