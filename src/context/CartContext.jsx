import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCartItems = localStorage.getItem('cartItems');
            return savedCartItems ? JSON.parse(savedCartItems) : [];
        } catch (error) {
            console.error('Error reading cart items from localStorage:', error);
            return [];
        }
    });
    

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const itemExists = prevItems.find(cartItem => cartItem.id === item.id);
            if (itemExists) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id ? { ...itemExists, quantity: itemExists.quantity + 1 } : cartItem
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => {
            const itemExists = prevItems.find(cartItem => cartItem.id === id);
            if (itemExists.quantity > 1) {
                return prevItems.map(cartItem =>
                    cartItem.id === id ? { ...itemExists, quantity: itemExists.quantity - 1 } : cartItem
                );
            }
            return prevItems.filter(cartItem => cartItem.id !== id);
        });
    };

    const clearCart = (ids) => {
        if (ids?.length)
            setCartItems(prevItems => prevItems.filter(cartItem => !ids.includes(cartItem.id)))
        else
            setCartItems([]);
    };

    const value = { cartItems, addToCart, removeFromCart, clearCart };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
