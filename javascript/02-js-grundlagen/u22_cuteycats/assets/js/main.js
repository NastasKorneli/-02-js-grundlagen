'use strict';

(() => {
  // === DOM & VARS =======
  const DOM = {
    catVoteItems: document.querySelectorAll('.list-cat-vote li'),
    cutestCatsList: document.querySelector('.list-cat-selection')
  };
  const MAX_CUTE_CATS = 3;

  // === INIT =============
  const init = () => {
    addEventListeners();
  };

  // === EVENTHANDLER =====
  const addEventListeners = () => {
    DOM.catVoteItems.forEach(item => {
      item.addEventListener('click', handleCatSelection);
    });
  };

  const handleCatSelection = (event) => {
    const selectedCat = event.currentTarget;

    // Check if the cat is already selected
    if (isCatAlreadySelected(selectedCat)) {
      alert("This cat is already in your favorites!");
      return;
    }

    // Check if max selection limit reached
    if (DOM.cutestCatsList.childElementCount >= MAX_CUTE_CATS) {
      alert(`You can only select up to ${MAX_CUTE_CATS} cats!`);
      return;
    }

    // Clone the selected cat and add to the Cutest Cats list
    const clone = selectedCat.cloneNode(true);
    DOM.cutestCatsList.appendChild(clone);
  };

  // === FUNCTIONS ========
  const isCatAlreadySelected = (selectedCat) => {
    return Array.from(DOM.cutestCatsList.children).some(cat =>
      cat.querySelector('span').textContent === selectedCat.querySelector('span').textContent
    );
  };

  init();
})();
