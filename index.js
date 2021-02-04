const SWAPI_URL = 'http://swapi.dev/api/';

init();

async function init() {

  const people = await getPeople();

  const films = await getFilms();

  renderPeople(people);

  renderFilms(films);
}

async function getPeople() {
  /* need to request people from  http://swapi.dev/api/people/ */

  return [];
}

async function getFilms() {
  /* need to request people from  http://swapi.dev/api/films/ */

  return [];
}

function renderPeople(peopleData) {
  /* need to render <li> for every `peopleData` array item in <ul> with id="list-of-people">  */
}

function renderFilms(filmsData) {
  /* need to render <li> for every `filmsData` array item in <ul> with id="list-of-films">  */
} 