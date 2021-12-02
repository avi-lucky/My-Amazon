import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import CartContext from "../../store/cart.context";

function MainNavigation() {
  const cartCtx = useContext(CartContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>My-Amazon</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart
              <span className={classes.badge}>{cartCtx.totalCart}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
