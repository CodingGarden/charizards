// const cardsElement = document.getElementById('cards');
const cardsElement = document.querySelector('#cards');

const apiUrl = 'https://api.pokemontcg.io/v1/cards?name=charizard';

async function getCharizardCards() {
  const response = await fetch(apiUrl);
  const json = await response.json();
  json.cards.forEach((card) => {
    const image = document.createElement('img');
    image.src = card.imageUrl;
    cardsElement.append(image);
  });
}

getCharizardCards();
