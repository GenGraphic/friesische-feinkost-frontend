import React, { useEffect, useState } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    let mounted = true;

    const loadImage = () => {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        if (mounted) {
          setImageSrc(src);
        }
      };
    };

    if (IntersectionObserver) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage();
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(document.querySelector(`.${className}`));
    } else {
      loadImage();
    }

    return () => {
      mounted = false;
    };
  }, [src, className]);

  return <img src={imageSrc} alt={alt} className={className} />;
};

export default LazyImage;
