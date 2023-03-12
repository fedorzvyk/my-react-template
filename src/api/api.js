import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

// export async function getCharacters() {
//   const { data } = await axios.get(`/character`);
//   return data;
// }

export async function searchCharacter({ page, query }) {
  const { data } = await axios.get(`/character/?name=${query}&page=${page}`);
  return data;
}

export async function getCharacterById(id) {
  const { data } = await axios.get(`character/${id}`);
  return data;
}
