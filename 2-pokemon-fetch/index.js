'use strict';

const VALID_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=5';
const INVALID_URL = 'https://pokeapi.co/api/v2/pokemons/?limit=5';

async function fetchJSON(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(`API error: ${data.error}`);
    }

    return data;
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
    throw error;
  }
}

function renderResults(pokemons) {
  const errorElement = document.querySelector('#error');
  errorElement.innerText = '';

  const pokemonsElement = document.querySelector('#json');
  pokemonsElement.innerText = JSON.stringify(pokemons, null, 2);
}

function renderError(err) {
  const pokemonsElement = document.querySelector('#json');
  pokemonsElement.innerText = '';

  const errorElement = document.querySelector('#error');
  errorElement.innerText = err;
}

async function main() {
  const button = document.querySelector('#button');
  const pokemonsElement = document.querySelector(`#json`);
  const errorElement = document.querySelector(`#error`);
  const option = document.querySelector('#option');

  button.addEventListener('click', async () => {
    const url = option.checked ? INVALID_URL : VALID_URL;

    try {
      pokemonsElement.innerText = '';
      errorElement.innerText = '';

      const data = await fetchJSON(url);
      renderResults(data);
    } catch (error) {
      renderError(error.message);
    }
  });

  option.addEventListener('click', () => {
    pokemonsElement.innerText = '';
    errorElement.innerText = '';
  });
}

window.addEventListener('load', main);
