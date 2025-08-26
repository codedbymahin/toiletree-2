import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FacilityGallery = ({ images = [], facilityName = '' }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images?.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images?.length) % images?.length);
  };

  if (!images?.length) {
    return (
      <div className="relative w-full h-64 bg-muted rounded-lg flex items-center justify-center">
        <Icon name="ImageOff" size={48} className="text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden bg-muted">
      <Image
        src={images?.[currentImageIndex]}
        alt={`${facilityName} - Image ${currentImageIndex + 1}`}
        className="w-full h-full object-cover"
      />
      {images?.length > 1 && (
        <>
          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-micro"
            aria-label="Previous image"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-micro"
            aria-label="Next image"
          >
            <Icon name="ChevronRight" size={20} />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-micro ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
            {currentImageIndex + 1} / {images?.length}
          </div>
        </>
      )}
    </div>
  );
};

export default FacilityGallery;