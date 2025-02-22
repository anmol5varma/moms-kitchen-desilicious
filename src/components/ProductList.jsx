import ProductCard from './ProductCard';
import { CATEGORIES, PRODUCT_LIST } from '../constants';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useScreen } from '../context/ScreenContext';

const ProductList = ({ category }) => {
    const { searchText } = useScreen()

    const filteredProducts = useMemo(() => {
        if (searchText)
            return PRODUCT_LIST.filter(product => (category === CATEGORIES[0] || product?.category === category) && product?.title?.toLowerCase()?.includes(searchText?.toLowerCase()))
        return PRODUCT_LIST.filter(product => category === CATEGORIES[0] || product?.category === category);
    }, [category, searchText]);

    return (
        <div className="container mb-20 px-4 mt-4">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        photoUrl={product.photoUrl}
                        title={product.title}
                        mrp={product.mrp}
                        category={product.category}
                        volume={product.volume}
                    />
                ))}
            </div>
        </div>
    );
};

ProductList.propTypes = {
    category: PropTypes.string.isRequired,
};

export default ProductList;
