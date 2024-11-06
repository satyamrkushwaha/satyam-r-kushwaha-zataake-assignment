import React from 'react';

const CategoryFilter = ({ categories, setCategories }) => {

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategories(prev =>
      prev.includes(value) ? prev.filter(cat => cat !== value) : [...prev, value]
    );
  };

  return (
    <div className=" category-main-container filter-group">
      <h5 className='fw-bold pb-4'>CATEGORIES</h5>
      <div className="d-flex flex-column gap-2"> 
      <label>
        <input type="checkbox" value="Furniture" onChange={handleCategoryChange} /> Furniture
      </label>
      <label>
        <input type="checkbox" value="Lighting" onChange={handleCategoryChange} /> Lighting
      </label>
      <label>
        <input type="checkbox" value="Decoration" onChange={handleCategoryChange} /> Decoration
      </label>
      </div>
    </div>
  );
};

export default CategoryFilter;
