import PropTypes from 'prop-types';
import { CATEGORIES } from "../constants";
import { useScreen } from '../context/ScreenContext';

const SearchBar = ({ selected, handleChange }) => {
  const { searchText, setSearchText } = useScreen()
  return (
    <div className="top-[56px] bg-white z-40">
      <div className="w-full p-2 bg-white z-50" role="search">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-2 text-sm rounded-md border"
          aria-label="Search products"
          value={searchText}
          onChange={evt => setSearchText(evt.target.value)}
        />
      </div>
      <div role="navigation" className='pb-1 overflow-x-auto whitespace-nowrap'>
        {CATEGORIES.map(category => (
          <span
            key={category}
            className={`capitalize inline-block px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 border-b-2 cursor-pointer${category === selected ? ' border-color-dark' : ''}`}
            onClick={() => handleChange(category)}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  selected: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
