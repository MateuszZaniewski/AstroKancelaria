import { useEffect, useState } from "react";
import "./Background.css"; // Import the CSS file

export const Background = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/statuaMobile.svg";
    img.onload = () => setImageLoaded(true);

    if (window.innerWidth >= 640) {
      const imgLarge = new Image();
      imgLarge.src = "/statuaFull.svg";
      imgLarge.onload = () => setImageLoaded(true);
    }
  }, []);

  return (
    <>
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
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          className="sm:bg-[url('/statuaFull.svg')] sm:bg-right-top lg:bg-top 2xl:mx-auto"
        ></div>
      </div>

      <div
        className="fixed-background"
        style={{
          display: imageLoaded ? "block" : "none",
        }}
      ></div>
    </>
  );
};
