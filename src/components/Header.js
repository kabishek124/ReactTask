import React from "react";
import { Link } from "react-router-dom";

export const Heading = () => {
  const [logBtn, setLogBtn] = React.useState("Login");
  
  return (
    <div className="justify-between flex border border-black">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=2000"
        />
      </div>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button
            className="login-button"
            onClick={() => {
              logBtn === "Logout" ? setLogBtn("Login") : setLogBtn("Logout");
            }}
          >
            {logBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
