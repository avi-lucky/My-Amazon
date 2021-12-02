import { createContext, useState } from 'react';

const CartContext = createContext({
    cart: [],
    totalCart: 0,
    addCart: (cartShop) => {},
    removeCart: (shopping) => {},
    itemIsCart: (shopping) => {}
});

export function CartContextProvider(props) {
    const [userCart, setUserCart] = useState([]);

    function addCartHandler(cartShop) {
        setUserCart((prevUserCart) => {
            return prevUserCart.concat(cartShop);
        });
    }

    function removeCartHandler(shopping) {
        setUserCart(prevUserCart => {
            return prevUserCart.filter(shop => shop.id !== shopping);
        });
    }

    function itemIsCartHandler(shopping) {
        return userCart.some(shop => shop.id === shopping);
    }

    const context = {
        cart: userCart,
        totalCart: userCart.length,
        addCart: addCartHandler,
        removeCart: removeCartHandler,
        itemIsCart: itemIsCartHandler
    };

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContext;