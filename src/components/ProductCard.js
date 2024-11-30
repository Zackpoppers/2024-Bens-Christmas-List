import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ name, link, image, details }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="product-card">
            <img src={require(`../assets/${image}`)} alt={name} />
            <h3>{name}</h3>
            <div className="buttons">
                <button className="action-button" onClick={() => setShowDetails(true)}>
                    Details
                </button>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button"
                >
                    Buy on Amazon
                </a>
            </div>
            {showDetails && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>{name}</h3>
                        <p><strong>Sizes:</strong> {details.sizes}</p>
                        <p><strong>Colors:</strong> {details.colors}</p>
                        <button
                            onClick={() => setShowDetails(false)}
                            className="close-button"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
