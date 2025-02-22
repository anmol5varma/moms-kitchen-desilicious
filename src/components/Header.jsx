import { SHOP_NAME } from '../constants';
import { useScreen } from '../context/ScreenContext';

const Header = () => {
    const {toggleTheme} = useScreen()
    return (
        <header>
            <div className='bg-color-dark p-2 font-bold text-white text-lg'>{SHOP_NAME}
                <button onClick={toggleTheme}>Theme</button>
            </div>
        </header>
    );
};

export default Header;