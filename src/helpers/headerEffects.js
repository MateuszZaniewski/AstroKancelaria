export default function headerEffects() {
  document.addEventListener("astro:page-load", () => {
    let scrollPosition = 0;

    // Select elements
    const btn = document.querySelector(".mobile-menu-button");
    const closeBtn = document.querySelector(".mobile-menu-close");
    const menu = document.querySelector(".mobile-menu");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const closeIcon = document.querySelector(".close-icon");
    const navLinks = document.querySelectorAll(".nav-link");

    // Open mobile menu
    btn.addEventListener("click", () => {
      scrollPosition = window.scrollY;
      menu.classList.remove("hidden", "animation-menu-slide-out");
      menu.classList.add("animation-menu-slide-in");
      hamburgerIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");

      // Disable scrolling on the body
      document.body.style.position = "sticky";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.overflow = "hidden";
    });

    // Close mobile menu when clicking the "X" button
    closeBtn.addEventListener("click", () => {
      menu.classList.remove("animation-menu-slide-in");
      menu.classList.add("animation-menu-slide-out");

      setTimeout(() => {
        menu.classList.add("hidden");
        // Re-enable scrolling on the body
        document.body.style.position = "";
        document.body.style.overflow = "";

        hamburgerIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      }, 700); // Match the duration of the slide-up animation
    });

    // Smooth scrolling and close menu on link click
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor link behavior

        // Get the target element by id from the href attribute
        const targetId = link.getAttribute("href").substring(1); // Remove the '#' character
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Close the mobile menu first
          menu.classList.remove("animation-menu-slide-in");
          menu.classList.add("animation-menu-slide-out");

          setTimeout(() => {
            menu.classList.add("hidden");
            // Re-enable scrolling on the body
            document.body.style.position = "";
            document.body.style.overflow = "";

            // Scroll to the target element with offset for the navbar height
            const navbarHeight = navbar.getBoundingClientRect().height;
            const elementPosition =
              targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navbarHeight;

            // Scroll to the target element
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth", // Smooth scrolling behavior
            });
          }, 100); // Match the duration of the slide-up animation

          hamburgerIcon.classList.remove("hidden");
          closeIcon.classList.add("hidden");
        }
      });
    });

    const logo = document.querySelector("#logoKancelaria");
    const navbar = document.querySelector("#navbar");
    const about = document.querySelector("#about");
    const reviews = document.querySelector("#opinions");

    const changeHeaderBackground = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = navbar?.getBoundingClientRect().height;

      if (window.location.pathname.includes("blog")) {
        // Logika dla strony bloga
        if (scrollPosition > 5) {
          navbar.classList.remove("menu-transparent");
          navbar.classList.add("menu-light");
        } else {
          navbar.classList.remove("menu-light");
          navbar.classList.add("menu-transparent");
        }
      } else {
        // Logika dla strony głównej
        const aboutTop =
          about?.getBoundingClientRect().top - navbarHeight + window.scrollY;
        const reviewsTop =
          reviews?.getBoundingClientRect().top - navbarHeight + window.scrollY;

        if (scrollPosition === 0) {
          navbar.classList.remove("menu-dark");
          navbar.classList.remove("menu-light");
          navbar.classList.add("menu-transparent");
          logo.src = "/newLogo.svg";
        } else if (scrollPosition > 0 && scrollPosition <= aboutTop) {
          navbar.classList.remove("menu-transparent");
          navbar.classList.remove("menu-dark");
          navbar.classList.add("menu-light");
          logo.src = "/newLogo.svg";
        } else if (scrollPosition > aboutTop && scrollPosition <= reviewsTop) {
          navbar.classList.remove("menu-light");
          navbar.classList.remove("menu-transparent");
          navbar.classList.add("menu-dark");
          logo.src = "/newLogoForDarkBackground.svg";
        } else if (scrollPosition > reviewsTop) {
          navbar.classList.remove("menu-dark");
          navbar.classList.remove("menu-transparent");
          navbar.classList.add("menu-light");
          logo.src = "/newLogo.svg";
        }
      }
    };

    // Wywołaj funkcję przy załadowaniu strony oraz podczas scrollowania
    changeHeaderBackground();
    window.addEventListener("scroll", changeHeaderBackground);
  });
}
