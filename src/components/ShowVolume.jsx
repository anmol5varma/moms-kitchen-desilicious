import PropTypes from 'prop-types';

const parseVolume = (volume) => {
    const match = volume.match(/^(\d+)([a-zA-Z]+)$/);
    if (!match) return { number: null, unit: null };
    return { number: parseInt(match[1], 10), unit: match[2] };
};


const ShowVolume = ({ volume }) => {
    const { number, unit } = parseVolume(volume)
    return (
        <div className="text-gray-500">{number} <span className='lowercase'>{unit}</span></div>
    );
}

ShowVolume.propTypes = {
    volume: PropTypes.string.isRequired,
};

export default ShowVolume;