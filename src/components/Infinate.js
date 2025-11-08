  import React, { useEffect, useRef } from 'react';
  import gsap from 'gsap';

  function InfiniteShowcase() {
    const containerRef = useRef(null);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      // GPU hint for smoother animation
      container.style.willChange = 'transform';

      const animation = gsap.to(container, {
        x: '-50%', // Scroll half container width
        duration: window.innerWidth < 768 ? 45 : 90, // Mobile faster
        ease: 'linear',
        repeat: -1,
      });

      return () => animation.kill(); // Cleanup on unmount
    }, []);

    const images = [
      { src: '/saudi.jpg', caption: 'Saudi Food Expo' },
      { src: '/incc.jpg', caption: 'INCC-Nutri-Cereal Event' },
      { src: '/india.jpg', caption: 'World Food India Event' },
      { src: '/nutrihub.jpg', caption: 'Best Startup Millet Manufacturing' },
      { src: '/gulf.jpg', caption: 'Gulfood Expo' },
      { src: '/gulffood.jpg', caption: 'Gulfood Event' },
      { src: '/plme.jpg', caption: 'PLME Expo-Dubai' }
    ];

    return (
      <div style={styles.wrapper} className="mb-5">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-14 text-gray-800">
          Proudly Showcasing at Global Food & Innovation Platforms
        </h2>
        <div ref={containerRef} style={styles.container}>
          {[...images, ...images].map((image, index) => (
            <div key={index} style={styles.imageWrapper}>
              <img
                src={image.src}
                alt={image.caption || `Showcase ${index + 1}`}
                style={styles.image}
              />
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
    padding: '40px 20px',
    background: '#F6F1EB',
  },
  container: {
    display: 'flex',
    width: '200%',
    gap: '40px', // more spacing between larger images
    alignItems: 'center',
  },
  imageWrapper: {
    flexShrink: 0,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '360px', // increased from 240px
  },
  image: {
    width: '100%',
    maxWidth: '360px', // increased from 240px
    height: '220px', // increased from 140px
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '12px',
  },
  caption: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#4a4a4a',
    marginTop: '6px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
    
  },
};


  export default InfiniteShowcase;


  //I am designing my products page with these catogories please make a very good desing which matches my website and make our section look very unique and intresting way for customers should get attracted at any cost