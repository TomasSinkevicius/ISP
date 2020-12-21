import React, { useEffect, useState } from "react";
import UserProfileWidget from "../../assets/images/placeholder-profile.jpg";
const ReplyContent = (props) => {
  return (
    <div className="reply-comment">
      <div className="reply-comment__author">
        <figure className="reply-comment__user-profile-widget">
          <img src={UserProfileWidget} alt="user profile" />
        </figure>
        {props.reply_user_email}
      </div>
      <div className="reply-comment__text">{props.reply_body}</div>
    </div>
  );
};

export default ReplyContent;
