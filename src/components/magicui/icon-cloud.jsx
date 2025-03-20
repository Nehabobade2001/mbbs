import React, { useEffect, useRef, useState } from "react";
import "./ImageCloud.css"; // We'll create some basic styles separately

const radius = 250; // Radius of the cloud sphere

export default function ImageCloud({ imageUrls }) {
  const cloudRef = useRef(null);
  const [rotation, setRotation] = useState({ angleX: 0, angleY: 0 });

  useEffect(() => {
    const imgs = cloudRef.current.getElementsByClassName("cloud-image");

    // Position the images on the sphere
    Array.from(imgs).forEach((img, i) => {
      const phi = Math.acos(-1 + (2 * i) / imgs.length);
      const theta = Math.sqrt(imgs.length * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      img.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    });

    // Animation logic
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const angleX = (clientY / window.innerHeight - 0.5) * 2;
      const angleY = (clientX / window.innerWidth - 0.5) * 2;
      setRotation({ angleX, angleY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [imageUrls]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        ref={cloudRef}
        className="relative w-[500px] h-[500px] transform-style-3d rotate-animation"
        style={{
          transform: `rotateX(${rotation.angleX}rad) rotateY(${rotation.angleY}rad)`,
        }}
      >
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`cloud-img-${index}`}
            className="cloud-image absolute w-[60px] h-[60px] object-cover rounded-full transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}
