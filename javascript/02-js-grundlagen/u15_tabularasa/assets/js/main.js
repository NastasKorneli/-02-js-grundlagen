document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs nav ul li');
  const articles = document.querySelectorAll('.tabs article');

  // Function to activate a specific tab and article
  const activateTab = (index) => {
    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
      articles[i].classList.toggle('active', i === index);
    });
  };

  // Initial activation of the first tab
  activateTab(0);

  // Event listener for each tab
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(index));
  });
});


// Übung 15: TABula Rasa
// Einer Ihrer Kunden ist ein Schulungsunternehmen. Der Akademieleiter wünscht sich, dass die Beschreibungsseiten der Seminare etwas übersichtlicher dargestellt werden. Daher sollen die Seminarübersichtsseiten in Zukunft über Reiter (Tabs) verfügen, sodass Besucher zwischen den Bereichen

// - Überblick,
// - Themen,
// - Lernziele und
// - Termine
// hin- und herschalten können.

// Eine HTML-Vorlage (inkl. CSS) hat er bereits von einer Agentur erstellen lassen. Ihre Aufgabe besteht darin, den JS-Code zu ergänzen.
// Folgende Features müssen Sie dafür implementieren:

// - Nach dem Laden müssen alle article-Elemente bis auf das erste versteckt sein.
// - Beim Klicken auf ein li-Element soll das zugehörige article-Element aktiv (d.h sichtbar) werden und alle anderen inaktiv.
// - Um zu sehen, welcher Tab gerade aktiv ist, darf außerdem nur das li-Element des gerade sichtbaren Tabs die CSS-Klasse active haben.
