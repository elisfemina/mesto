const asgard = new URL('../images/Asgard.jpg',
  import.meta.url);
const jotunheim = new URL('../images/Jotunheim.jpg',
  import.meta.url);
const maveth = new URL('../images/Maveth.jpg',
  import.meta.url);
const sakaar = new URL('../images/Sakaar.jpg',
  import.meta.url);
const vormir = new URL('../images/Vormir.jpg',
  import.meta.url);
const xandar = new URL('../images/Xandar.jpg',
  import.meta.url);

export const initialCards = [{
    link: asgard,
    name: 'Asgard'
  },
  {
    link: jotunheim,
    name: 'Jotunheim'
  },
  {
    link: maveth,
    name: 'Maveth'
  },
  {
    link: sakaar,
    name: 'Sakaar'
  },
  {
    link: vormir,
    name: 'Vormir'
  },
  {
    link: xandar,
    name: 'Xandar'
  }
];

// Селектор контейнера карточек
export const cardsContainer = '.cards__box';