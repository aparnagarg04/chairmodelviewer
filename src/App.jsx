// src/App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import ProductImage from './components/ProductImage';
import ProductDescription from './components/ProductDescription';
import ColorPickerBox from './components/ColorPickerBox';

function App() {
  return (
    <div className="app">

      <div className="content">
        <Navbar />
        <div className='product-detail'>

          <ProductDescription />
          <ProductImage />
        </div>

      </div>
      <ColorPickerBox />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
