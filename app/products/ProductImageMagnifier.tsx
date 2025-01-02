import React, { useState } from "react";

interface ProductImageMagnifierProps {
  imageUrl: string; // URL of the image
  magnifierSize?: number; // Diameter of the magnifier in pixels
  zoomLevel?: number; // Magnification level
}

const ProductImageMagnifier: React.FC<ProductImageMagnifierProps> = ({
  imageUrl,
  magnifierSize = 150,
  zoomLevel = 2,
}) => {
  const [isMagnifierVisible, setIsMagnifierVisible] = useState<boolean>(false);
  const [magnifierPosition, setMagnifierPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseEnter = () => {
    setIsMagnifierVisible(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { top, left } = e.currentTarget.getBoundingClientRect();
    const x = e.pageX - left - window.pageXOffset;
    const y = e.pageY - top - window.pageYOffset;
    setMagnifierPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsMagnifierVisible(false);
  };

  const magnifierStyle: React.CSSProperties = {
    display: isMagnifierVisible ? "block" : "none",
    position: "absolute",
    pointerEvents: "none",
    height: `${magnifierSize}px`,
    width: `${magnifierSize}px`,
    borderRadius: "50%",
    boxShadow: "0 0 0 4px rgba(168, 20, 167, 0.7)",
    backgroundColor: "white",
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `${zoomLevel * 200}%`,
    top: `${magnifierPosition.y - magnifierSize / 2}px`,
    left: `${magnifierPosition.x - magnifierSize / 2}px`,
    backgroundPositionX: `${-magnifierPosition.x * (zoomLevel - 1)}px`,
    backgroundPositionY: `${-magnifierPosition.y * (zoomLevel - 1)}px`,
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      
    >
      <img
        src={imageUrl}
        alt="Product"
        style={{ display: "block", maxWidth: "100%" }}
      />
      <div style={magnifierStyle} />
    </div>
  );
};

export default ProductImageMagnifier;
