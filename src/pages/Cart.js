import { useContext } from "react";

import CartContext from "../store/cart.context";
import ShopList from "../components/shopping/ShopList";

function Cart() {
  const cartCtx = useContext(CartContext);

  let content;

  if (cartCtx.totalCart === 0) {
    content = <p>You got no Carts yet. Start adding some?</p>;
  } else {
    content = <ShopList shops={cartCtx.cart} />;
  }

  return (
    <section>
      <h1>My Cart</h1>
      {content}
    </section>
  );
}

export default Cart;
