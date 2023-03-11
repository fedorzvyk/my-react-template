import { CharactersList } from 'components/CharactersList/CharactersList';
// import { getCharacters } from 'api/api';
import { toast } from 'react-toastify';

import { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';
import { useSearchParams } from 'react-router-dom';
import { searchCharacter } from 'api/api';
import Filter from 'components/Filter/Filter';

const Home = () => {
  const [characters, setCharacters] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') ?? '';

  const [search, setSearch] = useState(searchQuery);

  useEffect(() => {
    const fetchData = async params => {
      // setStatus(STATUS.loading);
      try {
        const { results } = await searchCharacter(params);
        results.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        setCharacters(results);
        // setStatus(STATUS.success);
      } catch (error) {
        console.log(error.message);
        setCharacters(null);
        // setStatus(STATUS.error);
        toast.error('Bad request. Try to find another character');
      }
    };

    fetchData(searchQuery);
  }, [searchQuery]);

  const searchPosts = useMemo(() => {
    return debounce(search => {
      // setSearchParams({ page: 1, search });
      setSearchParams(search !== '' ? { search } : {});
    }, 500);
  }, [setSearchParams]);

  const handleSearch = event => {
    setSearch(event.target.value);
    searchPosts(event.target.value);
  };

  return (
    <div>
      <Filter onFilter={handleSearch} filter={search} />
      {characters && <CharactersList characters={characters} />}
    </div>
  );
};

export default Home;
