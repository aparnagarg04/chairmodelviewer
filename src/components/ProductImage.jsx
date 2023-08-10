// src/components/ProductImage.jsx
import React from 'react';
import '../App.css'; // Import app.css

const ProductImage = () => {
  return (
    <div className="product-image">
      <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.2.0/model-viewer.min.js"></script>
      <model-viewer
        src="dublin_chair.glb"
        ar
        ar-modes="scene-viewer webxr quick-look"
        camera-controls
        poster="poster.webp"
        shadow-intensity="2"
        shadow-softness="0.41"
        style={{ width: '100%', height: '100%' }}>
        <button className="Hotspot" slot="hotspot-1" data-position="-69.01234799569716m 40.571968812814475m 3.9978310674245847m" data-normal="-0.38122152852810287m 0.06480450343768764m -0.9222095870900995m" data-visibility-attribute="visible">
          <div className="HotspotAnnotation">fancy sofa</div>
        </button>
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>
        <button slot="ar-button" id="ar-button">
          View in your space
        </button>
        <div id="ar-prompt">
          <img src="ar_hand_prompt.png" />
        </div>
      </model-viewer>


      
      {/* <script src="script.js"></script> */}
    </div>
  );
};

export default ProductImage;
