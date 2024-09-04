import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import cookieconsent from "vanilla-cookieconsent";

export const CookieConsent = () => {
  useEffect(() => {
    cookieconsent.init({
      palette: {
        popup: { background: "#000" },
        button: { background: "#f1d600" },
      },
      theme: "classic",
      content: {
        message:
          "This website uses cookies to ensure you get the best experience.",
        dismiss: "Got it!",
        link: "Learn more",
        href: "/cookie-policy", // Link to your cookie policy page
      },
    });
  }, []);
};
