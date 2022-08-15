import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "./components/Header";

const App = () => (
  <React.Fragment>
    <Header app={{ name: "Micro-Hamid" }} />
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: header</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
  </React.Fragment>
);
ReactDOM.render(<App />, document.getElementById("app"));
