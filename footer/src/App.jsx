import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Footer from "./components/Footer";

const App = () => (
  <React.Fragment>
    <Footer />
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: Footer</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
  </React.Fragment>
);
ReactDOM.render(<App />, document.getElementById("app"));
