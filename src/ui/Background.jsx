import { useEffect, useState } from "react";
// comment
export const Background = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/statuaMobile.svg";
    img.onload = () => setImageLoaded(true);
    // Preload the larger image for larger screens
    if (window.innerWidth >= 640) {
      const imgLarge = new Image();
      imgLarge.src = "/statuaFull.svg";
      imgLarge.onload = () => setImageLoaded(true);
    }
  }, []);

  return (
    <>
      {/* Control background height and spacing with minHeight */}
      <div style={{ width: "100%", minHeight: "80vh" }}>
        <div
          style={{
            minHeight: "100vh",
            backgroundPosition: "center",
            backgroundImage: `url('/statuaMobile.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: -10,
            opacity: imageLoaded ? 1 : 0, // Hide background until loaded
            transition: "opacity 0.5s ease-in-out", // Smooth transition
          }}
          className="sm:bg-[url('/statuaFull.svg')] sm:bg-right-top lg:bg-top 2xl:mx-auto"
        ></div>
      </div>

      {/* Fixed background element */}
      <div
        className="fixed-background"
        style={{
          display: imageLoaded ? "block" : "none", // Hide until the image is loaded
        }}
      ></div>

      {/* Inline styles for fixed background */}
      <style>
        {`
          .fixed-background {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #0e1f2a;
            background-image: url('/statuaMobile.svg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            z-index: -1;
          }

          @media (min-width: 640px) {
            .fixed-background {
              background-image: url('/statuaFull.svg');
              background-position: right bottom;
            }
          }

          @media (min-width: 1024px) {
            .fixed-background {
              background-position: bottom;
            }
          }
        `}
      </style>
    </>
  );
};
