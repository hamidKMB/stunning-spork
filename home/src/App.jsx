import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

// using lazy to load the component only when it is needed
const Header = lazy(() => import("header/Header"));

import Footer from "footer/Footer";
import ErrorBoundries from "./ErrorBoundries";

const App = () => {
  console.log("homePage render");

  return (
    <div className="text-3xl text-center">
      <ErrorBoundries>
        <Suspense fallback="Loading  . . .">
          <Header app={{ name: "Product" }} />
        </Suspense>
      </ErrorBoundries>
      <div>Name: home</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
