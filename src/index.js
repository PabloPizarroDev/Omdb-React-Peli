import React from "react";
import ReactDOM from "react-dom";

import List from "./conteiner/List";
import Navbar from "./components/NavBar";

import "bootswatch/dist/lux/bootstrap.min.css";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="bg-dark">
        <div className="container">
          <List />
        </div>
      </main>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
