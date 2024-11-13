import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active-link">All Tasks</NavLink>
        </li>
        <li>
          <NavLink to="/important" activeClassName="active-link">Important</NavLink>
        </li>
        <li>
          <NavLink to="/completed" activeClassName="active-link">Completed</NavLink>
        </li>
        <li>
          <NavLink to="/uncompleted" activeClassName="active-link">Uncompleted</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
