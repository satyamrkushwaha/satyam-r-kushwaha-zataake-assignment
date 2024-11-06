import React from 'react'

export default function ProductItem({ product }) {

    console.log(product);
    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} loading='lazy' />
            <p>{product.category}</p>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
        </div>
    )
}
