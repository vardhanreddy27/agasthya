import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Your existing Lenis initialization code
    if (typeof window === "undefined") return;
    
    const lenisInterval = setInterval(() => {
      if (window.Lenis) {
        clearInterval(lenisInterval);

        const lenis = new window.Lenis({
          smooth: true,
          lerp: 0.075,
          wheelMultiplier: 1.5,
          infinite: false,
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        setTimeout(() => {
          lenis.start();
        }, 0);
      }
    }, 100);

    return () => clearInterval(lenisInterval);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}