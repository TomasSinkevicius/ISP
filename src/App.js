import React from "react";
import Header from "./Components/Header/header.jsx";
import Footer from "./Components/Footer/footer.jsx";
import Content from "./Components/Content/content.jsx";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
