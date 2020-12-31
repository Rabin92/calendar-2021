// Variables

const mediumScreen = window.matchMedia('(min-width: 768px)');
const largeScreen = window.matchMedia('(min-width: 800px)');
const cardContainer = document.querySelector('.grid-container');
const input = document.querySelector('#js-search');
const clear = document.querySelector('.search');
const calendarContent = document.querySelectorAll('.calendar-content');

// Media Query

if (mediumScreen.matches) {
  cardContainer.classList.add(
    'animate__animated',
    'animate__lightSpeedInRight'
  );
}

// Search Functionality

input.addEventListener('keyup', e => {
  const theTargetValue = e.target.value.toUpperCase();
  const headerTitles = document.querySelectorAll('.header__title');

  headerTitles.forEach((headerTitle, i) => {
    const titleContent = headerTitle.textContent.toUpperCase();

    if (titleContent.includes(theTargetValue)) {
      calendarContent[i].style.display = 'block';
      if (largeScreen.matches) {
        calendarContent[i].style.maxWidth = '500px';
      }
    } else {
      calendarContent[i].style.display = 'none';
    }
  });
});

// Clear the value inserted by user

clear.addEventListener('click', e => {
  let val = input.value;

  for (let i = 0; i < calendarContent.length; i++) {
    if (val.length > 0) {
      if (e.target.className === 'cross') {
        input.value = '';
        calendarContent[i].style.display = 'block';
        calendarContent[i].style.maxWidth = 'none';
      }
    }
  }
});
