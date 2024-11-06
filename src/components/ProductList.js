import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
export default function ProductList( {products} ) {
   
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}
