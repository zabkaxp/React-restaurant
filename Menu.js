import React from "react";
import "./Menu.css";

const Menu = ({ id, name, status, onclick }) => {
  return (
    <li key={id} className="menuItem" onClick={() => onclick(id)}>
      <p className={status ? "active" : "notActive"}>{name}</p>
    </li>
  );
};

export default Menu;
