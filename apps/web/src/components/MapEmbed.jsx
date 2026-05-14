import React from 'react';

const MapEmbed = ({ embedUrl, title = 'Location Map', height = '400px' }) => {
  return (
    <div 
      className="map-container bg-muted shadow-lg border border-border/50"
      style={{ height: height !== '400px' ? height : undefined }}
    >
      <iframe
        src={embedUrl}
        title={title}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default MapEmbed;