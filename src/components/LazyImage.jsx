import React from 'react';
import {useInView} from "react-intersection-observer"

const LazyImage = ({ src, alt, className }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
  });

  return (
    <img
      ref={ref}
      src={inView ? src : ""}
      alt={alt}
      className={`lazy-image ${className || ""}`}
    />
  );
};

export default LazyImage;