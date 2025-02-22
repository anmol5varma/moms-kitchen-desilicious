import { useState } from 'react';
import CartItem from './CartItem';
import { useCart } from '../context/CartContext';  // Assuming you have a cart context
import { useScreen } from '../context/ScreenContext';
import { PHONE_NUMBER } from '../constants';
import { constructMessageOnWhatsapp } from '../util';

const CartList = () => {
    const { cartItems, clearCart } = useCart();
    const { setToListScreen } = useScreen()

    const subtotal = cartItems.reduce((total, item) => total + item.mrp * item.quantity, 0);
    const [address, setAddress] = useState('')

    const handleOrder = () => {
        const encodedMessage = constructMessageOnWhatsapp(groupByCategory, address)
        const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }

    const groupByCategory = cartItems.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {})

    return (
        <div className="bg-gray-100 overflow-y-auto p-4">
            <div className='flex justify-between text-xl mb-4'>
                <h2 className='font-bold'>My Cart</h2>
                <div className='flex'>
                    <button onClick={clearCart} className="bg-color-dark hover:bg-color-darker text-white text-xs rounded mr-2 p-2">Clear</button>
                    <button onClick={setToListScreen} className="bg-color-dark hover:bg-color-darker text-white text-xs rounded p-2">Back</button>
                </div>
            </div>
            <div>
                {Object.keys(groupByCategory)
                    .map(category => (
                        <div key={category} className='mb-2'>
                            <h5 className='capitalize'>{category}</h5>
                            {groupByCategory[category].map(item => <CartItem key={item.id} item={item} />)}
                        </div>
                    ))}
            </div>
            <div className="bg-white p-4 mt-4 rounded-lg shadow">
                <h3 className="font-bold text-lg">Bill details</h3>
                <div className="flex justify-between">
                    <p>Items total</p>
                    <p>₹{subtotal}</p>
                </div>
                <div>
                    <p>Address</p>
                    <textarea className='w-full text-xs p-2 border border-gray' value={address} onChange={(evt) => setAddress(evt.target.value)} />
                </div>
            </div>
            <button onClick={handleOrder} disabled={!address} className={`w-full text-white py-3 rounded-lg mt-4 ${address ? 'bg-color-orange' : 'bg-gray-400'}`}>
                Order
            </button>
        </div>
    );
};

export default CartList;
