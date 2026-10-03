
const cardTemplate = (pokemon) => {
  const img = pokemon.sprites.other?.['official-artwork']?.front_default 
    || pokemon.sprites.front_default 
    || '';

  return `
    <div class="col">
      <div class="card h-100 text-center p-3 border-secondary-subtle">
        <span class="small text-muted text-end">#${String(pokemon.id).padStart(3, '0')}</span>
        <img src="${img}" class="pokemon-img mx-auto my-2" alt="${pokemon.name}">
        <div class="card-body p-0 mt-2">
          <h6 class="card-title text-capitalize mb-1 fw-normal">${pokemon.name}</h6>
          <span class="badge bg-light text-secondary border fw-normal text-uppercase">
            ${pokemon.types[0].type.name}
          </span>
        </div>
      </div>
    </div>
  `;
};

export const renderCards = (pokemons) => {
  const lista = Array.isArray(pokemons) ? pokemons : [pokemons];
  return lista.map(cardTemplate).join('');
};