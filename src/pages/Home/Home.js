import { CharactersList } from 'components/CharactersList/CharactersList';
import { getCharacters } from 'api/api';
import { useState, useEffect } from 'react';
// import Filter from 'components/Filter/Filter';

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(({ results }) => {
      setCharacters(results);
    });
  }, []);

  return (
    <div>
      {/* <Filter></Filter> */}
      <CharactersList characters={characters} />
    </div>
  );
};

export default Home;
