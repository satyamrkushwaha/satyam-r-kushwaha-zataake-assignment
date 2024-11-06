import React from 'react';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import BrandFilter from './BrandFilter';
import AvailabilityFilter from './AvailabilityFilter';

const FilterSidebar = ({ 
  categories, 
  setCategories, 
  priceRange, 
  setPriceRange, 
  brands, 
  setBrands, 
  availability, 
  setAvailability 
}) => {
  return (
    <div className="filter-sidebar">
      <CategoryFilter categories={categories} setCategories={setCategories} />
      <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
      <BrandFilter brands={brands} setBrands={setBrands} />
      <AvailabilityFilter availability={availability} setAvailability={setAvailability} />
    </div>
  );
};

export default FilterSidebar;
