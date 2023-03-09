import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export async function getCharacters() {
  const { data } = await axios.get(`/character`);
  return data;
}

// export async function searchMovies(query) {
//   const { data } = await axios.get(
//     `search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
//   );
//   return data;
// }

export async function getCharacterById(id) {
  const { data } = await axios.get(`character/${id}`);
  return data;
}

// export async function getCast(id) {
//   const { data } = await axios.get(
//     `movie/${id}/credits?api_key=${KEY}&language=en-US`
//   );
//   return data;
// }

// export async function getReviews(id) {
//   const { data } = await axios.get(
//     `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
//   );
//   return data;
// }
