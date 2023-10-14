import React from "react";
import ReactDOM from "react-dom";
import user from "./man.png";
import logo from "./spotify.png";

const SearchBar = () => {
  return (
    <div id="input">
      <input type="text" placeholder="Search here"></input>
    </div>
  );
};

const UserIcon = () => {
  return (
    <div id="user">
      <img id="userImg" src={user} />
      <p>User</p>
    </div>
  );
};

const Header = () => {
  return (
    <div id="main">
      <img id="logo" src={logo} />
      <SearchBar />
      <UserIcon />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
 