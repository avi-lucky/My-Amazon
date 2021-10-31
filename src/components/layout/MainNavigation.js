import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}> MY-AMAZON </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;