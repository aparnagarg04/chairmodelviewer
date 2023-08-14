import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbfe3bwq3UTP9dtb_4XsWT2xAxcZXovXU",
  authDomain: "chairmodelviewer.firebaseapp.com",
  projectId: "chairmodelviewer",
  storageBucket: "chairmodelviewer.appspot.com",
  messagingSenderId: "568897133240",
  appId: "1:568897133240:web:08afee78f099c2900df24d",
  measurementId: "G-LMYYND7LT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
