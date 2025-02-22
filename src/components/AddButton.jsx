import PropTypes from 'prop-types';

const AddButton = ({ onAdd, onDelete, cart, className = '' }) => {
    return (
        <div className={className}>
            {
                cart ? (
                    <div className="flex items-center my-1">
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                            onClick={onDelete}
                        >
                            -
                        </button>
                        <span className="mx-2">{cart.quantity}</span>
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                            onClick={onAdd}
                        >
                            +
                        </button>
                    </div>
                ) : (<button onClick={onAdd} className="bg-color-dark hover:bg-color-darker text-white font-bold p-2 rounded">ADD</button>)
            }
        </div>
    )
};

AddButton.propTypes = {
    onAdd: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    className: PropTypes.string,
    cart: PropTypes.shape({
        quantity: PropTypes.number.isRequired
    })
}

export default AddButton;