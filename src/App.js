import React, { useState } from 'react';
import './App.css';

const images = [
  "https://picsum.photos/500/400/?random/1",
  "https://picsum.photos/500/400/?random/10",
  "https://picsum.photos/500/400/?random/20",
  "https://picsum.photos/500/400/?random/30",
  "https://picsum.photos/500/400/?random/40"
];

const App = () => {
  const [count, setCount] = useState(0);
  const width = 500;

  const prevImage = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const nextImage = () => {
    if (count < images.length - 1) {
      setCount(count + 1);
    }
  };

  return (
    <div className="container">
      <div className="image-container" style={{ transform: `translateX(-${width * count}px)` }}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`random ${index}`} />
        ))}
      </div>
      <div className="button-container">
        <button onClick={prevImage}>Prev</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default App;
