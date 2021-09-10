import "./Navbar.css";
/*Heading Component*/

import { Link } from "react-router-dom";

export function AppHeader() {
  return (
    <div className="blogSiteName">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
