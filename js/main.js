import { getInitialPokemons, getPokemon } from './services/pokeService.js';
import { renderCards } from './components/pokemonCard.js';
import { mostrarError } from './helpers/sweetAlert.js';

const contenedor = document.getElementById('pokemon-container');
const spinner = document.getElementById('loading-spinner');
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const btnReset = document.getElementById('btn-reset');

const cargarCatalogo = async () => {
  try {
    spinner.classList.remove('d-none');
    contenedor.innerHTML = '';

    const data = await getInitialPokemons(16);
    contenedor.innerHTML = renderCards(data);
  } catch (error) {
    mostrarError(error.message);
  } finally {
    spinner.classList.add('d-none');
  }
};

const buscarPokemon = async (e) => {
  e.preventDefault();
  const valor = input.value.trim();

  if (!valor) {
    mostrarError('Debe ingresar un nombre o ID');
    return;
  }

  try {
    spinner.classList.remove('d-none');
    contenedor.innerHTML = '';

    const data = await getPokemon(valor);
    contenedor.innerHTML = renderCards(data);
  } catch (error) {
    mostrarError(error.message);
  } finally {
    spinner.classList.add('d-none');
  }
};
 
const volverAlInicio = () => {
  input.value = '';
  cargarCatalogo();
};

form.addEventListener('submit', buscarPokemon);
btnReset.addEventListener('click', volverAlInicio);
document.addEventListener('DOMContentLoaded', cargarCatalogo);