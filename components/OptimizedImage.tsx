"use client";

import React, { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  style?: React.CSSProperties;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  loading = "lazy",
  style,
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="533"%3E%3Crect fill="%23cbd5e1" width="400" height="533"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="16" fill="%2364748b" text-anchor="middle" dominant-baseline="middle"%3EImage Not Available%3C/text%3E%3C/svg%3E'
    );
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading={loading}
      style={style}
      onError={handleError}
    />
  );
}
