import { useCart } from '../context/CartContext';  // Assuming you have a cart context
import PropTypes from 'prop-types';
import AddButton from './AddButton';
import ShowVolume from './ShowVolume';

const CartItem = ({ item }) => {
    const { addToCart, removeFromCart } = useCart();

    return (
        <div className="flex text-xs items-center justify-between bg-white p-2 rounded">
            <img src={item.photoUrl} alt={item.title} className="w-12 h-12 mr-1 rounded-lg shadow" />
            <div>
                <p>{item.title}</p>
                <ShowVolume volume={item.volume} />
                <p className="font-bold">₹{item.mrp}</p>
            </div>
            <AddButton onAdd={() => addToCart(item)} onDelete={() => removeFromCart(item.id)} cart={item} />
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        photoUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        volume: PropTypes.string.isRequired,
        mrp: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
};

export default CartItem;
