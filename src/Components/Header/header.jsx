import React from "react";
import NotificationBell from "../../assets/images/breadcrumb-separator.svg";
import UserProfileWidget from "../../assets/images/placeholder-profile.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header__top-nav">
        <a class="header__top-nav-item" href="/">Filmai</a>
        <a class="header__top-nav-item" href="/favorites/user1254689">Favoritai</a>
        <a class="header__top-nav-item" href="/forum">Forumas</a>
        <figure className="header__top-nav-item user-profile-widget">
          <a href='/account/user1254689'>
            <img src={UserProfileWidget} alt="user profile" />
          </a>
        </figure>
      </div>
    </header>
  );
}

export default Header;
