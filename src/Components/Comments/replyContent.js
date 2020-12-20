import React, { useEffect, useState } from "react";

const ReplyContent = (props) => {
  return (
    <div className="reply-comment">
      <div className="reply-comment__author">{props.reply_user_email}</div>
      <div className="reply-comment__text">{props.reply_body}</div>
    </div>
  );
};

export default ReplyContent;
