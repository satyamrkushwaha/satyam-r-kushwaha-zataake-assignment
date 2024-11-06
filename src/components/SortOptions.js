import React from 'react';

const SortOptions = ({ sortCriteria, setSortCriteria }) => {

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  return (
    <div className="sort-options"> Sort by:
      <select value={sortCriteria} onChange={handleSortChange}>
        <option value="popular">Most Popular</option>
        <option value="newest">Newest</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortOptions;
