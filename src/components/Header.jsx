import { SHOP_NAME } from '../constants';

const Header = () => {
    return (
        <header>
            <div className='bg-color-dark p-2 font-bold text-white text-lg'>{SHOP_NAME}
            </div>
        </header>
    );
};

export default Header;