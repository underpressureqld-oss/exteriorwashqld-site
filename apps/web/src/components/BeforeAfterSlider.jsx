import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronsLeftRight } from 'lucide-react';

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeSrc, afterSrc, altText = "Before and after comparison" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden select-none group touch-pan-y shadow-lg">
      {/* After Image (Background) */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none">
        {afterSrc && afterSrc.webp && <source type="image/webp" srcSet={afterSrc.webp} />}
        {afterSrc && afterSrc.jpg && <source type="image/jpeg" srcSet={afterSrc.jpg} />}
        <img 
          src={afterSrc && afterSrc.defaultJpg ? afterSrc.defaultJpg : afterImage} 
          alt={`After ${altText}`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </picture>
      <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 text-sm font-semibold rounded-full backdrop-blur-sm pointer-events-none">
        After
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <picture>
          {beforeSrc && beforeSrc.webp && <source type="image/webp" srcSet={beforeSrc.webp} />}
          {beforeSrc && beforeSrc.jpg && <source type="image/jpeg" srcSet={beforeSrc.jpg} />}
          <img 
            src={beforeSrc && beforeSrc.defaultJpg ? beforeSrc.defaultJpg : beforeImage} 
            alt={`Before ${altText}`}
            loading="lazy"
            className="absolute inset-0 w-[100vw] h-full object-cover max-w-none pointer-events-none"
            style={{ width: '100%', minWidth: '100%' }}
          />
        </picture>
        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 text-sm font-semibold rounded-full backdrop-blur-sm pointer-events-none">
          Before
        </div>
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-primary">
          <ChevronsLeftRight className="w-5 h-5" />
        </div>
      </div>

      {/* Invisible Input Range */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 slider-thumb m-0 p-0"
        aria-label="Image comparison slider"
      />
    </div>
  );
};

export default BeforeAfterSlider;