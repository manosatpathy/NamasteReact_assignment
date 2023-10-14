import React from "react";
import ReactDOM from "react-dom";

const header = React.createElement("div", { className: "title" }, [
  React.createElement("div", {}, "this is h1"),
  React.createElement("div", {}, "this is h2"),
  React.createElement("div", {}, "this is h3"),
]);

const Header = () => {
  return (
    <div>
      <h1>this is h1</h1>
      <h2>this is h2</h2>
      <h3>this is h3</h3>
    </div>
  );
};

const headers = (
  <div className="title">
    <h1 className="title">this is h1</h1>
    <h2>this is h2</h2>
    <h3>this is h3</h3>
    <Header></Header>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headers);
