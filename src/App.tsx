import React from "react";
import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient">
          <div className="app">
            <Hero></Hero>
            <Demo></Demo>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
