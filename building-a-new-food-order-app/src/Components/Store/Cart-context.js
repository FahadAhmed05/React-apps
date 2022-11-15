import React from "react";
const cartContext = React.createContext({
    items: [],
    totalAmoumt: 0,
    addItem: (item) =>{},
    removeItem: (id) => {},
    clearCart: () => {}
});

export default cartContext