import React from "react";

import Header from "../../Components/Header/header.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import Content from "../../Components/Content/content.jsx";
import Comments from "../Comments/index.js";

function App() {
  return (
    <div className="home-wrapper">
      <Header />
      <Comments />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
