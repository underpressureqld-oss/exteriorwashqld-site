import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileImage as ImageIcon } from 'lucide-react';

const GalleryItem = ({ image, title, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col border border-border/50"
    >
      <div className="relative bg-muted/30 aspect-auto flex items-center justify-center p-4 md:p-6 min-h-[250px] rounded-t-2xl">
        {/* Loading State */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50 animate-pulse rounded-t-2xl">
            <ImageIcon className="w-10 h-10 text-muted-foreground/30" />
          </div>
        )}

        {/* Error State */}
        {hasError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/50 text-muted-foreground p-4 text-center rounded-t-2xl">
            <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
            <span className="text-sm font-medium text-balance">Image failed to load</span>
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-auto object-contain transition-all duration-700 group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>
      <div className="p-5 border-t border-border flex-grow flex items-center justify-center text-center bg-card rounded-b-2xl z-10">
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      </div>
    </motion.div>
  );
};

export default GalleryItem;