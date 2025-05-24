import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function InfiniteShowcase() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.to(container, {
      x: '-50%', // Scroll half container width
      duration: 90, // Slower movement
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  // MODIFIED: Array of objects with src and caption
  const images = [
    { src: '/saudi.jpg', caption: 'Saudi Food Expo' },
    { src: '/incc.jpg', caption: 'INCC-Nutri-Cereal Event' },
    { src: '/india.jpg', caption: 'World Food India Event' },
    { src: '/nutrihub.jpg', caption: 'Best Startup Millet Manufacturing' },
    { src: '/gulf.jpg', caption: 'Gulfood Expo' },
    { src: '/gulffood.jpg', caption: 'Gulfood Event' }, // Assuming this is also Gulfood
  ];

  return (
    <div style={styles.wrapper}>
      <h2 className="text-center text-3xl font-bold mb-14 text-gray-800">
        Proudly Showcasing at Global Food & Innovation Platforms
      </h2>
      <div ref={containerRef} style={styles.container}>
        {/* Iterate over the images array, duplicating for infinite scroll */}
        {[...images, ...images].map((image, index) => (
          <div key={index} style={styles.imageWrapper}> {/* Added a wrapper for image and text */}
            <img
              src={image.src}
              alt={image.caption || `Showcase ${index + 1}`} // Use caption for alt text
              style={styles.image}
            />
            {/* ADDED: Caption below the image */}
            <p style={styles.caption}>{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    overflow: 'hidden',
    width: '100%',
    padding: '50px',
    background: '#fffbe6',
  },
  container: {
    display: 'flex',
    width: '200%', // Needs to be wide enough to contain duplicated images
    gap: '40px',
    alignItems: 'center',
  },
  imageWrapper: { // New style for the div containing image and caption
    flexShrink: 0, // Important for flex items
    textAlign: 'center', // Center the image and text
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '300px', // Match the image width
  },
  image: {
    width: '220px',
    height: '130px',
    objectFit: 'contain',
    borderRadius: '10px',
    marginBottom: '10px', // Space between image and caption
  },
  caption: { // New style for the caption text
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#4a4a4a',
    marginTop: '5px',
    whiteSpace: 'nowrap', // Prevent text from wrapping
    overflow: 'hidden', // Hide overflow if text is too long
    textOverflow: 'ellipsis', // Add ellipsis if text is too long
    maxWidth: '100%', // Ensure it respects the wrapper width
  }
};

export default InfiniteShowcase;