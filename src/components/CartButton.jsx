import { useCart } from '../context/CartContext';
import { useScreen } from '../context/ScreenContext';

const CartButton = () => {
    const { cartItems } = useCart();
    const { setToCartScreen } = useScreen();

    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return itemCount ? (
        <button onClick={() => setToCartScreen()} className="fixed left-1/2 transform -translate-x-1/2 bg-color-orange hover:bg-color-oranger text-white text-xs py-2 px-4 rounded-lg bottom-5">
            <div className='font-bold '>View cart</div>
            <div>{itemCount} item{itemCount > 1 ? 's' : ''}</div>
        </button>
    ) : null;
};

export default CartButton;