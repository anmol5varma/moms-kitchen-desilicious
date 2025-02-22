import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { COLOR_THEME, SCREEN_TYPES } from '../constants';

const ScreenContext = createContext();

export const useScreen = () => useContext(ScreenContext);

export const ScreenProvider = ({ children }) => {
    const [currentScreen, setCurrentScreen] = useState(SCREEN_TYPES.HOME);
    const [searchText, setSearchText] = useState('');
    const [theme, setTheme] = useState(COLOR_THEME.LIGHT)

    const setToCartScreen = () => setCurrentScreen(SCREEN_TYPES.CART)
    const setToListScreen = () => setCurrentScreen(SCREEN_TYPES.HOME)
    const toggleTheme = () => setTheme((prevValue) => prevValue === COLOR_THEME.LIGHT ? COLOR_THEME.DARK : COLOR_THEME.LIGHT)

    const value = { currentScreen, setToCartScreen, setToListScreen, searchText, setSearchText, theme, toggleTheme };

    return <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>;
};

ScreenProvider.propTypes = {
    children: PropTypes.node.isRequired,
};