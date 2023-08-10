// src/components/ProductDescription.jsx
import React from 'react';
import '../app.css'; // Import app.css
import ProductBox from './productbox';

const ProductDescription = () => {
    return (
        <div className="product-description">
            <div className="product-info">
                
                <h2>Find your Signature Seat</h2>
                <p>
                    Messenger bag is the most popular bag in fashion.
                    These types of bags usually go well with western
                    wear. It is most in demand among young women.
                    This bag has a long handle so it can be easily
                    carried on the shoulder. These bags are small
                    and medium in size. A few essentials can be
                    taken.
                </p>
                {/* <div className="color-options">
                    <div className="color-option" style={{ backgroundColor: 'red' }}></div>
                    <div className="color-option" style={{ backgroundColor: 'green' }}></div>
                    <div className="color-option" style={{ backgroundColor: 'blue' }}></div>
                </div> */}
            </div>
            <div className="product-buttons">
                <button>Add to Cart</button>
            </div>

            <ProductBox />
        </div>
    );
};

export default ProductDescription;
