import { createContext, useState } from 'react';

const CartContext = createContext({
    cart: [],
    totalCart: 0,
});

function CartContextProvider(props) {
    const [userCart, setUserCart] = useState([]);

    function addCartHandler(cartShop) {
        setUserCart(() => {});
    }

    function removeCartHandler() {}

    function itemIsCartHandler() {}

    const context = {
        cart: userCart,
        totalCart: userCart.length,
    };

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    );
}