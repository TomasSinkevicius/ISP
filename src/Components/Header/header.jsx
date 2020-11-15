import React from "react";
import NotificationBell from "../../assets/images/breadcrumb-separator.svg";
import UserProfileWidget from "../../assets/images/placeholder-profile.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header__top-nav">
        <a class="header__top-nav-item">Apie mus</a>
        <a class="header__top-nav-item">Filmai</a>
        <a class="header__top-nav-item">Top filmai</a>
        <a class="header__top-nav-item">Forumas</a>
        <figure className="header__top-nav-item user-profile-widget">
          <img src={UserProfileWidget} alt="user profile" />
        </figure>
      </div>
    </header>
  );
}

export default Header;
