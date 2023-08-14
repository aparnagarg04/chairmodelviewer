// src/App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import ProductImage from './components/ProductImage';
import ProductDescription from './components/ProductDescription';
import ColorPickerBox from './components/ColorPickerBox';



import { initializeApp } from "firebase/app";
import firebaseConfig from '../src/components/firebaseConfig'; // Import your Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCbfe3bwq3UTP9dtb_4XsWT2xAxcZXovXU",
//   authDomain: "chairmodelviewer.firebaseapp.com",
//   projectId: "chairmodelviewer",
//   storageBucket: "chairmodelviewer.appspot.com",
//   messagingSenderId: "568897133240",
//   appId: "1:568897133240:web:08afee78f099c2900df24d",
//   measurementId: "G-LMYYND7LT9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


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
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;
