// src/components/ProductImage.jsx
import React, { useState, useEffect, useContext } from 'react';
// import firebase from "../firebase.js";
import '../App.css'; // Import app.css
import ColorPickerBox from './ColorPickerBox';




const ProductImage = () => {

  const [glbfile, setGlbfile] = useState("dublin_chair.glb");
  const [image, setImage] = useState("rug.jpg");

  // useEffect(() => { 
  //   db.collection('model').onSnapshot(snapshot => {
  //     setGlbfile(snapshot.docs.map(doc => ({id:doc.id, chairsrc:doc.data().chairsrc})))
  //   })
  // }, []);

  const changes = (filename, imagename) => {
    setGlbfile(filename)
    setImage(imagename)

  }

  useEffect(() => {
    const modelViewer = document.querySelector('#orbit-demo');
    const orbitCycle = [
      '45deg 55deg ',
      '-60deg 110deg ',
      modelViewer.cameraOrbit
    ];

    const intervalId = setInterval(() => {
      const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
      modelViewer.cameraOrbit =
        orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
    }, 4000);

    () => {
      clearInterval(intervalId);
    };
  }, []);


  // //modelviewer variants
  // useEffect(() => {
  //   const modelViewerVariants = document.querySelector("model-viewer#shoe");
  //   const select = document.querySelector('#model');

  //   modelViewerVariants.addEventListener('load', () => {
  //     const names = modelViewerVariants.availableVariants;
  //     for (const name of names) {
  //       const option = document.createElement('option');
  //       option.value = name;
  //       option.textContent = name;
  //       select.appendChild(option);
  //     }
  //     // Adds a default option.
  //     const option = document.createElement('option');
  //     option.value = 'default';
  //     option.textContent = 'Default';
  //     select.appendChild(option);
  //   });

  //   const handleVariantChange = (event) => {
  //     modelViewerVariants.variantName = event.target.value === 'default' ? null : event.target.value;
  //   };

  //   select.addEventListener('input', handleVariantChange);

  //   return () => {
  //     select.removeEventListener('input', handleVariantChange);
  //   };
  // }, []);


  useEffect(() => {
    const arStatusHandler = (event) => {
      if (event.detail.status === 'failed') {
        const error = document.querySelector('#error');
        error.classList.remove('hide');
        error.addEventListener('transitionend', () => {
          error.classList.add('hide');
        });
      }
    };

    const modelViewer = document.querySelector('#orbit-demo');
    modelViewer.addEventListener('ar-status', arStatusHandler);

    return () => {
      // Clean up the event listener when the component unmounts
      modelViewer.removeEventListener('ar-status', arStatusHandler);
    };
  }, []);

  return (
    <>
      <div className="product-image">
        <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.2.0/model-viewer.min.js"></script>
        {/* <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script> */}
        
        <model-viewer
          src={glbfile}
          ar 
          ar-modes="scene-viewer webxr quick-look"
          id="orbit-demo"
          interpolation-decay="200"
          camera-controls
          // camera-target="0m 0m 0m"
          camera-orbit="calc(-1.5rad + env(window-scroll-y) * 3rad)
           calc(70deg + env(window-scroll-y) * 100deg) 
           calc(5m - env(window-scroll-y) * )"
          touch-action="pan-y"
          alt="A 3d model"
          poster="poster.webp"
          shadow-intensity="2"
          shadow-softness="0.41"
          style={{ width: '100%', height: '100%'  }}>

          {/* <div id="error" className="hide">AR is not supported on this device</div>
          <button className="Hotspot" slot="hotspot-1" data-position="-69.01234799569716m 40.571968812814475m 3.9978310674245847m" data-normal="-0.38122152852810287m 0.06480450343768764m -0.9222095870900995m" data-visibility-attribute="visible">
            <div className="HotspotAnnotation">fancy sofa</div>
          </button>
          <div className="progress-bar hide" slot="progress-bar">
            <div className="update-bar"></div>
          </div>
          <button  id="ar-button">
            AR
          </button>
          <div id="ar-prompt">
            <img src="ar_hand_prompt.png" />
          </div> */}


        </model-viewer>

    


        {/* <script src="script.js"></script> */}
        <ColorPickerBox />
      </div>

      <div className="product-box">
        <img src={image} alt="Product Image" className="productbox-image" />
        <div className="productbox-buttons">
          <ul>
            <button className="productbox-buttone" onClick={() => changes("dublin_chair.glb", "chairchair.png")}>chair</button>
            <button className="productbox-buttone" onClick={() => changes("low_chairs.glb", "lowchair.png")}>low chair</button>
            <button className="productbox-buttone" onClick={() => changes("jonstrup_bar_chair.glb", "Screenshot (62).png")}>bar chair</button>
            <button className="productbox-buttone" onClick={() => changes("baby_chair.glb", "babychair.png")}>baby chair</button>
            <button className="productbox-buttone" onClick={() => changes("modern__sofa.glb", "sofa.png")}>sofa</button>
            <button className="productbox-buttone" onClick={() => changes("ottoman_stool.glb", "ottoman.png")}>ottoman</button>
          </ul>
          {/* <div className='text' > Gropius Collection</div> */}
        </div>
      </div>

    </>

  );
};

export default ProductImage;
