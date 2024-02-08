import React from 'react'

const ImgWithFallback = ({
    src,
    fallback,
    type = 'image/webp',
    alt,
    ...delegated
  }) => {
    return (
      <picture>
        <source srcSet={src} type={type} />
        <img src={fallback} alt={alt} {...delegated} />
      </picture>
    );
  };

export default ImgWithFallback 