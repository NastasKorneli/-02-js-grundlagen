'use strict';

(() => {
  // === DOM & VARS =======
  const DOM = {};
  DOM.newsboard = document.querySelector('.newsboard');
  DOM.content = DOM.newsboard.querySelector('.newsboard_content');

  DOM.btnPrev = DOM.newsboard.querySelector('button[title="prev"]');
  DOM.btnNext = DOM.newsboard.querySelector('button[title="next"]');

  let currentMessageNumber = 1;

  // console.log(DOM);

  // === INIT =============
  const init = () => {
    showFirstMessage();

    DOM.btnPrev.addEventListener('click', onClickPrev);
    DOM.btnNext.addEventListener('click', onClickNext);
  };

  // === EVENTHANDLER =====

  const onClickPrev = (e) => {
    showMessageByNumber(--currentMessageNumber);
  };
  const onClickNext = (e) => {
    showMessageByNumber(++currentMessageNumber);
  };

  // === XHR/FETCH ========

  // === FUNCTIONS ========
  const showMessageByNumber = (nr) => {
    DOM.content.innerHTML = MESSAGES[nr - 1];
  };

  const showFirstMessage = () => {
    showMessageByNumber(1);
  };

  init();
})();

// Übung 10: Newsboard: Das geht noch besser
// Das Newsboard wartet noch auf das Vervollständigen seiner Funktionen.

// 1 Belege die Links » und « mit Funktionalität. Der Link mit der Aufschrift « soll es erlauben, zur ersten Nachricht zu springen, der Link » zur letzten.

// 2 Der bisher eher sinnlose rote Kreis in der linken oberen Ecke soll nun die Gesamtanzahl der Nachrichten anzeigen. Schreibe eine Funktion, die diese Anzahl ausliest und in das <span> mit der Klasse message_number einträgt.

// 3 Unterstütze ab sofort das Navigieren durch die News mit der Tastatur. Die Pfeiltasten nach links und rechts sollen dabei jeweils die gleiche Funktionalität wie die Buttons < und > ermöglichen.

// 4 Auch das Springen auf die erste bzw. letzte Position soll nun mit Tastatur möglich sein. Die Tastenkombination dafür ist alt und die Pfeiltaste nach links (zur ersten Nachricht) bzw. rechts (zur letzten Nachricht).
