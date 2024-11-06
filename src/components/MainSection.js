import React from 'react'
import FilterSidebar from './FilterSidebar'
import ProductList from './ProductList'
import SortOptions from './SortOptions'

export default function MainSection({ data, products, sortCriteria, setSortCriteria }) {
  return (<div className="main-section-container">
    <div className="results-sorting-container">
      <div>Showing <span className='fw-bold result'>{products.length}</span> of <span className='fw-bold result'>{data.length}</span> products</div>
      <div><SortOptions sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} /></div>
    </div>
    <ProductList products={products} />
  </div>)
}
