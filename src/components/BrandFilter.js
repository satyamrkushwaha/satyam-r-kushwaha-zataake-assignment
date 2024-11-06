import React from 'react';

const BrandFilter = ({ brands, setBrands }) => {

  const handleBrandChange = (e) => {
    const value = e.target.value;
    setBrands(prev =>
      prev.includes(value) ? prev.filter(brand => brand !== value) : [...prev, value]
    );
  };

  return (
    <div className=" brand-main-container filter-group">
      <h5 className='fw-bold pb-4'>BRANDS</h5>
      <div className="d-flex flex-column gap-2">
        <label>
          <input type="checkbox" value="Poliform" onChange={handleBrandChange} /> Poliform
        </label>
        <label>
          <input type="checkbox" value="Roche Bobois" onChange={handleBrandChange} /> Roche Bobois
        </label>
        <label>
          <input type="checkbox" value="Edra" onChange={handleBrandChange} /> Edra
        </label>
        <label>
          <input type="checkbox" value="Kartell" onChange={handleBrandChange} /> Kartell
        </label>
      </div>
    </div>
  );
};

export default BrandFilter;
