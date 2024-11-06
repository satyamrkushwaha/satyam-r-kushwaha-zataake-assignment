import React from 'react'
import '../styles.css';
import MainSection from '../components/MainSection';
import FilterSidebar from '../components/FilterSidebar';
import { useState, useEffect } from 'react';
import SortOptions from '../components/SortOptions';




export default function Home() {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 1500]);
    const [brands, setBrands] = useState([]);
    const [availability, setAvailability] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('popular');

    const filterProducts = () => {
        let filtered = products;

        if (categories.length > 0) {
            filtered = filtered.filter(product => categories.includes(product.category));
        }

        filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);

        if (brands.length > 0) {
            filtered = filtered.filter(product => brands.includes(product.brand));
        }

        if (availability.length > 0) {
            filtered = filtered.filter(product => availability.includes(product.availability));
        }

        switch (sortCriteria) {
            case 'popular':
              filtered = filtered.sort((a, b) => b.rating - a.rating);
              break;
            case 'newest':
              filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
              break;
            case 'priceLowHigh':
              filtered = filtered.sort((a, b) => a.price - b.price);
              break;
            case 'priceHighLow':
              filtered = filtered.sort((a, b) => b.price - a.price);
              break;
            default:
              break;
          }

        setFilteredProducts(filtered);
    };


    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data.products);
                setFilteredProducts(data.products);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        filterProducts();
    }, [categories, priceRange, brands, availability, sortCriteria]);

    return (
        <div className="home-main-container container">
            <FilterSidebar
                categories={categories}
                setCategories={setCategories}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                brands={brands}
                setBrands={setBrands}
                availability={availability}
                setAvailability={setAvailability}
            />
            <MainSection products={filteredProducts} data={products} sortCriteria={sortCriteria} setSortCriteria={setSortCriteria}  />
        </div>
    )
}
