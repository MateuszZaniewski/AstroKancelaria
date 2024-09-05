export default function enableSmoothScroll(selector) {
  const navLinks = document.querySelectorAll(selector);

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor link behavior

      // Get the target element by id from the href attribute
      const targetId = link.getAttribute("href").substring(1); // Remove the '#' character
      const targetElement = document.getElementById(targetId);

      // Scroll to the target element
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth", // Smooth scrolling behavior
          block: "start", // Align the top of the element with the top of the viewport
        });
      }
    });
  });
}
