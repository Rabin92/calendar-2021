const largeScreen = window.matchMedia('(min-width: 768px)');
const cardContainer = document.querySelector('.grid-container');

if (largeScreen.matches) {
  cardContainer.classList.add(
    'animate__animated',
    'animate__lightSpeedInRight'
  );
}
