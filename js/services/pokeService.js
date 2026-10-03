const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemon = async (identifier) => {
  const query = String(identifier).trim().toLowerCase();
  const res = await fetch(`${BASE_URL}/pokemon/${query}`);

  if (!res.ok) {
    throw new Error('El Pokémon solicitado no existe');
  }

  return await res.json();
};

export const getInitialPokemons = async (limit = 16) => {
  const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);

  if (!res.ok) {
    throw new Error('Error al cargar la lista de Pokémon');
  }

  const data = await res.json();

  const promises = data.results.map(async (pokemon) => {
    const detailRes = await fetch(pokemon.url);
    if (!detailRes.ok) throw new Error('Error al obtener detalle');
    return await detailRes.json();
  });

  return await Promise.all(promises);
};