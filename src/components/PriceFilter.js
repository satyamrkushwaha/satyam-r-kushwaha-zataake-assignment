import React from 'react';


const PriceFilter = ({ priceRange, setPriceRange }) => {
  const handleMinPriceChange = (e) => {
    const value = parseInt(e.target.value);
    if (value < priceRange[1]) {
      setPriceRange([value, priceRange[1]]);
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > priceRange[0]) {
      setPriceRange([priceRange[0], value]);
    }
  };

  return (
    <div className="price-main-container filter-group">
      <h5 className='fw-bold pb-4'>PRICE</h5>
      <div className="range-slider-container">
        <input
          type="range"
          min="0"
          max="1500"
          value={priceRange[0]}
          onChange={handleMinPriceChange}
          className="range-slider"
        />
        <input
          type="range"
          min="0"
          max="1500"
          value={priceRange[1]}
          onChange={handleMaxPriceChange}
          className="range-slider"
        />
        <div className="range-slider-track"></div>
        <div
          className="range-slider-progress"
          style={{
            left: `${(priceRange[0] / 1500) * 100}%`,
            width: `${((priceRange[1] - priceRange[0]) / 1500) * 100}%`
          }}
        ></div>
      </div>
      <p>Price Range: ${priceRange[0]} - ${priceRange[1]}</p>
    </div>
  );
};

export default PriceFilter;