import React from 'react';
import '../App.css';

const ProductBox = () => {
  return (
    <div className="product-box">
      <img src="rug.jpg" alt="Product Image" className="productbox-image" />
      <div className="productbox-buttons">
        <ul>
        <button className="productbox-button">chair</button>
       <button className="productbox-button">low chair</button>
        <button className="productbox-button">bar chair</button>
        <button className="productbox-button">baby chair</button>
        <button className="productbox-button">sofa</button>
        <button className="productbox-button">ottoman</button>
        </ul>
        {/* <div className='text' > Gropius Collection</div> */}
      </div>
    </div>
  );
};

export default ProductBox;
