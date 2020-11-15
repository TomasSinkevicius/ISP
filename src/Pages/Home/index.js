import React from "react";

import Header from "../../Components/Header/header.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import Content from "../../Components/Content/content.jsx";

const HomeScreen = () => {
  return (
    <div className="home-wrapper">
      <Header />
      <h1 style={{ textAlign: 'center' }}>Top action movies of all time</h1>
      <Content />
      <Footer />
    </div>
  );
}

export default HomeScreen;
