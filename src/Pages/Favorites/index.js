import React from "react";

import Header from "../../Components/Header/header.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import Content from "../../Components/Content/content.jsx";

const FavoritesScreen = () => {
  return (
    <div className="home-wrapper">
      <Header />
      <h1 style={{ textAlign: 'center' }}>User favorite movie list</h1>
      <Content />
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
