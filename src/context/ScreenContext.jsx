import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { SCREEN_TYPES } from '../constants';

const ScreenContext = createContext();

export const useScreen = () => useContext(ScreenContext);

export const ScreenProvider = ({ children }) => {
    const [currentScreen, setCurrentScreen] = useState(SCREEN_TYPES.HOME);
    const [searchText, setSearchText] = useState('');

    const setToCartScreen = () => setCurrentScreen(SCREEN_TYPES.CART)
    const setToListScreen = () => setCurrentScreen(SCREEN_TYPES.HOME)

    const value = { currentScreen, setToCartScreen, setToListScreen, searchText, setSearchText };

    return <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>;
};

ScreenProvider.propTypes = {
    children: PropTypes.node.isRequired,
};