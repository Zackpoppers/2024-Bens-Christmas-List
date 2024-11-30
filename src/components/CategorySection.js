import React from 'react';
import './CategorySection.css';
import ProductCard from './ProductCard';

const CategorySection = ({ category, items }) => {
    return (
        <section className="category-section">
            <h2>{category}</h2>
            <div className="product-grid">
                {items.map((item, idx) => (
                    <ProductCard key={idx} {...item} />
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
