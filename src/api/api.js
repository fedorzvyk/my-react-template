import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

// export async function getCharacters() {
//   const { data } = await axios.get(`/character`);
//   return data;
// }

export async function searchCharacter(query) {
  const { data } = await axios.get(`/character/?name=${query}`);
  return data;
}

export async function getCharacterById(id) {
  const { data } = await axios.get(`character/${id}`);
  return data;
}
