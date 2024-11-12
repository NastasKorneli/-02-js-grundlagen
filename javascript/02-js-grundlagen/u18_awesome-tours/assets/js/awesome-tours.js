'use strict';

(() => {
  // === DOM & VARS =======
  const DOM = {
    infoSection: document.getElementById('info'),
    tourImages: document.querySelectorAll('.tours-grid img'),
  };

  // === INIT =============
  const init = () => {
    // Add event listeners to each image
    DOM.tourImages.forEach((img) => {
      img.addEventListener('mouseenter', handleMouseEnter);
      img.addEventListener('mouseleave', handleMouseLeave);
    });
  };

  // === EVENTHANDLER =====
  const handleMouseEnter = (event) => {
    const img = event.currentTarget;

    // Retrieve landmark information from data attributes
    const description = img.getAttribute('data-description');
    const flagName = img.getAttribute('data-flag-name');
    const name = img.getAttribute('alt'); // Using the alt attribute for the name

    // Construct HTML for the info section with the flag image path directly
    DOM.infoSection.innerHTML = `
      <h3>
        <img src="assets/img/${flagName}.png" alt="${flagName}" title="${flagName}" class="flag">
        ${name}
      </h3>
      <p>${description}</p>
    `;
  };

  const handleMouseLeave = () => {
    // Reset the info section to its default message
    DOM.infoSection.innerHTML = `
      <h3></h3>
      <p>Move your mouse pointer over the images to read the descriptions here!</p>
    `;
  };

  // Initialize the event listeners
  init();
})();
