import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./ShopItem.module.css";
import CartContext from "../../store/cart.context";

function ShopItem(props) {
  const cartCtx = useContext(CartContext);

  const itemIsCart = cartCtx.itemIsCart(props.id);

  function toggleCartStatusHandler() {
    if (itemIsCart) {
      cartCtx.removeCart(props.id);
    } else {
      cartCtx.addCart({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleCartStatusHandler}>
            {itemIsCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ShopItem;
