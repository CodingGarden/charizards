// const cardsElement = document.getElementById('cards');
const cardsElement = document.querySelector('#cards');
const Submit = document.getElementById('submit');
const p = document.getElementById('pokemons');

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

async function getPokemonCards(e) {
  e.preventDefault();
  cardsElement.innerHTML = '';
  const strUser = p.options[p.selectedIndex].text;
  var Url = 'https://api.pokemontcg.io/v1/cards?name=';
  var NewUrl = Url.concat(strUser);
  const response = await fetch(NewUrl);
  const json = await response.json();
  json.cards.forEach((card) => {
    const image = document.createElement('img');
    image.src = card.imageUrl;
    cardsElement.append(image);
    });
}

getCharizardCards();
Submit.addEventListener('submit', getPokemonCards);
