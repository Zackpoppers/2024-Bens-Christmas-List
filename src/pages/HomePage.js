import React, { useState } from 'react';
import christmasList from '../data/data';
import CategorySection from '../components/CategorySection';
import styles from './HomePage.module.css';

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const filteredCategories = selectedCategory
        ? christmasList.filter((category) => category.category === selectedCategory)
        : christmasList;

    return (
        <main className={styles.main}>
            <h1>🎄 2024 Ben's Christmas List 🎁</h1>
            <div className={styles.filterButtons}>
                <button onClick={() => setSelectedCategory('')}>All</button>
                {christmasList.map((category, idx) => (
                    <button key={idx} onClick={() => setSelectedCategory(category.category)}>
                        {category.category}
                    </button>
                ))}
            </div>
            {filteredCategories.map((categoryData, idx) => (
                <CategorySection key={idx} {...categoryData} />
            ))}
        </main>
    );
};

export default HomePage;
